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

/***/ "./src/components/home/ProgressCard.tsx":
/*!**********************************************!*\
  !*** ./src/components/home/ProgressCard.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _styles_progressCard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/progressCard.module.css */ \"./src/styles/progressCard.module.css\");\n/* harmony import */ var _styles_progressCard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_progressCard_module_css__WEBPACK_IMPORTED_MODULE_2__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar ProgressCard = function(param) {\n    var timeType = param.timeType, progress = param.progress;\n    _s();\n    // Progress decide the color\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"#9B2C2C\"), 2), color = ref[0], setColor = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (progress < 50) {\n            setColor(\"#9B2C2C\");\n        } else if (progress < 75) {\n            setColor(\"#DD6B20\");\n        } else {\n            setColor(\"#3182CE\");\n        }\n    }, [\n        progress\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_progressCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().progressCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                textAlign: \"left\",\n                marginLeft: \"4%\",\n                paddingTop: \"3%\",\n                color: \"#474444\",\n                fontWeight: 600,\n                children: [\n                    timeType,\n                    \", I have achieved:\",\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ProgressCard.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.CircularProgress, {\n                value: progress,\n                color: color,\n                size: \"40vw\",\n                thickness: 5,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.CircularProgressLabel, {\n                    style: {\n                        color: \"\".concat(color),\n                        fontWeight: \"700\"\n                    },\n                    children: [\n                        progress,\n                        \"%\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ProgressCard.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ProgressCard.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/components/home/ProgressCard.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n};\n_s(ProgressCard, \"HK6y67i9Rkl4WBDfifHxgyWpeuk=\");\n_c = ProgressCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProgressCard);\nvar _c;\n$RefreshReg$(_c, \"ProgressCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL1Byb2dyZXNzQ2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBS2Y7QUFDZ0M7O0FBTTFELElBQU1NLFlBQVksR0FBcUIsZ0JBQTRCO1FBQXpCQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsUUFBUSxTQUFSQSxRQUFROztJQUMxRCw0QkFBNEI7SUFDNUIsSUFBMEJSLEdBQWlDLGtCQUFqQ0EscURBQWMsQ0FBUyxTQUFTLENBQUMsTUFBcERVLEtBQUssR0FBY1YsR0FBaUMsR0FBL0MsRUFBRVcsUUFBUSxHQUFJWCxHQUFpQyxHQUFyQztJQUV0QkMsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSU8sUUFBUSxHQUFHLEVBQUUsRUFBRTtZQUNqQkcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3JCLE1BQU0sSUFBSUgsUUFBUSxHQUFHLEVBQUUsRUFBRTtZQUN4QkcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3JCLE1BQU07WUFDTEEsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3JCO0tBQ0YsRUFBRTtRQUFDSCxRQUFRO0tBQUMsQ0FBQyxDQUFDO0lBRWYscUJBQ0UsOERBQUNJLEtBQUc7UUFBQ0MsU0FBUyxFQUFFUixxRkFBbUI7OzBCQUNqQyw4REFBQ0Qsa0RBQUk7Z0JBQ0hXLFNBQVMsRUFBQyxNQUFNO2dCQUNoQkMsVUFBVSxFQUFDLElBQUk7Z0JBQ2ZDLFVBQVUsRUFBQyxJQUFJO2dCQUNmUCxLQUFLLEVBQUMsU0FBUztnQkFDZlEsVUFBVSxFQUFFLEdBQUc7O29CQUVkWCxRQUFRO29CQUFDLG9CQUFrQjtvQkFBQyxHQUFHOzs7Ozs7cUJBQzNCOzBCQUNQLDhEQUFDTCw4REFBZ0I7Z0JBQ2ZpQixLQUFLLEVBQUVYLFFBQVE7Z0JBQ2ZFLEtBQUssRUFBRUEsS0FBSztnQkFDWlUsSUFBSSxFQUFDLE1BQU07Z0JBQ1hDLFNBQVMsRUFBRSxDQUFDOzBCQUVaLDRFQUFDbEIsbUVBQXFCO29CQUFDbUIsS0FBSyxFQUFFO3dCQUFFWixLQUFLLEVBQUUsRUFBQyxDQUFRLE9BQU5BLEtBQUssQ0FBRTt3QkFBRVEsVUFBVSxFQUFFLEtBQUs7cUJBQUU7O3dCQUNuRVYsUUFBUTt3QkFBQyxHQUNaOzs7Ozs7eUJBQXdCOzs7OztxQkFDUDs7Ozs7O2FBQ2YsQ0FDTjtDQUNIO0dBckNLRixZQUFZO0FBQVpBLEtBQUFBLFlBQVk7QUF1Q2xCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9Qcm9ncmVzc0NhcmQudHN4Pzg1N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQ2lyY3VsYXJQcm9ncmVzcyxcbiAgQ2lyY3VsYXJQcm9ncmVzc0xhYmVsLFxuICBUZXh0LFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL3Byb2dyZXNzQ2FyZC5tb2R1bGUuY3NzXCI7XG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdGltZVR5cGU6IHN0cmluZztcbiAgcHJvZ3Jlc3M6IG51bWJlcjtcbn1cblxuY29uc3QgUHJvZ3Jlc3NDYXJkOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgdGltZVR5cGUsIHByb2dyZXNzIH0pID0+IHtcbiAgLy8gUHJvZ3Jlc3MgZGVjaWRlIHRoZSBjb2xvclxuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCIjOUIyQzJDXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2dyZXNzIDwgNTApIHtcbiAgICAgIHNldENvbG9yKFwiIzlCMkMyQ1wiKTtcbiAgICB9IGVsc2UgaWYgKHByb2dyZXNzIDwgNzUpIHtcbiAgICAgIHNldENvbG9yKFwiI0RENkIyMFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q29sb3IoXCIjMzE4MkNFXCIpO1xuICAgIH1cbiAgfSwgW3Byb2dyZXNzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzQ2FyZH0+XG4gICAgICA8VGV4dFxuICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcbiAgICAgICAgbWFyZ2luTGVmdD1cIjQlXCJcbiAgICAgICAgcGFkZGluZ1RvcD1cIjMlXCJcbiAgICAgICAgY29sb3I9XCIjNDc0NDQ0XCJcbiAgICAgICAgZm9udFdlaWdodD17NjAwfVxuICAgICAgPlxuICAgICAgICB7dGltZVR5cGV9LCBJIGhhdmUgYWNoaWV2ZWQ6e1wiIFwifVxuICAgICAgPC9UZXh0PlxuICAgICAgPENpcmN1bGFyUHJvZ3Jlc3NcbiAgICAgICAgdmFsdWU9e3Byb2dyZXNzfVxuICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgIHNpemU9XCI0MHZ3XCJcbiAgICAgICAgdGhpY2tuZXNzPXs1fVxuICAgICAgPlxuICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzc0xhYmVsIHN0eWxlPXt7IGNvbG9yOiBgJHtjb2xvcn1gLCBmb250V2VpZ2h0OiBcIjcwMFwiIH19PlxuICAgICAgICAgIHtwcm9ncmVzc30lXG4gICAgICAgIDwvQ2lyY3VsYXJQcm9ncmVzc0xhYmVsPlxuICAgICAgPC9DaXJjdWxhclByb2dyZXNzPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NDYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiQ2lyY3VsYXJQcm9ncmVzcyIsIkNpcmN1bGFyUHJvZ3Jlc3NMYWJlbCIsIlRleHQiLCJzdHlsZXMiLCJQcm9ncmVzc0NhcmQiLCJ0aW1lVHlwZSIsInByb2dyZXNzIiwidXNlU3RhdGUiLCJjb2xvciIsInNldENvbG9yIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJvZ3Jlc3NDYXJkIiwidGV4dEFsaWduIiwibWFyZ2luTGVmdCIsInBhZGRpbmdUb3AiLCJmb250V2VpZ2h0IiwidmFsdWUiLCJzaXplIiwidGhpY2tuZXNzIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/home/ProgressCard.tsx\n");

/***/ })

});