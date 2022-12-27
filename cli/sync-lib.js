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
    fsx.rmSync(output, {
        force: true,
        recursive: true
    })
    for (let dir of dirs) {
        fsx.cpSync(`${__dirname}/../${dir}`, `${output}/${dir}`, {
            force: true,
            recursive: true
        })
    }
    fsx.writeFileSync(`${output}/readme.md`, `# 注意！這個資料夾是透過指令 nextgen-front-lib sync-lib ${output} 產生的，請遵照流程感恩。`)
}
