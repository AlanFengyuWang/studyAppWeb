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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"../node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProgressCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressCard */ \"./src/components/home/ProgressCard.tsx\");\n/* harmony import */ var react_responsive_carousel_lib_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel/lib/js */ \"../node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var _cssClasses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cssClasses */ \"./src/components/home/cssClasses.ts\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\nvar ImageSlider = function(props1) {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel_lib_js__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n            showThumbs: false,\n            emulateTouch: true,\n            showArrows: false,\n            showStatus: false,\n            useKeyboardArrows: true,\n            preventMovementUntilSwipeScrollTolerance: true,\n            swipeScrollTolerance: 100,\n            renderIndicator: function(props) {\n                var defStyle = {\n                    marginLeft: 20,\n                    color: \"white\",\n                    cursor: \"pointer\"\n                };\n                var style = props.isSelected ? _objectSpread({}, defStyle, {\n                    color: \"red\"\n                }) : _objectSpread({}, defStyle);\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    style: style,\n                    className: _cssClasses__WEBPACK_IMPORTED_MODULE_4__[\"default\"].DOT(props.isSelected),\n                    onClick: props.onClickHandler,\n                    onKeyDown: props.onClickHandler,\n                    value: props.index,\n                    role: \"button\",\n                    tabIndex: 0,\n                    \"aria-label\": \"\".concat(props.label, \" \").concat(props.index + 1)\n                }, props.index, false, void 0, void 0);\n            },\n            children: props1.slides.map(function(slide) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProgressCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    timeType: slide.timeType,\n                    progress: slide.progress\n                }, void 0, false, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ImageSlider.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, _this1);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ImageSlider.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ImageSlider.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_c = ImageSlider;\n// const ImageSlider = (slide) => {\n//   return (\n//     <div>\n//       <Carousel>\n//         {/* // <ProgressCard timetype=\"Today\" />; return{\" \"} */}\n//         <Image src={slide.image} height=\"auto\" width=\"800px\" />;\n//         {/* <h1></h1> */}\n//         <></>\n//       </Carousel>\n//     </div>\n//   );\n// };\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageSlider);\nvar _c;\n$RefreshReg$(_c, \"ImageSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL0ltYWdlU2xpZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDK0Q7QUFDckI7QUFFa0I7QUFDM0I7QUFTakMsSUFBTUcsV0FBVyxHQUFHLFNBQUNDLE1BQThCLEVBQUs7O0lBQ3RELHFCQUNFLDhEQUFDQyxLQUFHO2tCQUNGLDRFQUFDSixzRUFBUTtZQUNQSyxVQUFVLEVBQUUsS0FBSztZQUNqQkMsWUFBWSxFQUFFLElBQUk7WUFDbEJDLFVBQVUsRUFBRSxLQUFLO1lBQ2pCQyxVQUFVLEVBQUUsS0FBSztZQUNqQkMsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QkMsd0NBQXdDO1lBQ3hDQyxvQkFBb0IsRUFBRSxHQUFHO1lBQ3pCQyxlQUFlLEVBQUUsU0FBQ1QsS0FBdUIsRUFBSztnQkFDNUMsSUFBTVUsUUFBUSxHQUFHO29CQUNmQyxVQUFVLEVBQUUsRUFBRTtvQkFDZEMsS0FBSyxFQUFFLE9BQU87b0JBQ2RDLE1BQU0sRUFBRSxTQUFTO2lCQUNsQjtnQkFDRCxJQUFNQyxLQUFLLEdBQUdkLEtBQUssQ0FBQ2UsVUFBVSxHQUMxQixrQkFBS0wsUUFBUTtvQkFBRUUsS0FBSyxFQUFFLEtBQUs7a0JBQUUsR0FDN0Isa0JBQUtGLFFBQVEsQ0FBRTtnQkFDbkIscUJBQ0UsOERBQUNNLElBQUU7b0JBQ0RGLEtBQUssRUFBRUEsS0FBSztvQkFDWkcsU0FBUyxFQUFFbkIsdURBQVMsQ0FBQ0UsS0FBSyxDQUFDZSxVQUFVLENBQUM7b0JBQ3RDSSxPQUFPLEVBQUVuQixLQUFLLENBQUNvQixjQUFjO29CQUM3QkMsU0FBUyxFQUFFckIsS0FBSyxDQUFDb0IsY0FBYztvQkFDL0JFLEtBQUssRUFBRXRCLEtBQUssQ0FBQ3VCLEtBQUs7b0JBRWxCQyxJQUFJLEVBQUMsUUFBUTtvQkFDYkMsUUFBUSxFQUFFLENBQUM7b0JBQ1hDLFlBQVUsRUFBRSxFQUFDLENBQWlCMUIsTUFBZSxDQUE5QkEsS0FBSyxDQUFDMkIsS0FBSyxFQUFDLEdBQUMsQ0FBa0IsUUFBaEIzQixLQUFLLENBQUN1QixLQUFLLEdBQUcsQ0FBQyxDQUFFO21CQUgxQ3ZCLEtBQUssQ0FBQ3VCLEtBQUssd0JBSWhCLENBQ0Y7YUFDSDtzQkFFQXZCLE1BQUssQ0FBQzRCLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLEtBQUs7cUNBQ3RCLDhEQUFDbEMscURBQVk7b0JBQ1htQyxRQUFRLEVBQUVELEtBQUssQ0FBQ0MsUUFBUTtvQkFDeEJDLFFBQVEsRUFBRUYsS0FBSyxDQUFDRSxRQUFROzs7OzswQkFDVjthQUNqQixDQUFDOzs7OztpQkFDTzs7Ozs7YUFDUCxDQUNOO0NBQ0g7QUE1Q0tqQyxLQUFBQSxXQUFXO0FBOENqQixtQ0FBbUM7QUFDbkMsYUFBYTtBQUNiLFlBQVk7QUFDWixtQkFBbUI7QUFDbkIsb0VBQW9FO0FBQ3BFLG1FQUFtRTtBQUNuRSw0QkFBNEI7QUFDNUIsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQixhQUFhO0FBQ2IsT0FBTztBQUNQLEtBQUs7QUFFTCwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hvbWUvSW1hZ2VTbGlkZXIudHN4Pzk3OWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjtcbmltcG9ydCBQcm9ncmVzc0NhcmQgZnJvbSBcIi4vUHJvZ3Jlc3NDYXJkXCI7XG5pbXBvcnQgeyBJUHJvZ3Jlc3MgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL2pzXCI7XG5pbXBvcnQga2xhc3MgZnJvbSBcIi4vY3NzQ2xhc3Nlc1wiO1xuXG5pbnRlcmZhY2UgSVJlbmRlckluZGljYXRvciB7XG4gIG9uQ2xpY2tIYW5kbGVyOiAoZTogUmVhY3QuTW91c2VFdmVudCB8IFJlYWN0LktleWJvYXJkRXZlbnQpID0+IHZvaWQ7XG4gIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XG4gIGluZGV4OiBudW1iZXI7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbmNvbnN0IEltYWdlU2xpZGVyID0gKHByb3BzOiB7IHNsaWRlczogSVByb2dyZXNzW10gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgc2hvd1RodW1icz17ZmFsc2V9XG4gICAgICAgIGVtdWxhdGVUb3VjaD17dHJ1ZX1cbiAgICAgICAgc2hvd0Fycm93cz17ZmFsc2V9XG4gICAgICAgIHNob3dTdGF0dXM9e2ZhbHNlfVxuICAgICAgICB1c2VLZXlib2FyZEFycm93cz17dHJ1ZX1cbiAgICAgICAgcHJldmVudE1vdmVtZW50VW50aWxTd2lwZVNjcm9sbFRvbGVyYW5jZVxuICAgICAgICBzd2lwZVNjcm9sbFRvbGVyYW5jZT17MTAwfVxuICAgICAgICByZW5kZXJJbmRpY2F0b3I9eyhwcm9wczogSVJlbmRlckluZGljYXRvcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlZlN0eWxlID0ge1xuICAgICAgICAgICAgbWFyZ2luTGVmdDogMjAsXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbnN0IHN0eWxlID0gcHJvcHMuaXNTZWxlY3RlZFxuICAgICAgICAgICAgPyB7IC4uLmRlZlN0eWxlLCBjb2xvcjogXCJyZWRcIiB9XG4gICAgICAgICAgICA6IHsgLi4uZGVmU3R5bGUgfTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtrbGFzcy5ET1QocHJvcHMuaXNTZWxlY3RlZCl9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgICBvbktleURvd249e3Byb3BzLm9uQ2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuaW5kZXh9XG4gICAgICAgICAgICAgIGtleT17cHJvcHMuaW5kZXh9XG4gICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YCR7cHJvcHMubGFiZWx9ICR7cHJvcHMuaW5kZXggKyAxfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtwcm9wcy5zbGlkZXMubWFwKChzbGlkZSkgPT4gKFxuICAgICAgICAgIDxQcm9ncmVzc0NhcmRcbiAgICAgICAgICAgIHRpbWVUeXBlPXtzbGlkZS50aW1lVHlwZX1cbiAgICAgICAgICAgIHByb2dyZXNzPXtzbGlkZS5wcm9ncmVzc31cbiAgICAgICAgICA+PC9Qcm9ncmVzc0NhcmQ+XG4gICAgICAgICkpfVxuICAgICAgPC9DYXJvdXNlbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vIGNvbnN0IEltYWdlU2xpZGVyID0gKHNsaWRlKSA9PiB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdj5cbi8vICAgICAgIDxDYXJvdXNlbD5cbi8vICAgICAgICAgey8qIC8vIDxQcm9ncmVzc0NhcmQgdGltZXR5cGU9XCJUb2RheVwiIC8+OyByZXR1cm57XCIgXCJ9ICovfVxuLy8gICAgICAgICA8SW1hZ2Ugc3JjPXtzbGlkZS5pbWFnZX0gaGVpZ2h0PVwiYXV0b1wiIHdpZHRoPVwiODAwcHhcIiAvPjtcbi8vICAgICAgICAgey8qIDxoMT48L2gxPiAqL31cbi8vICAgICAgICAgPD48Lz5cbi8vICAgICAgIDwvQ2Fyb3VzZWw+XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVNsaWRlcjtcbiJdLCJuYW1lcyI6WyJQcm9ncmVzc0NhcmQiLCJDYXJvdXNlbCIsImtsYXNzIiwiSW1hZ2VTbGlkZXIiLCJwcm9wcyIsImRpdiIsInNob3dUaHVtYnMiLCJlbXVsYXRlVG91Y2giLCJzaG93QXJyb3dzIiwic2hvd1N0YXR1cyIsInVzZUtleWJvYXJkQXJyb3dzIiwicHJldmVudE1vdmVtZW50VW50aWxTd2lwZVNjcm9sbFRvbGVyYW5jZSIsInN3aXBlU2Nyb2xsVG9sZXJhbmNlIiwicmVuZGVySW5kaWNhdG9yIiwiZGVmU3R5bGUiLCJtYXJnaW5MZWZ0IiwiY29sb3IiLCJjdXJzb3IiLCJzdHlsZSIsImlzU2VsZWN0ZWQiLCJsaSIsImNsYXNzTmFtZSIsIkRPVCIsIm9uQ2xpY2siLCJvbkNsaWNrSGFuZGxlciIsIm9uS2V5RG93biIsInZhbHVlIiwiaW5kZXgiLCJyb2xlIiwidGFiSW5kZXgiLCJhcmlhLWxhYmVsIiwibGFiZWwiLCJzbGlkZXMiLCJtYXAiLCJzbGlkZSIsInRpbWVUeXBlIiwicHJvZ3Jlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/home/ImageSlider.tsx\n");

/***/ })

});