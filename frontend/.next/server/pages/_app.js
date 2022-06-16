/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _protected__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./protected */ \"./src/pages/protected.tsx\");\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n            session: session,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {\n                children: Component.noAuth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/_app.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_protected__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/_app.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/_app.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/_app.tsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/fengyuwangbv/Desktop/studyApp/studyAppWeb/frontend/src/pages/_app.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n// function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {\n//   console.log(\"component\");\n//   console.log(\"Component.auth = \" + Component.auth);\n//   return (\n//     <>\n//       <SessionProvider session={session}>\n//         <ChakraProvider>\n//           {/* <p>Hello</p> */}\n//           {Component.auth ? (\n//             <AuthGuard>\n//               <Component {...pageProps} />\n//             </AuthGuard>\n//           ) : (\n//             <Component {...pageProps} />\n//           )}\n//         </ChakraProvider>\n//       </SessionProvider>\n//     </>\n//   );\n// }\n// MyApp.getInitialProps = async (\n//   appContext: AppContext,\n//   ctx: GetSessionParams\n// ) => {\n//   const appProps = await App.getInitialProps(appContext);\n//   appProps.pageProps.session = await getSession(ctx);\n//   return { props: { ...appProps } };\n// };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFFbUI7QUFDd0I7QUFDakM7QUFDTDtBQXlDcEMsU0FBU0ksS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxFQUFFLEVBQUVDLE9BQU8sR0FBRSxHQUFHRCxTQUFTLEVBQUUsR0FBWSxFQUFFO0lBQzVFLHFCQUNFO2tCQUNFLDRFQUFDTCw0REFBZTtZQUFDTSxPQUFPLEVBQUVBLE9BQU87c0JBQy9CLDRFQUFDUCw0REFBYzswQkFFWkssU0FBUyxDQUFDRyxNQUFNLGlCQUNmLDhEQUFDSCxTQUFTO29CQUFFLEdBQUdDLFNBQVM7Ozs7O3dCQUFJLGlCQUU1Qiw4REFBQ0gsa0RBQVM7OEJBQ1IsNEVBQUNFLFNBQVM7d0JBQUUsR0FBR0MsU0FBUzs7Ozs7NEJBQUk7Ozs7O3dCQUNsQjs7Ozs7b0JBRUM7Ozs7O2dCQUNEO3FCQUNqQixDQUNIO0NBQ0g7QUFFRCxrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLHVEQUF1RDtBQUV2RCxhQUFhO0FBQ2IsU0FBUztBQUNULDRDQUE0QztBQUM1QywyQkFBMkI7QUFDM0IsaUNBQWlDO0FBQ2pDLGdDQUFnQztBQUNoQywwQkFBMEI7QUFDMUIsNkNBQTZDO0FBQzdDLDJCQUEyQjtBQUMzQixrQkFBa0I7QUFDbEIsMkNBQTJDO0FBQzNDLGVBQWU7QUFDZiw0QkFBNEI7QUFDNUIsMkJBQTJCO0FBQzNCLFVBQVU7QUFDVixPQUFPO0FBQ1AsSUFBSTtBQUVKLGtDQUFrQztBQUNsQyw0QkFBNEI7QUFDNUIsMEJBQTBCO0FBQzFCLFNBQVM7QUFDVCw0REFBNEQ7QUFDNUQsd0RBQXdEO0FBRXhELHVDQUF1QztBQUN2QyxLQUFLO0FBRUwsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0dWR5YXBwd2ViLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2UsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIsIGdldFNlc3Npb24sIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXV0aEd1YXJkIGZyb20gXCIuL3Byb3RlY3RlZFwiO1xuXG4vLyBleHBvcnQgdHlwZSBOZXh0QXBwbGljYXRpb25QYWdlPFAgPSBhbnksIElQID0gUD4gPSBOZXh0UGFnZTxQLCBJUD4gJiB7XG4vLyAgIHJlcXVpcmVBdXRoPzogYm9vbGVhbjtcbi8vIH07XG5cbi8vIGZ1bmN0aW9uIE15QXBwKHByb3BzOiBBcHBQcm9wcykge1xuLy8gICBjb25zdCB7XG4vLyAgICAgQ29tcG9uZW50LFxuLy8gICAgIHBhZ2VQcm9wcyxcbi8vICAgfTogeyBDb21wb25lbnQ6IE5leHRBcHBsaWNhdGlvblBhZ2U7IHBhZ2VQcm9wczogYW55IH0gPSBwcm9wcztcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG4vLyAgICAgICA8U2Vzc2lvblByb3ZpZGVyPlxuLy8gICAgICAgICA8Q2hha3JhUHJvdmlkZXI+XG4vLyAgICAgICAgICAgey8qIGlmIHJlcXVpcmVBdXRoIHByb3BlcnR5IGlzIHByZXNlbnQgLSBwcm90ZWN0IHRoZSBwYWdlICovfVxuLy8gICAgICAgICAgIHsvKiB7Q29tcG9uZW50LnJlcXVpcmVBdXRoID8gKCl9ICovfVxuLy8gICAgICAgICAgIDxBdXRoR3VhcmQ+XG4vLyAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4vLyAgICAgICAgICAgPC9BdXRoR3VhcmQ+XG4vLyAgICAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4vLyAgICAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbi8vICAgICA8Lz5cbi8vICAgKTtcbi8vIH1cblxuLy8gdHlwZSBBcHBQcm9wcyA9IHtcbi8vICAgcGFnZVByb3BzOiBhbnk7XG4vLyAgIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIHt9PiAmIHsgYXV0aDogYm9vbGVhbiB9O1xuLy8gfTtcblxuZXhwb3J0IHR5cGUgTmV4dEFwcGxpY2F0aW9uUGFnZTxQID0gYW55LCBJUCA9IFA+ID0gTmV4dFBhZ2U8UCwgSVA+ICYge1xuICBub0F1dGg/OiBib29sZWFuO1xufTtcblxudHlwZSBBcHBQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnk7XG4gIENvbXBvbmVudDogTmV4dEFwcGxpY2F0aW9uUGFnZTtcbn07XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0gfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtzZXNzaW9ufT5cbiAgICAgICAgPENoYWtyYVByb3ZpZGVyPlxuICAgICAgICAgIHsvKiA8cD5IZWxsbzwvcD4gKi99XG4gICAgICAgICAge0NvbXBvbmVudC5ub0F1dGggPyAoXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxBdXRoR3VhcmQ+XG4gICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQXV0aEd1YXJkPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuLy8gZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wczogeyBzZXNzaW9uLCAuLi5wYWdlUHJvcHMgfSB9OiBBcHBQcm9wcykge1xuLy8gICBjb25zb2xlLmxvZyhcImNvbXBvbmVudFwiKTtcbi8vICAgY29uc29sZS5sb2coXCJDb21wb25lbnQuYXV0aCA9IFwiICsgQ29tcG9uZW50LmF1dGgpO1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPD5cbi8vICAgICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0+XG4vLyAgICAgICAgIDxDaGFrcmFQcm92aWRlcj5cbi8vICAgICAgICAgICB7LyogPHA+SGVsbG88L3A+ICovfVxuLy8gICAgICAgICAgIHtDb21wb25lbnQuYXV0aCA/IChcbi8vICAgICAgICAgICAgIDxBdXRoR3VhcmQ+XG4vLyAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbi8vICAgICAgICAgICAgIDwvQXV0aEd1YXJkPlxuLy8gICAgICAgICAgICkgOiAoXG4vLyAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4vLyAgICAgICAgICAgKX1cbi8vICAgICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbi8vICAgICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuLy8gICAgIDwvPlxuLy8gICApO1xuLy8gfVxuXG4vLyBNeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoXG4vLyAgIGFwcENvbnRleHQ6IEFwcENvbnRleHQsXG4vLyAgIGN0eDogR2V0U2Vzc2lvblBhcmFtc1xuLy8gKSA9PiB7XG4vLyAgIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcbi8vICAgYXBwUHJvcHMucGFnZVByb3BzLnNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGN0eCk7XG5cbi8vICAgcmV0dXJuIHsgcHJvcHM6IHsgLi4uYXBwUHJvcHMgfSB9O1xuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiQ2hha3JhUHJvdmlkZXIiLCJTZXNzaW9uUHJvdmlkZXIiLCJSZWFjdCIsIkF1dGhHdWFyZCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiIsIm5vQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/pages/protected.tsx":
/*!*********************************!*\
  !*** ./src/pages/protected.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AuthGuard)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction AuthGuard({ children  }) {\n    // const { status } = useSession();\n    const { status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)({\n        required: true,\n        onUnauthenticated () {\n            // The user is not authenticated, go back to the sign in page\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/login\");\n        }\n    });\n    // if (status === \"authenticated\") {\n    //   return <>{children}</>;\n    // } else if (status === \"unauthenticated\") {\n    //   Router.push(\"/login\");\n    // } else if (status === \"loading\") {\n    //   console.log(\"loading\");\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children\n    }, void 0, false);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvdGVjdGVkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFNkM7QUFDWjtBQUdsQixTQUFTRSxTQUFTLENBQUMsRUFBRUMsUUFBUSxHQUE2QixFQUFFO0lBQ3pFLG1DQUFtQztJQUNuQyxNQUFNLEVBQUVDLE1BQU0sR0FBRSxHQUFHSiwyREFBVSxDQUFDO1FBQzVCSyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxpQkFBaUIsSUFBRztZQUNsQiw2REFBNkQ7WUFDN0RMLHVEQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkI7S0FDRixDQUFDO0lBRUYsb0NBQW9DO0lBQ3BDLDRCQUE0QjtJQUM1Qiw2Q0FBNkM7SUFDN0MsMkJBQTJCO0lBQzNCLHFDQUFxQztJQUNyQyw0QkFBNEI7SUFDNUIsSUFBSTtJQUNKLHFCQUFPO2tCQUFHRSxRQUFRO3FCQUFJLENBQUM7Q0FDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHVkeWFwcHdlYi8uL3NyYy9wYWdlcy9wcm90ZWN0ZWQudHN4P2U3MDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBzdGF0IH0gZnJvbSBcImZzXCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMb2dJbiBmcm9tIFwiLi4vcGFnZXMvbG9naW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aEd1YXJkKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogSlNYLkVsZW1lbnQgfSkge1xuICAvLyBjb25zdCB7IHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCB7IHN0YXR1cyB9ID0gdXNlU2Vzc2lvbih7XG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgb25VbmF1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAvLyBUaGUgdXNlciBpcyBub3QgYXV0aGVudGljYXRlZCwgZ28gYmFjayB0byB0aGUgc2lnbiBpbiBwYWdlXG4gICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICB9LFxuICB9KTtcblxuICAvLyBpZiAoc3RhdHVzID09PSBcImF1dGhlbnRpY2F0ZWRcIikge1xuICAvLyAgIHJldHVybiA8PntjaGlsZHJlbn08Lz47XG4gIC8vIH0gZWxzZSBpZiAoc3RhdHVzID09PSBcInVuYXV0aGVudGljYXRlZFwiKSB7XG4gIC8vICAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gIC8vIH0gZWxzZSBpZiAoc3RhdHVzID09PSBcImxvYWRpbmdcIikge1xuICAvLyAgIGNvbnNvbGUubG9nKFwibG9hZGluZ1wiKTtcbiAgLy8gfVxuICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xufVxuIl0sIm5hbWVzIjpbInVzZVNlc3Npb24iLCJSb3V0ZXIiLCJBdXRoR3VhcmQiLCJjaGlsZHJlbiIsInN0YXR1cyIsInJlcXVpcmVkIiwib25VbmF1dGhlbnRpY2F0ZWQiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/protected.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();