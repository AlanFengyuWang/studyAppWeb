"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/functions/users/UserisExist.ts":
/*!********************************************!*\
  !*** ./src/functions/users/UserisExist.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserisExist; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction UserisExist(email) {\n    var userInfo = \"\";\n    var dest = \"http://localhost:2000\" + \"/user/email/\" + email;\n    fetch(dest).then(function(response) {\n        return response.json();\n    }).then(function(data) {\n        userInfo = data;\n        console.log(\"Setting data\");\n    });\n    return userInfo !== \"\";\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3VzZXJzL1VzZXJpc0V4aXN0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrRDtBQUduQyxTQUFTQyxXQUFXLENBQUNDLEtBQVksRUFBRTtJQUNoRCxJQUFJQyxRQUFRLEdBQUcsRUFBRTtJQUNqQixJQUFNQyxJQUFJLEdBQUdDLHVCQUFzQixHQUFHLGNBQWMsR0FBR0gsS0FBSztJQUM1RE0sS0FBSyxDQUFDSixJQUFJLENBQUMsQ0FDVkssSUFBSSxDQUFDQyxTQUFBQSxRQUFRO2VBQUlBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO0tBQUEsQ0FBQyxDQUNqQ0YsSUFBSSxDQUFDRyxTQUFBQSxJQUFJLEVBQUk7UUFBQ1QsUUFBUSxHQUFHUyxJQUFJLENBQUNDO1FBQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztLQUFDLENBQUMsQ0FBQztJQUU3RCxPQUFPWCxRQUFRLEtBQUssRUFBRSxDQUFDO0NBQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mdW5jdGlvbnMvdXNlcnMvVXNlcmlzRXhpc3QudHM/ZDhhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJpc0V4aXN0KGVtYWlsOnN0cmluZykge1xuICB2YXIgdXNlckluZm8gPSBcIlwiO1xuICBjb25zdCBkZXN0ID0gcHJvY2Vzcy5lbnYuU0VSVkVSUE9SVCArIFwiL3VzZXIvZW1haWwvXCIgKyBlbWFpbDtcbiAgZmV0Y2goZGVzdClcbiAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbihkYXRhID0+IHt1c2VySW5mbyA9IGRhdGE7Y29uc29sZS5sb2coXCJTZXR0aW5nIGRhdGFcIil9KTtcbiAgXG4gIHJldHVybiB1c2VySW5mbyAhPT0gXCJcIjtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlVzZXJpc0V4aXN0IiwiZW1haWwiLCJ1c2VySW5mbyIsImRlc3QiLCJwcm9jZXNzIiwiZW52IiwiU0VSVkVSUE9SVCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/users/UserisExist.ts\n");

/***/ })

});