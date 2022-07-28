"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var transactions_reducer_1 = require("./transactions/transactions-reducer");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        transactions: transactions_reducer_1.transactionsReducer
    }
});
//# sourceMappingURL=store.js.map