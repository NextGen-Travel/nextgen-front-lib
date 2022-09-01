"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextgenLib = exports.ServiceException = exports.RuleProvider = exports.Interaction = exports.CryptoAES = exports.Request = exports.Graphql = exports.createStrictObject = exports.vueHooks = void 0;
const graphql_1 = require("./modules/graphql");
const request_1 = require("./modules/request");
const crypto_1 = require("./modules/crypto");
const interaction_1 = require("./modules/interaction");
const rule_provider_1 = require("./modules/rule-provider");
const service_exception_1 = require("./modules/service-exception");
const strict_object_1 = require("./utils/strict-object");
exports.vueHooks = {};
// Utils
exports.createStrictObject = strict_object_1.createStrictObject;
// Modules
exports.Graphql = graphql_1.Graphql;
exports.Request = request_1.Request;
exports.CryptoAES = crypto_1.CryptoAES;
exports.Interaction = interaction_1.Interaction;
exports.RuleProvider = rule_provider_1.RuleProvider;
exports.ServiceException = service_exception_1.ServiceException;
exports.NextgenLib = {
    createStrictObject: exports.createStrictObject,
    Request: exports.Request,
    Graphql: exports.Graphql,
    CryptoAES: exports.CryptoAES,
    Interaction: exports.Interaction,
    RuleProvider: exports.RuleProvider,
    ServiceException: exports.ServiceException,
    install(_Vue, hooks) {
        Object.assign(exports.vueHooks, hooks);
    }
};
module.exports = exports.NextgenLib;
module.exports.NextgenLib = exports.NextgenLib;
exports.default = exports.NextgenLib;
