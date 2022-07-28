"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.TransactionsList = void 0;
var TransactionsStatusList_1 = require("../TransactionsStatusList/TransactionsStatusList");
var TransactionsList_module_css_1 = require("./TransactionsList.module.css");
var TransactionsList = function (props) {
    return (React.createElement("div", { className: TransactionsList_module_css_1["default"].container },
        React.createElement("div", { className: TransactionsList_module_css_1["default"].title },
            React.createElement("h2", null, "Transactions")),
        React.createElement("div", null, props.map(function (el) { return React.createElement(TransactionsStatusList_1.TransactionsStatusList, __assign({ key: el.id }, el, { className: TransactionsList_module_css_1["default"].list })); }))));
};
exports.TransactionsList = TransactionsList;
//# sourceMappingURL=TransactionsList.js.map