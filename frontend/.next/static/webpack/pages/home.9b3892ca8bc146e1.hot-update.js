"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./src/functions/tasks/addTask.ts":
/*!****************************************!*\
  !*** ./src/functions/tasks/addTask.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": function() { return /* binding */ addTask; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar addTask = function(taskInfo) {\n    var data = {\n        taskTitle: taskInfo.taskTitle,\n        taskDescription: taskInfo.taskDescription,\n        type: taskInfo.type,\n        email: taskInfo.email,\n        due: taskInfo.due,\n        milestones: taskInfo.milestones,\n        subtask: taskInfo.subtask\n    };\n    var requestOptions = {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n    };\n    fetch(\"http://localhost:2000\" + \"/task/add/\", requestOptions);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3Rhc2tzL2FkZFRhc2sudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBSWxCLElBQU1DLE9BQU8sR0FBRyxTQUFDQyxRQUFvQixFQUFLO0lBQzdDLElBQU1DLElBQUksR0FBRztRQUNiQyxTQUFTLEVBQUVGLFFBQVEsQ0FBQ0UsU0FBUztRQUM3QkMsZUFBZSxFQUFFSCxRQUFRLENBQUNHLGVBQWU7UUFDekNDLElBQUksRUFBRUosUUFBUSxDQUFDSSxJQUFJO1FBQ25CQyxLQUFLLEVBQUVMLFFBQVEsQ0FBQ0ssS0FBSztRQUNyQkMsR0FBRyxFQUFFTixRQUFRLENBQUNNLEdBQUc7UUFDakJDLFVBQVUsRUFBRVAsUUFBUSxDQUFDTyxVQUFVO1FBQy9CQyxPQUFPLEVBQUVSLFFBQVEsQ0FBQ1EsT0FBTztLQUN4QjtJQUVELElBQU1DLGNBQWMsR0FBRztRQUNuQkMsTUFBTSxFQUFFLE1BQU07UUFDZEMsT0FBTyxFQUFFO1lBQUMsY0FBYyxFQUFFLGtCQUFrQjtTQUFDO1FBQzdDQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDYixJQUFJLENBQUM7S0FDN0I7SUFDRGMsS0FBSyxDQUFDQyx1QkFBc0IsR0FBRyxZQUFZLEVBQUVQLGNBQWMsQ0FBQyxDQUFDO0NBQ2hFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mdW5jdGlvbnMvdGFza3MvYWRkVGFzay50cz85ZjljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZvcm1WYWx1ZXMgfSBmcm9tICcuLi8uLi90eXBlcydcblxuXG5leHBvcnQgY29uc3QgYWRkVGFzayA9ICh0YXNrSW5mbzogRm9ybVZhbHVlcykgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgdGFza1RpdGxlOiB0YXNrSW5mby50YXNrVGl0bGUsIFxuICAgIHRhc2tEZXNjcmlwdGlvbjogdGFza0luZm8udGFza0Rlc2NyaXB0aW9uLCBcbiAgICB0eXBlOiB0YXNrSW5mby50eXBlLCBcbiAgICBlbWFpbDogdGFza0luZm8uZW1haWwsXG4gICAgZHVlOiB0YXNrSW5mby5kdWUsIFxuICAgIG1pbGVzdG9uZXM6IHRhc2tJbmZvLm1pbGVzdG9uZXMsIFxuICAgIHN1YnRhc2s6IHRhc2tJbmZvLnN1YnRhc2tcbiAgICB9O1xuXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICB9XG4gICAgZmV0Y2gocHJvY2Vzcy5lbnYuU0VSVkVSUE9SVCArIFwiL3Rhc2svYWRkL1wiLCByZXF1ZXN0T3B0aW9ucyk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJhZGRUYXNrIiwidGFza0luZm8iLCJkYXRhIiwidGFza1RpdGxlIiwidGFza0Rlc2NyaXB0aW9uIiwidHlwZSIsImVtYWlsIiwiZHVlIiwibWlsZXN0b25lcyIsInN1YnRhc2siLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIlNFUlZFUlBPUlQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/tasks/addTask.ts\n");

/***/ })

});