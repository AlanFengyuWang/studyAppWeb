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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_datetime_picker_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datetime-picker/dist/entry.nostyle */ \"./node_modules/react-datetime-picker/dist/entry.nostyle.js\");\n/* harmony import */ var react_datetime_picker_dist_DateTimePicker_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datetime-picker/dist/DateTimePicker.css */ \"./node_modules/react-datetime-picker/dist/DateTimePicker.css\");\n/* harmony import */ var react_datetime_picker_dist_DateTimePicker_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datetime_picker_dist_DateTimePicker_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\n\nvar Milestone = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormControl, {\n                isRequired: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormLabel, {\n                        marginBottom: 0,\n                        fontSize: \"md\",\n                        children: [\n                            \"Milestone \",\n                            props.index + 1\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/Milestone.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_datetime_picker_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        onChange: function(time) {\n                            return props.updateMilestones(time, props.index);\n                        },\n                        value: props.milestones[props.index]\n                    }, props.index, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/Milestone.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/Milestone.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                display: \"flex\",\n                justifyContent: \"right\",\n                width: \"100%\",\n                mb: 1,\n                pos: \"relative\",\n                left: \"2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, {\n                    spacing: \"3\",\n                    size: \"xs\",\n                    marginTop: \"5px\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        colorScheme: \"red\",\n                        onClick: function() {\n                            return props.remove(props.index);\n                        },\n                        children: \"Remove\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/Milestone.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/Milestone.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/Milestone.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/Milestone.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_c = Milestone;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Milestone);\nvar _c;\n$RefreshReg$(_c, \"Milestone\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL01pbGVzdG9uZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBTTBCO0FBQ0E7QUFDNEM7QUFDZjtBQUd2RCxJQUFNTyxTQUFTLEdBQUcsU0FBQ0MsS0FRbEIsRUFBSztJQUNKLHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ04seURBQVc7Z0JBQUNPLFVBQVU7O2tDQUNyQiw4REFBQ04sdURBQVM7d0JBQUNPLFlBQVksRUFBRSxDQUFDO3dCQUFFQyxRQUFRLEVBQUMsSUFBSTs7NEJBQUMsWUFDOUI7NEJBQUNKLEtBQUssQ0FBQ0ssS0FBSyxHQUFHLENBQUM7Ozs7Ozs2QkFDaEI7a0NBQ1osOERBQUNQLGdGQUFjO3dCQUViUSxRQUFRLEVBQUUsU0FBQ0MsSUFBVTttQ0FBS1AsS0FBSyxDQUFDUSxnQkFBZ0IsQ0FBQ0QsSUFBSSxFQUFFUCxLQUFLLENBQUNLLEtBQUssQ0FBQzt5QkFBQTt3QkFDbkVJLEtBQUssRUFBRVQsS0FBSyxDQUFDVSxVQUFVLENBQUNWLEtBQUssQ0FBQ0ssS0FBSyxDQUFDO3VCQUYvQkwsS0FBSyxDQUFDSyxLQUFLOzs7OzZCQUdoQjs7Ozs7O3FCQUNVOzBCQUNkLDhEQUFDYixpREFBRztnQkFDRm1CLE9BQU8sRUFBQyxNQUFNO2dCQUNkQyxjQUFjLEVBQUMsT0FBTztnQkFDdEJDLEtBQUssRUFBQyxNQUFNO2dCQUNaQyxFQUFFLEVBQUUsQ0FBQztnQkFDTEMsR0FBRyxFQUFDLFVBQVU7Z0JBQ2RDLElBQUksRUFBQyxHQUFHOzBCQUVSLDRFQUFDdEIseURBQVc7b0JBQUN1QixPQUFPLEVBQUMsR0FBRztvQkFBQ0MsSUFBSSxFQUFDLElBQUk7b0JBQUNDLFNBQVMsRUFBQyxLQUFLOzhCQUNoRCw0RUFBQzFCLG9EQUFNO3dCQUFDMkIsV0FBVyxFQUFDLEtBQUs7d0JBQUNDLE9BQU8sRUFBRTttQ0FBTXJCLEtBQUssQ0FBQ3NCLE1BQU0sQ0FBQ3RCLEtBQUssQ0FBQ0ssS0FBSyxDQUFDO3lCQUFBO2tDQUFFLFFBRXBFOzs7Ozs2QkFBUzs7Ozs7eUJBQ0c7Ozs7O3FCQUNWOzs7Ozs7YUFDRixDQUNOO0NBQ0g7QUFyQ0tOLEtBQUFBLFNBQVM7QUF1Q2YsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob21lL01pbGVzdG9uZS50c3g/NWJhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgQnV0dG9uR3JvdXAsXG4gIEZvcm1Db250cm9sLFxuICBGb3JtTGFiZWwsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGF0ZVRpbWVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGV0aW1lLXBpY2tlci9kaXN0L2VudHJ5Lm5vc3R5bGVcIjtcbmltcG9ydCBcInJlYWN0LWRhdGV0aW1lLXBpY2tlci9kaXN0L0RhdGVUaW1lUGlja2VyLmNzc1wiO1xuaW1wb3J0IFJlbW92ZUJ1dHRvbiBmcm9tIFwiLi9idXR0b25zL3JlbW92ZUJ1dHRvblwiO1xuXG5jb25zdCBNaWxlc3RvbmUgPSAocHJvcHM6IHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgcmVnaXN0ZXI6IGFueTtcbiAgaXNMYXN0OiBib29sZWFuO1xuICB1cGRhdGVNaWxlc3RvbmVzOiAoZTogRGF0ZSwgaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgbWlsZXN0b25lczogRGF0ZVtdO1xuICBhcHBlbmQ6IChvYmo6IG9iamVjdCB8IG9iamVjdFtdKSA9PiB2b2lkO1xuICByZW1vdmU6IChpbmRleD86IG51bWJlciB8IG51bWJlcltdKSA9PiB2b2lkO1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Rm9ybUNvbnRyb2wgaXNSZXF1aXJlZD5cbiAgICAgICAgPEZvcm1MYWJlbCBtYXJnaW5Cb3R0b209ezB9IGZvbnRTaXplPVwibWRcIj5cbiAgICAgICAgICBNaWxlc3RvbmUge3Byb3BzLmluZGV4ICsgMX1cbiAgICAgICAgPC9Gb3JtTGFiZWw+XG4gICAgICAgIDxEYXRlVGltZVBpY2tlclxuICAgICAgICAgIGtleT17cHJvcHMuaW5kZXh9XG4gICAgICAgICAgb25DaGFuZ2U9eyh0aW1lOiBEYXRlKSA9PiBwcm9wcy51cGRhdGVNaWxlc3RvbmVzKHRpbWUsIHByb3BzLmluZGV4KX1cbiAgICAgICAgICB2YWx1ZT17cHJvcHMubWlsZXN0b25lc1twcm9wcy5pbmRleF19XG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgPEJveFxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwicmlnaHRcIlxuICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICBtYj17MX1cbiAgICAgICAgcG9zPVwicmVsYXRpdmVcIlxuICAgICAgICBsZWZ0PVwiMlwiXG4gICAgICA+XG4gICAgICAgIDxCdXR0b25Hcm91cCBzcGFjaW5nPVwiM1wiIHNpemU9XCJ4c1wiIG1hcmdpblRvcD1cIjVweFwiPlxuICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJyZWRcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5yZW1vdmUocHJvcHMuaW5kZXgpfT5cbiAgICAgICAgICAgIFJlbW92ZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgPC9Cb3g+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNaWxlc3RvbmU7XG4iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiQnV0dG9uR3JvdXAiLCJGb3JtQ29udHJvbCIsIkZvcm1MYWJlbCIsIlJlYWN0IiwiRGF0ZVRpbWVQaWNrZXIiLCJNaWxlc3RvbmUiLCJwcm9wcyIsImRpdiIsImlzUmVxdWlyZWQiLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsImluZGV4Iiwib25DaGFuZ2UiLCJ0aW1lIiwidXBkYXRlTWlsZXN0b25lcyIsInZhbHVlIiwibWlsZXN0b25lcyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwibWIiLCJwb3MiLCJsZWZ0Iiwic3BhY2luZyIsInNpemUiLCJtYXJnaW5Ub3AiLCJjb2xvclNjaGVtZSIsIm9uQ2xpY2siLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/home/Milestone.tsx\n");

/***/ })

});