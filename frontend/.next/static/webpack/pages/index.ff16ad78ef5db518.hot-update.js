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

/***/ "./src/components/tasks/TaskCard.tsx":
/*!*******************************************!*\
  !*** ./src/components/tasks/TaskCard.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ \"./src/styles/theme.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\n\nvar TaskCard = function(param) {\n    var task = param.task;\n    //deciding the background color: red means its urgent, oragne means it's moderate urgent, green means it's not urgent\n    var milestones = task.milestones;\n    var color = _styles_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.colors.task.green;\n    var imgPath = \"/taskTypes/\" + task.type + \".svg\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        background: color,\n        borderRadius: \"10\",\n        padding: \"7%\",\n        paddingLeft: \"5\",\n        marginBottom: \"7px\",\n        width: \"100%\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                gap: \"10%\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                        borderRadius: \"100%\",\n                        backgroundColor: \"#C4C4C4\",\n                        width: \"60px\",\n                        height: \"60px\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            style: {\n                                position: \"relative\",\n                                left: \"15%\",\n                                top: \"15%\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                layout: \"fixed\",\n                                width: \"37vw\",\n                                height: \"38vw\",\n                                src: imgPath,\n                                alt: \"task image\"\n                            }, void 0, false, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/TaskCard.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/TaskCard.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/TaskCard.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                        fontWeight: \"semibold\",\n                        children: task.taskTitle\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/TaskCard.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/TaskCard.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            task.due && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                color: _styles_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.colors.task.due,\n                fontSize: \"xs\",\n                float: \"right\",\n                fontWeight: \"semibold\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        \"Due: \",\n                        task.due\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/TaskCard.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/TaskCard.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_c = TaskCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskCard);\nvar _c;\n$RefreshReg$(_c, \"TaskCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90YXNrcy9UYXNrQ2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQWdGO0FBQ3REO0FBRWlCO0FBQ1o7QUFFL0IsSUFBTU0sUUFBUSxHQUFHLGdCQUF3QztRQUFyQ0MsSUFBSSxTQUFKQSxJQUFJO0lBQ3RCLHFIQUFxSDtJQUNySCxJQUFNQyxVQUFVLEdBQUdELElBQUksQ0FBQ0MsVUFBVTtJQUNsQyxJQUFJQyxLQUFLLEdBQUdMLGtFQUF1QjtJQUNuQyxJQUFNUSxPQUFPLEdBQUcsYUFBYSxHQUFHTCxJQUFJLENBQUNNLElBQUksR0FBRyxNQUFNO0lBRWxELHFCQUNFLDhEQUFDYixpREFBRztRQUNGYyxVQUFVLEVBQUVMLEtBQUs7UUFDakJNLFlBQVksRUFBQyxJQUFJO1FBQ2pCQyxPQUFPLEVBQUMsSUFBSTtRQUNaQyxXQUFXLEVBQUMsR0FBRztRQUNmQyxZQUFZLEVBQUMsS0FBSztRQUNsQkMsS0FBSyxFQUFDLE1BQU07OzBCQUVaLDhEQUFDbEIsa0RBQUk7Z0JBQUNtQixHQUFHLEVBQUMsS0FBSzs7a0NBQ2IsOERBQUNwQixpREFBRzt3QkFDRmUsWUFBWSxFQUFDLE1BQU07d0JBQ25CTSxlQUFlLEVBQUMsU0FBUzt3QkFDekJGLEtBQUssRUFBQyxNQUFNO3dCQUNaRyxNQUFNLEVBQUMsTUFBTTtrQ0FFYiw0RUFBQ0MsUUFBTTs0QkFBQ0MsS0FBSyxFQUFFO2dDQUFFQyxRQUFRLEVBQUUsVUFBVTtnQ0FBRUMsSUFBSSxFQUFFLEtBQUs7Z0NBQUVDLEdBQUcsRUFBRSxLQUFLOzZCQUFFO3NDQUM5RCw0RUFBQ3RCLG1EQUFLO2dDQUNKdUIsTUFBTSxFQUFDLE9BQU87Z0NBQ2RULEtBQUssRUFBQyxNQUFNO2dDQUNaRyxNQUFNLEVBQUMsTUFBTTtnQ0FDYk8sR0FBRyxFQUFFakIsT0FBTztnQ0FDWmtCLEdBQUcsRUFBQyxZQUFZOzs7OztxQ0FDaEI7Ozs7O2lDQUNLOzs7Ozs2QkFDTDtrQ0FDTiw4REFBQzVCLGtEQUFJO3dCQUFDNkIsVUFBVSxFQUFDLFVBQVU7a0NBQUV4QixJQUFJLENBQUN5QixTQUFTOzs7Ozs2QkFBUTs7Ozs7O3FCQUM5QztZQUNOekIsSUFBSSxDQUFDMEIsR0FBRyxrQkFDUCw4REFBQy9CLGtEQUFJO2dCQUNITyxLQUFLLEVBQUVMLGdFQUFxQjtnQkFDNUI4QixRQUFRLEVBQUMsSUFBSTtnQkFDYkMsS0FBSyxFQUFDLE9BQU87Z0JBQ2JKLFVBQVUsRUFBQyxVQUFVOzBCQUVyQjs7d0JBQUUsT0FBSzt3QkFBQ3hCLElBQUksQ0FBQzBCLEdBQUc7O2dDQUFJOzs7OztxQkFDZjs7Ozs7O2FBRUwsQ0FDTjtDQUNIO0FBOUNLM0IsS0FBQUEsUUFBUTtBQWdEZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Rhc2tzL1Rhc2tDYXJkLnRzeD9kMGI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgRmxleCwgU3RhY2ssIFN0YWNrRGl2aWRlciwgVlN0YWNrLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhc2tGb3JtVmFsdWVzIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5jb25zdCBUYXNrQ2FyZCA9ICh7IHRhc2sgfTogeyB0YXNrOiBUYXNrRm9ybVZhbHVlcyB9KSA9PiB7XG4gIC8vZGVjaWRpbmcgdGhlIGJhY2tncm91bmQgY29sb3I6IHJlZCBtZWFucyBpdHMgdXJnZW50LCBvcmFnbmUgbWVhbnMgaXQncyBtb2RlcmF0ZSB1cmdlbnQsIGdyZWVuIG1lYW5zIGl0J3Mgbm90IHVyZ2VudFxuICBjb25zdCBtaWxlc3RvbmVzID0gdGFzay5taWxlc3RvbmVzO1xuICBsZXQgY29sb3IgPSBUaGVtZS5jb2xvcnMudGFzay5ncmVlbjtcbiAgY29uc3QgaW1nUGF0aCA9IFwiL3Rhc2tUeXBlcy9cIiArIHRhc2sudHlwZSArIFwiLnN2Z1wiO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgYmFja2dyb3VuZD17Y29sb3J9XG4gICAgICBib3JkZXJSYWRpdXM9XCIxMFwiXG4gICAgICBwYWRkaW5nPVwiNyVcIlxuICAgICAgcGFkZGluZ0xlZnQ9XCI1XCJcbiAgICAgIG1hcmdpbkJvdHRvbT1cIjdweFwiXG4gICAgICB3aWR0aD1cIjEwMCVcIlxuICAgID5cbiAgICAgIDxGbGV4IGdhcD1cIjEwJVwiPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgYm9yZGVyUmFkaXVzPVwiMTAwJVwiXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiI0M0QzRDNFwiXG4gICAgICAgICAgd2lkdGg9XCI2MHB4XCJcbiAgICAgICAgICBoZWlnaHQ9XCI2MHB4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgbGVmdDogXCIxNSVcIiwgdG9wOiBcIjE1JVwiIH19PlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIGxheW91dD1cImZpeGVkXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzN3Z3XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzh2d1wiXG4gICAgICAgICAgICAgIHNyYz17aW1nUGF0aH1cbiAgICAgICAgICAgICAgYWx0PVwidGFzayBpbWFnZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPFRleHQgZm9udFdlaWdodD1cInNlbWlib2xkXCI+e3Rhc2sudGFza1RpdGxlfTwvVGV4dD5cbiAgICAgIDwvRmxleD5cbiAgICAgIHt0YXNrLmR1ZSAmJiAoXG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgY29sb3I9e1RoZW1lLmNvbG9ycy50YXNrLmR1ZX1cbiAgICAgICAgICBmb250U2l6ZT1cInhzXCJcbiAgICAgICAgICBmbG9hdD1cInJpZ2h0XCJcbiAgICAgICAgICBmb250V2VpZ2h0PVwic2VtaWJvbGRcIlxuICAgICAgICA+XG4gICAgICAgICAgPD5EdWU6IHt0YXNrLmR1ZX08Lz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tDYXJkO1xuIl0sIm5hbWVzIjpbIkJveCIsIkZsZXgiLCJUZXh0IiwiUmVhY3QiLCJUaGVtZSIsIkltYWdlIiwiVGFza0NhcmQiLCJ0YXNrIiwibWlsZXN0b25lcyIsImNvbG9yIiwiY29sb3JzIiwiZ3JlZW4iLCJpbWdQYXRoIiwidHlwZSIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwicGFkZGluZ0xlZnQiLCJtYXJnaW5Cb3R0b20iLCJ3aWR0aCIsImdhcCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsImJ1dHRvbiIsInN0eWxlIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwibGF5b3V0Iiwic3JjIiwiYWx0IiwiZm9udFdlaWdodCIsInRhc2tUaXRsZSIsImR1ZSIsImZvbnRTaXplIiwiZmxvYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/tasks/TaskCard.tsx\n");

/***/ })

});