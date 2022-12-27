"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocalStorage = void 0;
const index_1 = require("./index");
const power_helper_1 = require("power-helper");
const useLocalStorage = () => {
    const { service, stage, version } = (0, index_1.useLibEnv)();
    const storage = new power_helper_1.LocalStorage(`lib-${service}-${stage}`, {
        intercept: {
            get(key, value, { isDefault, defaultValue }) {
                if (isDefault) {
                    return value;
                }
                if (value.version !== version) {
                    storage.remove(key);
                    return defaultValue();
                }
                return value.data;
            },
            set(key, value) {
                return {
                    data: value,
                    version,
                    createdAt: Date.now()
                };
            }
        },
        defaultColumns: {
            tablefilterMemories: () => ({})
        }
    });
    return storage;
};
exports.useLocalStorage = useLocalStorage;
