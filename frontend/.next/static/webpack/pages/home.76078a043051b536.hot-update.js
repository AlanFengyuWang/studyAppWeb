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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar AddTask = function() {\n    _s();\n    // const [clickedAddTask, setClickedAddTask] = React.useState<boolean>();\n    var ref = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)(), isOpen = ref.isOpen, onOpen = ref.onOpen, onClose = ref.onClose;\n    var initialRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\"), 2), value = ref1[0], setValue = ref1[1];\n    var handleInputChange = function(e) {\n        var inputValue = e.target.value;\n        setValue(inputValue);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                colorScheme: \"teal\",\n                size: \"sm\",\n                onClick: onOpen,\n                children: \"Add Tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n                initialFocusRef: initialRef,\n                isOpen: isOpen,\n                onClose: onClose,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {\n                                children: \"What is your next task?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {\n                                pb: 6,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                                        isRequired: true,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {\n                                                children: \"Task name\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                                ref: initialRef,\n                                                placeholder: \"Task name\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 43,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                                        mt: 4,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {\n                                                children: \"Description\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Textarea, {\n                                                value: value,\n                                                onChange: handleInputChange,\n                                                placeholder: \"My description of the task is..\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                                        mt: 3,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {\n                                                htmlFor: \"type\",\n                                                children: \"Type\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {\n                                                id: \"type\",\n                                                placeholder: \"Select type\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        children: \"Work\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                        lineNumber: 58,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        children: \"Exercise\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                        lineNumber: 59,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        children: \"Entertainment\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                        lineNumber: 60,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        children: \"Others\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                        lineNumber: 61,\n                                                        columnNumber: 17\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        colorScheme: \"blue\",\n                                        mr: 3,\n                                        children: \"Save\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        onClick: onClose,\n                                        children: \"Cancel\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(AddTask, \"wfoim60L6sZ6QrODgfGr1APIUoI=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure\n    ];\n});\n_c = AddTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddTask);\nvar _c;\n$RefreshReg$(_c, \"AddTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90YXNrcy9BZGRUYXNrLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBa0JmOztBQUUxQixJQUFNYyxPQUFPLEdBQUcsV0FBTTs7SUFDcEIseUVBQXlFO0lBQ3pFLElBQW9DRCxHQUFlLEdBQWZBLCtEQUFhLEVBQUUsRUFBM0NFLE1BQU0sR0FBc0JGLEdBQWUsQ0FBM0NFLE1BQU0sRUFBRUMsTUFBTSxHQUFjSCxHQUFlLENBQW5DRyxNQUFNLEVBQUVDLE9BQU8sR0FBS0osR0FBZSxDQUEzQkksT0FBTztJQUMvQixJQUFNQyxVQUFVLEdBQUdsQixtREFBWSxDQUFDLElBQUksQ0FBQztJQUNyQyxJQUF3QkEsSUFBMEIsa0JBQTFCQSxxREFBYyxDQUFTLEVBQUUsQ0FBQyxNQUE3Q3FCLEtBQUssR0FBY3JCLElBQTBCLEdBQXhDLEVBQUVzQixRQUFRLEdBQUl0QixJQUEwQixHQUE5QjtJQUNwQixJQUFJdUIsaUJBQWlCLEdBQUcsU0FBQ0MsQ0FBeUMsRUFBSztRQUNyRSxJQUFJQyxVQUFVLEdBQUdELENBQUMsQ0FBQ0UsTUFBTSxDQUFDTCxLQUFLO1FBQy9CQyxRQUFRLENBQUNHLFVBQVUsQ0FBQyxDQUFDO0tBQ3RCO0lBQ0QscUJBQ0U7OzBCQUNFLDhEQUFDeEIsb0RBQU07Z0JBQUMwQixXQUFXLEVBQUMsTUFBTTtnQkFBQ0MsSUFBSSxFQUFDLElBQUk7Z0JBQUNDLE9BQU8sRUFBRWIsTUFBTTswQkFBRSxXQUV0RDs7Ozs7cUJBQVM7MEJBQ1QsOERBQUNYLG1EQUFLO2dCQUFDeUIsZUFBZSxFQUFFWixVQUFVO2dCQUFFSCxNQUFNLEVBQUVBLE1BQU07Z0JBQUVFLE9BQU8sRUFBRUEsT0FBTzs7a0NBQ2xFLDhEQUFDUCwwREFBWTs7Ozs2QkFBRztrQ0FDaEIsOERBQUNILDBEQUFZOzswQ0FDWCw4REFBQ0UseURBQVc7MENBQUMseUJBQXVCOzs7OztxQ0FBYzswQ0FFbEQsOERBQUNILHVEQUFTO2dDQUFDeUIsRUFBRSxFQUFFLENBQUM7O2tEQUNkLDhEQUFDN0IseURBQVc7d0NBQUM4QixVQUFVOzswREFDckIsOERBQUM3Qix1REFBUzswREFBQyxXQUFTOzs7OztxREFBWTswREFDaEMsOERBQUNDLG1EQUFLO2dEQUFDNkIsR0FBRyxFQUFFZixVQUFVO2dEQUFFZ0IsV0FBVyxFQUFDLFdBQVc7Ozs7O3FEQUFHOzs7Ozs7NkNBQ3RDO2tEQUVkLDhEQUFDaEMseURBQVc7d0NBQUNpQyxFQUFFLEVBQUUsQ0FBQzs7MERBQ2hCLDhEQUFDaEMsdURBQVM7MERBQUMsYUFBVzs7Ozs7cURBQVk7MERBQ2xDLDhEQUFDUyxzREFBUTtnREFDUFMsS0FBSyxFQUFFQSxLQUFLO2dEQUNaZSxRQUFRLEVBQUViLGlCQUFpQjtnREFDM0JXLFdBQVcsRUFBQyxpQ0FBaUM7Ozs7O3FEQUM3Qzs7Ozs7OzZDQUNVO2tEQUVkLDhEQUFDaEMseURBQVc7d0NBQUNpQyxFQUFFLEVBQUUsQ0FBQzs7MERBQ2hCLDhEQUFDaEMsdURBQVM7Z0RBQUNrQyxPQUFPLEVBQUMsTUFBTTswREFBQyxNQUFJOzs7OztxREFBWTswREFDMUMsOERBQUMxQixvREFBTTtnREFBQzJCLEVBQUUsRUFBQyxNQUFNO2dEQUFDSixXQUFXLEVBQUMsYUFBYTs7a0VBQ3pDLDhEQUFDSyxRQUFNO2tFQUFDLE1BQUk7Ozs7OzZEQUFTO2tFQUNyQiw4REFBQ0EsUUFBTTtrRUFBQyxVQUFROzs7Ozs2REFBUztrRUFDekIsOERBQUNBLFFBQU07a0VBQUMsZUFBYTs7Ozs7NkRBQVM7a0VBQzlCLDhEQUFDQSxRQUFNO2tFQUFDLFFBQU07Ozs7OzZEQUFTOzs7Ozs7cURBQ2hCOzs7Ozs7NkNBQ0c7Ozs7OztxQ0FDSjswQ0FFWiw4REFBQy9CLHlEQUFXOztrREFDViw4REFBQ1Asb0RBQU07d0NBQUMwQixXQUFXLEVBQUMsTUFBTTt3Q0FBQ2EsRUFBRSxFQUFFLENBQUM7a0RBQUUsTUFFbEM7Ozs7OzZDQUFTO2tEQUNULDhEQUFDdkMsb0RBQU07d0NBQUM0QixPQUFPLEVBQUVaLE9BQU87a0RBQUUsUUFBTTs7Ozs7NkNBQVM7Ozs7OztxQ0FDN0I7Ozs7Ozs2QkFDRDs7Ozs7O3FCQUNUOztvQkFDUCxDQUNIO0NBQ0g7R0F2REtILE9BQU87O1FBRXlCRCwyREFBYTs7O0FBRjdDQyxLQUFBQSxPQUFPO0FBeURiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvQWRkVGFzay50c3g/N2QzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIEJ1dHRvbkdyb3VwLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUxhYmVsLFxuICBJY29uQnV0dG9uLFxuICBJbnB1dCxcbiAgTW9kYWwsXG4gIE1vZGFsQm9keSxcbiAgTW9kYWxDbG9zZUJ1dHRvbixcbiAgTW9kYWxDb250ZW50LFxuICBNb2RhbEZvb3RlcixcbiAgTW9kYWxIZWFkZXIsXG4gIE1vZGFsT3ZlcmxheSxcbiAgU2VsZWN0LFxuICBUZXh0YXJlYSxcbiAgdXNlRGlzY2xvc3VyZSxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuY29uc3QgQWRkVGFzayA9ICgpID0+IHtcbiAgLy8gY29uc3QgW2NsaWNrZWRBZGRUYXNrLCBzZXRDbGlja2VkQWRkVGFza10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPigpO1xuICBjb25zdCB7IGlzT3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VEaXNjbG9zdXJlKCk7XG4gIGNvbnN0IGluaXRpYWxSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIGxldCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGxldCBoYW5kbGVJbnB1dENoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xuICAgIGxldCBpbnB1dFZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0VmFsdWUoaW5wdXRWYWx1ZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJ0ZWFsXCIgc2l6ZT1cInNtXCIgb25DbGljaz17b25PcGVufT5cbiAgICAgICAgQWRkIFRhc2tzXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxNb2RhbCBpbml0aWFsRm9jdXNSZWY9e2luaXRpYWxSZWZ9IGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXtvbkNsb3NlfT5cbiAgICAgICAgPE1vZGFsT3ZlcmxheSAvPlxuICAgICAgICA8TW9kYWxDb250ZW50PlxuICAgICAgICAgIDxNb2RhbEhlYWRlcj5XaGF0IGlzIHlvdXIgbmV4dCB0YXNrPzwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgey8qIDxNb2RhbENsb3NlQnV0dG9uIC8+ICovfVxuICAgICAgICAgIDxNb2RhbEJvZHkgcGI9ezZ9PlxuICAgICAgICAgICAgPEZvcm1Db250cm9sIGlzUmVxdWlyZWQ+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWw+VGFzayBuYW1lPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgIDxJbnB1dCByZWY9e2luaXRpYWxSZWZ9IHBsYWNlaG9sZGVyPVwiVGFzayBuYW1lXCIgLz5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBtdD17NH0+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWw+RGVzY3JpcHRpb248L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk15IGRlc2NyaXB0aW9uIG9mIHRoZSB0YXNrIGlzLi5cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgICAgICAgPEZvcm1Db250cm9sIG10PXszfT5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwidHlwZVwiPlR5cGU8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPFNlbGVjdCBpZD1cInR5cGVcIiBwbGFjZWhvbGRlcj1cIlNlbGVjdCB0eXBlXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5Xb3JrPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5FeGVyY2lzZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+RW50ZXJ0YWlubWVudDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+T3RoZXJzPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICA8L01vZGFsQm9keT5cblxuICAgICAgICAgIDxNb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJibHVlXCIgbXI9ezN9PlxuICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbG9zZX0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICAgICAgPC9Nb2RhbENvbnRlbnQ+XG4gICAgICA8L01vZGFsPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkVGFzaztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIkZvcm1Db250cm9sIiwiRm9ybUxhYmVsIiwiSW5wdXQiLCJNb2RhbCIsIk1vZGFsQm9keSIsIk1vZGFsQ29udGVudCIsIk1vZGFsRm9vdGVyIiwiTW9kYWxIZWFkZXIiLCJNb2RhbE92ZXJsYXkiLCJTZWxlY3QiLCJUZXh0YXJlYSIsInVzZURpc2Nsb3N1cmUiLCJBZGRUYXNrIiwiaXNPcGVuIiwib25PcGVuIiwib25DbG9zZSIsImluaXRpYWxSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJpbnB1dFZhbHVlIiwidGFyZ2V0IiwiY29sb3JTY2hlbWUiLCJzaXplIiwib25DbGljayIsImluaXRpYWxGb2N1c1JlZiIsInBiIiwiaXNSZXF1aXJlZCIsInJlZiIsInBsYWNlaG9sZGVyIiwibXQiLCJvbkNoYW5nZSIsImh0bWxGb3IiLCJpZCIsIm9wdGlvbiIsIm1yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/tasks/AddTask.tsx\n");

/***/ })

});