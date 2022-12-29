"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.casApi = void 0;
const axios_1 = __importDefault(require("axios"));
const request_1 = require("../../modules/request");
exports.casApi = new request_1.Request({
    name: 'casApi',
    http: async (context) => {
        let axios = axios_1.default.create({
            baseURL: context.config.baseUrl,
            headers: context.headers
        });
        let result = await request_1.Request.AxiosRequest({
            axios,
            context
        });
        return result.data;
    }
});