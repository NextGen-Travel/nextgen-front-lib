"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VueRouterPlus = void 0;
const power_helper_1 = require("power-helper");
const error_1 = require("../core/error");
const vue_router_1 = require("vue-router");
const getRouteNames = (routes) => {
    let names = [];
    if (routes) {
        for (let route of routes) {
            if (route && route.name) {
                names.push(route.name.toString());
            }
            if (route.children) {
                names = names.concat(getRouteNames(route.children));
            }
        }
    }
    return names;
};
class VueRouterPlus extends power_helper_1.Event {
    params;
    routeMap = new Set();
    vueRouter;
    constructor(params) {
        super();
        this.params = params || {};
    }
    async setup(options) {
        this.routeMap = new Set(getRouteNames(options.routes));
        this.vueRouter = (0, vue_router_1.createRouter)(options);
        this.vueRouter.afterEach((from, to) => {
            this.emit('after', {
                to,
                from
            });
        });
        this.vueRouter.beforeEach((from, to, next) => {
            this.emit('before', {
                to,
                from
            });
            next();
        });
        return this.vueRouter;
    }
    toHome() {
        if (this.vueRouter) {
            if (this.params.home) {
                this.to(this.params.home(), {});
            }
            else {
                this.vueRouter.push('/');
            }
        }
    }
    to(name, params, options) {
        if (this.vueRouter) {
            if (this.routeMap.has(name)) {
                this.vueRouter.push({
                    name: name,
                    params: params,
                    query: options?.query
                });
            }
            else {
                this.toHome();
            }
        }
    }
    back(step = 1) {
        if (this.vueRouter) {
            this.vueRouter.go(step * -1);
        }
    }
    blank(name, params, options) {
        if (this.vueRouter) {
            if (this.routeMap.has(name)) {
                const result = this.vueRouter.resolve({
                    name: name,
                    params: params,
                    query: options?.query
                });
                window.open(result.href);
            }
            else {
                throw error_1.serviceException.create(`Router ${name} not found.`);
            }
        }
        else {
            throw error_1.serviceException.create('Router Plus not installed.');
        }
    }
    getCurrentRoute(_name) {
        if (this.vueRouter) {
            return this.vueRouter.currentRoute.value;
        }
        else {
            return {
                name: '',
                query: {},
                params: {}
            };
        }
    }
}
exports.VueRouterPlus = VueRouterPlus;
