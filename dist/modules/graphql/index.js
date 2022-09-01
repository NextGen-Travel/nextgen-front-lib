"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graphql = void 0;
// see https://livecycle.io/blogs/graphql-and-typescript/
const urql_1 = require("urql");
class Graphql {
    client;
    documents;
    constructor(url, documents) {
        this.documents = documents;
        this.client = (0, urql_1.createClient)({
            url
        });
    }
    async query(name, variable) {
        let result = await this.client.query(this.documents[name], variable).toPromise();
        return result.data;
    }
}
exports.Graphql = Graphql;
