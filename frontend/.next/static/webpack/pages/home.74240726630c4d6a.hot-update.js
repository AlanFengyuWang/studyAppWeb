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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"../node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProgressCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressCard */ \"./src/components/home/ProgressCard.tsx\");\n/* harmony import */ var react_responsive_carousel_lib_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel/lib/js */ \"../node_modules/react-responsive-carousel/lib/js/index.js\");\nvar _this = undefined;\n\n\n\n\nvar ImageSlider = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel_lib_js__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n            showThumbs: false,\n            autoPlay: true,\n            interval: 30000,\n            emulateTouch: true,\n            infiniteLoop: true,\n            showArrows: false,\n            showStatus: false,\n            useKeyboardArrows: true,\n            preventMovementUntilSwipeScrollTolerance: true,\n            swipeScrollTolerance: 100,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProgressCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                timeType: props.slide.timeType,\n                progress: props.slide.progress\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ImageSlider.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ImageSlider.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ImageSlider.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, _this);\n};\n_c = ImageSlider;\n// const ImageSlider = (slide) => {\n//   return (\n//     <div>\n//       <Carousel>\n//         {/* // <ProgressCard timetype=\"Today\" />; return{\" \"} */}\n//         <Image src={slide.image} height=\"auto\" width=\"800px\" />;\n//         {/* <h1></h1> */}\n//         <></>\n//       </Carousel>\n//     </div>\n//   );\n// };\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageSlider);\nvar _c;\n$RefreshReg$(_c, \"ImageSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL0ltYWdlU2xpZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQytEO0FBQ3JCO0FBRWtCO0FBRTVELElBQU1FLFdBQVcsR0FBRyxTQUFDQyxLQUEyQixFQUFLO0lBQ25ELHFCQUNFLDhEQUFDQyxLQUFHO2tCQUNGLDRFQUFDSCxzRUFBUTtZQUNQSSxVQUFVLEVBQUUsS0FBSztZQUNqQkMsUUFBUSxFQUFFLElBQUk7WUFDZEMsUUFBUSxFQUFFLEtBQUs7WUFDZkMsWUFBWSxFQUFFLElBQUk7WUFDbEJDLFlBQVksRUFBRSxJQUFJO1lBQ2xCQyxVQUFVLEVBQUUsS0FBSztZQUNqQkMsVUFBVSxFQUFFLEtBQUs7WUFDakJDLGlCQUFpQixFQUFFLElBQUk7WUFDdkJDLHdDQUF3QztZQUN4Q0Msb0JBQW9CLEVBQUUsR0FBRztzQkFFekIsNEVBQUNkLHFEQUFZO2dCQUNYZSxRQUFRLEVBQUVaLEtBQUssQ0FBQ2EsS0FBSyxDQUFDRCxRQUFRO2dCQUM5QkUsUUFBUSxFQUFFZCxLQUFLLENBQUNhLEtBQUssQ0FBQ0MsUUFBUTs7Ozs7cUJBQ2hCOzs7OztpQkFDUDs7Ozs7YUFDUCxDQUNOO0NBQ0g7QUF0QktmLEtBQUFBLFdBQVc7QUF3QmpCLG1DQUFtQztBQUNuQyxhQUFhO0FBQ2IsWUFBWTtBQUNaLG1CQUFtQjtBQUNuQixvRUFBb0U7QUFDcEUsbUVBQW1FO0FBQ25FLDRCQUE0QjtBQUM1QixnQkFBZ0I7QUFDaEIsb0JBQW9CO0FBQ3BCLGFBQWE7QUFDYixPQUFPO0FBQ1AsS0FBSztBQUVMLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9JbWFnZVNsaWRlci50c3g/OTc5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiO1xuaW1wb3J0IFByb2dyZXNzQ2FyZCBmcm9tIFwiLi9Qcm9ncmVzc0NhcmRcIjtcbmltcG9ydCB7IElQcm9ncmVzcyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvanNcIjtcblxuY29uc3QgSW1hZ2VTbGlkZXIgPSAocHJvcHM6IHsgc2xpZGU6IElQcm9ncmVzcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxDYXJvdXNlbFxuICAgICAgICBzaG93VGh1bWJzPXtmYWxzZX1cbiAgICAgICAgYXV0b1BsYXk9e3RydWV9XG4gICAgICAgIGludGVydmFsPXszMDAwMH1cbiAgICAgICAgZW11bGF0ZVRvdWNoPXt0cnVlfVxuICAgICAgICBpbmZpbml0ZUxvb3A9e3RydWV9XG4gICAgICAgIHNob3dBcnJvd3M9e2ZhbHNlfVxuICAgICAgICBzaG93U3RhdHVzPXtmYWxzZX1cbiAgICAgICAgdXNlS2V5Ym9hcmRBcnJvd3M9e3RydWV9XG4gICAgICAgIHByZXZlbnRNb3ZlbWVudFVudGlsU3dpcGVTY3JvbGxUb2xlcmFuY2VcbiAgICAgICAgc3dpcGVTY3JvbGxUb2xlcmFuY2U9ezEwMH1cbiAgICAgID5cbiAgICAgICAgPFByb2dyZXNzQ2FyZFxuICAgICAgICAgIHRpbWVUeXBlPXtwcm9wcy5zbGlkZS50aW1lVHlwZX1cbiAgICAgICAgICBwcm9ncmVzcz17cHJvcHMuc2xpZGUucHJvZ3Jlc3N9XG4gICAgICAgID48L1Byb2dyZXNzQ2FyZD5cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyBjb25zdCBJbWFnZVNsaWRlciA9IChzbGlkZSkgPT4ge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICA8Q2Fyb3VzZWw+XG4vLyAgICAgICAgIHsvKiAvLyA8UHJvZ3Jlc3NDYXJkIHRpbWV0eXBlPVwiVG9kYXlcIiAvPjsgcmV0dXJue1wiIFwifSAqL31cbi8vICAgICAgICAgPEltYWdlIHNyYz17c2xpZGUuaW1hZ2V9IGhlaWdodD1cImF1dG9cIiB3aWR0aD1cIjgwMHB4XCIgLz47XG4vLyAgICAgICAgIHsvKiA8aDE+PC9oMT4gKi99XG4vLyAgICAgICAgIDw+PC8+XG4vLyAgICAgICA8L0Nhcm91c2VsPlxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VTbGlkZXI7XG4iXSwibmFtZXMiOlsiUHJvZ3Jlc3NDYXJkIiwiQ2Fyb3VzZWwiLCJJbWFnZVNsaWRlciIsInByb3BzIiwiZGl2Iiwic2hvd1RodW1icyIsImF1dG9QbGF5IiwiaW50ZXJ2YWwiLCJlbXVsYXRlVG91Y2giLCJpbmZpbml0ZUxvb3AiLCJzaG93QXJyb3dzIiwic2hvd1N0YXR1cyIsInVzZUtleWJvYXJkQXJyb3dzIiwicHJldmVudE1vdmVtZW50VW50aWxTd2lwZVNjcm9sbFRvbGVyYW5jZSIsInN3aXBlU2Nyb2xsVG9sZXJhbmNlIiwidGltZVR5cGUiLCJzbGlkZSIsInByb2dyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/home/ImageSlider.tsx\n");

/***/ })

});