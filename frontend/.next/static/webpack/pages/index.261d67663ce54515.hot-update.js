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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _tasks_TaskCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/TaskCard */ \"./src/components/tasks/TaskCard.tsx\");\n/* harmony import */ var _pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/EmailContext */ \"./src/pages/EmailContext.tsx\");\n/* harmony import */ var react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-swipeable-list */ \"./node_modules/react-swipeable-list/dist/react-swipeable-list.umd.js\");\n/* harmony import */ var react_swipeable_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/home/styledComponents */ \"./src/styles/home/styledComponents.ts\");\n/* harmony import */ var react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-swipeable-list/dist/styles.css */ \"./node_modules/react-swipeable-list/dist/styles.css\");\n/* harmony import */ var react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _functions_tasks_deleteTask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions/tasks/deleteTask */ \"./src/functions/tasks/deleteTask.ts\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TodayTaskList = function(props) {\n    var _this1 = _this;\n    var onSwipeDelete = function onSwipeDelete(taskId) {\n        (0,_functions_tasks_deleteTask__WEBPACK_IMPORTED_MODULE_7__.deleteTask)(email, taskId).then(function() {\n            return props.mutate();\n        });\n    };\n    _s();\n    // const [hoveredOnDeleteButton, sethoveredOnDeleteButton] = useState(false);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), hoveredTaskId = ref[0], sethoveredTaskId = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), moveTaskCardtoLeftStyle = ref1[0], setmoveTaskCardtoLeftStyle = ref1[1];\n    // function getTaskStyle(taskId: string) {\n    //   if (taskId === hoveredTaskId) {\n    //     moveTaskCardToLeftStyle = {\n    //       transition: \"transform 0.3s\",\n    //       transform: \"translateX(-30%)\",\n    //       opacity: \"100%\",\n    //     };\n    //   }\n    // }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setmoveTaskCardtoLeftStyle(hoveredTaskId);\n    }, [\n        hoveredTaskId\n    ]);\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showAllTask = ref2[0], setshowAllTask = ref2[1];\n    var showAll = function() {\n        setshowAllTask(!showAllTask);\n    };\n    var email = (0,_pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__.useEmailContext)().email;\n    var trailingActions = function(taskId) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.TrailingActions, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeAction, {\n                destructive: true,\n                onClick: function() {\n                    return onSwipeDelete(taskId);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, _objectSpread({}, _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__.deleteActionStyle, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDeleteForever, {\n                        color: \"#E2E8F0\",\n                        size: \"43px\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, _this1)\n                }), void 0, false, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n            lineNumber: 61,\n            columnNumber: 5\n        }, _this1);\n    };\n    if (props.error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Alert, {\n        status: \"error\",\n        marginTop: \"3%\",\n        padding: \"12px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.AlertIcon, {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                fontSize: \"sm\",\n                children: \"Failed to fetch your tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n        lineNumber: 72,\n        columnNumber: 7\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n        align: \"stretch\",\n        marginTop: \"3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeableList, {\n                children: props.data && props.data.tasks.filter(function(item, index) {\n                    var endIndex = showAllTask ? props.data.tasks.length : 3;\n                    return index < endIndex;\n                }).map(function(task, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeableListItem, {\n                        trailingActions: trailingActions(task._id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, {\n                            width: \"100%\",\n                            position: \"relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, _objectSpread({\n                                    width: \"100%\",\n                                    height: \"100%\"\n                                }, moveTaskCardtoLeftStyle, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tasks_TaskCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        task: task\n                                    }, index, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 21\n                                    }, _this1)\n                                }), void 0, false, {\n                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 19\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, _objectSpread({}, _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__.hideDelete, {\n                                    position: \"absolute\",\n                                    onMouseEnter: function() {\n                                        sethoveredTaskId(task._id);\n                                    },\n                                    onMouseLeave: function() {\n                                        sethoveredTaskId(\"\");\n                                    },\n                                    _hover: {\n                                        backgroundColor: \"blue\",\n                                        transition: \"transform 0.3s\",\n                                        transform: \"translateX(-30%)\",\n                                        opacity: \"100%\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDeleteForever, {\n                                        color: \"#E2E8F0\",\n                                        size: \"43px\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 21\n                                    }, _this1)\n                                }), void 0, false, {\n                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 19\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 17\n                        }, _this1)\n                    }, task._id, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 15\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, _this),\n            props.data && props.data.tasks.length > 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                bg: \"none\",\n                marginTop: \"0 !important\",\n                _hover: {\n                    bg: \"none\"\n                },\n                _active: {\n                    bg: \"none\"\n                },\n                color: \"#2B6CB0\",\n                fontWeight: \"600\",\n                onClick: showAll,\n                children: showAllTask ? \"Hide\" : \"Show All\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 121,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, _this);\n};\n_s(TodayTaskList, \"xvni6UILg68SyDtO+oE7uJo4+oI=\", false, function() {\n    return [\n        _pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__.useEmailContext\n    ];\n});\n_c = TodayTaskList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodayTaskList);\nvar _c;\n$RefreshReg$(_c, \"TodayTaskList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL1RvZGF5VGFza0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFVekI7QUFDZTtBQUNrQjtBQVE3QjtBQUNtQjtBQUlMO0FBQ0U7QUFDZ0I7O0FBRzlELElBQU1vQixhQUFhLEdBQUcsU0FBQ0MsS0FBa0QsRUFBSzs7UUF5Qm5FQyxhQUFhLEdBQXRCLFNBQVNBLGFBQWEsQ0FBQ0MsTUFBYyxFQUFFO1FBQ3JDSix1RUFBVSxDQUFDSyxLQUFLLEVBQUVELE1BQU0sQ0FBQyxDQUFDRSxJQUFJLENBQUM7bUJBQU1KLEtBQUssQ0FBQ0ssTUFBTSxFQUFFO1NBQUEsQ0FBQyxDQUFDO0tBQ3REOztJQTFCRCw2RUFBNkU7SUFDN0UsSUFBMEN4QixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBaEN4RCxhQWdDc0IsR0FBc0JBLEdBQVksR0FBbEMsRUFoQ3RCLGdCQWdDd0MsR0FBSUEsR0FBWSxHQUFoQjtJQUN0QyxJQUE4REEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQWpDNUUsdUJBaUNnQyxHQUFnQ0EsSUFBWSxHQUE1QyxFQWpDaEMsMEJBaUM0RCxHQUFJQSxJQUFZLEdBQWhCO0lBRTFELDBDQUEwQztJQUMxQyxvQ0FBb0M7SUFDcEMsa0NBQWtDO0lBQ2xDLHNDQUFzQztJQUN0Qyx1Q0FBdUM7SUFDdkMseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxNQUFNO0lBQ04sSUFBSTtJQUVKRCxnREFBUyxDQUFDLFdBQU07UUFDZDZCLDBCQUEwQixDQUFDSCxhQUFhLENBQUMsQ0FBQztLQUUzQyxFQUFFO1FBQUNBLGFBQWE7S0FBQyxDQUFDO0lBRW5CLElBQXNDekIsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQWxEdkQsV0FrRG9CLEdBQW9CQSxJQUFlLEdBQW5DLEVBbERwQixjQWtEb0MsR0FBSUEs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QUFDd0IsSUFBSSxJQUFJeEIsS0FBSyxDQUFDd0IsSUFBSSxDQUFDQyxLQUFLLENBQUNLLE1BQU0sR0FBRyxDQUFDLGtCQUN4Qyw4REFBQzdDLG9EQUFNO2dCQUNMMkQsRUFBRSxFQUFDLE1BQU07Z0JBQ1R4QixTQUFTLEVBQUMsY0FBYztnQkFDeEJtQixNQUFNLEVBQUU7b0JBQUVLLEVBQUUsRUFBRSxNQUFNO2lCQUFFO2dCQUN0QkMsT0FBTyxFQUFFO29CQUFFRCxFQUFFLEVBQUUsTUFBTTtpQkFBRTtnQkFDdkI1QixLQUFLLEVBQUMsU0FBUztnQkFDZjhCLFVBQVUsRUFBQyxLQUFLO2dCQUNoQi9CLE9BQU8sRUFBRUgsT0FBTzswQkFFZkYsV0FBVyxHQUFHLE1BQU0sR0FBRyxVQUFVOzs7OztxQkFDM0I7Ozs7OzthQUVMLENBQ1I7Q0FDSDtHQXhHS1gsYUFBYTs7UUF3QkNULGdFQUFlOzs7QUF4QjdCUyxLQUFBQSxhQUFhO0FBMEduQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hvbWUvVG9kYXlUYXNrTGlzdC50c3g/YmYwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQWxlcnQsXG4gIEFsZXJ0SWNvbixcbiAgQm94LFxuICBCdXR0b24sXG4gIEZsZXgsXG4gIFN0YWNrLFxuICBzdHlsZWQsXG4gIFRleHQsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgVGFza0NhcmQgZnJvbSBcIi4uL3Rhc2tzL1Rhc2tDYXJkXCI7XG5pbXBvcnQgeyB1c2VFbWFpbENvbnRleHQgfSBmcm9tIFwiLi4vLi4vcGFnZXMvRW1haWxDb250ZXh0XCI7XG5pbXBvcnQgeyBUYXNrRm9ybVZhbHVlcyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgTGVhZGluZ0FjdGlvbnMsXG4gIFN3aXBlYWJsZUxpc3QsXG4gIFN3aXBlYWJsZUxpc3RJdGVtLFxuICBTd2lwZUFjdGlvbixcbiAgVHJhaWxpbmdBY3Rpb25zLFxufSBmcm9tIFwicmVhY3Qtc3dpcGVhYmxlLWxpc3RcIjtcbmltcG9ydCB7IE1kRGVsZXRlRm9yZXZlciB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IHtcbiAgZGVsZXRlQWN0aW9uU3R5bGUsXG4gIGhpZGVEZWxldGUsXG59IGZyb20gXCIuLi8uLi9zdHlsZXMvaG9tZS9zdHlsZWRDb21wb25lbnRzXCI7XG5pbXBvcnQgXCJyZWFjdC1zd2lwZWFibGUtbGlzdC9kaXN0L3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IGRlbGV0ZVRhc2sgfSBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL3Rhc2tzL2RlbGV0ZVRhc2tcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9ob21lL3N0eWxlLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgVG9kYXlUYXNrTGlzdCA9IChwcm9wczogeyBkYXRhOiBhbnk7IGVycm9yOiBhbnk7IG11dGF0ZTogRnVuY3Rpb24gfSkgPT4ge1xuICAvLyBjb25zdCBbaG92ZXJlZE9uRGVsZXRlQnV0dG9uLCBzZXRob3ZlcmVkT25EZWxldGVCdXR0b25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaG92ZXJlZFRhc2tJZCwgc2V0aG92ZXJlZFRhc2tJZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW21vdmVUYXNrQ2FyZHRvTGVmdFN0eWxlLCBzZXRtb3ZlVGFza0NhcmR0b0xlZnRTdHlsZV0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgLy8gZnVuY3Rpb24gZ2V0VGFza1N0eWxlKHRhc2tJZDogc3RyaW5nKSB7XG4gIC8vICAgaWYgKHRhc2tJZCA9PT0gaG92ZXJlZFRhc2tJZCkge1xuICAvLyAgICAgbW92ZVRhc2tDYXJkVG9MZWZ0U3R5bGUgPSB7XG4gIC8vICAgICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIDAuM3NcIixcbiAgLy8gICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTMwJSlcIixcbiAgLy8gICAgICAgb3BhY2l0eTogXCIxMDAlXCIsXG4gIC8vICAgICB9O1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0bW92ZVRhc2tDYXJkdG9MZWZ0U3R5bGUoaG92ZXJlZFRhc2tJZCk7XG5cbiAgfSwgW2hvdmVyZWRUYXNrSWRdKVxuXG4gIGNvbnN0IFtzaG93QWxsVGFzaywgc2V0c2hvd0FsbFRhc2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzaG93QWxsID0gKCkgPT4ge1xuICAgIHNldHNob3dBbGxUYXNrKCFzaG93QWxsVGFzayk7XG4gIH07XG4gIGNvbnN0IHsgZW1haWwgfSA9IHVzZUVtYWlsQ29udGV4dCgpO1xuICBmdW5jdGlvbiBvblN3aXBlRGVsZXRlKHRhc2tJZDogc3RyaW5nKSB7XG4gICAgZGVsZXRlVGFzayhlbWFpbCwgdGFza0lkKS50aGVuKCgpID0+IHByb3BzLm11dGF0ZSgpKTtcbiAgfVxuXG4gIGNvbnN0IHRyYWlsaW5nQWN0aW9ucyA9ICh0YXNrSWQ6IHN0cmluZykgPT4gKFxuICAgIDxUcmFpbGluZ0FjdGlvbnM+XG4gICAgICA8U3dpcGVBY3Rpb24gZGVzdHJ1Y3RpdmU9e3RydWV9IG9uQ2xpY2s9eygpID0+IG9uU3dpcGVEZWxldGUodGFza0lkKX0+XG4gICAgICAgIDxGbGV4IHsuLi5kZWxldGVBY3Rpb25TdHlsZX0+XG4gICAgICAgICAgPE1kRGVsZXRlRm9yZXZlciBjb2xvcj1cIiNFMkU4RjBcIiBzaXplPVwiNDNweFwiIC8+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvU3dpcGVBY3Rpb24+XG4gICAgPC9UcmFpbGluZ0FjdGlvbnM+XG4gICk7XG5cbiAgaWYgKHByb3BzLmVycm9yKVxuICAgIHJldHVybiAoXG4gICAgICA8QWxlcnQgc3RhdHVzPVwiZXJyb3JcIiBtYXJnaW5Ub3A9XCIzJVwiIHBhZGRpbmc9XCIxMnB4XCI+XG4gICAgICAgIDxBbGVydEljb24gLz5cbiAgICAgICAgPFRleHQgZm9udFNpemU9XCJzbVwiPkZhaWxlZCB0byBmZXRjaCB5b3VyIHRhc2tzPC9UZXh0PlxuICAgICAgPC9BbGVydD5cbiAgICApO1xuXG4gIHJldHVybiAoXG4gICAgPFN0YWNrIGFsaWduPVwic3RyZXRjaFwiIG1hcmdpblRvcD1cIjNcIj5cbiAgICAgIDxTd2lwZWFibGVMaXN0PlxuICAgICAgICB7cHJvcHMuZGF0YSAmJlxuICAgICAgICAgIHByb3BzLmRhdGEudGFza3NcbiAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW06IFRhc2tGb3JtVmFsdWVzLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGVuZEluZGV4OiBudW1iZXIgPSBzaG93QWxsVGFza1xuICAgICAgICAgICAgICAgID8gcHJvcHMuZGF0YS50YXNrcy5sZW5ndGhcbiAgICAgICAgICAgICAgICA6IDM7XG4gICAgICAgICAgICAgIHJldHVybiBpbmRleCA8IGVuZEluZGV4O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoKHRhc2s6IFRhc2tGb3JtVmFsdWVzLCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgIDxTd2lwZWFibGVMaXN0SXRlbVxuICAgICAgICAgICAgICAgIHRyYWlsaW5nQWN0aW9ucz17dHJhaWxpbmdBY3Rpb25zKHRhc2suX2lkKX1cbiAgICAgICAgICAgICAgICBrZXk9e3Rhc2suX2lkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZsZXggd2lkdGg9XCIxMDAlXCIgcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgey4uLm1vdmVUYXNrQ2FyZHRvTGVmdFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPFRhc2tDYXJkIHRhc2s9e3Rhc2t9IGtleT17aW5kZXh9IC8+XG4gICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgey4uLmhpZGVEZWxldGV9XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRob3ZlcmVkVGFza0lkKHRhc2suX2lkKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0aG92ZXJlZFRhc2tJZChcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAwLjNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTMwJSlcIixcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1kRGVsZXRlRm9yZXZlciBjb2xvcj1cIiNFMkU4RjBcIiBzaXplPVwiNDNweFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgIDwvU3dpcGVhYmxlTGlzdEl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgIDwvU3dpcGVhYmxlTGlzdD5cbiAgICAgIHtwcm9wcy5kYXRhICYmIHByb3BzLmRhdGEudGFza3MubGVuZ3RoID4gMyAmJiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBiZz1cIm5vbmVcIlxuICAgICAgICAgIG1hcmdpblRvcD1cIjAgIWltcG9ydGFudFwiXG4gICAgICAgICAgX2hvdmVyPXt7IGJnOiBcIm5vbmVcIiB9fVxuICAgICAgICAgIF9hY3RpdmU9e3sgYmc6IFwibm9uZVwiIH19XG4gICAgICAgICAgY29sb3I9XCIjMkI2Q0IwXCJcbiAgICAgICAgICBmb250V2VpZ2h0PVwiNjAwXCJcbiAgICAgICAgICBvbkNsaWNrPXtzaG93QWxsfVxuICAgICAgICA+XG4gICAgICAgICAge3Nob3dBbGxUYXNrID8gXCJIaWRlXCIgOiBcIlNob3cgQWxsXCJ9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L1N0YWNrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kYXlUYXNrTGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQWxlcnQiLCJBbGVydEljb24iLCJCb3giLCJCdXR0b24iLCJGbGV4IiwiU3RhY2siLCJUZXh0IiwiVGFza0NhcmQiLCJ1c2VFbWFpbENvbnRleHQiLCJTd2lwZWFibGVMaXN0IiwiU3dpcGVhYmxlTGlzdEl0ZW0iLCJTd2lwZUFjdGlvbiIsIlRyYWlsaW5nQWN0aW9ucyIsIk1kRGVsZXRlRm9yZXZlciIsImRlbGV0ZUFjdGlvblN0eWxlIiwiaGlkZURlbGV0ZSIsImRlbGV0ZVRhc2siLCJUb2RheVRhc2tMaXN0IiwicHJvcHMiLCJvblN3aXBlRGVsZXRlIiwidGFza0lkIiwiZW1haWwiLCJ0aGVuIiwibXV0YXRlIiwiaG92ZXJlZFRhc2tJZCIsInNldGhvdmVyZWRUYXNrSWQiLCJtb3ZlVGFza0NhcmR0b0xlZnRTdHlsZSIsInNldG1vdmVUYXNrQ2FyZHRvTGVmdFN0eWxlIiwic2hvd0FsbFRhc2siLCJzZXRzaG93QWxsVGFzayIsInNob3dBbGwiLCJ0cmFpbGluZ0FjdGlvbnMiLCJkZXN0cnVjdGl2ZSIsIm9uQ2xpY2siLCJjb2xvciIsInNpemUiLCJlcnJvciIsInN0YXR1cyIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJmb250U2l6ZSIsImFsaWduIiwiZGF0YSIsInRhc2tzIiwiZmlsdGVyIiwiaXRlbSIsImluZGV4IiwiZW5kSW5kZXgiLCJsZW5ndGgiLCJtYXAiLCJ0YXNrIiwiX2lkIiwid2lkdGgiLCJwb3NpdGlvbiIsImhlaWdodCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIl9ob3ZlciIsImJhY2tncm91bmRDb2xvciIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJvcGFjaXR5IiwiYmciLCJfYWN0aXZlIiwiZm9udFdlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/home/TodayTaskList.tsx\n");

/***/ })

});