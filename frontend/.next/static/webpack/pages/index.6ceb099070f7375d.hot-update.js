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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AfternoonSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AfternoonSchedule */ \"./src/components/home/incomingSchedule/AfternoonSchedule.tsx\");\n/* harmony import */ var _EveningSchedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EveningSchedule */ \"./src/components/home/incomingSchedule/EveningSchedule.tsx\");\n/* harmony import */ var _MorningSchedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MorningSchedule */ \"./src/components/home/incomingSchedule/MorningSchedule.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar IncomingSchedule = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        mt: \"20px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                fontWeight: \"bold\",\n                children: \"My Incoming Schedule...\"\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/incomingSchedule/IncomingSchedule.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MorningSchedule__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/incomingSchedule/IncomingSchedule.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AfternoonSchedule__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/incomingSchedule/IncomingSchedule.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EveningSchedule__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/incomingSchedule/IncomingSchedule.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/incomingSchedule/IncomingSchedule.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this);\n};\n_c = IncomingSchedule;\nfunction storeScheduleBasedOnPeriod(data) {\n    // displaying only the tasks TODAY based on morning, afternoon and evening\n    var morningScheduleTasks = [];\n    var afternoonScheduleTasks = [];\n    var eveningScheduleTasks = [];\n    data.map(function(task) {\n        if (task.scheduleTime.length !== 0) {\n            var startingTime = task.scheduleTime[0].startingTime;\n            var hasScheduled = false;\n            switch(startingTime){\n                case \"Morning\":\n                    morningScheduleTasks.push(task);\n                    hasScheduled = true;\n                    break;\n                case \"Afternoon\":\n                    afternoonScheduleTasks.push(task);\n                    hasScheduled = true;\n                    break;\n                case \"Evening\":\n                    eveningScheduleTasks.push(task);\n                    hasScheduled = true;\n                    break;\n            }\n            //All tasks before today will be scheduled to today mo\n            if (!hasScheduled) {}\n        }\n    });\n}\nfunction isMorning(date) {\n    date.getHours() >= 4 && date.getHours() <= 12;\n}\nfunction isAfternoon(date) {\n    date.getHours() > 12 && date.getHours() <= 18;\n}\nfunction isEvening(date) {\n    date.getHours() > 18 && date.getHours() <= 4;\n}\nvar isToday = function(someDate) {\n    var today = new Date();\n    return someDate.getDate() == today.getDate() && someDate.getMonth() == today.getMonth() && someDate.getFullYear() == today.getFullYear();\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (IncomingSchedule);\nvar _c;\n$RefreshReg$(_c, \"IncomingSchedule\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL2luY29taW5nU2NoZWR1bGUvSW5jb21pbmdTY2hlZHVsZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQzBCO0FBQ0o7QUFDQTtBQUNIO0FBRzdDLElBQU1NLGdCQUFnQixHQUFHLFNBQUNDLEtBQWlDLEVBQUs7SUFDOUQscUJBQ0UsOERBQUNILGlEQUFHO1FBQUNJLEVBQUUsRUFBQyxNQUFNOzswQkFDWiw4REFBQ0gsa0RBQUk7Z0JBQUNJLFVBQVUsRUFBQyxNQUFNOzBCQUFDLHlCQUF1Qjs7Ozs7cUJBQU87MEJBQ3RELDhEQUFDTix3REFBZTs7OztxQkFBRzswQkFDbkIsOERBQUNGLDBEQUFpQjs7OztxQkFBRzswQkFDckIsOERBQUNDLHdEQUFlOzs7O3FCQUFHOzs7Ozs7YUFDZixDQUNOO0NBQ0g7QUFUS0ksS0FBQUEsZ0JBQWdCO0FBV3RCLFNBQVNJLDBCQUEwQixDQUFDQyxJQUFzQixFQUFFO0lBQzFELDBFQUEwRTtJQUMxRSxJQUFJQyxvQkFBb0IsR0FBRyxFQUFFO0lBQzdCLElBQUlDLHNCQUFzQixHQUFHLEVBQUU7SUFDL0IsSUFBSUMsb0JBQW9CLEdBQUcsRUFBRTtJQUM3QkgsSUFBSSxDQUFDSSxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFLO1FBQ2pCLElBQUlBLElBQUksQ0FBQ0MsWUFBWSxDQUFDQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2xDLElBQUlDLFlBQVksR0FBR0gsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUNFLFlBQVk7WUFDcEQsSUFBSUMsWUFBWSxHQUFHLEtBQUs7WUFDeEIsT0FBUUQsWUFBWTtnQkFDbEIsS0FBSyxTQUFTO29CQUNaUCxvQkFBb0IsQ0FBQ1MsSUFBSSxDQUFDTCxJQUFJLENBQUMsQ0FBQztvQkFDaENJLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1IsS0FBSyxXQUFXO29CQUNkUCxzQkFBc0IsQ0FBQ1EsSUFBSSxDQUFDTCxJQUFJLENBQUMsQ0FBQztvQkFDbENJLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1IsS0FBSyxTQUFTO29CQUNaTixvQkFBb0IsQ0FBQ08sSUFBSSxDQUFDTCxJQUFJLENBQUMsQ0FBQztvQkFDaENJLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQ3BCLE1BQU07YUFDVDtZQUNELHNEQUFzRDtZQUN0RCxJQUFJLENBQUNBLFlBQVksRUFBRSxFQUNsQjtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0NBQ0o7QUFFRCxTQUFTRSxTQUFTLENBQUNDLElBQVUsRUFBRTtJQUM3QkEsSUFBSSxDQUFDQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUlELElBQUksQ0FBQ0MsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0NBQy9DO0FBRUQsU0FBU0MsV0FBVyxDQUFDRixJQUFVLEVBQUU7SUFDL0JBLElBQUksQ0FBQ0MsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJRCxJQUFJLENBQUNDLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztDQUMvQztBQUVELFNBQVNFLFNBQVMsQ0FBQ0gsSUFBVSxFQUFFO0lBQzdCQSxJQUFJLENBQUNDLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSUQsSUFBSSxDQUFDQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDOUM7QUFFRCxJQUFNRyxPQUFPLEdBQUcsU0FBQ0MsUUFBYyxFQUFLO0lBQ2xDLElBQU1DLEtBQUssR0FBRyxJQUFJQyxJQUFJLEVBQUU7SUFDeEIsT0FDRUYsUUFBUSxDQUFDRyxPQUFPLEVBQUUsSUFBSUYsS0FBSyxDQUFDRSxPQUFPLEVBQUUsSUFDckNILFFBQVEsQ0FBQ0ksUUFBUSxFQUFFLElBQUlILEtBQUssQ0FBQ0csUUFBUSxFQUFFLElBQ3ZDSixRQUFRLENBQUNLLFdBQVcsRUFBRSxJQUFJSixLQUFLLENBQUNJLFdBQVcsRUFBRSxDQUM3QztDQUNIO0FBRUQsK0RBQWUzQixnQkFBZ0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob21lL2luY29taW5nU2NoZWR1bGUvSW5jb21pbmdTY2hlZHVsZS50c3g/NGUxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQWZ0ZXJub29uU2NoZWR1bGUgZnJvbSBcIi4vQWZ0ZXJub29uU2NoZWR1bGVcIjtcbmltcG9ydCBFdmVuaW5nU2NoZWR1bGUgZnJvbSBcIi4vRXZlbmluZ1NjaGVkdWxlXCI7XG5pbXBvcnQgTW9ybmluZ1NjaGVkdWxlIGZyb20gXCIuL01vcm5pbmdTY2hlZHVsZVwiO1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IFRhc2tGb3JtVmFsdWVzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmNvbnN0IEluY29taW5nU2NoZWR1bGUgPSAocHJvcHM6IHsgZGF0YTogVGFza0Zvcm1WYWx1ZXNbXSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBtdD1cIjIwcHhcIj5cbiAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCI+TXkgSW5jb21pbmcgU2NoZWR1bGUuLi48L1RleHQ+XG4gICAgICA8TW9ybmluZ1NjaGVkdWxlIC8+XG4gICAgICA8QWZ0ZXJub29uU2NoZWR1bGUgLz5cbiAgICAgIDxFdmVuaW5nU2NoZWR1bGUgLz5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIHN0b3JlU2NoZWR1bGVCYXNlZE9uUGVyaW9kKGRhdGE6IFRhc2tGb3JtVmFsdWVzW10pIHtcbiAgLy8gZGlzcGxheWluZyBvbmx5IHRoZSB0YXNrcyBUT0RBWSBiYXNlZCBvbiBtb3JuaW5nLCBhZnRlcm5vb24gYW5kIGV2ZW5pbmdcbiAgbGV0IG1vcm5pbmdTY2hlZHVsZVRhc2tzID0gW107XG4gIGxldCBhZnRlcm5vb25TY2hlZHVsZVRhc2tzID0gW107XG4gIGxldCBldmVuaW5nU2NoZWR1bGVUYXNrcyA9IFtdO1xuICBkYXRhLm1hcCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLnNjaGVkdWxlVGltZS5sZW5ndGggIT09IDApIHtcbiAgICAgIGxldCBzdGFydGluZ1RpbWUgPSB0YXNrLnNjaGVkdWxlVGltZVswXS5zdGFydGluZ1RpbWU7XG4gICAgICBsZXQgaGFzU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICBzd2l0Y2ggKHN0YXJ0aW5nVGltZSkge1xuICAgICAgICBjYXNlIFwiTW9ybmluZ1wiOlxuICAgICAgICAgIG1vcm5pbmdTY2hlZHVsZVRhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgaGFzU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFmdGVybm9vblwiOlxuICAgICAgICAgIGFmdGVybm9vblNjaGVkdWxlVGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgICBoYXNTY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiRXZlbmluZ1wiOlxuICAgICAgICAgIGV2ZW5pbmdTY2hlZHVsZVRhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgaGFzU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIC8vQWxsIHRhc2tzIGJlZm9yZSB0b2RheSB3aWxsIGJlIHNjaGVkdWxlZCB0byB0b2RheSBtb1xuICAgICAgaWYgKCFoYXNTY2hlZHVsZWQpIHtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc01vcm5pbmcoZGF0ZTogRGF0ZSkge1xuICBkYXRlLmdldEhvdXJzKCkgPj0gNCAmJiBkYXRlLmdldEhvdXJzKCkgPD0gMTI7XG59XG5cbmZ1bmN0aW9uIGlzQWZ0ZXJub29uKGRhdGU6IERhdGUpIHtcbiAgZGF0ZS5nZXRIb3VycygpID4gMTIgJiYgZGF0ZS5nZXRIb3VycygpIDw9IDE4O1xufVxuXG5mdW5jdGlvbiBpc0V2ZW5pbmcoZGF0ZTogRGF0ZSkge1xuICBkYXRlLmdldEhvdXJzKCkgPiAxOCAmJiBkYXRlLmdldEhvdXJzKCkgPD0gNDtcbn1cblxuY29uc3QgaXNUb2RheSA9IChzb21lRGF0ZTogRGF0ZSkgPT4ge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIHJldHVybiAoXG4gICAgc29tZURhdGUuZ2V0RGF0ZSgpID09IHRvZGF5LmdldERhdGUoKSAmJlxuICAgIHNvbWVEYXRlLmdldE1vbnRoKCkgPT0gdG9kYXkuZ2V0TW9udGgoKSAmJlxuICAgIHNvbWVEYXRlLmdldEZ1bGxZZWFyKCkgPT0gdG9kYXkuZ2V0RnVsbFllYXIoKVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5jb21pbmdTY2hlZHVsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFmdGVybm9vblNjaGVkdWxlIiwiRXZlbmluZ1NjaGVkdWxlIiwiTW9ybmluZ1NjaGVkdWxlIiwiQm94IiwiVGV4dCIsIkluY29taW5nU2NoZWR1bGUiLCJwcm9wcyIsIm10IiwiZm9udFdlaWdodCIsInN0b3JlU2NoZWR1bGVCYXNlZE9uUGVyaW9kIiwiZGF0YSIsIm1vcm5pbmdTY2hlZHVsZVRhc2tzIiwiYWZ0ZXJub29uU2NoZWR1bGVUYXNrcyIsImV2ZW5pbmdTY2hlZHVsZVRhc2tzIiwibWFwIiwidGFzayIsInNjaGVkdWxlVGltZSIsImxlbmd0aCIsInN0YXJ0aW5nVGltZSIsImhhc1NjaGVkdWxlZCIsInB1c2giLCJpc01vcm5pbmciLCJkYXRlIiwiZ2V0SG91cnMiLCJpc0FmdGVybm9vbiIsImlzRXZlbmluZyIsImlzVG9kYXkiLCJzb21lRGF0ZSIsInRvZGF5IiwiRGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/home/incomingSchedule/IncomingSchedule.tsx\n");

/***/ })

});