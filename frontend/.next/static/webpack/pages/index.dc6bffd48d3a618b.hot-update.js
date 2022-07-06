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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _tasks_TaskCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/TaskCard */ \"./src/components/tasks/TaskCard.tsx\");\n/* harmony import */ var _pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/EmailContext */ \"./src/pages/EmailContext.tsx\");\n/* harmony import */ var react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-swipeable-list */ \"./node_modules/react-swipeable-list/dist/react-swipeable-list.umd.js\");\n/* harmony import */ var react_swipeable_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/home/styledComponents */ \"./src/styles/home/styledComponents.ts\");\n/* harmony import */ var react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-swipeable-list/dist/styles.css */ \"./node_modules/react-swipeable-list/dist/styles.css\");\n/* harmony import */ var react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _functions_tasks_deleteTask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions/tasks/deleteTask */ \"./src/functions/tasks/deleteTask.ts\");\n/* harmony import */ var _styles_home_style_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/home/style.module.css */ \"./src/styles/home/style.module.css\");\n/* harmony import */ var _styles_home_style_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_home_style_module_css__WEBPACK_IMPORTED_MODULE_10__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TodayTaskList = function(props) {\n    var _this1 = _this;\n    var onSwipeDelete = function onSwipeDelete(taskId) {\n        (0,_functions_tasks_deleteTask__WEBPACK_IMPORTED_MODULE_7__.deleteTask)(email, taskId).then(function() {\n            return props.mutate();\n        });\n    };\n    _s();\n    var initializedVal = props.data && props.data.tasks ? props.data.tasks : null;\n    // console.log(\"initializedVal = \" + initializedVal);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initializedVal), allTasks = ref[0], setallTasks = ref[1];\n    // useEffect(() => {\n    //   console.log(\"-->set all tasks\" + JSON.stringify(allTasks));\n    //   if (props.data && props.data) setallTasks(props.data.tasks);\n    //   console.log(\"-->set new tasks = \" + JSON.stringify(allTasks));\n    //   // console.log(\"---------->props data is changed\");\n    // }, [props.data]);\n    // console.log(\"allTasks = \" + allTasks);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showAllTask = ref1[0], setshowAllTask = ref1[1];\n    var showAll = function() {\n        setshowAllTask(!showAllTask);\n    };\n    var email = (0,_pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__.useEmailContext)().email;\n    var trailingActions = function(taskId) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.TrailingActions, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeAction, {\n                destructive: true,\n                onClick: function() {\n                    return onSwipeDelete(taskId);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, _objectSpread({}, _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__.deleteActionStyle, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDeleteForever, {\n                        color: \"#E2E8F0\",\n                        size: \"43px\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, _this1)\n                }), void 0, false, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n            lineNumber: 60,\n            columnNumber: 5\n        }, _this1);\n    };\n    if (props.error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Alert, {\n        status: \"error\",\n        marginTop: \"3%\",\n        padding: \"12px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.AlertIcon, {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                fontSize: \"sm\",\n                children: \"Failed to fetch your tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n        lineNumber: 71,\n        columnNumber: 7\n    }, _this);\n    console.log(\"styles.deleteButton = \" + (_styles_home_style_module_css__WEBPACK_IMPORTED_MODULE_10___default().deleteButton));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n        align: \"stretch\",\n        marginTop: \"3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    backgroundColor: \"blue\"\n                },\n                children: \"Hello\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeableList, {\n                children: props.data && props.data.tasks.filter(function(item, index) {\n                    var endIndex = showAllTask ? props.data.tasks.length : 3;\n                    return index < endIndex;\n                }).map(function(task, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeableListItem, {\n                        trailingActions: trailingActions(task._id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, {\n                            width: \"100%\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tasks_TaskCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    task: task\n                                }, index, false, {\n                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 19\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, _objectSpread({}, _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__.hideDelete, {\n                                    className: (_styles_home_style_module_css__WEBPACK_IMPORTED_MODULE_10___default().deleteButton),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDeleteForever, {\n                                        color: \"#E2E8F0\",\n                                        size: \"43px\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 21\n                                    }, _this1)\n                                }), void 0, false, {\n                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 19\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 17\n                        }, _this1)\n                    }, task._id, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 15\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, _this),\n            props.data && props.data.tasks.length > 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                bg: \"none\",\n                marginTop: \"0 !important\",\n                _hover: {\n                    bg: \"none\"\n                },\n                _active: {\n                    bg: \"none\"\n                },\n                color: \"#2B6CB0\",\n                fontWeight: \"600\",\n                onClick: showAll,\n                children: showAllTask ? \"Hide\" : \"Show All\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 108,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, _this);\n};\n_s(TodayTaskList, \"IAJQFfKPWjTmNgG8Du6uFEJfPQQ=\", false, function() {\n    return [\n        _pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__.useEmailContext\n    ];\n});\n_c = TodayTaskList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodayTaskList);\nvar _c;\n$RefreshReg$(_c, \"TodayTaskList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL1RvZGF5VGFza0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQVV6QjtBQUNlO0FBQ2tCO0FBUTdCO0FBQ21CO0FBSUw7QUFDRTtBQUNnQjtBQUNOOztBQUV4RCxJQUFNb0IsYUFBYSxHQUFHLFNBQUNDLEtBQWtELEVBQUs7O1FBd0JuRUMsYUFBYSxHQUF0QixTQUFTQSxhQUFhLENBQUNDLE1BQWMsRUFBRTtRQUNyQ0wsdUVBQVUsQ0FBQ00sS0FBSyxFQUFFRCxNQUFNLENBQUMsQ0FBQ0UsSUFBSSxDQUFDO21CQUFNSixLQUFLLENBQUNLLE1BQU0sRUFBRTtTQUFBLENBQUMsQ0FBQztLQUN0RDs7SUF6QkQsSUFBTUMsY0FBYyxHQUNsQk4sS0FBSyxDQUFDTyxJQUFJLElBQUlQLEtBQUssQ0FBQ08sSUFBSSxDQUFDQyxLQUFLLEdBQUdSLEtBQUssQ0FBQ08sSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtJQUUxRCxxREFBcUQ7SUFDckQsSUFBZ0M1QixHQUF3QixHQUF4QkEsK0NBQVEsQ0FBQzBCLGNBQWMsQ0FBQyxFQW5DMUQsUUFtQ2lCLEdBQWlCMUIsR0FBd0IsR0FBekMsRUFuQ2pCLFdBbUM4QixHQUFJQSxHQUF3QixHQUE1QjtJQUU1QixvQkFBb0I7SUFDcEIsZ0VBQWdFO0lBRWhFLGlFQUFpRTtJQUVqRSxtRUFBbUU7SUFDbkUsd0RBQXdEO0lBQ3hELG9CQUFvQjtJQUVwQix5Q0FBeUM7SUFDekMsSUFBc0NBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUEvQ3ZELFdBK0NvQixHQUFvQkEsSUFBZSxHQUFuQyxFQS9DcEIsY0ErQ29DLEdBQUlBLElBQWUsR0FBbkI7SUFDbEMsSUFBTWlDLE9BQU8sR0FBRyxXQUFNO1FBQ3BCRCxjQUFjLENBQUMsQ0FBQ0QsV0FBVyxDQUFDLENBQUM7S0FDOUI7SUFFRCxJ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RyxVQUFVOzs7OztxQkFDM0I7Ozs7OzthQUVMLENBQ1I7Q0FDSDtHQTNGS1osYUFBYTs7UUFzQkNWLGdFQUFlOzs7QUF0QjdCVSxLQUFBQSxhQUFhO0FBNkZuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hvbWUvVG9kYXlUYXNrTGlzdC50c3g/YmYwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQWxlcnQsXG4gIEFsZXJ0SWNvbixcbiAgQm94LFxuICBCdXR0b24sXG4gIEZsZXgsXG4gIFN0YWNrLFxuICBzdHlsZWQsXG4gIFRleHQsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgVGFza0NhcmQgZnJvbSBcIi4uL3Rhc2tzL1Rhc2tDYXJkXCI7XG5pbXBvcnQgeyB1c2VFbWFpbENvbnRleHQgfSBmcm9tIFwiLi4vLi4vcGFnZXMvRW1haWxDb250ZXh0XCI7XG5pbXBvcnQgeyBUYXNrRm9ybVZhbHVlcyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgTGVhZGluZ0FjdGlvbnMsXG4gIFN3aXBlYWJsZUxpc3QsXG4gIFN3aXBlYWJsZUxpc3RJdGVtLFxuICBTd2lwZUFjdGlvbixcbiAgVHJhaWxpbmdBY3Rpb25zLFxufSBmcm9tIFwicmVhY3Qtc3dpcGVhYmxlLWxpc3RcIjtcbmltcG9ydCB7IE1kRGVsZXRlRm9yZXZlciB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IHtcbiAgZGVsZXRlQWN0aW9uU3R5bGUsXG4gIGhpZGVEZWxldGUsXG59IGZyb20gXCIuLi8uLi9zdHlsZXMvaG9tZS9zdHlsZWRDb21wb25lbnRzXCI7XG5pbXBvcnQgXCJyZWFjdC1zd2lwZWFibGUtbGlzdC9kaXN0L3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IGRlbGV0ZVRhc2sgfSBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL3Rhc2tzL2RlbGV0ZVRhc2tcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9ob21lL3N0eWxlLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgVG9kYXlUYXNrTGlzdCA9IChwcm9wczogeyBkYXRhOiBhbnk7IGVycm9yOiBhbnk7IG11dGF0ZTogRnVuY3Rpb24gfSkgPT4ge1xuICBjb25zdCBpbml0aWFsaXplZFZhbCA9XG4gICAgcHJvcHMuZGF0YSAmJiBwcm9wcy5kYXRhLnRhc2tzID8gcHJvcHMuZGF0YS50YXNrcyA6IG51bGw7XG5cbiAgLy8gY29uc29sZS5sb2coXCJpbml0aWFsaXplZFZhbCA9IFwiICsgaW5pdGlhbGl6ZWRWYWwpO1xuICBjb25zdCBbYWxsVGFza3MsIHNldGFsbFRhc2tzXSA9IHVzZVN0YXRlKGluaXRpYWxpemVkVmFsKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKFwiLS0+c2V0IGFsbCB0YXNrc1wiICsgSlNPTi5zdHJpbmdpZnkoYWxsVGFza3MpKTtcblxuICAvLyAgIGlmIChwcm9wcy5kYXRhICYmIHByb3BzLmRhdGEpIHNldGFsbFRhc2tzKHByb3BzLmRhdGEudGFza3MpO1xuXG4gIC8vICAgY29uc29sZS5sb2coXCItLT5zZXQgbmV3IHRhc2tzID0gXCIgKyBKU09OLnN0cmluZ2lmeShhbGxUYXNrcykpO1xuICAvLyAgIC8vIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLT5wcm9wcyBkYXRhIGlzIGNoYW5nZWRcIik7XG4gIC8vIH0sIFtwcm9wcy5kYXRhXSk7XG5cbiAgLy8gY29uc29sZS5sb2coXCJhbGxUYXNrcyA9IFwiICsgYWxsVGFza3MpO1xuICBjb25zdCBbc2hvd0FsbFRhc2ssIHNldHNob3dBbGxUYXNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc2hvd0FsbCA9ICgpID0+IHtcbiAgICBzZXRzaG93QWxsVGFzayghc2hvd0FsbFRhc2spO1xuICB9O1xuXG4gIGNvbnN0IHsgZW1haWwgfSA9IHVzZUVtYWlsQ29udGV4dCgpO1xuXG4gIGZ1bmN0aW9uIG9uU3dpcGVEZWxldGUodGFza0lkOiBzdHJpbmcpIHtcbiAgICBkZWxldGVUYXNrKGVtYWlsLCB0YXNrSWQpLnRoZW4oKCkgPT4gcHJvcHMubXV0YXRlKCkpO1xuICB9XG5cbiAgY29uc3QgdHJhaWxpbmdBY3Rpb25zID0gKHRhc2tJZDogc3RyaW5nKSA9PiAoXG4gICAgPFRyYWlsaW5nQWN0aW9ucz5cbiAgICAgIDxTd2lwZUFjdGlvbiBkZXN0cnVjdGl2ZT17dHJ1ZX0gb25DbGljaz17KCkgPT4gb25Td2lwZURlbGV0ZSh0YXNrSWQpfT5cbiAgICAgICAgPEZsZXggey4uLmRlbGV0ZUFjdGlvblN0eWxlfT5cbiAgICAgICAgICA8TWREZWxldGVGb3JldmVyIGNvbG9yPVwiI0UyRThGMFwiIHNpemU9XCI0M3B4XCIgLz5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9Td2lwZUFjdGlvbj5cbiAgICA8L1RyYWlsaW5nQWN0aW9ucz5cbiAgKTtcblxuICBpZiAocHJvcHMuZXJyb3IpXG4gICAgcmV0dXJuIChcbiAgICAgIDxBbGVydCBzdGF0dXM9XCJlcnJvclwiIG1hcmdpblRvcD1cIjMlXCIgcGFkZGluZz1cIjEycHhcIj5cbiAgICAgICAgPEFsZXJ0SWNvbiAvPlxuICAgICAgICA8VGV4dCBmb250U2l6ZT1cInNtXCI+RmFpbGVkIHRvIGZldGNoIHlvdXIgdGFza3M8L1RleHQ+XG4gICAgICA8L0FsZXJ0PlxuICAgICk7XG5cbiAgY29uc29sZS5sb2coXCJzdHlsZXMuZGVsZXRlQnV0dG9uID0gXCIgKyBzdHlsZXMuZGVsZXRlQnV0dG9uKTtcblxuICByZXR1cm4gKFxuICAgIDxTdGFjayBhbGlnbj1cInN0cmV0Y2hcIiBtYXJnaW5Ub3A9XCIzXCI+XG4gICAgICA8YnV0dG9uIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJibHVlXCIgfX0+SGVsbG88L2J1dHRvbj5cbiAgICAgIDxTd2lwZWFibGVMaXN0PlxuICAgICAgICB7cHJvcHMuZGF0YSAmJlxuICAgICAgICAgIHByb3BzLmRhdGEudGFza3NcbiAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW06IFRhc2tGb3JtVmFsdWVzLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGVuZEluZGV4OiBudW1iZXIgPSBzaG93QWxsVGFza1xuICAgICAgICAgICAgICAgID8gcHJvcHMuZGF0YS50YXNrcy5sZW5ndGhcbiAgICAgICAgICAgICAgICA6IDM7XG4gICAgICAgICAgICAgIHJldHVybiBpbmRleCA8IGVuZEluZGV4O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoKHRhc2s6IFRhc2tGb3JtVmFsdWVzLCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgIDxTd2lwZWFibGVMaXN0SXRlbVxuICAgICAgICAgICAgICAgIHRyYWlsaW5nQWN0aW9ucz17dHJhaWxpbmdBY3Rpb25zKHRhc2suX2lkKX1cbiAgICAgICAgICAgICAgICBrZXk9e3Rhc2suX2lkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZsZXggd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICB7LyogPEJveCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+ICovfVxuICAgICAgICAgICAgICAgICAgPFRhc2tDYXJkIHRhc2s9e3Rhc2t9IGtleT17aW5kZXh9IC8+XG4gICAgICAgICAgICAgICAgICB7LyogPC9Cb3g+ICovfVxuICAgICAgICAgICAgICAgICAgPEJveCB7Li4uaGlkZURlbGV0ZX0gY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlQnV0dG9ufT5cbiAgICAgICAgICAgICAgICAgICAgPE1kRGVsZXRlRm9yZXZlciBjb2xvcj1cIiNFMkU4RjBcIiBzaXplPVwiNDNweFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgIDwvU3dpcGVhYmxlTGlzdEl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgIDwvU3dpcGVhYmxlTGlzdD5cbiAgICAgIHtwcm9wcy5kYXRhICYmIHByb3BzLmRhdGEudGFza3MubGVuZ3RoID4gMyAmJiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBiZz1cIm5vbmVcIlxuICAgICAgICAgIG1hcmdpblRvcD1cIjAgIWltcG9ydGFudFwiXG4gICAgICAgICAgX2hvdmVyPXt7IGJnOiBcIm5vbmVcIiB9fVxuICAgICAgICAgIF9hY3RpdmU9e3sgYmc6IFwibm9uZVwiIH19XG4gICAgICAgICAgY29sb3I9XCIjMkI2Q0IwXCJcbiAgICAgICAgICBmb250V2VpZ2h0PVwiNjAwXCJcbiAgICAgICAgICBvbkNsaWNrPXtzaG93QWxsfVxuICAgICAgICA+XG4gICAgICAgICAge3Nob3dBbGxUYXNrID8gXCJIaWRlXCIgOiBcIlNob3cgQWxsXCJ9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L1N0YWNrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kYXlUYXNrTGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQWxlcnQiLCJBbGVydEljb24iLCJCb3giLCJCdXR0b24iLCJGbGV4IiwiU3RhY2siLCJUZXh0IiwiVGFza0NhcmQiLCJ1c2VFbWFpbENvbnRleHQiLCJTd2lwZWFibGVMaXN0IiwiU3dpcGVhYmxlTGlzdEl0ZW0iLCJTd2lwZUFjdGlvbiIsIlRyYWlsaW5nQWN0aW9ucyIsIk1kRGVsZXRlRm9yZXZlciIsImRlbGV0ZUFjdGlvblN0eWxlIiwiaGlkZURlbGV0ZSIsImRlbGV0ZVRhc2siLCJzdHlsZXMiLCJUb2RheVRhc2tMaXN0IiwicHJvcHMiLCJvblN3aXBlRGVsZXRlIiwidGFza0lkIiwiZW1haWwiLCJ0aGVuIiwibXV0YXRlIiwiaW5pdGlhbGl6ZWRWYWwiLCJkYXRhIiwidGFza3MiLCJhbGxUYXNrcyIsInNldGFsbFRhc2tzIiwic2hvd0FsbFRhc2siLCJzZXRzaG93QWxsVGFzayIsInNob3dBbGwiLCJ0cmFpbGluZ0FjdGlvbnMiLCJkZXN0cnVjdGl2ZSIsIm9uQ2xpY2siLCJjb2xvciIsInNpemUiLCJlcnJvciIsInN0YXR1cyIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJmb250U2l6ZSIsImNvbnNvbGUiLCJsb2ciLCJkZWxldGVCdXR0b24iLCJhbGlnbiIsImJ1dHRvbiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsdGVyIiwiaXRlbSIsImluZGV4IiwiZW5kSW5kZXgiLCJsZW5ndGgiLCJtYXAiLCJ0YXNrIiwiX2lkIiwid2lkdGgiLCJjbGFzc05hbWUiLCJiZyIsIl9ob3ZlciIsIl9hY3RpdmUiLCJmb250V2VpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/home/TodayTaskList.tsx\n");

/***/ })

});