(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,509];
exports.modules = {

/***/ 908:
/***/ ((module) => {

// Exports
module.exports = {
	"halfCircleBackground": "navBar_halfCircleBackground__oAJnb"
};


/***/ }),

/***/ 3024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "s": () => (/* binding */ useEmailContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const EmailContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
    email: "",
    setEmail: ()=>{}
});
const useEmailContext = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(EmailContext);
};
const EmailProvider = (props)=>{
    const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EmailContext.Provider, {
        value: {
            email,
            setEmail
        },
        children: props.children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailProvider);


/***/ }),

/***/ 3151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "next-auth/react"
var external_next_auth_react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/pages/protected.tsx + 1 modules
var pages_protected = __webpack_require__(1358);
// EXTERNAL MODULE: ./src/context/EmailContext.tsx
var EmailContext = __webpack_require__(3024);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/styles/navBar/navBar.module.css
var navBar_module = __webpack_require__(908);
var navBar_module_default = /*#__PURE__*/__webpack_require__.n(navBar_module);
;// CONCATENATED MODULE: ./src/components/navbar.tsx






const navbar = ()=>{
    const pages = [
        {
            title: "Award",
            href: "/award",
            image: "/menuOptions/award.svg",
            paddingBottom: "0px"
        },
        {
            title: "Schedule",
            href: "/schedule",
            image: "/menuOptions/schedule.svg",
            paddingBottom: "10px"
        },
        {
            title: "Home",
            href: "/home",
            image: "/menuOptions/home.svg",
            paddingBottom: "20px"
        },
        {
            title: "Study",
            href: "/study",
            image: "/menuOptions/study.svg",
            paddingBottom: "10px"
        },
        {
            title: "Community",
            href: "/community",
            image: "/menuOptions/community.svg",
            paddingBottom: "0px"
        }, 
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (navBar_module_default()).halfCircleBackground,
        style: {
            zIndex: "999"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
            justify: "space-evenly",
            position: "fixed",
            bottom: "0",
            width: "100%",
            fontSize: "lg",
            paddingBottom: "2.5%",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/menuOptions/background.svg",
                    className: (navBar_module_default()).halfCircleBackground,
                    style: {
                        width: "100%"
                    }
                }),
                pages.map((page, index)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        bg: page.title,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Tooltip, {
                            label: page.title,
                            placement: "bottom",
                            position: "relative",
                            top: "12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: page.href,
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        layout: "fixed",
                                        width: "50vw",
                                        height: "50vw",
                                        src: page.image,
                                        alt: page.title
                                    })
                                })
                            })
                        })
                    }, index)
                )
            ]
        })
    });
};
/* harmony default export */ const components_navbar = (navbar);

;// CONCATENATED MODULE: ./src/components/footer.tsx


const footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: {
                backgroundColor: "lightblue",
                minWidth: "100%",
                bottom: "0"
            }
        })
    });
};
/* harmony default export */ const components_footer = (footer);

;// CONCATENATED MODULE: ./src/components/layout.tsx




function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_footer, {})
        ]
    });
};

;// CONCATENATED MODULE: ./src/pages/_app.tsx








function MyApp({ Component , pageProps: { session , ...pageProps }  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_auth_react_.SessionProvider, {
            session: session,
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(EmailContext/* default */.Z, {
                    children: Component.noAuth ? /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(pages_protected["default"], {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                ...pageProps
                            })
                        })
                    })
                })
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 1358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AuthGuard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/protected.tsx



function AuthGuard({ children  }) {
    // const { status } = useSession();
    const { status  } = (0,react_.useSession)({
        required: true,
        onUnauthenticated () {
            // The user is not authenticated, go back to the sign in page
            router_default().push("/login");
        }
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    });
};


/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675,505,664], () => (__webpack_exec__(3151)));
module.exports = __webpack_exports__;

})();