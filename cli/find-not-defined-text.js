/* eslint-disable @typescript-eslint/no-var-requires */

const fsx = require('fs-extra')
const { glob } = require('glob')
const { pick, text } = require('power-helper')

/**
 * @param {{ path: string }} params 
 */

module.exports = async(params = {
    path: '.'
}) => {
    const files = await glob(`${params.path}/**/*.{js,ts,vue}`, { ignore: 'node_modules/**' })
    const outputs = {
        'zh-TW': {},
        'zh-CN': {},
        'en-US': {}
    }
    for (let file of files) {
        const content = fsx.readFileSync(file, 'utf8')
        const vars = pick.vars({
            start: 't(\'##',
            end: ')',
            text: content
        })
        for (let v of vars) {
            let key = (text.lastMatch(v, '\'') ? v.slice(0, -1) : v).trim()
            outputs['zh-TW'][key] = key
            outputs['zh-CN'][key] = key
            outputs['zh-US'][key] = key
        }
    }
    return outputs
}
