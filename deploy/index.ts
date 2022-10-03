import inquirer from 'inquirer'
import simpleGit from 'simple-git'
import { exec, log } from './tools'

const main = async() => {
    const git = simpleGit()
    const print = log.print.bind(log)
    const { current } = await git.branch()
    print('正在檢查程式碼...')
    await exec(['yarn test'])
    print(`正在部署版本: ${current}`)
    const { commitMessage } = await inquirer.prompt([
        {
            type: 'input',
            name: 'commitMessage',
            message: '請輸入部署訊息：',
        }
    ])
    await git.add('.')
    await git.commit(`feat: ${commitMessage}@${Date.now()}`)
    await git.push()
    print('部署完成。')
}

main()
