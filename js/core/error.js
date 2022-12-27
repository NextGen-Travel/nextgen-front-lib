"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceException = void 0;
const config_1 = require("./config");
const power_helper_1 = require("power-helper");
exports.serviceException = new power_helper_1.Exception(config_1.config.libName);
