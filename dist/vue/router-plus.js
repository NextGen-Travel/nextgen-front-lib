"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VueRouterPlus = void 0;
const vue_router_1 = __importDefault(require("vue-router"));
const power_helper_1 = require("power-helper");
class VueRouterPlus extends power_helper_1.Event {
    vueRouter;
    static get install() {
        return vue_router_1.default.install;
    }
    static get VueRouter() {
        return vue_router_1.default;
    }
    async setup(options) {
        this.vueRouter = new vue_router_1.default(options);
        this.vueRouter.afterEach((from, to) => {
            this.emit('after', { from, to });
        });
        this.vueRouter.beforeEach((from, to, next) => {
            this.emit('before', { from, to });
            next();
        });
    }
    to(name, params, options) {
        if (this.vueRouter) {
            this.vueRouter.push({
                name: name,
                params,
                query: options?.query
            });
        }
    }
    getCurrentRoute(_name) {
        return this.vueRouter ? this.vueRouter.currentRoute : null;
    }
}
exports.VueRouterPlus = VueRouterPlus;
