"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
const qs_1 = require("qs");
const power_helper_1 = require("power-helper");
const error_1 = require("../../error");
const exception = error_1.serviceException.checkout('request');
class Request extends power_helper_1.Event {
    mocks = {};
    params;
    installed = false;
    constructor(params) {
        super();
        this.params = params;
    }
    get name() {
        return this.params.name;
    }
    static parseLaravelResourcePaginateResponse(result) {
        // 如果是分頁資料
        if (Array.isArray(result.data) && result.meta && result.links) {
            return result;
        }
        // 如果不是分頁資料
        return result.data;
    }
    static fakeLaravelPaginateResult(data) {
        return {
            data,
            total: 1,
            per_page: 1,
            current_page: 1,
            last_page: 1,
            from: 1,
            to: 1
        };
    }
    static fakeLaravelResourcePaginateResult(data) {
        return {
            data,
            links: {
                first: '',
                last: '',
                prev: '',
                next: ''
            },
            meta: {
                current_page: 1,
                from: '',
                path: '',
                last_page: 1,
                to: 1,
                per_page: 10,
                total: 1
            }
        };
    }
    static async AxiosRequest(params) {
        let { axios, context } = params;
        let { method, path, query, headers, responseType, body } = context;
        let result = null;
        if (method === 'get' || method === 'delete') {
            result = await axios[method](path, {
                params: query,
                headers,
                responseType
            });
        }
        if (method === 'post' || method === 'put') {
            result = await axios[method](path, body, {
                params: query,
                headers,
                responseType
            });
        }
        return result;
    }
    parseUrl(url, params) {
        let substrings = url.split('@');
        let method = substrings[0];
        let path = substrings.slice(1).join('@');
        if (params) {
            for (let key in params) {
                if (params[key] == null) {
                    throw exception.fail(`Url ${url} param ${key} is null.`);
                }
                path = path.replace(':' + key, params[key].toString());
            }
        }
        return {
            path: path.split('#')[0],
            method
        };
    }
    mock(to, response) {
        this.mocks[to] = response;
    }
    export() {
        return this.http.bind(this);
    }
    async install(config) {
        if (this.params.install) {
            await this.params.install(this, config);
        }
        this.installed = true;
    }
    async http(to, params) {
        if (this.installed === false) {
            throw exception.fail(`Request ${this.name} not installed.`);
        }
        let parsed = this.parseUrl(to, params.params);
        let headers = params.headers || {};
        let context = {
            path: parsed.path,
            form: document.createElement('form'),
            body: (params.body || {}),
            query: (params.query || {}),
            headers,
            contentType: params.contentType || 'json',
            responseType: params.responseType,
            method: parsed.method
        };
        // Content Type
        if (context.contentType === 'x-www-form-urlencoded') {
            context.body = (0, qs_1.stringify)(context.body);
            headers.contentType = 'application/x-www-form-urlencoded';
        }
        if (context.contentType === 'multipart/form-data') {
            let formData = new FormData();
            for (let key in context.body) {
                formData.append(key, context.body[key]);
            }
            context.body = formData;
            headers.contentType = 'multipart/form-data';
        }
        if (context.contentType === 'multipart/form-data#json') {
            let formData = new FormData();
            for (let key in context.body) {
                formData.append(key, context.body[key]);
            }
            context.body = formData;
        }
        if (context.contentType === 'form') {
            context.form.setAttribute('method', context.method.toUpperCase());
            for (let key in context.body) {
                const value = context.body[key];
                const field = document.createElement('input');
                field.setAttribute('type', 'hidden');
                field.setAttribute('name', key);
                field.setAttribute('value', typeof value === 'string' ? value : JSON.stringify(value));
                context.form.appendChild(field);
            }
            context.form.style.opacity = '0';
            context.form.style.position = 'fixed';
            document.body.appendChild(context.form);
        }
        // Send
        let response = null;
        if (this.mocks && this.mocks[to]) {
            await power_helper_1.flow.sleep(500);
            response = this.mocks[to](context);
            this.emit('useMockAfter', {
                context,
                response
            });
        }
        else {
            response = await this.params.http(context);
        }
        if (context.contentType === 'form') {
            context.form.remove();
        }
        return response;
    }
}
exports.Request = Request;
