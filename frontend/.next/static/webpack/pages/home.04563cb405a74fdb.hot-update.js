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

/***/ "./src/components/home/ProgressCard.tsx":
/*!**********************************************!*\
  !*** ./src/components/home/ProgressCard.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _styles_progressCard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/progressCard.module.css */ \"./src/styles/progressCard.module.css\");\n/* harmony import */ var _styles_progressCard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_progressCard_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\nvar ProgressCard = function(param) {\n    var timeType = param.timeType, progress = param.progress;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_progressCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().progressCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                children: [\n                    timeType,\n                    \", I have achieved: \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ProgressCard.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.CircularProgress, {\n                value: progress,\n                color: \"#5DDC71\",\n                size: \"50%\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.CircularProgressLabel, {\n                    children: [\n                        progress,\n                        \"%\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ProgressCard.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ProgressCard.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ProgressCard.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this);\n};\n_c = ProgressCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProgressCard);\nvar _c;\n$RefreshReg$(_c, \"ProgressCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL1Byb2dyZXNzQ2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFLQTtBQUVnQztBQUsxRCxJQUFNSyxZQUFZLEdBQXFCLGdCQUE0QjtRQUF6QkMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTtJQUMxRCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVMLHFGQUFtQjs7MEJBQ2pDLDhEQUFDRCxrREFBSTs7b0JBQUVHLFFBQVE7b0JBQUMscUJBQW1COzs7Ozs7cUJBQU87MEJBQzFDLDhEQUFDTCw4REFBZ0I7Z0JBQUNVLEtBQUssRUFBRUosUUFBUTtnQkFBRUssS0FBSyxFQUFDLFNBQVM7Z0JBQUNDLElBQUksRUFBQyxLQUFLOzBCQUMzRCw0RUFBQ1gsbUVBQXFCOzt3QkFBRUssUUFBUTt3QkFBQyxHQUFDOzs7Ozs7eUJBQXdCOzs7OztxQkFDekM7Ozs7OzthQUNmLENBQ047Q0FDSDtBQVRLRixLQUFBQSxZQUFZO0FBV2xCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9Qcm9ncmVzc0NhcmQudHN4Pzg1N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQ2lyY3VsYXJQcm9ncmVzcyxcbiAgQ2lyY3VsYXJQcm9ncmVzc0xhYmVsLFxuICBUZXh0LFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgSVByb2dyZXNzIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvcHJvZ3Jlc3NDYXJkLm1vZHVsZS5jc3NcIjtcbmludGVyZmFjZSBJUHJvcHMge1xuICB0aW1lVHlwZTogc3RyaW5nO1xuICBwcm9ncmVzczogbnVtYmVyO1xufVxuY29uc3QgUHJvZ3Jlc3NDYXJkOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgdGltZVR5cGUsIHByb2dyZXNzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzQ2FyZH0+XG4gICAgICA8VGV4dD57dGltZVR5cGV9LCBJIGhhdmUgYWNoaWV2ZWQ6IDwvVGV4dD5cbiAgICAgIDxDaXJjdWxhclByb2dyZXNzIHZhbHVlPXtwcm9ncmVzc30gY29sb3I9XCIjNUREQzcxXCIgc2l6ZT1cIjUwJVwiPlxuICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzc0xhYmVsPntwcm9ncmVzc30lPC9DaXJjdWxhclByb2dyZXNzTGFiZWw+XG4gICAgICA8L0NpcmN1bGFyUHJvZ3Jlc3M+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0NhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDaXJjdWxhclByb2dyZXNzIiwiQ2lyY3VsYXJQcm9ncmVzc0xhYmVsIiwiVGV4dCIsInN0eWxlcyIsIlByb2dyZXNzQ2FyZCIsInRpbWVUeXBlIiwicHJvZ3Jlc3MiLCJkaXYiLCJjbGFzc05hbWUiLCJwcm9ncmVzc0NhcmQiLCJ2YWx1ZSIsImNvbG9yIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/home/ProgressCard.tsx\n");

/***/ })

});