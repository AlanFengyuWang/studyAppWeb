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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _tasks_TaskCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/TaskCard */ \"./src/components/tasks/TaskCard.tsx\");\n/* harmony import */ var _pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/EmailContext */ \"./src/pages/EmailContext.tsx\");\n/* harmony import */ var react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-swipeable-list */ \"./node_modules/react-swipeable-list/dist/react-swipeable-list.umd.js\");\n/* harmony import */ var react_swipeable_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/home/styledComponents */ \"./src/styles/home/styledComponents.ts\");\n/* harmony import */ var react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-swipeable-list/dist/styles.css */ \"./node_modules/react-swipeable-list/dist/styles.css\");\n/* harmony import */ var react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _functions_tasks_deleteTask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions/tasks/deleteTask */ \"./src/functions/tasks/deleteTask.ts\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TodayTaskList = function(props) {\n    var _this1 = _this;\n    var onSwipeDelete = function onSwipeDelete(taskId) {\n        (0,_functions_tasks_deleteTask__WEBPACK_IMPORTED_MODULE_7__.deleteTask)(email, taskId).then(function() {\n            return props.mutate();\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), hoveredOnDeleteButton = ref[0], sethoveredOnDeleteButton = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), hoveredTaskId = ref1[0], sethoveredTaskId = ref1[1];\n    var moveTaskCardToLeftStyle = hoveredOnDeleteButton ? {\n        transition: \"transform 0.3s\",\n        transform: \"translateX(-30%)\",\n        opacity: \"100%\"\n    } : {};\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showAllTask = ref2[0], setshowAllTask = ref2[1];\n    var showAll = function() {\n        setshowAllTask(!showAllTask);\n    };\n    var email = (0,_pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__.useEmailContext)().email;\n    var trailingActions = function(taskId) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.TrailingActions, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeAction, {\n                destructive: true,\n                onClick: function() {\n                    return onSwipeDelete(taskId);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, _objectSpread({}, _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__.deleteActionStyle, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDeleteForever, {\n                        color: \"#E2E8F0\",\n                        size: \"43px\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, _this1)\n                }), void 0, false, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n            lineNumber: 52,\n            columnNumber: 5\n        }, _this1);\n    };\n    if (props.error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Alert, {\n        status: \"error\",\n        marginTop: \"3%\",\n        padding: \"12px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.AlertIcon, {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                fontSize: \"sm\",\n                children: \"Failed to fetch your tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n        lineNumber: 63,\n        columnNumber: 7\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n        align: \"stretch\",\n        marginTop: \"3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeableList, {\n                children: props.data && props.data.tasks.filter(function(item, index) {\n                    var endIndex = showAllTask ? props.data.tasks.length : 3;\n                    return index < endIndex;\n                }).map(function(task, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeableListItem, {\n                        trailingActions: trailingActions(task._id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, {\n                            width: \"100%\",\n                            position: \"relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, _objectSpread({\n                                    width: \"100%\",\n                                    height: \"100%\"\n                                }, moveTaskCardToLeftStyle, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tasks_TaskCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        task: task\n                                    }, index, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 21\n                                    }, _this1)\n                                }), void 0, false, {\n                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 19\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, _objectSpread({}, _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__.hideDelete, {\n                                    position: \"absolute\",\n                                    onMouseEnter: function() {\n                                        return sethoveredOnDeleteButton(true);\n                                    },\n                                    onMouseLeave: function() {\n                                        return sethoveredOnDeleteButton(false);\n                                    },\n                                    _hover: {\n                                        backgroundColor: \"blue\",\n                                        transition: \"transform 0.3s\",\n                                        transform: \"translateX(-30%)\",\n                                        opacity: \"100%\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDeleteForever, {\n                                        color: \"#E2E8F0\",\n                                        size: \"43px\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 21\n                                    }, _this1)\n                                }), void 0, false, {\n                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 19\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 17\n                        }, _this1)\n                    }, task._id, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 15\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this),\n            props.data && props.data.tasks.length > 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                bg: \"none\",\n                marginTop: \"0 !important\",\n                _hover: {\n                    bg: \"none\"\n                },\n                _active: {\n                    bg: \"none\"\n                },\n                color: \"#2B6CB0\",\n                fontWeight: \"600\",\n                onClick: showAll,\n                children: showAllTask ? \"Hide\" : \"Show All\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 108,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, _this);\n};\n_s(TodayTaskList, \"x6CQIYBT6EsFkY2fqvyOzIF3yPg=\", false, function() {\n    return [\n        _pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__.useEmailContext\n    ];\n});\n_c = TodayTaskList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodayTaskList);\nvar _c;\n$RefreshReg$(_c, \"TodayTaskList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL1RvZGF5VGFza0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFVekI7QUFDZTtBQUNrQjtBQVE3QjtBQUNtQjtBQUlMO0FBQ0U7QUFDZ0I7O0FBRzlELElBQU1tQixhQUFhLEdBQUcsU0FBQ0MsS0FBa0QsRUFBSzs7UUFnQm5FQyxhQUFhLEdBQXRCLFNBQVNBLGFBQWEsQ0FBQ0MsTUFBYyxFQUFFO1FBQ3JDSix1RUFBVSxDQUFDSyxLQUFLLEVBQUVELE1BQU0sQ0FBQyxDQUFDRSxJQUFJLENBQUM7bUJBQU1KLEtBQUssQ0FBQ0ssTUFBTSxFQUFFO1NBQUEsQ0FBQyxDQUFDO0tBQ3REOztJQWpCRCxJQUEwRHhCLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUEvQjNFLHFCQStCOEIsR0FBOEJBLEdBQWUsR0FBN0MsRUEvQjlCLHdCQStCd0QsR0FBSUEsR0FBZSxHQUFuQjtJQUN0RCxJQUEwQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQWhDM0QsYUFnQ3NCLEdBQXNCQSxJQUFlLEdBQXJDLEVBaEN0QixnQkFnQ3dDLEdBQUlBLElBQWUsR0FBbkI7SUFDdEMsSUFBSTZCLHVCQUF1QixHQUFHSixxQkFBcUIsR0FDL0M7UUFDRUssVUFBVSxFQUFFLGdCQUFnQjtRQUM1QkMsU0FBUyxFQUFFLGtCQUFrQjtRQUM3QkMsT0FBTyxFQUFFLE1BQU07S0FDaEIsR0FDRCxFQUFFO0lBRU4sSUFBc0NoQyxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBekN2RCxXQXlDb0IsR0FBb0JBLElBQWUsR0FBbkMsRUF6Q3BCLGNBeUNvQyxHQUFJQSxJQUFlLEdBQW5CO0lBQ2xDLElBQU1tQyxPQUFPLEdBQUcsV0FBTTtRQUNwQkQsY0FBYyxDQUFDLENBQUNELFdBQVcsQ0FBQyxDQUFDO0tBQzlCO0lBQ0Qs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QUFTLEVBQUMsY0FBYztnQkFDeEJtQixNQUFNLEVBQUU7b0JBQUVFLEVBQUUsRUFBRSxNQUFNO2lCQUFFO2dCQUN0QkMsT0FBTyxFQUFFO29CQUFFRCxFQUFFLEVBQUUsTUFBTTtpQkFBRTtnQkFDdkJ6QixLQUFLLEVBQUMsU0FBUztnQkFDZjJCLFVBQVUsRUFBQyxLQUFLO2dCQUNoQjVCLE9BQU8sRUFBRUgsT0FBTzswQkFFZkYsV0FBVyxHQUFHLE1BQU0sR0FBRyxVQUFVOzs7OztxQkFDM0I7Ozs7OzthQUVMLENBQ1I7Q0FDSDtHQTNGS2YsYUFBYTs7UUFlQ1QsZ0VBQWU7OztBQWY3QlMsS0FBQUEsYUFBYTtBQTZGbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob21lL1RvZGF5VGFza0xpc3QudHN4P2JmMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEFsZXJ0LFxuICBBbGVydEljb24sXG4gIEJveCxcbiAgQnV0dG9uLFxuICBGbGV4LFxuICBTdGFjayxcbiAgc3R5bGVkLFxuICBUZXh0LFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFRhc2tDYXJkIGZyb20gXCIuLi90YXNrcy9UYXNrQ2FyZFwiO1xuaW1wb3J0IHsgdXNlRW1haWxDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BhZ2VzL0VtYWlsQ29udGV4dFwiO1xuaW1wb3J0IHsgVGFza0Zvcm1WYWx1ZXMgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIExlYWRpbmdBY3Rpb25zLFxuICBTd2lwZWFibGVMaXN0LFxuICBTd2lwZWFibGVMaXN0SXRlbSxcbiAgU3dpcGVBY3Rpb24sXG4gIFRyYWlsaW5nQWN0aW9ucyxcbn0gZnJvbSBcInJlYWN0LXN3aXBlYWJsZS1saXN0XCI7XG5pbXBvcnQgeyBNZERlbGV0ZUZvcmV2ZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB7XG4gIGRlbGV0ZUFjdGlvblN0eWxlLFxuICBoaWRlRGVsZXRlLFxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL2hvbWUvc3R5bGVkQ29tcG9uZW50c1wiO1xuaW1wb3J0IFwicmVhY3Qtc3dpcGVhYmxlLWxpc3QvZGlzdC9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBkZWxldGVUYXNrIH0gZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy90YXNrcy9kZWxldGVUYXNrXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvaG9tZS9zdHlsZS5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IFRvZGF5VGFza0xpc3QgPSAocHJvcHM6IHsgZGF0YTogYW55OyBlcnJvcjogYW55OyBtdXRhdGU6IEZ1bmN0aW9uIH0pID0+IHtcbiAgY29uc3QgW2hvdmVyZWRPbkRlbGV0ZUJ1dHRvbiwgc2V0aG92ZXJlZE9uRGVsZXRlQnV0dG9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hvdmVyZWRUYXNrSWQsIHNldGhvdmVyZWRUYXNrSWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBsZXQgbW92ZVRhc2tDYXJkVG9MZWZ0U3R5bGUgPSBob3ZlcmVkT25EZWxldGVCdXR0b25cbiAgICA/IHtcbiAgICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMC4zc1wiLFxuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtMzAlKVwiLFxuICAgICAgICBvcGFjaXR5OiBcIjEwMCVcIixcbiAgICAgIH1cbiAgICA6IHt9O1xuXG4gIGNvbnN0IFtzaG93QWxsVGFzaywgc2V0c2hvd0FsbFRhc2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzaG93QWxsID0gKCkgPT4ge1xuICAgIHNldHNob3dBbGxUYXNrKCFzaG93QWxsVGFzayk7XG4gIH07XG4gIGNvbnN0IHsgZW1haWwgfSA9IHVzZUVtYWlsQ29udGV4dCgpO1xuICBmdW5jdGlvbiBvblN3aXBlRGVsZXRlKHRhc2tJZDogc3RyaW5nKSB7XG4gICAgZGVsZXRlVGFzayhlbWFpbCwgdGFza0lkKS50aGVuKCgpID0+IHByb3BzLm11dGF0ZSgpKTtcbiAgfVxuXG4gIGNvbnN0IHRyYWlsaW5nQWN0aW9ucyA9ICh0YXNrSWQ6IHN0cmluZykgPT4gKFxuICAgIDxUcmFpbGluZ0FjdGlvbnM+XG4gICAgICA8U3dpcGVBY3Rpb24gZGVzdHJ1Y3RpdmU9e3RydWV9IG9uQ2xpY2s9eygpID0+IG9uU3dpcGVEZWxldGUodGFza0lkKX0+XG4gICAgICAgIDxGbGV4IHsuLi5kZWxldGVBY3Rpb25TdHlsZX0+XG4gICAgICAgICAgPE1kRGVsZXRlRm9yZXZlciBjb2xvcj1cIiNFMkU4RjBcIiBzaXplPVwiNDNweFwiIC8+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvU3dpcGVBY3Rpb24+XG4gICAgPC9UcmFpbGluZ0FjdGlvbnM+XG4gICk7XG5cbiAgaWYgKHByb3BzLmVycm9yKVxuICAgIHJldHVybiAoXG4gICAgICA8QWxlcnQgc3RhdHVzPVwiZXJyb3JcIiBtYXJnaW5Ub3A9XCIzJVwiIHBhZGRpbmc9XCIxMnB4XCI+XG4gICAgICAgIDxBbGVydEljb24gLz5cbiAgICAgICAgPFRleHQgZm9udFNpemU9XCJzbVwiPkZhaWxlZCB0byBmZXRjaCB5b3VyIHRhc2tzPC9UZXh0PlxuICAgICAgPC9BbGVydD5cbiAgICApO1xuXG4gIHJldHVybiAoXG4gICAgPFN0YWNrIGFsaWduPVwic3RyZXRjaFwiIG1hcmdpblRvcD1cIjNcIj5cbiAgICAgIDxTd2lwZWFibGVMaXN0PlxuICAgICAgICB7cHJvcHMuZGF0YSAmJlxuICAgICAgICAgIHByb3BzLmRhdGEudGFza3NcbiAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW06IFRhc2tGb3JtVmFsdWVzLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGVuZEluZGV4OiBudW1iZXIgPSBzaG93QWxsVGFza1xuICAgICAgICAgICAgICAgID8gcHJvcHMuZGF0YS50YXNrcy5sZW5ndGhcbiAgICAgICAgICAgICAgICA6IDM7XG4gICAgICAgICAgICAgIHJldHVybiBpbmRleCA8IGVuZEluZGV4O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoKHRhc2s6IFRhc2tGb3JtVmFsdWVzLCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgIDxTd2lwZWFibGVMaXN0SXRlbVxuICAgICAgICAgICAgICAgIHRyYWlsaW5nQWN0aW9ucz17dHJhaWxpbmdBY3Rpb25zKHRhc2suX2lkKX1cbiAgICAgICAgICAgICAgICBrZXk9e3Rhc2suX2lkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZsZXggd2lkdGg9XCIxMDAlXCIgcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgey4uLm1vdmVUYXNrQ2FyZFRvTGVmdFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPFRhc2tDYXJkIHRhc2s9e3Rhc2t9IGtleT17aW5kZXh9IC8+XG4gICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgey4uLmhpZGVEZWxldGV9XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldGhvdmVyZWRPbkRlbGV0ZUJ1dHRvbih0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRob3ZlcmVkT25EZWxldGVCdXR0b24oZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIDAuM3NcIixcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtMzAlKVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TWREZWxldGVGb3JldmVyIGNvbG9yPVwiI0UyRThGMFwiIHNpemU9XCI0M3B4XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgPC9Td2lwZWFibGVMaXN0SXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgPC9Td2lwZWFibGVMaXN0PlxuICAgICAge3Byb3BzLmRhdGEgJiYgcHJvcHMuZGF0YS50YXNrcy5sZW5ndGggPiAzICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGJnPVwibm9uZVwiXG4gICAgICAgICAgbWFyZ2luVG9wPVwiMCAhaW1wb3J0YW50XCJcbiAgICAgICAgICBfaG92ZXI9e3sgYmc6IFwibm9uZVwiIH19XG4gICAgICAgICAgX2FjdGl2ZT17eyBiZzogXCJub25lXCIgfX1cbiAgICAgICAgICBjb2xvcj1cIiMyQjZDQjBcIlxuICAgICAgICAgIGZvbnRXZWlnaHQ9XCI2MDBcIlxuICAgICAgICAgIG9uQ2xpY2s9e3Nob3dBbGx9XG4gICAgICAgID5cbiAgICAgICAgICB7c2hvd0FsbFRhc2sgPyBcIkhpZGVcIiA6IFwiU2hvdyBBbGxcIn1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvU3RhY2s+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RheVRhc2tMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBbGVydCIsIkFsZXJ0SWNvbiIsIkJveCIsIkJ1dHRvbiIsIkZsZXgiLCJTdGFjayIsIlRleHQiLCJUYXNrQ2FyZCIsInVzZUVtYWlsQ29udGV4dCIsIlN3aXBlYWJsZUxpc3QiLCJTd2lwZWFibGVMaXN0SXRlbSIsIlN3aXBlQWN0aW9uIiwiVHJhaWxpbmdBY3Rpb25zIiwiTWREZWxldGVGb3JldmVyIiwiZGVsZXRlQWN0aW9uU3R5bGUiLCJoaWRlRGVsZXRlIiwiZGVsZXRlVGFzayIsIlRvZGF5VGFza0xpc3QiLCJwcm9wcyIsIm9uU3dpcGVEZWxldGUiLCJ0YXNrSWQiLCJlbWFpbCIsInRoZW4iLCJtdXRhdGUiLCJob3ZlcmVkT25EZWxldGVCdXR0b24iLCJzZXRob3ZlcmVkT25EZWxldGVCdXR0b24iLCJob3ZlcmVkVGFza0lkIiwic2V0aG92ZXJlZFRhc2tJZCIsIm1vdmVUYXNrQ2FyZFRvTGVmdFN0eWxlIiwidHJhbnNpdGlvbiIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJzaG93QWxsVGFzayIsInNldHNob3dBbGxUYXNrIiwic2hvd0FsbCIsInRyYWlsaW5nQWN0aW9ucyIsImRlc3RydWN0aXZlIiwib25DbGljayIsImNvbG9yIiwic2l6ZSIsImVycm9yIiwic3RhdHVzIiwibWFyZ2luVG9wIiwicGFkZGluZyIsImZvbnRTaXplIiwiYWxpZ24iLCJkYXRhIiwidGFza3MiLCJmaWx0ZXIiLCJpdGVtIiwiaW5kZXgiLCJlbmRJbmRleCIsImxlbmd0aCIsIm1hcCIsInRhc2siLCJfaWQiLCJ3aWR0aCIsInBvc2l0aW9uIiwiaGVpZ2h0Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiX2hvdmVyIiwiYmFja2dyb3VuZENvbG9yIiwiYmciLCJfYWN0aXZlIiwiZm9udFdlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/home/TodayTaskList.tsx\n");

/***/ })

});