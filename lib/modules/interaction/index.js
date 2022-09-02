import { Event } from 'power-helper';
export class Interaction extends Event {
    name;
    steps = [];
    parent;
    interceptorMessage;
    constructor({ name, parent, interceptorMessage }) {
        super();
        this.name = parent ? `${parent.name}/${name}` : name;
        this.parent = parent;
        this.interceptorMessage = interceptorMessage;
    }
    pushStep(params) {
        if (this.parent) {
            this.parent.pushStep(params);
        }
        else {
            if (this.steps.length > 100) {
                this.steps.shift();
            }
            const step = {
                ...params,
                message: this.interceptorMessage(params.message),
                createdAt: Date.now()
            };
            this.steps.push(step);
            this.emit('action', step);
        }
    }
    each(cb) {
        return this.steps.forEach(cb);
    }
    step(message, meta) {
        this.pushStep({
            meta,
            type: 'step',
            level: 'info',
            message: message,
            checkoutAt: this.name
        });
    }
    wrong(message) {
        this.pushStep({
            meta: message,
            type: 'wrong',
            level: 'danger',
            message,
            checkoutAt: this.name
        });
    }
    checkout(name) {
        const branch = new Interaction({
            name,
            parent: this,
            interceptorMessage: this.interceptorMessage
        });
        return {
            wrong: branch.wrong.bind(branch),
            notify: branch.notify.bind(branch),
            checkout: branch.checkout.bind(branch),
            step: branch.step.bind(branch)
        };
    }
    notify(type, content) {
        this.pushStep({
            meta: content,
            type: 'notify',
            level: type,
            message: content,
            checkoutAt: this.name
        });
    }
}
