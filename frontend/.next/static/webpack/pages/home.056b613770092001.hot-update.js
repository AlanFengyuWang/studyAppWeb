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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _Subtask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subtask */ \"./src/components/tasks/Subtask.tsx\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar AddTask = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure)(), isOpen = ref.isOpen, onOpen = ref.onOpen, onClose = ref.onClose;\n    var initialRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    //useform\n    var ref1 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)(), register = ref1.register, handleSubmit = ref1.handleSubmit;\n    var ref2 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\"), 2), description = ref2[0], setDescription = ref2[1];\n    var ref3 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(3), 2), nSubtasks = ref3[0], setnSubtasks = ref3[1];\n    var ref4 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState([]), 2), subTasks = ref4[0], setSubTasks = ref4[1];\n    var handleDescriptionInputChange = function(e) {\n        var inputValue = e.target.value;\n        setDescription(inputValue);\n    };\n    var onSubmit = function(data) {\n        console.log(\"data = \" + data);\n    };\n    var updateSubTask = function() {\n    // e.preventDefault();\n    };\n    var onClickDelFunc = function(e) {\n        e.preventDefault();\n        console.log(\"delting\");\n        alert(\"deleting\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                colorScheme: \"teal\",\n                size: \"sm\",\n                onClick: onOpen,\n                children: \"Add Tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n                initialFocusRef: initialRef,\n                isOpen: isOpen,\n                onClose: onClose,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalOverlay, {}, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalContent, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalHeader, {\n                                children: \"What is your next task?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalCloseButton, {}, void 0, false, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalBody, {\n                                pb: 6,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                        isRequired: true,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                                children: \"Task name:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                                ref: initialRef,\n                                                placeholder: \"Task name\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                        mt: 4,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                                children: \"Description:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Textarea, {\n                                                value: description,\n                                                onChange: handleDescriptionInputChange,\n                                                placeholder: \"My description of the task is..\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                        mt: 3,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                                htmlFor: \"type\",\n                                                children: \"Type:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Select, {\n                                                id: \"type\",\n                                                // placeholder=\"Select type\"\n                                                size: \"md\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        children: \"Work\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                        lineNumber: 90,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        children: \"Exercise\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                        lineNumber: 91,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        children: \"Entertainment\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                        lineNumber: 92,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        children: \"Others\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                        lineNumber: 93,\n                                                        columnNumber: 17\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                        mt: 4,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                                marginBottom: 0,\n                                                children: \"Subtasks\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                lineNumber: 98,\n                                                columnNumber: 15\n                                            }, _this),\n                                            _toConsumableArray(Array(nSubtasks)).map(function(subtaskIndx, index) {\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Subtask__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                    index: index,\n                                                    isLast: index == nSubtasks - 1,\n                                                    onClickDelFunc: onClickDelFunc,\n                                                    onSubmit: onSubmit,\n                                                    register: register\n                                                }, index, false, {\n                                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 17\n                                                }, _this1);\n                                            })\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalFooter, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        colorScheme: \"blue\",\n                                        mr: 3,\n                                        children: \"Save\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        onClick: onClose,\n                                        children: \"Cancel\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/AddTask.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(AddTask, \"+j/hd9yg4YSGuD3N12m4OG6DJYk=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm\n    ];\n});\n_c = AddTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddTask);\nvar _c;\n$RefreshReg$(_c, \"AddTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLEVBQUVBLFFBQVE7b0RBQ2xCZCxRQUFRLEVBQUVBLFFBQVE7bURBSmJ1QyxLQUFLOzs7OzBEQUtWOzZDQUNILENBQUM7Ozs7Ozs2Q0FDVTs7Ozs7O3FDQUNKOzBDQUVaLDhEQUFDckQseURBQVc7O2tEQUNWLDhEQUFDUixvREFBTTt3Q0FBQzRDLFdBQVcsRUFBQyxNQUFNO3dDQUFDbUIsRUFBRSxFQUFFLENBQUM7a0RBQUUsTUFFbEM7Ozs7OzZDQUFTO2tEQUNULDhEQUFDL0Qsb0RBQU07d0NBQUM4QyxPQUFPLEVBQUUzQixPQUFPO2tEQUFFLFFBQU07Ozs7OzZDQUFTOzs7Ozs7cUNBQzdCOzs7Ozs7NkJBQ0Q7Ozs7OztxQkFDVDs7b0JBQ1AsQ0FDSDtDQUNIO0dBaEdLSCxPQUFPOztRQUN5QkgsMkRBQWE7UUFJZEUsb0RBQU87OztBQUx0Q0MsS0FBQUEsT0FBTztBQWtHYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Rhc2tzL0FkZFRhc2sudHN4PzdkMzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IE1vdXNlRXZlbnRIYW5kbGVyLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBCdXR0b25Hcm91cCxcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1MYWJlbCxcbiAgSWNvbkJ1dHRvbixcbiAgSW5wdXQsXG4gIE1vZGFsLFxuICBNb2RhbEJvZHksXG4gIE1vZGFsQ2xvc2VCdXR0b24sXG4gIE1vZGFsQ29udGVudCxcbiAgTW9kYWxGb290ZXIsXG4gIE1vZGFsSGVhZGVyLFxuICBNb2RhbE92ZXJsYXksXG4gIFNlbGVjdCxcbiAgVGV4dGFyZWEsXG4gIHVzZURpc2Nsb3N1cmUsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgU3VidGFzayBmcm9tIFwiLi9TdWJ0YXNrXCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuXG50eXBlIFRTdWJ0YXNrID0geyB0aXRsZTogc3RyaW5nOyBkZXNjcmlwdGlvbjogc3RyaW5nW10gfTtcblxuY29uc3QgQWRkVGFzayA9ICgpID0+IHtcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xuICBjb25zdCBpbml0aWFsUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIC8vdXNlZm9ybVxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oKTtcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gIGNvbnN0IFtuU3VidGFza3MsIHNldG5TdWJ0YXNrc10gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDMpO1xuICBjb25zdCBbc3ViVGFza3MsIHNldFN1YlRhc2tzXSA9IFJlYWN0LnVzZVN0YXRlPFRTdWJ0YXNrW10+KFtdKTtcblxuICBjb25zdCBoYW5kbGVEZXNjcmlwdGlvbklucHV0Q2hhbmdlID0gKFxuICAgIGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXREZXNjcmlwdGlvbihpbnB1dFZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhOiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImRhdGEgPSBcIiArIGRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVN1YlRhc2sgPSAoKSA9PiB7XG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIGNvbnN0IG9uQ2xpY2tEZWxGdW5jID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKFwiZGVsdGluZ1wiKTtcbiAgICBhbGVydChcImRlbGV0aW5nXCIpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwidGVhbFwiIHNpemU9XCJzbVwiIG9uQ2xpY2s9e29uT3Blbn0+XG4gICAgICAgIEFkZCBUYXNrc1xuICAgICAgPC9CdXR0b24+XG4gICAgICA8TW9kYWwgaW5pdGlhbEZvY3VzUmVmPXtpbml0aWFsUmVmfSBpc09wZW49e2lzT3Blbn0gb25DbG9zZT17b25DbG9zZX0+XG4gICAgICAgIDxNb2RhbE92ZXJsYXkgLz5cbiAgICAgICAgPE1vZGFsQ29udGVudD5cbiAgICAgICAgICA8TW9kYWxIZWFkZXI+V2hhdCBpcyB5b3VyIG5leHQgdGFzaz88L01vZGFsSGVhZGVyPlxuICAgICAgICAgIDxNb2RhbENsb3NlQnV0dG9uIC8+XG4gICAgICAgICAgPE1vZGFsQm9keSBwYj17Nn0+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgaXNSZXF1aXJlZD5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbD5UYXNrIG5hbWU6PC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgIDxJbnB1dCByZWY9e2luaXRpYWxSZWZ9ICBwbGFjZWhvbGRlcj1cIlRhc2sgbmFtZVwiIC8+XG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgbXQ9ezR9PlxuICAgICAgICAgICAgICA8Rm9ybUxhYmVsPkRlc2NyaXB0aW9uOjwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZURlc2NyaXB0aW9uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNeSBkZXNjcmlwdGlvbiBvZiB0aGUgdGFzayBpcy4uXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBtdD17M30+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cInR5cGVcIj5UeXBlOjwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgaWQ9XCJ0eXBlXCJcbiAgICAgICAgICAgICAgICAvLyBwbGFjZWhvbGRlcj1cIlNlbGVjdCB0eXBlXCJcbiAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgIC8vIGNvbG9yPVwiZ3JheVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPldvcms8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPkV4ZXJjaXNlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5FbnRlcnRhaW5tZW50PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5PdGhlcnM8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgbXQ9ezR9PlxuICAgICAgICAgICAgICA8Rm9ybUxhYmVsIG1hcmdpbkJvdHRvbT17MH0+U3VidGFza3M8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAge1suLi5BcnJheShuU3VidGFza3MpXS5tYXAoKHN1YnRhc2tJbmR4LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxTdWJ0YXNrXG4gICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgaXNMYXN0PXtpbmRleCA9PSBuU3VidGFza3MgLSAxfVxuICAgICAgICAgICAgICAgICAgb25DbGlja0RlbEZ1bmM9e29uQ2xpY2tEZWxGdW5jfVxuICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgICAgICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICA8L01vZGFsQm9keT5cblxuICAgICAgICAgIDxNb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJibHVlXCIgbXI9ezN9PlxuICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbG9zZX0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICAgICAgPC9Nb2RhbENvbnRlbnQ+XG4gICAgICA8L01vZGFsPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkVGFzaztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIkZvcm1Db250cm9sIiwiRm9ybUxhYmVsIiwiSW5wdXQiLCJNb2RhbCIsIk1vZGFsQm9keSIsIk1vZGFsQ2xvc2VCdXR0b24iLCJNb2RhbENvbnRlbnQiLCJNb2RhbEZvb3RlciIsIk1vZGFsSGVhZGVyIiwiTW9kYWxPdmVybGF5IiwiU2VsZWN0IiwiVGV4dGFyZWEiLCJ1c2VEaXNjbG9zdXJlIiwiU3VidGFzayIsInVzZUZvcm0iLCJBZGRUYXNrIiwiaXNPcGVuIiwib25PcGVuIiwib25DbG9zZSIsImluaXRpYWxSZWYiLCJ1c2VSZWYiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInVzZVN0YXRlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsIm5TdWJ0YXNrcyIsInNldG5TdWJ0YXNrcyIsInN1YlRhc2tzIiwic2V0U3ViVGFza3MiLCJoYW5kbGVEZXNjcmlwdGlvbklucHV0Q2hhbmdlIiwiZSIsImlucHV0VmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVTdWJUYXNrIiwib25DbGlja0RlbEZ1bmMiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwiY29sb3JTY2hlbWUiLCJzaXplIiwib25DbGljayIsImluaXRpYWxGb2N1c1JlZiIsInBiIiwiaXNSZXF1aXJlZCIsInJlZiIsInBsYWNlaG9sZGVyIiwibXQiLCJvbkNoYW5nZSIsImh0bWxGb3IiLCJpZCIsIm9wdGlvbiIsIm1hcmdpbkJvdHRvbSIsIkFycmF5IiwibWFwIiwic3VidGFza0luZHgiLCJpbmRleCIsImlzTGFzdCIsIm1yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/tasks/AddTask.tsx\n");

/***/ })

});