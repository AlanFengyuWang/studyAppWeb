"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/navbar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Image */ \"./node_modules/next/Image.js\");\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_navBar_navBar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/navBar/navBar.module.css */ \"./src/styles/navBar/navBar.module.css\");\n/* harmony import */ var _styles_navBar_navBar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_navBar_navBar_module_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\nvar navbar = function() {\n    var _this1 = _this;\n    var pages = [\n        {\n            title: \"Award\",\n            href: \"/award\",\n            image: \"/menuOptions/award.svg\",\n            paddingBottom: \"0px\"\n        },\n        {\n            title: \"Schedule\",\n            href: \"/schedule\",\n            image: \"/menuOptions/schedule.svg\",\n            paddingBottom: \"10px\"\n        },\n        {\n            title: \"Home\",\n            href: \"/home\",\n            image: \"/menuOptions/home.svg\",\n            paddingBottom: \"20px\"\n        },\n        {\n            title: \"Study\",\n            href: \"/study\",\n            image: \"/menuOptions/study.svg\",\n            paddingBottom: \"10px\"\n        },\n        {\n            title: \"Community\",\n            href: \"/community\",\n            image: \"/menuOptions/community.svg\",\n            paddingBottom: \"0px\"\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_navBar_navBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().halfCircleBackground),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n            justify: \"space-evenly\",\n            position: \"fixed\",\n            bottom: \"0\",\n            width: \"100%\",\n            fontSize: \"lg\",\n            paddingBottom: \"4%\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/menuOptions/background.svg\",\n                    className: (_styles_navBar_navBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().halfCircleBackground)\n                }, void 0, false, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/navbar.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, _this),\n                pages.map(function(page) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        bg: page.title,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {\n                            label: page.title,\n                            placement: \"bottom\",\n                            position: \"relative\",\n                            top: \"8\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: page.href,\n                                    passHref: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        layout: \"fixed\",\n                                        width: 55,\n                                        height: 55,\n                                        src: page.image,\n                                        alt: page.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/navbar.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 19\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/navbar.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 17\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/navbar.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/navbar.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/navbar.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/navbar.tsx\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/navbar.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, _this);\n};\n// {pages.map((page) => {\n//   return (\n//   );\n// })}\n/* harmony default export */ __webpack_exports__[\"default\"] = (navbar);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZiYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQWFBO0FBQ087QUFDRjtBQUN5QjtBQUV4RCxJQUFNTyxNQUFNLEdBQUcsV0FBTTs7SUFDbkIsSUFBTUMsS0FBSyxHQUFHO1FBQ1o7WUFDRUMsS0FBSyxFQUFFLE9BQU87WUFDZEMsSUFBSSxFQUFFLFFBQVE7WUFDZEMsS0FBSyxFQUFFLHdCQUF3QjtZQUMvQkMsYUFBYSxFQUFFLEtBQUs7U0FDckI7UUFDRDtZQUNFSCxLQUFLLEVBQUUsVUFBVTtZQUNqQkMsSUFBSSxFQUFFLFdBQVc7WUFDakJDLEtBQUssRUFBRSwyQkFBMkI7WUFDbENDLGFBQWEsRUFBRSxNQUFNO1NBQ3RCO1FBQ0Q7WUFDRUgsS0FBSyxFQUFFLE1BQU07WUFDYkMsSUFBSSxFQUFFLE9BQU87WUFDYkMsS0FBSyxFQUFFLHVCQUF1QjtZQUM5QkMsYUFBYSxFQUFFLE1BQU07U0FDdEI7UUFDRDtZQUNFSCxLQUFLLEVBQUUsT0FBTztZQUNkQyxJQUFJLEVBQUUsUUFBUTtZQUNkQyxLQUFLLEVBQUUsd0JBQXdCO1lBQy9CQyxhQUFhLEVBQUUsTUFBTTtTQUN0QjtRQUNEO1lBQ0VILEtBQUssRUFBRSxXQUFXO1lBQ2xCQyxJQUFJLEVBQUUsWUFBWTtZQUNsQkMsS0FBSyxFQUFFLDRCQUE0QjtZQUNuQ0MsYUFBYSxFQUFFLEtBQUs7U0FDckI7S0FDRjtJQUNELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRVIsOEZBQTJCO2tCQUN6Qyw0RUFBQ0osa0RBQUk7WUFDSGMsT0FBTyxFQUFDLGNBQWM7WUFDdEJDLFFBQVEsRUFBQyxPQUFPO1lBQ2hCQyxNQUFNLEVBQUMsR0FBRztZQUNWQyxLQUFLLEVBQUMsTUFBTTtZQUNaQyxRQUFRLEVBQUMsSUFBSTtZQUNiUixhQUFhLEVBQUMsSUFBSTs7OEJBRWxCLDhEQUFDUyxLQUFHO29CQUNGQyxHQUFHLEVBQUMsNkJBQTZCO29CQUNqQ1IsU0FBUyxFQUFFUiw4RkFBMkI7Ozs7O3lCQUNqQztnQkFDTkUsS0FBSyxDQUFDZSxHQUFHLENBQUMsU0FBQ0MsSUFBSTt5Q0FDZCw4REFBQ3ZCLGlEQUFHO3dCQUFDd0IsRUFBRSxFQUFFRCxJQUFJLENBQUNmLEtBQUs7a0NBQ2pCLDRFQUFDTixxREFBTzs0QkFDTnVCLEtBQUssRUFBRUYsSUFBSSxDQUFDZixLQUFLOzRCQUNqQmtCLFNBQVMsRUFBQyxRQUFROzRCQUNsQlYsUUFBUSxFQUFDLFVBQVU7NEJBQ25CVyxHQUFHLEVBQUMsR0FBRztzQ0FFUCw0RUFBQ0MsTUFBSTswQ0FDSCw0RUFBQ3pCLGtEQUFRO29DQUFDTSxJQUFJLEVBQUVjLElBQUksQ0FBQ2QsSUFBSTtvQ0FBRW9CLFFBQVE7OENBQ2pDLDRFQUFDekIsbURBQUs7d0NBQ0owQixNQUFNLEVBQUMsT0FBTzt3Q0FDZFosS0FBSyxFQUFFLEVBQUU7d0NBQ1RhLE1BQU0sRUFBRSxFQUFFO3dDQUNWVixHQUFHLEVBQUVFLElBQUksQ0FBQ2IsS0FBSzt3Q0FDZnNCLEdBQUcsRUFBRVQsSUFBSSxDQUFDZixLQUFLOzs7Ozs4Q0FDZjs7Ozs7MENBQ087Ozs7O3NDQUNOOzs7OztrQ0FDQzs7Ozs7OEJBQ047aUJBQ1AsQ0FBQzs7Ozs7O2lCQUNHOzs7OzthQUNILENBQ047Q0FDSDtBQUVELHlCQUF5QjtBQUN6QixhQUFhO0FBQ2IsT0FBTztBQUNQLE1BQU07QUFFTiwrREFBZUYsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL25hdmJhci50c3g/NWY3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIEJyZWFkY3J1bWIsXG4gIEJyZWFkY3J1bWJJdGVtLFxuICBCcmVhZGNydW1iTGluayxcbiAgQnJlYWRjcnVtYlNlcGFyYXRvcixcbiAgRmxleCxcbiAgSFN0YWNrLFxuICBMaW5rLFxuICBTcGFjZXIsXG4gIFN0YWNrLFxuICBUb29sdGlwLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9JbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL25hdkJhci9uYXZCYXIubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBuYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHBhZ2VzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIkF3YXJkXCIsXG4gICAgICBocmVmOiBcIi9hd2FyZFwiLFxuICAgICAgaW1hZ2U6IFwiL21lbnVPcHRpb25zL2F3YXJkLnN2Z1wiLFxuICAgICAgcGFkZGluZ0JvdHRvbTogXCIwcHhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlNjaGVkdWxlXCIsXG4gICAgICBocmVmOiBcIi9zY2hlZHVsZVwiLFxuICAgICAgaW1hZ2U6IFwiL21lbnVPcHRpb25zL3NjaGVkdWxlLnN2Z1wiLFxuICAgICAgcGFkZGluZ0JvdHRvbTogXCIxMHB4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJIb21lXCIsXG4gICAgICBocmVmOiBcIi9ob21lXCIsXG4gICAgICBpbWFnZTogXCIvbWVudU9wdGlvbnMvaG9tZS5zdmdcIixcbiAgICAgIHBhZGRpbmdCb3R0b206IFwiMjBweFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiU3R1ZHlcIixcbiAgICAgIGhyZWY6IFwiL3N0dWR5XCIsXG4gICAgICBpbWFnZTogXCIvbWVudU9wdGlvbnMvc3R1ZHkuc3ZnXCIsXG4gICAgICBwYWRkaW5nQm90dG9tOiBcIjEwcHhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNvbW11bml0eVwiLFxuICAgICAgaHJlZjogXCIvY29tbXVuaXR5XCIsXG4gICAgICBpbWFnZTogXCIvbWVudU9wdGlvbnMvY29tbXVuaXR5LnN2Z1wiLFxuICAgICAgcGFkZGluZ0JvdHRvbTogXCIwcHhcIixcbiAgICB9LFxuICBdO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGFsZkNpcmNsZUJhY2tncm91bmR9PlxuICAgICAgPEZsZXhcbiAgICAgICAganVzdGlmeT1cInNwYWNlLWV2ZW5seVwiXG4gICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgICBib3R0b209XCIwXCJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgZm9udFNpemU9XCJsZ1wiXG4gICAgICAgIHBhZGRpbmdCb3R0b209XCI0JVwiXG4gICAgICA+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvbWVudU9wdGlvbnMvYmFja2dyb3VuZC5zdmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhhbGZDaXJjbGVCYWNrZ3JvdW5kfVxuICAgICAgICA+PC9pbWc+XG4gICAgICAgIHtwYWdlcy5tYXAoKHBhZ2UpID0+IChcbiAgICAgICAgICA8Qm94IGJnPXtwYWdlLnRpdGxlfT5cbiAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgIGxhYmVsPXtwYWdlLnRpdGxlfVxuICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgdG9wPVwiOFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPXtwYWdlLmhyZWZ9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpeGVkXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezU1fVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezU1fVxuICAgICAgICAgICAgICAgICAgICBzcmM9e3BhZ2UuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17cGFnZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApKX1cbiAgICAgIDwvRmxleD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vIHtwYWdlcy5tYXAoKHBhZ2UpID0+IHtcbi8vICAgcmV0dXJuIChcbi8vICAgKTtcbi8vIH0pfVxuXG5leHBvcnQgZGVmYXVsdCBuYXZiYXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJGbGV4IiwiVG9vbHRpcCIsIk5leHRMaW5rIiwiSW1hZ2UiLCJzdHlsZXMiLCJuYXZiYXIiLCJwYWdlcyIsInRpdGxlIiwiaHJlZiIsImltYWdlIiwicGFkZGluZ0JvdHRvbSIsImRpdiIsImNsYXNzTmFtZSIsImhhbGZDaXJjbGVCYWNrZ3JvdW5kIiwianVzdGlmeSIsInBvc2l0aW9uIiwiYm90dG9tIiwid2lkdGgiLCJmb250U2l6ZSIsImltZyIsInNyYyIsIm1hcCIsInBhZ2UiLCJiZyIsImxhYmVsIiwicGxhY2VtZW50IiwidG9wIiwic3BhbiIsInBhc3NIcmVmIiwibGF5b3V0IiwiaGVpZ2h0IiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/navbar.tsx\n");

/***/ })

});