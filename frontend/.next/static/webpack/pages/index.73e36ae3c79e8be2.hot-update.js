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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _tasks_TaskCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/TaskCard */ \"./src/components/tasks/TaskCard.tsx\");\n/* harmony import */ var _pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/EmailContext */ \"./src/pages/EmailContext.tsx\");\n/* harmony import */ var react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-swipeable-list */ \"./node_modules/react-swipeable-list/dist/react-swipeable-list.umd.js\");\n/* harmony import */ var react_swipeable_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/home/styledComponents */ \"./src/styles/home/styledComponents.ts\");\n/* harmony import */ var react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-swipeable-list/dist/styles.css */ \"./node_modules/react-swipeable-list/dist/styles.css\");\n/* harmony import */ var react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _functions_tasks_deleteTask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions/tasks/deleteTask */ \"./src/functions/tasks/deleteTask.ts\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TodayTaskList = function(props) {\n    var _this1 = _this;\n    var onSwipeDelete = function onSwipeDelete(taskId) {\n        (0,_functions_tasks_deleteTask__WEBPACK_IMPORTED_MODULE_7__.deleteTask)(email, taskId).then(function() {\n            return props.mutate();\n        });\n    };\n    _s();\n    var initializedVal = props.data && props.data.tasks ? props.data.tasks : null;\n    // console.log(\"initializedVal = \" + initializedVal);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initializedVal), allTasks = ref[0], setallTasks = ref[1];\n    // useEffect(() => {\n    //   console.log(\"-->set all tasks\" + JSON.stringify(allTasks));\n    //   if (props.data && props.data) setallTasks(props.data.tasks);\n    //   console.log(\"-->set new tasks = \" + JSON.stringify(allTasks));\n    //   // console.log(\"---------->props data is changed\");\n    // }, [props.data]);\n    // console.log(\"allTasks = \" + allTasks);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showAllTask = ref1[0], setshowAllTask = ref1[1];\n    var showAll = function() {\n        setshowAllTask(!showAllTask);\n    };\n    var email = (0,_pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__.useEmailContext)().email;\n    var trailingActions = function(taskId) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.TrailingActions, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeAction, {\n                destructive: true,\n                onClick: function() {\n                    return onSwipeDelete(taskId);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, _objectSpread({}, _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__.deleteActionStyle, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDeleteForever, {\n                        color: \"#E2E8F0\",\n                        size: \"43px\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, _this1)\n                }), void 0, false, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n            lineNumber: 59,\n            columnNumber: 5\n        }, _this1);\n    };\n    if (props.error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Alert, {\n        status: \"error\",\n        marginTop: \"3%\",\n        padding: \"12px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.AlertIcon, {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                fontSize: \"sm\",\n                children: \"Failed to fetch your tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n        lineNumber: 70,\n        columnNumber: 7\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n        align: \"stretch\",\n        marginTop: \"3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeableList, {\n                children: props.data && props.data.tasks.filter(function(item, index) {\n                    var endIndex = showAllTask ? props.data.tasks.length : 3;\n                    return index < endIndex;\n                }).map(function(task, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeableListItem, {\n                        trailingActions: trailingActions(task._id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, {\n                            width: \"100%\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tasks_TaskCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    task: task\n                                }, index, false, {\n                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 19\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, _objectSpread({}, _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__.hideDelete, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDeleteForever, {\n                                        color: \"#E2E8F0\",\n                                        size: \"43px\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 21\n                                    }, _this1)\n                                }), void 0, false, {\n                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 19\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 17\n                        }, _this1)\n                    }, task._id, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 15\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, _this),\n            props.data && props.data.tasks.length > 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                bg: \"none\",\n                marginTop: \"0 !important\",\n                _hover: {\n                    bg: \"none\"\n                },\n                _active: {\n                    bg: \"none\"\n                },\n                color: \"#2B6CB0\",\n                fontWeight: \"600\",\n                onClick: showAll,\n                children: showAllTask ? \"Hide\" : \"Show All\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 104,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, _this);\n};\n_s(TodayTaskList, \"IAJQFfKPWjTmNgG8Du6uFEJfPQQ=\", false, function() {\n    return [\n        _pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__.useEmailContext\n    ];\n});\n_c = TodayTaskList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodayTaskList);\nvar _c;\n$RefreshReg$(_c, \"TodayTaskList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL1RvZGF5VGFza0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFTekI7QUFDZTtBQUNrQjtBQVE3QjtBQUNtQjtBQUtMO0FBQ0U7QUFDZ0I7O0FBRTlELElBQU1tQixhQUFhLEdBQUcsU0FBQ0MsS0FBa0QsRUFBSzs7UUF3Qm5FQyxhQUFhLEdBQXRCLFNBQVNBLGFBQWEsQ0FBQ0MsTUFBYyxFQUFFO1FBQ3JDSix1RUFBVSxDQUFDSyxLQUFLLEVBQUVELE1BQU0sQ0FBQyxDQUFDRSxJQUFJLENBQUM7bUJBQU1KLEtBQUssQ0FBQ0ssTUFBTSxFQUFFO1NBQUEsQ0FBQyxDQUFDO0tBQ3REOztJQXpCRCxJQUFNQyxjQUFjLEdBQ2xCTixLQUFLLENBQUNPLElBQUksSUFBSVAsS0FBSyxDQUFDTyxJQUFJLENBQUNDLEtBQUssR0FBR1IsS0FBSyxDQUFDTyxJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJO0lBRTFELHFEQUFxRDtJQUNyRCxJQUFnQzNCLEdBQXdCLEdBQXhCQSwrQ0FBUSxDQUFDeUIsY0FBYyxDQUFDLEVBbEMxRCxRQWtDaUIsR0FBaUJ6QixHQUF3QixHQUF6QyxFQWxDakIsV0FrQzhCLEdBQUlBLEdBQXdCLEdBQTVCO0lBRTVCLG9CQUFvQjtJQUNwQixnRUFBZ0U7SUFFaEUsaUVBQWlFO0lBRWpFLG1FQUFtRTtJQUNuRSx3REFBd0Q7SUFDeEQsb0JBQW9CO0lBRXBCLHlDQUF5QztJQUN6QyxJQUFzQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQTlDdkQsV0E4Q29CLEdBQW9CQSxJQUFlLEdBQW5DLEVBOUNwQixjQThDb0MsR0FBSUEsSUFBZSxHQUFuQjtJQUNsQyxJQUFNZ0MsT0FBTyxHQUFHLFdBQU07UUFDcEJELGNBQWMsQ0FBQyxDQUFDRCxXQUFXLENBQUMsQ0FBQztLQUM5QjtJQUVELElBQU0sS0FBTyxHQUFLckIsb0VBQWUsRUFBRSxDQUEzQmEsS0FBSztJQU1iLElBQU1XLGVBQWUsR0FBRyxTQUFDWixNQUFjOzZCQUNyQyw4REFBQ1IsaUVBQWU7c0JBQ2QsNEVBQUNELDZEQUFXO2dCQUFDc0IsV0FBVyxFQUFFLElBQUk7Z0JBQUVDLE9BQU8sRUFBRTsyQkFBTWYsYUFBYSxDQUFDQyxNQUFNLENBQUM7aUJBQUE7MEJBQ2xFLDRFQUFDaEIsa0RBQUksb0JBQUtVLDRFQUFpQjs4QkFDekIsNEVBQUNELDJEQUFlO3dCQUFDc0IsS0FBSyxFQUFDLFNBQVM7d0JBQUNDLElBQUksRUFBQyxNQUFNOzs7Ozs4QkFBRzs7Ozs7MEJBQzFDOzs7OztzQkFDSzs7Ozs7a0JBQ0U7S0FDbkI7SUFFRCxJQUFJbEIsS0FBSyxDQUFDbUIsS0FBSyxFQUNiLHFCQUNFLDhEQUFDckMsbURBQUs7UUFBQ3NDLE1BQU0sRUFBQyxPQUFPO1FBQUNDLFNBQVMsRUFBQyxJQUFJO1FBQUNDLE9BQU8sRUFBQyxNQUFNOzswQkFDakQsOERBQUN2Qyx1REFBUzs7OztxQkFBRzswQkFDYiw4REFBQ0ssa0RBQUk7Z0JBQUNtQyxRQUFRLEVBQUMsSUFBSTswQkFBQyw0QkFBMEI7Ozs7O3FCQUFPOzs7Ozs7YUFDL0MsQ0FDUjtJQUVKLHFCQUNFLDhEQUFDcEMsbURBQUs7UUFBQ3FDLEtBQUssRUFBQyxTQUFTO1FBQUNILFNBQVMsRUFBQyxHQUFHOzswQkFDbEMsOERBQUM5QiwrREFBYTswQkFDWFMsS0FBSyxDQUFDTyxJQUFJLElBQ1RQLEtBQUssQ0FBQ08sSUFBSSxDQUFDQyxLQUFLLENBQ2JpQixNQUFNLENBQUMsU0FBQ0MsSUFBb0IsRUFBRUMsS0FBYSxFQUFLO29CQUMvQyxJQUFNQyxRQUFRLEdBQVdqQixXQUFXLEdBQ2hDWCxLQUFLLENBQUNPLElBQUksQ0FBQ0MsS0FBSyxDQUFDcUIsTUFBTSxHQUN2QixDQUFDO29CQUNMLE9BQU9GLEtBQUssR0FBR0MsUUFBUSxDQUFDO2lCQUN6QixDQUFDLENBQ0RFLEdBQUcsQ0FBQyxTQUFDQyxJQUFvQixFQUFFSixLQUFhO3lDQUN2Qyw4REFBQ25DLG1FQUFpQjt3QkFDaEJzQixlQUFlLEVBQUVBLGVBQWUsQ0FBQ2lCLElBQUksQ0FBQ0MsR0FBRyxDQUFDO2tDQUcxQyw0RUFBQzlDLGtEQUFJOzRCQUFDK0MsS0FBSyxFQUFDLE1BQU07OzhDQUVoQiw4REFBQzVDLHVEQUFRO29DQUFDMEMsSUFBSSxFQUFFQSxJQUFJO21DQUFPSixLQUFLOzs7OzBDQUFJOzhDQUVwQyw4REFBQzNDLGlEQUFHLG9CQUFLYSxxRUFBVTs4Q0FDakIsNEVBQUNGLDJEQUFlO3dDQUFDc0IsS0FBSyxFQUFDLFNBQVM7d0NBQUNDLElBQUksRUFBQyxNQUFNOzs7Ozs4Q0FBSTs7Ozs7MENBQzVDOzs7Ozs7a0NBQ0Q7dUJBVEZhLElBQUksQ0FBQ0MsR0FBRzs7Ozs4QkFVSztpQkFDckIsQ0FBQzs7Ozs7cUJBQ1E7WUFDZmhDLEtBQUssQ0FBQ08sSUFBSSxJQUFJUCxLQUFLLENBQUNPLElBQUksQ0FBQ0MsS0FBSyxDQUFDcUIsTUFBTSxHQUFHLENBQUMsa0JBQ3hDLDhEQUFDNUMsb0RBQU07Z0JBQ0xpRCxFQUFFLEVBQUMsTUFBTTtnQkFDVGIsU0FBUyxFQUFDLGNBQWM7Z0JBQ3hCYyxNQUFNLEVBQUU7b0JBQUVELEVBQUUsRUFBRSxNQUFNO2lCQUFFO2dCQUN0QkUsT0FBTyxFQUFFO29CQUFFRixFQUFFLEVBQUUsTUFBTTtpQkFBRTtnQkFDdkJqQixLQUFLLEVBQUMsU0FBUztnQkFDZm9CLFVBQVUsRUFBQyxLQUFLO2dCQUNoQnJCLE9BQU8sRUFBRUgsT0FBTzswQkFFZkYsV0FBVyxHQUFHLE1BQU0sR0FBRyxVQUFVOzs7OztxQkFDM0I7Ozs7OzthQUVMLENBQ1I7Q0FDSDtHQXhGS1osYUFBYTs7UUFzQkNULGdFQUFlOzs7QUF0QjdCUyxLQUFBQSxhQUFhO0FBMEZuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hvbWUvVG9kYXlUYXNrTGlzdC50c3g/YmYwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQWxlcnQsXG4gIEFsZXJ0SWNvbixcbiAgQm94LFxuICBCdXR0b24sXG4gIEZsZXgsXG4gIFN0YWNrLFxuICBUZXh0LFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFRhc2tDYXJkIGZyb20gXCIuLi90YXNrcy9UYXNrQ2FyZFwiO1xuaW1wb3J0IHsgdXNlRW1haWxDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BhZ2VzL0VtYWlsQ29udGV4dFwiO1xuaW1wb3J0IHsgVGFza0Zvcm1WYWx1ZXMgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIExlYWRpbmdBY3Rpb25zLFxuICBTd2lwZWFibGVMaXN0LFxuICBTd2lwZWFibGVMaXN0SXRlbSxcbiAgU3dpcGVBY3Rpb24sXG4gIFRyYWlsaW5nQWN0aW9ucyxcbn0gZnJvbSBcInJlYWN0LXN3aXBlYWJsZS1saXN0XCI7XG5pbXBvcnQgeyBNZERlbGV0ZUZvcmV2ZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB7XG4gIGRlbGV0ZUFjdGlvblN0eWxlLFxuICBoaWRlRGVsZXRlLFxuICBob3ZlclNob3dEZWxldGUsXG59IGZyb20gXCIuLi8uLi9zdHlsZXMvaG9tZS9zdHlsZWRDb21wb25lbnRzXCI7XG5pbXBvcnQgXCJyZWFjdC1zd2lwZWFibGUtbGlzdC9kaXN0L3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IGRlbGV0ZVRhc2sgfSBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL3Rhc2tzL2RlbGV0ZVRhc2tcIjtcblxuY29uc3QgVG9kYXlUYXNrTGlzdCA9IChwcm9wczogeyBkYXRhOiBhbnk7IGVycm9yOiBhbnk7IG11dGF0ZTogRnVuY3Rpb24gfSkgPT4ge1xuICBjb25zdCBpbml0aWFsaXplZFZhbCA9XG4gICAgcHJvcHMuZGF0YSAmJiBwcm9wcy5kYXRhLnRhc2tzID8gcHJvcHMuZGF0YS50YXNrcyA6IG51bGw7XG5cbiAgLy8gY29uc29sZS5sb2coXCJpbml0aWFsaXplZFZhbCA9IFwiICsgaW5pdGlhbGl6ZWRWYWwpO1xuICBjb25zdCBbYWxsVGFza3MsIHNldGFsbFRhc2tzXSA9IHVzZVN0YXRlKGluaXRpYWxpemVkVmFsKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKFwiLS0+c2V0IGFsbCB0YXNrc1wiICsgSlNPTi5zdHJpbmdpZnkoYWxsVGFza3MpKTtcblxuICAvLyAgIGlmIChwcm9wcy5kYXRhICYmIHByb3BzLmRhdGEpIHNldGFsbFRhc2tzKHByb3BzLmRhdGEudGFza3MpO1xuXG4gIC8vICAgY29uc29sZS5sb2coXCItLT5zZXQgbmV3IHRhc2tzID0gXCIgKyBKU09OLnN0cmluZ2lmeShhbGxUYXNrcykpO1xuICAvLyAgIC8vIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLT5wcm9wcyBkYXRhIGlzIGNoYW5nZWRcIik7XG4gIC8vIH0sIFtwcm9wcy5kYXRhXSk7XG5cbiAgLy8gY29uc29sZS5sb2coXCJhbGxUYXNrcyA9IFwiICsgYWxsVGFza3MpO1xuICBjb25zdCBbc2hvd0FsbFRhc2ssIHNldHNob3dBbGxUYXNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc2hvd0FsbCA9ICgpID0+IHtcbiAgICBzZXRzaG93QWxsVGFzayghc2hvd0FsbFRhc2spO1xuICB9O1xuXG4gIGNvbnN0IHsgZW1haWwgfSA9IHVzZUVtYWlsQ29udGV4dCgpO1xuXG4gIGZ1bmN0aW9uIG9uU3dpcGVEZWxldGUodGFza0lkOiBzdHJpbmcpIHtcbiAgICBkZWxldGVUYXNrKGVtYWlsLCB0YXNrSWQpLnRoZW4oKCkgPT4gcHJvcHMubXV0YXRlKCkpO1xuICB9XG5cbiAgY29uc3QgdHJhaWxpbmdBY3Rpb25zID0gKHRhc2tJZDogc3RyaW5nKSA9PiAoXG4gICAgPFRyYWlsaW5nQWN0aW9ucz5cbiAgICAgIDxTd2lwZUFjdGlvbiBkZXN0cnVjdGl2ZT17dHJ1ZX0gb25DbGljaz17KCkgPT4gb25Td2lwZURlbGV0ZSh0YXNrSWQpfT5cbiAgICAgICAgPEZsZXggey4uLmRlbGV0ZUFjdGlvblN0eWxlfT5cbiAgICAgICAgICA8TWREZWxldGVGb3JldmVyIGNvbG9yPVwiI0UyRThGMFwiIHNpemU9XCI0M3B4XCIgLz5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9Td2lwZUFjdGlvbj5cbiAgICA8L1RyYWlsaW5nQWN0aW9ucz5cbiAgKTtcblxuICBpZiAocHJvcHMuZXJyb3IpXG4gICAgcmV0dXJuIChcbiAgICAgIDxBbGVydCBzdGF0dXM9XCJlcnJvclwiIG1hcmdpblRvcD1cIjMlXCIgcGFkZGluZz1cIjEycHhcIj5cbiAgICAgICAgPEFsZXJ0SWNvbiAvPlxuICAgICAgICA8VGV4dCBmb250U2l6ZT1cInNtXCI+RmFpbGVkIHRvIGZldGNoIHlvdXIgdGFza3M8L1RleHQ+XG4gICAgICA8L0FsZXJ0PlxuICAgICk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2sgYWxpZ249XCJzdHJldGNoXCIgbWFyZ2luVG9wPVwiM1wiPlxuICAgICAgPFN3aXBlYWJsZUxpc3Q+XG4gICAgICAgIHtwcm9wcy5kYXRhICYmXG4gICAgICAgICAgcHJvcHMuZGF0YS50YXNrc1xuICAgICAgICAgICAgLmZpbHRlcigoaXRlbTogVGFza0Zvcm1WYWx1ZXMsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZW5kSW5kZXg6IG51bWJlciA9IHNob3dBbGxUYXNrXG4gICAgICAgICAgICAgICAgPyBwcm9wcy5kYXRhLnRhc2tzLmxlbmd0aFxuICAgICAgICAgICAgICAgIDogMztcbiAgICAgICAgICAgICAgcmV0dXJuIGluZGV4IDwgZW5kSW5kZXg7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcCgodGFzazogVGFza0Zvcm1WYWx1ZXMsIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgPFN3aXBlYWJsZUxpc3RJdGVtXG4gICAgICAgICAgICAgICAgdHJhaWxpbmdBY3Rpb25zPXt0cmFpbGluZ0FjdGlvbnModGFzay5faWQpfVxuICAgICAgICAgICAgICAgIGtleT17dGFzay5faWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmxleCB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiA8Qm94IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj4gKi99XG4gICAgICAgICAgICAgICAgICA8VGFza0NhcmQgdGFzaz17dGFza30ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgICAgICAgICAgIHsvKiA8L0JveD4gKi99XG4gICAgICAgICAgICAgICAgICA8Qm94IHsuLi5oaWRlRGVsZXRlfT5cbiAgICAgICAgICAgICAgICAgICAgPE1kRGVsZXRlRm9yZXZlciBjb2xvcj1cIiNFMkU4RjBcIiBzaXplPVwiNDNweFwiICAvPlxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICA8L1N3aXBlYWJsZUxpc3RJdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICA8L1N3aXBlYWJsZUxpc3Q+XG4gICAgICB7cHJvcHMuZGF0YSAmJiBwcm9wcy5kYXRhLnRhc2tzLmxlbmd0aCA+IDMgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgYmc9XCJub25lXCJcbiAgICAgICAgICBtYXJnaW5Ub3A9XCIwICFpbXBvcnRhbnRcIlxuICAgICAgICAgIF9ob3Zlcj17eyBiZzogXCJub25lXCIgfX1cbiAgICAgICAgICBfYWN0aXZlPXt7IGJnOiBcIm5vbmVcIiB9fVxuICAgICAgICAgIGNvbG9yPVwiIzJCNkNCMFwiXG4gICAgICAgICAgZm9udFdlaWdodD1cIjYwMFwiXG4gICAgICAgICAgb25DbGljaz17c2hvd0FsbH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzaG93QWxsVGFzayA/IFwiSGlkZVwiIDogXCJTaG93IEFsbFwifVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9TdGFjaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZGF5VGFza0xpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFsZXJ0IiwiQWxlcnRJY29uIiwiQm94IiwiQnV0dG9uIiwiRmxleCIsIlN0YWNrIiwiVGV4dCIsIlRhc2tDYXJkIiwidXNlRW1haWxDb250ZXh0IiwiU3dpcGVhYmxlTGlzdCIsIlN3aXBlYWJsZUxpc3RJdGVtIiwiU3dpcGVBY3Rpb24iLCJUcmFpbGluZ0FjdGlvbnMiLCJNZERlbGV0ZUZvcmV2ZXIiLCJkZWxldGVBY3Rpb25TdHlsZSIsImhpZGVEZWxldGUiLCJkZWxldGVUYXNrIiwiVG9kYXlUYXNrTGlzdCIsInByb3BzIiwib25Td2lwZURlbGV0ZSIsInRhc2tJZCIsImVtYWlsIiwidGhlbiIsIm11dGF0ZSIsImluaXRpYWxpemVkVmFsIiwiZGF0YSIsInRhc2tzIiwiYWxsVGFza3MiLCJzZXRhbGxUYXNrcyIsInNob3dBbGxUYXNrIiwic2V0c2hvd0FsbFRhc2siLCJzaG93QWxsIiwidHJhaWxpbmdBY3Rpb25zIiwiZGVzdHJ1Y3RpdmUiLCJvbkNsaWNrIiwiY29sb3IiLCJzaXplIiwiZXJyb3IiLCJzdGF0dXMiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJhbGlnbiIsImZpbHRlciIsIml0ZW0iLCJpbmRleCIsImVuZEluZGV4IiwibGVuZ3RoIiwibWFwIiwidGFzayIsIl9pZCIsIndpZHRoIiwiYmciLCJfaG92ZXIiLCJfYWN0aXZlIiwiZm9udFdlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/home/TodayTaskList.tsx\n");

/***/ })

});