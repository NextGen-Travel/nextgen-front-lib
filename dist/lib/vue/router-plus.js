"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VueRouterPlus = void 0;
const vue_router_1 = __importDefault(require("vue-router"));
const power_helper_1 = require("power-helper");
class VueRouterPlus extends vue_router_1.default {
    event = new power_helper_1.Event();
    constructor(options) {
        super(options);
        this.afterEach((from, to) => {
            this.event.emit('after', { from, to });
        });
        this.beforeEach((from, to, next) => {
            this.event.emit('before', { from, to });
            next();
        });
    }
    to(name, params, options) {
        this.push({
            name: name,
            params,
            query: options?.query
        });
    }
    getCurrentRoute(_name) {
        return this.currentRoute;
    }
}
exports.VueRouterPlus = VueRouterPlus;
