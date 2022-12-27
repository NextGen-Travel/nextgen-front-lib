"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const simple_git_1 = __importDefault(require("simple-git"));
const tools_1 = require("./tools");
const main = async () => {
    const git = (0, simple_git_1.default)();
    const print = tools_1.log.print.bind(tools_1.log);
    const { current } = await git.branch();
    print('正在檢查程式碼...');
    await (0, tools_1.exec)([
        'yarn test'
    ]);
    print(`正在部署版本: ${current}`);
    const { mode, message } = await inquirer_1.default.prompt([
        {
            type: 'list',
            name: 'mode',
            message: '選擇修正類型',
            choices: ['feat', 'fix']
        },
        {
            type: 'input',
            name: 'message',
            message: '請輸入部署訊息：',
        }
    ]);
    const commitMessage = `${mode}: ${message || '例行更新'}@${Math.floor(Date.now() / 1000)}`;
    print('正在推上 git ...');
    print(`commit message 為： ${commitMessage}`);
    await git.add('.');
    await git.commit(commitMessage);
    await git.push();
    print('部署完成。');
    print(`可引用： { "nextgen-front-lib": "git+https://github.com/NextGen-Travel/nextgen-front-lib.git#${current}" }`);
    print('或是透過升級： yarn upgrade nextgen-front-lib');
};
main();
