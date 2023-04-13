/* eslint-disable @typescript-eslint/no-var-requires */

const fsx = require('fs-extra')
const { glob } = require('glob')
const { text } = require('power-helper')

/** 好猛這段是 ai 生成的 */

function removeSpecialChars(str) {
    return str.replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g, '').replace(/\s+/g, '')
}

function validateSpecialText(str) {
    const regex = /^[\u4e00-\u9fa5a-zA-Z0-9]+$/
    return regex.test(str)
}

function extractFirstParam(content) {
    const regex = /t\(['"]##([^'"]+)['"]/g
    const matchs = content.match(regex)
    return (matchs || [])
        .map(e => {
            if (text.lastMatch(e, '\'') || text.lastMatch(e, '`') || text.lastMatch(e, '"')) {
                return e.slice(0, -1)
            } else {
                return e
            }
        })
        .map(e => {
            if (text.headMatch(e, 't(\'##') || text.headMatch(e, 't("##') || text.headMatch(e, 't(`##')) {
                return e.slice(5)
            } else {
                return e
            }
        })
}

/**
 * @param {{ path: string }} params 
 */

module.exports = async(params = {
    path: './src'
}) => {
    const files = await glob(`${params.path}/**/*.{js,ts,vue}`, { ignore: 'node_modules/**' })
    const outputs = {
        keys: {},
        changes: []
    }
    for (let file of files) {
        const content = fsx.readFileSync(file, 'utf8')
        const vars = extractFirstParam(content)
        for (let v of vars) {
            outputs.keys[removeSpecialChars(v).trim()] = v.trim()
            if (validateSpecialText(v.trim())) {
                outputs.changes.push(v)
            }
        }
    }
    return outputs
}
