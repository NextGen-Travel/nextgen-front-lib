/* eslint-disable @typescript-eslint/no-var-requires */

const fsx = require('fs-extra')
const { glob } = require('glob')
const { pick } = require('power-helper')

/**
 * @param {{ path: string }} params 
 */

module.exports = async(params = {
    path: '.'
}) => {
    const files = await glob(`${params.path}/**/*.{js,ts,vue}`, { ignore: 'node_modules/**' })
    const outputs = {}
    for (let file of files) {
        console.log(file)
        const text = fsx.readFileSync(file, 'utf8')
        const vars = pick.vars({
            start: 't(\'##',
            end: ')',
            text
        })
        for (let v of vars) {
            outputs[v] = {
                'zh-TW': v,
                'zh-CN': v,
                'en-US': v
            }
        }
    }
    return outputs
}
