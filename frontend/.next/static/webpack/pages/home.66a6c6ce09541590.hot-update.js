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

/***/ "./src/components/tasks/AddTask.tsx":
/*!******************************************!*\
  !*** ./src/components/tasks/AddTask.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar AddTask = function() {\n    _s();\n    // const [clickedAddTask, setClickedAddTask] = React.useState<boolean>();\n    var ref = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)(), isOpen = ref.isOpen, onOpen = ref.onOpen, onClose = ref.onClose;\n    var initialRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\"), 2), value = ref1[0], setValue = ref1[1];\n    var handleInputChange = function(e) {\n        var inputValue = e.target.value;\n        setValue(inputValue);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                colorScheme: \"teal\",\n                size: \"sm\",\n                onClick: onOpen,\n                children: \"Add Tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n                initialFocusRef: initialRef,\n                isOpen: isOpen,\n                onClose: onClose,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {\n                                children: \"What is your next task?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalCloseButton, {}, void 0, false, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {\n                                pb: 6,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                                        isRequired: true,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {\n                                                children: \"Task name\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                                ref: initialRef,\n                                                placeholder: \"Task name\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                                        mt: 4,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {\n                                                children: \"Description\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Textarea, {\n                                                value: value,\n                                                onChange: handleInputChange,\n                                                placeholder: \"My description of the task...\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        colorScheme: \"blue\",\n                                        mr: 3,\n                                        children: \"Save\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        onClick: onClose,\n                                        children: \"Cancel\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(AddTask, \"wfoim60L6sZ6QrODgfGr1APIUoI=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure\n    ];\n});\n_c = AddTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddTask);\nvar _c;\n$RefreshReg$(_c, \"AddTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90YXNrcy9BZGRUYXNrLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBaUJmOztBQUUxQixJQUFNYyxPQUFPLEdBQUcsV0FBTTs7SUFDcEIseUVBQXlFO0lBQ3pFLElBQW9DRCxHQUFlLEdBQWZBLCtEQUFhLEVBQUUsRUFBM0NFLE1BQU0sR0FBc0JGLEdBQWUsQ0FBM0NFLE1BQU0sRUFBRUMsTUFBTSxHQUFjSCxHQUFlLENBQW5DRyxNQUFNLEVBQUVDLE9BQU8sR0FBS0osR0FBZSxDQUEzQkksT0FBTztJQUMvQixJQUFNQyxVQUFVLEdBQUdsQixtREFBWSxDQUFDLElBQUksQ0FBQztJQUNyQyxJQUF3QkEsSUFBMEIsa0JBQTFCQSxxREFBYyxDQUFTLEVBQUUsQ0FBQyxNQUE3Q3FCLEtBQUssR0FBY3JCLElBQTBCLEdBQXhDLEVBQUVzQixRQUFRLEdBQUl0QixJQUEwQixHQUE5QjtJQUNwQixJQUFJdUIsaUJBQWlCLEdBQUcsU0FBQ0MsQ0FBc0MsRUFBVztRQUN4RSxJQUFJQyxVQUFVLEdBQUdELENBQUMsQ0FBQ0UsTUFBTSxDQUFDTCxLQUFLO1FBQy9CQyxRQUFRLENBQUNHLFVBQVUsQ0FBQyxDQUFDO0tBQ3RCO0lBQ0QscUJBQ0U7OzBCQUNFLDhEQUFDeEIsb0RBQU07Z0JBQUMwQixXQUFXLEVBQUMsTUFBTTtnQkFBQ0MsSUFBSSxFQUFDLElBQUk7Z0JBQUNDLE9BQU8sRUFBRWIsTUFBTTswQkFBRSxXQUV0RDs7Ozs7cUJBQVM7MEJBQ1QsOERBQUNYLG1EQUFLO2dCQUFDeUIsZUFBZSxFQUFFWixVQUFVO2dCQUFFSCxNQUFNLEVBQUVBLE1BQU07Z0JBQUVFLE9BQU8sRUFBRUEsT0FBTzs7a0NBQ2xFLDhEQUFDTiwwREFBWTs7Ozs2QkFBRztrQ0FDaEIsOERBQUNILDBEQUFZOzswQ0FDWCw4REFBQ0UseURBQVc7MENBQUMseUJBQXVCOzs7OztxQ0FBYzswQ0FDbEQsOERBQUNILDhEQUFnQjs7OztxQ0FBRzswQ0FDcEIsOERBQUNELHVEQUFTO2dDQUFDeUIsRUFBRSxFQUFFLENBQUM7O2tEQUNkLDhEQUFDN0IseURBQVc7d0NBQUM4QixVQUFVOzswREFDckIsOERBQUM3Qix1REFBUzswREFBQyxXQUFTOzs7OztxREFBWTswREFDaEMsOERBQUNDLG1EQUFLO2dEQUFDNkIsR0FBRyxFQUFFZixVQUFVO2dEQUFFZ0IsV0FBVyxFQUFDLFdBQVc7Ozs7O3FEQUFHOzs7Ozs7NkNBQ3RDO2tEQUVkLDhEQUFDaEMseURBQVc7d0NBQUNpQyxFQUFFLEVBQUUsQ0FBQzs7MERBQ2hCLDhEQUFDaEMsdURBQVM7MERBQUMsYUFBVzs7Ozs7cURBQVk7MERBRWxDLDhEQUFDUyxzREFBUTtnREFDUFMsS0FBSyxFQUFFQSxLQUFLO2dEQUNaZSxRQUFRLEVBQUViLGlCQUFpQjtnREFDM0JXLFdBQVcsRUFBQywrQkFBK0I7Ozs7O3FEQUMzQzs7Ozs7OzZDQUNVOzs7Ozs7cUNBQ0o7MENBRVosOERBQUN6Qix5REFBVzs7a0RBQ1YsOERBQUNSLG9EQUFNO3dDQUFDMEIsV0FBVyxFQUFDLE1BQU07d0NBQUNVLEVBQUUsRUFBRSxDQUFDO2tEQUFFLE1BRWxDOzs7Ozs2Q0FBUztrREFDVCw4REFBQ3BDLG9EQUFNO3dDQUFDNEIsT0FBTyxFQUFFWixPQUFPO2tEQUFFLFFBQU07Ozs7OzZDQUFTOzs7Ozs7cUNBQzdCOzs7Ozs7NkJBQ0Q7Ozs7OztxQkFDVDs7b0JBQ1AsQ0FDSDtDQUNIO0dBOUNLSCxPQUFPOztRQUV5QkQsMkRBQWE7OztBQUY3Q0MsS0FBQUEsT0FBTztBQWdEYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Rhc2tzL0FkZFRhc2sudHN4PzdkMzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBCdXR0b25Hcm91cCxcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1MYWJlbCxcbiAgSWNvbkJ1dHRvbixcbiAgSW5wdXQsXG4gIE1vZGFsLFxuICBNb2RhbEJvZHksXG4gIE1vZGFsQ2xvc2VCdXR0b24sXG4gIE1vZGFsQ29udGVudCxcbiAgTW9kYWxGb290ZXIsXG4gIE1vZGFsSGVhZGVyLFxuICBNb2RhbE92ZXJsYXksXG4gIFRleHRhcmVhLFxuICB1c2VEaXNjbG9zdXJlLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5jb25zdCBBZGRUYXNrID0gKCkgPT4ge1xuICAvLyBjb25zdCBbY2xpY2tlZEFkZFRhc2ssIHNldENsaWNrZWRBZGRUYXNrXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KCk7XG4gIGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKTtcbiAgY29uc3QgaW5pdGlhbFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgbGV0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgbGV0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCA9PiB7XG4gICAgbGV0IGlucHV0VmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRWYWx1ZShpbnB1dFZhbHVlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cInRlYWxcIiBzaXplPVwic21cIiBvbkNsaWNrPXtvbk9wZW59PlxuICAgICAgICBBZGQgVGFza3NcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPE1vZGFsIGluaXRpYWxGb2N1c1JlZj17aW5pdGlhbFJlZn0gaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9e29uQ2xvc2V9PlxuICAgICAgICA8TW9kYWxPdmVybGF5IC8+XG4gICAgICAgIDxNb2RhbENvbnRlbnQ+XG4gICAgICAgICAgPE1vZGFsSGVhZGVyPldoYXQgaXMgeW91ciBuZXh0IHRhc2s/PC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgICA8TW9kYWxDbG9zZUJ1dHRvbiAvPlxuICAgICAgICAgIDxNb2RhbEJvZHkgcGI9ezZ9PlxuICAgICAgICAgICAgPEZvcm1Db250cm9sIGlzUmVxdWlyZWQ+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWw+VGFzayBuYW1lPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgIDxJbnB1dCByZWY9e2luaXRpYWxSZWZ9IHBsYWNlaG9sZGVyPVwiVGFzayBuYW1lXCIgLz5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBtdD17NH0+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWw+RGVzY3JpcHRpb248L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgey8qIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgLz4gKi99XG4gICAgICAgICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNeSBkZXNjcmlwdGlvbiBvZiB0aGUgdGFzay4uLlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgIDwvTW9kYWxCb2R5PlxuXG4gICAgICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImJsdWVcIiBtcj17M30+XG4gICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfT5DYW5jZWw8L0J1dHRvbj5cbiAgICAgICAgICA8L01vZGFsRm9vdGVyPlxuICAgICAgICA8L01vZGFsQ29udGVudD5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRUYXNrO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiRm9ybUNvbnRyb2wiLCJGb3JtTGFiZWwiLCJJbnB1dCIsIk1vZGFsIiwiTW9kYWxCb2R5IiwiTW9kYWxDbG9zZUJ1dHRvbiIsIk1vZGFsQ29udGVudCIsIk1vZGFsRm9vdGVyIiwiTW9kYWxIZWFkZXIiLCJNb2RhbE92ZXJsYXkiLCJUZXh0YXJlYSIsInVzZURpc2Nsb3N1cmUiLCJBZGRUYXNrIiwiaXNPcGVuIiwib25PcGVuIiwib25DbG9zZSIsImluaXRpYWxSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJpbnB1dFZhbHVlIiwidGFyZ2V0IiwiY29sb3JTY2hlbWUiLCJzaXplIiwib25DbGljayIsImluaXRpYWxGb2N1c1JlZiIsInBiIiwiaXNSZXF1aXJlZCIsInJlZiIsInBsYWNlaG9sZGVyIiwibXQiLCJvbkNoYW5nZSIsIm1yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/tasks/AddTask.tsx\n");

/***/ })

});