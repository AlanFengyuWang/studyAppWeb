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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_home_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/home/Profile */ \"./src/components/home/Profile.tsx\");\n/* harmony import */ var _components_home_ProgressDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/ProgressDisplay */ \"./src/components/home/ProgressDisplay.tsx\");\n/* harmony import */ var _components_home_TodayTaskList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/TodayTaskList */ \"./src/components/home/TodayTaskList.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_tasks_AddTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/tasks/AddTask */ \"./src/components/tasks/AddTask.tsx\");\n/* harmony import */ var _EmailContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../EmailContext */ \"./src/pages/EmailContext.tsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n// useEffect(() => {\n//   const router = useRouter();\n//   router.push(\"/home\");\n// }, []);\nvar HomePage = function() {\n    var changeTask = function changeTask(data) {\n        console.log(\"changing\");\n    // settasksData(data);\n    };\n    _s();\n    var email = (0,_EmailContext__WEBPACK_IMPORTED_MODULE_6__.useEmailContext)().email;\n    //fetch all existing unfinished tasks for the user\n    var SHOW_TASK_URL = \"http://localhost:2000/task/email/\" + email;\n    var fetcher = function(url) {\n        return fetch(url).then(function(res) {\n            return res.json();\n        });\n    };\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(SHOW_TASK_URL, fetcher), data1 = ref.data, error = ref.error;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data1), tasksData = ref1[0], settasksData = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        settasksData(data1);\n    }, [\n        data1\n    ]);\n    // console.log(\"data type = \" + typeof data + \",data = \" + JSON.stringify(data));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n        marginBottom: \"30%\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_Profile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_ProgressDisplay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                style: {\n                    width: \"90%\",\n                    margin: \"0 auto\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                        fontSize: \"1xl\",\n                        fontWeight: 600,\n                        children: \"What do I need to do today?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_TodayTaskList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: tasksData,\n                        error: error\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasks_AddTask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        changeTask: function(data) {\n                            return changeTask(data);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, _this);\n};\n_s(HomePage, \"Vv4ijnTuafaozIRMhf6eaalESkc=\", false, function() {\n    return [\n        _EmailContext__WEBPACK_IMPORTED_MODULE_6__.useEmailContext,\n        swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = HomePage;\n// export async function getServerSideProps() {\n//   console.log(\"here\");\n//   // const { email } = useEmailContext();\n//   // //fetch all existing unfinished tasks for the user\n//   // const SHOW_TASK_URL = process.env.GET_TASKS_URL + email;\n//   // const fetcher = (url: string) => fetch(url).then((res) => res.json());\n//   // const { data, error } = useSWR(SHOW_TASK_URL, fetcher);\n//   // console.log(\"data = \" + JSON.stringify(data));\n//   const data = \"\";\n//   const error = \"\";\n//   return {\n//     props: { data, error }, // will be passed to the page component as props\n//   };\n// }\nHomePage.auth = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQW1EO0FBQ0M7QUFDYztBQUNGO0FBQ25CO0FBQ1E7QUFDSDtBQUN6Qjs7QUFHekIsb0JBQW9CO0FBQ3BCLGdDQUFnQztBQUNoQywwQkFBMEI7QUFDMUIsVUFBVTtBQUVWLElBQU1XLFFBQVEsR0FBRyxXQUFNO1FBWVpDLFVBQVUsR0FBbkIsU0FBU0EsVUFBVSxDQUFDQyxJQUFTLEVBQUU7UUFDN0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hCLHNCQUFzQjtLQUN2Qjs7SUFkRCxJQUFNLEtBQU8sR0FBS04sOERBQWUsRUFBRSxDQUEzQk8sS0FBSztJQUNiLGtEQUFrRDtJQUNsRCxJQUFNQyxhQUFhLEdBQUdDLG1DQUF5QixHQUFHRixLQUFLO0lBQ3ZELElBQU1LLE9BQU8sR0FBRyxTQUFDQyxHQUFXO2VBQUtDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDLENBQUNFLElBQUksQ0FBQyxTQUFDQyxHQUFHO21CQUFLQSxHQUFHLENBQUNDLElBQUksRUFBRTtTQUFBLENBQUM7S0FBQTtJQUNyRSxJQUF3QmhCLEdBQThCLEdBQTlCQSwrQ0FBTSxDQUFDTyxhQUFhLEVBQUVJLE9BQU8sQ0FBQyxFQUE5Q1IsS0FBSSxHQUFZSCxHQUE4QixDQUE5Q0csSUFBSSxFQUFFYyxLQUFLLEdBQUtqQixHQUE4QixDQUF4Q2lCLEtBQUs7SUFFbkIsSUFBa0N6QixJQUFjLEdBQWRBLCtDQUFRLENBQUNXLEtBQUksQ0FBQyxFQXRCbEQsU0FzQmtCLEdBQWtCWCxJQUFjLEdBQWhDLEVBdEJsQixZQXNCZ0MsR0FBSUEsSUFBYyxHQUFsQjtJQUM5QkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2Q0QixZQUFZLENBQUNoQixLQUFJLENBQUMsQ0FBQztLQUNwQixFQUFFO1FBQUNBLEtBQUk7S0FBQyxDQUFDLENBQUM7SUFPWCxpRkFBaUY7SUFFakYscUJBQ0UsOERBQUNQLGlEQUFHO1FBQUN3QixZQUFZLEVBQUMsS0FBSzs7MEJBQ3JCLDhEQUFDM0IsZ0VBQU87Ozs7cUJBQUc7MEJBQ1gsOERBQUNDLHdFQUFhOzs7O3FCQUFHOzBCQUNqQiw4REFBQ0UsaURBQUc7Z0JBQUN5QixLQUFLLEVBQUU7b0JBQUVDLEtBQUssRUFBRSxLQUFLO29CQUFFQyxNQUFNLEVBQUUsUUFBUTtpQkFBRTs7a0NBQzVDLDhEQUFDMUIsa0RBQUk7d0JBQUMyQixRQUFRLEVBQUMsS0FBSzt3QkFBQ0MsVUFBVSxFQUFFLEdBQUc7a0NBQUUsNkJBRXRDOzs7Ozs2QkFBTztrQ0FDUCw4REFBQzlCLHNFQUFhO3dCQUFDUSxJQUFJLEVBQUVlLFNBQVM7d0JBQUVELEtBQUssRUFBRUEsS0FBSzs7Ozs7NkJBQUk7a0NBQ2hELDhEQUFDbkIsaUVBQU87d0JBQUNJLFVBQVUsRUFBRSxTQUFDQyxJQUFTO21DQUFLRCxVQUFVLENBQUNDLElBQUksQ0FBQzt5QkFBQTs7Ozs7NkJBQUk7Ozs7OztxQkFDcEQ7Ozs7OzthQUNGLENBQ047Q0FDSDtHQWhDS0YsUUFBUTs7UUFDTUYsMERBQWU7UUFJVEMsMkNBQU07OztBQUwxQkMsS0FBQUEsUUFBUTtBQWtDZCwrQ0FBK0M7QUFDL0MseUJBQXlCO0FBQ3pCLDRDQUE0QztBQUM1QywwREFBMEQ7QUFDMUQsZ0VBQWdFO0FBQ2hFLDhFQUE4RTtBQUM5RSwrREFBK0Q7QUFFL0Qsc0RBQXNEO0FBRXRELHFCQUFxQjtBQUNyQixzQkFBc0I7QUFFdEIsYUFBYTtBQUNiLCtFQUErRTtBQUMvRSxPQUFPO0FBQ1AsSUFBSTtBQUVKQSxRQUFRLENBQUN5QixJQUFJLEdBQUcsSUFBSSxDQUFDO0FBRXJCLCtEQUFlekIsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9ob21lL2luZGV4LnRzeD83NTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob21lL1Byb2ZpbGVcIjtcbmltcG9ydCBQcm9ncmVzc0NhcmRzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvbWUvUHJvZ3Jlc3NEaXNwbGF5XCI7XG5pbXBvcnQgVG9kYXlUYXNrTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob21lL1RvZGF5VGFza0xpc3RcIjtcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgQWRkVGFzayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90YXNrcy9BZGRUYXNrXCI7XG5pbXBvcnQgeyB1c2VFbWFpbENvbnRleHQgfSBmcm9tIFwiLi4vRW1haWxDb250ZXh0XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG4vLyB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbi8vICAgcm91dGVyLnB1c2goXCIvaG9tZVwiKTtcbi8vIH0sIFtdKTtcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZW1haWwgfSA9IHVzZUVtYWlsQ29udGV4dCgpO1xuICAvL2ZldGNoIGFsbCBleGlzdGluZyB1bmZpbmlzaGVkIHRhc2tzIGZvciB0aGUgdXNlclxuICBjb25zdCBTSE9XX1RBU0tfVVJMID0gcHJvY2Vzcy5lbnYuR0VUX1RBU0tTX1VSTCArIGVtYWlsO1xuICBjb25zdCBmZXRjaGVyID0gKHVybDogc3RyaW5nKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihTSE9XX1RBU0tfVVJMLCBmZXRjaGVyKTtcblxuICBjb25zdCBbdGFza3NEYXRhLCBzZXR0YXNrc0RhdGFdID0gdXNlU3RhdGUoZGF0YSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0dGFza3NEYXRhKGRhdGEpO1xuICB9LCBbZGF0YV0pO1xuXG4gIGZ1bmN0aW9uIGNoYW5nZVRhc2soZGF0YTogYW55KSB7XG4gICAgY29uc29sZS5sb2coXCJjaGFuZ2luZ1wiKTtcbiAgICAvLyBzZXR0YXNrc0RhdGEoZGF0YSk7XG4gIH1cblxuICAvLyBjb25zb2xlLmxvZyhcImRhdGEgdHlwZSA9IFwiICsgdHlwZW9mIGRhdGEgKyBcIixkYXRhID0gXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IG1hcmdpbkJvdHRvbT1cIjMwJVwiPlxuICAgICAgPFByb2ZpbGUgLz5cbiAgICAgIDxQcm9ncmVzc0NhcmRzIC8+XG4gICAgICA8Qm94IHN0eWxlPXt7IHdpZHRoOiBcIjkwJVwiLCBtYXJnaW46IFwiMCBhdXRvXCIgfX0+XG4gICAgICAgIDxUZXh0IGZvbnRTaXplPVwiMXhsXCIgZm9udFdlaWdodD17NjAwfT5cbiAgICAgICAgICBXaGF0IGRvIEkgbmVlZCB0byBkbyB0b2RheT9cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VG9kYXlUYXNrTGlzdCBkYXRhPXt0YXNrc0RhdGF9IGVycm9yPXtlcnJvcn0gLz5cbiAgICAgICAgPEFkZFRhc2sgY2hhbmdlVGFzaz17KGRhdGE6IGFueSkgPT4gY2hhbmdlVGFzayhkYXRhKX0gLz5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbi8vICAgY29uc29sZS5sb2coXCJoZXJlXCIpO1xuLy8gICAvLyBjb25zdCB7IGVtYWlsIH0gPSB1c2VFbWFpbENvbnRleHQoKTtcbi8vICAgLy8gLy9mZXRjaCBhbGwgZXhpc3RpbmcgdW5maW5pc2hlZCB0YXNrcyBmb3IgdGhlIHVzZXJcbi8vICAgLy8gY29uc3QgU0hPV19UQVNLX1VSTCA9IHByb2Nlc3MuZW52LkdFVF9UQVNLU19VUkwgKyBlbWFpbDtcbi8vICAgLy8gY29uc3QgZmV0Y2hlciA9ICh1cmw6IHN0cmluZykgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuLy8gICAvLyBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoU0hPV19UQVNLX1VSTCwgZmV0Y2hlcik7XG5cbi8vICAgLy8gY29uc29sZS5sb2coXCJkYXRhID0gXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbi8vICAgY29uc3QgZGF0YSA9IFwiXCI7XG4vLyAgIGNvbnN0IGVycm9yID0gXCJcIjtcblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7IGRhdGEsIGVycm9yIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuLy8gICB9O1xuLy8gfVxuXG5Ib21lUGFnZS5hdXRoID0gdHJ1ZTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb2ZpbGUiLCJQcm9ncmVzc0NhcmRzIiwiVG9kYXlUYXNrTGlzdCIsIkJveCIsIlRleHQiLCJBZGRUYXNrIiwidXNlRW1haWxDb250ZXh0IiwidXNlU1dSIiwiSG9tZVBhZ2UiLCJjaGFuZ2VUYXNrIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlbWFpbCIsIlNIT1dfVEFTS19VUkwiLCJwcm9jZXNzIiwiZW52IiwiR0VUX1RBU0tTX1VSTCIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZXJyb3IiLCJ0YXNrc0RhdGEiLCJzZXR0YXNrc0RhdGEiLCJtYXJnaW5Cb3R0b20iLCJzdHlsZSIsIndpZHRoIiwibWFyZ2luIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiYXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home/index.tsx\n");

/***/ })

});