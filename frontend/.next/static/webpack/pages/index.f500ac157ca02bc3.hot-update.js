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

/***/ "./src/pages/home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/home/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_home_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/home/Profile */ \"./src/components/home/Profile.tsx\");\n/* harmony import */ var _components_home_ProgressDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/ProgressDisplay */ \"./src/components/home/ProgressDisplay.tsx\");\n/* harmony import */ var _components_home_TodayTaskList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/TodayTaskList */ \"./src/components/home/TodayTaskList.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_tasks_AddTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/tasks/AddTask */ \"./src/components/tasks/AddTask.tsx\");\n/* harmony import */ var _EmailContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../EmailContext */ \"./src/pages/EmailContext.tsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n// useEffect(() => {\n//   const router = useRouter();\n//   router.push(\"/home\");\n// }, []);\nvar HomePage = function() {\n    _s();\n    var email = (0,_EmailContext__WEBPACK_IMPORTED_MODULE_6__.useEmailContext)().email;\n    //fetch all existing unfinished tasks for the user\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), mountained = ref[0], setmountained = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), tasksData = ref1[0], settasksData = ref1[1];\n    // function fetchData(fetching: boolean) {\n    //   const SHOW_TASK_URL = fetching ? process.env.GET_TASKS_URL + email : null; //fetch only if the condition is true\n    //   console.log(\"fetching = \" + fetching);\n    //   const fetcher = (url: string) => fetch(url).then((res) => res.json());\n    //   const { data, error } = useSWR(SHOW_TASK_URL, fetcher);\n    //   //set it to false\n    //   console.log(\"data = \" + data);\n    //   if (fetching && data != undefined) setfetching(false);\n    //   return { data: data, error: error };\n    // }\n    // useEffect(() => {\n    //   setmountained(true);\n    // }, []);\n    var mutate = (0,swr__WEBPACK_IMPORTED_MODULE_7__.useSWRConfig)().mutate;\n    var SHOW_TASK_URL = \"http://localhost:2000/task/email/\" + email;\n    // console.log(\"SHOW_TASK_URL = \" + SHOW_TASK_URL);\n    var fetcher = function(url) {\n        return fetch(url).then(function(res) {\n            return res.json();\n        });\n    };\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(SHOW_TASK_URL, fetcher, {\n        revalidateOnFocus: true\n    }), data = ref2.data, error = ref2.error;\n    // mutate(SHOW_TASK_URL);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n        marginBottom: \"30%\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_Profile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_ProgressDisplay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                style: {\n                    width: \"90%\",\n                    margin: \"0 auto\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                        fontSize: \"1xl\",\n                        fontWeight: 600,\n                        children: \"What do I need to do today?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_TodayTaskList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: data,\n                        error: error\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasks_AddTask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        url: SHOW_TASK_URL,\n                        mutate: mutate\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, _this);\n};\n_s(HomePage, \"CdGmO00UlgTyIKZ6WVF2ZF7n23E=\", false, function() {\n    return [\n        _EmailContext__WEBPACK_IMPORTED_MODULE_6__.useEmailContext,\n        swr__WEBPACK_IMPORTED_MODULE_7__.useSWRConfig,\n        swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = HomePage;\n// export async function getServerSideProps() {\n//   console.log(\"here\");\n//   // const { email } = useEmailContext();\n//   // //fetch all existing unfinished tasks for the user\n//   // const SHOW_TASK_URL = process.env.GET_TASKS_URL + email;\n//   // const fetcher = (url: string) => fetch(url).then((res) => res.json());\n//   // const { data, error } = useSWR(SHOW_TASK_URL, fetcher);\n//   // console.log(\"data = \" + JSON.stringify(data));\n//   const data = \"\";\n//   const error = \"\";\n//   return {\n//     props: { data, error }, // will be passed to the page component as props\n//   };\n// }\nHomePage.auth = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztBQUVyQiwrREFBZTFCLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaG9tZS9pbmRleC50c3g/NzU5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9tZS9Qcm9maWxlXCI7XG5pbXBvcnQgUHJvZ3Jlc3NDYXJkcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob21lL1Byb2dyZXNzRGlzcGxheVwiO1xuaW1wb3J0IFRvZGF5VGFza0xpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9tZS9Ub2RheVRhc2tMaXN0XCI7XG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IEFkZFRhc2sgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGFza3MvQWRkVGFza1wiO1xuaW1wb3J0IHsgdXNlRW1haWxDb250ZXh0IH0gZnJvbSBcIi4uL0VtYWlsQ29udGV4dFwiO1xuaW1wb3J0IHVzZVNXUiwgeyB1c2VTV1JDb25maWcgfSBmcm9tIFwic3dyXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuLy8gdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4vLyAgIHJvdXRlci5wdXNoKFwiL2hvbWVcIik7XG4vLyB9LCBbXSk7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGVtYWlsIH0gPSB1c2VFbWFpbENvbnRleHQoKTtcbiAgLy9mZXRjaCBhbGwgZXhpc3RpbmcgdW5maW5pc2hlZCB0YXNrcyBmb3IgdGhlIHVzZXJcbiAgY29uc3QgW21vdW50YWluZWQsIHNldG1vdW50YWluZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbdGFza3NEYXRhLCBzZXR0YXNrc0RhdGFdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgLy8gZnVuY3Rpb24gZmV0Y2hEYXRhKGZldGNoaW5nOiBib29sZWFuKSB7XG4gIC8vICAgY29uc3QgU0hPV19UQVNLX1VSTCA9IGZldGNoaW5nID8gcHJvY2Vzcy5lbnYuR0VUX1RBU0tTX1VSTCArIGVtYWlsIDogbnVsbDsgLy9mZXRjaCBvbmx5IGlmIHRoZSBjb25kaXRpb24gaXMgdHJ1ZVxuICAvLyAgIGNvbnNvbGUubG9nKFwiZmV0Y2hpbmcgPSBcIiArIGZldGNoaW5nKTtcblxuICAvLyAgIGNvbnN0IGZldGNoZXIgPSAodXJsOiBzdHJpbmcpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbiAgLy8gICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoU0hPV19UQVNLX1VSTCwgZmV0Y2hlcik7XG4gIC8vICAgLy9zZXQgaXQgdG8gZmFsc2VcbiAgLy8gICBjb25zb2xlLmxvZyhcImRhdGEgPSBcIiArIGRhdGEpO1xuXG4gIC8vICAgaWYgKGZldGNoaW5nICYmIGRhdGEgIT0gdW5kZWZpbmVkKSBzZXRmZXRjaGluZyhmYWxzZSk7XG5cbiAgLy8gICByZXR1cm4geyBkYXRhOiBkYXRhLCBlcnJvcjogZXJyb3IgfTtcbiAgLy8gfVxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHNldG1vdW50YWluZWQodHJ1ZSk7XG4gIC8vIH0sIFtdKTtcblxuICBjb25zdCB7IG11dGF0ZSB9ID0gdXNlU1dSQ29uZmlnKCk7XG4gIGNvbnN0IFNIT1dfVEFTS19VUkwgPSBwcm9jZXNzLmVudi5HRVRfVEFTS1NfVVJMICsgZW1haWw7XG4gIC8vIGNvbnNvbGUubG9nKFwiU0hPV19UQVNLX1VSTCA9IFwiICsgU0hPV19UQVNLX1VSTCk7XG5cbiAgY29uc3QgZmV0Y2hlciA9ICh1cmw6IHN0cmluZykgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoU0hPV19UQVNLX1VSTCwgZmV0Y2hlciwge1xuICAgIHJldmFsaWRhdGVPbkZvY3VzOiB0cnVlLFxuICB9KTtcbiAgLy8gbXV0YXRlKFNIT1dfVEFTS19VUkwpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBtYXJnaW5Cb3R0b209XCIzMCVcIj5cbiAgICAgIDxQcm9maWxlIC8+XG4gICAgICA8UHJvZ3Jlc3NDYXJkcyAvPlxuICAgICAgPEJveCBzdHlsZT17eyB3aWR0aDogXCI5MCVcIiwgbWFyZ2luOiBcIjAgYXV0b1wiIH19PlxuICAgICAgICA8VGV4dCBmb250U2l6ZT1cIjF4bFwiIGZvbnRXZWlnaHQ9ezYwMH0+XG4gICAgICAgICAgV2hhdCBkbyBJIG5lZWQgdG8gZG8gdG9kYXk/XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRvZGF5VGFza0xpc3QgZGF0YT17ZGF0YX0gZXJyb3I9e2Vycm9yfSAvPlxuICAgICAgICA8QWRkVGFzayB1cmw9e1NIT1dfVEFTS19VUkx9IG11dGF0ZT17bXV0YXRlfSAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuLy8gICBjb25zb2xlLmxvZyhcImhlcmVcIik7XG4vLyAgIC8vIGNvbnN0IHsgZW1haWwgfSA9IHVzZUVtYWlsQ29udGV4dCgpO1xuLy8gICAvLyAvL2ZldGNoIGFsbCBleGlzdGluZyB1bmZpbmlzaGVkIHRhc2tzIGZvciB0aGUgdXNlclxuLy8gICAvLyBjb25zdCBTSE9XX1RBU0tfVVJMID0gcHJvY2Vzcy5lbnYuR0VUX1RBU0tTX1VSTCArIGVtYWlsO1xuLy8gICAvLyBjb25zdCBmZXRjaGVyID0gKHVybDogc3RyaW5nKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4vLyAgIC8vIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihTSE9XX1RBU0tfVVJMLCBmZXRjaGVyKTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyhcImRhdGEgPSBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuLy8gICBjb25zdCBkYXRhID0gXCJcIjtcbi8vICAgY29uc3QgZXJyb3IgPSBcIlwiO1xuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHsgZGF0YSwgZXJyb3IgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4vLyAgIH07XG4vLyB9XG5cbkhvbWVQYWdlLmF1dGggPSB0cnVlO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJvZmlsZSIsIlByb2dyZXNzQ2FyZHMiLCJUb2RheVRhc2tMaXN0IiwiQm94IiwiVGV4dCIsIkFkZFRhc2siLCJ1c2VFbWFpbENvbnRleHQiLCJ1c2VTV1IiLCJ1c2VTV1JDb25maWciLCJIb21lUGFnZSIsImVtYWlsIiwibW91bnRhaW5lZCIsInNldG1vdW50YWluZWQiLCJ0YXNrc0RhdGEiLCJzZXR0YXNrc0RhdGEiLCJtdXRhdGUiLCJTSE9XX1RBU0tfVVJMIiwicHJvY2VzcyIsImVudiIsIkdFVF9UQVNLU19VUkwiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInJldmFsaWRhdGVPbkZvY3VzIiwiZGF0YSIsImVycm9yIiwibWFyZ2luQm90dG9tIiwic3R5bGUiLCJ3aWR0aCIsIm1hcmdpbiIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/home/index.tsx\n");

/***/ })

});