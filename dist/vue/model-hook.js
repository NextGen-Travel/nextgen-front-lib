"use strict";
// https://www.gushiciku.cn/pl/g2DO/zh-tw
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineModelHook = exports.createLaravelResourcePaginate = exports.createLaravelPaginate = exports.defineSchema = void 0;
const index_1 = require("../index");
const deep_object_diff_1 = require("deep-object-diff");
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
            from: '',
            path: '',
            per_page: 10,
            to: ''
        }
    };
};
exports.createLaravelResourcePaginate = createLaravelResourcePaginate;
const defineModelHook = (params) => {
    const { onUnmounted, reactive, watch } = (0, index_1.useVueHooks)();
    const use = () => {
        let data = reactive(params.schema());
        let oridata = params.schema();
        // =================
        //
        // 負責監聽資料變化
        //
        const event = new power_helper_1.Event();
        watch(() => data, () => event.emit('update', {}), {
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
        /** 將資料重新設定成最後儲存的資料 */
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
        /** 比較與原始資料是否有異 */
        const isModified = () => {
            return diff(oridata);
        };
        // =================
        //
        // 輸出資料
        //
        const mixin = params.mixin({
            data,
            commit
        });
        return {
            data,
            diff,
            clear,
            reset,
            event,
            commit,
            assign,
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
        use,
        from,
        /** 只獲取 schema */
        row: () => params.schema(),
        /** 同步監聽資料變化 */
        sync: (data, emit) => {
            const model = from(data);
            // =================
            //
            // watch
            //
            watch(() => data, () => {
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
                const listener = model.event.on('update', () => emit(model.data));
                onUnmounted(() => listener.off());
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
