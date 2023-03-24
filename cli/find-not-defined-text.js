/* eslint-disable @typescript-eslint/no-var-requires */

const fsx = require('fs-extra')
const { glob } = require('glob')
const { text } = require('power-helper')

/** 好猛這段是 ai 生成的 */

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
        .map(e => e.trim())
}

/**
 * @param {{ path: string }} params 
 */

module.exports = async(params = {
    path: './src'
}) => {
    const files = await glob(`${params.path}/**/*.{js,ts,vue}`, { ignore: 'node_modules/**' })
    const outputs = {}
    for (let file of files) {
        const content = fsx.readFileSync(file, 'utf8')
        const vars = extractFirstParam(content)
        for (let v of vars) {
            outputs[v] = v
        }
    }
    return outputs
}
