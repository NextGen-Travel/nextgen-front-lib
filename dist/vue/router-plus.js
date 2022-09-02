import VueRouter from 'vue-router';
import { Event } from 'power-helper';
export class VueRouterPlus extends Event {
    vueRouter;
    static get install() {
        return VueRouter.install;
    }
    static get VueRouter() {
        return VueRouter;
    }
    async setup(options) {
        this.vueRouter = new VueRouter(options);
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
