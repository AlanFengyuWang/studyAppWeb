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

/***/ "./src/components/home/Milestone.tsx":
/*!*******************************************!*\
  !*** ./src/components/home/Milestone.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_datetime_picker_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datetime-picker/dist/entry.nostyle */ \"./node_modules/react-datetime-picker/dist/entry.nostyle.js\");\n/* harmony import */ var react_datetime_picker_dist_DateTimePicker_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datetime-picker/dist/DateTimePicker.css */ \"./node_modules/react-datetime-picker/dist/DateTimePicker.css\");\n/* harmony import */ var react_datetime_picker_dist_DateTimePicker_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datetime_picker_dist_DateTimePicker_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\n\nvar Milestone = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormControl, {\n                isRequired: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormLabel, {\n                        marginBottom: 0,\n                        fontSize: \"md\",\n                        children: [\n                            \"Milestone \",\n                            props.index + 1\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/Milestone.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_datetime_picker_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        onChange: function(time) {\n                            return props.updateMilestones(time, props.index);\n                        },\n                        value: props.milestones[props.index]\n                    }, props.index, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/Milestone.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/Milestone.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                display: \"flex\",\n                justifyContent: \"right\",\n                width: \"100%\",\n                mb: 1,\n                pos: \"relative\",\n                left: \"5\",\n                bottom: \"5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, {\n                    spacing: \"3\",\n                    size: \"xs\",\n                    marginTop: \"5px\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        colorScheme: \"red\",\n                        onClick: function() {\n                            return props.remove(props.index);\n                        },\n                        children: \"Remove\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/Milestone.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/Milestone.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/Milestone.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/Milestone.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_c = Milestone;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Milestone);\nvar _c;\n$RefreshReg$(_c, \"Milestone\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL01pbGVzdG9uZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBTTBCO0FBQ0E7QUFDNEM7QUFDZjtBQUd2RCxJQUFNTyxTQUFTLEdBQUcsU0FBQ0MsS0FRbEIsRUFBSztJQUNKLHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ04seURBQVc7Z0JBQUNPLFVBQVU7O2tDQUNyQiw4REFBQ04sdURBQVM7d0JBQUNPLFlBQVksRUFBRSxDQUFDO3dCQUFFQyxRQUFRLEVBQUMsSUFBSTs7NEJBQUMsWUFDOUI7NEJBQUNKLEtBQUssQ0FBQ0ssS0FBSyxHQUFHLENBQUM7Ozs7Ozs2QkFDaEI7a0NBQ1osOERBQUNQLGdGQUFjO3dCQUViUSxRQUFRLEVBQUUsU0FBQ0MsSUFBVTttQ0FBS1AsS0FBSyxDQUFDUSxnQkFBZ0IsQ0FBQ0QsSUFBSSxFQUFFUCxLQUFLLENBQUNLLEtBQUssQ0FBQzt5QkFBQTt3QkFDbkVJLEtBQUssRUFBRVQsS0FBSyxDQUFDVSxVQUFVLENBQUNWLEtBQUssQ0FBQ0ssS0FBSyxDQUFDO3VCQUYvQkwsS0FBSyxDQUFDSyxLQUFLOzs7OzZCQUdoQjs7Ozs7O3FCQUNVOzBCQUNkLDhEQUFDYixpREFBRztnQkFDRm1CLE9BQU8sRUFBQyxNQUFNO2dCQUNkQyxjQUFjLEVBQUMsT0FBTztnQkFDdEJDLEtBQUssRUFBQyxNQUFNO2dCQUNaQyxFQUFFLEVBQUUsQ0FBQztnQkFDTEMsR0FBRyxFQUFDLFVBQVU7Z0JBQ2RDLElBQUksRUFBQyxHQUFHO2dCQUNSQyxNQUFNLEVBQUMsR0FBRzswQkFFViw0RUFBQ3ZCLHlEQUFXO29CQUFDd0IsT0FBTyxFQUFDLEdBQUc7b0JBQUNDLElBQUksRUFBQyxJQUFJO29CQUFDQyxTQUFTLEVBQUMsS0FBSzs4QkFDaEQsNEVBQUMzQixvREFBTTt3QkFBQzRCLFdBQVcsRUFBQyxLQUFLO3dCQUFDQyxPQUFPLEVBQUU7bUNBQU10QixLQUFLLENBQUN1QixNQUFNLENBQUN2QixLQUFLLENBQUNLLEtBQUssQ0FBQzt5QkFBQTtrQ0FBRSxRQUVwRTs7Ozs7NkJBQVM7Ozs7O3lCQUNHOzs7OztxQkFDVjs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0FBdENLTixLQUFBQSxTQUFTO0FBd0NmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9NaWxlc3RvbmUudHN4PzViYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIEJ1dHRvbkdyb3VwLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUxhYmVsLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERhdGVUaW1lUGlja2VyIGZyb20gXCJyZWFjdC1kYXRldGltZS1waWNrZXIvZGlzdC9lbnRyeS5ub3N0eWxlXCI7XG5pbXBvcnQgXCJyZWFjdC1kYXRldGltZS1waWNrZXIvZGlzdC9EYXRlVGltZVBpY2tlci5jc3NcIjtcbmltcG9ydCBSZW1vdmVCdXR0b24gZnJvbSBcIi4vYnV0dG9ucy9yZW1vdmVCdXR0b25cIjtcblxuY29uc3QgTWlsZXN0b25lID0gKHByb3BzOiB7XG4gIGluZGV4OiBudW1iZXI7XG4gIHJlZ2lzdGVyOiBhbnk7XG4gIGlzTGFzdDogYm9vbGVhbjtcbiAgdXBkYXRlTWlsZXN0b25lczogKGU6IERhdGUsIGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG4gIG1pbGVzdG9uZXM6IERhdGVbXTtcbiAgYXBwZW5kOiAob2JqOiBvYmplY3QgfCBvYmplY3RbXSkgPT4gdm9pZDtcbiAgcmVtb3ZlOiAoaW5kZXg/OiBudW1iZXIgfCBudW1iZXJbXSkgPT4gdm9pZDtcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEZvcm1Db250cm9sIGlzUmVxdWlyZWQ+XG4gICAgICAgIDxGb3JtTGFiZWwgbWFyZ2luQm90dG9tPXswfSBmb250U2l6ZT1cIm1kXCI+XG4gICAgICAgICAgTWlsZXN0b25lIHtwcm9wcy5pbmRleCArIDF9XG4gICAgICAgIDwvRm9ybUxhYmVsPlxuICAgICAgICA8RGF0ZVRpbWVQaWNrZXJcbiAgICAgICAgICBrZXk9e3Byb3BzLmluZGV4fVxuICAgICAgICAgIG9uQ2hhbmdlPXsodGltZTogRGF0ZSkgPT4gcHJvcHMudXBkYXRlTWlsZXN0b25lcyh0aW1lLCBwcm9wcy5pbmRleCl9XG4gICAgICAgICAgdmFsdWU9e3Byb3BzLm1pbGVzdG9uZXNbcHJvcHMuaW5kZXhdfVxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgIDxCb3hcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cInJpZ2h0XCJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgbWI9ezF9XG4gICAgICAgIHBvcz1cInJlbGF0aXZlXCJcbiAgICAgICAgbGVmdD1cIjVcIlxuICAgICAgICBib3R0b209XCI1XCJcbiAgICAgID5cbiAgICAgICAgPEJ1dHRvbkdyb3VwIHNwYWNpbmc9XCIzXCIgc2l6ZT1cInhzXCIgbWFyZ2luVG9wPVwiNXB4XCI+XG4gICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cInJlZFwiIG9uQ2xpY2s9eygpID0+IHByb3BzLnJlbW92ZShwcm9wcy5pbmRleCl9PlxuICAgICAgICAgICAgUmVtb3ZlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICA8L0JveD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1pbGVzdG9uZTtcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJCdXR0b25Hcm91cCIsIkZvcm1Db250cm9sIiwiRm9ybUxhYmVsIiwiUmVhY3QiLCJEYXRlVGltZVBpY2tlciIsIk1pbGVzdG9uZSIsInByb3BzIiwiZGl2IiwiaXNSZXF1aXJlZCIsIm1hcmdpbkJvdHRvbSIsImZvbnRTaXplIiwiaW5kZXgiLCJvbkNoYW5nZSIsInRpbWUiLCJ1cGRhdGVNaWxlc3RvbmVzIiwidmFsdWUiLCJtaWxlc3RvbmVzIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50Iiwid2lkdGgiLCJtYiIsInBvcyIsImxlZnQiLCJib3R0b20iLCJzcGFjaW5nIiwic2l6ZSIsIm1hcmdpblRvcCIsImNvbG9yU2NoZW1lIiwib25DbGljayIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/home/Milestone.tsx\n");

/***/ })

});