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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js\");\n/* harmony import */ var _Subtask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subtask */ \"./src/components/tasks/Subtask.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n// import DateTimePicker from \"react-datetime-picker/dist/entry.nostyle\";\n\n\nvar _s = $RefreshSig$();\nvar AddTask = function() {\n    _s();\n    // const [clickedAddTask, setClickedAddTask] = React.useState<boolean>();\n    var ref = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure)(), isOpen = ref.isOpen, onOpen = ref.onOpen, onClose = ref.onClose;\n    var initialRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\"), 2), description = ref1[0], setDescription = ref1[1];\n    var ref2 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(new Date()), 2), startDate = ref2[0], setStartDate = ref2[1];\n    var handleDescriptionInputChange = function(e) {\n        var inputValue = e.target.value;\n        setDescription(inputValue);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                colorScheme: \"teal\",\n                size: \"sm\",\n                onClick: onOpen,\n                children: \"Add Tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n                initialFocusRef: initialRef,\n                isOpen: isOpen,\n                onClose: onClose,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalOverlay, {}, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalContent, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalHeader, {\n                                children: \"What is your next task?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalCloseButton, {}, void 0, false, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalBody, {\n                                pb: 6,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                        isRequired: true,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                                children: \"Task name\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                                ref: initialRef,\n                                                placeholder: \"Task name\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                        mt: 4,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                                children: \"Description\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Textarea, {\n                                                value: description,\n                                                onChange: handleDescriptionInputChange,\n                                                placeholder: \"My description of the task is..\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                        mt: 3,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                                htmlFor: \"type\",\n                                                children: \"Type\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Select, {\n                                                id: \"type\",\n                                                placeholder: \"Select type\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        children: \"Work\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        children: \"Exercise\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        children: \"Entertainment\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        children: \"Others\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                        lineNumber: 71,\n                                                        columnNumber: 17\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                        mt: 3,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                            htmlFor: \"due\",\n                                            children: \"Due\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                        mt: 4,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                                marginBottom: 0,\n                                                children: \"Subtasks\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Subtask__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                height: \"25px\",\n                                                margin: \"0 auto\",\n                                                marginTop: \"10px\",\n                                                width: \"100%\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__.AddIcon, {}, void 0, false, {\n                                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalFooter, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        colorScheme: \"blue\",\n                                        mr: 3,\n                                        children: \"Save\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        onClick: onClose,\n                                        children: \"Cancel\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(AddTask, \"WZg5VfvyE1Z6HZt6ljvEUBR0r8c=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure\n    ];\n});\n_c = AddTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddTask);\nvar _c;\n$RefreshReg$(_c, \"AddTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs2REFBUztrRUFDOUIsOERBQUNBLFFBQU07a0VBQUMsUUFBTTs7Ozs7NkRBQVM7Ozs7OztxREFDaEI7Ozs7Ozs2Q0FDRztrREFFZCw4REFBQzVDLHlEQUFXO3dDQUFDd0MsRUFBRSxFQUFFLENBQUM7a0RBQ2hCLDRFQUFDdkMsdURBQVM7NENBQUN5QyxPQUFPLEVBQUMsS0FBSztzREFBQyxLQUFHOzs7OztpREFBWTs7Ozs7NkNBUTVCO2tEQUVkLDhEQUFDMUMseURBQVc7d0NBQUN3QyxFQUFFLEVBQUUsQ0FBQzs7MERBQ2hCLDhEQUFDdkMsdURBQVM7Z0RBQUM0QyxZQUFZLEVBQUUsQ0FBQzswREFBRSxVQUFROzs7OztxREFBWTswREFDaEQsOERBQUMvQixnREFBTzs7OztxREFBRzswREFDWCw4REFBQ2Ysb0RBQU07Z0RBQ0wrQyxNQUFNLEVBQUMsTUFBTTtnREFDYkMsTUFBTSxFQUFDLFFBQVE7Z0RBQ2ZDLFNBQVMsRUFBQyxNQUFNO2dEQUNoQkMsS0FBSyxFQUFDLE1BQU07MERBRVosNEVBQUNwQyxxREFBTzs7Ozt5REFBRzs7Ozs7cURBQ0o7Ozs7Ozs2Q0FDRzs7Ozs7O3FDQUNKOzBDQUVaLDhEQUFDTix5REFBVzs7a0RBQ1YsOERBQUNSLG9EQUFNO3dDQUFDaUMsV0FBVyxFQUFDLE1BQU07d0NBQUNrQixFQUFFLEVBQUUsQ0FBQztrREFBRSxNQUVsQzs7Ozs7NkNBQVM7a0RBQ1QsOERBQUNuRCxvREFBTTt3Q0FBQ21DLE9BQU8sRUFBRWhCLE9BQU87a0RBQUUsUUFBTTs7Ozs7NkNBQVM7Ozs7OztxQ0FDN0I7Ozs7Ozs2QkFDRDs7Ozs7O3FCQUNUOztvQkFDUCxDQUNIO0NBQ0g7R0FuRktILE9BQU87O1FBRXlCSCwyREFBYTs7O0FBRjdDRyxLQUFBQSxPQUFPO0FBcUZiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvQWRkVGFzay50c3g/N2QzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgQnV0dG9uR3JvdXAsXG4gIEZvcm1Db250cm9sLFxuICBGb3JtTGFiZWwsXG4gIEljb25CdXR0b24sXG4gIElucHV0LFxuICBNb2RhbCxcbiAgTW9kYWxCb2R5LFxuICBNb2RhbENsb3NlQnV0dG9uLFxuICBNb2RhbENvbnRlbnQsXG4gIE1vZGFsRm9vdGVyLFxuICBNb2RhbEhlYWRlcixcbiAgTW9kYWxPdmVybGF5LFxuICBTZWxlY3QsXG4gIFRleHRhcmVhLFxuICB1c2VEaXNjbG9zdXJlLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IERhdGVUaW1lUGlja2VyIGZyb20gXCJyZWFjdC1kYXRldGltZS1waWNrZXJcIjtcblxuLy8gaW1wb3J0IERhdGVUaW1lUGlja2VyIGZyb20gXCJyZWFjdC1kYXRldGltZS1waWNrZXIvZGlzdC9lbnRyeS5ub3N0eWxlXCI7XG5pbXBvcnQgeyBBZGRJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcbmltcG9ydCBTdWJ0YXNrIGZyb20gXCIuL1N1YnRhc2tcIjtcblxuY29uc3QgQWRkVGFzayA9ICgpID0+IHtcbiAgLy8gY29uc3QgW2NsaWNrZWRBZGRUYXNrLCBzZXRDbGlja2VkQWRkVGFza10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPigpO1xuICBjb25zdCB7IGlzT3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VEaXNjbG9zdXJlKCk7XG4gIGNvbnN0IGluaXRpYWxSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IFJlYWN0LnVzZVN0YXRlPERhdGU+KG5ldyBEYXRlKCkpO1xuXG4gIGNvbnN0IGhhbmRsZURlc2NyaXB0aW9uSW5wdXRDaGFuZ2UgPSAoXG4gICAgZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cbiAgKSA9PiB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHNldERlc2NyaXB0aW9uKGlucHV0VmFsdWUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwidGVhbFwiIHNpemU9XCJzbVwiIG9uQ2xpY2s9e29uT3Blbn0+XG4gICAgICAgIEFkZCBUYXNrc1xuICAgICAgPC9CdXR0b24+XG4gICAgICA8TW9kYWwgaW5pdGlhbEZvY3VzUmVmPXtpbml0aWFsUmVmfSBpc09wZW49e2lzT3Blbn0gb25DbG9zZT17b25DbG9zZX0+XG4gICAgICAgIDxNb2RhbE92ZXJsYXkgLz5cbiAgICAgICAgPE1vZGFsQ29udGVudD5cbiAgICAgICAgICA8TW9kYWxIZWFkZXI+V2hhdCBpcyB5b3VyIG5leHQgdGFzaz88L01vZGFsSGVhZGVyPlxuICAgICAgICAgIDxNb2RhbENsb3NlQnV0dG9uIC8+XG4gICAgICAgICAgPE1vZGFsQm9keSBwYj17Nn0+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgaXNSZXF1aXJlZD5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbD5UYXNrIG5hbWU8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPElucHV0IHJlZj17aW5pdGlhbFJlZn0gcGxhY2Vob2xkZXI9XCJUYXNrIG5hbWVcIiAvPlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgICAgICAgPEZvcm1Db250cm9sIG10PXs0fT5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbD5EZXNjcmlwdGlvbjwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZURlc2NyaXB0aW9uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNeSBkZXNjcmlwdGlvbiBvZiB0aGUgdGFzayBpcy4uXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBtdD17M30+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cInR5cGVcIj5UeXBlPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgIDxTZWxlY3QgaWQ9XCJ0eXBlXCIgcGxhY2Vob2xkZXI9XCJTZWxlY3QgdHlwZVwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+V29yazwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+RXhlcmNpc2U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPkVudGVydGFpbm1lbnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPk90aGVyczwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBtdD17M30+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cImR1ZVwiPkR1ZTwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICB7LyogPEJveCB3PVwiMTAwJVwiIHA9ezR9IGJvcmRlcj1cIjFweCBzb2xpZFwiPiAqL31cbiAgICAgICAgICAgICAgey8qIDxEYXRlUGlja2VyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGU6IERhdGUpID0+IHNldFN0YXJ0RGF0ZShkYXRlKX1cbiAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICAgIHsvKiA8L0JveD4gKi99XG4gICAgICAgICAgICAgIHsvKiA8RGF0ZVRpbWVQaWNrZXIgb25DaGFuZ2U9e3NldFN0YXJ0RGF0ZX0gdmFsdWU9e3N0YXJ0RGF0ZX0gLz4gKi99XG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgbXQ9ezR9PlxuICAgICAgICAgICAgICA8Rm9ybUxhYmVsIG1hcmdpbkJvdHRvbT17MH0+U3VidGFza3M8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPFN1YnRhc2sgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIjAgYXV0b1wiXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiMTBweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxBZGRJY29uIC8+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICA8L01vZGFsQm9keT5cblxuICAgICAgICAgIDxNb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJibHVlXCIgbXI9ezN9PlxuICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbG9zZX0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICAgICAgPC9Nb2RhbENvbnRlbnQ+XG4gICAgICA8L01vZGFsPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkVGFzaztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIkZvcm1Db250cm9sIiwiRm9ybUxhYmVsIiwiSW5wdXQiLCJNb2RhbCIsIk1vZGFsQm9keSIsIk1vZGFsQ2xvc2VCdXR0b24iLCJNb2RhbENvbnRlbnQiLCJNb2RhbEZvb3RlciIsIk1vZGFsSGVhZGVyIiwiTW9kYWxPdmVybGF5IiwiU2VsZWN0IiwiVGV4dGFyZWEiLCJ1c2VEaXNjbG9zdXJlIiwiQWRkSWNvbiIsIlN1YnRhc2siLCJBZGRUYXNrIiwiaXNPcGVuIiwib25PcGVuIiwib25DbG9zZSIsImluaXRpYWxSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJEYXRlIiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiaGFuZGxlRGVzY3JpcHRpb25JbnB1dENoYW5nZSIsImUiLCJpbnB1dFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJjb2xvclNjaGVtZSIsInNpemUiLCJvbkNsaWNrIiwiaW5pdGlhbEZvY3VzUmVmIiwicGIiLCJpc1JlcXVpcmVkIiwicmVmIiwicGxhY2Vob2xkZXIiLCJtdCIsIm9uQ2hhbmdlIiwiaHRtbEZvciIsImlkIiwib3B0aW9uIiwibWFyZ2luQm90dG9tIiwiaGVpZ2h0IiwibWFyZ2luIiwibWFyZ2luVG9wIiwid2lkdGgiLCJtciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/tasks/AddTask.tsx\n");

/***/ })

});