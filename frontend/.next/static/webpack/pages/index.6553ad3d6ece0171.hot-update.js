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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_home_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/home/Profile */ \"./src/components/home/Profile.tsx\");\n/* harmony import */ var _components_home_ProgressDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/ProgressDisplay */ \"./src/components/home/ProgressDisplay.tsx\");\n/* harmony import */ var _components_home_TodayTaskList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/TodayTaskList */ \"./src/components/home/TodayTaskList.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_tasks_AddTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/tasks/AddTask */ \"./src/components/tasks/AddTask.tsx\");\n/* harmony import */ var _EmailContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../EmailContext */ \"./src/pages/EmailContext.tsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n// useEffect(() => {\n//   const router = useRouter();\n//   router.push(\"/home\");\n// }, []);\nvar HomePage = function() {\n    _s();\n    var email = (0,_EmailContext__WEBPACK_IMPORTED_MODULE_6__.useEmailContext)().email;\n    //fetch all existing unfinished tasks for the user\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), mountained = ref[0], setmountained = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), tasksData = ref1[0], settasksData = ref1[1];\n    // function fetchData(fetching: boolean) {\n    //   const SHOW_TASK_URL = fetching ? process.env.GET_TASKS_URL + email : null; //fetch only if the condition is true\n    //   console.log(\"fetching = \" + fetching);\n    //   const fetcher = (url: string) => fetch(url).then((res) => res.json());\n    //   const { data, error } = useSWR(SHOW_TASK_URL, fetcher);\n    //   //set it to false\n    //   console.log(\"data = \" + data);\n    //   if (fetching && data != undefined) setfetching(false);\n    //   return { data: data, error: error };\n    // }\n    var SHOW_TASK_URL = mountained ? \"http://localhost:2000/task/email/\" + email : null; //fetch only if the condition is true\n    var fetcher = function(url) {\n        return fetch(url).then(function(res) {\n            return res.json();\n        });\n    };\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(SHOW_TASK_URL, fetcher), data = ref2.data, error = ref2.error;\n    console.log(\"data = \" + JSON.stringify(data));\n    if (data != undefined) {\n        setmountained(false);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setmountained(true);\n    }, []);\n    // const [tasksData, settasksData] = useState(data);\n    // useEffect(() => {\n    //   settasksData(data);\n    // }, [data]);\n    // useEffect(() => {\n    //   // console.log(\"tasksData = \" + JSON.stringify(tasksData));\n    // }, [tasksData]);\n    // console.log(\"data type = \" + typeof data + \",data = \" + JSON.stringify(data));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n        marginBottom: \"30%\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_Profile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_ProgressDisplay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                style: {\n                    width: \"90%\",\n                    margin: \"0 auto\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                        fontSize: \"1xl\",\n                        fontWeight: 600,\n                        children: \"What do I need to do today?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_TodayTaskList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: data,\n                        error: error\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasks_AddTask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        setmountained: setmountained\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, _this);\n};\n_s(HomePage, \"LxVWcQQ3eyW5GCYxJ6yy95clLwc=\", false, function() {\n    return [\n        _EmailContext__WEBPACK_IMPORTED_MODULE_6__.useEmailContext,\n        swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = HomePage;\n// export async function getServerSideProps() {\n//   console.log(\"here\");\n//   // const { email } = useEmailContext();\n//   // //fetch all existing unfinished tasks for the user\n//   // const SHOW_TASK_URL = process.env.GET_TASKS_URL + email;\n//   // const fetcher = (url: string) => fetch(url).then((res) => res.json());\n//   // const { data, error } = useSWR(SHOW_TASK_URL, fetcher);\n//   // console.log(\"data = \" + JSON.stringify(data));\n//   const data = \"\";\n//   const error = \"\";\n//   return {\n//     props: { data, error }, // will be passed to the page component as props\n//   };\n// }\nHomePage.auth = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L0MseUJBQXlCO0FBQ3pCLDRDQUE0QztBQUM1QywwREFBMEQ7QUFDMUQsZ0VBQWdFO0FBQ2hFLDhFQUE4RTtBQUM5RSwrREFBK0Q7QUFFL0Qsc0RBQXNEO0FBRXRELHFCQUFxQjtBQUNyQixzQkFBc0I7QUFFdEIsYUFBYTtBQUNiLCtFQUErRTtBQUMvRSxPQUFPO0FBQ1AsSUFBSTtBQUVKQSxRQUFRLENBQUM2QixJQUFJLEdBQUcsSUFBSSxDQUFDO0FBRXJCLCtEQUFlN0IsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9ob21lL2luZGV4LnRzeD83NTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob21lL1Byb2ZpbGVcIjtcbmltcG9ydCBQcm9ncmVzc0NhcmRzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvbWUvUHJvZ3Jlc3NEaXNwbGF5XCI7XG5pbXBvcnQgVG9kYXlUYXNrTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob21lL1RvZGF5VGFza0xpc3RcIjtcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgQWRkVGFzayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90YXNrcy9BZGRUYXNrXCI7XG5pbXBvcnQgeyB1c2VFbWFpbENvbnRleHQgfSBmcm9tIFwiLi4vRW1haWxDb250ZXh0XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG4vLyB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbi8vICAgcm91dGVyLnB1c2goXCIvaG9tZVwiKTtcbi8vIH0sIFtdKTtcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZW1haWwgfSA9IHVzZUVtYWlsQ29udGV4dCgpO1xuICAvL2ZldGNoIGFsbCBleGlzdGluZyB1bmZpbmlzaGVkIHRhc2tzIGZvciB0aGUgdXNlclxuICBjb25zdCBbbW91bnRhaW5lZCwgc2V0bW91bnRhaW5lZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFt0YXNrc0RhdGEsIHNldHRhc2tzRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAvLyBmdW5jdGlvbiBmZXRjaERhdGEoZmV0Y2hpbmc6IGJvb2xlYW4pIHtcbiAgLy8gICBjb25zdCBTSE9XX1RBU0tfVVJMID0gZmV0Y2hpbmcgPyBwcm9jZXNzLmVudi5HRVRfVEFTS1NfVVJMICsgZW1haWwgOiBudWxsOyAvL2ZldGNoIG9ubHkgaWYgdGhlIGNvbmRpdGlvbiBpcyB0cnVlXG4gIC8vICAgY29uc29sZS5sb2coXCJmZXRjaGluZyA9IFwiICsgZmV0Y2hpbmcpO1xuXG4gIC8vICAgY29uc3QgZmV0Y2hlciA9ICh1cmw6IHN0cmluZykgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuICAvLyAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihTSE9XX1RBU0tfVVJMLCBmZXRjaGVyKTtcbiAgLy8gICAvL3NldCBpdCB0byBmYWxzZVxuICAvLyAgIGNvbnNvbGUubG9nKFwiZGF0YSA9IFwiICsgZGF0YSk7XG5cbiAgLy8gICBpZiAoZmV0Y2hpbmcgJiYgZGF0YSAhPSB1bmRlZmluZWQpIHNldGZldGNoaW5nKGZhbHNlKTtcblxuICAvLyAgIHJldHVybiB7IGRhdGE6IGRhdGEsIGVycm9yOiBlcnJvciB9O1xuICAvLyB9XG5cbiAgY29uc3QgU0hPV19UQVNLX1VSTCA9IG1vdW50YWluZWQgPyBwcm9jZXNzLmVudi5HRVRfVEFTS1NfVVJMICsgZW1haWwgOiBudWxsOyAvL2ZldGNoIG9ubHkgaWYgdGhlIGNvbmRpdGlvbiBpcyB0cnVlXG4gIGNvbnN0IGZldGNoZXIgPSAodXJsOiBzdHJpbmcpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFNIT1dfVEFTS19VUkwsIGZldGNoZXIpO1xuICBjb25zb2xlLmxvZyhcImRhdGEgPSBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgaWYgKGRhdGEgIT0gdW5kZWZpbmVkKSB7XG4gICAgc2V0bW91bnRhaW5lZChmYWxzZSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldG1vdW50YWluZWQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICAvLyBjb25zdCBbdGFza3NEYXRhLCBzZXR0YXNrc0RhdGFdID0gdXNlU3RhdGUoZGF0YSk7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgc2V0dGFza3NEYXRhKGRhdGEpO1xuICAvLyB9LCBbZGF0YV0pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgLy8gY29uc29sZS5sb2coXCJ0YXNrc0RhdGEgPSBcIiArIEpTT04uc3RyaW5naWZ5KHRhc2tzRGF0YSkpO1xuICAvLyB9LCBbdGFza3NEYXRhXSk7XG5cbiAgLy8gY29uc29sZS5sb2coXCJkYXRhIHR5cGUgPSBcIiArIHR5cGVvZiBkYXRhICsgXCIsZGF0YSA9IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBtYXJnaW5Cb3R0b209XCIzMCVcIj5cbiAgICAgIDxQcm9maWxlIC8+XG4gICAgICA8UHJvZ3Jlc3NDYXJkcyAvPlxuICAgICAgPEJveCBzdHlsZT17eyB3aWR0aDogXCI5MCVcIiwgbWFyZ2luOiBcIjAgYXV0b1wiIH19PlxuICAgICAgICA8VGV4dCBmb250U2l6ZT1cIjF4bFwiIGZvbnRXZWlnaHQ9ezYwMH0+XG4gICAgICAgICAgV2hhdCBkbyBJIG5lZWQgdG8gZG8gdG9kYXk/XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRvZGF5VGFza0xpc3QgZGF0YT17ZGF0YX0gZXJyb3I9e2Vycm9yfSAvPlxuICAgICAgICA8QWRkVGFzayBzZXRtb3VudGFpbmVkPXtzZXRtb3VudGFpbmVkfSAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuLy8gICBjb25zb2xlLmxvZyhcImhlcmVcIik7XG4vLyAgIC8vIGNvbnN0IHsgZW1haWwgfSA9IHVzZUVtYWlsQ29udGV4dCgpO1xuLy8gICAvLyAvL2ZldGNoIGFsbCBleGlzdGluZyB1bmZpbmlzaGVkIHRhc2tzIGZvciB0aGUgdXNlclxuLy8gICAvLyBjb25zdCBTSE9XX1RBU0tfVVJMID0gcHJvY2Vzcy5lbnYuR0VUX1RBU0tTX1VSTCArIGVtYWlsO1xuLy8gICAvLyBjb25zdCBmZXRjaGVyID0gKHVybDogc3RyaW5nKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4vLyAgIC8vIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihTSE9XX1RBU0tfVVJMLCBmZXRjaGVyKTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyhcImRhdGEgPSBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuLy8gICBjb25zdCBkYXRhID0gXCJcIjtcbi8vICAgY29uc3QgZXJyb3IgPSBcIlwiO1xuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHsgZGF0YSwgZXJyb3IgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4vLyAgIH07XG4vLyB9XG5cbkhvbWVQYWdlLmF1dGggPSB0cnVlO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvZmlsZSIsIlByb2dyZXNzQ2FyZHMiLCJUb2RheVRhc2tMaXN0IiwiQm94IiwiVGV4dCIsIkFkZFRhc2siLCJ1c2VFbWFpbENvbnRleHQiLCJ1c2VTV1IiLCJIb21lUGFnZSIsImVtYWlsIiwibW91bnRhaW5lZCIsInNldG1vdW50YWluZWQiLCJ0YXNrc0RhdGEiLCJzZXR0YXNrc0RhdGEiLCJTSE9XX1RBU0tfVVJMIiwicHJvY2VzcyIsImVudiIsIkdFVF9UQVNLU19VUkwiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwidW5kZWZpbmVkIiwibWFyZ2luQm90dG9tIiwic3R5bGUiLCJ3aWR0aCIsIm1hcmdpbiIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/home/index.tsx\n");

/***/ })

});