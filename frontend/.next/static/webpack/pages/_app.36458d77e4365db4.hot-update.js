"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _protected__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./protected */ \"./src/pages/protected.tsx\");\n/* harmony import */ var _EmailContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EmailContext */ \"./src/pages/EmailContext.tsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ \"./src/components/layout.tsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MyApp(_param) {\n    var Component = _param.Component, session = _param.pageProps.session, pageProps = _objectWithoutProperties(_param.pageProps, [\n        \"session\"\n    ]);\n    _s();\n    var data = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)().data;\n    //using useContext to set email after logged in\n    var setEmail = (0,_EmailContext__WEBPACK_IMPORTED_MODULE_5__.useEmailContext)().setEmail;\n    setEmail(data.session && data.session.user && data.session.user.email ? session.user.email : \"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n            session: session,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ChakraProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EmailContext__WEBPACK_IMPORTED_MODULE_5__.EmailProvider, {\n                    children: Component.noAuth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/_app.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 15\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_protected__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/_app.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 19\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/_app.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/_app.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/_app.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/_app.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/_app.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(MyApp, \"SCmvpfCbGQu73EwgOREMEpTqc6g=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        _EmailContext__WEBPACK_IMPORTED_MODULE_5__.useEmailContext\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUVtQjtBQUN3QjtBQUNSO0FBQzlCO0FBQzRCO0FBQ3RCOztBQVkxQyxTQUFTUSxLQUFLLENBQUMsTUFBNkQsRUFBRTtRQUE3REMsU0FBUyxHQUFYLE1BQTZELENBQTNEQSxTQUFTLEVBQUVDLE9BQW9CLEdBQWpDLE1BQTZELENBQWhEQSxTQUFTLENBQUlDLE9BQU8sRUFBS0QsU0FBUyw0QkFBL0MsTUFBNkQsQ0FBaERBLFNBQVM7UUFBSUMsU0FBTzs7O0lBQzlDLElBQU0sSUFBTSxHQUFLVCwyREFBVSxFQUFFLENBQXJCVSxJQUFJO0lBQ1osK0NBQStDO0lBQy9DLElBQU0sUUFBVSxHQUFLTiw4REFBZSxFQUFFLENBQTlCTyxRQUFRO0lBQ2hCQSxRQUFRLENBQ05ELElBQUksQ0FBQ0QsT0FBTyxJQUFJQyxJQUFJLENBQUNELE9BQU8sQ0FBQ0csSUFBSSxJQUFJRixJQUFJLENBQUNELE9BQU8sQ0FBQ0csSUFBSSxDQUFDQyxLQUFLLEdBQUdKLE9BQU8sQ0FBQ0csSUFBSSxDQUFDQyxLQUFLLEdBQUcsRUFBRSxDQUN2RixDQUFDO0lBQ0YscUJBQ0U7a0JBQ0UsNEVBQUNkLDREQUFlO1lBQUNVLE9BQU8sRUFBRUEsT0FBTztzQkFDL0IsNEVBQUNYLDREQUFjOzBCQUNiLDRFQUFDSyx3REFBYTs4QkFDWEksU0FBUyxDQUFDTyxNQUFNLGlCQUNmLDhEQUFDUCxTQUFTLG9CQUFLQyxTQUFTOzs7OzRCQUFJLGlCQUU1Qiw4REFBQ04sa0RBQVM7a0NBQ1IsNEVBQUNHLDBEQUFNO3NDQUNMLDRFQUFDRSxTQUFTLG9CQUFLQyxTQUFTOzs7O29DQUFJOzs7OztnQ0FDckI7Ozs7OzRCQUNDOzs7Ozt3QkFFQTs7Ozs7b0JBQ0Q7Ozs7O2dCQUNEO3FCQUNqQixDQUNIO0NBQ0g7R0ExQlFGLEtBQUs7O1FBQ0tOLHVEQUFVO1FBRU5JLDBEQUFlOzs7QUFIN0JFLEtBQUFBLEtBQUs7QUE0QmQsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciwgZ2V0U2Vzc2lvbiwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXV0aEd1YXJkIGZyb20gXCIuL3Byb3RlY3RlZFwiO1xuaW1wb3J0IHsgRW1haWxQcm92aWRlciwgdXNlRW1haWxDb250ZXh0IH0gZnJvbSBcIi4vRW1haWxDb250ZXh0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuXG5leHBvcnQgdHlwZSBOZXh0QXBwbGljYXRpb25QYWdlPFAgPSBhbnksIElQID0gUD4gPSBOZXh0UGFnZTxQLCBJUD4gJiB7XG4gIG5vQXV0aD86IGJvb2xlYW47XG59O1xuXG50eXBlIEFwcFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueTtcbiAgQ29tcG9uZW50OiBOZXh0QXBwbGljYXRpb25QYWdlO1xufTtcblxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzOiB7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9IH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlU2Vzc2lvbigpO1xuICAvL3VzaW5nIHVzZUNvbnRleHQgdG8gc2V0IGVtYWlsIGFmdGVyIGxvZ2dlZCBpblxuICBjb25zdCB7IHNldEVtYWlsIH0gPSB1c2VFbWFpbENvbnRleHQoKTtcbiAgc2V0RW1haWwoXG4gICAgZGF0YS5zZXNzaW9uICYmIGRhdGEuc2Vzc2lvbi51c2VyICYmIGRhdGEuc2Vzc2lvbi51c2VyLmVtYWlsID8gc2Vzc2lvbi51c2VyLmVtYWlsIDogXCJcIlxuICApO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PlxuICAgICAgICA8Q2hha3JhUHJvdmlkZXI+XG4gICAgICAgICAgPEVtYWlsUHJvdmlkZXI+XG4gICAgICAgICAgICB7Q29tcG9uZW50Lm5vQXV0aCA/IChcbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEF1dGhHdWFyZD5cbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICA8L0F1dGhHdWFyZD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9FbWFpbFByb3ZpZGVyPlxuICAgICAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICAgICAgPC9TZXNzaW9uUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkNoYWtyYVByb3ZpZGVyIiwiU2Vzc2lvblByb3ZpZGVyIiwidXNlU2Vzc2lvbiIsIlJlYWN0IiwiQXV0aEd1YXJkIiwiRW1haWxQcm92aWRlciIsInVzZUVtYWlsQ29udGV4dCIsIkxheW91dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiIsImRhdGEiLCJzZXRFbWFpbCIsInVzZXIiLCJlbWFpbCIsIm5vQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ })

});