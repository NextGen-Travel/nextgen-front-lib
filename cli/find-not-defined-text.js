/* eslint-disable @typescript-eslint/no-var-requires */

const fsx = require('fs-extra')
const { glob } = require('glob')
const { pick, text } = require('power-helper')

function extractFirstParam(text) {
    const regex = /t\(['"]([^'"]+)['"]/
    const matchs = text.match(regex)
    return matchs
}

/**
 * @param {{ path: string }} params 
 */

module.exports = async(params = {
    path: '.'
}) => {
    const files = await glob(`${params.path}/**/*.{js,ts,vue}`, { ignore: 'node_modules/**' })
    const outputs = {}
    for (let file of files) {
        const content = fsx.readFileSync(file, 'utf8')
        // const vars = pick.vars({
        //     start: 't(\'##',
        //     end: ')',
        //     text: content
        // })
        const vars = extractFirstParam(content)
        for (let v of vars) {
            let key = (text.lastMatch(v, '\'') ? v.slice(0, -1) : v).trim()
            outputs[key] = key
        }
    }
    return outputs
}
