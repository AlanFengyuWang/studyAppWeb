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

/***/ "./src/components/tasks/Subtask.tsx":
/*!******************************************!*\
  !*** ./src/components/tasks/Subtask.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\nvar Subtask = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                isRequired: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {\n                        marginBottom: 0,\n                        fontSize: \"md\",\n                        children: [\n                            \"Task \",\n                            props.index + 1,\n                            \":\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/Subtask.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, _objectSpread({\n                        placeholder: \"Title\",\n                        size: \"sm\",\n                        fontSize: \"sm\"\n                    }, props.register(\"subtask.\".concat(props.index, \".title\"), {\n                        require: true\n                    })), void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/Subtask.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/Subtask.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                mt: 2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {\n                        marginBottom: 0,\n                        fontSize: \"sm\",\n                        children: \"Description:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/Subtask.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Textarea, _objectSpread({\n                        size: \"sm\",\n                        placeholder: \"Remind my future self..\"\n                    }, props.register(\"subtask.\".concat(props.index, \".description\"))), void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/Subtask.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/Subtask.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                display: \"flex\",\n                justifyContent: \"right\",\n                width: \"100%\",\n                mb: 1,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {\n                    spacing: \"3\",\n                    size: \"xs\",\n                    marginTop: \"5px\",\n                    children: [\n                        props.isLast && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            colorScheme: \"green\",\n                            width: \"60px\",\n                            variant: \"outline\",\n                            children: \"Add\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/Subtask.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            colorScheme: \"red\",\n                            onClick: props.onClickDelFunc,\n                            children: \"Remove\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/Subtask.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/Subtask.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/Subtask.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/tasks/Subtask.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_c = Subtask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Subtask);\nvar _c;\n$RefreshReg$(_c, \"Subtask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90YXNrcy9TdWJ0YXNrLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTBCO0FBQ3VCO0FBSWpELElBQU1RLE9BQU8sR0FBRyxTQUFDQyxLQUtoQixFQUFLO0lBQ0oscUJBQ0UsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDUCx5REFBVztnQkFBQ1EsVUFBVTs7a0NBRXJCLDhEQUFDUCx1REFBUzt3QkFBQ1EsWUFBWSxFQUFFLENBQUM7d0JBQUVDLFFBQVEsRUFBQyxJQUFJOzs0QkFBQyxPQUNuQzs0QkFBQ0osS0FBSyxDQUFDSyxLQUFLLEdBQUcsQ0FBQzs0QkFBQyxHQUN4Qjs7Ozs7OzZCQUFZO2tDQUNaLDhEQUFDVCxtREFBSzt3QkFDSlUsV0FBVyxFQUFDLE9BQU87d0JBQ25CQyxJQUFJLEVBQUMsSUFBSTt3QkFDVEgsUUFBUSxFQUFDLElBQUk7dUJBQ1RKLEtBQUssQ0FBQ1EsUUFBUSxDQUFDLFVBQVMsQ0FBYyxNQUFNLENBQWxCUixLQUFLLENBQUNLLEtBQUssRUFBQyxRQUFNLENBQUMsRUFBVzt3QkFDeERJLE9BQU8sRUFBQyxJQUFJO3FCQUNmLENBQUM7Ozs7NkJBQ0Y7Ozs7OztxQkFDVTswQkFFZCw4REFBQ2YseURBQVc7Z0JBQUNnQixFQUFFLEVBQUUsQ0FBQzs7a0NBQ2hCLDhEQUFDZix1REFBUzt3QkFBQ1EsWUFBWSxFQUFFLENBQUM7d0JBQUVDLFFBQVEsRUFBQyxJQUFJO2tDQUFDLGNBRTFDOzs7Ozs2QkFBWTtrQ0FDWiw4REFBQ1Asc0RBQVE7d0JBQ1BVLElBQUksRUFBQyxJQUFJO3dCQUNURCxXQUFXLEVBQUMseUJBQXlCO3VCQUNqQ04sS0FBSyxDQUFDUSxRQUFRLENBQUMsVUFBUyxDQUFjLE1BQVksQ0FBeEJSLEtBQUssQ0FBQ0ssS0FBSyxFQUFDLGNBQVksQ0FBQyxDQUFhOzs7OzZCQUNwRTs7Ozs7O3FCQUNVOzBCQUVkLDhEQUFDZCxpREFBRztnQkFBQ29CLE9BQU8sRUFBQyxNQUFNO2dCQUFDQyxjQUFjLEVBQUMsT0FBTztnQkFBQ0MsS0FBSyxFQUFDLE1BQU07Z0JBQUNDLEVBQUUsRUFBRSxDQUFDOzBCQUMzRCw0RUFBQ3JCLHlEQUFXO29CQUFDc0IsT0FBTyxFQUFDLEdBQUc7b0JBQUNSLElBQUksRUFBQyxJQUFJO29CQUFDUyxTQUFTLEVBQUMsS0FBSzs7d0JBQy9DaEIsS0FBSyxDQUFDaUIsTUFBTSxrQkFDWCw4REFBQ3pCLG9EQUFNOzRCQUFDMEIsV0FBVyxFQUFDLE9BQU87NEJBQUNMLEtBQUssRUFBQyxNQUFNOzRCQUFDTSxPQUFPLEVBQUMsU0FBUztzQ0FBQyxLQUUzRDs7Ozs7aUNBQVM7c0NBRVgsOERBQUMzQixvREFBTTs0QkFBQzBCLFdBQVcsRUFBQyxLQUFLOzRCQUFDRSxPQUFPLEVBQUVwQixLQUFLLENBQUNxQixjQUFjO3NDQUFFLFFBRXpEOzs7OztpQ0FBUzs7Ozs7O3lCQUNHOzs7OztxQkFDVjs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0FBaERLdEIsS0FBQUEsT0FBTztBQWtEYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Rhc2tzL1N1YnRhc2sudHN4PzcwODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIEJ1dHRvbkdyb3VwLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUxhYmVsLFxuICBJbnB1dCxcbiAgVGV4dGFyZWEsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QsIHsgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBFdmVudEhhbmRsZXJGdW5jVHlwZSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4gdm9pZDtcblxuY29uc3QgU3VidGFzayA9IChwcm9wczoge1xuICBpbmRleDogbnVtYmVyO1xuICByZWdpc3RlcjogYW55O1xuICBhcHBlbmQ6IChvYmo6IG9iamVjdCB8IG9iamVjdFtdKSA9PiB2b2lkO1xuICByZW1vdmU6IChpbmRleD86IG51bWJlciB8IG51bWJlcltdKSA9PiB2b2lkO1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Rm9ybUNvbnRyb2wgaXNSZXF1aXJlZD5cbiAgICAgICAgey8qIDxUZXh0PlRhc2sge3Byb3BzLmluZGV4fTwvVGV4dD4gKi99XG4gICAgICAgIDxGb3JtTGFiZWwgbWFyZ2luQm90dG9tPXswfSBmb250U2l6ZT1cIm1kXCI+XG4gICAgICAgICAgVGFzayB7cHJvcHMuaW5kZXggKyAxfTpcbiAgICAgICAgPC9Gb3JtTGFiZWw+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgZm9udFNpemU9XCJzbVwiXG4gICAgICAgICAgey4uLnByb3BzLnJlZ2lzdGVyKGBzdWJ0YXNrLiR7cHJvcHMuaW5kZXh9LnRpdGxlYCBhcyBjb25zdCwge1xuICAgICAgICAgICAgICByZXF1aXJlOnRydWVcbiAgICAgICAgICB9KX1cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgIDxGb3JtQ29udHJvbCBtdD17Mn0+XG4gICAgICAgIDxGb3JtTGFiZWwgbWFyZ2luQm90dG9tPXswfSBmb250U2l6ZT1cInNtXCI+XG4gICAgICAgICAgRGVzY3JpcHRpb246XG4gICAgICAgIDwvRm9ybUxhYmVsPlxuICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVtaW5kIG15IGZ1dHVyZSBzZWxmLi5cIlxuICAgICAgICAgIHsuLi5wcm9wcy5yZWdpc3Rlcihgc3VidGFzay4ke3Byb3BzLmluZGV4fS5kZXNjcmlwdGlvbmAgYXMgY29uc3RhbnQpfVxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwicmlnaHRcIiB3aWR0aD1cIjEwMCVcIiBtYj17MX0+XG4gICAgICAgIDxCdXR0b25Hcm91cCBzcGFjaW5nPVwiM1wiIHNpemU9XCJ4c1wiIG1hcmdpblRvcD1cIjVweFwiPlxuICAgICAgICAgIHtwcm9wcy5pc0xhc3QgJiYgKFxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImdyZWVuXCIgd2lkdGg9XCI2MHB4XCIgdmFyaWFudD1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJyZWRcIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrRGVsRnVuY30+XG4gICAgICAgICAgICBSZW1vdmVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgIDwvQm94PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3VidGFzaztcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJCdXR0b25Hcm91cCIsIkZvcm1Db250cm9sIiwiRm9ybUxhYmVsIiwiSW5wdXQiLCJUZXh0YXJlYSIsIlJlYWN0IiwiU3VidGFzayIsInByb3BzIiwiZGl2IiwiaXNSZXF1aXJlZCIsIm1hcmdpbkJvdHRvbSIsImZvbnRTaXplIiwiaW5kZXgiLCJwbGFjZWhvbGRlciIsInNpemUiLCJyZWdpc3RlciIsInJlcXVpcmUiLCJtdCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwibWIiLCJzcGFjaW5nIiwibWFyZ2luVG9wIiwiaXNMYXN0IiwiY29sb3JTY2hlbWUiLCJ2YXJpYW50Iiwib25DbGljayIsIm9uQ2xpY2tEZWxGdW5jIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/tasks/Subtask.tsx\n");

/***/ })

});