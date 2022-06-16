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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/facebook */ \"next-auth/providers/facebook\");\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.FACEBOOK_ID || \"\",\n            clientSecret: process.env.FACEBOOK_SECRET || \"\"\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GOOGLE_ID || \"\",\n            clientSecret: process.env.GOOGLE_SECRET || \"\"\n        }), \n    ],\n    secret: process.env.NEXTAUTH_SECRET,\n    session: {\n        strategy: \"jwt\"\n    },\n    jwt: {\n        secret: process.env.NEXTAUTH_SECRET\n    },\n    //The callback is called whenever a JSON Web Token is created or updated. The returned value will be\n    //encrypted and it is stored in a cookie.\n    callbacks: {\n        session ({ session , token , user  }) {\n            return session // The return type will match the one returned in `useSession()`\n            ;\n        },\n        async jwt ({ token , account  }) {\n            if (account) {\n                token.accessToken = account.access_token;\n            }\n            return token;\n        },\n        async redirect ({ url , baseUrl  }) {\n            return baseUrl;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFDdUI7QUFDQTtBQUNJO0FBRTVELGlFQUFlQSxnREFBUSxDQUFDO0lBQ3RCLGlEQUFpRDtJQUNqREksU0FBUyxFQUFFO1FBQ1RELG1FQUFnQixDQUFDO1lBQ2ZFLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVcsSUFBSSxFQUFFO1lBQ3ZDQyxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxlQUFlLElBQUksRUFBRTtTQUNoRCxDQUFDO1FBQ0ZULGlFQUFjLENBQUM7WUFDYkksUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksU0FBUztZQUMvQkYsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssYUFBYTtTQUN4QyxDQUFDO1FBQ0ZWLGlFQUFjLENBQUM7WUFDYkcsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ00sU0FBUyxJQUFJLEVBQUU7WUFDckNKLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNPLGFBQWEsSUFBSSxFQUFFO1NBQzlDLENBQUM7S0FDSDtJQUNEQyxNQUFNLEVBQUVULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUyxlQUFlO0lBQ25DQyxPQUFPLEVBQUU7UUFDUEMsUUFBUSxFQUFFLEtBQUs7S0FDaEI7SUFDREMsR0FBRyxFQUFFO1FBQ0hKLE1BQU0sRUFBRVQsT0FBTyxDQUFDQyxHQUFHLENBQUNTLGVBQWU7S0FDcEM7SUFDRCxvR0FBb0c7SUFDcEcseUNBQXlDO0lBQ3pDSSxTQUFTLEVBQUU7UUFDVEgsT0FBTyxFQUFDLEVBQUVBLE9BQU8sR0FBRUksS0FBSyxHQUFFQyxJQUFJLEdBQUUsRUFBRTtZQUNoQyxPQUFPTCxPQUFPLENBQUMsZ0VBQWdFO2FBQWpFO1NBQ2Y7UUFDRCxNQUFNRSxHQUFHLEVBQUMsRUFBQ0UsS0FBSyxHQUFFRSxPQUFPLEdBQUMsRUFBRTtZQUMxQixJQUFHQSxPQUFPLEVBQUU7Z0JBQ1ZGLEtBQUssQ0FBQ0csV0FBVyxHQUFHRCxPQUFPLENBQUNFLFlBQVksQ0FBQzthQUMxQztZQUNELE9BQU9KLEtBQUssQ0FBQztTQUNkO1FBQ0QsTUFBTUssUUFBUSxFQUFDLEVBQUVDLEdBQUcsR0FBRUMsT0FBTyxHQUFFLEVBQUU7WUFDL0IsT0FBT0EsT0FBTztTQUNmO0tBQ0Y7Q0FDRixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHVkeWFwcHdlYi8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzUwYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBHaXRodWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIjtcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcbmltcG9ydCBGYWNlYm9va1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2ZhY2Vib29rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xuICBwcm92aWRlcnM6IFtcbiAgICBGYWNlYm9va1Byb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5GQUNFQk9PS19JRCB8fCBcIlwiLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5GQUNFQk9PS19TRUNSRVQgfHwgXCJcIixcbiAgICB9KSxcbiAgICBHaXRodWJQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVULFxuICAgIH0pLFxuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfSUQgfHwgXCJcIixcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX1NFQ1JFVCB8fCBcIlwiLFxuICAgIH0pLFxuICBdLFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiAnand0J1xuICB9LFxuICBqd3Q6IHtcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbiAgfSxcbiAgLy9UaGUgY2FsbGJhY2sgaXMgY2FsbGVkIHdoZW5ldmVyIGEgSlNPTiBXZWIgVG9rZW4gaXMgY3JlYXRlZCBvciB1cGRhdGVkLiBUaGUgcmV0dXJuZWQgdmFsdWUgd2lsbCBiZVxuICAvL2VuY3J5cHRlZCBhbmQgaXQgaXMgc3RvcmVkIGluIGEgY29va2llLlxuICBjYWxsYmFja3M6IHtcbiAgICBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgcmV0dXJuIHNlc3Npb24gLy8gVGhlIHJldHVybiB0eXBlIHdpbGwgbWF0Y2ggdGhlIG9uZSByZXR1cm5lZCBpbiBgdXNlU2Vzc2lvbigpYFxuICAgIH0sXG4gICAgYXN5bmMgand0KHt0b2tlbiwgYWNjb3VudH0pIHtcbiAgICAgIGlmKGFjY291bnQpIHtcbiAgICAgICAgdG9rZW4uYWNjZXNzVG9rZW4gPSBhY2NvdW50LmFjY2Vzc190b2tlbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHJlZGlyZWN0KHsgdXJsLCBiYXNlVXJsIH0pIHtcbiAgICAgIHJldHVybiBiYXNlVXJsXG4gICAgfSxcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHaXRodWJQcm92aWRlciIsIkdvb2dsZVByb3ZpZGVyIiwiRmFjZWJvb2tQcm92aWRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkZBQ0VCT09LX0lEIiwiY2xpZW50U2VjcmV0IiwiRkFDRUJPT0tfU0VDUkVUIiwiR0lUSFVCX0lEIiwiR0lUSFVCX1NFQ1JFVCIsIkdPT0dMRV9JRCIsIkdPT0dMRV9TRUNSRVQiLCJzZWNyZXQiLCJORVhUQVVUSF9TRUNSRVQiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJqd3QiLCJjYWxsYmFja3MiLCJ0b2tlbiIsInVzZXIiLCJhY2NvdW50IiwiYWNjZXNzVG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJyZWRpcmVjdCIsInVybCIsImJhc2VVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

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