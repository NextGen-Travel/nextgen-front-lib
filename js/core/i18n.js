"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n = void 0;
const locales_1 = __importDefault(require("./locales"));
const power_helper_1 = require("power-helper");
const flatObj = (data) => {
    let output = {};
    for (let key in data) {
        output[`ng.${key}`] = data[key];
    }
    return output;
};
exports.i18n = new power_helper_1.I18n({
    def: 'en',
    locales: {
        en: flatObj(locales_1.default['en']),
        zh: flatObj(locales_1.default['zh'])
    }
});
