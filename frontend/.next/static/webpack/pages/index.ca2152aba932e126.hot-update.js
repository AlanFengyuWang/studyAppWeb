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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserisExist; }\n/* harmony export */ });\n/* harmony import */ var _Users_fengyuwangbv_Desktop_studyApp_studyAppWeb_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_fengyuwangbv_Desktop_studyApp_studyAppWeb_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_fengyuwangbv_Desktop_studyApp_studyAppWeb_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nfunction UserisExist(email) {\n    return _UserisExist.apply(this, arguments);\n};\nfunction _UserisExist() {\n    _UserisExist = _asyncToGenerator(_Users_fengyuwangbv_Desktop_studyApp_studyAppWeb_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(email) {\n        var dest, data;\n        return _Users_fengyuwangbv_Desktop_studyApp_studyAppWeb_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    dest = \"http://localhost:2000\" + \"/user/email/\" + email;\n                    fetch(dest).then();\n                    if (!(Object.keys(res).length === 0)) {\n                        _ctx.next = 4;\n                        break;\n                    }\n                    return _ctx.abrupt(\"return\", false);\n                case 4:\n                    _ctx.next = 6;\n                    return res.json();\n                case 6:\n                    data = _ctx.sent;\n                    console.log(\"---->data = \" + data);\n                    if (!data) {\n                        _ctx.next = 11;\n                        break;\n                    }\n                    console.log(\"returning true\");\n                    return _ctx.abrupt(\"return\", true);\n                case 11:\n                    return _ctx.abrupt(\"return\", false);\n                case 12:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _UserisExist.apply(this, arguments);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3VzZXJzL1VzZXJpc0V4aXN0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUl6QixTQUFlQyxXQUFXLENBQUNDLEtBQVk7V0FBeEJELFlBQVc7RUFpQnhDO1NBakI2QkEsWUFBVztJQUFYQSxZQUFXLEdBQTFCLHdNQUEyQkMsS0FBWSxFQUFFO1lBQ2hEQyxJQUFJLEVBUUpDLElBQUk7Ozs7b0JBUkpELElBQUksR0FBR0UsdUJBQXNCLEdBQUcsY0FBYyxHQUFHSCxLQUFLLENBQUM7b0JBQzdETSxLQUFLLENBQUNMLElBQUksQ0FBQyxDQUFDTSxJQUFJLEVBQUU7d0JBSWZDLENBQUFBLENBQUFBLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTSxLQUFLLENBQUM7Ozs7aURBQ3ZCLEtBQUs7OzsyQkFFS0QsR0FBRyxDQUFDRSxJQUFJLEVBQUU7O29CQUF2QlYsSUFBSSxZQUFtQjtvQkFDN0JXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsR0FBR1osSUFBSSxDQUFDLENBQUM7d0JBQ2hDQSxDQUFBQSxJQUFJOzs7O29CQUNIVyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lEQUV2QixJQUFJOztpREFFUixLQUFLOzs7Ozs7S0FDYjtXQWpCNkJmLFlBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Z1bmN0aW9ucy91c2Vycy9Vc2VyaXNFeGlzdC50cz9kOGE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIFVzZXJpc0V4aXN0KGVtYWlsOnN0cmluZykge1xuICBjb25zdCBkZXN0ID0gcHJvY2Vzcy5lbnYuU0VSVkVSUE9SVCArIFwiL3VzZXIvZW1haWwvXCIgKyBlbWFpbDtcbiAgZmV0Y2goZGVzdCkudGhlbigpXG5cblxuLy8gICBjb25zb2xlLmxvZyhcImhlcmUsIHJlcyA9IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gIGlmKE9iamVjdC5rZXlzKHJlcykubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICBjb25zb2xlLmxvZyhcIi0tLS0+ZGF0YSA9IFwiICsgZGF0YSk7XG4gIGlmKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuaW5nIHRydWVcIik7XG4gICAgICBcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlVzZXJpc0V4aXN0IiwiZW1haWwiLCJkZXN0IiwiZGF0YSIsInByb2Nlc3MiLCJlbnYiLCJTRVJWRVJQT1JUIiwiZmV0Y2giLCJ0aGVuIiwiT2JqZWN0Iiwia2V5cyIsInJlcyIsImxlbmd0aCIsImpzb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/users/UserisExist.ts\n");

/***/ })

});