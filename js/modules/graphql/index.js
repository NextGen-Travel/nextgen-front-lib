"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graphql = void 0;
// see https://livecycle.io/blogs/graphql-and-typescript/
const power_helper_1 = require("power-helper");
const urql_1 = require("urql");
class Graphql {
    _resultType = null;
    hooks = new power_helper_1.Hook();
    client;
    documents;
    constructor(url, documents) {
        this.documents = documents;
        this.client = (0, urql_1.createClient)({
            url
        });
    }
    interceptorRequest(cb) {
        this.hooks.attach('request', cb);
    }
    interceptorResponse(cb) {
        this.hooks.attach('response', cb);
    }
    async query(name, variable) {
        let fetchNonNullAttr = (data) => {
            if (power_helper_1.pick.getType(data) === 'object') {
                let output = {};
                for (let key in data) {
                    if (data[key] != null) {
                        output[key] = data[key];
                    }
                }
                return output;
            }
            else {
                return {};
            }
        };
        let context = {};
        // 有無綁定上下文
        await this.hooks.notify('request', {
            name: name,
            context
        });
        // 發出請求
        let result = await this.client.query(this.documents[name], fetchNonNullAttr(variable), context).toPromise();
        let output = result.data;
        // 可以作為後續是否錯誤的處理
        await this.hooks.notify('response', {
            name: name,
            context,
            result
        });
        return output;
    }
}
exports.Graphql = Graphql;
