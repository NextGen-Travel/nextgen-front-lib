#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

const syncRequestApiTypes = require('./sync-request-api-types')

const mode = process.argv[2]

const main = async() => {
    if (mode === 'sync-request-types') {
        const outputDir = process.argv[3] || './src/request-types'
        await syncRequestApiTypes({
            outputDir
        })
    }
}

main()
