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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_home_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/home/Profile */ \"./src/components/home/Profile.tsx\");\n/* harmony import */ var _components_home_ProgressDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/ProgressDisplay */ \"./src/components/home/ProgressDisplay.tsx\");\n/* harmony import */ var _components_home_TodayTaskList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/TodayTaskList */ \"./src/components/home/TodayTaskList.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_tasks_AddTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/tasks/AddTask */ \"./src/components/tasks/AddTask.tsx\");\n/* harmony import */ var _EmailContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../EmailContext */ \"./src/pages/EmailContext.tsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n// useEffect(() => {\n//   const router = useRouter();\n//   router.push(\"/home\");\n// }, []);\nvar HomePage = function() {\n    var fetchData = function fetchData(fetching) {\n        var SHOW_TASK_URL = fetching ? \"http://localhost:2000/task/email/\" + email : null; //fetch only if the condition is true\n        console.log(\"fetching = \" + fetching);\n        var fetcher = function(url) {\n            return fetch(url).then(function(res) {\n                return res.json();\n            });\n        };\n        var ref = (0,swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(SHOW_TASK_URL, fetcher), data = ref.data, error = ref.error;\n        //set it to false\n        if (fetching) setfetching(false);\n        return {\n            data: data,\n            error: error\n        };\n    };\n    _s();\n    var email = (0,_EmailContext__WEBPACK_IMPORTED_MODULE_6__.useEmailContext)().email;\n    //fetch all existing unfinished tasks for the user\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), fetching1 = ref3[0], setfetching = ref3[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), tasksData = ref1[0], settasksData = ref1[1];\n    var ref2 = fetchData(fetching1), data1 = ref2.data, error1 = ref2.error;\n    // console.log(\"fetched, data = \" + JSON.stringify(data.tasks));\n    // useEffect(() => {\n    //   setfetching(true);\n    //   settasksData(data);\n    // }, [data]);\n    // useEffect(() => {\n    //   if (!fetching) {\n    //     return;\n    //   }\n    //   setfetching(true);\n    // }, [fetching]);\n    // const [tasksData, settasksData] = useState(data);\n    // useEffect(() => {\n    //   settasksData(data);\n    // }, [data]);\n    // useEffect(() => {\n    //   // console.log(\"tasksData = \" + JSON.stringify(tasksData));\n    // }, [tasksData]);\n    // console.log(\"data type = \" + typeof data + \",data = \" + JSON.stringify(data));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n        marginBottom: \"30%\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_Profile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_ProgressDisplay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                style: {\n                    width: \"90%\",\n                    margin: \"0 auto\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                        fontSize: \"1xl\",\n                        fontWeight: 600,\n                        children: \"What do I need to do today?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_TodayTaskList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: data1,\n                        error: error1\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasks_AddTask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        setfetching: setfetching\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, _this);\n};\n_s(HomePage, \"rusyr/kRPSEt+CnwPZ1YzTGSxyA=\", false, function() {\n    return [\n        _EmailContext__WEBPACK_IMPORTED_MODULE_6__.useEmailContext\n    ];\n});\n_c = HomePage;\n// export async function getServerSideProps() {\n//   console.log(\"here\");\n//   // const { email } = useEmailContext();\n//   // //fetch all existing unfinished tasks for the user\n//   // const SHOW_TASK_URL = process.env.GET_TASKS_URL + email;\n//   // const fetcher = (url: string) => fetch(url).then((res) => res.json());\n//   // const { data, error } = useSWR(SHOW_TASK_URL, fetcher);\n//   // console.log(\"data = \" + JSON.stringify(data));\n//   const data = \"\";\n//   const error = \"\";\n//   return {\n//     props: { data, error }, // will be passed to the page component as props\n//   };\n// }\nHomePage.auth = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLEVBQUVBLFdBQVc7Ozs7OzZCQUFJOzs7Ozs7cUJBQ2pDOzs7Ozs7YUFDRixDQUNOO0NBQ0g7R0ExREtsQixRQUFROztRQUNNRiwwREFBZTs7O0FBRDdCRSxLQUFBQSxRQUFRO0FBNERkLCtDQUErQztBQUMvQyx5QkFBeUI7QUFDekIsNENBQTRDO0FBQzVDLDBEQUEwRDtBQUMxRCxnRUFBZ0U7QUFDaEUsOEVBQThFO0FBQzlFLCtEQUErRDtBQUUvRCxzREFBc0Q7QUFFdEQscUJBQXFCO0FBQ3JCLHNCQUFzQjtBQUV0QixhQUFhO0FBQ2IsK0VBQStFO0FBQy9FLE9BQU87QUFDUCxJQUFJO0FBRUpBLFFBQVEsQ0FBQzJCLElBQUksR0FBRyxJQUFJLENBQUM7QUFFckIsK0RBQWUzQixRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUvaW5kZXgudHN4Pzc1OTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvbWUvUHJvZmlsZVwiO1xuaW1wb3J0IFByb2dyZXNzQ2FyZHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9tZS9Qcm9ncmVzc0Rpc3BsYXlcIjtcbmltcG9ydCBUb2RheVRhc2tMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvbWUvVG9kYXlUYXNrTGlzdFwiO1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBBZGRUYXNrIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Rhc2tzL0FkZFRhc2tcIjtcbmltcG9ydCB7IHVzZUVtYWlsQ29udGV4dCB9IGZyb20gXCIuLi9FbWFpbENvbnRleHRcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbi8vIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuLy8gICByb3V0ZXIucHVzaChcIi9ob21lXCIpO1xuLy8gfSwgW10pO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBlbWFpbCB9ID0gdXNlRW1haWxDb250ZXh0KCk7XG4gIC8vZmV0Y2ggYWxsIGV4aXN0aW5nIHVuZmluaXNoZWQgdGFza3MgZm9yIHRoZSB1c2VyXG4gIGNvbnN0IFtmZXRjaGluZywgc2V0ZmV0Y2hpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG4gIGNvbnN0IFt0YXNrc0RhdGEsIHNldHRhc2tzRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBmdW5jdGlvbiBmZXRjaERhdGEoZmV0Y2hpbmc6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBTSE9XX1RBU0tfVVJMID0gZmV0Y2hpbmcgPyBwcm9jZXNzLmVudi5HRVRfVEFTS1NfVVJMICsgZW1haWwgOiBudWxsOyAvL2ZldGNoIG9ubHkgaWYgdGhlIGNvbmRpdGlvbiBpcyB0cnVlXG4gICAgY29uc29sZS5sb2coXCJmZXRjaGluZyA9IFwiICsgZmV0Y2hpbmcpO1xuXG4gICAgY29uc3QgZmV0Y2hlciA9ICh1cmw6IHN0cmluZykgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihTSE9XX1RBU0tfVVJMLCBmZXRjaGVyKTtcbiAgICAvL3NldCBpdCB0byBmYWxzZVxuICAgIGlmIChmZXRjaGluZykgc2V0ZmV0Y2hpbmcoZmFsc2UpO1xuXG4gICAgcmV0dXJuIHsgZGF0YTogZGF0YSwgZXJyb3I6IGVycm9yIH07XG4gIH1cblxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBmZXRjaERhdGEoZmV0Y2hpbmcpO1xuICAvLyBjb25zb2xlLmxvZyhcImZldGNoZWQsIGRhdGEgPSBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEudGFza3MpKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHNldGZldGNoaW5nKHRydWUpO1xuICAvLyAgIHNldHRhc2tzRGF0YShkYXRhKTtcbiAgLy8gfSwgW2RhdGFdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmICghZmV0Y2hpbmcpIHtcbiAgLy8gICAgIHJldHVybjtcbiAgLy8gICB9XG5cbiAgLy8gICBzZXRmZXRjaGluZyh0cnVlKTtcbiAgLy8gfSwgW2ZldGNoaW5nXSk7XG5cbiAgLy8gY29uc3QgW3Rhc2tzRGF0YSwgc2V0dGFza3NEYXRhXSA9IHVzZVN0YXRlKGRhdGEpO1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHNldHRhc2tzRGF0YShkYXRhKTtcbiAgLy8gfSwgW2RhdGFdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIC8vIGNvbnNvbGUubG9nKFwidGFza3NEYXRhID0gXCIgKyBKU09OLnN0cmluZ2lmeSh0YXNrc0RhdGEpKTtcbiAgLy8gfSwgW3Rhc2tzRGF0YV0pO1xuXG4gIC8vIGNvbnNvbGUubG9nKFwiZGF0YSB0eXBlID0gXCIgKyB0eXBlb2YgZGF0YSArIFwiLGRhdGEgPSBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggbWFyZ2luQm90dG9tPVwiMzAlXCI+XG4gICAgICA8UHJvZmlsZSAvPlxuICAgICAgPFByb2dyZXNzQ2FyZHMgLz5cbiAgICAgIDxCb3ggc3R5bGU9e3sgd2lkdGg6IFwiOTAlXCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fT5cbiAgICAgICAgPFRleHQgZm9udFNpemU9XCIxeGxcIiBmb250V2VpZ2h0PXs2MDB9PlxuICAgICAgICAgIFdoYXQgZG8gSSBuZWVkIHRvIGRvIHRvZGF5P1xuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUb2RheVRhc2tMaXN0IGRhdGE9e2RhdGF9IGVycm9yPXtlcnJvcn0gLz5cbiAgICAgICAgPEFkZFRhc2sgc2V0ZmV0Y2hpbmc9e3NldGZldGNoaW5nfSAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuLy8gICBjb25zb2xlLmxvZyhcImhlcmVcIik7XG4vLyAgIC8vIGNvbnN0IHsgZW1haWwgfSA9IHVzZUVtYWlsQ29udGV4dCgpO1xuLy8gICAvLyAvL2ZldGNoIGFsbCBleGlzdGluZyB1bmZpbmlzaGVkIHRhc2tzIGZvciB0aGUgdXNlclxuLy8gICAvLyBjb25zdCBTSE9XX1RBU0tfVVJMID0gcHJvY2Vzcy5lbnYuR0VUX1RBU0tTX1VSTCArIGVtYWlsO1xuLy8gICAvLyBjb25zdCBmZXRjaGVyID0gKHVybDogc3RyaW5nKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4vLyAgIC8vIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihTSE9XX1RBU0tfVVJMLCBmZXRjaGVyKTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyhcImRhdGEgPSBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuLy8gICBjb25zdCBkYXRhID0gXCJcIjtcbi8vICAgY29uc3QgZXJyb3IgPSBcIlwiO1xuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHsgZGF0YSwgZXJyb3IgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4vLyAgIH07XG4vLyB9XG5cbkhvbWVQYWdlLmF1dGggPSB0cnVlO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJvZmlsZSIsIlByb2dyZXNzQ2FyZHMiLCJUb2RheVRhc2tMaXN0IiwiQm94IiwiVGV4dCIsIkFkZFRhc2siLCJ1c2VFbWFpbENvbnRleHQiLCJ1c2VTV1IiLCJIb21lUGFnZSIsImZldGNoRGF0YSIsImZldGNoaW5nIiwiU0hPV19UQVNLX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJHRVRfVEFTS1NfVVJMIiwiZW1haWwiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJzZXRmZXRjaGluZyIsInRhc2tzRGF0YSIsInNldHRhc2tzRGF0YSIsIm1hcmdpbkJvdHRvbSIsInN0eWxlIiwid2lkdGgiLCJtYXJnaW4iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJhdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/home/index.tsx\n");

/***/ })

});