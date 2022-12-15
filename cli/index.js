#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

const syncRequestApiTypes = require('./sync-request-api-types')
const build = require('./build')
const setup = require('./setup')

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
                    'sync-request-types'
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
    if (mode === 'build') {
        await setup()
        await build()
    }
    if (mode === 'setup') {
        await setup()
    }
}

main()
