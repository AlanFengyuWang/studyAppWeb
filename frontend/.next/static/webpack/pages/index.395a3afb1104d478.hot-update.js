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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _tasks_TaskCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/TaskCard */ \"./src/components/tasks/TaskCard.tsx\");\n/* harmony import */ var _pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/EmailContext */ \"./src/pages/EmailContext.tsx\");\n/* harmony import */ var react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-swipeable-list */ \"./node_modules/react-swipeable-list/dist/react-swipeable-list.umd.js\");\n/* harmony import */ var react_swipeable_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/home/styledComponents */ \"./src/styles/home/styledComponents.ts\");\n/* harmony import */ var react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-swipeable-list/dist/styles.css */ \"./node_modules/react-swipeable-list/dist/styles.css\");\n/* harmony import */ var react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _functions_tasks_deleteTask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions/tasks/deleteTask */ \"./src/functions/tasks/deleteTask.ts\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TodayTaskList = function(props) {\n    var _this1 = _this;\n    var getTaskStyle = function getTaskStyle(taskId) {\n        if (taskId === hoveredTaskId) {\n            moveTaskCardToLeftStyle = hoveredOnDeleteButton ? {\n                transition: \"transform 0.3s\",\n                transform: \"translateX(-30%)\",\n                opacity: \"100%\"\n            } : {};\n        }\n    };\n    var onSwipeDelete = function onSwipeDelete(taskId) {\n        (0,_functions_tasks_deleteTask__WEBPACK_IMPORTED_MODULE_7__.deleteTask)(email, taskId).then(function() {\n            return props.mutate();\n        });\n    };\n    _s();\n    // const [hoveredOnDeleteButton, sethoveredOnDeleteButton] = useState(false);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), hoveredTaskId = ref[0], sethoveredTaskId = ref[1];\n    var moveTaskCardToLeftStyle = {};\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        moveTaskCardToLeftStyle = getTaskStyle();\n    }, [\n        third\n    ]);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showAllTask = ref1[0], setshowAllTask = ref1[1];\n    var showAll = function() {\n        setshowAllTask(!showAllTask);\n    };\n    var email = (0,_pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__.useEmailContext)().email;\n    var trailingActions = function(taskId) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.TrailingActions, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeAction, {\n                destructive: true,\n                onClick: function() {\n                    return onSwipeDelete(taskId);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, _objectSpread({}, _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__.deleteActionStyle, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDeleteForever, {\n                        color: \"#E2E8F0\",\n                        size: \"43px\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, _this1)\n                }), void 0, false, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n            lineNumber: 65,\n            columnNumber: 5\n        }, _this1);\n    };\n    if (props.error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Alert, {\n        status: \"error\",\n        marginTop: \"3%\",\n        padding: \"12px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.AlertIcon, {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                fontSize: \"sm\",\n                children: \"Failed to fetch your tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n        lineNumber: 76,\n        columnNumber: 7\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n        align: \"stretch\",\n        marginTop: \"3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeableList, {\n                children: props.data && props.data.tasks.filter(function(item, index) {\n                    var endIndex = showAllTask ? props.data.tasks.length : 3;\n                    return index < endIndex;\n                }).map(function(task, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeableListItem, {\n                        trailingActions: trailingActions(task._id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, {\n                            width: \"100%\",\n                            position: \"relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, _objectSpread({\n                                    width: \"100%\",\n                                    height: \"100%\"\n                                }, moveTaskCardToLeftStyle, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tasks_TaskCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        task: task\n                                    }, index, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 21\n                                    }, _this1)\n                                }), void 0, false, {\n                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 19\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, _objectSpread({}, _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__.hideDelete, {\n                                    position: \"absolute\",\n                                    onMouseEnter: function() {\n                                        sethoveredOnDeleteButton(true);\n                                        sethoveredTaskId(task._id);\n                                    },\n                                    onMouseLeave: function() {\n                                        sethoveredOnDeleteButton(false);\n                                        sethoveredTaskId(\"\");\n                                    },\n                                    _hover: {\n                                        backgroundColor: \"blue\",\n                                        transition: \"transform 0.3s\",\n                                        transform: \"translateX(-30%)\",\n                                        opacity: \"100%\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDeleteForever, {\n                                        color: \"#E2E8F0\",\n                                        size: \"43px\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                        lineNumber: 120,\n                                        columnNumber: 21\n                                    }, _this1)\n                                }), void 0, false, {\n                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 19\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 17\n                        }, _this1)\n                    }, task._id, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 15\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, _this),\n            props.data && props.data.tasks.length > 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                bg: \"none\",\n                marginTop: \"0 !important\",\n                _hover: {\n                    bg: \"none\"\n                },\n                _active: {\n                    bg: \"none\"\n                },\n                color: \"#2B6CB0\",\n                fontWeight: \"600\",\n                onClick: showAll,\n                children: showAllTask ? \"Hide\" : \"Show All\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 127,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, _this);\n};\n_s(TodayTaskList, \"wtiIHIgz+tG4NX6PdkxkRBWExDI=\", false, function() {\n    return [\n        _pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__.useEmailContext\n    ];\n});\n_c = TodayTaskList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodayTaskList);\nvar _c;\n$RefreshReg$(_c, \"TodayTaskList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL1RvZGF5VGFza0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFVekI7QUFDZTtBQUNrQjtBQVE3QjtBQUNtQjtBQUlMO0FBQ0U7QUFDZ0I7O0FBRzlELElBQU1vQixhQUFhLEdBQUcsU0FBQ0MsS0FBa0QsRUFBSzs7UUFNbkVDLFlBQVksR0FBckIsU0FBU0EsWUFBWSxDQUFDQyxNQUFjLEVBQUU7UUFDcEMsSUFBSUEsTUFBTSxLQUFLQyxhQUFhLEVBQUU7WUFDNUJDLHVCQUF1QixHQUFHQyxxQkFBcUIsR0FDM0M7Z0JBQ0VDLFVBQVUsRUFBRSxnQkFBZ0I7Z0JBQzVCQyxTQUFTLEVBQUUsa0JBQWtCO2dCQUM3QkMsT0FBTyxFQUFFLE1BQU07YUFDaEIsR0FDRCxFQUFFLENBQUM7U0FDUjtLQUNGO1FBYVFDLGFBQWEsR0FBdEIsU0FBU0EsYUFBYSxDQUFDUCxNQUFjLEVBQUU7UUFDckNKLHVFQUFVLENBQUNZLEtBQUssRUFBRVIsTUFBTSxDQUFDLENBQUNTLElBQUksQ0FBQzttQkFBTVgsS0FBSyxDQUFDWSxNQUFNLEVBQUU7U0FBQSxDQUFDLENBQUM7S0FDdEQ7O0lBOUJELDZFQUE2RTtJQUM3RSxJQUEwQy9CLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFoQ3hELGFBZ0NzQixHQUFzQkEsR0FBWSxHQUFsQyxFQWhDdEIsZ0JBZ0N3QyxHQUFJQSxHQUFZLEdBQWhCO0lBRXRDLElBQUl1Qix1QkFBdUIsR0FBRyxFQUFFO0lBY2hDeEIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2R3Qix1QkFBdUIsR0FBR0gsWUFBWSxFQUFFO0tBRXpDLEVBQUU7UUFBQ2EsS0FBSztLQUFDLENBQUM7SUFHWCxJQUFzQ2pDLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUF0RHZELFdBc0RvQixHQUFvQkEsSUFBZSxHQUFuQyxF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Ozs7MENBQ3hDOzs7Ozs7a0NBQ0o7dUJBMUJGZSxJQUFJLENBQUNDLEdBQUc7Ozs7OEJBMkJLO2lCQUNyQixDQUFDOzs7OztxQkFDUTtZQUNmdEMsS0FBSyxDQUFDNkIsSUFBSSxJQUFJN0IsS0FBSyxDQUFDNkIsSUFBSSxDQUFDQyxLQUFLLENBQUNLLE1BQU0sR0FBRyxDQUFDLGtCQUN4Qyw4REFBQ2xELG9EQUFNO2dCQUNMOEQsRUFBRSxFQUFDLE1BQU07Z0JBQ1R0QixTQUFTLEVBQUMsY0FBYztnQkFDeEJvQixNQUFNLEVBQUU7b0JBQUVFLEVBQUUsRUFBRSxNQUFNO2lCQUFFO2dCQUN0QkMsT0FBTyxFQUFFO29CQUFFRCxFQUFFLEVBQUUsTUFBTTtpQkFBRTtnQkFDdkIxQixLQUFLLEVBQUMsU0FBUztnQkFDZjRCLFVBQVUsRUFBQyxLQUFLO2dCQUNoQjdCLE9BQU8sRUFBRUgsT0FBTzswQkFFZkYsV0FBVyxHQUFHLE1BQU0sR0FBRyxVQUFVOzs7OztxQkFDM0I7Ozs7OzthQUVMLENBQ1I7Q0FDSDtHQTlHS2hCLGFBQWE7O1FBNEJDVCxnRUFBZTs7O0FBNUI3QlMsS0FBQUEsYUFBYTtBQWdIbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob21lL1RvZGF5VGFza0xpc3QudHN4P2JmMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEFsZXJ0LFxuICBBbGVydEljb24sXG4gIEJveCxcbiAgQnV0dG9uLFxuICBGbGV4LFxuICBTdGFjayxcbiAgc3R5bGVkLFxuICBUZXh0LFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFRhc2tDYXJkIGZyb20gXCIuLi90YXNrcy9UYXNrQ2FyZFwiO1xuaW1wb3J0IHsgdXNlRW1haWxDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BhZ2VzL0VtYWlsQ29udGV4dFwiO1xuaW1wb3J0IHsgVGFza0Zvcm1WYWx1ZXMgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIExlYWRpbmdBY3Rpb25zLFxuICBTd2lwZWFibGVMaXN0LFxuICBTd2lwZWFibGVMaXN0SXRlbSxcbiAgU3dpcGVBY3Rpb24sXG4gIFRyYWlsaW5nQWN0aW9ucyxcbn0gZnJvbSBcInJlYWN0LXN3aXBlYWJsZS1saXN0XCI7XG5pbXBvcnQgeyBNZERlbGV0ZUZvcmV2ZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB7XG4gIGRlbGV0ZUFjdGlvblN0eWxlLFxuICBoaWRlRGVsZXRlLFxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL2hvbWUvc3R5bGVkQ29tcG9uZW50c1wiO1xuaW1wb3J0IFwicmVhY3Qtc3dpcGVhYmxlLWxpc3QvZGlzdC9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBkZWxldGVUYXNrIH0gZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy90YXNrcy9kZWxldGVUYXNrXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvaG9tZS9zdHlsZS5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IFRvZGF5VGFza0xpc3QgPSAocHJvcHM6IHsgZGF0YTogYW55OyBlcnJvcjogYW55OyBtdXRhdGU6IEZ1bmN0aW9uIH0pID0+IHtcbiAgLy8gY29uc3QgW2hvdmVyZWRPbkRlbGV0ZUJ1dHRvbiwgc2V0aG92ZXJlZE9uRGVsZXRlQnV0dG9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hvdmVyZWRUYXNrSWQsIHNldGhvdmVyZWRUYXNrSWRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgbGV0IG1vdmVUYXNrQ2FyZFRvTGVmdFN0eWxlID0ge307XG5cbiAgZnVuY3Rpb24gZ2V0VGFza1N0eWxlKHRhc2tJZDogc3RyaW5nKSB7XG4gICAgaWYgKHRhc2tJZCA9PT0gaG92ZXJlZFRhc2tJZCkge1xuICAgICAgbW92ZVRhc2tDYXJkVG9MZWZ0U3R5bGUgPSBob3ZlcmVkT25EZWxldGVCdXR0b25cbiAgICAgICAgPyB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAwLjNzXCIsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtMzAlKVwiLFxuICAgICAgICAgICAgb3BhY2l0eTogXCIxMDAlXCIsXG4gICAgICAgICAgfVxuICAgICAgICA6IHt9O1xuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbW92ZVRhc2tDYXJkVG9MZWZ0U3R5bGUgPSBnZXRUYXNrU3R5bGUoKVxuICBcbiAgfSwgW3RoaXJkXSlcbiAgXG5cbiAgY29uc3QgW3Nob3dBbGxUYXNrLCBzZXRzaG93QWxsVGFza10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNob3dBbGwgPSAoKSA9PiB7XG4gICAgc2V0c2hvd0FsbFRhc2soIXNob3dBbGxUYXNrKTtcbiAgfTtcbiAgY29uc3QgeyBlbWFpbCB9ID0gdXNlRW1haWxDb250ZXh0KCk7XG4gIGZ1bmN0aW9uIG9uU3dpcGVEZWxldGUodGFza0lkOiBzdHJpbmcpIHtcbiAgICBkZWxldGVUYXNrKGVtYWlsLCB0YXNrSWQpLnRoZW4oKCkgPT4gcHJvcHMubXV0YXRlKCkpO1xuICB9XG5cbiAgY29uc3QgdHJhaWxpbmdBY3Rpb25zID0gKHRhc2tJZDogc3RyaW5nKSA9PiAoXG4gICAgPFRyYWlsaW5nQWN0aW9ucz5cbiAgICAgIDxTd2lwZUFjdGlvbiBkZXN0cnVjdGl2ZT17dHJ1ZX0gb25DbGljaz17KCkgPT4gb25Td2lwZURlbGV0ZSh0YXNrSWQpfT5cbiAgICAgICAgPEZsZXggey4uLmRlbGV0ZUFjdGlvblN0eWxlfT5cbiAgICAgICAgICA8TWREZWxldGVGb3JldmVyIGNvbG9yPVwiI0UyRThGMFwiIHNpemU9XCI0M3B4XCIgLz5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9Td2lwZUFjdGlvbj5cbiAgICA8L1RyYWlsaW5nQWN0aW9ucz5cbiAgKTtcblxuICBpZiAocHJvcHMuZXJyb3IpXG4gICAgcmV0dXJuIChcbiAgICAgIDxBbGVydCBzdGF0dXM9XCJlcnJvclwiIG1hcmdpblRvcD1cIjMlXCIgcGFkZGluZz1cIjEycHhcIj5cbiAgICAgICAgPEFsZXJ0SWNvbiAvPlxuICAgICAgICA8VGV4dCBmb250U2l6ZT1cInNtXCI+RmFpbGVkIHRvIGZldGNoIHlvdXIgdGFza3M8L1RleHQ+XG4gICAgICA8L0FsZXJ0PlxuICAgICk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2sgYWxpZ249XCJzdHJldGNoXCIgbWFyZ2luVG9wPVwiM1wiPlxuICAgICAgPFN3aXBlYWJsZUxpc3Q+XG4gICAgICAgIHtwcm9wcy5kYXRhICYmXG4gICAgICAgICAgcHJvcHMuZGF0YS50YXNrc1xuICAgICAgICAgICAgLmZpbHRlcigoaXRlbTogVGFza0Zvcm1WYWx1ZXMsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZW5kSW5kZXg6IG51bWJlciA9IHNob3dBbGxUYXNrXG4gICAgICAgICAgICAgICAgPyBwcm9wcy5kYXRhLnRhc2tzLmxlbmd0aFxuICAgICAgICAgICAgICAgIDogMztcbiAgICAgICAgICAgICAgcmV0dXJuIGluZGV4IDwgZW5kSW5kZXg7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcCgodGFzazogVGFza0Zvcm1WYWx1ZXMsIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgPFN3aXBlYWJsZUxpc3RJdGVtXG4gICAgICAgICAgICAgICAgdHJhaWxpbmdBY3Rpb25zPXt0cmFpbGluZ0FjdGlvbnModGFzay5faWQpfVxuICAgICAgICAgICAgICAgIGtleT17dGFzay5faWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmxleCB3aWR0aD1cIjEwMCVcIiBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB7Li4ubW92ZVRhc2tDYXJkVG9MZWZ0U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICA8VGFza0NhcmQgdGFzaz17dGFza30ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB7Li4uaGlkZURlbGV0ZX1cbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldGhvdmVyZWRPbkRlbGV0ZUJ1dHRvbih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRob3ZlcmVkVGFza0lkKHRhc2suX2lkKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0aG92ZXJlZE9uRGVsZXRlQnV0dG9uKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRob3ZlcmVkVGFza0lkKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIDAuM3NcIixcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtMzAlKVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TWREZWxldGVGb3JldmVyIGNvbG9yPVwiI0UyRThGMFwiIHNpemU9XCI0M3B4XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgPC9Td2lwZWFibGVMaXN0SXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgPC9Td2lwZWFibGVMaXN0PlxuICAgICAge3Byb3BzLmRhdGEgJiYgcHJvcHMuZGF0YS50YXNrcy5sZW5ndGggPiAzICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGJnPVwibm9uZVwiXG4gICAgICAgICAgbWFyZ2luVG9wPVwiMCAhaW1wb3J0YW50XCJcbiAgICAgICAgICBfaG92ZXI9e3sgYmc6IFwibm9uZVwiIH19XG4gICAgICAgICAgX2FjdGl2ZT17eyBiZzogXCJub25lXCIgfX1cbiAgICAgICAgICBjb2xvcj1cIiMyQjZDQjBcIlxuICAgICAgICAgIGZvbnRXZWlnaHQ9XCI2MDBcIlxuICAgICAgICAgIG9uQ2xpY2s9e3Nob3dBbGx9XG4gICAgICAgID5cbiAgICAgICAgICB7c2hvd0FsbFRhc2sgPyBcIkhpZGVcIiA6IFwiU2hvdyBBbGxcIn1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvU3RhY2s+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RheVRhc2tMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBbGVydCIsIkFsZXJ0SWNvbiIsIkJveCIsIkJ1dHRvbiIsIkZsZXgiLCJTdGFjayIsIlRleHQiLCJUYXNrQ2FyZCIsInVzZUVtYWlsQ29udGV4dCIsIlN3aXBlYWJsZUxpc3QiLCJTd2lwZWFibGVMaXN0SXRlbSIsIlN3aXBlQWN0aW9uIiwiVHJhaWxpbmdBY3Rpb25zIiwiTWREZWxldGVGb3JldmVyIiwiZGVsZXRlQWN0aW9uU3R5bGUiLCJoaWRlRGVsZXRlIiwiZGVsZXRlVGFzayIsIlRvZGF5VGFza0xpc3QiLCJwcm9wcyIsImdldFRhc2tTdHlsZSIsInRhc2tJZCIsImhvdmVyZWRUYXNrSWQiLCJtb3ZlVGFza0NhcmRUb0xlZnRTdHlsZSIsImhvdmVyZWRPbkRlbGV0ZUJ1dHRvbiIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJvcGFjaXR5Iiwib25Td2lwZURlbGV0ZSIsImVtYWlsIiwidGhlbiIsIm11dGF0ZSIsInNldGhvdmVyZWRUYXNrSWQiLCJ0aGlyZCIsInNob3dBbGxUYXNrIiwic2V0c2hvd0FsbFRhc2siLCJzaG93QWxsIiwidHJhaWxpbmdBY3Rpb25zIiwiZGVzdHJ1Y3RpdmUiLCJvbkNsaWNrIiwiY29sb3IiLCJzaXplIiwiZXJyb3IiLCJzdGF0dXMiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJhbGlnbiIsImRhdGEiLCJ0YXNrcyIsImZpbHRlciIsIml0ZW0iLCJpbmRleCIsImVuZEluZGV4IiwibGVuZ3RoIiwibWFwIiwidGFzayIsIl9pZCIsIndpZHRoIiwicG9zaXRpb24iLCJoZWlnaHQiLCJvbk1vdXNlRW50ZXIiLCJzZXRob3ZlcmVkT25EZWxldGVCdXR0b24iLCJvbk1vdXNlTGVhdmUiLCJfaG92ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiZyIsIl9hY3RpdmUiLCJmb250V2VpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/home/TodayTaskList.tsx\n");

/***/ })

});