"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./index.css");
var App_1 = require("./App");
var store_1 = require("./app/store");
var react_redux_1 = require("react-redux");
var root = client_1.ReactDOM.createRoot(document.getElementById('root'));
root.render(react_1.React.createElement(react_1.React.StrictMode, null,
    react_1.React.createElement(react_redux_1.Provider, { store: store_1.store },
        react_1.React.createElement(App_1.App, null))));
//# sourceMappingURL=index.js.map