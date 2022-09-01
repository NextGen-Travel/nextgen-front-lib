"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUuid = void 0;
const uuid_1 = require("uuid");
const createUuid = () => (0, uuid_1.v4)();
exports.createUuid = createUuid;
