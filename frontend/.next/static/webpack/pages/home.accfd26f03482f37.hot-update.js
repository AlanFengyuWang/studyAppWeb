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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _styles_progressCard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/progressCard.module.css */ \"./src/styles/progressCard.module.css\");\n/* harmony import */ var _styles_progressCard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_progressCard_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\nvar ProgressCard = function(param) {\n    var timeType = param.timeType, progress = param.progress;\n    // Color decide the progress\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_progressCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().progressCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                children: [\n                    timeType,\n                    \", I have achieved: \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ProgressCard.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.CircularProgress, {\n                value: progress,\n                color: \"#5DDC71\",\n                size: \"40vw\",\n                thickness: 5,\n                isAnimated: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.CircularProgressLabel, {\n                    style: {\n                        color: \"#4B4B4B\"\n                    },\n                    children: [\n                        progress,\n                        \"%\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ProgressCard.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ProgressCard.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ProgressCard.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_c = ProgressCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProgressCard);\nvar _c;\n$RefreshReg$(_c, \"ProgressCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL1Byb2dyZXNzQ2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFLQTtBQUVnQztBQUsxRCxJQUFNSyxZQUFZLEdBQXFCLGdCQUE0QjtRQUF6QkMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTtJQUMxRCw0QkFBNEI7SUFFNUIscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFTCxxRkFBbUI7OzBCQUNqQyw4REFBQ0Qsa0RBQUk7O29CQUFFRyxRQUFRO29CQUFDLHFCQUFtQjs7Ozs7O3FCQUFPOzBCQUMxQyw4REFBQ0wsOERBQWdCO2dCQUNmVSxLQUFLLEVBQUVKLFFBQVE7Z0JBQ2ZLLEtBQUssRUFBQyxTQUFTO2dCQUNmQyxJQUFJLEVBQUMsTUFBTTtnQkFDWEMsU0FBUyxFQUFFLENBQUM7Z0JBQ1pDLFVBQVUsRUFBRSxJQUFJOzBCQUVoQiw0RUFBQ2IsbUVBQXFCO29CQUFDYyxLQUFLLEVBQUU7d0JBQUVKLEtBQUssRUFBRSxTQUFTO3FCQUFFOzt3QkFDL0NMLFFBQVE7d0JBQUMsR0FDWjs7Ozs7O3lCQUF3Qjs7Ozs7cUJBQ1A7Ozs7OzthQUNmLENBQ047Q0FDSDtBQW5CS0YsS0FBQUEsWUFBWTtBQXFCbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob21lL1Byb2dyZXNzQ2FyZC50c3g/ODU3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBDaXJjdWxhclByb2dyZXNzLFxuICBDaXJjdWxhclByb2dyZXNzTGFiZWwsXG4gIFRleHQsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBJUHJvZ3Jlc3MgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9wcm9ncmVzc0NhcmQubW9kdWxlLmNzc1wiO1xuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHRpbWVUeXBlOiBzdHJpbmc7XG4gIHByb2dyZXNzOiBudW1iZXI7XG59XG5jb25zdCBQcm9ncmVzc0NhcmQ6IFJlYWN0LkZDPElQcm9wcz4gPSAoeyB0aW1lVHlwZSwgcHJvZ3Jlc3MgfSkgPT4ge1xuICAvLyBDb2xvciBkZWNpZGUgdGhlIHByb2dyZXNzXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzQ2FyZH0+XG4gICAgICA8VGV4dD57dGltZVR5cGV9LCBJIGhhdmUgYWNoaWV2ZWQ6IDwvVGV4dD5cbiAgICAgIDxDaXJjdWxhclByb2dyZXNzXG4gICAgICAgIHZhbHVlPXtwcm9ncmVzc31cbiAgICAgICAgY29sb3I9XCIjNUREQzcxXCJcbiAgICAgICAgc2l6ZT1cIjQwdndcIlxuICAgICAgICB0aGlja25lc3M9ezV9XG4gICAgICAgIGlzQW5pbWF0ZWQ9e3RydWV9XG4gICAgICA+XG4gICAgICAgIDxDaXJjdWxhclByb2dyZXNzTGFiZWwgc3R5bGU9e3sgY29sb3I6IFwiIzRCNEI0QlwiIH19PlxuICAgICAgICAgIHtwcm9ncmVzc30lXG4gICAgICAgIDwvQ2lyY3VsYXJQcm9ncmVzc0xhYmVsPlxuICAgICAgPC9DaXJjdWxhclByb2dyZXNzPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NDYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2lyY3VsYXJQcm9ncmVzcyIsIkNpcmN1bGFyUHJvZ3Jlc3NMYWJlbCIsIlRleHQiLCJzdHlsZXMiLCJQcm9ncmVzc0NhcmQiLCJ0aW1lVHlwZSIsInByb2dyZXNzIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJvZ3Jlc3NDYXJkIiwidmFsdWUiLCJjb2xvciIsInNpemUiLCJ0aGlja25lc3MiLCJpc0FuaW1hdGVkIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/home/ProgressCard.tsx\n");

/***/ })

});