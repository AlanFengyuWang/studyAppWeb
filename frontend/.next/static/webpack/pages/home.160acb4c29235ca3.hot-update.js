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

/***/ "./src/components/home/ProgressDisplay.tsx":
/*!*************************************************!*\
  !*** ./src/components/home/ProgressDisplay.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ImageSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageSlider */ \"./src/components/home/ImageSlider.tsx\");\nvar _this = undefined;\n\n\n\n\nvar ProgressCards = function() {\n    // TODO: Updating the data here, for now the data is static\n    var slides = [\n        {\n            timeType: \"Today\",\n            progress: 10\n        },\n        {\n            timeType: \"This week\",\n            progress: 50\n        },\n        {\n            timeType: \"This month\",\n            progress: 90\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            w: \"100%\",\n            p: 4,\n            color: \"white\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageSlider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                slides: slides\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ProgressDisplay.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ProgressDisplay.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ProgressDisplay.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_c = ProgressCards;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProgressCards);\nvar _c;\n$RefreshReg$(_c, \"ProgressCards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL1Byb2dyZXNzRGlzcGxheS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUF1QztBQUNiO0FBQ2M7QUFHeEMsSUFBTUcsYUFBYSxHQUFHLFdBQU07SUFDMUIsMkRBQTJEO0lBQzNELElBQU1DLE1BQU0sR0FBZ0I7UUFDMUI7WUFBRUMsUUFBUSxFQUFFLE9BQU87WUFBRUMsUUFBUSxFQUFFLEVBQUU7U0FBRTtRQUNuQztZQUFFRCxRQUFRLEVBQUUsV0FBVztZQUFFQyxRQUFRLEVBQUUsRUFBRTtTQUFFO1FBQ3ZDO1lBQUVELFFBQVEsRUFBRSxZQUFZO1lBQUVDLFFBQVEsRUFBRSxFQUFFO1NBQUU7S0FDekM7SUFDRCxxQkFDRSw4REFBQ0MsS0FBRztrQkFDRiw0RUFBQ1AsaURBQUc7WUFBQ1EsQ0FBQyxFQUFDLE1BQU07WUFBQ0MsQ0FBQyxFQUFFLENBQUM7WUFBRUMsS0FBSyxFQUFDLE9BQU87c0JBQy9CLDRFQUFDUixvREFBVztnQkFBQ0UsTUFBTSxFQUFFQSxNQUFNOzs7OztxQkFBSTs7Ozs7aUJBQzNCOzs7OzthQUNGLENBQ047Q0FDSDtBQWRLRCxLQUFBQSxhQUFhO0FBZ0JuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hvbWUvUHJvZ3Jlc3NEaXNwbGF5LnRzeD80ZDIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2VTbGlkZXIgZnJvbSBcIi4vSW1hZ2VTbGlkZXJcIjtcbmltcG9ydCB7IElQcm9ncmVzcyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5jb25zdCBQcm9ncmVzc0NhcmRzID0gKCkgPT4ge1xuICAvLyBUT0RPOiBVcGRhdGluZyB0aGUgZGF0YSBoZXJlLCBmb3Igbm93IHRoZSBkYXRhIGlzIHN0YXRpY1xuICBjb25zdCBzbGlkZXM6IElQcm9ncmVzc1tdID0gW1xuICAgIHsgdGltZVR5cGU6IFwiVG9kYXlcIiwgcHJvZ3Jlc3M6IDEwIH0sXG4gICAgeyB0aW1lVHlwZTogXCJUaGlzIHdlZWtcIiwgcHJvZ3Jlc3M6IDUwIH0sXG4gICAgeyB0aW1lVHlwZTogXCJUaGlzIG1vbnRoXCIsIHByb2dyZXNzOiA5MCB9LFxuICBdO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Qm94IHc9XCIxMDAlXCIgcD17NH0gY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICA8SW1hZ2VTbGlkZXIgc2xpZGVzPXtzbGlkZXN9IC8+XG4gICAgICA8L0JveD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQ2FyZHM7XG4iXSwibmFtZXMiOlsiQm94IiwiUmVhY3QiLCJJbWFnZVNsaWRlciIsIlByb2dyZXNzQ2FyZHMiLCJzbGlkZXMiLCJ0aW1lVHlwZSIsInByb2dyZXNzIiwiZGl2IiwidyIsInAiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/home/ProgressDisplay.tsx\n");

/***/ })

});