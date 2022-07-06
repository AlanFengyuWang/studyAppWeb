"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 7117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/github"
const github_namespaceObject = require("next-auth/providers/github");
var github_default = /*#__PURE__*/__webpack_require__.n(github_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/google"
const google_namespaceObject = require("next-auth/providers/google");
var google_default = /*#__PURE__*/__webpack_require__.n(google_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/facebook"
const facebook_namespaceObject = require("next-auth/providers/facebook");
var facebook_default = /*#__PURE__*/__webpack_require__.n(facebook_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/auth/[...nextauth].ts




/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    // Configure one or more authentication providers
    providers: [
        facebook_default()({
            clientId: process.env.FACEBOOK_ID || "",
            clientSecret: process.env.FACEBOOK_SECRET || ""
        }),
        github_default()({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        google_default()({
            clientId: "860611975588-qbmtfvon5ah0lulvtca9let582ef7qnc.apps.googleusercontent.com" || 0,
            clientSecret: "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" || 0
        }), 
    ],
    secret: "46a0d54003a9c769761950c3c062b323",
    session: {
        strategy: "jwt"
    },
    jwt: {
        secret: "46a0d54003a9c769761950c3c062b323"
    },
    //The callback is called whenever a JSON Web Token is created or updated. The returned value will be
    //encrypted and it is stored in a cookie.
    callbacks: {
        session ({ session , token , user  }) {
            return session // The return type will match the one returned in `useSession()`
            ;
        },
        async jwt ({ token , account  }) {
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async redirect ({ url , baseUrl  }) {
            return baseUrl;
        }
    }
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7117));
module.exports = __webpack_exports__;

})();