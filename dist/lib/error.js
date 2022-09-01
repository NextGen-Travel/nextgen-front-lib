"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceException = void 0;
const config_1 = require("./config");
const service_exception_1 = require("./modules/service-exception");
exports.serviceException = new service_exception_1.ServiceException(config_1.config.libName);
