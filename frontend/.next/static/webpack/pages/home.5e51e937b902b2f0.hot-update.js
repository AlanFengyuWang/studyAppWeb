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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"../node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProgressCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressCard */ \"./src/components/home/ProgressCard.tsx\");\n/* harmony import */ var react_responsive_carousel_lib_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel/lib/js */ \"../node_modules/react-responsive-carousel/lib/js/index.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\nvar ImageSlider = function(props1) {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel_lib_js__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n            showThumbs: false,\n            emulateTouch: true,\n            showArrows: false,\n            showStatus: false,\n            useKeyboardArrows: true,\n            preventMovementUntilSwipeScrollTolerance: true,\n            swipeScrollTolerance: 100,\n            renderIndicator: function(props) {\n                var defStyle = {\n                    marginLeft: 20,\n                    color: \"white\",\n                    cursor: \"pointer\"\n                };\n                var style = props.isSelected ? _objectSpread({}, defStyle, {\n                    color: \"red\"\n                }) : _objectSpread({}, defStyle);\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    style: style,\n                    onClick: props.onClickHandler,\n                    onKeyDown: props.onClickHandler,\n                    role: \"button\",\n                    tabIndex: 0,\n                    children: \"cust \" + index\n                }, props.index, false, void 0, void 0);\n            },\n            children: props1.slides.map(function(slide) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProgressCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    timeType: slide.timeType,\n                    progress: slide.progress\n                }, void 0, false, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ImageSlider.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, _this1);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ImageSlider.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ImageSlider.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_c = ImageSlider;\n// const ImageSlider = (slide) => {\n//   return (\n//     <div>\n//       <Carousel>\n//         {/* // <ProgressCard timetype=\"Today\" />; return{\" \"} */}\n//         <Image src={slide.image} height=\"auto\" width=\"800px\" />;\n//         {/* <h1></h1> */}\n//         <></>\n//       </Carousel>\n//     </div>\n//   );\n// };\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageSlider);\nvar _c;\n$RefreshReg$(_c, \"ImageSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL0ltYWdlU2xpZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMrRDtBQUNyQjtBQUVrQjtBQVM1RCxJQUFNRSxXQUFXLEdBQUcsU0FBQ0MsTUFBOEIsRUFBSzs7SUFDdEQscUJBQ0UsOERBQUNDLEtBQUc7a0JBQ0YsNEVBQUNILHNFQUFRO1lBQ1BJLFVBQVUsRUFBRSxLQUFLO1lBQ2pCQyxZQUFZLEVBQUUsSUFBSTtZQUNsQkMsVUFBVSxFQUFFLEtBQUs7WUFDakJDLFVBQVUsRUFBRSxLQUFLO1lBQ2pCQyxpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCQyx3Q0FBd0M7WUFDeENDLG9CQUFvQixFQUFFLEdBQUc7WUFDekJDLGVBQWUsRUFBRSxTQUFDVCxLQUF1QixFQUFLO2dCQUM1QyxJQUFNVSxRQUFRLEdBQUc7b0JBQ2ZDLFVBQVUsRUFBRSxFQUFFO29CQUNkQyxLQUFLLEVBQUUsT0FBTztvQkFDZEMsTUFBTSxFQUFFLFNBQVM7aUJBQ2xCO2dCQUNELElBQU1DLEtBQUssR0FBR2QsS0FBSyxDQUFDZSxVQUFVLEdBQzFCLGtCQUFLTCxRQUFRO29CQUFFRSxLQUFLLEVBQUUsS0FBSztrQkFBRSxHQUM3QixrQkFBS0YsUUFBUSxDQUFFO2dCQUNuQixxQkFDRSw4REFBQ00sTUFBSTtvQkFDSEYsS0FBSyxFQUFFQSxLQUFLO29CQUNaRyxPQUFPLEVBQUVqQixLQUFLLENBQUNrQixjQUFjO29CQUM3QkMsU0FBUyxFQUFFbkIsS0FBSyxDQUFDa0IsY0FBYztvQkFHL0JFLElBQUksRUFBQyxRQUFRO29CQUNiQyxRQUFRLEVBQUUsQ0FBQzs4QkFHVixPQUFPLEdBQUdDLEtBQUs7bUJBTFh0QixLQUFLLENBQUNzQixLQUFLLHdCQU1YLENBQ1A7YUFDSDtzQkFFQXRCLE1BQUssQ0FBQ3VCLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLEtBQUs7cUNBQ3RCLDhEQUFDNUIscURBQVk7b0JBQ1g2QixRQUFRLEVBQUVELEtBQUssQ0FBQ0MsUUFBUTtvQkFDeEJDLFFBQVEsRUFBRUYsS0FBSyxDQUFDRSxRQUFROzs7OzswQkFDVjthQUNqQixDQUFDOzs7OztpQkFDTzs7Ozs7YUFDUCxDQUNOO0NBQ0g7QUE3Q0s1QixLQUFBQSxXQUFXO0FBK0NqQixtQ0FBbUM7QUFDbkMsYUFBYTtBQUNiLFlBQVk7QUFDWixtQkFBbUI7QUFDbkIsb0VBQW9FO0FBQ3BFLG1FQUFtRTtBQUNuRSw0QkFBNEI7QUFDNUIsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQixhQUFhO0FBQ2IsT0FBTztBQUNQLEtBQUs7QUFFTCwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hvbWUvSW1hZ2VTbGlkZXIudHN4Pzk3OWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjtcbmltcG9ydCBQcm9ncmVzc0NhcmQgZnJvbSBcIi4vUHJvZ3Jlc3NDYXJkXCI7XG5pbXBvcnQgeyBJUHJvZ3Jlc3MgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL2pzXCI7XG5cbmludGVyZmFjZSBJUmVuZGVySW5kaWNhdG9yIHtcbiAgb25DbGlja0hhbmRsZXI6IChlOiBSZWFjdC5Nb3VzZUV2ZW50IHwgUmVhY3QuS2V5Ym9hcmRFdmVudCkgPT4gdm9pZDtcbiAgaXNTZWxlY3RlZDogYm9vbGVhbjtcbiAgaW5kZXg6IG51bWJlcjtcbiAgbGFiZWw6IHN0cmluZztcbn1cblxuY29uc3QgSW1hZ2VTbGlkZXIgPSAocHJvcHM6IHsgc2xpZGVzOiBJUHJvZ3Jlc3NbXSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxDYXJvdXNlbFxuICAgICAgICBzaG93VGh1bWJzPXtmYWxzZX1cbiAgICAgICAgZW11bGF0ZVRvdWNoPXt0cnVlfVxuICAgICAgICBzaG93QXJyb3dzPXtmYWxzZX1cbiAgICAgICAgc2hvd1N0YXR1cz17ZmFsc2V9XG4gICAgICAgIHVzZUtleWJvYXJkQXJyb3dzPXt0cnVlfVxuICAgICAgICBwcmV2ZW50TW92ZW1lbnRVbnRpbFN3aXBlU2Nyb2xsVG9sZXJhbmNlXG4gICAgICAgIHN3aXBlU2Nyb2xsVG9sZXJhbmNlPXsxMDB9XG4gICAgICAgIHJlbmRlckluZGljYXRvcj17KHByb3BzOiBJUmVuZGVySW5kaWNhdG9yKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGVmU3R5bGUgPSB7XG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiAyMCxcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3Qgc3R5bGUgPSBwcm9wcy5pc1NlbGVjdGVkXG4gICAgICAgICAgICA/IHsgLi4uZGVmU3R5bGUsIGNvbG9yOiBcInJlZFwiIH1cbiAgICAgICAgICAgIDogeyAuLi5kZWZTdHlsZSB9O1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgICBvbktleURvd249e3Byb3BzLm9uQ2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgICAvLyB2YWx1ZT17cHJvcHMuaW5kZXh9XG4gICAgICAgICAgICAgIGtleT17cHJvcHMuaW5kZXh9XG4gICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgICAgICAgLy8gYXJpYS1sYWJlbD17YCR7bGFiZWx9ICR7aW5kZXggKyAxfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtcImN1c3QgXCIgKyBpbmRleH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7cHJvcHMuc2xpZGVzLm1hcCgoc2xpZGUpID0+IChcbiAgICAgICAgICA8UHJvZ3Jlc3NDYXJkXG4gICAgICAgICAgICB0aW1lVHlwZT17c2xpZGUudGltZVR5cGV9XG4gICAgICAgICAgICBwcm9ncmVzcz17c2xpZGUucHJvZ3Jlc3N9XG4gICAgICAgICAgPjwvUHJvZ3Jlc3NDYXJkPlxuICAgICAgICApKX1cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyBjb25zdCBJbWFnZVNsaWRlciA9IChzbGlkZSkgPT4ge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICA8Q2Fyb3VzZWw+XG4vLyAgICAgICAgIHsvKiAvLyA8UHJvZ3Jlc3NDYXJkIHRpbWV0eXBlPVwiVG9kYXlcIiAvPjsgcmV0dXJue1wiIFwifSAqL31cbi8vICAgICAgICAgPEltYWdlIHNyYz17c2xpZGUuaW1hZ2V9IGhlaWdodD1cImF1dG9cIiB3aWR0aD1cIjgwMHB4XCIgLz47XG4vLyAgICAgICAgIHsvKiA8aDE+PC9oMT4gKi99XG4vLyAgICAgICAgIDw+PC8+XG4vLyAgICAgICA8L0Nhcm91c2VsPlxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VTbGlkZXI7XG4iXSwibmFtZXMiOlsiUHJvZ3Jlc3NDYXJkIiwiQ2Fyb3VzZWwiLCJJbWFnZVNsaWRlciIsInByb3BzIiwiZGl2Iiwic2hvd1RodW1icyIsImVtdWxhdGVUb3VjaCIsInNob3dBcnJvd3MiLCJzaG93U3RhdHVzIiwidXNlS2V5Ym9hcmRBcnJvd3MiLCJwcmV2ZW50TW92ZW1lbnRVbnRpbFN3aXBlU2Nyb2xsVG9sZXJhbmNlIiwic3dpcGVTY3JvbGxUb2xlcmFuY2UiLCJyZW5kZXJJbmRpY2F0b3IiLCJkZWZTdHlsZSIsIm1hcmdpbkxlZnQiLCJjb2xvciIsImN1cnNvciIsInN0eWxlIiwiaXNTZWxlY3RlZCIsInNwYW4iLCJvbkNsaWNrIiwib25DbGlja0hhbmRsZXIiLCJvbktleURvd24iLCJyb2xlIiwidGFiSW5kZXgiLCJpbmRleCIsInNsaWRlcyIsIm1hcCIsInNsaWRlIiwidGltZVR5cGUiLCJwcm9ncmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/home/ImageSlider.tsx\n");

/***/ })

});