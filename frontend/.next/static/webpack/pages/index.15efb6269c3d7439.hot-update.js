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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_home_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/home/Profile */ \"./src/components/home/Profile.tsx\");\n/* harmony import */ var _components_home_ProgressDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/home/ProgressDisplay */ \"./src/components/home/ProgressDisplay.tsx\");\n/* harmony import */ var _components_home_TodayTaskList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/TodayTaskList */ \"./src/components/home/TodayTaskList.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_tasks_AddTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/tasks/AddTask */ \"./src/components/tasks/AddTask.tsx\");\n/* harmony import */ var _EmailContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../EmailContext */ \"./src/pages/EmailContext.tsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n// useEffect(() => {\n//   const router = useRouter();\n//   router.push(\"/home\");\n// }, []);\nvar HomePage = function() {\n    var changeTask = function changeTask(data) {\n        console.log(\"changing\");\n        settasksData(function(oldData) {\n            return _objectSpread({}, oldData, data);\n        });\n    };\n    _s();\n    var email = (0,_EmailContext__WEBPACK_IMPORTED_MODULE_6__.useEmailContext)().email;\n    //fetch all existing unfinished tasks for the user\n    var SHOW_TASK_URL = \"http://localhost:2000/task/email/\" + email;\n    var fetcher = function(url) {\n        return fetch(url).then(function(res) {\n            return res.json();\n        });\n    };\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(SHOW_TASK_URL, fetcher), data1 = ref.data, error = ref.error;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data1), tasksData = ref1[0], settasksData = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        settasksData(data1);\n    }, [\n        data1\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        first;\n        return function() {\n            second;\n        };\n    }, [\n        third\n    ]);\n    // console.log(\"data type = \" + typeof data + \",data = \" + JSON.stringify(data));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n        marginBottom: \"30%\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_Profile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_ProgressDisplay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                style: {\n                    width: \"90%\",\n                    margin: \"0 auto\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                        fontSize: \"1xl\",\n                        fontWeight: 600,\n                        children: \"What do I need to do today?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_TodayTaskList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: tasksData,\n                        error: error\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tasks_AddTask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        changeTask: function(data) {\n                            return changeTask(data);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/home/index.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, _this);\n};\n_s(HomePage, \"nH54oAV+cOx/QNHIsyJ621dnp6Q=\", false, function() {\n    return [\n        _EmailContext__WEBPACK_IMPORTED_MODULE_6__.useEmailContext,\n        swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = HomePage;\n// export async function getServerSideProps() {\n//   console.log(\"here\");\n//   // const { email } = useEmailContext();\n//   // //fetch all existing unfinished tasks for the user\n//   // const SHOW_TASK_URL = process.env.GET_TASKS_URL + email;\n//   // const fetcher = (url: string) => fetch(url).then((res) => res.json());\n//   // const { data, error } = useSWR(SHOW_TASK_URL, fetcher);\n//   // console.log(\"data = \" + JSON.stringify(data));\n//   const data = \"\";\n//   const error = \"\";\n//   return {\n//     props: { data, error }, // will be passed to the page component as props\n//   };\n// }\nHomePage.auth = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsQ0FBQzZCLElBQUksR0FBRyxJQUFJLENBQUM7QUFFckIsK0RBQWU3QixRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUvaW5kZXgudHN4Pzc1OTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvbWUvUHJvZmlsZVwiO1xuaW1wb3J0IFByb2dyZXNzQ2FyZHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9tZS9Qcm9ncmVzc0Rpc3BsYXlcIjtcbmltcG9ydCBUb2RheVRhc2tMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvbWUvVG9kYXlUYXNrTGlzdFwiO1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBBZGRUYXNrIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Rhc2tzL0FkZFRhc2tcIjtcbmltcG9ydCB7IHVzZUVtYWlsQ29udGV4dCB9IGZyb20gXCIuLi9FbWFpbENvbnRleHRcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbi8vIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuLy8gICByb3V0ZXIucHVzaChcIi9ob21lXCIpO1xuLy8gfSwgW10pO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBlbWFpbCB9ID0gdXNlRW1haWxDb250ZXh0KCk7XG4gIC8vZmV0Y2ggYWxsIGV4aXN0aW5nIHVuZmluaXNoZWQgdGFza3MgZm9yIHRoZSB1c2VyXG4gIGNvbnN0IFNIT1dfVEFTS19VUkwgPSBwcm9jZXNzLmVudi5HRVRfVEFTS1NfVVJMICsgZW1haWw7XG4gIGNvbnN0IGZldGNoZXIgPSAodXJsOiBzdHJpbmcpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFNIT1dfVEFTS19VUkwsIGZldGNoZXIpO1xuXG4gIGNvbnN0IFt0YXNrc0RhdGEsIHNldHRhc2tzRGF0YV0gPSB1c2VTdGF0ZShkYXRhKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXR0YXNrc0RhdGEoZGF0YSk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmaXJzdFxuICBcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc2Vjb25kXG4gICAgfVxuICB9LCBbdGhpcmRdKVxuICBcblxuXG4gIGZ1bmN0aW9uIGNoYW5nZVRhc2soZGF0YTogYW55KSB7XG4gICAgY29uc29sZS5sb2coXCJjaGFuZ2luZ1wiKTtcbiAgICBzZXR0YXNrc0RhdGEoKG9sZERhdGE6IGFueSkgPT4gKHtcbiAgICAgIC4uLm9sZERhdGEsXG4gICAgICAuLi5kYXRhLFxuICAgIH0pKTtcbiAgfVxuXG4gIC8vIGNvbnNvbGUubG9nKFwiZGF0YSB0eXBlID0gXCIgKyB0eXBlb2YgZGF0YSArIFwiLGRhdGEgPSBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggbWFyZ2luQm90dG9tPVwiMzAlXCI+XG4gICAgICA8UHJvZmlsZSAvPlxuICAgICAgPFByb2dyZXNzQ2FyZHMgLz5cbiAgICAgIDxCb3ggc3R5bGU9e3sgd2lkdGg6IFwiOTAlXCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fT5cbiAgICAgICAgPFRleHQgZm9udFNpemU9XCIxeGxcIiBmb250V2VpZ2h0PXs2MDB9PlxuICAgICAgICAgIFdoYXQgZG8gSSBuZWVkIHRvIGRvIHRvZGF5P1xuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUb2RheVRhc2tMaXN0IGRhdGE9e3Rhc2tzRGF0YX0gZXJyb3I9e2Vycm9yfSAvPlxuICAgICAgICA8QWRkVGFzayBjaGFuZ2VUYXNrPXsoZGF0YTogYW55KSA9PiBjaGFuZ2VUYXNrKGRhdGEpfSAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuLy8gICBjb25zb2xlLmxvZyhcImhlcmVcIik7XG4vLyAgIC8vIGNvbnN0IHsgZW1haWwgfSA9IHVzZUVtYWlsQ29udGV4dCgpO1xuLy8gICAvLyAvL2ZldGNoIGFsbCBleGlzdGluZyB1bmZpbmlzaGVkIHRhc2tzIGZvciB0aGUgdXNlclxuLy8gICAvLyBjb25zdCBTSE9XX1RBU0tfVVJMID0gcHJvY2Vzcy5lbnYuR0VUX1RBU0tTX1VSTCArIGVtYWlsO1xuLy8gICAvLyBjb25zdCBmZXRjaGVyID0gKHVybDogc3RyaW5nKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4vLyAgIC8vIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihTSE9XX1RBU0tfVVJMLCBmZXRjaGVyKTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyhcImRhdGEgPSBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuLy8gICBjb25zdCBkYXRhID0gXCJcIjtcbi8vICAgY29uc3QgZXJyb3IgPSBcIlwiO1xuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHsgZGF0YSwgZXJyb3IgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4vLyAgIH07XG4vLyB9XG5cbkhvbWVQYWdlLmF1dGggPSB0cnVlO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvZmlsZSIsIlByb2dyZXNzQ2FyZHMiLCJUb2RheVRhc2tMaXN0IiwiQm94IiwiVGV4dCIsIkFkZFRhc2siLCJ1c2VFbWFpbENvbnRleHQiLCJ1c2VTV1IiLCJIb21lUGFnZSIsImNoYW5nZVRhc2siLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNldHRhc2tzRGF0YSIsIm9sZERhdGEiLCJlbWFpbCIsIlNIT1dfVEFTS19VUkwiLCJwcm9jZXNzIiwiZW52IiwiR0VUX1RBU0tTX1VSTCIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZXJyb3IiLCJ0YXNrc0RhdGEiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwibWFyZ2luQm90dG9tIiwic3R5bGUiLCJ3aWR0aCIsIm1hcmdpbiIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/home/index.tsx\n");

/***/ })

});