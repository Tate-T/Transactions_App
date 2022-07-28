"use strict";
exports.__esModule = true;
exports.App = void 0;
require("./App.css");
// import ISelect from './types/data';
var Header_1 = require("./components/Header/Header");
var TransactionsList_1 = require("./components/TransactionsList/TransactionsList");
var TransactionsStatusList_1 = require("./components/TransactionsStatusList/TransactionsStatusList");
var TransactionsTypeList_1 = require("./components/TransactionsTypeList/TransactionsTypeList");
var ImportExportBtns_1 = require("./components/ImportExportBtns/ImportExportBtns");
var TransactionsTable_1 = require("./components/TransactionsTable/TransactionsTable");
var App = function () {
    return (React.createElement("div", { className: "App" },
        React.createElement(Header_1.Header, null),
        React.createElement("div", { style: { display: 'flex' } },
            React.createElement(TransactionsList_1.TransactionsList, null),
            React.createElement("div", { style: { marginLeft: '10px' } },
                React.createElement("div", { style: { display: 'flex', marginTop: '10px' } },
                    React.createElement("div", { style: { margin: '0px 450px 10px 0px', display: 'flex' } },
                        React.createElement(TransactionsStatusList_1.TransactionsStatusList, null),
                        React.createElement(TransactionsTypeList_1.TransactionsTypeList, null)),
                    React.createElement(ImportExportBtns_1.ImportExportBtns, null)),
                React.createElement(TransactionsTable_1.TransactionsTable, null)))));
};
exports.App = App;
//# sourceMappingURL=App.js.map