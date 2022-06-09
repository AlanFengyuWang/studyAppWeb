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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _Subtask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subtask */ \"./src/components/tasks/Subtask.tsx\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar AddTask = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure)(), isOpen = ref.isOpen, onOpen = ref.onOpen, onClose = ref.onClose;\n    var initialRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    //useFieldAray\n    var ref1 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({\n        defaultValues: {\n            subtask: [\n                {\n                    title: \"\",\n                    description: \"\"\n                }\n            ]\n        },\n        mode: \"onBlur\"\n    }), register = ref1.register, control = ref1.control, handleSubmit = ref1.handleSubmit, errors = ref1.formState.errors;\n    var ref2 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFieldArray)({\n        name: \"subtask\",\n        control: control\n    }), fields = ref2.fields, append = ref2.append, remove = ref2.remove;\n    var ref3 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\"), 2), description = ref3[0], setDescription = ref3[1];\n    var handleDescriptionInputChange = function(e) {\n        var inputValue = e.target.value;\n        setDescription(inputValue);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                colorScheme: \"teal\",\n                size: \"sm\",\n                onClick: onOpen,\n                children: \"Add Tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n                initialFocusRef: initialRef,\n                isOpen: isOpen,\n                onClose: onClose,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalOverlay, {}, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalContent, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalHeader, {\n                                children: \"What is your next task?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalCloseButton, {}, void 0, false, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalBody, {\n                                pb: 6,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                        isRequired: true,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                                children: \"Task name:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                                ref: initialRef,\n                                                placeholder: \"Task name\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                        mt: 4,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                                children: \"Description:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Textarea, {\n                                                value: description,\n                                                onChange: handleDescriptionInputChange,\n                                                placeholder: \"My description of the task is..\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                        mt: 3,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                                htmlFor: \"type\",\n                                                children: \"Type:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Select, {\n                                                id: \"type\",\n                                                // placeholder=\"Select type\"\n                                                // size=\"xs\"\n                                                color: \"gray\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        children: \"Work\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                        lineNumber: 86,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        children: \"Exercise\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                        lineNumber: 87,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        children: \"Entertainment\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                        lineNumber: 88,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        children: \"Others\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                        lineNumber: 89,\n                                                        columnNumber: 17\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                        mt: 4,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                                marginBottom: 0,\n                                                children: \"Subtasks\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 15\n                                            }, _this),\n                                            fields.map(function(field, index) {\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Subtask__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                    index: index,\n                                                    isLast: fields.length === index + 1,\n                                                    register: register,\n                                                    append: append,\n                                                    remove: remove\n                                                }, index, false, {\n                                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 17\n                                                }, _this1);\n                                            })\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalFooter, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        colorScheme: \"blue\",\n                                        mr: 3,\n                                        children: \"Save\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        onClick: onClose,\n                                        children: \"Cancel\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(AddTask, \"VDbcNCO3laVb5NNJE4lrV1mcP9U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFieldArray\n    ];\n});\n_c = AddTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddTask);\nvar _c;\n$RefreshReg$(_c, \"AddTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90YXNrcy9BZGRUYXNrLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7QUFtQmxDO0FBQ007QUFDeUI7O0FBSXpELElBQU1rQixPQUFPLEdBQUcsV0FBTTs7O0lBQ3BCLElBQW9DSixHQUFlLEdBQWZBLCtEQUFhLEVBQUUsRUFBM0NLLE1BQU0sR0FBc0JMLEdBQWUsQ0FBM0NLLE1BQU0sRUFBRUMsTUFBTSxHQUFjTixHQUFlLENBQW5DTSxNQUFNLEVBQUVDLE9BQU8sR0FBS1AsR0FBZSxDQUEzQk8sT0FBTztJQUMvQixJQUFNQyxVQUFVLEdBQUd0QixtREFBWSxDQUFDLElBQUksQ0FBQztJQUVyQyxjQUFjO0lBQ2QsSUFLSWdCLElBR0YsR0FIRUEsd0RBQU8sQ0FBYTtRQUN0QlEsYUFBYSxFQUFFO1lBQUVDLE9BQU8sRUFBRTtnQkFBQztvQkFBRUMsS0FBSyxFQUFFLEVBQUU7b0JBQUVDLFdBQVcsRUFBRSxFQUFFO2lCQUFFO2FBQUM7U0FBRTtRQUM1REMsSUFBSSxFQUFFLFFBQVE7S0FDZixDQUFDLEVBUEFDLFFBQVEsR0FJTmIsSUFHRixDQVBBYSxRQUFRLEVBQ1JDLE9BQU8sR0FHTGQsSUFHRixDQU5BYyxPQUFPLEVBQ1BDLFlBQVksR0FFVmYsSUFHRixDQUxBZSxZQUFZLEVBQ1pDLE1BQW1CLEdBQ2pCaEIsSUFHRixDQUpBZ0IsU0FBUyxDQUFJQyxNQUFNO0lBS3JCLElBQW1DaEIsSUFHakMsR0FIaUNBLDhEQUFhLENBQUM7UUFDL0NpQixJQUFJLEVBQUUsU0FBUztRQUNmSixPQUFPLEVBQVBBLE9BQU87S0FDUixDQUFDLEVBSE1LLE1BQU0sR0FBcUJsQixJQUdqQyxDQUhNa0IsTUFBTSxFQUFFQyxNQUFNLEdBQWFuQixJQUdqQyxDQUhjbUIsTUFBTSxFQUFFQyxNQUFNLEdBQUtwQixJQUdqQyxDQUhzQm9CLE1BQU07SUFJ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LG9EQUFNO3dDQUFDNEMsV0FBVyxFQUFDLE1BQU07d0NBQUNvQixFQUFFLEVBQUUsQ0FBQztrREFBRSxNQUVsQzs7Ozs7NkNBQVM7a0RBQ1QsOERBQUNoRSxvREFBTTt3Q0FBQzhDLE9BQU8sRUFBRTFCLE9BQU87a0RBQUUsUUFBTTs7Ozs7NkNBQVM7Ozs7OztxQ0FDN0I7Ozs7Ozs2QkFDRDs7Ozs7O3FCQUNUOztvQkFDUCxDQUNIO0NBQ0g7R0E1RktILE9BQU87O1FBQ3lCSiwyREFBYTtRQVM3Q0Usb0RBQU87UUFJd0JDLDBEQUFhOzs7QUFkNUNDLEtBQUFBLE9BQU87QUE4RmIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy90YXNrcy9BZGRUYXNrLnRzeD83ZDM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBNb3VzZUV2ZW50SGFuZGxlciwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgQnV0dG9uR3JvdXAsXG4gIEZvcm1Db250cm9sLFxuICBGb3JtTGFiZWwsXG4gIEljb25CdXR0b24sXG4gIElucHV0LFxuICBNb2RhbCxcbiAgTW9kYWxCb2R5LFxuICBNb2RhbENsb3NlQnV0dG9uLFxuICBNb2RhbENvbnRlbnQsXG4gIE1vZGFsRm9vdGVyLFxuICBNb2RhbEhlYWRlcixcbiAgTW9kYWxPdmVybGF5LFxuICBTZWxlY3QsXG4gIFRleHRhcmVhLFxuICB1c2VEaXNjbG9zdXJlLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFN1YnRhc2sgZnJvbSBcIi4vU3VidGFza1wiO1xuaW1wb3J0IHsgdXNlRm9ybSwgdXNlRmllbGRBcnJheSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcblxudHlwZSBGb3JtVmFsdWVzID0geyBzdWJ0YXNrOiB7IHRpdGxlOiBzdHJpbmc7IGRlc2NyaXB0aW9uOiBzdHJpbmcgfVtdIH07XG5cbmNvbnN0IEFkZFRhc2sgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKTtcbiAgY29uc3QgaW5pdGlhbFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICAvL3VzZUZpZWxkQXJheVxuICBjb25zdCB7XG4gICAgcmVnaXN0ZXIsXG4gICAgY29udHJvbCxcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICB9ID0gdXNlRm9ybTxGb3JtVmFsdWVzPih7XG4gICAgZGVmYXVsdFZhbHVlczogeyBzdWJ0YXNrOiBbeyB0aXRsZTogXCJcIiwgZGVzY3JpcHRpb246IFwiXCIgfV0gfSxcbiAgICBtb2RlOiBcIm9uQmx1clwiLFxuICB9KTtcbiAgY29uc3QgeyBmaWVsZHMsIGFwcGVuZCwgcmVtb3ZlIH0gPSB1c2VGaWVsZEFycmF5KHtcbiAgICBuYW1lOiBcInN1YnRhc2tcIixcbiAgICBjb250cm9sLFxuICB9KTtcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZURlc2NyaXB0aW9uSW5wdXRDaGFuZ2UgPSAoXG4gICAgZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cbiAgKSA9PiB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHNldERlc2NyaXB0aW9uKGlucHV0VmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJ0ZWFsXCIgc2l6ZT1cInNtXCIgb25DbGljaz17b25PcGVufT5cbiAgICAgICAgQWRkIFRhc2tzXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxNb2RhbCBpbml0aWFsRm9jdXNSZWY9e2luaXRpYWxSZWZ9IGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXtvbkNsb3NlfT5cbiAgICAgICAgPE1vZGFsT3ZlcmxheSAvPlxuICAgICAgICA8TW9kYWxDb250ZW50PlxuICAgICAgICAgIDxNb2RhbEhlYWRlcj5XaGF0IGlzIHlvdXIgbmV4dCB0YXNrPzwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gLz5cbiAgICAgICAgICA8TW9kYWxCb2R5IHBiPXs2fT5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBpc1JlcXVpcmVkPlxuICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlRhc2sgbmFtZTo8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPElucHV0IHJlZj17aW5pdGlhbFJlZn0gcGxhY2Vob2xkZXI9XCJUYXNrIG5hbWVcIiAvPlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgICAgICAgPEZvcm1Db250cm9sIG10PXs0fT5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbD5EZXNjcmlwdGlvbjo8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEZXNjcmlwdGlvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTXkgZGVzY3JpcHRpb24gb2YgdGhlIHRhc2sgaXMuLlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgbXQ9ezN9PlxuICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJ0eXBlXCI+VHlwZTo8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIGlkPVwidHlwZVwiXG4gICAgICAgICAgICAgICAgLy8gcGxhY2Vob2xkZXI9XCJTZWxlY3QgdHlwZVwiXG4gICAgICAgICAgICAgICAgLy8gc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImdyYXlcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5Xb3JrPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5FeGVyY2lzZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+RW50ZXJ0YWlubWVudDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+T3RoZXJzPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgICAgICAgPEZvcm1Db250cm9sIG10PXs0fT5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbCBtYXJnaW5Cb3R0b209ezB9PlN1YnRhc2tzPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgIHtmaWVsZHMubWFwKChmaWVsZCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8U3VidGFza1xuICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGlzTGFzdD17ZmllbGRzLmxlbmd0aCA9PT0gaW5kZXggKyAxfVxuICAgICAgICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICAgICAgICAgICAgYXBwZW5kPXthcHBlbmR9XG4gICAgICAgICAgICAgICAgICByZW1vdmU9e3JlbW92ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgPC9Nb2RhbEJvZHk+XG5cbiAgICAgICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwiYmx1ZVwiIG1yPXszfT5cbiAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgIDwvTW9kYWxGb290ZXI+XG4gICAgICAgIDwvTW9kYWxDb250ZW50PlxuICAgICAgPC9Nb2RhbD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFRhc2s7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJGb3JtQ29udHJvbCIsIkZvcm1MYWJlbCIsIklucHV0IiwiTW9kYWwiLCJNb2RhbEJvZHkiLCJNb2RhbENsb3NlQnV0dG9uIiwiTW9kYWxDb250ZW50IiwiTW9kYWxGb290ZXIiLCJNb2RhbEhlYWRlciIsIk1vZGFsT3ZlcmxheSIsIlNlbGVjdCIsIlRleHRhcmVhIiwidXNlRGlzY2xvc3VyZSIsIlN1YnRhc2siLCJ1c2VGb3JtIiwidXNlRmllbGRBcnJheSIsIkFkZFRhc2siLCJpc09wZW4iLCJvbk9wZW4iLCJvbkNsb3NlIiwiaW5pdGlhbFJlZiIsInVzZVJlZiIsImRlZmF1bHRWYWx1ZXMiLCJzdWJ0YXNrIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1vZGUiLCJyZWdpc3RlciIsImNvbnRyb2wiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJuYW1lIiwiZmllbGRzIiwiYXBwZW5kIiwicmVtb3ZlIiwidXNlU3RhdGUiLCJzZXREZXNjcmlwdGlvbiIsImhhbmRsZURlc2NyaXB0aW9uSW5wdXRDaGFuZ2UiLCJlIiwiaW5wdXRWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwiY29sb3JTY2hlbWUiLCJzaXplIiwib25DbGljayIsImluaXRpYWxGb2N1c1JlZiIsInBiIiwiaXNSZXF1aXJlZCIsInJlZiIsInBsYWNlaG9sZGVyIiwibXQiLCJvbkNoYW5nZSIsImh0bWxGb3IiLCJpZCIsImNvbG9yIiwib3B0aW9uIiwibWFyZ2luQm90dG9tIiwibWFwIiwiZmllbGQiLCJpbmRleCIsImlzTGFzdCIsImxlbmd0aCIsIm1yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/tasks/AddTask.tsx\n");

/***/ })

});