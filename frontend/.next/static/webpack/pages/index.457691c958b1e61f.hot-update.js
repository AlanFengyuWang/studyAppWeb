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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ \"./src/styles/theme.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TaskCard = function(param) {\n    var task = param.task;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), imageSize = ref[0], setimageSize = ref[1];\n    //deciding the background color: red means its urgent, oragne means it's moderate urgent, green means it's not urgent\n    var color = _styles_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.colors.task.green;\n    var imgPath = \"/taskTypes/\" + task.type + \".svg\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        background: color,\n        borderRadius: \"10\",\n        padding: \"7%\",\n        paddingLeft: \"5\",\n        marginBottom: \"7px\",\n        width: \"100%\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                gap: \"10%\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                        borderRadius: \"100%\",\n                        backgroundColor: \"#C4C4C4\",\n                        width: \"60px\",\n                        height: \"60px\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            style: {\n                                position: \"relative\",\n                                left: \"15%\",\n                                top: \"15%\"\n                            },\n                            onClick: function() {\n                                style;\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                layout: \"fixed\",\n                                width: \"37vw\",\n                                height: \"38vw\",\n                                src: imgPath,\n                                alt: \"task image\",\n                                size: \"imageSize\"\n                            }, void 0, false, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/TaskCard.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/TaskCard.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/TaskCard.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                        fontWeight: \"semibold\",\n                        children: task.taskTitle\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/TaskCard.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/TaskCard.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            task.due && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                color: _styles_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.colors.task.due,\n                fontSize: \"xs\",\n                float: \"right\",\n                fontWeight: \"semibold\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        \"Due: \",\n                        task.due\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/TaskCard.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/TaskCard.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(TaskCard, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = TaskCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskCard);\nvar _c;\n$RefreshReg$(_c, \"TaskCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90YXNrcy9UYXNrQ2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQWdGO0FBQ3hDO0FBRUc7QUFDWjs7QUFFL0IsSUFBTU8sUUFBUSxHQUFHLGdCQUF3QztRQUFyQ0MsSUFBSSxTQUFKQSxJQUFJOztJQUN0QixJQUFrQ0osR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVBoRCxTQU9rQixHQUFrQkEsR0FBWSxHQUE5QixFQVBsQixZQU9nQyxHQUFJQSxHQUFZLEdBQWhCO0lBQzlCLHFIQUFxSDtJQUNySCxJQUFJTyxLQUFLLEdBQUdOLGtFQUF1QjtJQUNuQyxJQUFNUyxPQUFPLEdBQUcsYUFBYSxHQUFHTixJQUFJLENBQUNPLElBQUksR0FBRyxNQUFNO0lBRWxELHFCQUNFLDhEQUFDZixpREFBRztRQUNGZ0IsVUFBVSxFQUFFTCxLQUFLO1FBQ2pCTSxZQUFZLEVBQUMsSUFBSTtRQUNqQkMsT0FBTyxFQUFDLElBQUk7UUFDWkMsV0FBVyxFQUFDLEdBQUc7UUFDZkMsWUFBWSxFQUFDLEtBQUs7UUFDbEJDLEtBQUssRUFBQyxNQUFNOzswQkFFWiw4REFBQ3BCLGtEQUFJO2dCQUFDcUIsR0FBRyxFQUFDLEtBQUs7O2tDQUNiLDhEQUFDdEIsaURBQUc7d0JBQ0ZpQixZQUFZLEVBQUMsTUFBTTt3QkFDbkJNLGVBQWUsRUFBQyxTQUFTO3dCQUN6QkYsS0FBSyxFQUFDLE1BQU07d0JBQ1pHLE1BQU0sRUFBQyxNQUFNO2tDQUViLDRFQUFDQyxRQUFNOzRCQUFDQyxLQUFLLEVBQUU7Z0NBQUVDLFFBQVEsRUFBRSxVQUFVO2dDQUFFQyxJQUFJLEVBQUUsS0FBSztnQ0FBRUMsR0FBRyxFQUFFLEtBQUs7NkJBQUM7NEJBQUVDLE9BQU8sRUFBRSxXQUFLO2dDQUFDSixLQUFLOzZCQUFDO3NDQUNwRiw0RUFBQ3BCLG1EQUFLO2dDQUNKeUIsTUFBTSxFQUFDLE9BQU87Z0NBQ2RWLEtBQUssRUFBQyxNQUFNO2dDQUNaRyxNQUFNLEVBQUMsTUFBTTtnQ0FDYlEsR0FBRyxFQUFFbEIsT0FBTztnQ0FDWm1CLEdBQUcsRUFBQyxZQUFZO2dDQUNoQkMsSUFBSSxFQUFFLFdBQVc7Ozs7O3FDQUNqQjs7Ozs7aUNBQ0s7Ozs7OzZCQUNMO2tDQUNOLDhEQUFDaEMsa0RBQUk7d0JBQUNpQyxVQUFVLEVBQUMsVUFBVTtrQ0FBRTNCLElBQUksQ0FBQzRCLFNBQVM7Ozs7OzZCQUFROzs7Ozs7cUJBQzlDO1lBQ041QixJQUFJLENBQUM2QixHQUFHLGtCQUNQLDhEQUFDbkMsa0RBQUk7Z0JBQ0hTLEtBQUssRUFBRU4sZ0VBQXFCO2dCQUM1QmlDLFFBQVEsRUFBQyxJQUFJO2dCQUNiQyxLQUFLLEVBQUMsT0FBTztnQkFDYkosVUFBVSxFQUFDLFVBQVU7MEJBRXJCOzt3QkFBRSxPQUFLO3dCQUFDM0IsSUFBSSxDQUFDNkIsR0FBRzs7Z0NBQUk7Ozs7O3FCQUNmOzs7Ozs7YUFFTCxDQUNOO0NBQ0g7R0EvQ0s5QixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFpRGQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy90YXNrcy9UYXNrQ2FyZC50c3g/ZDBiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEZsZXgsIFN0YWNrLCBTdGFja0RpdmlkZXIsIFZTdGFjaywgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhc2tGb3JtVmFsdWVzIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5jb25zdCBUYXNrQ2FyZCA9ICh7IHRhc2sgfTogeyB0YXNrOiBUYXNrRm9ybVZhbHVlcyB9KSA9PiB7XG4gIGNvbnN0IFtpbWFnZVNpemUsIHNldGltYWdlU2l6ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgLy9kZWNpZGluZyB0aGUgYmFja2dyb3VuZCBjb2xvcjogcmVkIG1lYW5zIGl0cyB1cmdlbnQsIG9yYWduZSBtZWFucyBpdCdzIG1vZGVyYXRlIHVyZ2VudCwgZ3JlZW4gbWVhbnMgaXQncyBub3QgdXJnZW50XG4gIGxldCBjb2xvciA9IFRoZW1lLmNvbG9ycy50YXNrLmdyZWVuO1xuICBjb25zdCBpbWdQYXRoID0gXCIvdGFza1R5cGVzL1wiICsgdGFzay50eXBlICsgXCIuc3ZnXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBiYWNrZ3JvdW5kPXtjb2xvcn1cbiAgICAgIGJvcmRlclJhZGl1cz1cIjEwXCJcbiAgICAgIHBhZGRpbmc9XCI3JVwiXG4gICAgICBwYWRkaW5nTGVmdD1cIjVcIlxuICAgICAgbWFyZ2luQm90dG9tPVwiN3B4XCJcbiAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgPlxuICAgICAgPEZsZXggZ2FwPVwiMTAlXCI+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCIxMDAlXCJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjQzRDNEM0XCJcbiAgICAgICAgICB3aWR0aD1cIjYwcHhcIlxuICAgICAgICAgIGhlaWdodD1cIjYwcHhcIlxuICAgICAgICA+XG4gICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBsZWZ0OiBcIjE1JVwiLCB0b3A6IFwiMTUlXCJ9fSBvbkNsaWNrPXsoKT0+IHtzdHlsZX19PlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIGxheW91dD1cImZpeGVkXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzN3Z3XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzh2d1wiXG4gICAgICAgICAgICAgIHNyYz17aW1nUGF0aH1cbiAgICAgICAgICAgICAgYWx0PVwidGFzayBpbWFnZVwiXG4gICAgICAgICAgICAgIHNpemU9IFwiaW1hZ2VTaXplXCIgXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPFRleHQgZm9udFdlaWdodD1cInNlbWlib2xkXCI+e3Rhc2sudGFza1RpdGxlfTwvVGV4dD5cbiAgICAgIDwvRmxleD5cbiAgICAgIHt0YXNrLmR1ZSAmJiAoXG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgY29sb3I9e1RoZW1lLmNvbG9ycy50YXNrLmR1ZX1cbiAgICAgICAgICBmb250U2l6ZT1cInhzXCJcbiAgICAgICAgICBmbG9hdD1cInJpZ2h0XCJcbiAgICAgICAgICBmb250V2VpZ2h0PVwic2VtaWJvbGRcIlxuICAgICAgICA+XG4gICAgICAgICAgPD5EdWU6IHt0YXNrLmR1ZX08Lz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tDYXJkO1xuIl0sIm5hbWVzIjpbIkJveCIsIkZsZXgiLCJUZXh0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRoZW1lIiwiSW1hZ2UiLCJUYXNrQ2FyZCIsInRhc2siLCJpbWFnZVNpemUiLCJzZXRpbWFnZVNpemUiLCJjb2xvciIsImNvbG9ycyIsImdyZWVuIiwiaW1nUGF0aCIsInR5cGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsInBhZGRpbmdMZWZ0IiwibWFyZ2luQm90dG9tIiwid2lkdGgiLCJnYXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJidXR0b24iLCJzdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsIm9uQ2xpY2siLCJsYXlvdXQiLCJzcmMiLCJhbHQiLCJzaXplIiwiZm9udFdlaWdodCIsInRhc2tUaXRsZSIsImR1ZSIsImZvbnRTaXplIiwiZmxvYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/tasks/TaskCard.tsx\n");

/***/ })

});