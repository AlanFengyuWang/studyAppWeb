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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_home_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/home/Profile */ \"./src/components/home/Profile.tsx\");\n/* harmony import */ var _components_home_ProgressDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/ProgressDisplay */ \"./src/components/home/ProgressDisplay.tsx\");\n/* harmony import */ var _components_home_TodayTaskList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/TodayTaskList */ \"./src/components/home/TodayTaskList.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_tasks_AddTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/tasks/AddTask */ \"./src/components/tasks/AddTask.tsx\");\n/* harmony import */ var _EmailContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../EmailContext */ \"./src/pages/EmailContext.tsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n// useEffect(() => {\n//   const router = useRouter();\n//   router.push(\"/home\");\n// }, []);\nvar HomePage = function() {\n    var fetchData = function fetchData(fetching) {\n        var SHOW_TASK_URL = fetching ? \"http://localhost:2000/task/email/\" + email : \"http://localhost:2000/task/email/\" + email; //fetch only if the condition is true\n        var fetcher = function(url) {\n            return fetch(url).then(function(res) {\n                return res.json();\n            });\n        };\n        var ref = (0,swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(SHOW_TASK_URL, fetcher), data = ref.data, error = ref.error;\n        //set it to false\n        if (fetching) setfetching(false);\n        console.log(\"fetched\");\n        return {\n            data: data,\n            error: error\n        };\n    };\n    _s();\n    var email = (0,_EmailContext__WEBPACK_IMPORTED_MODULE_6__.useEmailContext)().email;\n    //fetch all existing unfinished tasks for the user\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), fetching1 = ref2[0], setfetching = ref2[1];\n    var ref1 = fetchData(fetching1), data1 = ref1.data, error1 = ref1.error;\n    // useEffect(() => {\n    //   if (!fetching) {\n    //     return;\n    //   }\n    //   setfetching(true);\n    // }, [fetching]);\n    // const [tasksData, settasksData] = useState(data);\n    // useEffect(() => {\n    //   settasksData(data);\n    // }, [data]);\n    // useEffect(() => {\n    //   // console.log(\"tasksData = \" + JSON.stringify(tasksData));\n    // }, [tasksData]);\n    // console.log(\"data type = \" + typeof data + \",data = \" + JSON.stringify(data));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n        marginBottom: \"30%\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_Profile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_ProgressDisplay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                style: {\n                    width: \"90%\",\n                    margin: \"0 auto\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                        fontSize: \"1xl\",\n                        fontWeight: 600,\n                        children: \"What do I need to do today?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_TodayTaskList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: data1,\n                        error: error1\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasks_AddTask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        setfetching: setfetching\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, _this);\n};\n_s(HomePage, \"hmfUONFQGnSW+i1IZgI7tbjVFVU=\", false, function() {\n    return [\n        _EmailContext__WEBPACK_IMPORTED_MODULE_6__.useEmailContext\n    ];\n});\n_c = HomePage;\n// export async function getServerSideProps() {\n//   console.log(\"here\");\n//   // const { email } = useEmailContext();\n//   // //fetch all existing unfinished tasks for the user\n//   // const SHOW_TASK_URL = process.env.GET_TASKS_URL + email;\n//   // const fetcher = (url: string) => fetch(url).then((res) => res.json());\n//   // const { data, error } = useSWR(SHOW_TASK_URL, fetcher);\n//   // console.log(\"data = \" + JSON.stringify(data));\n//   const data = \"\";\n//   const error = \"\";\n//   return {\n//     props: { data, error }, // will be passed to the page component as props\n//   };\n// }\nHomePage.auth = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNoRSw4RUFBOEU7QUFDOUUsK0RBQStEO0FBRS9ELHNEQUFzRDtBQUV0RCxxQkFBcUI7QUFDckIsc0JBQXNCO0FBRXRCLGFBQWE7QUFDYiwrRUFBK0U7QUFDL0UsT0FBTztBQUNQLElBQUk7QUFFSkEsUUFBUSxDQUFDeUIsSUFBSSxHQUFHLElBQUksQ0FBQztBQUVyQiwrREFBZXpCLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaG9tZS9pbmRleC50c3g/NzU5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9tZS9Qcm9maWxlXCI7XG5pbXBvcnQgUHJvZ3Jlc3NDYXJkcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob21lL1Byb2dyZXNzRGlzcGxheVwiO1xuaW1wb3J0IFRvZGF5VGFza0xpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9tZS9Ub2RheVRhc2tMaXN0XCI7XG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IEFkZFRhc2sgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGFza3MvQWRkVGFza1wiO1xuaW1wb3J0IHsgdXNlRW1haWxDb250ZXh0IH0gZnJvbSBcIi4uL0VtYWlsQ29udGV4dFwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuLy8gdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4vLyAgIHJvdXRlci5wdXNoKFwiL2hvbWVcIik7XG4vLyB9LCBbXSk7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGVtYWlsIH0gPSB1c2VFbWFpbENvbnRleHQoKTtcbiAgLy9mZXRjaCBhbGwgZXhpc3RpbmcgdW5maW5pc2hlZCB0YXNrcyBmb3IgdGhlIHVzZXJcbiAgY29uc3QgW2ZldGNoaW5nLCBzZXRmZXRjaGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcblxuICBmdW5jdGlvbiBmZXRjaERhdGEoZmV0Y2hpbmc6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBTSE9XX1RBU0tfVVJMID0gZmV0Y2hpbmdcbiAgICAgID8gcHJvY2Vzcy5lbnYuR0VUX1RBU0tTX1VSTCArIGVtYWlsXG4gICAgICA6IHByb2Nlc3MuZW52LkdFVF9UQVNLU19VUkwgKyBlbWFpbDsgLy9mZXRjaCBvbmx5IGlmIHRoZSBjb25kaXRpb24gaXMgdHJ1ZVxuICAgIGNvbnN0IGZldGNoZXIgPSAodXJsOiBzdHJpbmcpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoU0hPV19UQVNLX1VSTCwgZmV0Y2hlcik7XG4gICAgLy9zZXQgaXQgdG8gZmFsc2VcbiAgICBpZiAoZmV0Y2hpbmcpIHNldGZldGNoaW5nKGZhbHNlKTtcbiAgICBjb25zb2xlLmxvZyhcImZldGNoZWRcIik7XG4gICAgXG5cbiAgICByZXR1cm4geyBkYXRhOiBkYXRhLCBlcnJvcjogZXJyb3IgfTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGZldGNoRGF0YShmZXRjaGluZyk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAoIWZldGNoaW5nKSB7XG4gIC8vICAgICByZXR1cm47XG4gIC8vICAgfVxuXG4gIC8vICAgc2V0ZmV0Y2hpbmcodHJ1ZSk7XG4gIC8vIH0sIFtmZXRjaGluZ10pO1xuXG4gIC8vIGNvbnN0IFt0YXNrc0RhdGEsIHNldHRhc2tzRGF0YV0gPSB1c2VTdGF0ZShkYXRhKTtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBzZXR0YXNrc0RhdGEoZGF0YSk7XG4gIC8vIH0sIFtkYXRhXSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhcInRhc2tzRGF0YSA9IFwiICsgSlNPTi5zdHJpbmdpZnkodGFza3NEYXRhKSk7XG4gIC8vIH0sIFt0YXNrc0RhdGFdKTtcblxuICAvLyBjb25zb2xlLmxvZyhcImRhdGEgdHlwZSA9IFwiICsgdHlwZW9mIGRhdGEgKyBcIixkYXRhID0gXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IG1hcmdpbkJvdHRvbT1cIjMwJVwiPlxuICAgICAgPFByb2ZpbGUgLz5cbiAgICAgIDxQcm9ncmVzc0NhcmRzIC8+XG4gICAgICA8Qm94IHN0eWxlPXt7IHdpZHRoOiBcIjkwJVwiLCBtYXJnaW46IFwiMCBhdXRvXCIgfX0+XG4gICAgICAgIDxUZXh0IGZvbnRTaXplPVwiMXhsXCIgZm9udFdlaWdodD17NjAwfT5cbiAgICAgICAgICBXaGF0IGRvIEkgbmVlZCB0byBkbyB0b2RheT9cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VG9kYXlUYXNrTGlzdCBkYXRhPXtkYXRhfSBlcnJvcj17ZXJyb3J9IC8+XG4gICAgICAgIDxBZGRUYXNrIHNldGZldGNoaW5nPXtzZXRmZXRjaGluZ30gLz5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbi8vICAgY29uc29sZS5sb2coXCJoZXJlXCIpO1xuLy8gICAvLyBjb25zdCB7IGVtYWlsIH0gPSB1c2VFbWFpbENvbnRleHQoKTtcbi8vICAgLy8gLy9mZXRjaCBhbGwgZXhpc3RpbmcgdW5maW5pc2hlZCB0YXNrcyBmb3IgdGhlIHVzZXJcbi8vICAgLy8gY29uc3QgU0hPV19UQVNLX1VSTCA9IHByb2Nlc3MuZW52LkdFVF9UQVNLU19VUkwgKyBlbWFpbDtcbi8vICAgLy8gY29uc3QgZmV0Y2hlciA9ICh1cmw6IHN0cmluZykgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuLy8gICAvLyBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoU0hPV19UQVNLX1VSTCwgZmV0Y2hlcik7XG5cbi8vICAgLy8gY29uc29sZS5sb2coXCJkYXRhID0gXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbi8vICAgY29uc3QgZGF0YSA9IFwiXCI7XG4vLyAgIGNvbnN0IGVycm9yID0gXCJcIjtcblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7IGRhdGEsIGVycm9yIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuLy8gICB9O1xuLy8gfVxuXG5Ib21lUGFnZS5hdXRoID0gdHJ1ZTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlByb2ZpbGUiLCJQcm9ncmVzc0NhcmRzIiwiVG9kYXlUYXNrTGlzdCIsIkJveCIsIlRleHQiLCJBZGRUYXNrIiwidXNlRW1haWxDb250ZXh0IiwidXNlU1dSIiwiSG9tZVBhZ2UiLCJmZXRjaERhdGEiLCJmZXRjaGluZyIsIlNIT1dfVEFTS19VUkwiLCJwcm9jZXNzIiwiZW52IiwiR0VUX1RBU0tTX1VSTCIsImVtYWlsIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJzZXRmZXRjaGluZyIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW5Cb3R0b20iLCJzdHlsZSIsIndpZHRoIiwibWFyZ2luIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiYXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home/index.tsx\n");

/***/ })

});