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

/***/ "./src/components/home/ImageSlider.tsx":
/*!*********************************************!*\
  !*** ./src/components/home/ImageSlider.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"../node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProgressCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressCard */ \"./src/components/home/ProgressCard.tsx\");\n/* harmony import */ var react_responsive_carousel_lib_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel/lib/js */ \"../node_modules/react-responsive-carousel/lib/js/index.js\");\nvar _this = undefined;\n\n\n\n\n// interface IMyProps {\n//   slide: IProgress;\n// }\nvar ImageSlider = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel_lib_js__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n            showThumbs: false,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProgressCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                timeType: slide.timeType\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ImageSlider.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ImageSlider.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ImageSlider.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_c = ImageSlider;\n// const ImageSlider = (slide) => {\n//   return (\n//     <div>\n//       <Carousel>\n//         {/* // <ProgressCard timetype=\"Today\" />; return{\" \"} */}\n//         <Image src={slide.image} height=\"auto\" width=\"800px\" />;\n//         {/* <h1></h1> */}\n//         <></>\n//       </Carousel>\n//     </div>\n//   );\n// };\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageSlider);\nvar _c;\n$RefreshReg$(_c, \"ImageSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL0ltYWdlU2xpZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQytEO0FBQ3JCO0FBRWtCO0FBRTVELHVCQUF1QjtBQUN2QixzQkFBc0I7QUFDdEIsSUFBSTtBQUVKLElBQU1FLFdBQVcsR0FBRyxTQUFDQyxLQUEyQixFQUFLO0lBQ25ELHFCQUNFLDhEQUFDQyxLQUFHO2tCQUNGLDRFQUFDSCxzRUFBUTtZQUFDSSxVQUFVLEVBQUUsS0FBSztzQkFHekIsNEVBQUNMLHFEQUFZO2dCQUFDTSxRQUFRLEVBQUVDLEtBQUssQ0FBQ0QsUUFBUTs7Ozs7cUJBQWlCOzs7OztpQkFDOUM7Ozs7O2FBQ1AsQ0FDTjtDQUNIO0FBVktKLEtBQUFBLFdBQVc7QUFZakIsbUNBQW1DO0FBQ25DLGFBQWE7QUFDYixZQUFZO0FBQ1osbUJBQW1CO0FBQ25CLG9FQUFvRTtBQUNwRSxtRUFBbUU7QUFDbkUsNEJBQTRCO0FBQzVCLGdCQUFnQjtBQUNoQixvQkFBb0I7QUFDcEIsYUFBYTtBQUNiLE9BQU87QUFDUCxLQUFLO0FBRUwsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob21lL0ltYWdlU2xpZGVyLnRzeD85NzlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEltYWdlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7XG5pbXBvcnQgUHJvZ3Jlc3NDYXJkIGZyb20gXCIuL1Byb2dyZXNzQ2FyZFwiO1xuaW1wb3J0IHsgSVByb2dyZXNzIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9qc1wiO1xuXG4vLyBpbnRlcmZhY2UgSU15UHJvcHMge1xuLy8gICBzbGlkZTogSVByb2dyZXNzO1xuLy8gfVxuXG5jb25zdCBJbWFnZVNsaWRlciA9IChwcm9wczogeyBzbGlkZTogSVByb2dyZXNzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENhcm91c2VsIHNob3dUaHVtYnM9e2ZhbHNlfT5cbiAgICAgICAgey8qIC8vIDxQcm9ncmVzc0NhcmQgdGltZXR5cGU9XCJUb2RheVwiIC8+OyByZXR1cm57XCIgXCJ9ICovfVxuICAgICAgICB7LyogPEltYWdlIHNyYz17c2xpZGUuaW1hZ2V9IGhlaWdodD1cImF1dG9cIiB3aWR0aD1cIjgwMHB4XCIgLz47ICovfVxuICAgICAgICA8UHJvZ3Jlc3NDYXJkIHRpbWVUeXBlPXtzbGlkZS50aW1lVHlwZX0+PC9Qcm9ncmVzc0NhcmQ+XG4gICAgICA8L0Nhcm91c2VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gY29uc3QgSW1hZ2VTbGlkZXIgPSAoc2xpZGUpID0+IHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgPENhcm91c2VsPlxuLy8gICAgICAgICB7LyogLy8gPFByb2dyZXNzQ2FyZCB0aW1ldHlwZT1cIlRvZGF5XCIgLz47IHJldHVybntcIiBcIn0gKi99XG4vLyAgICAgICAgIDxJbWFnZSBzcmM9e3NsaWRlLmltYWdlfSBoZWlnaHQ9XCJhdXRvXCIgd2lkdGg9XCI4MDBweFwiIC8+O1xuLy8gICAgICAgICB7LyogPGgxPjwvaDE+ICovfVxuLy8gICAgICAgICA8PjwvPlxuLy8gICAgICAgPC9DYXJvdXNlbD5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlU2xpZGVyO1xuIl0sIm5hbWVzIjpbIlByb2dyZXNzQ2FyZCIsIkNhcm91c2VsIiwiSW1hZ2VTbGlkZXIiLCJwcm9wcyIsImRpdiIsInNob3dUaHVtYnMiLCJ0aW1lVHlwZSIsInNsaWRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/home/ImageSlider.tsx\n");

/***/ })

});