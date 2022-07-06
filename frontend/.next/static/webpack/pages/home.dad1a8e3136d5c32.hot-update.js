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

/***/ "./src/components/home/TodayTaskList.tsx":
/*!***********************************************!*\
  !*** ./src/components/home/TodayTaskList.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _tasks_TaskCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/TaskCard */ \"./src/components/tasks/TaskCard.tsx\");\n/* harmony import */ var _pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/EmailContext */ \"./src/pages/EmailContext.tsx\");\n/* harmony import */ var react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-swipeable-list */ \"./node_modules/react-swipeable-list/dist/react-swipeable-list.umd.js\");\n/* harmony import */ var react_swipeable_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/home/styledComponents */ \"./src/styles/home/styledComponents.ts\");\n/* harmony import */ var react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-swipeable-list/dist/styles.css */ \"./node_modules/react-swipeable-list/dist/styles.css\");\n/* harmony import */ var react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _functions_tasks_deleteTask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions/tasks/deleteTask */ \"./src/functions/tasks/deleteTask.ts\");\n/* harmony import */ var _styles_home_style_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/home/style.module.css */ \"./src/styles/home/style.module.css\");\n/* harmony import */ var _styles_home_style_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_home_style_module_css__WEBPACK_IMPORTED_MODULE_10__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TodayTaskList = function(props) {\n    var _this1 = _this;\n    var onSwipeDelete = function onSwipeDelete(taskId) {\n        (0,_functions_tasks_deleteTask__WEBPACK_IMPORTED_MODULE_7__.deleteTask)(email, taskId).then(function() {\n            return props.mutate();\n        });\n    };\n    _s();\n    var initializedVal = props.data && props.data.tasks ? props.data.tasks : null;\n    // console.log(\"initializedVal = \" + initializedVal);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initializedVal), allTasks = ref[0], setallTasks = ref[1];\n    // useEffect(() => {\n    //   console.log(\"-->set all tasks\" + JSON.stringify(allTasks));\n    //   if (props.data && props.data) setallTasks(props.data.tasks);\n    //   console.log(\"-->set new tasks = \" + JSON.stringify(allTasks));\n    //   // console.log(\"---------->props data is changed\");\n    // }, [props.data]);\n    // console.log(\"allTasks = \" + allTasks);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showAllTask = ref1[0], setshowAllTask = ref1[1];\n    var showAll = function() {\n        setshowAllTask(!showAllTask);\n    };\n    var email = (0,_pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__.useEmailContext)().email;\n    var trailingActions = function(taskId) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.TrailingActions, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeAction, {\n                destructive: true,\n                onClick: function() {\n                    return onSwipeDelete(taskId);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, _objectSpread({}, _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__.deleteActionStyle, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDeleteForever, {\n                        color: \"#E2E8F0\",\n                        size: \"43px\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, _this1)\n                }), void 0, false, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n            lineNumber: 60,\n            columnNumber: 5\n        }, _this1);\n    };\n    if (props.error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Alert, {\n        status: \"error\",\n        marginTop: \"3%\",\n        padding: \"12px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.AlertIcon, {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                fontSize: \"sm\",\n                children: \"Failed to fetch your tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n        lineNumber: 71,\n        columnNumber: 7\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n        align: \"stretch\",\n        marginTop: \"3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeableList, {\n                children: props.data && props.data.tasks.filter(function(item, index) {\n                    var endIndex = showAllTask ? props.data.tasks.length : 3;\n                    return index < endIndex;\n                }).map(function(task, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeableListItem, {\n                        trailingActions: trailingActions(task._id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, {\n                            width: \"100%\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tasks_TaskCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    task: task\n                                }, index, false, {\n                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 19\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, _objectSpread({}, _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__.hideDelete, {\n                                    className: (_styles_home_style_module_css__WEBPACK_IMPORTED_MODULE_10___default().deleteButton),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDeleteForever, {\n                                        color: \"#E2E8F0\",\n                                        size: \"43px\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 21\n                                    }, _this1)\n                                }), void 0, false, {\n                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 19\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 17\n                        }, _this1)\n                    }, task._id, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 15\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, _this),\n            props.data && props.data.tasks.length > 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                bg: \"none\",\n                marginTop: \"0 !important\",\n                _hover: {\n                    bg: \"none\"\n                },\n                _active: {\n                    bg: \"none\"\n                },\n                color: \"#2B6CB0\",\n                fontWeight: \"600\",\n                onClick: showAll,\n                children: showAllTask ? \"Hide\" : \"Show All\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, _this);\n};\n_s(TodayTaskList, \"IAJQFfKPWjTmNgG8Du6uFEJfPQQ=\", false, function() {\n    return [\n        _pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__.useEmailContext\n    ];\n});\n_c = TodayTaskList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodayTaskList);\nvar _c;\n$RefreshReg$(_c, \"TodayTaskList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL1RvZGF5VGFza0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQVV6QjtBQUNlO0FBQ2tCO0FBUTdCO0FBQ21CO0FBSUw7QUFDRTtBQUNnQjtBQUNOOztBQUV4RCxJQUFNb0IsYUFBYSxHQUFHLFNBQUNDLEtBQWtELEVBQUs7O1FBd0JuRUMsYUFBYSxHQUF0QixTQUFTQSxhQUFhLENBQUNDLE1BQWMsRUFBRTtRQUNyQ0wsdUVBQVUsQ0FBQ00sS0FBSyxFQUFFRCxNQUFNLENBQUMsQ0FBQ0UsSUFBSSxDQUFDO21CQUFNSixLQUFLLENBQUNLLE1BQU0sRUFBRTtTQUFBLENBQUMsQ0FBQztLQUN0RDs7SUF6QkQsSUFBTUMsY0FBYyxHQUNsQk4sS0FBSyxDQUFDTyxJQUFJLElBQUlQLEtBQUssQ0FBQ08sSUFBSSxDQUFDQyxLQUFLLEdBQUdSLEtBQUssQ0FBQ08sSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtJQUUxRCxxREFBcUQ7SUFDckQsSUFBZ0M1QixHQUF3QixHQUF4QkEsK0NBQVEsQ0FBQzBCLGNBQWMsQ0FBQyxFQW5DMUQsUUFtQ2lCLEdBQWlCMUIsR0FBd0IsR0FBekMsRUFuQ2pCLFdBbUM4QixHQUFJQSxHQUF3QixHQUE1QjtJQUU1QixvQkFBb0I7SUFDcEIsZ0VBQWdFO0lBRWhFLGlFQUFpRTtJQUVqRSxtRUFBbUU7SUFDbkUsd0RBQXdEO0lBQ3hELG9CQUFvQjtJQUVwQix5Q0FBeUM7SUFDekMsSUFBc0NBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUEvQ3ZELFdBK0NvQixHQUFvQkEsSUFBZSxHQUFuQyxFQS9DcEIsY0ErQ29DLEdBQUlBLElBQWUsR0FBbkI7SUFDbEMsSUFBTWlDLE9BQU8sR0FBRyxXQUFNO1FBQ3BCRCxjQUFjLENBQUMsQ0FBQ0QsV0FBVyxDQUFDLENBQUM7S0FDOUI7SUFFRCxJ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bXBvbmVudHMvaG9tZS9Ub2RheVRhc2tMaXN0LnRzeD9iZjA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBBbGVydCxcbiAgQWxlcnRJY29uLFxuICBCb3gsXG4gIEJ1dHRvbixcbiAgRmxleCxcbiAgU3RhY2ssXG4gIHN0eWxlZCxcbiAgVGV4dCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBUYXNrQ2FyZCBmcm9tIFwiLi4vdGFza3MvVGFza0NhcmRcIjtcbmltcG9ydCB7IHVzZUVtYWlsQ29udGV4dCB9IGZyb20gXCIuLi8uLi9wYWdlcy9FbWFpbENvbnRleHRcIjtcbmltcG9ydCB7IFRhc2tGb3JtVmFsdWVzIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBMZWFkaW5nQWN0aW9ucyxcbiAgU3dpcGVhYmxlTGlzdCxcbiAgU3dpcGVhYmxlTGlzdEl0ZW0sXG4gIFN3aXBlQWN0aW9uLFxuICBUcmFpbGluZ0FjdGlvbnMsXG59IGZyb20gXCJyZWFjdC1zd2lwZWFibGUtbGlzdFwiO1xuaW1wb3J0IHsgTWREZWxldGVGb3JldmVyIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQge1xuICBkZWxldGVBY3Rpb25TdHlsZSxcbiAgaGlkZURlbGV0ZSxcbn0gZnJvbSBcIi4uLy4uL3N0eWxlcy9ob21lL3N0eWxlZENvbXBvbmVudHNcIjtcbmltcG9ydCBcInJlYWN0LXN3aXBlYWJsZS1saXN0L2Rpc3Qvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgZGVsZXRlVGFzayB9IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvdGFza3MvZGVsZXRlVGFza1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2hvbWUvc3R5bGUubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBUb2RheVRhc2tMaXN0ID0gKHByb3BzOiB7IGRhdGE6IGFueTsgZXJyb3I6IGFueTsgbXV0YXRlOiBGdW5jdGlvbiB9KSA9PiB7XG4gIGNvbnN0IGluaXRpYWxpemVkVmFsID1cbiAgICBwcm9wcy5kYXRhICYmIHByb3BzLmRhdGEudGFza3MgPyBwcm9wcy5kYXRhLnRhc2tzIDogbnVsbDtcblxuICAvLyBjb25zb2xlLmxvZyhcImluaXRpYWxpemVkVmFsID0gXCIgKyBpbml0aWFsaXplZFZhbCk7XG4gIGNvbnN0IFthbGxUYXNrcywgc2V0YWxsVGFza3NdID0gdXNlU3RhdGUoaW5pdGlhbGl6ZWRWYWwpO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coXCItLT5zZXQgYWxsIHRhc2tzXCIgKyBKU09OLnN0cmluZ2lmeShhbGxUYXNrcykpO1xuXG4gIC8vICAgaWYgKHByb3BzLmRhdGEgJiYgcHJvcHMuZGF0YSkgc2V0YWxsVGFza3MocHJvcHMuZGF0YS50YXNrcyk7XG5cbiAgLy8gICBjb25zb2xlLmxvZyhcIi0tPnNldCBuZXcgdGFza3MgPSBcIiArIEpTT04uc3RyaW5naWZ5KGFsbFRhc2tzKSk7XG4gIC8vICAgLy8gY29uc29sZS5sb2coXCItLS0tLS0tLS0tPnByb3BzIGRhdGEgaXMgY2hhbmdlZFwiKTtcbiAgLy8gfSwgW3Byb3BzLmRhdGFdKTtcblxuICAvLyBjb25zb2xlLmxvZyhcImFsbFRhc2tzID0gXCIgKyBhbGxUYXNrcyk7XG4gIGNvbnN0IFtzaG93QWxsVGFzaywgc2V0c2hvd0FsbFRhc2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzaG93QWxsID0gKCkgPT4ge1xuICAgIHNldHNob3dBbGxUYXNrKCFzaG93QWxsVGFzayk7XG4gIH07XG5cbiAgY29uc3QgeyBlbWFpbCB9ID0gdXNlRW1haWxDb250ZXh0KCk7XG5cbiAgZnVuY3Rpb24gb25Td2lwZURlbGV0ZSh0YXNrSWQ6IHN0cmluZykge1xuICAgIGRlbGV0ZVRhc2soZW1haWwsIHRhc2tJZCkudGhlbigoKSA9PiBwcm9wcy5tdXRhdGUoKSk7XG4gIH1cblxuICBjb25zdCB0cmFpbGluZ0FjdGlvbnMgPSAodGFza0lkOiBzdHJpbmcpID0+IChcbiAgICA8VHJhaWxpbmdBY3Rpb25zPlxuICAgICAgPFN3aXBlQWN0aW9uIGRlc3RydWN0aXZlPXt0cnVlfSBvbkNsaWNrPXsoKSA9PiBvblN3aXBlRGVsZXRlKHRhc2tJZCl9PlxuICAgICAgICA8RmxleCB7Li4uZGVsZXRlQWN0aW9uU3R5bGV9PlxuICAgICAgICAgIDxNZERlbGV0ZUZvcmV2ZXIgY29sb3I9XCIjRTJFOEYwXCIgc2l6ZT1cIjQzcHhcIiAvPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L1N3aXBlQWN0aW9uPlxuICAgIDwvVHJhaWxpbmdBY3Rpb25zPlxuICApO1xuXG4gIGlmIChwcm9wcy5lcnJvcilcbiAgICByZXR1cm4gKFxuICAgICAgPEFsZXJ0IHN0YXR1cz1cImVycm9yXCIgbWFyZ2luVG9wPVwiMyVcIiBwYWRkaW5nPVwiMTJweFwiPlxuICAgICAgICA8QWxlcnRJY29uIC8+XG4gICAgICAgIDxUZXh0IGZvbnRTaXplPVwic21cIj5GYWlsZWQgdG8gZmV0Y2ggeW91ciB0YXNrczwvVGV4dD5cbiAgICAgIDwvQWxlcnQ+XG4gICAgKTtcblxuICByZXR1cm4gKFxuICAgIDxTdGFjayBhbGlnbj1cInN0cmV0Y2hcIiBtYXJnaW5Ub3A9XCIzXCI+XG4gICAgICA8U3dpcGVhYmxlTGlzdD5cbiAgICAgICAge3Byb3BzLmRhdGEgJiZcbiAgICAgICAgICBwcm9wcy5kYXRhLnRhc2tzXG4gICAgICAgICAgICAuZmlsdGVyKChpdGVtOiBUYXNrRm9ybVZhbHVlcywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBlbmRJbmRleDogbnVtYmVyID0gc2hvd0FsbFRhc2tcbiAgICAgICAgICAgICAgICA/IHByb3BzLmRhdGEudGFza3MubGVuZ3RoXG4gICAgICAgICAgICAgICAgOiAzO1xuICAgICAgICAgICAgICByZXR1cm4gaW5kZXggPCBlbmRJbmRleDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKCh0YXNrOiBUYXNrRm9ybVZhbHVlcywgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICA8U3dpcGVhYmxlTGlzdEl0ZW1cbiAgICAgICAgICAgICAgICB0cmFpbGluZ0FjdGlvbnM9e3RyYWlsaW5nQWN0aW9ucyh0YXNrLl9pZCl9XG4gICAgICAgICAgICAgICAga2V5PXt0YXNrLl9pZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGbGV4IHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgICAgey8qIDxCb3ggd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPiAqL31cbiAgICAgICAgICAgICAgICAgIDxUYXNrQ2FyZCB0YXNrPXt0YXNrfSBrZXk9e2luZGV4fSAvPlxuICAgICAgICAgICAgICAgICAgey8qIDwvQm94PiAqL31cbiAgICAgICAgICAgICAgICAgIDxCb3ggey4uLmhpZGVEZWxldGV9IGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZUJ1dHRvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxNZERlbGV0ZUZvcmV2ZXIgY29sb3I9XCIjRTJFOEYwXCIgc2l6ZT1cIjQzcHhcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICA8L1N3aXBlYWJsZUxpc3RJdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICA8L1N3aXBlYWJsZUxpc3Q+XG4gICAgICB7cHJvcHMuZGF0YSAmJiBwcm9wcy5kYXRhLnRhc2tzLmxlbmd0aCA+IDMgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgYmc9XCJub25lXCJcbiAgICAgICAgICBtYXJnaW5Ub3A9XCIwICFpbXBvcnRhbnRcIlxuICAgICAgICAgIF9ob3Zlcj17eyBiZzogXCJub25lXCIgfX1cbiAgICAgICAgICBfYWN0aXZlPXt7IGJnOiBcIm5vbmVcIiB9fVxuICAgICAgICAgIGNvbG9yPVwiIzJCNkNCMFwiXG4gICAgICAgICAgZm9udFdlaWdodD1cIjYwMFwiXG4gICAgICAgICAgb25DbGljaz17c2hvd0FsbH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzaG93QWxsVGFzayA/IFwiSGlkZVwiIDogXCJTaG93IEFsbFwifVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9TdGFjaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZGF5VGFza0xpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFsZXJ0IiwiQWxlcnRJY29uIiwiQm94IiwiQnV0dG9uIiwiRmxleCIsIlN0YWNrIiwiVGV4dCIsIlRhc2tDYXJkIiwidXNlRW1haWxDb250ZXh0IiwiU3dpcGVhYmxlTGlzdCIsIlN3aXBlYWJsZUxpc3RJdGVtIiwiU3dpcGVBY3Rpb24iLCJUcmFpbGluZ0FjdGlvbnMiLCJNZERlbGV0ZUZvcmV2ZXIiLCJkZWxldGVBY3Rpb25TdHlsZSIsImhpZGVEZWxldGUiLCJkZWxldGVUYXNrIiwic3R5bGVzIiwiVG9kYXlUYXNrTGlzdCIsInByb3BzIiwib25Td2lwZURlbGV0ZSIsInRhc2tJZCIsImVtYWlsIiwidGhlbiIsIm11dGF0ZSIsImluaXRpYWxpemVkVmFsIiwiZGF0YSIsInRhc2tzIiwiYWxsVGFza3MiLCJzZXRhbGxUYXNrcyIsInNob3dBbGxUYXNrIiwic2V0c2hvd0FsbFRhc2siLCJzaG93QWxsIiwidHJhaWxpbmdBY3Rpb25zIiwiZGVzdHJ1Y3RpdmUiLCJvbkNsaWNrIiwiY29sb3IiLCJzaXplIiwiZXJyb3IiLCJzdGF0dXMiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJhbGlnbiIsImZpbHRlciIsIml0ZW0iLCJpbmRleCIsImVuZEluZGV4IiwibGVuZ3RoIiwibWFwIiwidGFzayIsIl9pZCIsIndpZHRoIiwiY2xhc3NOYW1lIiwiZGVsZXRlQnV0dG9uIiwiYmciLCJfaG92ZXIiLCJfYWN0aXZlIiwiZm9udFdlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/home/TodayTaskList.tsx\n");

/***/ })

});