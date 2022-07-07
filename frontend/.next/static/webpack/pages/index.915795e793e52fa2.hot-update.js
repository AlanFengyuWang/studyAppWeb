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

/***/ "./src/components/home/incomingSchedule/IncomingSchedule.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/home/incomingSchedule/IncomingSchedule.tsx ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AfternoonSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AfternoonSchedule */ \"./src/components/home/incomingSchedule/AfternoonSchedule.tsx\");\n/* harmony import */ var _EveningSchedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EveningSchedule */ \"./src/components/home/incomingSchedule/EveningSchedule.tsx\");\n/* harmony import */ var _MorningSchedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MorningSchedule */ \"./src/components/home/incomingSchedule/MorningSchedule.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _functions_date_dateCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../functions/date/dateCheck */ \"./src/functions/date/dateCheck.ts\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar IncomingSchedule = function(props) {\n    storeScheduleBasedOnPeriod(props.data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        mt: \"20px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                fontWeight: \"bold\",\n                children: \"My Incoming Schedule...\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/incomingSchedule/IncomingSchedule.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MorningSchedule__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/incomingSchedule/IncomingSchedule.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AfternoonSchedule__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/incomingSchedule/IncomingSchedule.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EveningSchedule__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/incomingSchedule/IncomingSchedule.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/incomingSchedule/IncomingSchedule.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_c = IncomingSchedule;\nfunction storeScheduleBasedOnPeriod(data) {\n    // displaying only the tasks TODAY based on morning, afternoon and evening\n    var morningScheduleTasks = [];\n    var afternoonScheduleTasks = [];\n    var eveningScheduleTasks = [];\n    data.map(function(task) {\n        if (task.scheduleTime.length !== 0) {\n            var hasScheduled = false;\n            switch(task.scheduleTime[0].startingTime){\n                case \"Morning\":\n                    morningScheduleTasks.push(task);\n                    hasScheduled = true;\n                    break;\n                case \"Afternoon\":\n                    afternoonScheduleTasks.push(task);\n                    hasScheduled = true;\n                    break;\n                case \"Evening\":\n                    eveningScheduleTasks.push(task);\n                    hasScheduled = true;\n                    break;\n            }\n            if (!hasScheduled) {\n                var startingTime = new Date(task.scheduleTime[0].startingTime);\n                if ((0,_functions_date_dateCheck__WEBPACK_IMPORTED_MODULE_5__.beforeToday)(startingTime) || (0,_functions_date_dateCheck__WEBPACK_IMPORTED_MODULE_5__.isToday)(startingTime)) {\n                    //All tasks before today will be scheduled to today morning\n                    if ((0,_functions_date_dateCheck__WEBPACK_IMPORTED_MODULE_5__.beforeToday)(startingTime) || (0,_functions_date_dateCheck__WEBPACK_IMPORTED_MODULE_5__.isMorning)(startingTime)) {\n                        morningScheduleTasks.push(task);\n                    } else if ((0,_functions_date_dateCheck__WEBPACK_IMPORTED_MODULE_5__.isAfternoon)(startingTime)) {\n                        afternoonScheduleTasks.push(task);\n                    } else if ((0,_functions_date_dateCheck__WEBPACK_IMPORTED_MODULE_5__.isEvening)(startingTime)) {\n                        eveningScheduleTasks.push(task);\n                    }\n                }\n            }\n        }\n    });\n    return {\n        morningScheduleTasks: morningScheduleTasks\n    };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (IncomingSchedule);\nvar _c;\n$RefreshReg$(_c, \"IncomingSchedule\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL2luY29taW5nU2NoZWR1bGUvSW5jb21pbmdTY2hlZHVsZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUMwQjtBQUNKO0FBQ0E7QUFDSDtBQVFGO0FBRTNDLElBQU1XLGdCQUFnQixHQUFHLFNBQUNDLEtBQWlDLEVBQUs7SUFDOURDLDBCQUEwQixDQUFDRCxLQUFLLENBQUNFLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLHFCQUNFLDhEQUFDVixpREFBRztRQUFDVyxFQUFFLEVBQUMsTUFBTTs7MEJBQ1osOERBQUNWLGtEQUFJO2dCQUFDVyxVQUFVLEVBQUMsTUFBTTswQkFBQyx5QkFBdUI7Ozs7O3FCQUFPOzBCQUN0RCw4REFBQ2Isd0RBQWU7Ozs7cUJBQUc7MEJBQ25CLDhEQUFDRiwwREFBaUI7Ozs7cUJBQUc7MEJBQ3JCLDhEQUFDQyx3REFBZTs7OztxQkFBRzs7Ozs7O2FBQ2YsQ0FDTjtDQUNIO0FBVktTLEtBQUFBLGdCQUFnQjtBQVl0QixTQUFTRSwwQkFBMEIsQ0FBQ0MsSUFBc0IsRUFBRTtJQUMxRCwwRUFBMEU7SUFDMUUsSUFBSUcsb0JBQW9CLEdBQXFCLEVBQUU7SUFDL0MsSUFBSUMsc0JBQXNCLEdBQXFCLEVBQUU7SUFDakQsSUFBSUMsb0JBQW9CLEdBQXFCLEVBQUU7SUFDL0NMLElBQUksQ0FBQ00sR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBSztRQUNqQixJQUFJQSxJQUFJLENBQUNDLFlBQVksQ0FBQ0MsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNsQyxJQUFJQyxZQUFZLEdBQUcsS0FBSztZQUN4QixPQUFRSCxJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQ0csWUFBWTtnQkFDdkMsS0FBSyxTQUFTO29CQUNaUixvQkFBb0IsQ0FBQ1MsSUFBSSxDQUFDTCxJQUFJLENBQUMsQ0FBQztvQkFDaENHLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1IsS0FBSyxXQUFXO29CQUNkTixzQkFBc0IsQ0FBQ1EsSUFBSSxDQUFDTCxJQUFJLENBQUMsQ0FBQztvQkFDbENHLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1IsS0FBSyxTQUFTO29CQUNaTCxvQkFBb0IsQ0FBQ08sSUFBSSxDQUFDTCxJQUFJLENBQUMsQ0FBQztvQkFDaENHLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQ3BCLE1BQU07YUFDVDtZQUNELElBQUksQ0FBQ0EsWUFBWSxFQUFFO2dCQUNqQixJQUFJQyxZQUFZLEdBQUcsSUFBSUUsSUFBSSxDQUFDTixJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQ0csWUFBWSxDQUFDO2dCQUM5RCxJQUFJbkIsc0VBQVcsQ0FBQ21CLFlBQVksQ0FBQyxJQUFJZixrRUFBTyxDQUFDZSxZQUFZLENBQUMsRUFBRTtvQkFDdEQsMkRBQTJEO29CQUMzRCxJQUFJbkIsc0VBQVcsQ0FBQ21CLFlBQVksQ0FBQyxJQUFJaEIsb0VBQVMsQ0FBQ2dCLFlBQVksQ0FBQyxFQUFFO3dCQUN4RFIsb0JBQW9CLENBQUNTLElBQUksQ0FBQ0wsSUFBSSxDQUFDLENBQUM7cUJBQ2pDLE1BQU0sSUFBSWQsc0VBQVcsQ0FBQ2tCLFlBQVksQ0FBQyxFQUFFO3dCQUNwQ1Asc0JBQXNCLENBQUNRLElBQUksQ0FBQ0wsSUFBSSxDQUFDLENBQUM7cUJBQ25DLE1BQU0sSUFBSWIsb0VBQVMsQ0FBQ2lCLFlBQVksQ0FBQyxFQUFFO3dCQUNsQ04sb0JBQW9CLENBQUNPLElBQUksQ0FBQ0wsSUFBSSxDQUFDLENBQUM7cUJBQ2pDO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGLENBQUMsQ0FBQztJQUNILE9BQU87UUFBRUosb0JBQW9CLEVBQUVBLG9CQUFvQjtLQUFJLENBQUM7Q0FDekQ7QUFDRCwrREFBZU4sZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9pbmNvbWluZ1NjaGVkdWxlL0luY29taW5nU2NoZWR1bGUudHN4PzRlMTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFmdGVybm9vblNjaGVkdWxlIGZyb20gXCIuL0FmdGVybm9vblNjaGVkdWxlXCI7XG5pbXBvcnQgRXZlbmluZ1NjaGVkdWxlIGZyb20gXCIuL0V2ZW5pbmdTY2hlZHVsZVwiO1xuaW1wb3J0IE1vcm5pbmdTY2hlZHVsZSBmcm9tIFwiLi9Nb3JuaW5nU2NoZWR1bGVcIjtcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBTY2hlZHVsZVRpbWVUeXBlLCBUYXNrRm9ybVZhbHVlcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgYmVmb3JlVG9kYXksXG4gIGlzQWZ0ZXJub29uLFxuICBpc0V2ZW5pbmcsXG4gIGlzTW9ybmluZyxcbiAgaXNUb2RheSxcbn0gZnJvbSBcIi4uLy4uLy4uL2Z1bmN0aW9ucy9kYXRlL2RhdGVDaGVja1wiO1xuXG5jb25zdCBJbmNvbWluZ1NjaGVkdWxlID0gKHByb3BzOiB7IGRhdGE6IFRhc2tGb3JtVmFsdWVzW10gfSkgPT4ge1xuICBzdG9yZVNjaGVkdWxlQmFzZWRPblBlcmlvZChwcm9wcy5kYXRhKTtcbiAgcmV0dXJuIChcbiAgICA8Qm94IG10PVwiMjBweFwiPlxuICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIj5NeSBJbmNvbWluZyBTY2hlZHVsZS4uLjwvVGV4dD5cbiAgICAgIDxNb3JuaW5nU2NoZWR1bGUgLz5cbiAgICAgIDxBZnRlcm5vb25TY2hlZHVsZSAvPlxuICAgICAgPEV2ZW5pbmdTY2hlZHVsZSAvPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZnVuY3Rpb24gc3RvcmVTY2hlZHVsZUJhc2VkT25QZXJpb2QoZGF0YTogVGFza0Zvcm1WYWx1ZXNbXSkge1xuICAvLyBkaXNwbGF5aW5nIG9ubHkgdGhlIHRhc2tzIFRPREFZIGJhc2VkIG9uIG1vcm5pbmcsIGFmdGVybm9vbiBhbmQgZXZlbmluZ1xuICBsZXQgbW9ybmluZ1NjaGVkdWxlVGFza3M6IFRhc2tGb3JtVmFsdWVzW10gPSBbXTtcbiAgbGV0IGFmdGVybm9vblNjaGVkdWxlVGFza3M6IFRhc2tGb3JtVmFsdWVzW10gPSBbXTtcbiAgbGV0IGV2ZW5pbmdTY2hlZHVsZVRhc2tzOiBUYXNrRm9ybVZhbHVlc1tdID0gW107XG4gIGRhdGEubWFwKCh0YXNrKSA9PiB7XG4gICAgaWYgKHRhc2suc2NoZWR1bGVUaW1lLmxlbmd0aCAhPT0gMCkge1xuICAgICAgbGV0IGhhc1NjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgc3dpdGNoICh0YXNrLnNjaGVkdWxlVGltZVswXS5zdGFydGluZ1RpbWUpIHtcbiAgICAgICAgY2FzZSBcIk1vcm5pbmdcIjpcbiAgICAgICAgICBtb3JuaW5nU2NoZWR1bGVUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgIGhhc1NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBZnRlcm5vb25cIjpcbiAgICAgICAgICBhZnRlcm5vb25TY2hlZHVsZVRhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgaGFzU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkV2ZW5pbmdcIjpcbiAgICAgICAgICBldmVuaW5nU2NoZWR1bGVUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgIGhhc1NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoIWhhc1NjaGVkdWxlZCkge1xuICAgICAgICBsZXQgc3RhcnRpbmdUaW1lID0gbmV3IERhdGUodGFzay5zY2hlZHVsZVRpbWVbMF0uc3RhcnRpbmdUaW1lKTtcbiAgICAgICAgaWYgKGJlZm9yZVRvZGF5KHN0YXJ0aW5nVGltZSkgfHwgaXNUb2RheShzdGFydGluZ1RpbWUpKSB7XG4gICAgICAgICAgLy9BbGwgdGFza3MgYmVmb3JlIHRvZGF5IHdpbGwgYmUgc2NoZWR1bGVkIHRvIHRvZGF5IG1vcm5pbmdcbiAgICAgICAgICBpZiAoYmVmb3JlVG9kYXkoc3RhcnRpbmdUaW1lKSB8fCBpc01vcm5pbmcoc3RhcnRpbmdUaW1lKSkge1xuICAgICAgICAgICAgbW9ybmluZ1NjaGVkdWxlVGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQWZ0ZXJub29uKHN0YXJ0aW5nVGltZSkpIHtcbiAgICAgICAgICAgIGFmdGVybm9vblNjaGVkdWxlVGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzRXZlbmluZyhzdGFydGluZ1RpbWUpKSB7XG4gICAgICAgICAgICBldmVuaW5nU2NoZWR1bGVUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7IG1vcm5pbmdTY2hlZHVsZVRhc2tzOiBtb3JuaW5nU2NoZWR1bGVUYXNrcywgIH07XG59XG5leHBvcnQgZGVmYXVsdCBJbmNvbWluZ1NjaGVkdWxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQWZ0ZXJub29uU2NoZWR1bGUiLCJFdmVuaW5nU2NoZWR1bGUiLCJNb3JuaW5nU2NoZWR1bGUiLCJCb3giLCJUZXh0IiwiYmVmb3JlVG9kYXkiLCJpc0FmdGVybm9vbiIsImlzRXZlbmluZyIsImlzTW9ybmluZyIsImlzVG9kYXkiLCJJbmNvbWluZ1NjaGVkdWxlIiwicHJvcHMiLCJzdG9yZVNjaGVkdWxlQmFzZWRPblBlcmlvZCIsImRhdGEiLCJtdCIsImZvbnRXZWlnaHQiLCJtb3JuaW5nU2NoZWR1bGVUYXNrcyIsImFmdGVybm9vblNjaGVkdWxlVGFza3MiLCJldmVuaW5nU2NoZWR1bGVUYXNrcyIsIm1hcCIsInRhc2siLCJzY2hlZHVsZVRpbWUiLCJsZW5ndGgiLCJoYXNTY2hlZHVsZWQiLCJzdGFydGluZ1RpbWUiLCJwdXNoIiwiRGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/home/incomingSchedule/IncomingSchedule.tsx\n");

/***/ })

});