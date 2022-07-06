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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ \"./src/styles/theme.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\n\nvar TaskCard = function(param) {\n    var task = param.task;\n    //deciding the background color: red means its urgent, oragne means it's moderate urgent, green means it's not urgent\n    var color = _styles_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.colors.task.green;\n    var imgPath = \"/taskTypes/\" + task.type + \".svg\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        background: color,\n        borderRadius: \"10\",\n        padding: \"7%\",\n        paddingLeft: \"5\",\n        marginBottom: \"7px\",\n        width: \"100%\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                gap: \"10%\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                        borderRadius: \"100%\",\n                        backgroundColor: \"#C4C4C4\",\n                        width: \"60px\",\n                        height: \"60px\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                layout: \"fixed\",\n                                width: \"45vw\",\n                                height: \"50vw\",\n                                src: imgPath,\n                                alt: \"task image\"\n                            }, void 0, false, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/TaskCard.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/TaskCard.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/TaskCard.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                        fontWeight: \"semibold\",\n                        children: task.taskTitle\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/TaskCard.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/TaskCard.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            task.due && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                color: _styles_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.colors.task.due,\n                fontSize: \"xs\",\n                float: \"right\",\n                fontWeight: \"semibold\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        \"Due: \",\n                        task.due\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/TaskCard.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/TaskCard.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_c = TaskCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskCard);\nvar _c;\n$RefreshReg$(_c, \"TaskCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90YXNrcy9UYXNrQ2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQWdGO0FBQ3hDO0FBRUc7QUFDWjtBQUUvQixJQUFNTSxRQUFRLEdBQUcsZ0JBQXdDO1FBQXJDQyxJQUFJLFNBQUpBLElBQUk7SUFDdEIscUhBQXFIO0lBQ3JILElBQUlDLEtBQUssR0FBR0osa0VBQXVCO0lBQ25DLElBQU1PLE9BQU8sR0FBRyxhQUFhLEdBQUdKLElBQUksQ0FBQ0ssSUFBSSxHQUFHLE1BQU07SUFFbEQscUJBQ0UsOERBQUNaLGlEQUFHO1FBQ0ZhLFVBQVUsRUFBRUwsS0FBSztRQUNqQk0sWUFBWSxFQUFDLElBQUk7UUFDakJDLE9BQU8sRUFBQyxJQUFJO1FBQ1pDLFdBQVcsRUFBQyxHQUFHO1FBQ2ZDLFlBQVksRUFBQyxLQUFLO1FBQ2xCQyxLQUFLLEVBQUMsTUFBTTs7MEJBRVosOERBQUNqQixrREFBSTtnQkFBQ2tCLEdBQUcsRUFBQyxLQUFLOztrQ0FDYiw4REFBQ25CLGlEQUFHO3dCQUNGYyxZQUFZLEVBQUMsTUFBTTt3QkFDbkJNLGVBQWUsRUFBQyxTQUFTO3dCQUN6QkYsS0FBSyxFQUFDLE1BQU07d0JBQ1pHLE1BQU0sRUFBQyxNQUFNO2tDQUViLDRFQUFDckIsaURBQUc7c0NBQ0YsNEVBQUNLLG1EQUFLO2dDQUNKaUIsTUFBTSxFQUFDLE9BQU87Z0NBQ2RKLEtBQUssRUFBQyxNQUFNO2dDQUNaRyxNQUFNLEVBQUMsTUFBTTtnQ0FDYkUsR0FBRyxFQUFFWixPQUFPO2dDQUNaYSxHQUFHLEVBQUMsWUFBWTs7Ozs7cUNBQ2hCOzs7OztpQ0FDRTs7Ozs7NkJBQ0Y7a0NBQ04sOERBQUN0QixrREFBSTt3QkFBQ3VCLFVBQVUsRUFBQyxVQUFVO2tDQUFFbEIsSUFBSSxDQUFDbUIsU0FBUzs7Ozs7NkJBQVE7Ozs7OztxQkFDOUM7WUFDTm5CLElBQUksQ0FBQ29CLEdBQUcsa0JBQ1AsOERBQUN6QixrREFBSTtnQkFDSE0sS0FBSyxFQUFFSixnRUFBcUI7Z0JBQzVCd0IsUUFBUSxFQUFDLElBQUk7Z0JBQ2JDLEtBQUssRUFBQyxPQUFPO2dCQUNiSixVQUFVLEVBQUMsVUFBVTswQkFFckI7O3dCQUFFLE9BQUs7d0JBQUNsQixJQUFJLENBQUNvQixHQUFHOztnQ0FBSTs7Ozs7cUJBQ2Y7Ozs7OzthQUVMLENBQ047Q0FDSDtBQTdDS3JCLEtBQUFBLFFBQVE7QUErQ2QsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy90YXNrcy9UYXNrQ2FyZC50c3g/ZDBiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEZsZXgsIFN0YWNrLCBTdGFja0RpdmlkZXIsIFZTdGFjaywgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhc2tGb3JtVmFsdWVzIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5jb25zdCBUYXNrQ2FyZCA9ICh7IHRhc2sgfTogeyB0YXNrOiBUYXNrRm9ybVZhbHVlcyB9KSA9PiB7XG4gIC8vZGVjaWRpbmcgdGhlIGJhY2tncm91bmQgY29sb3I6IHJlZCBtZWFucyBpdHMgdXJnZW50LCBvcmFnbmUgbWVhbnMgaXQncyBtb2RlcmF0ZSB1cmdlbnQsIGdyZWVuIG1lYW5zIGl0J3Mgbm90IHVyZ2VudFxuICBsZXQgY29sb3IgPSBUaGVtZS5jb2xvcnMudGFzay5ncmVlbjtcbiAgY29uc3QgaW1nUGF0aCA9IFwiL3Rhc2tUeXBlcy9cIiArIHRhc2sudHlwZSArIFwiLnN2Z1wiO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgYmFja2dyb3VuZD17Y29sb3J9XG4gICAgICBib3JkZXJSYWRpdXM9XCIxMFwiXG4gICAgICBwYWRkaW5nPVwiNyVcIlxuICAgICAgcGFkZGluZ0xlZnQ9XCI1XCJcbiAgICAgIG1hcmdpbkJvdHRvbT1cIjdweFwiXG4gICAgICB3aWR0aD1cIjEwMCVcIlxuICAgID5cbiAgICAgIDxGbGV4IGdhcD1cIjEwJVwiPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgYm9yZGVyUmFkaXVzPVwiMTAwJVwiXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiI0M0QzRDNFwiXG4gICAgICAgICAgd2lkdGg9XCI2MHB4XCJcbiAgICAgICAgICBoZWlnaHQ9XCI2MHB4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgbGF5b3V0PVwiZml4ZWRcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjQ1dndcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCI1MHZ3XCJcbiAgICAgICAgICAgICAgc3JjPXtpbWdQYXRofVxuICAgICAgICAgICAgICBhbHQ9XCJ0YXNrIGltYWdlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8VGV4dCBmb250V2VpZ2h0PVwic2VtaWJvbGRcIj57dGFzay50YXNrVGl0bGV9PC9UZXh0PlxuICAgICAgPC9GbGV4PlxuICAgICAge3Rhc2suZHVlICYmIChcbiAgICAgICAgPFRleHRcbiAgICAgICAgICBjb2xvcj17VGhlbWUuY29sb3JzLnRhc2suZHVlfVxuICAgICAgICAgIGZvbnRTaXplPVwieHNcIlxuICAgICAgICAgIGZsb2F0PVwicmlnaHRcIlxuICAgICAgICAgIGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8PkR1ZToge3Rhc2suZHVlfTwvPlxuICAgICAgICA8L1RleHQ+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFza0NhcmQ7XG4iXSwibmFtZXMiOlsiQm94IiwiRmxleCIsIlRleHQiLCJSZWFjdCIsIlRoZW1lIiwiSW1hZ2UiLCJUYXNrQ2FyZCIsInRhc2siLCJjb2xvciIsImNvbG9ycyIsImdyZWVuIiwiaW1nUGF0aCIsInR5cGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsInBhZGRpbmdMZWZ0IiwibWFyZ2luQm90dG9tIiwid2lkdGgiLCJnYXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJsYXlvdXQiLCJzcmMiLCJhbHQiLCJmb250V2VpZ2h0IiwidGFza1RpdGxlIiwiZHVlIiwiZm9udFNpemUiLCJmbG9hdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/tasks/TaskCard.tsx\n");

/***/ })

});