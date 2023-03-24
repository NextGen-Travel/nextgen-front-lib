/* eslint-disable @typescript-eslint/no-var-requires */

const fsx = require('fs-extra')
const { glob } = require('glob')
const { pick, text } = require('power-helper')

/** 好猛這段是 ai 生成的 */

function extractFirstParam(text) {
    const regex = /t\(['"]##([^'"]+)['"]/g
    const matchs = text.match(regex)
    return (matchs || []).map(e => (text.lastMatch(e, '\'') ? e.slice(0, -1) : e).trim())
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
        const vars = extractFirstParam(content)
        console.log(vars)
        // for (let v of vars) {
        // }
    }
    return outputs
}
