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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _tasks_TaskCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/TaskCard */ \"./src/components/tasks/TaskCard.tsx\");\n/* harmony import */ var _pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/EmailContext */ \"./src/pages/EmailContext.tsx\");\n/* harmony import */ var react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-swipeable-list */ \"./node_modules/react-swipeable-list/dist/react-swipeable-list.umd.js\");\n/* harmony import */ var react_swipeable_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/home/styledComponents */ \"./src/styles/home/styledComponents.ts\");\n/* harmony import */ var react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-swipeable-list/dist/styles.css */ \"./node_modules/react-swipeable-list/dist/styles.css\");\n/* harmony import */ var react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _functions_tasks_deleteTask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions/tasks/deleteTask */ \"./src/functions/tasks/deleteTask.ts\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TodayTaskList = function(props) {\n    var _this1 = _this;\n    var onSwipeDelete = function onSwipeDelete(taskId) {\n        (0,_functions_tasks_deleteTask__WEBPACK_IMPORTED_MODULE_7__.deleteTask)(email, taskId).then(function() {\n            return props.mutate();\n        });\n    };\n    _s();\n    // const [hoveredOnDeleteButton, sethoveredOnDeleteButton] = useState(false);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), hoveredTaskId = ref[0], sethoveredTaskId = ref[1];\n    var moveTaskCardToLeftStyle = {\n        transition: \"transform 0.3s\",\n        transform: \"translateX(-30%)\",\n        marginRight: \"0\",\n        opacity: \"100%\"\n    };\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showAllTask = ref1[0], setshowAllTask = ref1[1];\n    var showAll = function() {\n        setshowAllTask(!showAllTask);\n    };\n    var email = (0,_pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__.useEmailContext)().email;\n    var trailingActions = function(taskId) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.TrailingActions, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeAction, {\n                destructive: true,\n                onClick: function() {\n                    return onSwipeDelete(taskId);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, _objectSpread({}, _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__.deleteActionStyle, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDeleteForever, {\n                        color: \"#E2E8F0\",\n                        size: \"43px\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, _this1)\n                }), void 0, false, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n            lineNumber: 51,\n            columnNumber: 5\n        }, _this1);\n    };\n    if (props.error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Alert, {\n        status: \"error\",\n        marginTop: \"3%\",\n        padding: \"12px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.AlertIcon, {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                fontSize: \"sm\",\n                children: \"Failed to fetch your tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n        lineNumber: 62,\n        columnNumber: 7\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n        align: \"stretch\",\n        marginTop: \"3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeableList, {\n                children: props.data && props.data.tasks.filter(function(item, index) {\n                    var endIndex = showAllTask ? props.data.tasks.length : 3;\n                    return index < endIndex;\n                }).map(function(task, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeableListItem, {\n                        trailingActions: trailingActions(task._id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, {\n                            width: \"100%\",\n                            position: \"relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, _objectSpread({\n                                    width: \"100%\",\n                                    height: \"100%\"\n                                }, task._id === hoveredTaskId ? moveTaskCardToLeftStyle : {}, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tasks_TaskCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        task: task\n                                    }, index, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 21\n                                    }, _this1)\n                                }), void 0, false, {\n                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 19\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, _objectSpread({}, _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__.hideDelete, {\n                                    position: \"absolute\",\n                                    onMouseEnter: function() {\n                                        sethoveredTaskId(task._id);\n                                    },\n                                    onMouseLeave: function() {\n                                        sethoveredTaskId(\"\");\n                                    },\n                                    _hover: {\n                                        backgroundColor: \"blue\",\n                                        transition: \"transform 0.3s\",\n                                        transform: \"translateX(-30%)\",\n                                        opacity: \"100%\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDeleteForever, {\n                                        color: \"#E2E8F0\",\n                                        size: \"43px\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 21\n                                    }, _this1)\n                                }), void 0, false, {\n                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 19\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 17\n                        }, _this1)\n                    }, task._id, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 15\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, _this),\n            props.data && props.data.tasks.length > 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                bg: \"none\",\n                marginTop: \"0 !important\",\n                _hover: {\n                    bg: \"none\"\n                },\n                _active: {\n                    bg: \"none\"\n                },\n                color: \"#2B6CB0\",\n                fontWeight: \"600\",\n                onClick: showAll,\n                children: showAllTask ? \"Hide\" : \"Show All\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 117,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, _this);\n};\n_s(TodayTaskList, \"IVU7MiKMYPwwVGz6GtA3KW59zvY=\", false, function() {\n    return [\n        _pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__.useEmailContext\n    ];\n});\n_c = TodayTaskList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodayTaskList);\nvar _c;\n$RefreshReg$(_c, \"TodayTaskList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL1RvZGF5VGFza0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFVekI7QUFDZTtBQUNrQjtBQVE3QjtBQUNtQjtBQUlMO0FBQ0U7QUFDZ0I7O0FBRzlELElBQU1tQixhQUFhLEdBQUcsU0FBQ0MsS0FBa0QsRUFBSzs7UUFlbkVDLGFBQWEsR0FBdEIsU0FBU0EsYUFBYSxDQUFDQyxNQUFjLEVBQUU7UUFDckNKLHVFQUFVLENBQUNLLEtBQUssRUFBRUQsTUFBTSxDQUFDLENBQUNFLElBQUksQ0FBQzttQkFBTUosS0FBSyxDQUFDSyxNQUFNLEVBQUU7U0FBQSxDQUFDLENBQUM7S0FDdEQ7O0lBaEJELDZFQUE2RTtJQUM3RSxJQUEwQ3hCLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFoQ3hELGFBZ0NzQixHQUFzQkEsR0FBWSxHQUFsQyxFQWhDdEIsZ0JBZ0N3QyxHQUFJQSxHQUFZLEdBQWhCO0lBQ3RDLElBQU0yQix1QkFBdUIsR0FBRztRQUM5QkMsVUFBVSxFQUFFLGdCQUFnQjtRQUM1QkMsU0FBUyxFQUFFLGtCQUFrQjtRQUM3QkMsV0FBVyxFQUFFLEdBQUc7UUFDaEJDLE9BQU8sRUFBRSxNQUFNO0tBQ2hCO0lBRUQsSUFBc0MvQixJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBeEN2RCxXQXdDb0IsR0FBb0JBLElBQWUsR0FBbkMsRUF4Q3BCLGNBd0NvQyxHQUFJQSxJQUFlLEdBQW5CO0lBQ2xDLElBQU1rQyxPQUFPLEdBQUcsV0FBTTtRQUNwQkQsY0FBYyxDQUFDLENBQUNELFdBQVcsQ0FBQyxDQUFDO0tBQzlCO0lBQ0QsSUFBTSxLQUFPLEdBQUt2QixvRUFBZSxFQUFFLENBQTNCYSxLQUFLO0lBS2IsSUFBTWEsZUFBZSxHQUFHLFNBQUNkLE1BQWM7NkJBQ3JDLDhEQUFDUixpRUFBZTtzQkFDZCw0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QixNQUFNLEVBQUU7b0JBQUVFLEVBQUUsRUFBRSxNQUFNO2lCQUFFO2dCQUN0QkMsT0FBTyxFQUFFO29CQUFFRCxFQUFFLEVBQUUsTUFBTTtpQkFBRTtnQkFDdkJ6QixLQUFLLEVBQUMsU0FBUztnQkFDZjJCLFVBQVUsRUFBQyxLQUFLO2dCQUNoQjVCLE9BQU8sRUFBRUgsT0FBTzswQkFFZkYsV0FBVyxHQUFHLE1BQU0sR0FBRyxVQUFVOzs7OztxQkFDM0I7Ozs7OzthQUVMLENBQ1I7Q0FDSDtHQXBHS2QsYUFBYTs7UUFjQ1QsZ0VBQWU7OztBQWQ3QlMsS0FBQUEsYUFBYTtBQXNHbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob21lL1RvZGF5VGFza0xpc3QudHN4P2JmMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEFsZXJ0LFxuICBBbGVydEljb24sXG4gIEJveCxcbiAgQnV0dG9uLFxuICBGbGV4LFxuICBTdGFjayxcbiAgc3R5bGVkLFxuICBUZXh0LFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFRhc2tDYXJkIGZyb20gXCIuLi90YXNrcy9UYXNrQ2FyZFwiO1xuaW1wb3J0IHsgdXNlRW1haWxDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BhZ2VzL0VtYWlsQ29udGV4dFwiO1xuaW1wb3J0IHsgVGFza0Zvcm1WYWx1ZXMgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIExlYWRpbmdBY3Rpb25zLFxuICBTd2lwZWFibGVMaXN0LFxuICBTd2lwZWFibGVMaXN0SXRlbSxcbiAgU3dpcGVBY3Rpb24sXG4gIFRyYWlsaW5nQWN0aW9ucyxcbn0gZnJvbSBcInJlYWN0LXN3aXBlYWJsZS1saXN0XCI7XG5pbXBvcnQgeyBNZERlbGV0ZUZvcmV2ZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB7XG4gIGRlbGV0ZUFjdGlvblN0eWxlLFxuICBoaWRlRGVsZXRlLFxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL2hvbWUvc3R5bGVkQ29tcG9uZW50c1wiO1xuaW1wb3J0IFwicmVhY3Qtc3dpcGVhYmxlLWxpc3QvZGlzdC9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBkZWxldGVUYXNrIH0gZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy90YXNrcy9kZWxldGVUYXNrXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvaG9tZS9zdHlsZS5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IFRvZGF5VGFza0xpc3QgPSAocHJvcHM6IHsgZGF0YTogYW55OyBlcnJvcjogYW55OyBtdXRhdGU6IEZ1bmN0aW9uIH0pID0+IHtcbiAgLy8gY29uc3QgW2hvdmVyZWRPbkRlbGV0ZUJ1dHRvbiwgc2V0aG92ZXJlZE9uRGVsZXRlQnV0dG9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hvdmVyZWRUYXNrSWQsIHNldGhvdmVyZWRUYXNrSWRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IG1vdmVUYXNrQ2FyZFRvTGVmdFN0eWxlID0ge1xuICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIDAuM3NcIixcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtMzAlKVwiLFxuICAgIG1hcmdpblJpZ2h0OiBcIjBcIixcbiAgICBvcGFjaXR5OiBcIjEwMCVcIixcbiAgfTtcblxuICBjb25zdCBbc2hvd0FsbFRhc2ssIHNldHNob3dBbGxUYXNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc2hvd0FsbCA9ICgpID0+IHtcbiAgICBzZXRzaG93QWxsVGFzayghc2hvd0FsbFRhc2spO1xuICB9O1xuICBjb25zdCB7IGVtYWlsIH0gPSB1c2VFbWFpbENvbnRleHQoKTtcbiAgZnVuY3Rpb24gb25Td2lwZURlbGV0ZSh0YXNrSWQ6IHN0cmluZykge1xuICAgIGRlbGV0ZVRhc2soZW1haWwsIHRhc2tJZCkudGhlbigoKSA9PiBwcm9wcy5tdXRhdGUoKSk7XG4gIH1cblxuICBjb25zdCB0cmFpbGluZ0FjdGlvbnMgPSAodGFza0lkOiBzdHJpbmcpID0+IChcbiAgICA8VHJhaWxpbmdBY3Rpb25zPlxuICAgICAgPFN3aXBlQWN0aW9uIGRlc3RydWN0aXZlPXt0cnVlfSBvbkNsaWNrPXsoKSA9PiBvblN3aXBlRGVsZXRlKHRhc2tJZCl9PlxuICAgICAgICA8RmxleCB7Li4uZGVsZXRlQWN0aW9uU3R5bGV9PlxuICAgICAgICAgIDxNZERlbGV0ZUZvcmV2ZXIgY29sb3I9XCIjRTJFOEYwXCIgc2l6ZT1cIjQzcHhcIiAvPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L1N3aXBlQWN0aW9uPlxuICAgIDwvVHJhaWxpbmdBY3Rpb25zPlxuICApO1xuXG4gIGlmIChwcm9wcy5lcnJvcilcbiAgICByZXR1cm4gKFxuICAgICAgPEFsZXJ0IHN0YXR1cz1cImVycm9yXCIgbWFyZ2luVG9wPVwiMyVcIiBwYWRkaW5nPVwiMTJweFwiPlxuICAgICAgICA8QWxlcnRJY29uIC8+XG4gICAgICAgIDxUZXh0IGZvbnRTaXplPVwic21cIj5GYWlsZWQgdG8gZmV0Y2ggeW91ciB0YXNrczwvVGV4dD5cbiAgICAgIDwvQWxlcnQ+XG4gICAgKTtcblxuICByZXR1cm4gKFxuICAgIDxTdGFjayBhbGlnbj1cInN0cmV0Y2hcIiBtYXJnaW5Ub3A9XCIzXCI+XG4gICAgICA8U3dpcGVhYmxlTGlzdD5cbiAgICAgICAge3Byb3BzLmRhdGEgJiZcbiAgICAgICAgICBwcm9wcy5kYXRhLnRhc2tzXG4gICAgICAgICAgICAuZmlsdGVyKChpdGVtOiBUYXNrRm9ybVZhbHVlcywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBlbmRJbmRleDogbnVtYmVyID0gc2hvd0FsbFRhc2tcbiAgICAgICAgICAgICAgICA/IHByb3BzLmRhdGEudGFza3MubGVuZ3RoXG4gICAgICAgICAgICAgICAgOiAzO1xuICAgICAgICAgICAgICByZXR1cm4gaW5kZXggPCBlbmRJbmRleDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKCh0YXNrOiBUYXNrRm9ybVZhbHVlcywgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICA8U3dpcGVhYmxlTGlzdEl0ZW1cbiAgICAgICAgICAgICAgICB0cmFpbGluZ0FjdGlvbnM9e3RyYWlsaW5nQWN0aW9ucyh0YXNrLl9pZCl9XG4gICAgICAgICAgICAgICAga2V5PXt0YXNrLl9pZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGbGV4IHdpZHRoPVwiMTAwJVwiIHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIHsuLi4odGFzay5faWQgPT09IGhvdmVyZWRUYXNrSWRcbiAgICAgICAgICAgICAgICAgICAgICA/IG1vdmVUYXNrQ2FyZFRvTGVmdFN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgOiB7fSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUYXNrQ2FyZCB0YXNrPXt0YXNrfSBrZXk9e2luZGV4fSAvPlxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHsuLi5oaWRlRGVsZXRlfVxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0aG92ZXJlZFRhc2tJZCh0YXNrLl9pZCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldGhvdmVyZWRUYXNrSWQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMC4zc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC0zMCUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxNZERlbGV0ZUZvcmV2ZXIgY29sb3I9XCIjRTJFOEYwXCIgc2l6ZT1cIjQzcHhcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICA8L1N3aXBlYWJsZUxpc3RJdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICA8L1N3aXBlYWJsZUxpc3Q+XG4gICAgICB7cHJvcHMuZGF0YSAmJiBwcm9wcy5kYXRhLnRhc2tzLmxlbmd0aCA+IDMgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgYmc9XCJub25lXCJcbiAgICAgICAgICBtYXJnaW5Ub3A9XCIwICFpbXBvcnRhbnRcIlxuICAgICAgICAgIF9ob3Zlcj17eyBiZzogXCJub25lXCIgfX1cbiAgICAgICAgICBfYWN0aXZlPXt7IGJnOiBcIm5vbmVcIiB9fVxuICAgICAgICAgIGNvbG9yPVwiIzJCNkNCMFwiXG4gICAgICAgICAgZm9udFdlaWdodD1cIjYwMFwiXG4gICAgICAgICAgb25DbGljaz17c2hvd0FsbH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzaG93QWxsVGFzayA/IFwiSGlkZVwiIDogXCJTaG93IEFsbFwifVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9TdGFjaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZGF5VGFza0xpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFsZXJ0IiwiQWxlcnRJY29uIiwiQm94IiwiQnV0dG9uIiwiRmxleCIsIlN0YWNrIiwiVGV4dCIsIlRhc2tDYXJkIiwidXNlRW1haWxDb250ZXh0IiwiU3dpcGVhYmxlTGlzdCIsIlN3aXBlYWJsZUxpc3RJdGVtIiwiU3dpcGVBY3Rpb24iLCJUcmFpbGluZ0FjdGlvbnMiLCJNZERlbGV0ZUZvcmV2ZXIiLCJkZWxldGVBY3Rpb25TdHlsZSIsImhpZGVEZWxldGUiLCJkZWxldGVUYXNrIiwiVG9kYXlUYXNrTGlzdCIsInByb3BzIiwib25Td2lwZURlbGV0ZSIsInRhc2tJZCIsImVtYWlsIiwidGhlbiIsIm11dGF0ZSIsImhvdmVyZWRUYXNrSWQiLCJzZXRob3ZlcmVkVGFza0lkIiwibW92ZVRhc2tDYXJkVG9MZWZ0U3R5bGUiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtIiwibWFyZ2luUmlnaHQiLCJvcGFjaXR5Iiwic2hvd0FsbFRhc2siLCJzZXRzaG93QWxsVGFzayIsInNob3dBbGwiLCJ0cmFpbGluZ0FjdGlvbnMiLCJkZXN0cnVjdGl2ZSIsIm9uQ2xpY2siLCJjb2xvciIsInNpemUiLCJlcnJvciIsInN0YXR1cyIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJmb250U2l6ZSIsImFsaWduIiwiZGF0YSIsInRhc2tzIiwiZmlsdGVyIiwiaXRlbSIsImluZGV4IiwiZW5kSW5kZXgiLCJsZW5ndGgiLCJtYXAiLCJ0YXNrIiwiX2lkIiwid2lkdGgiLCJwb3NpdGlvbiIsImhlaWdodCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIl9ob3ZlciIsImJhY2tncm91bmRDb2xvciIsImJnIiwiX2FjdGl2ZSIsImZvbnRXZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/home/TodayTaskList.tsx\n");

/***/ })

});