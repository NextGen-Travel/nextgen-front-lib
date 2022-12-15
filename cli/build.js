/* eslint-disable @typescript-eslint/no-var-requires */
const { exec } = require('./tools')

module.exports = async() => {
    await exec([
        'npm run build'
    ])
}
