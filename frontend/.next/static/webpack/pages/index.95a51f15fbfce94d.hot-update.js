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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserisExist; }\n/* harmony export */ });\n/* harmony import */ var _Users_fengyuwangbv_Desktop_studyApp_studyAppWeb_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_fengyuwangbv_Desktop_studyApp_studyAppWeb_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_fengyuwangbv_Desktop_studyApp_studyAppWeb_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nfunction UserisExist(email) {\n    return _UserisExist.apply(this, arguments);\n};\nfunction _UserisExist() {\n    _UserisExist = _asyncToGenerator(_Users_fengyuwangbv_Desktop_studyApp_studyAppWeb_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(email) {\n        var userInfo, dest, result;\n        return _Users_fengyuwangbv_Desktop_studyApp_studyAppWeb_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    userInfo = \"\";\n                    dest = \"http://localhost:2000\" + \"/user/email/\" + email;\n                    _ctx.next = 4;\n                    return fetch(dest);\n                case 4:\n                    result = _ctx.sent;\n                    c;\n                    return _ctx.abrupt(\"return\", userInfo !== \"\");\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _UserisExist.apply(this, arguments);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3VzZXJzL1VzZXJpc0V4aXN0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUduQyxTQUFlQyxXQUFXLENBQUNDLEtBQVk7V0FBeEJELFlBQVc7RUFTeEM7U0FUNkJBLFlBQVc7SUFBWEEsWUFBVyxHQUExQix3TUFBMkJDLEtBQVksRUFBRTtZQUNsREMsUUFBUSxFQUNOQyxJQUFJLEVBQ0pDLE1BQU07Ozs7b0JBRlJGLFFBQVEsR0FBRyxFQUFFLENBQUM7b0JBQ1pDLElBQUksR0FBR0UsdUJBQXNCLEdBQUcsY0FBYyxHQUFHSixLQUFLLENBQUM7OzJCQUN4Q08sS0FBSyxDQUFDTCxJQUFJLENBQUM7O29CQUExQkMsTUFBTSxZQUFvQjtvQkFDaENLLENBQUM7aURBSU1QLFFBQVEsS0FBSyxFQUFFOzs7Ozs7S0FDdkI7V0FUNkJGLFlBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Z1bmN0aW9ucy91c2Vycy9Vc2VyaXNFeGlzdC50cz9kOGE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gVXNlcmlzRXhpc3QoZW1haWw6c3RyaW5nKSB7XG4gIHZhciB1c2VySW5mbyA9IFwiXCI7XG4gIGNvbnN0IGRlc3QgPSBwcm9jZXNzLmVudi5TRVJWRVJQT1JUICsgXCIvdXNlci9lbWFpbC9cIiArIGVtYWlsO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChkZXN0KVxuICBjXG4vLyAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbi8vICAgLnRoZW4oZGF0YSA9PiB7dXNlckluZm8gPSBkYXRhO2NvbnNvbGUubG9nKFwiU2V0dGluZyBkYXRhXCIpfSk7XG4gIFxuICByZXR1cm4gdXNlckluZm8gIT09IFwiXCI7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJVc2VyaXNFeGlzdCIsImVtYWlsIiwidXNlckluZm8iLCJkZXN0IiwicmVzdWx0IiwicHJvY2VzcyIsImVudiIsIlNFUlZFUlBPUlQiLCJmZXRjaCIsImMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/users/UserisExist.ts\n");

/***/ })

});