"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceException = void 0;
const power_helper_1 = require("power-helper");
class ServiceException extends power_helper_1.Event {
    serviceName;
    parent = null;
    options = {
        customPaser: () => null,
        defaultError: () => 'Error!'
    };
    constructor(serviceName, options) {
        super();
        this.serviceName = serviceName;
        if (options) {
            Object.assign(this.options, options);
        }
    }
    _setParent(serviceException) {
        this.parent = serviceException;
    }
    _getRootModule() {
        return this.parent == null ? this : this.parent._getRootModule();
    }
    get fullName() {
        return this.parent == null ? this.serviceName : `${this.parent.fullName}/${this.serviceName}`;
    }
    parseMessage(data) {
        let custom = this.options.customPaser(data);
        if (custom) {
            return custom;
        }
        if (typeof data === 'string') {
            return data;
        }
        let message = data.message;
        if (typeof message === 'string') {
            return message;
        }
        return this.options.defaultError();
    }
    fail(error) {
        const message = this.parseMessage(error);
        this._getRootModule().emit('fail', {
            error,
            message
        });
        return new Error(`${this.fullName}: ${message}`);
    }
    checkout(serviceName) {
        let child = new ServiceException(serviceName, this.options);
        child._setParent(this);
        return child;
    }
}
exports.ServiceException = ServiceException;
