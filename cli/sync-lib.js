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
        fsx.rmdirSync(output)
        fsx.cpSync(`${__dirname}/../${dir}`, `${output}/${dir}`, {
            force: true,
            recursive: true
        })
        fsx.writeFileSync(`${output}/${dir}/readme.md`, `# 注意！這個資料夾是透過指令 nextgen-front-lib sync-lib ${output} 產生的，請遵照流程感恩。`)
    }
}
