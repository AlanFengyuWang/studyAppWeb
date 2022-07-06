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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _tasks_TaskCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/TaskCard */ \"./src/components/tasks/TaskCard.tsx\");\n/* harmony import */ var _pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/EmailContext */ \"./src/pages/EmailContext.tsx\");\n/* harmony import */ var react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-swipeable-list */ \"./node_modules/react-swipeable-list/dist/react-swipeable-list.umd.js\");\n/* harmony import */ var react_swipeable_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/home/styledComponents */ \"./src/styles/home/styledComponents.ts\");\n/* harmony import */ var react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-swipeable-list/dist/styles.css */ \"./node_modules/react-swipeable-list/dist/styles.css\");\n/* harmony import */ var react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_list_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _functions_tasks_deleteTask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions/tasks/deleteTask */ \"./src/functions/tasks/deleteTask.ts\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TodayTaskList = function(props) {\n    var _this1 = _this;\n    var onSwipeDelete = function onSwipeDelete(taskId) {\n        (0,_functions_tasks_deleteTask__WEBPACK_IMPORTED_MODULE_7__.deleteTask)(email, taskId);\n    //re-render tasks\n    // console.log(\n    //   \"taskId = \" + taskId + \", comparing with \" + JSON.stringify(allTasks)\n    // );\n    // setallTasks(allTasks.filter((task: TaskFormValues) => task._id !== taskId));\n    };\n    _s();\n    var initializedVal = props.data && props.data.tasks ? props.data.tasks : null;\n    // console.log(\"initializedVal = \" + initializedVal);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initializedVal), allTasks = ref[0], setallTasks = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"-->set all tasks\" + JSON.stringify(allTasks));\n        if (props.data && props.data) setallTasks(props.data.tasks);\n        console.log(\"-->set new tasks = \" + JSON.stringify(allTasks));\n    // console.log(\"---------->props data is changed\");\n    }, [\n        props.data\n    ]);\n    // console.log(\"allTasks = \" + allTasks);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showAllTask = ref1[0], setshowAllTask = ref1[1];\n    var showAll = function() {\n        setshowAllTask(!showAllTask);\n    };\n    var email = (0,_pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__.useEmailContext)().email;\n    // useEffect(() => {\n    // }, [props.data]);\n    var trailingActions = function(taskId) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.TrailingActions, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeAction, {\n                destructive: true,\n                onClick: function() {\n                    return onSwipeDelete(taskId);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, _objectSpread({}, _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_5__.deleteActionStyle, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDeleteForever, {\n                        color: \"#E2E8F0\",\n                        size: \"43px\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, _this1)\n                }), void 0, false, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n            lineNumber: 65,\n            columnNumber: 5\n        }, _this1);\n    };\n    if (props.error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Alert, {\n        status: \"error\",\n        marginTop: \"3%\",\n        padding: \"12px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.AlertIcon, {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                fontSize: \"sm\",\n                children: \"Failed to fetch your tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n        lineNumber: 76,\n        columnNumber: 7\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n        align: \"stretch\",\n        marginTop: \"3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeableList, {\n                children: allTasks && allTasks.filter(function(item, index) {\n                    var endIndex = showAllTask ? props.data.tasks.length : 3;\n                    console.log(\"endIndex =\" + endIndex, \", props.data.tasks = \" + props.data.tasks);\n                    return index < endIndex;\n                }).map(function(task, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_swipeable_list__WEBPACK_IMPORTED_MODULE_4__.SwipeableListItem, {\n                        trailingActions: trailingActions(task._id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tasks_TaskCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            task: task\n                        }, index, false, {\n                            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 17\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 15\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                bg: \"none\",\n                marginTop: \"0 !important\",\n                _hover: {\n                    bg: \"none\"\n                },\n                _active: {\n                    bg: \"none\"\n                },\n                color: \"#2B6CB0\",\n                fontWeight: \"600\",\n                onClick: showAll,\n                children: allTasks.size !== 0 && showAllTask ? \"Hide\" : \"Show All\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, _this),\n            console.log(\"allTasks = \" + JSON.stringify(allTasks))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/TodayTaskList.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, _this);\n};\n_s(TodayTaskList, \"bC/tEw9m1r1LVMD258oDvuVAA54=\", false, function() {\n    return [\n        _pages_EmailContext__WEBPACK_IMPORTED_MODULE_3__.useEmailContext\n    ];\n});\n_c = TodayTaskList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodayTaskList);\nvar _c;\n$RefreshReg$(_c, \"TodayTaskList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL1RvZGF5VGFza0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFTekI7QUFDZTtBQUVrQjtBQVE3QjtBQUNtQjtBQUNzQjtBQUN6QjtBQUNnQjs7QUFFOUQsSUFBTWtCLGFBQWEsR0FBRyxTQUFDQyxLQUFnQyxFQUFLOztRQXdCakRDLGFBQWEsR0FBdEIsU0FBU0EsYUFBYSxDQUFDQyxNQUFjLEVBQUU7UUFDckNKLHVFQUFVLENBQUNLLEtBQUssRUFBRUQsTUFBTSxDQUFDLENBQUM7SUFDMUIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwwRUFBMEU7SUFDMUUsS0FBSztJQUVMLCtFQUErRTtLQUNoRjs7SUEvQkQsSUFBTUUsY0FBYyxHQUNsQkosS0FBSyxDQUFDSyxJQUFJLElBQUlMLEtBQUssQ0FBQ0ssSUFBSSxDQUFDQyxLQUFLLEdBQUdOLEtBQUssQ0FBQ0ssSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtJQUUxRCxxREFBcUQ7SUFDckQsSUFBZ0N2QixHQUF3QixHQUF4QkEsK0NBQVEsQ0FBQ3FCLGNBQWMsQ0FBQyxFQS9CMUQsUUErQmlCLEdBQWlCckIsR0FBd0IsR0FBekMsRUEvQmpCLFdBK0I4QixHQUFJQSxHQUF3QixHQUE1QjtJQUU1QkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QyQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBR0MsSUFBSSxDQUFDQyxTQUFTLENBQUNMLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFM0QsSUFBSVAsS0FBSyxDQUFDSyxJQUFJLElBQUlMLEtBQUssQ0FBQ0ssSUFBSSxFQUFFRyxXQUFXLENBQUNSLEtBQUssQ0FBQ0ssSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQztRQUU1REcsT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLEdBQUdDLElBQUksQ0FBQ0MsU0FBUyxDQUFDTCxRQUFR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QUMsYUFBYSxHQUFHQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0wsUUFBUSxDQUFDLENBQUM7Ozs7OzthQUNoRCxDQUNSO0NBQ0g7R0EzRktSLGFBQWE7O1FBc0JDUixnRUFBZTs7O0FBdEI3QlEsS0FBQUEsYUFBYTtBQTZGbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob21lL1RvZGF5VGFza0xpc3QudHN4P2JmMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEFsZXJ0LFxuICBBbGVydEljb24sXG4gIEJveCxcbiAgQnV0dG9uLFxuICBGbGV4LFxuICBTdGFjayxcbiAgVGV4dCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBUYXNrQ2FyZCBmcm9tIFwiLi4vdGFza3MvVGFza0NhcmRcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHsgdXNlRW1haWxDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BhZ2VzL0VtYWlsQ29udGV4dFwiO1xuaW1wb3J0IHsgVGFza0Zvcm1WYWx1ZXMgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIExlYWRpbmdBY3Rpb25zLFxuICBTd2lwZWFibGVMaXN0LFxuICBTd2lwZWFibGVMaXN0SXRlbSxcbiAgU3dpcGVBY3Rpb24sXG4gIFRyYWlsaW5nQWN0aW9ucyxcbn0gZnJvbSBcInJlYWN0LXN3aXBlYWJsZS1saXN0XCI7XG5pbXBvcnQgeyBNZERlbGV0ZUZvcmV2ZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB7IGRlbGV0ZUFjdGlvblN0eWxlIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9ob21lL3N0eWxlZENvbXBvbmVudHNcIjtcbmltcG9ydCBcInJlYWN0LXN3aXBlYWJsZS1saXN0L2Rpc3Qvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgZGVsZXRlVGFzayB9IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvdGFza3MvZGVsZXRlVGFza1wiO1xuXG5jb25zdCBUb2RheVRhc2tMaXN0ID0gKHByb3BzOiB7IGRhdGE6IGFueTsgZXJyb3I6IGFueSB9KSA9PiB7XG4gIGNvbnN0IGluaXRpYWxpemVkVmFsID1cbiAgICBwcm9wcy5kYXRhICYmIHByb3BzLmRhdGEudGFza3MgPyBwcm9wcy5kYXRhLnRhc2tzIDogbnVsbDtcblxuICAvLyBjb25zb2xlLmxvZyhcImluaXRpYWxpemVkVmFsID0gXCIgKyBpbml0aWFsaXplZFZhbCk7XG4gIGNvbnN0IFthbGxUYXNrcywgc2V0YWxsVGFza3NdID0gdXNlU3RhdGUoaW5pdGlhbGl6ZWRWYWwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCItLT5zZXQgYWxsIHRhc2tzXCIgKyBKU09OLnN0cmluZ2lmeShhbGxUYXNrcykpO1xuXG4gICAgaWYgKHByb3BzLmRhdGEgJiYgcHJvcHMuZGF0YSkgc2V0YWxsVGFza3MocHJvcHMuZGF0YS50YXNrcyk7XG5cbiAgICBjb25zb2xlLmxvZyhcIi0tPnNldCBuZXcgdGFza3MgPSBcIiArIEpTT04uc3RyaW5naWZ5KGFsbFRhc2tzKSk7XG4gICAgLy8gY29uc29sZS5sb2coXCItLS0tLS0tLS0tPnByb3BzIGRhdGEgaXMgY2hhbmdlZFwiKTtcbiAgfSwgW3Byb3BzLmRhdGFdKTtcblxuICAvLyBjb25zb2xlLmxvZyhcImFsbFRhc2tzID0gXCIgKyBhbGxUYXNrcyk7XG4gIGNvbnN0IFtzaG93QWxsVGFzaywgc2V0c2hvd0FsbFRhc2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzaG93QWxsID0gKCkgPT4ge1xuICAgIHNldHNob3dBbGxUYXNrKCFzaG93QWxsVGFzayk7XG4gIH07XG5cbiAgY29uc3QgeyBlbWFpbCB9ID0gdXNlRW1haWxDb250ZXh0KCk7XG5cbiAgZnVuY3Rpb24gb25Td2lwZURlbGV0ZSh0YXNrSWQ6IHN0cmluZykge1xuICAgIGRlbGV0ZVRhc2soZW1haWwsIHRhc2tJZCk7XG4gICAgLy9yZS1yZW5kZXIgdGFza3NcbiAgICAvLyBjb25zb2xlLmxvZyhcbiAgICAvLyAgIFwidGFza0lkID0gXCIgKyB0YXNrSWQgKyBcIiwgY29tcGFyaW5nIHdpdGggXCIgKyBKU09OLnN0cmluZ2lmeShhbGxUYXNrcylcbiAgICAvLyApO1xuXG4gICAgLy8gc2V0YWxsVGFza3MoYWxsVGFza3MuZmlsdGVyKCh0YXNrOiBUYXNrRm9ybVZhbHVlcykgPT4gdGFzay5faWQgIT09IHRhc2tJZCkpO1xuICB9XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgLy8gfSwgW3Byb3BzLmRhdGFdKTtcblxuICBjb25zdCB0cmFpbGluZ0FjdGlvbnMgPSAodGFza0lkOiBzdHJpbmcpID0+IChcbiAgICA8VHJhaWxpbmdBY3Rpb25zPlxuICAgICAgPFN3aXBlQWN0aW9uIGRlc3RydWN0aXZlPXt0cnVlfSBvbkNsaWNrPXsoKSA9PiBvblN3aXBlRGVsZXRlKHRhc2tJZCl9PlxuICAgICAgICA8RmxleCB7Li4uZGVsZXRlQWN0aW9uU3R5bGV9PlxuICAgICAgICAgIDxNZERlbGV0ZUZvcmV2ZXIgY29sb3I9XCIjRTJFOEYwXCIgc2l6ZT1cIjQzcHhcIiAvPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L1N3aXBlQWN0aW9uPlxuICAgIDwvVHJhaWxpbmdBY3Rpb25zPlxuICApO1xuXG4gIGlmIChwcm9wcy5lcnJvcilcbiAgICByZXR1cm4gKFxuICAgICAgPEFsZXJ0IHN0YXR1cz1cImVycm9yXCIgbWFyZ2luVG9wPVwiMyVcIiBwYWRkaW5nPVwiMTJweFwiPlxuICAgICAgICA8QWxlcnRJY29uIC8+XG4gICAgICAgIDxUZXh0IGZvbnRTaXplPVwic21cIj5GYWlsZWQgdG8gZmV0Y2ggeW91ciB0YXNrczwvVGV4dD5cbiAgICAgIDwvQWxlcnQ+XG4gICAgKTtcblxuICByZXR1cm4gKFxuICAgIDxTdGFjayBhbGlnbj1cInN0cmV0Y2hcIiBtYXJnaW5Ub3A9XCIzXCI+XG4gICAgICA8U3dpcGVhYmxlTGlzdD5cbiAgICAgICAge2FsbFRhc2tzICYmXG4gICAgICAgICAgYWxsVGFza3NcbiAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW06IFRhc2tGb3JtVmFsdWVzLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGVuZEluZGV4OiBudW1iZXIgPSBzaG93QWxsVGFza1xuICAgICAgICAgICAgICAgID8gcHJvcHMuZGF0YS50YXNrcy5sZW5ndGhcbiAgICAgICAgICAgICAgICA6IDM7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgIFwiZW5kSW5kZXggPVwiICsgZW5kSW5kZXgsXG4gICAgICAgICAgICAgICAgXCIsIHByb3BzLmRhdGEudGFza3MgPSBcIiArIHByb3BzLmRhdGEudGFza3NcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICByZXR1cm4gaW5kZXggPCBlbmRJbmRleDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKCh0YXNrOiBUYXNrRm9ybVZhbHVlcywgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICA8U3dpcGVhYmxlTGlzdEl0ZW0gdHJhaWxpbmdBY3Rpb25zPXt0cmFpbGluZ0FjdGlvbnModGFzay5faWQpfT5cbiAgICAgICAgICAgICAgICA8VGFza0NhcmQgdGFzaz17dGFza30ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgICAgICAgPC9Td2lwZWFibGVMaXN0SXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgPC9Td2lwZWFibGVMaXN0PlxuICAgICAgPEJ1dHRvblxuICAgICAgICBiZz1cIm5vbmVcIlxuICAgICAgICBtYXJnaW5Ub3A9XCIwICFpbXBvcnRhbnRcIlxuICAgICAgICBfaG92ZXI9e3sgYmc6IFwibm9uZVwiIH19XG4gICAgICAgIF9hY3RpdmU9e3sgYmc6IFwibm9uZVwiIH19XG4gICAgICAgIGNvbG9yPVwiIzJCNkNCMFwiXG4gICAgICAgIGZvbnRXZWlnaHQ9XCI2MDBcIlxuICAgICAgICBvbkNsaWNrPXtzaG93QWxsfVxuICAgICAgPlxuICAgICAgICB7YWxsVGFza3Muc2l6ZSAhPT0gMCAmJiBzaG93QWxsVGFzayA/IFwiSGlkZVwiIDogXCJTaG93IEFsbFwifVxuICAgICAgPC9CdXR0b24+XG4gICAgICB7Y29uc29sZS5sb2coXCJhbGxUYXNrcyA9IFwiICsgSlNPTi5zdHJpbmdpZnkoYWxsVGFza3MpKX1cbiAgICA8L1N0YWNrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kYXlUYXNrTGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQWxlcnQiLCJBbGVydEljb24iLCJCdXR0b24iLCJGbGV4IiwiU3RhY2siLCJUZXh0IiwiVGFza0NhcmQiLCJ1c2VFbWFpbENvbnRleHQiLCJTd2lwZWFibGVMaXN0IiwiU3dpcGVhYmxlTGlzdEl0ZW0iLCJTd2lwZUFjdGlvbiIsIlRyYWlsaW5nQWN0aW9ucyIsIk1kRGVsZXRlRm9yZXZlciIsImRlbGV0ZUFjdGlvblN0eWxlIiwiZGVsZXRlVGFzayIsIlRvZGF5VGFza0xpc3QiLCJwcm9wcyIsIm9uU3dpcGVEZWxldGUiLCJ0YXNrSWQiLCJlbWFpbCIsImluaXRpYWxpemVkVmFsIiwiZGF0YSIsInRhc2tzIiwiYWxsVGFza3MiLCJzZXRhbGxUYXNrcyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Iiwic2hvd0FsbFRhc2siLCJzZXRzaG93QWxsVGFzayIsInNob3dBbGwiLCJ0cmFpbGluZ0FjdGlvbnMiLCJkZXN0cnVjdGl2ZSIsIm9uQ2xpY2siLCJjb2xvciIsInNpemUiLCJlcnJvciIsInN0YXR1cyIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJmb250U2l6ZSIsImFsaWduIiwiZmlsdGVyIiwiaXRlbSIsImluZGV4IiwiZW5kSW5kZXgiLCJsZW5ndGgiLCJtYXAiLCJ0YXNrIiwiX2lkIiwiYmciLCJfaG92ZXIiLCJfYWN0aXZlIiwiZm9udFdlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/home/TodayTaskList.tsx\n");

/***/ })

});