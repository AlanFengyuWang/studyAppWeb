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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\nvar currentTime = new Date();\nvar dailyTasks = [\n    {\n        type: \"learning\",\n        title: \"Finishing the chemistry ch2\",\n        due: {\n            currentTime: currentTime\n        }\n    },\n    {\n        type: \"revision\",\n        title: \"Revising the chemistry ch1\",\n        due: {\n            currentTime: currentTime\n        }\n    },\n    {\n        type: \"revision\",\n        title: \"Revising the chemistry ch1\",\n        contentLeft: 24,\n        due: {\n            currentTime: currentTime\n        }\n    }, \n];\nvar TodayTaskList = function() {\n    //get the tasks from localStorage\n    if (true) {\n        var tasks = window.localStorage.hasOwnProperty(\"tasks\") ? window.localStorage.getItem(\"tasks\") : \"[]\";\n        // console.log(\"tasks = \" + tasks);\n        var tasksObject = tasks ? _toConsumableArray(JSON.parse(tasks)) : [];\n        console.log(\"tasksObject = \" + JSON.stringify(tasksObject));\n        // console.log(\"taskObject\" + JSON.stringify(tasksObject));\n        // window.localStorage.setItem(\"tasks\", JSON.stringify(tasksObject));\n        // // window.localStorage.setItem(\"tasks\", \"Tasksss\");\n        // // console.log(localStorage.tasks);\n        // console.log(window.localStorage.getItem(\"tasks\"));\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    // if (typeof window !== \"undefined\") {\n    //   // localStorage.clear();\n    //   // window.localStorage.hasOwnProperty(\"tasks\")\n    //   // const tasks = window.localStorage.hasOwnProperty(\"tasks\")\n    //   //   ? window.localStorage.getItem(\"tasks\")\n    //   //   : \"[]\";\n    //   // const tasksObject: Array<string | Object> = tasks ? JSON.parse(tasks) : [];\n    //   // console.log(\"taskObject\" + JSON.stringify(tasksObject));\n    //   // localStorage.setItem(\"tasks\", JSON.stringify(tasksObject));\n    //   return <>Hello</>;\n    //   // return tasksObject.map((task: string | Object) => <>{task}</>);\n    // } else {\n    //   return <></>;\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n_c = TodayTaskList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodayTaskList);\nvar _c;\n$RefreshReg$(_c, \"TodayTaskList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL1RvZGF5VGFza0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBRzFCLElBQU1DLFdBQVcsR0FBRyxJQUFJQyxJQUFJLEVBQUU7QUFDOUIsSUFBTUMsVUFBVSxHQUFHO0lBQ2pCO1FBQ0VDLElBQUksRUFBRSxVQUFVO1FBQ2hCQyxLQUFLLEVBQUUsNkJBQTZCO1FBQ3BDQyxHQUFHLEVBQUU7WUFBRUwsV0FBVyxFQUFYQSxXQUFXO1NBQUU7S0FDckI7SUFDRDtRQUNFRyxJQUFJLEVBQUUsVUFBVTtRQUNoQkMsS0FBSyxFQUFFLDRCQUE0QjtRQUNuQ0MsR0FBRyxFQUFFO1lBQUVMLFdBQVcsRUFBWEEsV0FBVztTQUFFO0tBQ3JCO0lBQ0Q7UUFDRUcsSUFBSSxFQUFFLFVBQVU7UUFDaEJDLEtBQUssRUFBRSw0QkFBNEI7UUFDbkNFLFdBQVcsRUFBRSxFQUFFO1FBQ2ZELEdBQUcsRUFBRTtZQUFFTCxXQUFXLEVBQVhBLFdBQVc7U0FBRTtLQUNyQjtDQUNGO0FBRUQsSUFBTU8sYUFBYSxHQUFHLFdBQU07SUFDMUIsaUNBQWlDO0lBQ2pDLElBQUksSUFBNEIsRUFBRTtRQUNoQyxJQUFNQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQ3JERixNQUFNLENBQUNDLFlBQVksQ0FBQ0UsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUNwQyxJQUFJO1FBRVIsbUNBQW1DO1FBRW5DLElBQU1DLFdBQVcsR0FBMkJMLEtBQUssR0FDNUMsbUJBQUdNLElBQUksQ0FBQ0MsS0FBSyxDQUFDUCxLQUFLLENBQUMsQ0FBakJNLEdBQ0osRUFBRTtRQUNORSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBR0gsSUFBSSxDQUFDSSxTQUFTLENBQUNMLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFNUQsMkRBQTJEO1FBQzNELHFFQUFxRTtRQUNyRSxzREFBc0Q7UUFDdEQsc0NBQXNDO1FBQ3RDLHFEQUFxRDtRQUNyRCxxQkFDRSw2SUFJRyxDQUNIO0tBQ0g7SUFDRCxxQkFBTyw2SUFBSyxDQUFDO0lBQ2IsdUNBQXVDO0lBQ3ZDLDZCQUE2QjtJQUM3QixtREFBbUQ7SUFDbkQsaUVBQWlFO0lBQ2pFLGdEQUFnRDtJQUNoRCxpQkFBaUI7SUFDakIsbUZBQW1GO0lBQ25GLGdFQUFnRTtJQUNoRSxtRUFBbUU7SUFDbkUsdUJBQXVCO0lBQ3ZCLHVFQUF1RTtJQUN2RSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLElBQUk7SUFDSixxQkFBTyw2SUFBSyxDQUFDO0NBQ2Q7QUEzQ0tOLEtBQUFBLGFBQWE7QUE2Q25CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9Ub2RheVRhc2tMaXN0LnRzeD9iZjA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFRhc2tDYXJkIGZyb20gXCIuLi90YXNrcy9UYXNrQ2FyZFwiO1xuY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuY29uc3QgZGFpbHlUYXNrcyA9IFtcbiAge1xuICAgIHR5cGU6IFwibGVhcm5pbmdcIixcbiAgICB0aXRsZTogXCJGaW5pc2hpbmcgdGhlIGNoZW1pc3RyeSBjaDJcIixcbiAgICBkdWU6IHsgY3VycmVudFRpbWUgfSxcbiAgfSxcbiAge1xuICAgIHR5cGU6IFwicmV2aXNpb25cIixcbiAgICB0aXRsZTogXCJSZXZpc2luZyB0aGUgY2hlbWlzdHJ5IGNoMVwiLFxuICAgIGR1ZTogeyBjdXJyZW50VGltZSB9LFxuICB9LFxuICB7XG4gICAgdHlwZTogXCJyZXZpc2lvblwiLFxuICAgIHRpdGxlOiBcIlJldmlzaW5nIHRoZSBjaGVtaXN0cnkgY2gxXCIsXG4gICAgY29udGVudExlZnQ6IDI0LFxuICAgIGR1ZTogeyBjdXJyZW50VGltZSB9LFxuICB9LFxuXTtcblxuY29uc3QgVG9kYXlUYXNrTGlzdCA9ICgpID0+IHtcbiAgLy9nZXQgdGhlIHRhc2tzIGZyb20gbG9jYWxTdG9yYWdlXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjb25zdCB0YXNrcyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoXCJ0YXNrc1wiKVxuICAgICAgPyB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKVxuICAgICAgOiBcIltdXCI7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcInRhc2tzID0gXCIgKyB0YXNrcyk7XG5cbiAgICBjb25zdCB0YXNrc09iamVjdDogQXJyYXk8c3RyaW5nIHwgT2JqZWN0PiA9IHRhc2tzXG4gICAgICA/IFsuLi5KU09OLnBhcnNlKHRhc2tzKV1cbiAgICAgIDogW107XG4gICAgY29uc29sZS5sb2coXCJ0YXNrc09iamVjdCA9IFwiICsgSlNPTi5zdHJpbmdpZnkodGFza3NPYmplY3QpKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwidGFza09iamVjdFwiICsgSlNPTi5zdHJpbmdpZnkodGFza3NPYmplY3QpKTtcbiAgICAvLyB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrc09iamVjdCkpO1xuICAgIC8vIC8vIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIFwiVGFza3Nzc1wiKTtcbiAgICAvLyAvLyBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UudGFza3MpO1xuICAgIC8vIGNvbnNvbGUubG9nKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgey8qIHt0YXNrc09iamVjdC5tYXAoKHRhc2s6IHN0cmluZyB8IE9iamVjdCkgPT4gKFxuICAgICAgICAgIDxUYXNrQ2FyZCB0YXNrPXt0YXNrfSAvPlxuICAgICAgICApKX0gKi99XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG4gIHJldHVybiA8PjwvPjtcbiAgLy8gaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgLy8gICAvLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgLy8gICAvLyB3aW5kb3cubG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KFwidGFza3NcIilcbiAgLy8gICAvLyBjb25zdCB0YXNrcyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoXCJ0YXNrc1wiKVxuICAvLyAgIC8vICAgPyB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKVxuICAvLyAgIC8vICAgOiBcIltdXCI7XG4gIC8vICAgLy8gY29uc3QgdGFza3NPYmplY3Q6IEFycmF5PHN0cmluZyB8IE9iamVjdD4gPSB0YXNrcyA/IEpTT04ucGFyc2UodGFza3MpIDogW107XG4gIC8vICAgLy8gY29uc29sZS5sb2coXCJ0YXNrT2JqZWN0XCIgKyBKU09OLnN0cmluZ2lmeSh0YXNrc09iamVjdCkpO1xuICAvLyAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3NPYmplY3QpKTtcbiAgLy8gICByZXR1cm4gPD5IZWxsbzwvPjtcbiAgLy8gICAvLyByZXR1cm4gdGFza3NPYmplY3QubWFwKCh0YXNrOiBzdHJpbmcgfCBPYmplY3QpID0+IDw+e3Rhc2t9PC8+KTtcbiAgLy8gfSBlbHNlIHtcbiAgLy8gICByZXR1cm4gPD48Lz47XG4gIC8vIH1cbiAgcmV0dXJuIDw+PC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kYXlUYXNrTGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsImRhaWx5VGFza3MiLCJ0eXBlIiwidGl0bGUiLCJkdWUiLCJjb250ZW50TGVmdCIsIlRvZGF5VGFza0xpc3QiLCJ0YXNrcyIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImhhc093blByb3BlcnR5IiwiZ2V0SXRlbSIsInRhc2tzT2JqZWN0IiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/home/TodayTaskList.tsx\n");

/***/ })

});