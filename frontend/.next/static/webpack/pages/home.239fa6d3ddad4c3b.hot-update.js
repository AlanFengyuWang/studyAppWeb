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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _Subtask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subtask */ \"./src/components/tasks/Subtask.tsx\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar AddTask = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure)(), isOpen = ref.isOpen, onOpen = ref.onOpen, onClose = ref.onClose;\n    var initialRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var ref1 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)(), register = ref1.register, handleSubmit = ref1.handleSubmit, errors = ref1.formState.errors;\n    var ref2 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\"), 2), description = ref2[0], setDescription = ref2[1];\n    //use state\n    var ref3 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(3), 2), nSubtasks = ref3[0], setnSubtasks = ref3[1];\n    // const [subTasks, setSubTasks] = React.useState<TSubtask[]>([]);\n    var handleDescriptionInputChange = function(e) {\n        var inputValue = e.target.value;\n        setDescription(inputValue);\n    };\n    var onSubmit = function(data) {\n        console.log(\"data = \" + data);\n    };\n    var updateSubTask = function() {\n    // e.preventDefault();\n    };\n    var onClickDelFunc = function(e) {\n        e.preventDefault();\n        console.log(\"delting\");\n        alert(\"deleting\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                colorScheme: \"teal\",\n                size: \"sm\",\n                onClick: onOpen,\n                children: \"Add Tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n                initialFocusRef: initialRef,\n                isOpen: isOpen,\n                onClose: onClose,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalOverlay, {}, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalContent, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalHeader, {\n                                children: \"What is your next task?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalCloseButton, {}, void 0, false, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalBody, {\n                                pb: 6,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                        isRequired: true,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                                children: \"Task name:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                                ref: initialRef,\n                                                placeholder: \"Task name\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                        mt: 4,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                                children: \"Description:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Textarea, {\n                                                value: description,\n                                                onChange: handleDescriptionInputChange,\n                                                placeholder: \"My description of the task is..\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                        mt: 3,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                                htmlFor: \"type\",\n                                                children: \"Type:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Select, {\n                                                id: \"type\",\n                                                // placeholder=\"Select type\"\n                                                size: \"md\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        children: \"Work\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                        lineNumber: 96,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        children: \"Exercise\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                        lineNumber: 97,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        children: \"Entertainment\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                        lineNumber: 98,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        children: \"Others\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                        lineNumber: 99,\n                                                        columnNumber: 17\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                        mt: 4,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                                marginBottom: 0,\n                                                children: \"Subtasks\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 104,\n                                                columnNumber: 15\n                                            }, _this),\n                                            _toConsumableArray(Array(nSubtasks)).map(function(subtaskIndx, index) {\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Subtask__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                    index: index,\n                                                    isLast: index == nSubtasks - 1,\n                                                    onClickDelFunc: onClickDelFunc,\n                                                    onSubmit: onSubmit,\n                                                    register: register\n                                                }, index, false, {\n                                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                    lineNumber: 106,\n                                                    columnNumber: 17\n                                                }, _this1);\n                                            })\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalFooter, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        colorScheme: \"blue\",\n                                        mr: 3,\n                                        children: \"Save\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        onClick: onClose,\n                                        children: \"Cancel\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(AddTask, \"WLQy70uGoWARIjgu/gmfJztI8Oc=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm\n    ];\n});\n_c = AddTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddTask);\nvar _c;\n$RefreshReg$(_c, \"AddTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90YXNrcy9BZGRUYXNrLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7QUFtQmxDO0FBQ007QUFDVTs7QUFJMUMsSUFBTWlCLE9BQU8sR0FBRyxXQUFNOzs7SUFDcEIsSUFBb0NILEdBQWUsR0FBZkEsK0RBQWEsRUFBRSxFQUEzQ0ksTUFBTSxHQUFzQkosR0FBZSxDQUEzQ0ksTUFBTSxFQUFFQyxNQUFNLEdBQWNMLEdBQWUsQ0FBbkNLLE1BQU0sRUFBRUMsT0FBTyxHQUFLTixHQUFlLENBQTNCTSxPQUFPO0lBQy9CLElBQU1DLFVBQVUsR0FBR3JCLG1EQUFZLENBQUMsSUFBSSxDQUFDO0lBSXJDLElBSUlnQixJQUFxQixHQUFyQkEsd0RBQU8sRUFBYyxFQUh2Qk8sUUFBUSxHQUdOUCxJQUFxQixDQUh2Qk8sUUFBUSxFQUNSQyxZQUFZLEdBRVZSLElBQXFCLENBRnZCUSxZQUFZLEVBQ1pDLE1BQW1CLEdBQ2pCVCxJQUFxQixDQUR2QlMsU0FBUyxDQUFJQyxNQUFNO0lBRXJCLElBQXNDMUIsSUFBMEIsa0JBQTFCQSxxREFBYyxDQUFTLEVBQUUsQ0FBQyxNQUF6RDRCLFdBQVcsR0FBb0I1QixJQUEwQixHQUE5QyxFQUFFNkIsY0FBYyxHQUFJN0IsSUFBMEIsR0FBOUI7SUFFbEMsV0FBVztJQUNYLElBQWtDQSxJQUF5QixrQkFBekJBLHFEQUFjLENBQVMsQ0FBQyxDQUFDLE1BQXBEOEIsU0FBUyxHQUFrQjlCLElBQXlCLEdBQTNDLEVBQUUrQixZQUFZLEdBQUkvQixJQUF5QixHQUE3QjtJQUM5QixrRUFBa0U7SUFFbEUsSUFBTWdDLDRCQUE0QixHQUFHLFNBQ25DQyxDQUF5QyxFQUN0QztRQUNILElBQU1DLFVBQVUsR0FBR0QsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7UUFDakNQLGNBQWMsQ0FBQ0ssVUFB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QUs7Ozs7MERBS1Y7NkNBQ0gsQ0FBQzs7Ozs7OzZDQUNVOzs7Ozs7cUNBQ0o7MENBRVosOERBQUNyRCx5REFBVzs7a0RBQ1YsOERBQUNSLG9EQUFNO3dDQUFDNEMsV0FBVyxFQUFDLE1BQU07d0NBQUNtQixFQUFFLEVBQUUsQ0FBQztrREFBRSxNQUVsQzs7Ozs7NkNBQVM7a0RBQ1QsOERBQUMvRCxvREFBTTt3Q0FBQzhDLE9BQU8sRUFBRTNCLE9BQU87a0RBQUUsUUFBTTs7Ozs7NkNBQVM7Ozs7OztxQ0FDN0I7Ozs7Ozs2QkFDRDs7Ozs7O3FCQUNUOztvQkFDUCxDQUNIO0NBQ0g7R0F0R0tILE9BQU87O1FBQ3lCSCwyREFBYTtRQVM3Q0Usb0RBQU87OztBQVZQQyxLQUFBQSxPQUFPO0FBd0diLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvQWRkVGFzay50c3g/N2QzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgTW91c2VFdmVudEhhbmRsZXIsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIEJ1dHRvbkdyb3VwLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUxhYmVsLFxuICBJY29uQnV0dG9uLFxuICBJbnB1dCxcbiAgTW9kYWwsXG4gIE1vZGFsQm9keSxcbiAgTW9kYWxDbG9zZUJ1dHRvbixcbiAgTW9kYWxDb250ZW50LFxuICBNb2RhbEZvb3RlcixcbiAgTW9kYWxIZWFkZXIsXG4gIE1vZGFsT3ZlcmxheSxcbiAgU2VsZWN0LFxuICBUZXh0YXJlYSxcbiAgdXNlRGlzY2xvc3VyZSxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBTdWJ0YXNrIGZyb20gXCIuL1N1YnRhc2tcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5cbnR5cGUgVFN1YnRhc2sgPSB7IHRpdGxlOiBzdHJpbmc7IGRlc2NyaXB0aW9uOiBzdHJpbmdbXSB9O1xuXG5jb25zdCBBZGRUYXNrID0gKCkgPT4ge1xuICBjb25zdCB7IGlzT3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VEaXNjbG9zdXJlKCk7XG4gIGNvbnN0IGluaXRpYWxSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgLy91c2Vmb3JtXG4gIHR5cGUgRm9ybVZhbHVlcyA9IFt7IHRpdGxlOiBzdHJpbmc7IGRlc2NyaXB0aW9uOiBzdHJpbmcgfV07XG4gIGNvbnN0IHtcbiAgICByZWdpc3RlcixcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICB9ID0gdXNlRm9ybTxGb3JtVmFsdWVzPigpO1xuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgLy91c2Ugc3RhdGVcbiAgY29uc3QgW25TdWJ0YXNrcywgc2V0blN1YnRhc2tzXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMyk7XG4gIC8vIGNvbnN0IFtzdWJUYXNrcywgc2V0U3ViVGFza3NdID0gUmVhY3QudXNlU3RhdGU8VFN1YnRhc2tbXT4oW10pO1xuXG4gIGNvbnN0IGhhbmRsZURlc2NyaXB0aW9uSW5wdXRDaGFuZ2UgPSAoXG4gICAgZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD5cbiAgKSA9PiB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHNldERlc2NyaXB0aW9uKGlucHV0VmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGE6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZGF0YSA9IFwiICsgZGF0YSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlU3ViVGFzayA9ICgpID0+IHtcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgY29uc3Qgb25DbGlja0RlbEZ1bmMgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJkZWx0aW5nXCIpO1xuICAgIGFsZXJ0KFwiZGVsZXRpbmdcIik7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJ0ZWFsXCIgc2l6ZT1cInNtXCIgb25DbGljaz17b25PcGVufT5cbiAgICAgICAgQWRkIFRhc2tzXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxNb2RhbCBpbml0aWFsRm9jdXNSZWY9e2luaXRpYWxSZWZ9IGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXtvbkNsb3NlfT5cbiAgICAgICAgPE1vZGFsT3ZlcmxheSAvPlxuICAgICAgICA8TW9kYWxDb250ZW50PlxuICAgICAgICAgIDxNb2RhbEhlYWRlcj5XaGF0IGlzIHlvdXIgbmV4dCB0YXNrPzwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gLz5cbiAgICAgICAgICA8TW9kYWxCb2R5IHBiPXs2fT5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBpc1JlcXVpcmVkPlxuICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlRhc2sgbmFtZTo8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPElucHV0IHJlZj17aW5pdGlhbFJlZn0gcGxhY2Vob2xkZXI9XCJUYXNrIG5hbWVcIiAvPlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgICAgICAgPEZvcm1Db250cm9sIG10PXs0fT5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbD5EZXNjcmlwdGlvbjo8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEZXNjcmlwdGlvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTXkgZGVzY3JpcHRpb24gb2YgdGhlIHRhc2sgaXMuLlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgbXQ9ezN9PlxuICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJ0eXBlXCI+VHlwZTo8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIGlkPVwidHlwZVwiXG4gICAgICAgICAgICAgICAgLy8gcGxhY2Vob2xkZXI9XCJTZWxlY3QgdHlwZVwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgICAvLyBjb2xvcj1cImdyYXlcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5Xb3JrPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5FeGVyY2lzZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+RW50ZXJ0YWlubWVudDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+T3RoZXJzPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgICAgICAgPEZvcm1Db250cm9sIG10PXs0fT5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbCBtYXJnaW5Cb3R0b209ezB9PlN1YnRhc2tzPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgIHtbLi4uQXJyYXkoblN1YnRhc2tzKV0ubWFwKChzdWJ0YXNrSW5keCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8U3VidGFza1xuICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGlzTGFzdD17aW5kZXggPT0gblN1YnRhc2tzIC0gMX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2tEZWxGdW5jPXtvbkNsaWNrRGVsRnVuY31cbiAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgPC9Nb2RhbEJvZHk+XG5cbiAgICAgICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwiYmx1ZVwiIG1yPXszfT5cbiAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgIDwvTW9kYWxGb290ZXI+XG4gICAgICAgIDwvTW9kYWxDb250ZW50PlxuICAgICAgPC9Nb2RhbD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFRhc2s7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJGb3JtQ29udHJvbCIsIkZvcm1MYWJlbCIsIklucHV0IiwiTW9kYWwiLCJNb2RhbEJvZHkiLCJNb2RhbENsb3NlQnV0dG9uIiwiTW9kYWxDb250ZW50IiwiTW9kYWxGb290ZXIiLCJNb2RhbEhlYWRlciIsIk1vZGFsT3ZlcmxheSIsIlNlbGVjdCIsIlRleHRhcmVhIiwidXNlRGlzY2xvc3VyZSIsIlN1YnRhc2siLCJ1c2VGb3JtIiwiQWRkVGFzayIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJpbml0aWFsUmVmIiwidXNlUmVmIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJ1c2VTdGF0ZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJuU3VidGFza3MiLCJzZXRuU3VidGFza3MiLCJoYW5kbGVEZXNjcmlwdGlvbklucHV0Q2hhbmdlIiwiZSIsImlucHV0VmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVTdWJUYXNrIiwib25DbGlja0RlbEZ1bmMiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwiY29sb3JTY2hlbWUiLCJzaXplIiwib25DbGljayIsImluaXRpYWxGb2N1c1JlZiIsInBiIiwiaXNSZXF1aXJlZCIsInJlZiIsInBsYWNlaG9sZGVyIiwibXQiLCJvbkNoYW5nZSIsImh0bWxGb3IiLCJpZCIsIm9wdGlvbiIsIm1hcmdpbkJvdHRvbSIsIkFycmF5IiwibWFwIiwic3VidGFza0luZHgiLCJpbmRleCIsImlzTGFzdCIsIm1yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/tasks/AddTask.tsx\n");

/***/ })

});