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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _tasks_TaskCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/TaskCard */ \"./src/components/tasks/TaskCard.tsx\");\n/* harmony import */ var _pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/EmailContext */ \"./src/pages/EmailContext.tsx\");\n/* harmony import */ var react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-swipeable-list */ \"./node_modules/react-swipeable-list/dist/react-swipeable-list.umd.js\");\n/* harmony import */ var react_swipeable_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/home/styledComponents */ \"./src/styles/home/styledComponents.ts\");\n/* harmony import */ var react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-swipeable-list/dist/styles.css */ \"./node_modules/react-swipeable-list/dist/styles.css\");\n/* harmony import */ var react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _functions_tasks_deleteTask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions/tasks/deleteTask */ \"./src/functions/tasks/deleteTask.ts\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TodayTaskList = function(props) {\n    var _this1 = _this;\n    var onSwipeDelete = function onSwipeDelete(taskId) {\n        (0,_functions_tasks_deleteTask__WEBPACK_IMPORTED_MODULE_7__.deleteTask)(email, taskId).then(function() {\n            return props.mutate();\n        });\n    };\n    _s();\n    var initializedVal = props.data && props.data.tasks ? props.data.tasks : null;\n    // console.log(\"initializedVal = \" + initializedVal);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initializedVal), allTasks = ref[0], setallTasks = ref[1];\n    // useEffect(() => {\n    //   console.log(\"-->set all tasks\" + JSON.stringify(allTasks));\n    //   if (props.data && props.data) setallTasks(props.data.tasks);\n    //   console.log(\"-->set new tasks = \" + JSON.stringify(allTasks));\n    //   // console.log(\"---------->props data is changed\");\n    // }, [props.data]);\n    // console.log(\"allTasks = \" + allTasks);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showAllTask = ref1[0], setshowAllTask = ref1[1];\n    var showAll = function() {\n        setshowAllTask(!showAllTask);\n    };\n    var email = (0,_pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__.useEmailContext)().email;\n    var trailingActions = function(taskId) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.TrailingActions, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeAction, {\n                destructive: true,\n                onClick: function() {\n                    return onSwipeDelete(taskId);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, _objectSpread({}, _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__.deleteActionStyle, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDeleteForever, {\n                        color: \"#E2E8F0\",\n                        size: \"43px\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, _this1)\n                }), void 0, false, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n            lineNumber: 59,\n            columnNumber: 5\n        }, _this1);\n    };\n    if (props.error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Alert, {\n        status: \"error\",\n        marginTop: \"3%\",\n        padding: \"12px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.AlertIcon, {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                fontSize: \"sm\",\n                children: \"Failed to fetch your tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n        lineNumber: 70,\n        columnNumber: 7\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n        align: \"stretch\",\n        marginTop: \"3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeableList, {\n                children: props.data && props.data.tasks.filter(function(item, index) {\n                    var endIndex = showAllTask ? props.data.tasks.length : 3;\n                    return index < endIndex;\n                }).map(function(task, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeableListItem, {\n                        trailingActions: trailingActions(task._id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, {\n                            width: \"100%\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                                    width: \"100%\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tasks_TaskCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        task: task\n                                    }, index, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 21\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 19\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, _objectSpread({}, _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__.hideDelete, {\n                                    _hover: {\n                                        display: \"block\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDeleteForever, {\n                                        color: \"#E2E8F0\",\n                                        size: \"43px\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 21\n                                    }, _this1)\n                                }), void 0, false, {\n                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 19\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 17\n                        }, _this1)\n                    }, task._id, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 15\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, _this),\n            props.data && props.data.tasks.length > 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                bg: \"none\",\n                marginTop: \"0 !important\",\n                _hover: {\n                    bg: \"none\"\n                },\n                _active: {\n                    bg: \"none\"\n                },\n                color: \"#2B6CB0\",\n                fontWeight: \"600\",\n                onClick: showAll,\n                children: showAllTask ? \"Hide\" : \"Show All\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 104,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, _this);\n};\n_s(TodayTaskList, \"IAJQFfKPWjTmNgG8Du6uFEJfPQQ=\", false, function() {\n    return [\n        _pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__.useEmailContext\n    ];\n});\n_c = TodayTaskList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodayTaskList);\nvar _c;\n$RefreshReg$(_c, \"TodayTaskList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL1RvZGF5VGFza0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFTekI7QUFDZTtBQUNrQjtBQVE3QjtBQUNtQjtBQUtMO0FBQ0U7QUFDZ0I7O0FBRTlELElBQU1tQixhQUFhLEdBQUcsU0FBQ0MsS0FBa0QsRUFBSzs7UUF3Qm5FQyxhQUFhLEdBQXRCLFNBQVNBLGFBQWEsQ0FBQ0MsTUFBYyxFQUFFO1FBQ3JDSix1RUFBVSxDQUFDSyxLQUFLLEVBQUVELE1BQU0sQ0FBQyxDQUFDRSxJQUFJLENBQUM7bUJBQU1KLEtBQUssQ0FBQ0ssTUFBTSxFQUFFO1NBQUEsQ0FBQyxDQUFDO0tBQ3REOztJQXpCRCxJQUFNQyxjQUFjLEdBQ2xCTixLQUFLLENBQUNPLElBQUksSUFBSVAsS0FBSyxDQUFDTyxJQUFJLENBQUNDLEtBQUssR0FBR1IsS0FBSyxDQUFDTyxJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJO0lBRTFELHFEQUFxRDtJQUNyRCxJQUFnQzNCLEdBQXdCLEdBQXhCQSwrQ0FBUSxDQUFDeUIsY0FBYyxDQUFDLEVBbEMxRCxRQWtDaUIsR0FBaUJ6QixHQUF3QixHQUF6QyxFQWxDakIsV0FrQzhCLEdBQUlBLEdBQXdCLEdBQTVCO0lBRTVCLG9CQUFvQjtJQUNwQixnRUFBZ0U7SUFFaEUsaUVBQWlFO0lBRWpFLG1FQUFtRTtJQUNuRSx3REFBd0Q7SUFDeEQsb0JBQW9CO0lBRXBCLHlDQUF5QztJQUN6QyxJQUFzQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQTlDdkQsV0E4Q29CLEdBQW9CQSxJQUFlLEdBQW5DLEVBOUNwQixjQThDb0MsR0FBSUEsSUFBZSxHQUFuQjtJQUNsQyxJQUFNZ0MsT0FBTyxHQUFHLFdBQU07UUFDcEJELGNBQWMsQ0FBQyxDQUFDRCxXQUFXLENBQUMsQ0FBQztLQUM5QjtJQUVELElBQU0sS0FB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YUFBYTtBQTBGbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob21lL1RvZGF5VGFza0xpc3QudHN4P2JmMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEFsZXJ0LFxuICBBbGVydEljb24sXG4gIEJveCxcbiAgQnV0dG9uLFxuICBGbGV4LFxuICBTdGFjayxcbiAgVGV4dCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBUYXNrQ2FyZCBmcm9tIFwiLi4vdGFza3MvVGFza0NhcmRcIjtcbmltcG9ydCB7IHVzZUVtYWlsQ29udGV4dCB9IGZyb20gXCIuLi8uLi9wYWdlcy9FbWFpbENvbnRleHRcIjtcbmltcG9ydCB7IFRhc2tGb3JtVmFsdWVzIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBMZWFkaW5nQWN0aW9ucyxcbiAgU3dpcGVhYmxlTGlzdCxcbiAgU3dpcGVhYmxlTGlzdEl0ZW0sXG4gIFN3aXBlQWN0aW9uLFxuICBUcmFpbGluZ0FjdGlvbnMsXG59IGZyb20gXCJyZWFjdC1zd2lwZWFibGUtbGlzdFwiO1xuaW1wb3J0IHsgTWREZWxldGVGb3JldmVyIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQge1xuICBkZWxldGVBY3Rpb25TdHlsZSxcbiAgaGlkZURlbGV0ZSxcbiAgaG92ZXJTaG93RGVsZXRlLFxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL2hvbWUvc3R5bGVkQ29tcG9uZW50c1wiO1xuaW1wb3J0IFwicmVhY3Qtc3dpcGVhYmxlLWxpc3QvZGlzdC9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBkZWxldGVUYXNrIH0gZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy90YXNrcy9kZWxldGVUYXNrXCI7XG5cbmNvbnN0IFRvZGF5VGFza0xpc3QgPSAocHJvcHM6IHsgZGF0YTogYW55OyBlcnJvcjogYW55OyBtdXRhdGU6IEZ1bmN0aW9uIH0pID0+IHtcbiAgY29uc3QgaW5pdGlhbGl6ZWRWYWwgPVxuICAgIHByb3BzLmRhdGEgJiYgcHJvcHMuZGF0YS50YXNrcyA/IHByb3BzLmRhdGEudGFza3MgOiBudWxsO1xuXG4gIC8vIGNvbnNvbGUubG9nKFwiaW5pdGlhbGl6ZWRWYWwgPSBcIiArIGluaXRpYWxpemVkVmFsKTtcbiAgY29uc3QgW2FsbFRhc2tzLCBzZXRhbGxUYXNrc10gPSB1c2VTdGF0ZShpbml0aWFsaXplZFZhbCk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhcIi0tPnNldCBhbGwgdGFza3NcIiArIEpTT04uc3RyaW5naWZ5KGFsbFRhc2tzKSk7XG5cbiAgLy8gICBpZiAocHJvcHMuZGF0YSAmJiBwcm9wcy5kYXRhKSBzZXRhbGxUYXNrcyhwcm9wcy5kYXRhLnRhc2tzKTtcblxuICAvLyAgIGNvbnNvbGUubG9nKFwiLS0+c2V0IG5ldyB0YXNrcyA9IFwiICsgSlNPTi5zdHJpbmdpZnkoYWxsVGFza3MpKTtcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0+cHJvcHMgZGF0YSBpcyBjaGFuZ2VkXCIpO1xuICAvLyB9LCBbcHJvcHMuZGF0YV0pO1xuXG4gIC8vIGNvbnNvbGUubG9nKFwiYWxsVGFza3MgPSBcIiArIGFsbFRhc2tzKTtcbiAgY29uc3QgW3Nob3dBbGxUYXNrLCBzZXRzaG93QWxsVGFza10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNob3dBbGwgPSAoKSA9PiB7XG4gICAgc2V0c2hvd0FsbFRhc2soIXNob3dBbGxUYXNrKTtcbiAgfTtcblxuICBjb25zdCB7IGVtYWlsIH0gPSB1c2VFbWFpbENvbnRleHQoKTtcblxuICBmdW5jdGlvbiBvblN3aXBlRGVsZXRlKHRhc2tJZDogc3RyaW5nKSB7XG4gICAgZGVsZXRlVGFzayhlbWFpbCwgdGFza0lkKS50aGVuKCgpID0+IHByb3BzLm11dGF0ZSgpKTtcbiAgfVxuXG4gIGNvbnN0IHRyYWlsaW5nQWN0aW9ucyA9ICh0YXNrSWQ6IHN0cmluZykgPT4gKFxuICAgIDxUcmFpbGluZ0FjdGlvbnM+XG4gICAgICA8U3dpcGVBY3Rpb24gZGVzdHJ1Y3RpdmU9e3RydWV9IG9uQ2xpY2s9eygpID0+IG9uU3dpcGVEZWxldGUodGFza0lkKX0+XG4gICAgICAgIDxGbGV4IHsuLi5kZWxldGVBY3Rpb25TdHlsZX0+XG4gICAgICAgICAgPE1kRGVsZXRlRm9yZXZlciBjb2xvcj1cIiNFMkU4RjBcIiBzaXplPVwiNDNweFwiIC8+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvU3dpcGVBY3Rpb24+XG4gICAgPC9UcmFpbGluZ0FjdGlvbnM+XG4gICk7XG5cbiAgaWYgKHByb3BzLmVycm9yKVxuICAgIHJldHVybiAoXG4gICAgICA8QWxlcnQgc3RhdHVzPVwiZXJyb3JcIiBtYXJnaW5Ub3A9XCIzJVwiIHBhZGRpbmc9XCIxMnB4XCI+XG4gICAgICAgIDxBbGVydEljb24gLz5cbiAgICAgICAgPFRleHQgZm9udFNpemU9XCJzbVwiPkZhaWxlZCB0byBmZXRjaCB5b3VyIHRhc2tzPC9UZXh0PlxuICAgICAgPC9BbGVydD5cbiAgICApO1xuXG4gIHJldHVybiAoXG4gICAgPFN0YWNrIGFsaWduPVwic3RyZXRjaFwiIG1hcmdpblRvcD1cIjNcIj5cbiAgICAgIDxTd2lwZWFibGVMaXN0PlxuICAgICAgICB7cHJvcHMuZGF0YSAmJlxuICAgICAgICAgIHByb3BzLmRhdGEudGFza3NcbiAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW06IFRhc2tGb3JtVmFsdWVzLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGVuZEluZGV4OiBudW1iZXIgPSBzaG93QWxsVGFza1xuICAgICAgICAgICAgICAgID8gcHJvcHMuZGF0YS50YXNrcy5sZW5ndGhcbiAgICAgICAgICAgICAgICA6IDM7XG4gICAgICAgICAgICAgIHJldHVybiBpbmRleCA8IGVuZEluZGV4O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoKHRhc2s6IFRhc2tGb3JtVmFsdWVzLCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgIDxTd2lwZWFibGVMaXN0SXRlbVxuICAgICAgICAgICAgICAgIHRyYWlsaW5nQWN0aW9ucz17dHJhaWxpbmdBY3Rpb25zKHRhc2suX2lkKX1cbiAgICAgICAgICAgICAgICBrZXk9e3Rhc2suX2lkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZsZXggd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgICAgICA8VGFza0NhcmQgdGFzaz17dGFza30ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgPEJveCB7Li4uaGlkZURlbGV0ZX0gX2hvdmVyPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPE1kRGVsZXRlRm9yZXZlciBjb2xvcj1cIiNFMkU4RjBcIiBzaXplPVwiNDNweFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgIDwvU3dpcGVhYmxlTGlzdEl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgIDwvU3dpcGVhYmxlTGlzdD5cbiAgICAgIHtwcm9wcy5kYXRhICYmIHByb3BzLmRhdGEudGFza3MubGVuZ3RoID4gMyAmJiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBiZz1cIm5vbmVcIlxuICAgICAgICAgIG1hcmdpblRvcD1cIjAgIWltcG9ydGFudFwiXG4gICAgICAgICAgX2hvdmVyPXt7IGJnOiBcIm5vbmVcIiB9fVxuICAgICAgICAgIF9hY3RpdmU9e3sgYmc6IFwibm9uZVwiIH19XG4gICAgICAgICAgY29sb3I9XCIjMkI2Q0IwXCJcbiAgICAgICAgICBmb250V2VpZ2h0PVwiNjAwXCJcbiAgICAgICAgICBvbkNsaWNrPXtzaG93QWxsfVxuICAgICAgICA+XG4gICAgICAgICAge3Nob3dBbGxUYXNrID8gXCJIaWRlXCIgOiBcIlNob3cgQWxsXCJ9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L1N0YWNrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kYXlUYXNrTGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQWxlcnQiLCJBbGVydEljb24iLCJCb3giLCJCdXR0b24iLCJGbGV4IiwiU3RhY2siLCJUZXh0IiwiVGFza0NhcmQiLCJ1c2VFbWFpbENvbnRleHQiLCJTd2lwZWFibGVMaXN0IiwiU3dpcGVhYmxlTGlzdEl0ZW0iLCJTd2lwZUFjdGlvbiIsIlRyYWlsaW5nQWN0aW9ucyIsIk1kRGVsZXRlRm9yZXZlciIsImRlbGV0ZUFjdGlvblN0eWxlIiwiaGlkZURlbGV0ZSIsImRlbGV0ZVRhc2siLCJUb2RheVRhc2tMaXN0IiwicHJvcHMiLCJvblN3aXBlRGVsZXRlIiwidGFza0lkIiwiZW1haWwiLCJ0aGVuIiwibXV0YXRlIiwiaW5pdGlhbGl6ZWRWYWwiLCJkYXRhIiwidGFza3MiLCJhbGxUYXNrcyIsInNldGFsbFRhc2tzIiwic2hvd0FsbFRhc2siLCJzZXRzaG93QWxsVGFzayIsInNob3dBbGwiLCJ0cmFpbGluZ0FjdGlvbnMiLCJkZXN0cnVjdGl2ZSIsIm9uQ2xpY2siLCJjb2xvciIsInNpemUiLCJlcnJvciIsInN0YXR1cyIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJmb250U2l6ZSIsImFsaWduIiwiZmlsdGVyIiwiaXRlbSIsImluZGV4IiwiZW5kSW5kZXgiLCJsZW5ndGgiLCJtYXAiLCJ0YXNrIiwiX2lkIiwid2lkdGgiLCJfaG92ZXIiLCJkaXNwbGF5IiwiYmciLCJfYWN0aXZlIiwiZm9udFdlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/home/TodayTaskList.tsx\n");

/***/ })

});