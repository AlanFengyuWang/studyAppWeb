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

/***/ "./src/pages/home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/home/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_home_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/home/Profile */ \"./src/components/home/Profile.tsx\");\n/* harmony import */ var _components_home_ProgressDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/ProgressDisplay */ \"./src/components/home/ProgressDisplay.tsx\");\n/* harmony import */ var _components_home_TodayTaskList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/TodayTaskList */ \"./src/components/home/TodayTaskList.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_tasks_AddTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/tasks/AddTask */ \"./src/components/tasks/AddTask.tsx\");\n/* harmony import */ var _EmailContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../EmailContext */ \"./src/pages/EmailContext.tsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n// useEffect(() => {\n//   const router = useRouter();\n//   router.push(\"/home\");\n// }, []);\nvar HomePage = function() {\n    var changeTask = function changeTask(data) {\n        console.log(\"changing\");\n    // settasksData(data);\n    };\n    _s();\n    var email = (0,_EmailContext__WEBPACK_IMPORTED_MODULE_6__.useEmailContext)().email;\n    //fetch all existing unfinished tasks for the user\n    var SHOW_TASK_URL = \"http://localhost:2000/task/email/\" + email;\n    var fetcher = function(url) {\n        return fetch(url).then(function(res) {\n            return res.json();\n        });\n    };\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(SHOW_TASK_URL, fetcher), data = ref.data, error = ref.error;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data), tasksData = ref1[0], settasksData = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        settasksData(data);\n    }, [\n        data\n    ]);\n    // console.log(\"data type = \" + typeof data + \",data = \" + JSON.stringify(data));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n        marginBottom: \"30%\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_Profile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_ProgressDisplay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                style: {\n                    width: \"90%\",\n                    margin: \"0 auto\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                        fontSize: \"1xl\",\n                        fontWeight: 600,\n                        children: \"What do I need to do today?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_TodayTaskList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: tasksData,\n                        error: error\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasks_AddTask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        settasksData: changeTask\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, _this);\n};\n_s(HomePage, \"Vv4ijnTuafaozIRMhf6eaalESkc=\", false, function() {\n    return [\n        _EmailContext__WEBPACK_IMPORTED_MODULE_6__.useEmailContext,\n        swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = HomePage;\n// export async function getServerSideProps() {\n//   console.log(\"here\");\n//   // const { email } = useEmailContext();\n//   // //fetch all existing unfinished tasks for the user\n//   // const SHOW_TASK_URL = process.env.GET_TASKS_URL + email;\n//   // const fetcher = (url: string) => fetch(url).then((res) => res.json());\n//   // const { data, error } = useSWR(SHOW_TASK_URL, fetcher);\n//   // console.log(\"data = \" + JSON.stringify(data));\n//   const data = \"\";\n//   const error = \"\";\n//   return {\n//     props: { data, error }, // will be passed to the page component as props\n//   };\n// }\nHomePage.auth = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQW1EO0FBQ0M7QUFDYztBQUNGO0FBQ25CO0FBQ1E7QUFDSDtBQUN6Qjs7QUFHekIsb0JBQW9CO0FBQ3BCLGdDQUFnQztBQUNoQywwQkFBMEI7QUFDMUIsVUFBVTtBQUVWLElBQU1XLFFBQVEsR0FBRyxXQUFNO1FBWVpDLFVBQVUsR0FBbkIsU0FBU0EsVUFBVSxDQUFDQyxJQUFTLEVBQUU7UUFDN0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hCLHNCQUFzQjtLQUN2Qjs7SUFkRCxJQUFNLEtBQU8sR0FBS04sOERBQWUsRUFBRSxDQUEzQk8sS0FBSztJQUNiLGtEQUFrRDtJQUNsRCxJQUFNQyxhQUFhLEdBQUdDLG1DQUF5QixHQUFHRixLQUFLO0lBQ3ZELElBQU1LLE9BQU8sR0FBRyxTQUFDQyxHQUFXO2VBQUtDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDLENBQUNFLElBQUksQ0FBQyxTQUFDQyxHQUFHO21CQUFLQSxHQUFHLENBQUNDLElBQUksRUFBRTtTQUFBLENBQUM7S0FBQTtJQUNyRSxJQUF3QmhCLEdBQThCLEdBQTlCQSwrQ0FBTSxDQUFDTyxhQUFhLEVBQUVJLE9BQU8sQ0FBQyxFQUE5Q1IsSUFBSSxHQUFZSCxHQUE4QixDQUE5Q0csSUFBSSxFQUFFYyxLQUFLLEdBQUtqQixHQUE4QixDQUF4Q2lCLEtBQUs7SUFFbkIsSUFBa0N6QixJQUFjLEdBQWRBLCtDQUFRLENBQUNXLElBQUksQ0FBQyxFQXRCbEQsU0FzQmtCLEdBQWtCWCxJQUFjLEdBQWhDLEVBdEJsQixZQXNCZ0MsR0FBSUEsSUFBYyxHQUFsQjtJQUM5QkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2Q0QixZQUFZLENBQUNoQixJQUFJLENBQUMsQ0FBQztLQUNwQixFQUFFO1FBQUNBLElBQUk7S0FBQyxDQUFDLENBQUM7SUFPWCxpRkFBaUY7SUFFakYscUJBQ0UsOERBQUNQLGlEQUFHO1FBQUN3QixZQUFZLEVBQUMsS0FBSzs7MEJBQ3JCLDhEQUFDM0IsZ0VBQU87Ozs7cUJBQUc7MEJBQ1gsOERBQUNDLHdFQUFhOzs7O3FCQUFHOzBCQUNqQiw4REFBQ0UsaURBQUc7Z0JBQUN5QixLQUFLLEVBQUU7b0JBQUVDLEtBQUssRUFBRSxLQUFLO29CQUFFQyxNQUFNLEVBQUUsUUFBUTtpQkFBRTs7a0NBQzVDLDhEQUFDMUIsa0RBQUk7d0JBQUMyQixRQUFRLEVBQUMsS0FBSzt3QkFBQ0MsVUFBVSxFQUFFLEdBQUc7a0NBQUUsNkJBRXRDOzs7Ozs2QkFBTztrQ0FDUCw4REFBQzlCLHNFQUFhO3dCQUFDUSxJQUFJLEVBQUVlLFNBQVM7d0JBQUVELEtBQUssRUFBRUEsS0FBSzs7Ozs7NkJBQUk7a0NBQ2hELDhEQUFDbkIsaUVBQU87d0JBQUNxQixZQUFZLEVBQUVqQixVQUFVOzs7Ozs2QkFBSTs7Ozs7O3FCQUNqQzs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBaENLRCxRQUFROztRQUNNRiwwREFBZTtRQUlUQywyQ0FBTTs7O0FBTDFCQyxLQUFBQSxRQUFRO0FBa0NkLCtDQUErQztBQUMvQyx5QkFBeUI7QUFDekIsNENBQTRDO0FBQzVDLDBEQUEwRDtBQUMxRCxnRUFBZ0U7QUFDaEUsOEVBQThFO0FBQzlFLCtEQUErRDtBQUUvRCxzREFBc0Q7QUFFdEQscUJBQXFCO0FBQ3JCLHNCQUFzQjtBQUV0QixhQUFhO0FBQ2IsK0VBQStFO0FBQy9FLE9BQU87QUFDUCxJQUFJO0FBRUpBLFFBQVEsQ0FBQ3lCLElBQUksR0FBRyxJQUFJLENBQUM7QUFFckIsK0RBQWV6QixRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUvaW5kZXgudHN4Pzc1OTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvbWUvUHJvZmlsZVwiO1xuaW1wb3J0IFByb2dyZXNzQ2FyZHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9tZS9Qcm9ncmVzc0Rpc3BsYXlcIjtcbmltcG9ydCBUb2RheVRhc2tMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvbWUvVG9kYXlUYXNrTGlzdFwiO1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBBZGRUYXNrIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Rhc2tzL0FkZFRhc2tcIjtcbmltcG9ydCB7IHVzZUVtYWlsQ29udGV4dCB9IGZyb20gXCIuLi9FbWFpbENvbnRleHRcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbi8vIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuLy8gICByb3V0ZXIucHVzaChcIi9ob21lXCIpO1xuLy8gfSwgW10pO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBlbWFpbCB9ID0gdXNlRW1haWxDb250ZXh0KCk7XG4gIC8vZmV0Y2ggYWxsIGV4aXN0aW5nIHVuZmluaXNoZWQgdGFza3MgZm9yIHRoZSB1c2VyXG4gIGNvbnN0IFNIT1dfVEFTS19VUkwgPSBwcm9jZXNzLmVudi5HRVRfVEFTS1NfVVJMICsgZW1haWw7XG4gIGNvbnN0IGZldGNoZXIgPSAodXJsOiBzdHJpbmcpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFNIT1dfVEFTS19VUkwsIGZldGNoZXIpO1xuXG4gIGNvbnN0IFt0YXNrc0RhdGEsIHNldHRhc2tzRGF0YV0gPSB1c2VTdGF0ZShkYXRhKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXR0YXNrc0RhdGEoZGF0YSk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgZnVuY3Rpb24gY2hhbmdlVGFzayhkYXRhOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhcImNoYW5naW5nXCIpO1xuICAgIC8vIHNldHRhc2tzRGF0YShkYXRhKTtcbiAgfVxuXG4gIC8vIGNvbnNvbGUubG9nKFwiZGF0YSB0eXBlID0gXCIgKyB0eXBlb2YgZGF0YSArIFwiLGRhdGEgPSBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggbWFyZ2luQm90dG9tPVwiMzAlXCI+XG4gICAgICA8UHJvZmlsZSAvPlxuICAgICAgPFByb2dyZXNzQ2FyZHMgLz5cbiAgICAgIDxCb3ggc3R5bGU9e3sgd2lkdGg6IFwiOTAlXCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fT5cbiAgICAgICAgPFRleHQgZm9udFNpemU9XCIxeGxcIiBmb250V2VpZ2h0PXs2MDB9PlxuICAgICAgICAgIFdoYXQgZG8gSSBuZWVkIHRvIGRvIHRvZGF5P1xuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUb2RheVRhc2tMaXN0IGRhdGE9e3Rhc2tzRGF0YX0gZXJyb3I9e2Vycm9yfSAvPlxuICAgICAgICA8QWRkVGFzayBzZXR0YXNrc0RhdGE9e2NoYW5nZVRhc2t9IC8+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4vLyAgIGNvbnNvbGUubG9nKFwiaGVyZVwiKTtcbi8vICAgLy8gY29uc3QgeyBlbWFpbCB9ID0gdXNlRW1haWxDb250ZXh0KCk7XG4vLyAgIC8vIC8vZmV0Y2ggYWxsIGV4aXN0aW5nIHVuZmluaXNoZWQgdGFza3MgZm9yIHRoZSB1c2VyXG4vLyAgIC8vIGNvbnN0IFNIT1dfVEFTS19VUkwgPSBwcm9jZXNzLmVudi5HRVRfVEFTS1NfVVJMICsgZW1haWw7XG4vLyAgIC8vIGNvbnN0IGZldGNoZXIgPSAodXJsOiBzdHJpbmcpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbi8vICAgLy8gY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFNIT1dfVEFTS19VUkwsIGZldGNoZXIpO1xuXG4vLyAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YSA9IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG4vLyAgIGNvbnN0IGRhdGEgPSBcIlwiO1xuLy8gICBjb25zdCBlcnJvciA9IFwiXCI7XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczogeyBkYXRhLCBlcnJvciB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbi8vICAgfTtcbi8vIH1cblxuSG9tZVBhZ2UuYXV0aCA9IHRydWU7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcm9maWxlIiwiUHJvZ3Jlc3NDYXJkcyIsIlRvZGF5VGFza0xpc3QiLCJCb3giLCJUZXh0IiwiQWRkVGFzayIsInVzZUVtYWlsQ29udGV4dCIsInVzZVNXUiIsIkhvbWVQYWdlIiwiY2hhbmdlVGFzayIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZW1haWwiLCJTSE9XX1RBU0tfVVJMIiwicHJvY2VzcyIsImVudiIsIkdFVF9UQVNLU19VUkwiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImVycm9yIiwidGFza3NEYXRhIiwic2V0dGFza3NEYXRhIiwibWFyZ2luQm90dG9tIiwic3R5bGUiLCJ3aWR0aCIsIm1hcmdpbiIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/home/index.tsx\n");

/***/ })

});