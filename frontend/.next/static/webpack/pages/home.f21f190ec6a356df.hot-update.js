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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"../node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProgressCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressCard */ \"./src/components/home/ProgressCard.tsx\");\n/* harmony import */ var react_responsive_carousel_lib_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel/lib/js */ \"../node_modules/react-responsive-carousel/lib/js/index.js\");\nvar _this = undefined;\n\n\n\n\nvar ImageSlider = function(props) {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel_lib_js__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n            showThumbs: false,\n            autoPlay: true,\n            emulateTouch: true,\n            showArrows: false,\n            showStatus: false,\n            useKeyboardArrows: true,\n            preventMovementUntilSwipeScrollTolerance: true,\n            swipeScrollTolerance: 100,\n            children: props.slides.map(function(slide) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProgressCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    timeType: slide.timeType,\n                    progress: slide.progress\n                }, void 0, false, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ImageSlider.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, _this1);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ImageSlider.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ImageSlider.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, _this);\n};\n_c = ImageSlider;\n// const ImageSlider = (slide) => {\n//   return (\n//     <div>\n//       <Carousel>\n//         {/* // <ProgressCard timetype=\"Today\" />; return{\" \"} */}\n//         <Image src={slide.image} height=\"auto\" width=\"800px\" />;\n//         {/* <h1></h1> */}\n//         <></>\n//       </Carousel>\n//     </div>\n//   );\n// };\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageSlider);\nvar _c;\n$RefreshReg$(_c, \"ImageSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL0ltYWdlU2xpZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQytEO0FBQ3JCO0FBRWtCO0FBRTVELElBQU1FLFdBQVcsR0FBRyxTQUFDQyxLQUE4QixFQUFLOztJQUN0RCxxQkFDRSw4REFBQ0MsS0FBRztrQkFDRiw0RUFBQ0gsc0VBQVE7WUFDUEksVUFBVSxFQUFFLEtBQUs7WUFDakJDLFFBQVEsRUFBRSxJQUFJO1lBQ2RDLFlBQVksRUFBRSxJQUFJO1lBQ2xCQyxVQUFVLEVBQUUsS0FBSztZQUNqQkMsVUFBVSxFQUFFLEtBQUs7WUFDakJDLGlCQUFpQixFQUFFLElBQUk7WUFDdkJDLHdDQUF3QztZQUN4Q0Msb0JBQW9CLEVBQUUsR0FBRztzQkFFeEJULEtBQUssQ0FBQ1UsTUFBTSxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsS0FBSztxQ0FDdEIsOERBQUNmLHFEQUFZO29CQUNYZ0IsUUFBUSxFQUFFRCxLQUFLLENBQUNDLFFBQVE7b0JBQ3hCQyxRQUFRLEVBQUVGLEtBQUssQ0FBQ0UsUUFBUTs7Ozs7MEJBQ1Y7YUFDakIsQ0FBQzs7Ozs7aUJBQ087Ozs7O2FBQ1AsQ0FDTjtDQUNIO0FBdEJLZixLQUFBQSxXQUFXO0FBd0JqQixtQ0FBbUM7QUFDbkMsYUFBYTtBQUNiLFlBQVk7QUFDWixtQkFBbUI7QUFDbkIsb0VBQW9FO0FBQ3BFLG1FQUFtRTtBQUNuRSw0QkFBNEI7QUFDNUIsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQixhQUFhO0FBQ2IsT0FBTztBQUNQLEtBQUs7QUFFTCwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hvbWUvSW1hZ2VTbGlkZXIudHN4Pzk3OWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjtcbmltcG9ydCBQcm9ncmVzc0NhcmQgZnJvbSBcIi4vUHJvZ3Jlc3NDYXJkXCI7XG5pbXBvcnQgeyBJUHJvZ3Jlc3MgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL2pzXCI7XG5cbmNvbnN0IEltYWdlU2xpZGVyID0gKHByb3BzOiB7IHNsaWRlczogSVByb2dyZXNzW10gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgc2hvd1RodW1icz17ZmFsc2V9XG4gICAgICAgIGF1dG9QbGF5PXt0cnVlfVxuICAgICAgICBlbXVsYXRlVG91Y2g9e3RydWV9XG4gICAgICAgIHNob3dBcnJvd3M9e2ZhbHNlfVxuICAgICAgICBzaG93U3RhdHVzPXtmYWxzZX1cbiAgICAgICAgdXNlS2V5Ym9hcmRBcnJvd3M9e3RydWV9XG4gICAgICAgIHByZXZlbnRNb3ZlbWVudFVudGlsU3dpcGVTY3JvbGxUb2xlcmFuY2VcbiAgICAgICAgc3dpcGVTY3JvbGxUb2xlcmFuY2U9ezEwMH1cbiAgICAgID5cbiAgICAgICAge3Byb3BzLnNsaWRlcy5tYXAoKHNsaWRlKSA9PiAoXG4gICAgICAgICAgPFByb2dyZXNzQ2FyZFxuICAgICAgICAgICAgdGltZVR5cGU9e3NsaWRlLnRpbWVUeXBlfVxuICAgICAgICAgICAgcHJvZ3Jlc3M9e3NsaWRlLnByb2dyZXNzfVxuICAgICAgICAgID48L1Byb2dyZXNzQ2FyZD5cbiAgICAgICAgKSl9XG4gICAgICA8L0Nhcm91c2VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gY29uc3QgSW1hZ2VTbGlkZXIgPSAoc2xpZGUpID0+IHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgPENhcm91c2VsPlxuLy8gICAgICAgICB7LyogLy8gPFByb2dyZXNzQ2FyZCB0aW1ldHlwZT1cIlRvZGF5XCIgLz47IHJldHVybntcIiBcIn0gKi99XG4vLyAgICAgICAgIDxJbWFnZSBzcmM9e3NsaWRlLmltYWdlfSBoZWlnaHQ9XCJhdXRvXCIgd2lkdGg9XCI4MDBweFwiIC8+O1xuLy8gICAgICAgICB7LyogPGgxPjwvaDE+ICovfVxuLy8gICAgICAgICA8PjwvPlxuLy8gICAgICAgPC9DYXJvdXNlbD5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlU2xpZGVyO1xuIl0sIm5hbWVzIjpbIlByb2dyZXNzQ2FyZCIsIkNhcm91c2VsIiwiSW1hZ2VTbGlkZXIiLCJwcm9wcyIsImRpdiIsInNob3dUaHVtYnMiLCJhdXRvUGxheSIsImVtdWxhdGVUb3VjaCIsInNob3dBcnJvd3MiLCJzaG93U3RhdHVzIiwidXNlS2V5Ym9hcmRBcnJvd3MiLCJwcmV2ZW50TW92ZW1lbnRVbnRpbFN3aXBlU2Nyb2xsVG9sZXJhbmNlIiwic3dpcGVTY3JvbGxUb2xlcmFuY2UiLCJzbGlkZXMiLCJtYXAiLCJzbGlkZSIsInRpbWVUeXBlIiwicHJvZ3Jlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/home/ImageSlider.tsx\n");

/***/ })

});