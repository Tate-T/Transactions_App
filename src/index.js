"use strict";
exports.__esModule = true;
var client_1 = require("react-dom/client");
require("./index.css");
var store_1 = require("./app/store");
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render(store_1.store, { store: store_1.store } >
    />
    < /Provider>
    < /React.StrictMode>);
//# sourceMappingURL=index.js.map