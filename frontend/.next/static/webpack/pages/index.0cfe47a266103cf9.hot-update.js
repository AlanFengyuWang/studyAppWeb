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

/***/ "./src/components/home/TodayTaskList.tsx":
/*!***********************************************!*\
  !*** ./src/components/home/TodayTaskList.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _tasks_TaskCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/TaskCard */ \"./src/components/tasks/TaskCard.tsx\");\n/* harmony import */ var _pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/EmailContext */ \"./src/pages/EmailContext.tsx\");\n/* harmony import */ var react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-swipeable-list */ \"./node_modules/react-swipeable-list/dist/react-swipeable-list.umd.js\");\n/* harmony import */ var react_swipeable_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/home/styledComponents */ \"./src/styles/home/styledComponents.ts\");\n/* harmony import */ var react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-swipeable-list/dist/styles.css */ \"./node_modules/react-swipeable-list/dist/styles.css\");\n/* harmony import */ var react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _functions_tasks_deleteTask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions/tasks/deleteTask */ \"./src/functions/tasks/deleteTask.ts\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TodayTaskList = function(props) {\n    var _this1 = _this;\n    var onSwipeDelete = function onSwipeDelete(taskId) {\n        (0,_functions_tasks_deleteTask__WEBPACK_IMPORTED_MODULE_7__.deleteTask)(email, taskId).then(function() {\n            return props.mutate();\n        });\n    };\n    _s();\n    // const [hoveredOnDeleteButton, sethoveredOnDeleteButton] = useState(false);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), hoveredTaskId = ref[0], sethoveredTaskId = ref[1];\n    var moveTaskCardToLeftStyle = {\n        transition: \"transform 0.3s\",\n        transform: \"translateX(-23%)\",\n        opacity: \"100%\"\n    };\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showAllTask = ref1[0], setshowAllTask = ref1[1];\n    var showAll = function() {\n        setshowAllTask(!showAllTask);\n    };\n    var email = (0,_pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__.useEmailContext)().email;\n    var trailingActions = function(taskId) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.TrailingActions, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeAction, {\n                destructive: true,\n                onClick: function() {\n                    return onSwipeDelete(taskId);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, _objectSpread({}, _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__.deleteActionStyle, hoveredTaskId !== \"\" && {\n                    display: \"none\"\n                }, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDeleteForever, {\n                        color: \"#E2E8F0\",\n                        size: \"43px\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, _this1)\n                }), void 0, false, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, _this1);\n    };\n    if (props.error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Alert, {\n        status: \"error\",\n        marginTop: \"3%\",\n        padding: \"12px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.AlertIcon, {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                fontSize: \"sm\",\n                children: \"Failed to fetch your tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n        lineNumber: 65,\n        columnNumber: 7\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n        align: \"stretch\",\n        marginTop: \"3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeableList, {\n                children: props.data && props.data.tasks.filter(function(item, index) {\n                    var endIndex = showAllTask ? props.data.tasks.length : 3;\n                    return index < endIndex;\n                }).map(function(task, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeableListItem, {\n                        trailingActions: trailingActions(task._id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, {\n                            width: \"100%\",\n                            position: \"relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, _objectSpread({\n                                    width: \"100%\",\n                                    height: \"100%\"\n                                }, task._id === hoveredTaskId ? moveTaskCardToLeftStyle : {}, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tasks_TaskCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        task: task\n                                    }, index, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 21\n                                    }, _this1)\n                                }), void 0, false, {\n                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 19\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, _objectSpread({}, _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__.hideDelete, {\n                                    // opacity=\"100%\"\n                                    position: \"absolute\",\n                                    onMouseEnter: function() {\n                                        sethoveredTaskId(task._id);\n                                    },\n                                    onMouseLeave: function() {\n                                        sethoveredTaskId(\"\");\n                                    }\n                                }), void 0, false, {\n                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 19\n                                }, _this1),\n                                hoveredTaskId !== \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, _objectSpread({}, _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__.hideDelete, {\n                                    position: \"absolute\",\n                                    // onMouseEnter={() => {\n                                    //   sethoveredTaskId(task._id);\n                                    // }}\n                                    // onMouseLeave={() => {\n                                    //   sethoveredTaskId(\"\");\n                                    // }}\n                                    onClick: function() {\n                                        return onSwipeDelete(task._id);\n                                    },\n                                    _hover: {\n                                        transition: \"transform 0.3s\",\n                                        transform: \"translateX(-30%)\",\n                                        opacity: \"100%\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDeleteForever, {\n                                        color: \"#E2E8F0\",\n                                        size: \"43px\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                        lineNumber: 125,\n                                        columnNumber: 23\n                                    }, _this1)\n                                }), void 0, false, {\n                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 21\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 17\n                        }, _this1)\n                    }, task._id, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 15\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, _this),\n            props.data && props.data.tasks.length > 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                bg: \"none\",\n                marginTop: \"0 !important\",\n                _hover: {\n                    bg: \"none\"\n                },\n                _active: {\n                    bg: \"none\"\n                },\n                color: \"#2B6CB0\",\n                fontWeight: \"600\",\n                onClick: showAll,\n                children: showAllTask ? \"Hide\" : \"Show All\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 133,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, _this);\n};\n_s(TodayTaskList, \"IVU7MiKMYPwwVGz6GtA3KW59zvY=\", false, function() {\n    return [\n        _pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__.useEmailContext\n    ];\n});\n_c = TodayTaskList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodayTaskList);\nvar _c;\n$RefreshReg$(_c, \"TodayTaskList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL1RvZGF5VGFza0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFVekI7QUFDZTtBQUNrQjtBQVE3QjtBQUNtQjtBQUlMO0FBQ0U7QUFDZ0I7O0FBRTlELElBQU1tQixhQUFhLEdBQUcsU0FBQ0MsS0FBa0QsRUFBSzs7UUFjbkVDLGFBQWEsR0FBdEIsU0FBU0EsYUFBYSxDQUFDQyxNQUFjLEVBQUU7UUFDckNKLHVFQUFVLENBQUNLLEtBQUssRUFBRUQsTUFBTSxDQUFDLENBQUNFLElBQUksQ0FBQzttQkFBTUosS0FBSyxDQUFDSyxNQUFNLEVBQUU7U0FBQSxDQUFDLENBQUM7S0FDdEQ7O0lBZkQsNkVBQTZFO0lBQzdFLElBQTBDeEIsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQS9CeEQsYUErQnNCLEdBQXNCQSxHQUFZLEdBQWxDLEVBL0J0QixnQkErQndDLEdBQUlBLEdBQVksR0FBaEI7SUFDdEMsSUFBTTJCLHVCQUF1QixHQUFHO1FBQzlCQyxVQUFVLEVBQUUsZ0JBQWdCO1FBQzVCQyxTQUFTLEVBQUUsa0JBQWtCO1FBQzdCQyxPQUFPLEVBQUUsTUFBTTtLQUNoQjtJQUVELElBQXNDOUIsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQXRDdkQsV0FzQ29CLEdBQW9CQSxJQUFlLEdBQW5DLEVBdENwQixjQXNDb0MsR0FBSUEsSUFBZSxHQUFuQjtJQUNsQyxJQUFNaUMsT0FBTyxHQUFHLFdBQU07UUFDcEJELGNBQWMsQ0FBQyxDQUFDRCxXQUFXLENBQUMsQ0FBQztLQUM5QjtJQUNELElBQU0sS0FBTyxHQUFLdEIsb0VBQWUsRUFBRSxDQUEzQmEsS0FBSztJQUtiLElBQU1ZLGVBQWUsR0FBRyxTQUFDYixNQUFjLEVBQUs7UUFDMUMscUJBQ0UsOERBQUNSLGlFQUFlO3NCQUNkLDRFQUFDRCw2REFBVztn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QUMsU0FBUzt3Q0FBQ0MsSUFBSSxFQUFDLE1BQU07Ozs7OzhDQUFHOzs7OzswQ0FDeEM7Ozs7OztrQ0FFTjt1QkEzQ0ZlLElBQUksQ0FBQ0MsR0FBRzs7Ozs4QkE0Q0s7aUJBQ3JCLENBQUM7Ozs7O3FCQUNRO1lBQ2ZwQyxLQUFLLENBQUMyQixJQUFJLElBQUkzQixLQUFLLENBQUMyQixJQUFJLENBQUNDLEtBQUssQ0FBQ0ssTUFBTSxHQUFHLENBQUMsa0JBQ3hDLDhEQUFDaEQsb0RBQU07Z0JBQ0wwRCxFQUFFLEVBQUMsTUFBTTtnQkFDVHBCLFNBQVMsRUFBQyxjQUFjO2dCQUN4Qm1CLE1BQU0sRUFBRTtvQkFBRUMsRUFBRSxFQUFFLE1BQU07aUJBQUU7Z0JBQ3RCQyxPQUFPLEVBQUU7b0JBQUVELEVBQUUsRUFBRSxNQUFNO2lCQUFFO2dCQUN2QnhCLEtBQUssRUFBQyxTQUFTO2dCQUNmMEIsVUFBVSxFQUFDLEtBQUs7Z0JBQ2hCNUIsT0FBTyxFQUFFSCxPQUFPOzBCQUVmRixXQUFXLEdBQUcsTUFBTSxHQUFHLFVBQVU7Ozs7O3FCQUMzQjs7Ozs7O2FBRUwsQ0FDUjtDQUNIO0dBckhLYixhQUFhOztRQWFDVCxnRUFBZTs7O0FBYjdCUyxLQUFBQSxhQUFhO0FBdUhuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hvbWUvVG9kYXlUYXNrTGlzdC50c3g/YmYwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQWxlcnQsXG4gIEFsZXJ0SWNvbixcbiAgQm94LFxuICBCdXR0b24sXG4gIEZsZXgsXG4gIFN0YWNrLFxuICBzdHlsZWQsXG4gIFRleHQsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgVGFza0NhcmQgZnJvbSBcIi4uL3Rhc2tzL1Rhc2tDYXJkXCI7XG5pbXBvcnQgeyB1c2VFbWFpbENvbnRleHQgfSBmcm9tIFwiLi4vLi4vcGFnZXMvRW1haWxDb250ZXh0XCI7XG5pbXBvcnQgeyBUYXNrRm9ybVZhbHVlcyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgTGVhZGluZ0FjdGlvbnMsXG4gIFN3aXBlYWJsZUxpc3QsXG4gIFN3aXBlYWJsZUxpc3RJdGVtLFxuICBTd2lwZUFjdGlvbixcbiAgVHJhaWxpbmdBY3Rpb25zLFxufSBmcm9tIFwicmVhY3Qtc3dpcGVhYmxlLWxpc3RcIjtcbmltcG9ydCB7IE1kRGVsZXRlRm9yZXZlciB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IHtcbiAgZGVsZXRlQWN0aW9uU3R5bGUsXG4gIGhpZGVEZWxldGUsXG59IGZyb20gXCIuLi8uLi9zdHlsZXMvaG9tZS9zdHlsZWRDb21wb25lbnRzXCI7XG5pbXBvcnQgXCJyZWFjdC1zd2lwZWFibGUtbGlzdC9kaXN0L3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IGRlbGV0ZVRhc2sgfSBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL3Rhc2tzL2RlbGV0ZVRhc2tcIjtcblxuY29uc3QgVG9kYXlUYXNrTGlzdCA9IChwcm9wczogeyBkYXRhOiBhbnk7IGVycm9yOiBhbnk7IG11dGF0ZTogRnVuY3Rpb24gfSkgPT4ge1xuICAvLyBjb25zdCBbaG92ZXJlZE9uRGVsZXRlQnV0dG9uLCBzZXRob3ZlcmVkT25EZWxldGVCdXR0b25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaG92ZXJlZFRhc2tJZCwgc2V0aG92ZXJlZFRhc2tJZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgbW92ZVRhc2tDYXJkVG9MZWZ0U3R5bGUgPSB7XG4gICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMC4zc1wiLFxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC0yMyUpXCIsXG4gICAgb3BhY2l0eTogXCIxMDAlXCIsXG4gIH07XG5cbiAgY29uc3QgW3Nob3dBbGxUYXNrLCBzZXRzaG93QWxsVGFza10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNob3dBbGwgPSAoKSA9PiB7XG4gICAgc2V0c2hvd0FsbFRhc2soIXNob3dBbGxUYXNrKTtcbiAgfTtcbiAgY29uc3QgeyBlbWFpbCB9ID0gdXNlRW1haWxDb250ZXh0KCk7XG4gIGZ1bmN0aW9uIG9uU3dpcGVEZWxldGUodGFza0lkOiBzdHJpbmcpIHtcbiAgICBkZWxldGVUYXNrKGVtYWlsLCB0YXNrSWQpLnRoZW4oKCkgPT4gcHJvcHMubXV0YXRlKCkpO1xuICB9XG5cbiAgY29uc3QgdHJhaWxpbmdBY3Rpb25zID0gKHRhc2tJZDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUcmFpbGluZ0FjdGlvbnM+XG4gICAgICAgIDxTd2lwZUFjdGlvbiBkZXN0cnVjdGl2ZT17dHJ1ZX0gb25DbGljaz17KCkgPT4gb25Td2lwZURlbGV0ZSh0YXNrSWQpfT5cbiAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgey4uLmRlbGV0ZUFjdGlvblN0eWxlfVxuICAgICAgICAgICAgey4uLihob3ZlcmVkVGFza0lkICE9PSBcIlwiICYmIHsgZGlzcGxheTogXCJub25lXCIgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1kRGVsZXRlRm9yZXZlciBjb2xvcj1cIiNFMkU4RjBcIiBzaXplPVwiNDNweFwiIC8+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L1N3aXBlQWN0aW9uPlxuICAgICAgPC9UcmFpbGluZ0FjdGlvbnM+XG4gICAgKTtcbiAgfTtcblxuICBpZiAocHJvcHMuZXJyb3IpXG4gICAgcmV0dXJuIChcbiAgICAgIDxBbGVydCBzdGF0dXM9XCJlcnJvclwiIG1hcmdpblRvcD1cIjMlXCIgcGFkZGluZz1cIjEycHhcIj5cbiAgICAgICAgPEFsZXJ0SWNvbiAvPlxuICAgICAgICA8VGV4dCBmb250U2l6ZT1cInNtXCI+RmFpbGVkIHRvIGZldGNoIHlvdXIgdGFza3M8L1RleHQ+XG4gICAgICA8L0FsZXJ0PlxuICAgICk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2sgYWxpZ249XCJzdHJldGNoXCIgbWFyZ2luVG9wPVwiM1wiPlxuICAgICAgPFN3aXBlYWJsZUxpc3Q+XG4gICAgICAgIHtwcm9wcy5kYXRhICYmXG4gICAgICAgICAgcHJvcHMuZGF0YS50YXNrc1xuICAgICAgICAgICAgLmZpbHRlcigoaXRlbTogVGFza0Zvcm1WYWx1ZXMsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZW5kSW5kZXg6IG51bWJlciA9IHNob3dBbGxUYXNrXG4gICAgICAgICAgICAgICAgPyBwcm9wcy5kYXRhLnRhc2tzLmxlbmd0aFxuICAgICAgICAgICAgICAgIDogMztcbiAgICAgICAgICAgICAgcmV0dXJuIGluZGV4IDwgZW5kSW5kZXg7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcCgodGFzazogVGFza0Zvcm1WYWx1ZXMsIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgPFN3aXBlYWJsZUxpc3RJdGVtXG4gICAgICAgICAgICAgICAgdHJhaWxpbmdBY3Rpb25zPXt0cmFpbGluZ0FjdGlvbnModGFzay5faWQpfVxuICAgICAgICAgICAgICAgIGtleT17dGFzay5faWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmxleCB3aWR0aD1cIjEwMCVcIiBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICB7Li4uKHRhc2suX2lkID09PSBob3ZlcmVkVGFza0lkXG4gICAgICAgICAgICAgICAgICAgICAgPyBtb3ZlVGFza0NhcmRUb0xlZnRTdHlsZVxuICAgICAgICAgICAgICAgICAgICAgIDoge30pfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VGFza0NhcmQgdGFzaz17dGFza30ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB7Li4uaGlkZURlbGV0ZX1cbiAgICAgICAgICAgICAgICAgICAgLy8gb3BhY2l0eT1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0aG92ZXJlZFRhc2tJZCh0YXNrLl9pZCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldGhvdmVyZWRUYXNrSWQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICB7aG92ZXJlZFRhc2tJZCAhPT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB7Li4uaGlkZURlbGV0ZX1cbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgIHNldGhvdmVyZWRUYXNrSWQodGFzay5faWQpO1xuICAgICAgICAgICAgICAgICAgICAgIC8vIH19XG4gICAgICAgICAgICAgICAgICAgICAgLy8gb25Nb3VzZUxlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gICBzZXRob3ZlcmVkVGFza0lkKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgIC8vIH19XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25Td2lwZURlbGV0ZSh0YXNrLl9pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAwLjNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtMzAlKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxNZERlbGV0ZUZvcmV2ZXIgY29sb3I9XCIjRTJFOEYwXCIgc2l6ZT1cIjQzcHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICA8L1N3aXBlYWJsZUxpc3RJdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICA8L1N3aXBlYWJsZUxpc3Q+XG4gICAgICB7cHJvcHMuZGF0YSAmJiBwcm9wcy5kYXRhLnRhc2tzLmxlbmd0aCA+IDMgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgYmc9XCJub25lXCJcbiAgICAgICAgICBtYXJnaW5Ub3A9XCIwICFpbXBvcnRhbnRcIlxuICAgICAgICAgIF9ob3Zlcj17eyBiZzogXCJub25lXCIgfX1cbiAgICAgICAgICBfYWN0aXZlPXt7IGJnOiBcIm5vbmVcIiB9fVxuICAgICAgICAgIGNvbG9yPVwiIzJCNkNCMFwiXG4gICAgICAgICAgZm9udFdlaWdodD1cIjYwMFwiXG4gICAgICAgICAgb25DbGljaz17c2hvd0FsbH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzaG93QWxsVGFzayA/IFwiSGlkZVwiIDogXCJTaG93IEFsbFwifVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9TdGFjaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZGF5VGFza0xpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFsZXJ0IiwiQWxlcnRJY29uIiwiQm94IiwiQnV0dG9uIiwiRmxleCIsIlN0YWNrIiwiVGV4dCIsIlRhc2tDYXJkIiwidXNlRW1haWxDb250ZXh0IiwiU3dpcGVhYmxlTGlzdCIsIlN3aXBlYWJsZUxpc3RJdGVtIiwiU3dpcGVBY3Rpb24iLCJUcmFpbGluZ0FjdGlvbnMiLCJNZERlbGV0ZUZvcmV2ZXIiLCJkZWxldGVBY3Rpb25TdHlsZSIsImhpZGVEZWxldGUiLCJkZWxldGVUYXNrIiwiVG9kYXlUYXNrTGlzdCIsInByb3BzIiwib25Td2lwZURlbGV0ZSIsInRhc2tJZCIsImVtYWlsIiwidGhlbiIsIm11dGF0ZSIsImhvdmVyZWRUYXNrSWQiLCJzZXRob3ZlcmVkVGFza0lkIiwibW92ZVRhc2tDYXJkVG9MZWZ0U3R5bGUiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtIiwib3BhY2l0eSIsInNob3dBbGxUYXNrIiwic2V0c2hvd0FsbFRhc2siLCJzaG93QWxsIiwidHJhaWxpbmdBY3Rpb25zIiwiZGVzdHJ1Y3RpdmUiLCJvbkNsaWNrIiwiZGlzcGxheSIsImNvbG9yIiwic2l6ZSIsImVycm9yIiwic3RhdHVzIiwibWFyZ2luVG9wIiwicGFkZGluZyIsImZvbnRTaXplIiwiYWxpZ24iLCJkYXRhIiwidGFza3MiLCJmaWx0ZXIiLCJpdGVtIiwiaW5kZXgiLCJlbmRJbmRleCIsImxlbmd0aCIsIm1hcCIsInRhc2siLCJfaWQiLCJ3aWR0aCIsInBvc2l0aW9uIiwiaGVpZ2h0Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiX2hvdmVyIiwiYmciLCJfYWN0aXZlIiwiZm9udFdlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/home/TodayTaskList.tsx\n");

/***/ })

});