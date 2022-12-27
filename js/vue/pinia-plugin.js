"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextgenPiniaPlugin = void 0;
const NextgenPiniaPlugin = ({ store, pinia }) => {
    store.$destroy = () => {
        store.$dispose();
        delete pinia.state.value[store.$id];
    };
};
exports.NextgenPiniaPlugin = NextgenPiniaPlugin;
