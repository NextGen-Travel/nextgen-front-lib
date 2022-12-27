"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAllForLaravelPaginate = exports.fetchAllForStrapi = exports.fetchAll = void 0;
const fetchAll = async (params) => {
    let page = 1;
    let outputs = [];
    let loops = 100;
    while (loops > 0) {
        let result = await params.fetch(page);
        outputs.push(...params.pick(result));
        page += 1;
        loops -= 1;
        if (params.done(result)) {
            break;
        }
    }
    return outputs;
};
exports.fetchAll = fetchAll;
const fetchAllForStrapi = async (cb) => {
    const items = await (0, exports.fetchAll)({
        done: result => result.meta.pagination.total <= (result.meta.pagination.page * result.meta.pagination.pageSize),
        pick: result => result.data,
        fetch: async (page) => {
            let result = await cb(page);
            return result;
        }
    });
    return items;
};
exports.fetchAllForStrapi = fetchAllForStrapi;
const fetchAllForLaravelPaginate = async (cb) => {
    const items = await (0, exports.fetchAll)({
        pick: result => result.data,
        done: result => !result.links.next,
        fetch: async (page) => {
            const result = await cb(page);
            return result;
        }
    });
    return items;
};
exports.fetchAllForLaravelPaginate = fetchAllForLaravelPaginate;
