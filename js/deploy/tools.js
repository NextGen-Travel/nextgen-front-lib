"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = exports.log = void 0;
const child_process_1 = __importDefault(require("child_process"));
const power_helper_1 = require("power-helper");
exports.log = new power_helper_1.Log('deploy');
const exec = (commands) => {
    return new Promise((resolve, reject) => {
        const command = commands.join(' && ');
        const exec = child_process_1.default.exec(command, { encoding: 'buffer' });
        exports.log.print(command, { color: 'yellow' });
        exec.stderr?.on('data', message => {
            if (power_helper_1.text.headMatch(message.toString().trim(), 'fatal')) {
                exports.log.print(message.toString(), {
                    color: 'red'
                });
                reject('Fail!');
            }
            else if (power_helper_1.text.headMatch(message.toString().trim(), 'warning')) {
                exports.log.print(message.toString(), {
                    color: 'yellow'
                });
            }
            else {
                exports.log.print(message.toString());
            }
        });
        exec.stdout?.on('data', message => console.log(message.toString()))
            .on('end', () => {
            resolve(null);
        });
    });
};
exports.exec = exec;
