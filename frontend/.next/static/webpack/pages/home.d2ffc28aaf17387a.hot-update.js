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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _styles_progressCard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/progressCard.module.css */ \"./src/styles/progressCard.module.css\");\n/* harmony import */ var _styles_progressCard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_progressCard_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\nvar ProgressCard = function(param) {\n    var timeType = param.timeType, progress = param.progress;\n    // Color decide the progress\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_progressCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().progressCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                textAlign: \"left\",\n                marginLeft: \"5%\",\n                color: \"#474444\",\n                wei: true,\n                children: [\n                    timeType,\n                    \", I have achieved:\",\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ProgressCard.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.CircularProgress, {\n                value: progress,\n                color: \"#5DDC71\",\n                size: \"40vw\",\n                thickness: 5,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.CircularProgressLabel, {\n                    style: {\n                        color: \"#4B4B4B\"\n                    },\n                    children: [\n                        progress,\n                        \"%\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ProgressCard.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ProgressCard.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ProgressCard.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_c = ProgressCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProgressCard);\nvar _c;\n$RefreshReg$(_c, \"ProgressCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL1Byb2dyZXNzQ2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFLQTtBQUVnQztBQUsxRCxJQUFNSyxZQUFZLEdBQXFCLGdCQUE0QjtRQUF6QkMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTtJQUMxRCw0QkFBNEI7SUFFNUIscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFTCxxRkFBbUI7OzBCQUNqQyw4REFBQ0Qsa0RBQUk7Z0JBQUNRLFNBQVMsRUFBQyxNQUFNO2dCQUFDQyxVQUFVLEVBQUMsSUFBSTtnQkFBQ0MsS0FBSyxFQUFDLFNBQVM7Z0JBQUNDLEdBQUc7O29CQUN2RFIsUUFBUTtvQkFBQyxvQkFBa0I7b0JBQUMsR0FBRzs7Ozs7O3FCQUMzQjswQkFDUCw4REFBQ0wsOERBQWdCO2dCQUNmYyxLQUFLLEVBQUVSLFFBQVE7Z0JBQ2ZNLEtBQUssRUFBQyxTQUFTO2dCQUNmRyxJQUFJLEVBQUMsTUFBTTtnQkFDWEMsU0FBUyxFQUFFLENBQUM7MEJBRVosNEVBQUNmLG1FQUFxQjtvQkFBQ2dCLEtBQUssRUFBRTt3QkFBRUwsS0FBSyxFQUFFLFNBQVM7cUJBQUU7O3dCQUMvQ04sUUFBUTt3QkFBQyxHQUNaOzs7Ozs7eUJBQXdCOzs7OztxQkFDUDs7Ozs7O2FBQ2YsQ0FDTjtDQUNIO0FBcEJLRixLQUFBQSxZQUFZO0FBc0JsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hvbWUvUHJvZ3Jlc3NDYXJkLnRzeD84NTdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIENpcmN1bGFyUHJvZ3Jlc3MsXG4gIENpcmN1bGFyUHJvZ3Jlc3NMYWJlbCxcbiAgVGV4dCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IElQcm9ncmVzcyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL3Byb2dyZXNzQ2FyZC5tb2R1bGUuY3NzXCI7XG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdGltZVR5cGU6IHN0cmluZztcbiAgcHJvZ3Jlc3M6IG51bWJlcjtcbn1cbmNvbnN0IFByb2dyZXNzQ2FyZDogUmVhY3QuRkM8SVByb3BzPiA9ICh7IHRpbWVUeXBlLCBwcm9ncmVzcyB9KSA9PiB7XG4gIC8vIENvbG9yIGRlY2lkZSB0aGUgcHJvZ3Jlc3NcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NDYXJkfT5cbiAgICAgIDxUZXh0IHRleHRBbGlnbj1cImxlZnRcIiBtYXJnaW5MZWZ0PVwiNSVcIiBjb2xvcj1cIiM0NzQ0NDRcIiB3ZWk+XG4gICAgICAgIHt0aW1lVHlwZX0sIEkgaGF2ZSBhY2hpZXZlZDp7XCIgXCJ9XG4gICAgICA8L1RleHQ+XG4gICAgICA8Q2lyY3VsYXJQcm9ncmVzc1xuICAgICAgICB2YWx1ZT17cHJvZ3Jlc3N9XG4gICAgICAgIGNvbG9yPVwiIzVEREM3MVwiXG4gICAgICAgIHNpemU9XCI0MHZ3XCJcbiAgICAgICAgdGhpY2tuZXNzPXs1fVxuICAgICAgPlxuICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzc0xhYmVsIHN0eWxlPXt7IGNvbG9yOiBcIiM0QjRCNEJcIiB9fT5cbiAgICAgICAgICB7cHJvZ3Jlc3N9JVxuICAgICAgICA8L0NpcmN1bGFyUHJvZ3Jlc3NMYWJlbD5cbiAgICAgIDwvQ2lyY3VsYXJQcm9ncmVzcz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQ2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJDaXJjdWxhclByb2dyZXNzTGFiZWwiLCJUZXh0Iiwic3R5bGVzIiwiUHJvZ3Jlc3NDYXJkIiwidGltZVR5cGUiLCJwcm9ncmVzcyIsImRpdiIsImNsYXNzTmFtZSIsInByb2dyZXNzQ2FyZCIsInRleHRBbGlnbiIsIm1hcmdpbkxlZnQiLCJjb2xvciIsIndlaSIsInZhbHVlIiwic2l6ZSIsInRoaWNrbmVzcyIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/home/ProgressCard.tsx\n");

/***/ })

});