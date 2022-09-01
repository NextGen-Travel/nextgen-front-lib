"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextgenLib = exports.VueRouterPlus = exports.VueI18nPlus = exports.VueSelf = exports.ServiceException = exports.RuleProvider = exports.Interaction = exports.CryptoAES = exports.Request = exports.Graphql = exports.createStrictObject = exports.isBreakpoint = exports.createUuid = exports.vueHooks = void 0;
const graphql_1 = require("./modules/graphql");
const request_1 = require("./modules/request");
const crypto_1 = require("./modules/crypto");
const interaction_1 = require("./modules/interaction");
const rule_provider_1 = require("./modules/rule-provider");
const service_exception_1 = require("./modules/service-exception");
const strict_object_1 = require("./utils/strict-object");
const uid_1 = require("./utils/uid");
const breakpoints_1 = require("./utils/breakpoints");
const self_1 = require("./vue/self");
const i18n_plus_1 = require("./vue/i18n-plus");
const router_plus_1 = require("./vue/router-plus");
exports.vueHooks = {};
// Utils
exports.createUuid = uid_1.createUuid;
exports.isBreakpoint = breakpoints_1.isBreakpoint;
exports.createStrictObject = strict_object_1.createStrictObject;
// Modules
exports.Graphql = graphql_1.Graphql;
exports.Request = request_1.Request;
exports.CryptoAES = crypto_1.CryptoAES;
exports.Interaction = interaction_1.Interaction;
exports.RuleProvider = rule_provider_1.RuleProvider;
exports.ServiceException = service_exception_1.ServiceException;
exports.VueSelf = self_1.VueSelf;
exports.VueI18nPlus = i18n_plus_1.VueI18nPlus;
exports.VueRouterPlus = router_plus_1.VueRouterPlus;
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
