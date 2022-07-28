"use strict";
exports.__esModule = true;
exports.TransactionsTypeList = void 0;
var TransactionsTypeList_module_css_1 = require("./TransactionsTypeList.module.css");
var TransactionsTypeList = function () {
    return (React.createElement("div", { className: TransactionsTypeList_module_css_1["default"].input },
        React.createElement("input", { type: "text", name: "type", list: "transactionsType", autoComplete: 'off', placeholder: "type", className: TransactionsTypeList_module_css_1["default"].typeList, value: '' }),
        React.createElement("datalist", { id: "transactionsType" },
            React.createElement("option", { value: "- refill" }),
            React.createElement("option", { value: "- withdrawal" }))));
};
exports.TransactionsTypeList = TransactionsTypeList;
//# sourceMappingURL=TransactionsTypeList.js.map