"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actions = void 0;
const confirm_1 = require("./store/confirm");
const choices_1 = require("./store/choices");
const notification_1 = require("./store/notification");
const openConfirm = (message, handler) => {
    (0, confirm_1.useLibConfirmStore)().open({
        message,
        handler
    });
};
const openChoices = (params) => {
    (0, choices_1.useLibChoicesStore)().open(params);
};
const showToast = (type, content) => {
    (0, notification_1.useLibNotificationStore)().push({
        type,
        content
    });
};
exports.actions = {
    showToast,
    openChoices,
    openConfirm
};
