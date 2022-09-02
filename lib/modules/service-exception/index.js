import { Event } from 'power-helper';
import { parseMessage } from '../../utils/message-parser';
export class ServiceException extends Event {
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
        return parseMessage(data, this.options.defaultError());
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
