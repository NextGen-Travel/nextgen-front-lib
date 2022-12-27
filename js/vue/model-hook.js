"use strict";
// https://www.gushiciku.cn/pl/g2DO/zh-tw
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineModelHook = exports.createStrapiListResource = exports.createLaravelResourcePaginate = exports.createLaravelPaginate = exports.defineSchema = void 0;
const deep_object_diff_1 = require("deep-object-diff");
const vue_1 = require("vue");
const listener_group_1 = require("./listener-group");
const state_manager_1 = require("./state-manager");
const power_helper_1 = require("power-helper");
const defineSchema = (data) => data;
exports.defineSchema = defineSchema;
const createLaravelPaginate = () => {
    return {
        total: 1,
        per_page: 1,
        current_page: 1,
        last_page: 1,
        from: 1,
        to: 1,
        data: []
    };
};
exports.createLaravelPaginate = createLaravelPaginate;
const createLaravelResourcePaginate = () => {
    return {
        data: [],
        links: {
            first: '',
            last: '',
            prev: '',
            next: ''
        },
        meta: {
            current_page: 1,
            last_page: 0,
            total: 0,
            from: 0,
            path: '',
            per_page: 10,
            to: 0
        }
    };
};
exports.createLaravelResourcePaginate = createLaravelResourcePaginate;
const createStrapiListResource = () => {
    return {
        data: [],
        meta: {
            pagination: {
                page: 1,
                pageSize: 10,
                pageCount: 0,
                total: 0
            }
        }
    };
};
exports.createStrapiListResource = createStrapiListResource;
const defineModelHook = (params) => {
    const use = () => {
        const data = (0, vue_1.reactive)(params.schema());
        const oridata = params.schema();
        const stateManager = (0, state_manager_1.createStateManager)();
        // =================
        //
        // 負責監聽資料變化
        //
        const event = new power_helper_1.Event();
        (0, vue_1.watch)(() => data, () => event.emit('update', {}), {
            deep: true
        });
        // =================
        //
        // methods
        //
        /** 將資料重新設定成初始資料 */
        const clear = () => {
            Object.assign(data, params.schema());
        };
        /** 將資料重新設定成最後 commit 的資料 */
        const reset = () => {
            Object.assign(data, power_helper_1.json.jpjs(oridata));
        };
        /** 賦予資料 */
        const assign = (newData) => {
            Object.assign(data, power_helper_1.record.setMapValue(data, newData));
        };
        /** 將既有資料存為原始資料 */
        const commit = (newData) => {
            assign(newData);
            Object.assign(oridata, power_helper_1.json.jpjs(data));
        };
        /** 比較資料是否有異 */
        const diff = (target) => {
            return Object.keys((0, deep_object_diff_1.diff)(data, target)).length !== 0;
        };
        /** 比較現在的狀態與 最後 commit 的資料是否有異 */
        const isModified = () => {
            return diff(oridata);
        };
        /** 將資料重新設定成初始資料，並將儲存的資料也改成初始資料 */
        const rebuild = () => {
            stateManager.reset();
            clear();
            Object.assign(oridata, params.schema());
            event.emit('rebuild', {});
        };
        // =================
        //
        // 輸出資料
        //
        const mixin = params.mixin({
            data,
            commit,
            stateManager
        });
        // =================
        //
        // done
        //
        return {
            d: data,
            data,
            diff,
            clear,
            reset,
            event,
            commit,
            assign,
            rebuild,
            isModified,
            ...mixin
        };
    };
    /** 當有存在既有資料時可以進行轉換，例如 vuex */
    const from = (data) => {
        let model = use();
        if (data) {
            model.commit(data);
        }
        return model;
    };
    return {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        ...params.static,
        _ModelType: null,
        _SchemaType: null,
        use,
        from,
        /** 只獲取 schema */
        row: () => params.schema(),
        /** 同步監聽資料變化 */
        sync: (data, emit) => {
            const model = from(data);
            const listenerGroup = (0, listener_group_1.useListenerGroup)();
            // =================
            //
            // watch
            //
            (0, vue_1.watch)(() => data, () => {
                if (model.diff(data)) {
                    model.assign(data);
                }
            }, {
                deep: true
            });
            // =================
            //
            // listener
            //
            if (emit) {
                listenerGroup.push([
                    model.event.on('update', () => emit(model.data))
                ]);
            }
            // =================
            //
            // done
            //
            return model;
        }
    };
};
exports.defineModelHook = defineModelHook;
