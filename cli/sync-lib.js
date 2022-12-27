/* eslint-disable @typescript-eslint/no-var-requires */

const fsx = require('fs-extra')

/**
 * @param {{ outputDir: string }} params 
 */

module.exports = async(params = {}) => {
    const output = params.outputDir || './project'
    const dirs = [
        'core',
        'libraries',
        'modules',
        'request-types',
        'style',
        'utils',
        'vue'
    ]
    for (let dir of dirs) {
        fsx.cpSync(dir, `${output}/${dir}`, {
            recursive: true
        })
    }
}
