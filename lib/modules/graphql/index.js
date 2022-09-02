// see https://livecycle.io/blogs/graphql-and-typescript/
import { createClient } from 'urql';
export class Graphql {
    client;
    documents;
    constructor(url, documents) {
        this.documents = documents;
        this.client = createClient({
            url
        });
    }
    async query(name, variable) {
        let result = await this.client.query(this.documents[name], variable).toPromise();
        return result.data;
    }
}
