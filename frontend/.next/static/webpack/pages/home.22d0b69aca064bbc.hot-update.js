"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./src/pages/home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/home/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_home_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/home/Profile */ \"./src/components/home/Profile.tsx\");\n/* harmony import */ var _components_home_ProgressDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/ProgressDisplay */ \"./src/components/home/ProgressDisplay.tsx\");\n/* harmony import */ var _components_home_TodayTaskList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/TodayTaskList */ \"./src/components/home/TodayTaskList.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_tasks_AddTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/tasks/AddTask */ \"./src/components/tasks/AddTask.tsx\");\n/* harmony import */ var _EmailContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../EmailContext */ \"./src/pages/EmailContext.tsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar HomePage = function() {\n    _s();\n    var email = (0,_EmailContext__WEBPACK_IMPORTED_MODULE_6__.useEmailContext)().email;\n    var SHOW_TASK_URL = \"http://localhost:2000/task/email/\" + email;\n    var fetcher = function(url) {\n        return fetch(url).then(function(res) {\n            return res.json();\n        });\n    };\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(SHOW_TASK_URL, fetcher), data = ref.data, error = ref.error, mutate = ref.mutate;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n        marginBottom: \"30%\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_Profile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_ProgressDisplay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                style: {\n                    width: \"90%\",\n                    margin: \"0 auto\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                        fontSize: \"1xl\",\n                        fontWeight: 600,\n                        children: \"What do I need to do today?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_TodayTaskList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: data,\n                        error: error,\n                        mutate: mutate\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasks_AddTask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        url: SHOW_TASK_URL,\n                        mutate: function() {\n                            return mutate();\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_s(HomePage, \"dIjo29YONBFUiiRP39j7F6PKHi8=\", false, function() {\n    return [\n        _EmailContext__WEBPACK_IMPORTED_MODULE_6__.useEmailContext,\n        swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = HomePage;\nHomePage.auth = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQW1EO0FBQ0M7QUFDYztBQUNGO0FBQ1g7QUFDQTtBQUNIO0FBQ3pCOztBQUV6QixJQUFNUyxRQUFRLEdBQUcsV0FBTTs7SUFDckIsSUFBTSxLQUFPLEdBQUtGLDhEQUFlLEVBQUUsQ0FBM0JHLEtBQUs7SUFFYixJQUFNQyxhQUFhLEdBQUdDLG1DQUF5QixHQUFHRixLQUFLO0lBRXZELElBQU1LLE9BQU8sR0FBRyxTQUFDQyxHQUFXO2VBQUtDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDLENBQUNFLElBQUksQ0FBQyxTQUFDQyxHQUFHO21CQUFLQSxHQUFHLENBQUNDLElBQUksRUFBRTtTQUFBLENBQUM7S0FBQTtJQUNyRSxJQUFnQ1osR0FBOEIsR0FBOUJBLCtDQUFNLENBQUNHLGFBQWEsRUFBRUksT0FBTyxDQUFDLEVBQXRETSxJQUFJLEdBQW9CYixHQUE4QixDQUF0RGEsSUFBSSxFQUFFQyxLQUFLLEdBQWFkLEdBQThCLENBQWhEYyxLQUFLLEVBQUVDLE1BQU0sR0FBS2YsR0FBOEIsQ0FBekNlLE1BQU07SUFDM0IscUJBQ0UsOERBQUNuQixpREFBRztRQUFDb0IsWUFBWSxFQUFDLEtBQUs7OzBCQUNyQiw4REFBQ3ZCLGdFQUFPOzs7O3FCQUFHOzBCQUNYLDhEQUFDQyx3RUFBYTs7OztxQkFBRzswQkFDakIsOERBQUNFLGlEQUFHO2dCQUFDcUIsS0FBSyxFQUFFO29CQUFFQyxLQUFLLEVBQUUsS0FBSztvQkFBRUMsTUFBTSxFQUFFLFFBQVE7aUJBQUU7O2tDQUM1Qyw4REFBQ3RCLGtEQUFJO3dCQUFDdUIsUUFBUSxFQUFDLEtBQUs7d0JBQUNDLFVBQVUsRUFBRSxHQUFHO2tDQUFFLDZCQUV0Qzs7Ozs7NkJBQU87a0NBQ1AsOERBQUMxQixzRUFBYTt3QkFBQ2tCLElBQUksRUFBRUEsSUFBSTt3QkFBRUMsS0FBSyxFQUFFQSxLQUFLO3dCQUFFQyxNQUFNLEVBQUVBLE1BQU07Ozs7OzZCQUFJO2tDQUMzRCw4REFBQ2pCLGlFQUFPO3dCQUFDVSxHQUFHLEVBQUVMLGFBQWE7d0JBQUVZLE1BQU0sRUFBRTttQ0FBTUEsTUFBTSxFQUFFO3lCQUFBOzs7Ozs2QkFBSTs7Ozs7O3FCQUNuRDs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBcEJLZCxRQUFROztRQUNNRiwwREFBZTtRQUtEQywyQ0FBTTs7O0FBTmxDQyxLQUFBQSxRQUFRO0FBc0JkQSxRQUFRLENBQUNxQixJQUFJLEdBQUcsSUFBSSxDQUFDO0FBRXJCLCtEQUFlckIsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9ob21lL2luZGV4LnRzeD83NTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob21lL1Byb2ZpbGVcIjtcbmltcG9ydCBQcm9ncmVzc0NhcmRzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvbWUvUHJvZ3Jlc3NEaXNwbGF5XCI7XG5pbXBvcnQgVG9kYXlUYXNrTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob21lL1RvZGF5VGFza0xpc3RcIjtcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBBZGRUYXNrIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Rhc2tzL0FkZFRhc2tcIjtcbmltcG9ydCB7IHVzZUVtYWlsQ29udGV4dCB9IGZyb20gXCIuLi9FbWFpbENvbnRleHRcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBlbWFpbCB9ID0gdXNlRW1haWxDb250ZXh0KCk7XG5cbiAgY29uc3QgU0hPV19UQVNLX1VSTCA9IHByb2Nlc3MuZW52LkdFVF9UQVNLU19VUkwgKyBlbWFpbDtcblxuICBjb25zdCBmZXRjaGVyID0gKHVybDogc3RyaW5nKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIG11dGF0ZSB9ID0gdXNlU1dSKFNIT1dfVEFTS19VUkwsIGZldGNoZXIpO1xuICByZXR1cm4gKFxuICAgIDxCb3ggbWFyZ2luQm90dG9tPVwiMzAlXCI+XG4gICAgICA8UHJvZmlsZSAvPlxuICAgICAgPFByb2dyZXNzQ2FyZHMgLz5cbiAgICAgIDxCb3ggc3R5bGU9e3sgd2lkdGg6IFwiOTAlXCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fT5cbiAgICAgICAgPFRleHQgZm9udFNpemU9XCIxeGxcIiBmb250V2VpZ2h0PXs2MDB9PlxuICAgICAgICAgIFdoYXQgZG8gSSBuZWVkIHRvIGRvIHRvZGF5P1xuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUb2RheVRhc2tMaXN0IGRhdGE9e2RhdGF9IGVycm9yPXtlcnJvcn0gbXV0YXRlPXttdXRhdGV9IC8+XG4gICAgICAgIDxBZGRUYXNrIHVybD17U0hPV19UQVNLX1VSTH0gbXV0YXRlPXsoKSA9PiBtdXRhdGUoKX0gLz5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuSG9tZVBhZ2UuYXV0aCA9IHRydWU7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvZmlsZSIsIlByb2dyZXNzQ2FyZHMiLCJUb2RheVRhc2tMaXN0IiwiQm94IiwiVGV4dCIsIkFkZFRhc2siLCJ1c2VFbWFpbENvbnRleHQiLCJ1c2VTV1IiLCJIb21lUGFnZSIsImVtYWlsIiwiU0hPV19UQVNLX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJHRVRfVEFTS1NfVVJMIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJtdXRhdGUiLCJtYXJnaW5Cb3R0b20iLCJzdHlsZSIsIndpZHRoIiwibWFyZ2luIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiYXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home/index.tsx\n");

/***/ })

});