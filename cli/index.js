#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

const fsx = require('fs-extra')
const build = require('./build')
const setup = require('./setup')
const syncLib = require('./sync-lib')
const findNotDefinedText = require('./find-not-defined-text')
const syncRequestApiTypes = require('./sync-request-api-types')
const { prompt } = require('inquirer')

let mode = process.argv[2]

const main = async() => {
    if (mode == null) {
        let { selected } = await prompt([
            {
                type: 'list',
                name: 'selected',
                message: '你要做什麼？',
                default: '',
                choices: [
                    'build',
                    'setup',
                    'sync-lib',
                    'sync-request-types',
                    'find-not-defined-text'
                ]
            }
        ])
        mode = selected
    }
    if (mode === 'sync-request-types') {
        const outputDir = process.argv[3] || './src/request-types'
        await syncRequestApiTypes({
            outputDir
        })
    }
    if (mode === 'sync-lib') {
        const outputDir = process.argv[3] || './nextgen-front-lib'
        await syncLib({
            outputDir
        })
    }
    if (mode === 'build') {
        await setup()
        await build()
    }
    if (mode === 'setup') {
        await setup()
    }
    if (mode === 'find-not-defined-text') {
        const output = process.argv[4] || './.no-defined-text.json'
        const keys = await findNotDefinedText({
            path: process.argv[3] || './src'
        })
        fsx.writeFileSync(output, JSON.stringify(keys, null, 4))
        console.log(`解讀完畢，已輸出至 ${output}。`)
    }
}

main()
