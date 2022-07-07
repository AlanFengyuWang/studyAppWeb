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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AfternoonSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AfternoonSchedule */ \"./src/components/home/incomingSchedule/AfternoonSchedule.tsx\");\n/* harmony import */ var _EveningSchedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EveningSchedule */ \"./src/components/home/incomingSchedule/EveningSchedule.tsx\");\n/* harmony import */ var _MorningSchedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MorningSchedule */ \"./src/components/home/incomingSchedule/MorningSchedule.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar IncomingSchedule = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        mt: \"20px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                fontWeight: \"bold\",\n                children: \"My Incoming Schedule...\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/incomingSchedule/IncomingSchedule.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MorningSchedule__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/incomingSchedule/IncomingSchedule.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AfternoonSchedule__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/incomingSchedule/IncomingSchedule.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EveningSchedule__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/incomingSchedule/IncomingSchedule.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/incomingSchedule/IncomingSchedule.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this);\n};\n_c = IncomingSchedule;\nfunction getScheduleBasedOnPeriod(data) {\n    // displaying only the tasks TODAY based on morning, afternoon and evening\n    var morningScheduleTasks = [];\n    var afternoonScheduleTasks = [];\n    var eveningScheduleTasks = [];\n    data.map(function(task) {\n        if (task.scheduleTime.length !== 0) {\n            var startingTime = task.scheduleTime[0].startingTime;\n            switch(startingTime){\n                case \"Morning\":\n                    morningScheduleTasks.push(task);\n                    break;\n                case \"Afternoon\":\n                    afternoonScheduleTasks.push(task);\n                    break;\n                case \"Evening\":\n                    eveningScheduleTasks.push(task);\n                    break;\n            }\n        }\n    });\n}\nfunction isMorning(date) {\n    date.getHours() >= 4 && date.getHours() <= 12;\n}\nfunction isAfternoon(date) {\n    date.getHours() > 12 && date.getHours() <= 18;\n}\nfunction isEvening(date) {\n    date.getHours() > 18 && date.getHours() <= 4;\n}\nvar isToday = function(someDate) {\n    var today = new Date();\n    return someDate.getDate() == today.getDate() && someDate.getMonth() == today.getMonth() && someDate.getFullYear() == today.getFullYear();\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (IncomingSchedule);\nvar _c;\n$RefreshReg$(_c, \"IncomingSchedule\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL2luY29taW5nU2NoZWR1bGUvSW5jb21pbmdTY2hlZHVsZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQzBCO0FBQ0o7QUFDQTtBQUNIO0FBRzdDLElBQU1NLGdCQUFnQixHQUFHLFNBQUNDLEtBQWlDLEVBQUs7SUFDOUQscUJBQ0UsOERBQUNILGlEQUFHO1FBQUNJLEVBQUUsRUFBQyxNQUFNOzswQkFDWiw4REFBQ0gsa0RBQUk7Z0JBQUNJLFVBQVUsRUFBQyxNQUFNOzBCQUFDLHlCQUF1Qjs7Ozs7cUJBQU87MEJBQ3RELDhEQUFDTix3REFBZTs7OztxQkFBRzswQkFDbkIsOERBQUNGLDBEQUFpQjs7OztxQkFBRzswQkFDckIsOERBQUNDLHdEQUFlOzs7O3FCQUFHOzs7Ozs7YUFDZixDQUNOO0NBQ0g7QUFUS0ksS0FBQUEsZ0JBQWdCO0FBV3RCLFNBQVNJLHdCQUF3QixDQUFDQyxJQUFzQixFQUFFO0lBQ3hELDBFQUEwRTtJQUMxRSxJQUFJQyxvQkFBb0IsR0FBRyxFQUFFO0lBQzdCLElBQUlDLHNCQUFzQixHQUFHLEVBQUU7SUFDL0IsSUFBSUMsb0JBQW9CLEdBQUcsRUFBRTtJQUM3QkgsSUFBSSxDQUFDSSxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFLO1FBQ2pCLElBQUlBLElBQUksQ0FBQ0MsWUFBWSxDQUFDQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2xDLElBQUlDLFlBQVksR0FBR0gsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUNFLFlBQVk7WUFDcEQsT0FBUUEsWUFBWTtnQkFDbEIsS0FBSyxTQUFTO29CQUNaUCxvQkFBb0IsQ0FBQ1EsSUFBSSxDQUFDSixJQUFJLENBQUMsQ0FBQztvQkFDaEMsTUFBTTtnQkFDUixLQUFLLFdBQVc7b0JBQ2RILHNCQUFzQixDQUFDTyxJQUFJLENBQUNKLElBQUksQ0FBQyxDQUFDO29CQUNsQyxNQUFNO2dCQUNSLEtBQUssU0FBUztvQkFDWkYsb0JBQW9CLENBQUNNLElBQUksQ0FBQ0osSUFBSSxDQUFDLENBQUM7b0JBQ2hDLE1BQU07YUFDVDtTQUNGO0tBRUYsQ0FBQyxDQUFDO0NBQ0o7QUFFRCxTQUFTSyxTQUFTLENBQUNDLElBQVUsRUFBRTtJQUM3QkEsSUFBSSxDQUFDQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUlELElBQUksQ0FBQ0MsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0NBQy9DO0FBRUQsU0FBU0MsV0FBVyxDQUFDRixJQUFVLEVBQUU7SUFDL0JBLElBQUksQ0FBQ0MsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJRCxJQUFJLENBQUNDLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztDQUMvQztBQUVELFNBQVNFLFNBQVMsQ0FBQ0gsSUFBVSxFQUFFO0lBQzdCQSxJQUFJLENBQUNDLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSUQsSUFBSSxDQUFDQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDOUM7QUFFRCxJQUFNRyxPQUFPLEdBQUcsU0FBQ0MsUUFBYyxFQUFLO0lBQ2xDLElBQU1DLEtBQUssR0FBRyxJQUFJQyxJQUFJLEVBQUU7SUFDeEIsT0FDRUYsUUFBUSxDQUFDRyxPQUFPLEVBQUUsSUFBSUYsS0FBSyxDQUFDRSxPQUFPLEVBQUUsSUFDckNILFFBQVEsQ0FBQ0ksUUFBUSxFQUFFLElBQUlILEtBQUssQ0FBQ0csUUFBUSxFQUFFLElBQ3ZDSixRQUFRLENBQUNLLFdBQVcsRUFBRSxJQUFJSixLQUFLLENBQUNJLFdBQVcsRUFBRSxDQUM3QztDQUNIO0FBRUQsK0RBQWUxQixnQkFBZ0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob21lL2luY29taW5nU2NoZWR1bGUvSW5jb21pbmdTY2hlZHVsZS50c3g/NGUxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQWZ0ZXJub29uU2NoZWR1bGUgZnJvbSBcIi4vQWZ0ZXJub29uU2NoZWR1bGVcIjtcbmltcG9ydCBFdmVuaW5nU2NoZWR1bGUgZnJvbSBcIi4vRXZlbmluZ1NjaGVkdWxlXCI7XG5pbXBvcnQgTW9ybmluZ1NjaGVkdWxlIGZyb20gXCIuL01vcm5pbmdTY2hlZHVsZVwiO1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IFRhc2tGb3JtVmFsdWVzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmNvbnN0IEluY29taW5nU2NoZWR1bGUgPSAocHJvcHM6IHsgZGF0YTogVGFza0Zvcm1WYWx1ZXNbXSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBtdD1cIjIwcHhcIj5cbiAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCI+TXkgSW5jb21pbmcgU2NoZWR1bGUuLi48L1RleHQ+XG4gICAgICA8TW9ybmluZ1NjaGVkdWxlIC8+XG4gICAgICA8QWZ0ZXJub29uU2NoZWR1bGUgLz5cbiAgICAgIDxFdmVuaW5nU2NoZWR1bGUgLz5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIGdldFNjaGVkdWxlQmFzZWRPblBlcmlvZChkYXRhOiBUYXNrRm9ybVZhbHVlc1tdKSB7XG4gIC8vIGRpc3BsYXlpbmcgb25seSB0aGUgdGFza3MgVE9EQVkgYmFzZWQgb24gbW9ybmluZywgYWZ0ZXJub29uIGFuZCBldmVuaW5nXG4gIGxldCBtb3JuaW5nU2NoZWR1bGVUYXNrcyA9IFtdO1xuICBsZXQgYWZ0ZXJub29uU2NoZWR1bGVUYXNrcyA9IFtdO1xuICBsZXQgZXZlbmluZ1NjaGVkdWxlVGFza3MgPSBbXTtcbiAgZGF0YS5tYXAoKHRhc2spID0+IHtcbiAgICBpZiAodGFzay5zY2hlZHVsZVRpbWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICBsZXQgc3RhcnRpbmdUaW1lID0gdGFzay5zY2hlZHVsZVRpbWVbMF0uc3RhcnRpbmdUaW1lO1xuICAgICAgc3dpdGNoIChzdGFydGluZ1RpbWUpIHtcbiAgICAgICAgY2FzZSBcIk1vcm5pbmdcIjpcbiAgICAgICAgICBtb3JuaW5nU2NoZWR1bGVUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQWZ0ZXJub29uXCI6XG4gICAgICAgICAgYWZ0ZXJub29uU2NoZWR1bGVUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiRXZlbmluZ1wiOlxuICAgICAgICAgIGV2ZW5pbmdTY2hlZHVsZVRhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc01vcm5pbmcoZGF0ZTogRGF0ZSkge1xuICBkYXRlLmdldEhvdXJzKCkgPj0gNCAmJiBkYXRlLmdldEhvdXJzKCkgPD0gMTI7XG59XG5cbmZ1bmN0aW9uIGlzQWZ0ZXJub29uKGRhdGU6IERhdGUpIHtcbiAgZGF0ZS5nZXRIb3VycygpID4gMTIgJiYgZGF0ZS5nZXRIb3VycygpIDw9IDE4O1xufVxuXG5mdW5jdGlvbiBpc0V2ZW5pbmcoZGF0ZTogRGF0ZSkge1xuICBkYXRlLmdldEhvdXJzKCkgPiAxOCAmJiBkYXRlLmdldEhvdXJzKCkgPD0gNDtcbn1cblxuY29uc3QgaXNUb2RheSA9IChzb21lRGF0ZTogRGF0ZSkgPT4ge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIHJldHVybiAoXG4gICAgc29tZURhdGUuZ2V0RGF0ZSgpID09IHRvZGF5LmdldERhdGUoKSAmJlxuICAgIHNvbWVEYXRlLmdldE1vbnRoKCkgPT0gdG9kYXkuZ2V0TW9udGgoKSAmJlxuICAgIHNvbWVEYXRlLmdldEZ1bGxZZWFyKCkgPT0gdG9kYXkuZ2V0RnVsbFllYXIoKVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5jb21pbmdTY2hlZHVsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFmdGVybm9vblNjaGVkdWxlIiwiRXZlbmluZ1NjaGVkdWxlIiwiTW9ybmluZ1NjaGVkdWxlIiwiQm94IiwiVGV4dCIsIkluY29taW5nU2NoZWR1bGUiLCJwcm9wcyIsIm10IiwiZm9udFdlaWdodCIsImdldFNjaGVkdWxlQmFzZWRPblBlcmlvZCIsImRhdGEiLCJtb3JuaW5nU2NoZWR1bGVUYXNrcyIsImFmdGVybm9vblNjaGVkdWxlVGFza3MiLCJldmVuaW5nU2NoZWR1bGVUYXNrcyIsIm1hcCIsInRhc2siLCJzY2hlZHVsZVRpbWUiLCJsZW5ndGgiLCJzdGFydGluZ1RpbWUiLCJwdXNoIiwiaXNNb3JuaW5nIiwiZGF0ZSIsImdldEhvdXJzIiwiaXNBZnRlcm5vb24iLCJpc0V2ZW5pbmciLCJpc1RvZGF5Iiwic29tZURhdGUiLCJ0b2RheSIsIkRhdGUiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/home/incomingSchedule/IncomingSchedule.tsx\n");

/***/ })

});