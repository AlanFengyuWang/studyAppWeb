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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_home_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/home/Profile */ \"./src/components/home/Profile.tsx\");\n/* harmony import */ var _components_home_ProgressDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/ProgressDisplay */ \"./src/components/home/ProgressDisplay.tsx\");\n/* harmony import */ var _components_home_TodayTaskList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/TodayTaskList */ \"./src/components/home/TodayTaskList.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_tasks_AddTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/tasks/AddTask */ \"./src/components/tasks/AddTask.tsx\");\n/* harmony import */ var _EmailContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../EmailContext */ \"./src/pages/EmailContext.tsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n// useEffect(() => {\n//   const router = useRouter();\n//   router.push(\"/home\");\n// }, []);\nvar HomePage = function() {\n    _s();\n    var email = (0,_EmailContext__WEBPACK_IMPORTED_MODULE_6__.useEmailContext)().email;\n    //fetch all existing unfinished tasks for the user\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), mountained = ref[0], setmountained = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), tasksData = ref1[0], settasksData = ref1[1];\n    // function fetchData(fetching: boolean) {\n    //   const SHOW_TASK_URL = fetching ? process.env.GET_TASKS_URL + email : null; //fetch only if the condition is true\n    //   console.log(\"fetching = \" + fetching);\n    //   const fetcher = (url: string) => fetch(url).then((res) => res.json());\n    //   const { data, error } = useSWR(SHOW_TASK_URL, fetcher);\n    //   //set it to false\n    //   console.log(\"data = \" + data);\n    //   if (fetching && data != undefined) setfetching(false);\n    //   return { data: data, error: error };\n    // }\n    // useEffect(() => {\n    //   setmountained(true);\n    // }, []);\n    var mutate = (0,swr__WEBPACK_IMPORTED_MODULE_7__.useSWRConfig)().mutate;\n    var SHOW_TASK_URL = \"http://localhost:2000/task/email/\" + email;\n    // console.log(\"SHOW_TASK_URL = \" + SHOW_TASK_URL);\n    var fetcher = function(url) {\n        return fetch(url).then(function(res) {\n            return res.json();\n        });\n    };\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(SHOW_TASK_URL, fetcher, {\n        revalidateOnFocus: false\n    }), data = ref2.data, error = ref2.error;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n        marginBottom: \"30%\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_Profile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_ProgressDisplay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                style: {\n                    width: \"90%\",\n                    margin: \"0 auto\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                        fontSize: \"1xl\",\n                        fontWeight: 600,\n                        children: \"What do I need to do today?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_TodayTaskList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: data,\n                        error: error\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasks_AddTask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        url: SHOW_TASK_URL,\n                        mutate: function() {\n                            return mutate(SHOW_TASK_URL);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                        onClick: function() {\n                            return mutate(SHOW_TASK_URL);\n                        },\n                        children: \"Update\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, _this);\n};\n_s(HomePage, \"CdGmO00UlgTyIKZ6WVF2ZF7n23E=\", false, function() {\n    return [\n        _EmailContext__WEBPACK_IMPORTED_MODULE_6__.useEmailContext,\n        swr__WEBPACK_IMPORTED_MODULE_7__.useSWRConfig,\n        swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = HomePage;\n// export async function getServerSideProps() {\n//   console.log(\"here\");\n//   // const { email } = useEmailContext();\n//   // //fetch all existing unfinished tasks for the user\n//   // const SHOW_TASK_URL = process.env.GET_TASKS_URL + email;\n//   // const fetcher = (url: string) => fetch(url).then((res) => res.json());\n//   // const { data, error } = useSWR(SHOW_TASK_URL, fetcher);\n//   // console.log(\"data = \" + JSON.stringify(data));\n//   const data = \"\";\n//   const error = \"\";\n//   return {\n//     props: { data, error }, // will be passed to the page component as props\n//   };\n// }\nHomePage.auth = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFzRDtBQUV0RCxxQkFBcUI7QUFDckIsc0JBQXNCO0FBRXRCLGFBQWE7QUFDYiwrRUFBK0U7QUFDL0UsT0FBTztBQUNQLElBQUk7QUFFSkEsUUFBUSxDQUFDMkIsSUFBSSxHQUFHLElBQUksQ0FBQztBQUVyQiwrREFBZTNCLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaG9tZS9pbmRleC50c3g/NzU5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9tZS9Qcm9maWxlXCI7XG5pbXBvcnQgUHJvZ3Jlc3NDYXJkcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob21lL1Byb2dyZXNzRGlzcGxheVwiO1xuaW1wb3J0IFRvZGF5VGFza0xpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9tZS9Ub2RheVRhc2tMaXN0XCI7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgQWRkVGFzayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90YXNrcy9BZGRUYXNrXCI7XG5pbXBvcnQgeyB1c2VFbWFpbENvbnRleHQgfSBmcm9tIFwiLi4vRW1haWxDb250ZXh0XCI7XG5pbXBvcnQgdXNlU1dSLCB7IHVzZVNXUkNvbmZpZyB9IGZyb20gXCJzd3JcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG4vLyB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbi8vICAgcm91dGVyLnB1c2goXCIvaG9tZVwiKTtcbi8vIH0sIFtdKTtcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZW1haWwgfSA9IHVzZUVtYWlsQ29udGV4dCgpO1xuICAvL2ZldGNoIGFsbCBleGlzdGluZyB1bmZpbmlzaGVkIHRhc2tzIGZvciB0aGUgdXNlclxuICBjb25zdCBbbW91bnRhaW5lZCwgc2V0bW91bnRhaW5lZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFt0YXNrc0RhdGEsIHNldHRhc2tzRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAvLyBmdW5jdGlvbiBmZXRjaERhdGEoZmV0Y2hpbmc6IGJvb2xlYW4pIHtcbiAgLy8gICBjb25zdCBTSE9XX1RBU0tfVVJMID0gZmV0Y2hpbmcgPyBwcm9jZXNzLmVudi5HRVRfVEFTS1NfVVJMICsgZW1haWwgOiBudWxsOyAvL2ZldGNoIG9ubHkgaWYgdGhlIGNvbmRpdGlvbiBpcyB0cnVlXG4gIC8vICAgY29uc29sZS5sb2coXCJmZXRjaGluZyA9IFwiICsgZmV0Y2hpbmcpO1xuXG4gIC8vICAgY29uc3QgZmV0Y2hlciA9ICh1cmw6IHN0cmluZykgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuICAvLyAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihTSE9XX1RBU0tfVVJMLCBmZXRjaGVyKTtcbiAgLy8gICAvL3NldCBpdCB0byBmYWxzZVxuICAvLyAgIGNvbnNvbGUubG9nKFwiZGF0YSA9IFwiICsgZGF0YSk7XG5cbiAgLy8gICBpZiAoZmV0Y2hpbmcgJiYgZGF0YSAhPSB1bmRlZmluZWQpIHNldGZldGNoaW5nKGZhbHNlKTtcblxuICAvLyAgIHJldHVybiB7IGRhdGE6IGRhdGEsIGVycm9yOiBlcnJvciB9O1xuICAvLyB9XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgc2V0bW91bnRhaW5lZCh0cnVlKTtcbiAgLy8gfSwgW10pO1xuXG4gIGNvbnN0IHsgbXV0YXRlIH0gPSB1c2VTV1JDb25maWcoKTtcbiAgY29uc3QgU0hPV19UQVNLX1VSTCA9IHByb2Nlc3MuZW52LkdFVF9UQVNLU19VUkwgKyBlbWFpbDtcbiAgLy8gY29uc29sZS5sb2coXCJTSE9XX1RBU0tfVVJMID0gXCIgKyBTSE9XX1RBU0tfVVJMKTtcblxuICBjb25zdCBmZXRjaGVyID0gKHVybDogc3RyaW5nKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihTSE9XX1RBU0tfVVJMLCBmZXRjaGVyLCB7XG4gICAgcmV2YWxpZGF0ZU9uRm9jdXM6IGZhbHNlLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggbWFyZ2luQm90dG9tPVwiMzAlXCI+XG4gICAgICA8UHJvZmlsZSAvPlxuICAgICAgPFByb2dyZXNzQ2FyZHMgLz5cbiAgICAgIDxCb3ggc3R5bGU9e3sgd2lkdGg6IFwiOTAlXCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fT5cbiAgICAgICAgPFRleHQgZm9udFNpemU9XCIxeGxcIiBmb250V2VpZ2h0PXs2MDB9PlxuICAgICAgICAgIFdoYXQgZG8gSSBuZWVkIHRvIGRvIHRvZGF5P1xuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUb2RheVRhc2tMaXN0IGRhdGE9e2RhdGF9IGVycm9yPXtlcnJvcn0gLz5cbiAgICAgICAgPEFkZFRhc2sgdXJsPXtTSE9XX1RBU0tfVVJMfSBtdXRhdGU9eygpID0+IG11dGF0ZShTSE9XX1RBU0tfVVJMKX0gLz5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBtdXRhdGUoU0hPV19UQVNLX1VSTCl9PlVwZGF0ZTwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuLy8gICBjb25zb2xlLmxvZyhcImhlcmVcIik7XG4vLyAgIC8vIGNvbnN0IHsgZW1haWwgfSA9IHVzZUVtYWlsQ29udGV4dCgpO1xuLy8gICAvLyAvL2ZldGNoIGFsbCBleGlzdGluZyB1bmZpbmlzaGVkIHRhc2tzIGZvciB0aGUgdXNlclxuLy8gICAvLyBjb25zdCBTSE9XX1RBU0tfVVJMID0gcHJvY2Vzcy5lbnYuR0VUX1RBU0tTX1VSTCArIGVtYWlsO1xuLy8gICAvLyBjb25zdCBmZXRjaGVyID0gKHVybDogc3RyaW5nKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4vLyAgIC8vIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihTSE9XX1RBU0tfVVJMLCBmZXRjaGVyKTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyhcImRhdGEgPSBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuLy8gICBjb25zdCBkYXRhID0gXCJcIjtcbi8vICAgY29uc3QgZXJyb3IgPSBcIlwiO1xuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHsgZGF0YSwgZXJyb3IgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4vLyAgIH07XG4vLyB9XG5cbkhvbWVQYWdlLmF1dGggPSB0cnVlO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJvZmlsZSIsIlByb2dyZXNzQ2FyZHMiLCJUb2RheVRhc2tMaXN0IiwiQm94IiwiQnV0dG9uIiwiVGV4dCIsIkFkZFRhc2siLCJ1c2VFbWFpbENvbnRleHQiLCJ1c2VTV1IiLCJ1c2VTV1JDb25maWciLCJIb21lUGFnZSIsImVtYWlsIiwibW91bnRhaW5lZCIsInNldG1vdW50YWluZWQiLCJ0YXNrc0RhdGEiLCJzZXR0YXNrc0RhdGEiLCJtdXRhdGUiLCJTSE9XX1RBU0tfVVJMIiwicHJvY2VzcyIsImVudiIsIkdFVF9UQVNLU19VUkwiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInJldmFsaWRhdGVPbkZvY3VzIiwiZGF0YSIsImVycm9yIiwibWFyZ2luQm90dG9tIiwic3R5bGUiLCJ3aWR0aCIsIm1hcmdpbiIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm9uQ2xpY2siLCJhdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/home/index.tsx\n");

/***/ })

});