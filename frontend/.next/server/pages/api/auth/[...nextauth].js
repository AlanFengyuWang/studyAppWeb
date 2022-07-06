"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/facebook":
/*!***********************************************!*\
  !*** external "next-auth/providers/facebook" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/facebook");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/facebook */ \"next-auth/providers/facebook\");\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.FACEBOOK_ID || \"\",\n            clientSecret: process.env.FACEBOOK_SECRET || \"\"\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: \"860611975588-qbmtfvon5ah0lulvtca9let582ef7qnc.apps.googleusercontent.com\" || 0,\n            clientSecret: \"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\" || 0\n        }), \n    ],\n    secret: \"46a0d54003a9c769761950c3c062b323\",\n    session: {\n        strategy: \"jwt\"\n    },\n    jwt: {\n        secret: \"46a0d54003a9c769761950c3c062b323\"\n    },\n    //The callback is called whenever a JSON Web Token is created or updated. The returned value will be\n    //encrypted and it is stored in a cookie.\n    callbacks: {\n        session ({ session , token , user  }) {\n            return session // The return type will match the one returned in `useSession()`\n            ;\n        },\n        async jwt ({ token , account  }) {\n            if (account) {\n                token.accessToken = account.access_token;\n            }\n            return token;\n        },\n        async redirect ({ url , baseUrl  }) {\n            return baseUrl;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFDdUI7QUFDQTtBQUNJO0FBRTVELGlFQUFlQSxnREFBUSxDQUFDO0lBQ3RCLGlEQUFpRDtJQUNqREksU0FBUyxFQUFFO1FBQ1RELG1FQUFnQixDQUFDO1lBQ2ZFLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVcsSUFBSSxFQUFFO1lBQ3ZDQyxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxlQUFlLElBQUksRUFBRTtTQUNoRCxDQUFDO1FBQ0ZULGlFQUFjLENBQUM7WUFDYkksUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksU0FBUztZQUMvQkYsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssYUFBYTtTQUN4QyxDQUFDO1FBQ0ZWLGlFQUFjLENBQUM7WUFDYkcsUUFBUSxFQUFFQywwRUFBcUIsSUFBSSxDQUFFO1lBQ3JDRyxZQUFZLEVBQUVILHFDQUF5QixJQUFJLENBQUU7U0FDOUMsQ0FBQztLQUNIO0lBQ0RTLE1BQU0sRUFBRVQsa0NBQTJCO0lBQ25DVyxPQUFPLEVBQUU7UUFDUEMsUUFBUSxFQUFFLEtBQUs7S0FDaEI7SUFDREMsR0FBRyxFQUFFO1FBQ0hKLE1BQU0sRUFBRVQsa0NBQTJCO0tBQ3BDO0lBQ0Qsb0dBQW9HO0lBQ3BHLHlDQUF5QztJQUN6Q2MsU0FBUyxFQUFFO1FBQ1RILE9BQU8sRUFBQyxFQUFFQSxPQUFPLEdBQUVJLEtBQUssR0FBRUMsSUFBSSxHQUFFLEVBQUU7WUFDaEMsT0FBT0wsT0FBTyxDQUFDLGdFQUFnRTthQUFqRTtTQUNmO1FBQ0QsTUFBTUUsR0FBRyxFQUFDLEVBQUNFLEtBQUssR0FBRUUsT0FBTyxHQUFDLEVBQUU7WUFDMUIsSUFBR0EsT0FBTyxFQUFFO2dCQUNWRixLQUFLLENBQUNHLFdBQVcsR0FBR0QsT0FBTyxDQUFDRSxZQUFZLENBQUM7YUFDMUM7WUFDRCxPQUFPSixLQUFLLENBQUM7U0FDZDtRQUNELE1BQU1LLFFBQVEsRUFBQyxFQUFFQyxHQUFHLEdBQUVDLE9BQU8sR0FBRSxFQUFFO1lBQy9CLE9BQU9BLE9BQU87U0FDZjtLQUNGO0NBQ0YsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3R1ZHlhcHB3ZWIvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz81MGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5pbXBvcnQgRmFjZWJvb2tQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9mYWNlYm9va1wiO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcbiAgcHJvdmlkZXJzOiBbXG4gICAgRmFjZWJvb2tQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfSUQgfHwgXCJcIixcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfU0VDUkVUIHx8IFwiXCIsXG4gICAgfSksXG4gICAgR2l0aHViUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCxcbiAgICB9KSxcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lEIHx8IFwiXCIsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9TRUNSRVQgfHwgXCJcIixcbiAgICB9KSxcbiAgXSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogJ2p3dCdcbiAgfSxcbiAgand0OiB7XG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG4gIH0sXG4gIC8vVGhlIGNhbGxiYWNrIGlzIGNhbGxlZCB3aGVuZXZlciBhIEpTT04gV2ViIFRva2VuIGlzIGNyZWF0ZWQgb3IgdXBkYXRlZC4gVGhlIHJldHVybmVkIHZhbHVlIHdpbGwgYmVcbiAgLy9lbmNyeXB0ZWQgYW5kIGl0IGlzIHN0b3JlZCBpbiBhIGNvb2tpZS5cbiAgY2FsbGJhY2tzOiB7XG4gICAgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIHJldHVybiBzZXNzaW9uIC8vIFRoZSByZXR1cm4gdHlwZSB3aWxsIG1hdGNoIHRoZSBvbmUgcmV0dXJuZWQgaW4gYHVzZVNlc3Npb24oKWBcbiAgICB9LFxuICAgIGFzeW5jIGp3dCh7dG9rZW4sIGFjY291bnR9KSB7XG4gICAgICBpZihhY2NvdW50KSB7XG4gICAgICAgIHRva2VuLmFjY2Vzc1Rva2VuID0gYWNjb3VudC5hY2Nlc3NfdG9rZW47XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBhc3luYyByZWRpcmVjdCh7IHVybCwgYmFzZVVybCB9KSB7XG4gICAgICByZXR1cm4gYmFzZVVybFxuICAgIH0sXG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR2l0aHViUHJvdmlkZXIiLCJHb29nbGVQcm92aWRlciIsIkZhY2Vib29rUHJvdmlkZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJGQUNFQk9PS19JRCIsImNsaWVudFNlY3JldCIsIkZBQ0VCT09LX1NFQ1JFVCIsIkdJVEhVQl9JRCIsIkdJVEhVQl9TRUNSRVQiLCJHT09HTEVfSUQiLCJHT09HTEVfU0VDUkVUIiwic2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIiwic2Vzc2lvbiIsInN0cmF0ZWd5Iiwiand0IiwiY2FsbGJhY2tzIiwidG9rZW4iLCJ1c2VyIiwiYWNjb3VudCIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwicmVkaXJlY3QiLCJ1cmwiLCJiYXNlVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();