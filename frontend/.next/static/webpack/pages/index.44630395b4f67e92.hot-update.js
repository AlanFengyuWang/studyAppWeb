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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_home_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/home/Profile */ \"./src/components/home/Profile.tsx\");\n/* harmony import */ var _components_home_ProgressDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/ProgressDisplay */ \"./src/components/home/ProgressDisplay.tsx\");\n/* harmony import */ var _components_home_TodayTaskList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/TodayTaskList */ \"./src/components/home/TodayTaskList.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_tasks_AddTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/tasks/AddTask */ \"./src/components/tasks/AddTask.tsx\");\n/* harmony import */ var _EmailContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../EmailContext */ \"./src/pages/EmailContext.tsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n// useEffect(() => {\n//   const router = useRouter();\n//   router.push(\"/home\");\n// }, []);\nvar HomePage = function() {\n    var fetchData = function fetchData(fetching) {\n        var SHOW_TASK_URL = fetching ? \"http://localhost:2000/task/email/\" + email : \"http://localhost:2000/task/email/\" + email; //fetch only if the condition is true\n        var fetcher = function(url) {\n            return fetch(url).then(function(res) {\n                return res.json();\n            });\n        };\n        var ref = (0,swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(SHOW_TASK_URL, fetcher), data = ref.data, error = ref.error;\n        //set it to false\n        if (fetching) setfetching(false);\n        return {\n            data: data,\n            error: error\n        };\n    };\n    _s();\n    var email = (0,_EmailContext__WEBPACK_IMPORTED_MODULE_6__.useEmailContext)().email;\n    //fetch all existing unfinished tasks for the user\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), fetching1 = ref3[0], setfetching = ref3[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), tasksData = ref1[0], settasksData = ref1[1];\n    var ref2 = fetchData(fetching1), data1 = ref2.data, error1 = ref2.error;\n    // console.log(\"fetched, data = \" + JSON.stringify(data.tasks));\n    // useEffect(() => {\n    //   if (!fetching) {\n    //     return;\n    //   }\n    //   setfetching(true);\n    // }, [fetching]);\n    // const [tasksData, settasksData] = useState(data);\n    // useEffect(() => {\n    //   settasksData(data);\n    // }, [data]);\n    // useEffect(() => {\n    //   // console.log(\"tasksData = \" + JSON.stringify(tasksData));\n    // }, [tasksData]);\n    // console.log(\"data type = \" + typeof data + \",data = \" + JSON.stringify(data));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n        marginBottom: \"30%\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_Profile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_ProgressDisplay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                style: {\n                    width: \"90%\",\n                    margin: \"0 auto\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                        fontSize: \"1xl\",\n                        fontWeight: 600,\n                        children: \"What do I need to do today?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_TodayTaskList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: tasksData,\n                        error: error1\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasks_AddTask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        setfetching: setfetching\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, _this);\n};\n_s(HomePage, \"rusyr/kRPSEt+CnwPZ1YzTGSxyA=\", false, function() {\n    return [\n        _EmailContext__WEBPACK_IMPORTED_MODULE_6__.useEmailContext\n    ];\n});\n_c = HomePage;\n// export async function getServerSideProps() {\n//   console.log(\"here\");\n//   // const { email } = useEmailContext();\n//   // //fetch all existing unfinished tasks for the user\n//   // const SHOW_TASK_URL = process.env.GET_TASKS_URL + email;\n//   // const fetcher = (url: string) => fetch(url).then((res) => res.json());\n//   // const { data, error } = useSWR(SHOW_TASK_URL, fetcher);\n//   // console.log(\"data = \" + JSON.stringify(data));\n//   const data = \"\";\n//   const error = \"\";\n//   return {\n//     props: { data, error }, // will be passed to the page component as props\n//   };\n// }\nHomePage.auth = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSxRQUFRO0FBd0RkLCtDQUErQztBQUMvQyx5QkFBeUI7QUFDekIsNENBQTRDO0FBQzVDLDBEQUEwRDtBQUMxRCxnRUFBZ0U7QUFDaEUsOEVBQThFO0FBQzlFLCtEQUErRDtBQUUvRCxzREFBc0Q7QUFFdEQscUJBQXFCO0FBQ3JCLHNCQUFzQjtBQUV0QixhQUFhO0FBQ2IsK0VBQStFO0FBQy9FLE9BQU87QUFDUCxJQUFJO0FBRUpBLFFBQVEsQ0FBQ3lCLElBQUksR0FBRyxJQUFJLENBQUM7QUFFckIsK0RBQWV6QixRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUvaW5kZXgudHN4Pzc1OTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvbWUvUHJvZmlsZVwiO1xuaW1wb3J0IFByb2dyZXNzQ2FyZHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9tZS9Qcm9ncmVzc0Rpc3BsYXlcIjtcbmltcG9ydCBUb2RheVRhc2tMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvbWUvVG9kYXlUYXNrTGlzdFwiO1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBBZGRUYXNrIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Rhc2tzL0FkZFRhc2tcIjtcbmltcG9ydCB7IHVzZUVtYWlsQ29udGV4dCB9IGZyb20gXCIuLi9FbWFpbENvbnRleHRcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbi8vIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuLy8gICByb3V0ZXIucHVzaChcIi9ob21lXCIpO1xuLy8gfSwgW10pO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBlbWFpbCB9ID0gdXNlRW1haWxDb250ZXh0KCk7XG4gIC8vZmV0Y2ggYWxsIGV4aXN0aW5nIHVuZmluaXNoZWQgdGFza3MgZm9yIHRoZSB1c2VyXG4gIGNvbnN0IFtmZXRjaGluZywgc2V0ZmV0Y2hpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG4gIGNvbnN0IFt0YXNrc0RhdGEsIHNldHRhc2tzRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBmdW5jdGlvbiBmZXRjaERhdGEoZmV0Y2hpbmc6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBTSE9XX1RBU0tfVVJMID0gZmV0Y2hpbmdcbiAgICAgID8gcHJvY2Vzcy5lbnYuR0VUX1RBU0tTX1VSTCArIGVtYWlsXG4gICAgICA6IHByb2Nlc3MuZW52LkdFVF9UQVNLU19VUkwgKyBlbWFpbDsgLy9mZXRjaCBvbmx5IGlmIHRoZSBjb25kaXRpb24gaXMgdHJ1ZVxuICAgIGNvbnN0IGZldGNoZXIgPSAodXJsOiBzdHJpbmcpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoU0hPV19UQVNLX1VSTCwgZmV0Y2hlcik7XG4gICAgLy9zZXQgaXQgdG8gZmFsc2VcbiAgICBpZiAoZmV0Y2hpbmcpIHNldGZldGNoaW5nKGZhbHNlKTtcblxuICAgIHJldHVybiB7IGRhdGE6IGRhdGEsIGVycm9yOiBlcnJvciB9O1xuICB9XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gZmV0Y2hEYXRhKGZldGNoaW5nKTtcbiAgXG4gIC8vIGNvbnNvbGUubG9nKFwiZmV0Y2hlZCwgZGF0YSA9IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YS50YXNrcykpO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYgKCFmZXRjaGluZykge1xuICAvLyAgICAgcmV0dXJuO1xuICAvLyAgIH1cblxuICAvLyAgIHNldGZldGNoaW5nKHRydWUpO1xuICAvLyB9LCBbZmV0Y2hpbmddKTtcblxuICAvLyBjb25zdCBbdGFza3NEYXRhLCBzZXR0YXNrc0RhdGFdID0gdXNlU3RhdGUoZGF0YSk7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgc2V0dGFza3NEYXRhKGRhdGEpO1xuICAvLyB9LCBbZGF0YV0pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgLy8gY29uc29sZS5sb2coXCJ0YXNrc0RhdGEgPSBcIiArIEpTT04uc3RyaW5naWZ5KHRhc2tzRGF0YSkpO1xuICAvLyB9LCBbdGFza3NEYXRhXSk7XG5cbiAgLy8gY29uc29sZS5sb2coXCJkYXRhIHR5cGUgPSBcIiArIHR5cGVvZiBkYXRhICsgXCIsZGF0YSA9IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBtYXJnaW5Cb3R0b209XCIzMCVcIj5cbiAgICAgIDxQcm9maWxlIC8+XG4gICAgICA8UHJvZ3Jlc3NDYXJkcyAvPlxuICAgICAgPEJveCBzdHlsZT17eyB3aWR0aDogXCI5MCVcIiwgbWFyZ2luOiBcIjAgYXV0b1wiIH19PlxuICAgICAgICA8VGV4dCBmb250U2l6ZT1cIjF4bFwiIGZvbnRXZWlnaHQ9ezYwMH0+XG4gICAgICAgICAgV2hhdCBkbyBJIG5lZWQgdG8gZG8gdG9kYXk/XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRvZGF5VGFza0xpc3QgZGF0YT17dGFza3NEYXRhfSBlcnJvcj17ZXJyb3J9IC8+XG4gICAgICAgIDxBZGRUYXNrIHNldGZldGNoaW5nPXtzZXRmZXRjaGluZ30gLz5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbi8vICAgY29uc29sZS5sb2coXCJoZXJlXCIpO1xuLy8gICAvLyBjb25zdCB7IGVtYWlsIH0gPSB1c2VFbWFpbENvbnRleHQoKTtcbi8vICAgLy8gLy9mZXRjaCBhbGwgZXhpc3RpbmcgdW5maW5pc2hlZCB0YXNrcyBmb3IgdGhlIHVzZXJcbi8vICAgLy8gY29uc3QgU0hPV19UQVNLX1VSTCA9IHByb2Nlc3MuZW52LkdFVF9UQVNLU19VUkwgKyBlbWFpbDtcbi8vICAgLy8gY29uc3QgZmV0Y2hlciA9ICh1cmw6IHN0cmluZykgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuLy8gICAvLyBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoU0hPV19UQVNLX1VSTCwgZmV0Y2hlcik7XG5cbi8vICAgLy8gY29uc29sZS5sb2coXCJkYXRhID0gXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbi8vICAgY29uc3QgZGF0YSA9IFwiXCI7XG4vLyAgIGNvbnN0IGVycm9yID0gXCJcIjtcblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7IGRhdGEsIGVycm9yIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuLy8gICB9O1xuLy8gfVxuXG5Ib21lUGFnZS5hdXRoID0gdHJ1ZTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlByb2ZpbGUiLCJQcm9ncmVzc0NhcmRzIiwiVG9kYXlUYXNrTGlzdCIsIkJveCIsIlRleHQiLCJBZGRUYXNrIiwidXNlRW1haWxDb250ZXh0IiwidXNlU1dSIiwiSG9tZVBhZ2UiLCJmZXRjaERhdGEiLCJmZXRjaGluZyIsIlNIT1dfVEFTS19VUkwiLCJwcm9jZXNzIiwiZW52IiwiR0VUX1RBU0tTX1VSTCIsImVtYWlsIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJzZXRmZXRjaGluZyIsInRhc2tzRGF0YSIsInNldHRhc2tzRGF0YSIsIm1hcmdpbkJvdHRvbSIsInN0eWxlIiwid2lkdGgiLCJtYXJnaW4iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJhdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/home/index.tsx\n");

/***/ })

});