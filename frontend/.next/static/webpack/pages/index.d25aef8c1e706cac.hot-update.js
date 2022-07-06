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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _tasks_TaskCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/TaskCard */ \"./src/components/tasks/TaskCard.tsx\");\n/* harmony import */ var _pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/EmailContext */ \"./src/pages/EmailContext.tsx\");\n/* harmony import */ var react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-swipeable-list */ \"./node_modules/react-swipeable-list/dist/react-swipeable-list.umd.js\");\n/* harmony import */ var react_swipeable_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/home/styledComponents */ \"./src/styles/home/styledComponents.ts\");\n/* harmony import */ var react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-swipeable-list/dist/styles.css */ \"./node_modules/react-swipeable-list/dist/styles.css\");\n/* harmony import */ var react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _functions_tasks_deleteTask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions/tasks/deleteTask */ \"./src/functions/tasks/deleteTask.ts\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TodayTaskList = function(props) {\n    var _this1 = _this;\n    var onSwipeDelete = function onSwipeDelete(taskId) {\n        sethoveredTaskId(\"\");\n        console.log(\"set id to null\");\n        (0,_functions_tasks_deleteTask__WEBPACK_IMPORTED_MODULE_7__.deleteTask)(email, taskId).then(function() {\n            return props.mutate();\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), hoveredTaskId = ref[0], sethoveredTaskId = ref[1];\n    var moveTaskCardToLeftStyle = {\n        transition: \"transform 0.3s\",\n        transform: \"translateX(-23%)\",\n        opacity: \"100%\"\n    };\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showAllTask = ref1[0], setshowAllTask = ref1[1];\n    var showAll = function() {\n        setshowAllTask(!showAllTask);\n    };\n    var email = (0,_pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__.useEmailContext)().email;\n    var trailingActions = function(taskId) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.TrailingActions, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeAction, {\n                destructive: true,\n                onClick: function() {\n                    return onSwipeDelete(taskId);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, _objectSpread({}, _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__.deleteActionStyle, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDeleteForever, {\n                        color: \"#E2E8F0\",\n                        size: \"43px\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, _this1)\n                }), void 0, false, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, _this1);\n    };\n    if (props.error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Alert, {\n        status: \"error\",\n        marginTop: \"3%\",\n        padding: \"12px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.AlertIcon, {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                fontSize: \"sm\",\n                children: \"Failed to fetch your tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n        lineNumber: 64,\n        columnNumber: 7\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n        align: \"stretch\",\n        marginTop: \"3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeableList, {\n                children: props.data && props.data.tasks.filter(function(item, index) {\n                    var endIndex = showAllTask ? props.data.tasks.length : 3;\n                    return index < endIndex;\n                }).map(function(task, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeableListItem, {\n                        trailingActions: trailingActions(task._id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, {\n                            width: \"100%\",\n                            position: \"relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, _objectSpread({\n                                    width: \"100%\",\n                                    height: \"100%\"\n                                }, task._id === hoveredTaskId ? moveTaskCardToLeftStyle : {}, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tasks_TaskCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        task: task\n                                    }, index, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 21\n                                    }, _this1)\n                                }), void 0, false, {\n                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 19\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, _objectSpread({}, _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__.hideDelete, {\n                                    opacity: \"0%\",\n                                    left: \"80%\",\n                                    position: \"absolute\",\n                                    onMouseEnter: function() {\n                                        sethoveredTaskId(task._id);\n                                    },\n                                    onMouseLeave: function() {\n                                        sethoveredTaskId(\"\");\n                                    }\n                                }), void 0, false, {\n                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 19\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, _objectSpread({}, _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__.hideDelete, {\n                                    position: \"absolute\",\n                                    onMouseEnter: function() {\n                                        sethoveredTaskId(task._id);\n                                    },\n                                    onMouseLeave: function() {\n                                        sethoveredTaskId(\"\");\n                                    },\n                                    onClick: function() {\n                                        return onSwipeDelete(task._id);\n                                    }\n                                }, task._id === hoveredTaskId && {\n                                    transition: \"transform 0.3s\",\n                                    transform: \"translateX(-100%)\"\n                                }, {\n                                    //make sure after it moved and are hovered, it stays in the same place\n                                    _hover: {\n                                        transition: \"transform 0.3s\",\n                                        transform: \"translateX(-100%)\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDeleteForever, {\n                                        color: \"#E2E8F0\",\n                                        size: \"43px\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 21\n                                    }, _this1)\n                                }), void 0, false, {\n                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 19\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 17\n                        }, _this1)\n                    }, task._id, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 15\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, _this),\n            props.data && props.data.tasks.length > 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                bg: \"none\",\n                marginTop: \"0 !important\",\n                _hover: {\n                    bg: \"none\"\n                },\n                _active: {\n                    bg: \"none\"\n                },\n                color: \"#2B6CB0\",\n                fontWeight: \"600\",\n                onClick: showAll,\n                children: showAllTask ? \"Hide\" : \"Show All\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 136,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, _this);\n};\n_s(TodayTaskList, \"IVU7MiKMYPwwVGz6GtA3KW59zvY=\", false, function() {\n    return [\n        _pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__.useEmailContext\n    ];\n});\n_c = TodayTaskList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodayTaskList);\nvar _c;\n$RefreshReg$(_c, \"TodayTaskList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL1RvZGF5VGFza0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFVekI7QUFDZTtBQUNrQjtBQVE3QjtBQUNtQjtBQUlMO0FBQ0U7QUFDZ0I7O0FBRTlELElBQU1tQixhQUFhLEdBQUcsU0FBQ0MsS0FBa0QsRUFBSzs7UUFhbkVDLGFBQWEsR0FBdEIsU0FBU0EsYUFBYSxDQUFDQyxNQUFjLEVBQUU7UUFDckNDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTlCUCx1RUFBVSxDQUFDUSxLQUFLLEVBQUVKLE1BQU0sQ0FBQyxDQUFDSyxJQUFJLENBQUM7bUJBQU1QLEtBQUssQ0FBQ1EsTUFBTSxFQUFFO1NBQUEsQ0FBQyxDQUFDO0tBQ3REOztJQWpCRCxJQUEwQzNCLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUE5QnhELGFBOEJzQixHQUFzQkEsR0FBWSxHQUFsQyxFQTlCdEIsZ0JBOEJ3QyxHQUFJQSxHQUFZLEdBQWhCO0lBQ3RDLElBQU02Qix1QkFBdUIsR0FBRztRQUM5QkMsVUFBVSxFQUFFLGdCQUFnQjtRQUM1QkMsU0FBUyxFQUFFLGtCQUFrQjtRQUM3QkMsT0FBTyxFQUFFLE1BQU07S0FDaEI7SUFFRCxJQUFzQ2hDLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFyQ3ZELFdBcUNvQixHQUFvQkEsSUFBZSxHQUFuQyxFQXJDcEIsY0FxQ29DLEdBQUlBLElBQWUsR0FBbkI7SUFDbEMsSUFBTW1DLE9BQU8sR0FBRyxXQUFNO1FBQ3BCRCxjQUFjLENBQUMsQ0FBQ0QsV0FBVyxDQUFDLENBQUM7S0FDOUI7SUFDRCxJQUFNLEtBQU8sR0FBS3hCLG9FQUFlLEVBQUUsQ0FBM0JnQixLQUFLO0lBUWIsSUFBTVcsZUFB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LFVBQVUsRUFBRSxnQkFBZ0I7b0NBQzVCQyxTQUFTLEVBQUUsbUJBQW1CO2lDQUMvQjtvQ0FDRCxzRUFBc0U7b0NBQ3RFZ0MsTUFBTSxFQUFFO3dDQUNOakMsVUFBVSxFQUFFLGdCQUFnQjt3Q0FDNUJDLFNBQVMsRUFBRSxtQkFBbUI7cUNBQy9COzhDQUVELDRFQUFDakIsMkRBQWU7d0NBQUN5QixLQUFLLEVBQUMsU0FBUzt3Q0FBQ0MsSUFBSSxFQUFDLE1BQU07Ozs7OzhDQUFHOzs7OzswQ0FDeEM7Ozs7OztrQ0FDSjt1QkEvQ0ZlLElBQUksQ0FBQ0MsR0FBRzs7Ozs4QkFnREs7aUJBQ3JCLENBQUM7Ozs7O3FCQUNRO1lBQ2ZyQyxLQUFLLENBQUM0QixJQUFJLElBQUk1QixLQUFLLENBQUM0QixJQUFJLENBQUNDLEtBQUssQ0FBQ0ssTUFBTSxHQUFHLENBQUMsa0JBQ3hDLDhEQUFDakQsb0RBQU07Z0JBQ0w0RCxFQUFFLEVBQUMsTUFBTTtnQkFDVHJCLFNBQVMsRUFBQyxjQUFjO2dCQUN4Qm9CLE1BQU0sRUFBRTtvQkFBRUMsRUFBRSxFQUFFLE1BQU07aUJBQUU7Z0JBQ3RCQyxPQUFPLEVBQUU7b0JBQUVELEVBQUUsRUFBRSxNQUFNO2lCQUFFO2dCQUN2QnpCLEtBQUssRUFBQyxTQUFTO2dCQUNmMkIsVUFBVSxFQUFDLEtBQUs7Z0JBQ2hCNUIsT0FBTyxFQUFFSCxPQUFPOzBCQUVmRixXQUFXLEdBQUcsTUFBTSxHQUFHLFVBQVU7Ozs7O3FCQUMzQjs7Ozs7O2FBRUwsQ0FDUjtDQUNIO0dBeEhLZixhQUFhOztRQVlDVCxnRUFBZTs7O0FBWjdCUyxLQUFBQSxhQUFhO0FBMEhuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hvbWUvVG9kYXlUYXNrTGlzdC50c3g/YmYwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQWxlcnQsXG4gIEFsZXJ0SWNvbixcbiAgQm94LFxuICBCdXR0b24sXG4gIEZsZXgsXG4gIFN0YWNrLFxuICBzdHlsZWQsXG4gIFRleHQsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgVGFza0NhcmQgZnJvbSBcIi4uL3Rhc2tzL1Rhc2tDYXJkXCI7XG5pbXBvcnQgeyB1c2VFbWFpbENvbnRleHQgfSBmcm9tIFwiLi4vLi4vcGFnZXMvRW1haWxDb250ZXh0XCI7XG5pbXBvcnQgeyBUYXNrRm9ybVZhbHVlcyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgTGVhZGluZ0FjdGlvbnMsXG4gIFN3aXBlYWJsZUxpc3QsXG4gIFN3aXBlYWJsZUxpc3RJdGVtLFxuICBTd2lwZUFjdGlvbixcbiAgVHJhaWxpbmdBY3Rpb25zLFxufSBmcm9tIFwicmVhY3Qtc3dpcGVhYmxlLWxpc3RcIjtcbmltcG9ydCB7IE1kRGVsZXRlRm9yZXZlciB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IHtcbiAgZGVsZXRlQWN0aW9uU3R5bGUsXG4gIGhpZGVEZWxldGUsXG59IGZyb20gXCIuLi8uLi9zdHlsZXMvaG9tZS9zdHlsZWRDb21wb25lbnRzXCI7XG5pbXBvcnQgXCJyZWFjdC1zd2lwZWFibGUtbGlzdC9kaXN0L3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IGRlbGV0ZVRhc2sgfSBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL3Rhc2tzL2RlbGV0ZVRhc2tcIjtcblxuY29uc3QgVG9kYXlUYXNrTGlzdCA9IChwcm9wczogeyBkYXRhOiBhbnk7IGVycm9yOiBhbnk7IG11dGF0ZTogRnVuY3Rpb24gfSkgPT4ge1xuICBjb25zdCBbaG92ZXJlZFRhc2tJZCwgc2V0aG92ZXJlZFRhc2tJZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgbW92ZVRhc2tDYXJkVG9MZWZ0U3R5bGUgPSB7XG4gICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMC4zc1wiLFxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC0yMyUpXCIsXG4gICAgb3BhY2l0eTogXCIxMDAlXCIsXG4gIH07XG5cbiAgY29uc3QgW3Nob3dBbGxUYXNrLCBzZXRzaG93QWxsVGFza10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNob3dBbGwgPSAoKSA9PiB7XG4gICAgc2V0c2hvd0FsbFRhc2soIXNob3dBbGxUYXNrKTtcbiAgfTtcbiAgY29uc3QgeyBlbWFpbCB9ID0gdXNlRW1haWxDb250ZXh0KCk7XG4gIGZ1bmN0aW9uIG9uU3dpcGVEZWxldGUodGFza0lkOiBzdHJpbmcpIHtcbiAgICBzZXRob3ZlcmVkVGFza0lkKFwiXCIpO1xuICAgIGNvbnNvbGUubG9nKFwic2V0IGlkIHRvIG51bGxcIik7XG4gICAgXG4gICAgZGVsZXRlVGFzayhlbWFpbCwgdGFza0lkKS50aGVuKCgpID0+IHByb3BzLm11dGF0ZSgpKTtcbiAgfVxuXG4gIGNvbnN0IHRyYWlsaW5nQWN0aW9ucyA9ICh0YXNrSWQ6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8VHJhaWxpbmdBY3Rpb25zPlxuICAgICAgICA8U3dpcGVBY3Rpb24gZGVzdHJ1Y3RpdmU9e3RydWV9IG9uQ2xpY2s9eygpID0+IG9uU3dpcGVEZWxldGUodGFza0lkKX0+XG4gICAgICAgICAgPEZsZXggey4uLmRlbGV0ZUFjdGlvblN0eWxlfT5cbiAgICAgICAgICAgIDxNZERlbGV0ZUZvcmV2ZXIgY29sb3I9XCIjRTJFOEYwXCIgc2l6ZT1cIjQzcHhcIiAvPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9Td2lwZUFjdGlvbj5cbiAgICAgIDwvVHJhaWxpbmdBY3Rpb25zPlxuICAgICk7XG4gIH07XG5cbiAgaWYgKHByb3BzLmVycm9yKVxuICAgIHJldHVybiAoXG4gICAgICA8QWxlcnQgc3RhdHVzPVwiZXJyb3JcIiBtYXJnaW5Ub3A9XCIzJVwiIHBhZGRpbmc9XCIxMnB4XCI+XG4gICAgICAgIDxBbGVydEljb24gLz5cbiAgICAgICAgPFRleHQgZm9udFNpemU9XCJzbVwiPkZhaWxlZCB0byBmZXRjaCB5b3VyIHRhc2tzPC9UZXh0PlxuICAgICAgPC9BbGVydD5cbiAgICApO1xuXG4gIHJldHVybiAoXG4gICAgPFN0YWNrIGFsaWduPVwic3RyZXRjaFwiIG1hcmdpblRvcD1cIjNcIj5cbiAgICAgIDxTd2lwZWFibGVMaXN0PlxuICAgICAgICB7cHJvcHMuZGF0YSAmJlxuICAgICAgICAgIHByb3BzLmRhdGEudGFza3NcbiAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW06IFRhc2tGb3JtVmFsdWVzLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGVuZEluZGV4OiBudW1iZXIgPSBzaG93QWxsVGFza1xuICAgICAgICAgICAgICAgID8gcHJvcHMuZGF0YS50YXNrcy5sZW5ndGhcbiAgICAgICAgICAgICAgICA6IDM7XG4gICAgICAgICAgICAgIHJldHVybiBpbmRleCA8IGVuZEluZGV4O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoKHRhc2s6IFRhc2tGb3JtVmFsdWVzLCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgIDxTd2lwZWFibGVMaXN0SXRlbVxuICAgICAgICAgICAgICAgIHRyYWlsaW5nQWN0aW9ucz17dHJhaWxpbmdBY3Rpb25zKHRhc2suX2lkKX1cbiAgICAgICAgICAgICAgICBrZXk9e3Rhc2suX2lkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZsZXggd2lkdGg9XCIxMDAlXCIgcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgey4uLih0YXNrLl9pZCA9PT0gaG92ZXJlZFRhc2tJZFxuICAgICAgICAgICAgICAgICAgICAgID8gbW92ZVRhc2tDYXJkVG9MZWZ0U3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICA6IHt9KX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRhc2tDYXJkIHRhc2s9e3Rhc2t9IGtleT17aW5kZXh9IC8+XG4gICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgey4uLmhpZGVEZWxldGV9XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwJVwiXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ9XCI4MCVcIlxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0aG92ZXJlZFRhc2tJZCh0YXNrLl9pZCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldGhvdmVyZWRUYXNrSWQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHsuLi5oaWRlRGVsZXRlfVxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0aG92ZXJlZFRhc2tJZCh0YXNrLl9pZCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldGhvdmVyZWRUYXNrSWQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU3dpcGVEZWxldGUodGFzay5faWQpfVxuICAgICAgICAgICAgICAgICAgICAvL21ha2VzIHN1cmUgdGhhdCBpdCBnZXQgbW92ZWQgd2hlbiB3ZSBob3ZlciBvbiB0aGUgaW52aXNpYmlsZSBidXR0b24gYWJvdmUgYW5kIGl0J3Mgc3RpbGwgb3V0c2lkZSB0aGUgc2NyZWVuXG4gICAgICAgICAgICAgICAgICAgIHsuLi4odGFzay5faWQgPT09IGhvdmVyZWRUYXNrSWQgJiYge1xuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIDAuM3NcIixcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtMTAwJSlcIixcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIC8vbWFrZSBzdXJlIGFmdGVyIGl0IG1vdmVkIGFuZCBhcmUgaG92ZXJlZCwgaXQgc3RheXMgaW4gdGhlIHNhbWUgcGxhY2VcbiAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMC4zc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC0xMDAlKVwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TWREZWxldGVGb3JldmVyIGNvbG9yPVwiI0UyRThGMFwiIHNpemU9XCI0M3B4XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgPC9Td2lwZWFibGVMaXN0SXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgPC9Td2lwZWFibGVMaXN0PlxuICAgICAge3Byb3BzLmRhdGEgJiYgcHJvcHMuZGF0YS50YXNrcy5sZW5ndGggPiAzICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGJnPVwibm9uZVwiXG4gICAgICAgICAgbWFyZ2luVG9wPVwiMCAhaW1wb3J0YW50XCJcbiAgICAgICAgICBfaG92ZXI9e3sgYmc6IFwibm9uZVwiIH19XG4gICAgICAgICAgX2FjdGl2ZT17eyBiZzogXCJub25lXCIgfX1cbiAgICAgICAgICBjb2xvcj1cIiMyQjZDQjBcIlxuICAgICAgICAgIGZvbnRXZWlnaHQ9XCI2MDBcIlxuICAgICAgICAgIG9uQ2xpY2s9e3Nob3dBbGx9XG4gICAgICAgID5cbiAgICAgICAgICB7c2hvd0FsbFRhc2sgPyBcIkhpZGVcIiA6IFwiU2hvdyBBbGxcIn1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvU3RhY2s+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RheVRhc2tMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBbGVydCIsIkFsZXJ0SWNvbiIsIkJveCIsIkJ1dHRvbiIsIkZsZXgiLCJTdGFjayIsIlRleHQiLCJUYXNrQ2FyZCIsInVzZUVtYWlsQ29udGV4dCIsIlN3aXBlYWJsZUxpc3QiLCJTd2lwZWFibGVMaXN0SXRlbSIsIlN3aXBlQWN0aW9uIiwiVHJhaWxpbmdBY3Rpb25zIiwiTWREZWxldGVGb3JldmVyIiwiZGVsZXRlQWN0aW9uU3R5bGUiLCJoaWRlRGVsZXRlIiwiZGVsZXRlVGFzayIsIlRvZGF5VGFza0xpc3QiLCJwcm9wcyIsIm9uU3dpcGVEZWxldGUiLCJ0YXNrSWQiLCJzZXRob3ZlcmVkVGFza0lkIiwiY29uc29sZSIsImxvZyIsImVtYWlsIiwidGhlbiIsIm11dGF0ZSIsImhvdmVyZWRUYXNrSWQiLCJtb3ZlVGFza0NhcmRUb0xlZnRTdHlsZSIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJvcGFjaXR5Iiwic2hvd0FsbFRhc2siLCJzZXRzaG93QWxsVGFzayIsInNob3dBbGwiLCJ0cmFpbGluZ0FjdGlvbnMiLCJkZXN0cnVjdGl2ZSIsIm9uQ2xpY2siLCJjb2xvciIsInNpemUiLCJlcnJvciIsInN0YXR1cyIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJmb250U2l6ZSIsImFsaWduIiwiZGF0YSIsInRhc2tzIiwiZmlsdGVyIiwiaXRlbSIsImluZGV4IiwiZW5kSW5kZXgiLCJsZW5ndGgiLCJtYXAiLCJ0YXNrIiwiX2lkIiwid2lkdGgiLCJwb3NpdGlvbiIsImhlaWdodCIsImxlZnQiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJfaG92ZXIiLCJiZyIsIl9hY3RpdmUiLCJmb250V2VpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/home/TodayTaskList.tsx\n");

/***/ })

});