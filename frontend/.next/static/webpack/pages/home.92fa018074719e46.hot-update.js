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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"../node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProgressCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressCard */ \"./src/components/home/ProgressCard.tsx\");\n/* harmony import */ var react_responsive_carousel_lib_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel/lib/js */ \"../node_modules/react-responsive-carousel/lib/js/index.js\");\nvar _this = undefined;\n\n\n\n\nvar ImageSlider = function(props) {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel_lib_js__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n            showThumbs: false,\n            emulateTouch: true,\n            showArrows: false,\n            showStatus: false,\n            useKeyboardArrows: true,\n            preventMovementUntilSwipeScrollTolerance: true,\n            swipeScrollTolerance: 100,\n            renderIndicator: (onClickHandler, isSelected, index, label),\n            children: props.slides.map(function(slide) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProgressCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    timeType: slide.timeType,\n                    progress: slide.progress\n                }, void 0, false, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ImageSlider.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, _this1);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ImageSlider.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ImageSlider.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_c = ImageSlider;\n// const ImageSlider = (slide) => {\n//   return (\n//     <div>\n//       <Carousel>\n//         {/* // <ProgressCard timetype=\"Today\" />; return{\" \"} */}\n//         <Image src={slide.image} height=\"auto\" width=\"800px\" />;\n//         {/* <h1></h1> */}\n//         <></>\n//       </Carousel>\n//     </div>\n//   );\n// };\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageSlider);\nvar _c;\n$RefreshReg$(_c, \"ImageSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL0ltYWdlU2xpZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQytEO0FBQ3JCO0FBRWtCO0FBUzVELElBQU1FLFdBQVcsR0FBRyxTQUFDQyxLQUE4QixFQUFLOztJQUN0RCxxQkFDRSw4REFBQ0MsS0FBRztrQkFDRiw0RUFBQ0gsc0VBQVE7WUFDUEksVUFBVSxFQUFFLEtBQUs7WUFDakJDLFlBQVksRUFBRSxJQUFJO1lBQ2xCQyxVQUFVLEVBQUUsS0FBSztZQUNqQkMsVUFBVSxFQUFFLEtBQUs7WUFDakJDLGlCQUFpQixFQUFFLElBQUk7WUFDdkJDLHdDQUF3QztZQUN4Q0Msb0JBQW9CLEVBQUUsR0FBRztZQUN6QkMsZUFBZSxFQUFHQyxDQUFBQSxjQUFjLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxFQUFFQyxLQUFLO3NCQUV6RGIsS0FBSyxDQUFDYyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxLQUFLO3FDQUN0Qiw4REFBQ25CLHFEQUFZO29CQUNYb0IsUUFBUSxFQUFFRCxLQUFLLENBQUNDLFFBQVE7b0JBQ3hCQyxRQUFRLEVBQUVGLEtBQUssQ0FBQ0UsUUFBUTs7Ozs7MEJBQ1Y7YUFDakIsQ0FBQzs7Ozs7aUJBQ087Ozs7O2FBQ1AsQ0FDTjtDQUNIO0FBdEJLbkIsS0FBQUEsV0FBVztBQXdCakIsbUNBQW1DO0FBQ25DLGFBQWE7QUFDYixZQUFZO0FBQ1osbUJBQW1CO0FBQ25CLG9FQUFvRTtBQUNwRSxtRUFBbUU7QUFDbkUsNEJBQTRCO0FBQzVCLGdCQUFnQjtBQUNoQixvQkFBb0I7QUFDcEIsYUFBYTtBQUNiLE9BQU87QUFDUCxLQUFLO0FBRUwsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob21lL0ltYWdlU2xpZGVyLnRzeD85NzlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEltYWdlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7XG5pbXBvcnQgUHJvZ3Jlc3NDYXJkIGZyb20gXCIuL1Byb2dyZXNzQ2FyZFwiO1xuaW1wb3J0IHsgSVByb2dyZXNzIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9qc1wiO1xuXG5pbnRlcmZhY2UgcmVuZGVySW5kaWNhdG9yIHtcbiAgY2xpY2tIYW5kbGVyOiAoZTogUmVhY3QuTW91c2VFdmVudCB8IFJlYWN0LktleWJvYXJkRXZlbnQpID0+IHZvaWQsXG4gIGlzU2VsZWN0ZWQ6IGJvb2xlYW4sXG4gIGluZGV4OiBudW1iZXIsXG4gIGxhYmVsOiBzdHJpbmdcbn1cblxuY29uc3QgSW1hZ2VTbGlkZXIgPSAocHJvcHM6IHsgc2xpZGVzOiBJUHJvZ3Jlc3NbXSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxDYXJvdXNlbFxuICAgICAgICBzaG93VGh1bWJzPXtmYWxzZX1cbiAgICAgICAgZW11bGF0ZVRvdWNoPXt0cnVlfVxuICAgICAgICBzaG93QXJyb3dzPXtmYWxzZX1cbiAgICAgICAgc2hvd1N0YXR1cz17ZmFsc2V9XG4gICAgICAgIHVzZUtleWJvYXJkQXJyb3dzPXt0cnVlfVxuICAgICAgICBwcmV2ZW50TW92ZW1lbnRVbnRpbFN3aXBlU2Nyb2xsVG9sZXJhbmNlXG4gICAgICAgIHN3aXBlU2Nyb2xsVG9sZXJhbmNlPXsxMDB9XG4gICAgICAgIHJlbmRlckluZGljYXRvcj17KG9uQ2xpY2tIYW5kbGVyLCBpc1NlbGVjdGVkLCBpbmRleCwgbGFiZWwpfVxuICAgICAgPlxuICAgICAgICB7cHJvcHMuc2xpZGVzLm1hcCgoc2xpZGUpID0+IChcbiAgICAgICAgICA8UHJvZ3Jlc3NDYXJkXG4gICAgICAgICAgICB0aW1lVHlwZT17c2xpZGUudGltZVR5cGV9XG4gICAgICAgICAgICBwcm9ncmVzcz17c2xpZGUucHJvZ3Jlc3N9XG4gICAgICAgICAgPjwvUHJvZ3Jlc3NDYXJkPlxuICAgICAgICApKX1cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyBjb25zdCBJbWFnZVNsaWRlciA9IChzbGlkZSkgPT4ge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICA8Q2Fyb3VzZWw+XG4vLyAgICAgICAgIHsvKiAvLyA8UHJvZ3Jlc3NDYXJkIHRpbWV0eXBlPVwiVG9kYXlcIiAvPjsgcmV0dXJue1wiIFwifSAqL31cbi8vICAgICAgICAgPEltYWdlIHNyYz17c2xpZGUuaW1hZ2V9IGhlaWdodD1cImF1dG9cIiB3aWR0aD1cIjgwMHB4XCIgLz47XG4vLyAgICAgICAgIHsvKiA8aDE+PC9oMT4gKi99XG4vLyAgICAgICAgIDw+PC8+XG4vLyAgICAgICA8L0Nhcm91c2VsPlxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VTbGlkZXI7XG4iXSwibmFtZXMiOlsiUHJvZ3Jlc3NDYXJkIiwiQ2Fyb3VzZWwiLCJJbWFnZVNsaWRlciIsInByb3BzIiwiZGl2Iiwic2hvd1RodW1icyIsImVtdWxhdGVUb3VjaCIsInNob3dBcnJvd3MiLCJzaG93U3RhdHVzIiwidXNlS2V5Ym9hcmRBcnJvd3MiLCJwcmV2ZW50TW92ZW1lbnRVbnRpbFN3aXBlU2Nyb2xsVG9sZXJhbmNlIiwic3dpcGVTY3JvbGxUb2xlcmFuY2UiLCJyZW5kZXJJbmRpY2F0b3IiLCJvbkNsaWNrSGFuZGxlciIsImlzU2VsZWN0ZWQiLCJpbmRleCIsImxhYmVsIiwic2xpZGVzIiwibWFwIiwic2xpZGUiLCJ0aW1lVHlwZSIsInByb2dyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/home/ImageSlider.tsx\n");

/***/ })

});