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

/***/ "./src/components/tasks/Subtask.tsx":
/*!******************************************!*\
  !*** ./src/components/tasks/Subtask.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Subtask = function(props) {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\"), 2), description = ref[0], setDescription = ref[1];\n    var handleDescriptionInputChange = function(e) {\n        var inputValue = e.target.value;\n        setDescription(inputValue);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                isRequired: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {\n                        marginBottom: 0,\n                        fontSize: \"sm\",\n                        children: [\n                            \"Task \",\n                            props.index + 1,\n                            \":\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/Subtask.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        placeholder: \"Title\",\n                        size: \"sm\",\n                        fontSize: \"sm\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/Subtask.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/Subtask.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                mt: 2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {\n                        marginBottom: 0,\n                        fontSize: \"sm\",\n                        children: \"Description:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/Subtask.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Textarea, {\n                        value: description,\n                        size: \"sm\",\n                        onChange: handleDescriptionInputChange,\n                        placeholder: \"Remind my future self..\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/Subtask.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/Subtask.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                display: \"flex\",\n                justifyContent: \"right\",\n                width: \"100%\",\n                mb: 2,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {\n                    spacing: \"2\",\n                    size: \"xs\",\n                    marginTop: \"5px\",\n                    children: [\n                        props.isLast && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            colorScheme: \"green\",\n                            children: \"Add\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/Subtask.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 28\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            colorScheme: \"red\",\n                            children: \"Remove\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/Subtask.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/Subtask.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/Subtask.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/Subtask.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(Subtask, \"h9D/T9lgpWSoHPGgGzJJBrwKHw4=\");\n_c = Subtask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Subtask);\nvar _c;\n$RefreshReg$(_c, \"Subtask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90YXNrcy9TdWJ0YXNrLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTBCO0FBQ0E7O0FBRTFCLElBQU1RLE9BQU8sR0FBRyxTQUFDQyxLQUF5QyxFQUFLOztJQUM3RCxJQUFvQ0YsR0FBMEIsa0JBQTFCQSxxREFBYyxDQUFTLEVBQUUsQ0FBQyxNQUF6REksV0FBVyxHQUFvQkosR0FBMEIsR0FBOUMsRUFBRUssY0FBYyxHQUFJTCxHQUEwQixHQUE5QjtJQUNoQyxJQUFJTSw0QkFBNEIsR0FBRyxTQUNqQ0MsQ0FBeUMsRUFDdEM7UUFDSCxJQUFJQyxVQUFVLEdBQUdELENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO1FBQy9CTCxjQUFjLENBQUNHLFVBQVUsQ0FBQyxDQUFDO0tBQzVCO0lBQ0QscUJBQ0UsOERBQUNHLEtBQUc7OzBCQUNGLDhEQUFDZix5REFBVztnQkFBQ2dCLFVBQVU7O2tDQUVyQiw4REFBQ2YsdURBQVM7d0JBQUNnQixZQUFZLEVBQUUsQ0FBQzt3QkFBRUMsUUFBUSxFQUFDLElBQUk7OzRCQUFDLE9BQ25DOzRCQUFDWixLQUFLLENBQUNhLEtBQUssR0FBRyxDQUFDOzRCQUFDLEdBQ3hCOzs7Ozs7NkJBQVk7a0NBQ1osOERBQUNqQixtREFBSzt3QkFBQ2tCLFdBQVcsRUFBQyxPQUFPO3dCQUFDQyxJQUFJLEVBQUMsSUFBSTt3QkFBQ0gsUUFBUSxFQUFDLElBQUk7Ozs7OzZCQUFHOzs7Ozs7cUJBQ3pDOzBCQUVkLDhEQUFDbEIseURBQVc7Z0JBQUNzQixFQUFFLEVBQUUsQ0FBQzs7a0NBQ2hCLDhEQUFDckIsdURBQVM7d0JBQUNnQixZQUFZLEVBQUUsQ0FBQzt3QkFBRUMsUUFBUSxFQUFDLElBQUk7a0NBQUMsY0FFMUM7Ozs7OzZCQUFZO2tDQUNaLDhEQUFDZixzREFBUTt3QkFDUFcsS0FBSyxFQUFFTixXQUFXO3dCQUNsQmEsSUFBSSxFQUFDLElBQUk7d0JBQ1RFLFFBQVEsRUFBRWIsNEJBQTRCO3dCQUN0Q1UsV0FBVyxFQUFDLHlCQUF5Qjs7Ozs7NkJBQ3JDOzs7Ozs7cUJBQ1U7MEJBRWQsOERBQUN2QixpREFBRztnQkFBQzJCLE9BQU8sRUFBQyxNQUFNO2dCQUFDQyxjQUFjLEVBQUMsT0FBTztnQkFBQ0MsS0FBSyxFQUFDLE1BQU07Z0JBQUNDLEVBQUUsRUFBRSxDQUFDOzBCQUMzRCw0RUFBQzVCLHlEQUFXO29CQUFDNkIsT0FBTyxFQUFDLEdBQUc7b0JBQUNQLElBQUksRUFBQyxJQUFJO29CQUFDUSxTQUFTLEVBQUMsS0FBSzs7d0JBQy9DdkIsS0FBSyxDQUFDd0IsTUFBTSxrQkFBSSw4REFBQ2hDLG9EQUFNOzRCQUFDaUMsV0FBVyxFQUFDLE9BQU87c0NBQUMsS0FBRzs7Ozs7aUNBQVM7c0NBQ3pELDhEQUFDakMsb0RBQU07NEJBQUNpQyxXQUFXLEVBQUMsS0FBSztzQ0FBQyxRQUFNOzs7OztpQ0FBUzs7Ozs7O3lCQUM3Qjs7Ozs7cUJBQ1Y7Ozs7OzthQUNGLENBQ047Q0FDSDtHQXRDSzFCLE9BQU87QUFBUEEsS0FBQUEsT0FBTztBQXdDYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Rhc2tzL1N1YnRhc2sudHN4PzcwODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIEJ1dHRvbkdyb3VwLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUxhYmVsLFxuICBJbnB1dCxcbiAgVGV4dGFyZWEsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFN1YnRhc2sgPSAocHJvcHM6IHsgaW5kZXg6IG51bWJlcjsgaXNMYXN0OiBib29sZWFuIH0pID0+IHtcbiAgbGV0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgbGV0IGhhbmRsZURlc2NyaXB0aW9uSW5wdXRDaGFuZ2UgPSAoXG4gICAgZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cbiAgKSA9PiB7XG4gICAgbGV0IGlucHV0VmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXREZXNjcmlwdGlvbihpbnB1dFZhbHVlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEZvcm1Db250cm9sIGlzUmVxdWlyZWQ+XG4gICAgICAgIHsvKiA8VGV4dD5UYXNrIHtwcm9wcy5pbmRleH08L1RleHQ+ICovfVxuICAgICAgICA8Rm9ybUxhYmVsIG1hcmdpbkJvdHRvbT17MH0gZm9udFNpemU9XCJzbVwiPlxuICAgICAgICAgIFRhc2sge3Byb3BzLmluZGV4ICsgMX06XG4gICAgICAgIDwvRm9ybUxhYmVsPlxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIHNpemU9XCJzbVwiIGZvbnRTaXplPVwic21cIiAvPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgPEZvcm1Db250cm9sIG10PXsyfT5cbiAgICAgICAgPEZvcm1MYWJlbCBtYXJnaW5Cb3R0b209ezB9IGZvbnRTaXplPVwic21cIj5cbiAgICAgICAgICBEZXNjcmlwdGlvbjpcbiAgICAgICAgPC9Gb3JtTGFiZWw+XG4gICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEZXNjcmlwdGlvbklucHV0Q2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVtaW5kIG15IGZ1dHVyZSBzZWxmLi5cIlxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwicmlnaHRcIiB3aWR0aD1cIjEwMCVcIiBtYj17Mn0+XG4gICAgICAgIDxCdXR0b25Hcm91cCBzcGFjaW5nPVwiMlwiIHNpemU9XCJ4c1wiIG1hcmdpblRvcD1cIjVweFwiPlxuICAgICAgICAgIHtwcm9wcy5pc0xhc3QgJiYgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImdyZWVuXCI+QWRkPC9CdXR0b24+fVxuICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJyZWRcIj5SZW1vdmU8L0J1dHRvbj5cbiAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgIDwvQm94PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3VidGFzaztcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJCdXR0b25Hcm91cCIsIkZvcm1Db250cm9sIiwiRm9ybUxhYmVsIiwiSW5wdXQiLCJUZXh0YXJlYSIsIlJlYWN0IiwiU3VidGFzayIsInByb3BzIiwidXNlU3RhdGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiaGFuZGxlRGVzY3JpcHRpb25JbnB1dENoYW5nZSIsImUiLCJpbnB1dFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJpc1JlcXVpcmVkIiwibWFyZ2luQm90dG9tIiwiZm9udFNpemUiLCJpbmRleCIsInBsYWNlaG9sZGVyIiwic2l6ZSIsIm10Iiwib25DaGFuZ2UiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsIm1iIiwic3BhY2luZyIsIm1hcmdpblRvcCIsImlzTGFzdCIsImNvbG9yU2NoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/tasks/Subtask.tsx\n");

/***/ })

});