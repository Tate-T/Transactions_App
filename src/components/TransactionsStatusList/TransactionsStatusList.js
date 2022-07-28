"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.TransactionsStatusList = void 0;
var react_1 = require("react");
var uuid_1 = require("uuid");
// import s from './TransactionsStatusList.module.css';
var TransactionsStatusList = function () {
    var _a = (0, react_1.useState)(''), value = _a[0], setValue = _a[1];
    var _b = (0, react_1.useState)([]), status = _b[0], setStatus = _b[1];
    // const [status, setStatus]= useState([{number || string, string, boolean}]);
    var idStatus = (0, uuid_1["default"])();
    var chooseStatus = function () {
        if (value) {
            setStatus(__spreadArray(__spreadArray([], status, true), [{
                    id: idStatus,
                    title: value,
                    isSelect: false
                }], false));
        }
        setStatus('');
    };
    return (React.createElement("div", null,
        React.createElement("input", { type: "text", name: "status", list: "transactionsStatus", autoComplete: 'off', placeholder: "status", className: s.statusList, value: value, onChange: function (e) { return setValue(e.target.value); } }),
        React.createElement("datalist", { id: "transactionsStatus" },
            React.createElement("option", { value: "- pending", onClick: chooseStatus }),
            React.createElement("option", { value: "- completed" }),
            React.createElement("option", { value: "- cancelled" }))));
};
exports.TransactionsStatusList = TransactionsStatusList;
//# sourceMappingURL=TransactionsStatusList.js.map