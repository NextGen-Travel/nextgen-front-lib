/* eslint-disable @typescript-eslint/no-var-requires */

const fsx = require('fs-extra')
const path = require('path')
const axios = require('axios')
const { pick } = require('power-helper')
const { parse } = require('yaml')
const { compile } = require('json-schema-to-typescript')
const { js: jsBeautify } = require('js-beautify')

const baseUrl = 'https://raw.githubusercontent.com/NextGen-Travel/apis-doc/main'

/**
 * @param {string} content 
 */

const descBeautify = (content) => {
    let firstSpace = content.split('\n')[1].split(/[^\s]/)[0].length
    return content.split('\n').map(e => e.slice(firstSpace)).join('\n').trim()
}

/**
 * @typedef {import('openapi-types').OpenAPIV3_1.Document} Document
 * @typedef {import('openapi-types').OpenAPIV3_1.SchemaObject} SchemaObject
 * @typedef {import('openapi-types').OpenAPIV3_1.ArraySchemaObject} ArraySchemaObject
 * @typedef {import('openapi-types').OpenAPIV3_1.PathsObject} PathsObject
 * @typedef {import('openapi-types').OpenAPIV3_1.ParameterObject} ParameterObject
 * @typedef {import('json-schema').JSONSchema4} JSONSchema
 * multipart/form-data#json : 要使用formdata格式 但header帶的是json
 * @typedef {{
 *      path: string
 *      summary: string
 *      description: string
 *      method: 'get' | 'post' | 'put' | 'delete'
 *      body: null | Record<string, any>
 *      query: null | Record<string, any>
 *      response: null | Record<string, any>
 *      contentType: null | 'json' | 'form' | 'x-www-form-urlencoded' | 'multipart/form-data' | 'multipart/form-data#json'
 *  }} OutputObject 
 */

class OpenApiReader {
    /**
     * 
     * @param {string} file 
     * @param {Document} document 
     */

    constructor(file, document) {
        this.file = file
        this.document = document
    }

    getServiceName() {
        let first = this.file[0]
        let name = this.file.replace(/([-_][a-z])/ig, ($1) => {
            return $1.toUpperCase().replace('-', '').replace('_', '')
        }).slice(1)
        return first.toUpperCase() + name
    }

    /**
     * @param {SchemaObject} data 
     * @returns {JSONSchema}
     */

    schemaToJsonSchema(data)  {
        if (data['$ref']) {
            data = pick.peel(this.document, data['$ref'].replace(/\//g, '.').slice(2))
        }
        if (data.type === 'object') {
            return this.schemaObjectToJsonSchema(data)
        } else if (data.type === 'array') {
            return this.schemaArrayToJsonSchema(data)
        } else {
            /** @type {JSONSchema} */
            let output = {
                type: data.type,
                description: data.description || 'no description',
                examples: data.example ? [data.example] : [],
            }
            if (data.format === 'binary') {
                output.format = data.format
            }
            if (data.enum) {
                output.enum = data.enum
            }
            if (data.description) {
                output.description = descBeautify(`
                    ${data.description}
                    @example ${data.example}
                `)
            }
            return output
        }
    }

    /**
     * @param {SchemaObject} data
     * @returns {JSONSchema}
     */

    schemaObjectToJsonSchema(data) {
        /** @type {JSONSchema} */
        let output = {
            type: 'object',
            required: [...(data.required || [])],
            additionalProperties: false,
            properties: {}
        }
        for (let key in data.properties) {
            /** @type {SchemaObject} */
            let property = data.properties[key]
            if (data.required == null && Array.isArray(output.required)) {
                output.required.push(key)
            }
            if (output.properties) {
                output.properties[key] = this.schemaToJsonSchema(property)
            }
        }
        return output
    }

    /**
     * @param {ArraySchemaObject} data 
     * @returns {JSONSchema}
     */

    schemaArrayToJsonSchema(data)  {
        /** @type {JSONSchema} */
        let output = {
            type: 'array',
            additionalProperties: false
        }
        if (data.items) {
            output.items = this.schemaToJsonSchema(data.items)
        }
        return output
    }

    /**
     * @param {*} data 
     * @returns {OutputObject['contentType'] }
     */

    getContentType(data) {
        if (data && data.content) {
            if (data.content['application/json']) {
                return 'json'
            }
            if (data.content['application/x-www-form-urlencoded']) {
                return 'x-www-form-urlencoded'
            }
            if (data.content['multipart/form-data']) {
                return 'multipart/form-data'
            }
        }
        return 'json'
    }

    /**
     * @param {ParameterObject[]} parameters
     */

    pickParametersInQuery(parameters) {
        let queries = parameters.filter(e => e.in === 'query')
        let queryProperties = {}
        for (let query of queries) {
            queryProperties[query.name] = {
                type: query.schema.type,
                required: query.required
            }
        }
        return queries.length === 0 ? null : this.schemaObjectToJsonSchema({
            properties: queryProperties
        })
    }

    pickJsonSchema(data) {
        if (data) {
            let schema
            let type = this.getContentType(data)
            if (type === 'json') {
                schema = data.content?.['application/json']?.schema
            }
            if (type === 'multipart/form-data') {
                schema = data.content?.['multipart/form-data']?.schema
            }
            if (type === 'x-www-form-urlencoded') {
                schema = data.content?.['application/x-www-form-urlencoded']?.schema
            }
            if (schema) {
                return this.schemaToJsonSchema(schema)
            }
        }
        return null
    }

    getLink() {
        return `${baseUrl}/?target=${this.file}`
    }

    export() {
        /** @type {PathsObject} */
        let paths = this.document.paths || {}
        /** @type {OutputObject[]} */
        let outputs = []
        for (let path in paths) {
            let methods = ['get', 'post', 'put', 'delete']
            for (let method of methods) {
                let api = paths[path]
                if (api) {
                    let data = api[method]
                    if (data) {
                        let contentType = this.getContentType(data.requestBody)
                        let body = this.pickJsonSchema(data.requestBody)
                        let response = this.pickJsonSchema(data.responses['200'])
                        outputs.push({
                            summary: data.summary || 'no summary',
                            description: data.description || 'no description',
                            path: `${method}@${path.replace(/\{/g, ':').replace(/\}/g, '').slice(1)}`,
                            method: method,
                            body,
                            contentType: contentType === 'json' ? null : contentType,
                            query: this.pickParametersInQuery(data.parameters || []),
                            response
                        })
                    }
                }
            }
        }
        return {
            title: this.document.info.title,
            outputs
        }
    }

    async exportNextgenRequest() {
        let result = this.export()
        /** @type {JSONSchema} */
        let tsData = {
            type: 'object',
            required: [],
            description: `${result.title}\n@see ${this.getLink()}`,
            additionalProperties: false,
            properties: {}
        }
        for (let item of result.outputs) {
            if (tsData.required && Array.isArray(tsData.required)) {
                tsData.required.push(item.path)
            }
            if (tsData.properties) {
                if (item.body) {
                    for (let key in item.body.properties) {
                        if (item.body.properties[key].format === 'binary') {
                            item.body.properties[key].type = File
                        }
                    }
                }
                tsData.properties[item.path] = {
                    type: 'object',
                    description: `[${item.summary}] - ${item.description}`,
                    required: ['body', 'query', 'response', 'contentType'],
                    additionalProperties: false,
                    properties: {
                        body: item.body == null ? { type: 'null' } : item.body,
                        query: item.query == null ? { type: 'null' } : item.query,
                        response: item.response == null ? { type: 'null' } : item.response,
                        contentType: item.contentType == null ? { type: 'null' } : { type: 'string', enum: [item.contentType] }
                    }
                }
            }
        }
        const defined = await compile(tsData, '__')
        return jsBeautify(`
            /* eslint-disable */
            /* tslint:disable */
            export type ${this.getServiceName()}Definitions = ${defined.replace('export interface __', '').replace('/* tslint:disable */', '')}
        `)
    }
}

/**
 * @param {{ outputDir: string }} params 
 */

module.exports = async(params) => {
    const docUrl = await axios.get(`${baseUrl}/config.json`)
    if (fsx.existsSync(params.outputDir) === false) {
        fsx.mkdirSync(params.outputDir)
    }
    for (let { name, value } of docUrl.data.links) {
        if (value !== 'main') {
            console.log(`正在下載： ${name}`)
            const result = await axios.get(`${baseUrl}/docs/${value}.yaml`)
            const json = parse(result.data)
            const reader = new OpenApiReader(path.basename(value), json)
            fsx.writeFileSync(`${params.outputDir}/${value}.ts`, await reader.exportNextgenRequest())
        }
    }
}
