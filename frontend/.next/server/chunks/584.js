"use strict";
exports.id = 584;
exports.ids = [584];
exports.modules = {

/***/ 9584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ login)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./src/components/login/Logo.tsx
var Logo = __webpack_require__(44);
// EXTERNAL MODULE: ./src/components/login/OAuthButtonGroup.tsx + 1 modules
var OAuthButtonGroup = __webpack_require__(97);
// EXTERNAL MODULE: external "react-icons/hi"
var hi_ = __webpack_require__(1111);
;// CONCATENATED MODULE: ./src/components/login/PasswordField.tsx




const PasswordField = /*#__PURE__*/ external_react_.forwardRef((props, ref)=>{
    const { isOpen , onToggle  } = (0,react_.useDisclosure)();
    const inputRef = external_react_.useRef(null);
    const mergeRef = (0,react_.useMergeRefs)(inputRef, ref);
    const onClickReveal = ()=>{
        onToggle();
        if (inputRef.current) {
            inputRef.current.focus({
                preventScroll: true
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.FormLabel, {
                htmlFor: "password",
                children: "Password"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.InputGroup, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.InputRightElement, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                            variant: "link",
                            "aria-label": isOpen ? "Mask password" : "Reveal password",
                            icon: isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(hi_.HiEyeOff, {}) : /*#__PURE__*/ jsx_runtime_.jsx(hi_.HiEye, {}),
                            onClick: onClickReveal
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                        id: "password",
                        ref: mergeRef,
                        name: "password",
                        type: isOpen ? "text" : "password",
                        autoComplete: "current-password",
                        required: true,
                        ...props
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const login_PasswordField = (PasswordField);
PasswordField.displayName = "PasswordField";

;// CONCATENATED MODULE: ./src/pages/login/index.tsx







const LogIn = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
        maxW: "lg",
        py: {
            base: "12",
            md: "24"
        },
        px: {
            base: "0",
            sm: "8"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
            spacing: "8",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                    spacing: "6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Logo/* default */.Z, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                            spacing: {
                                base: "2",
                                md: "3"
                            },
                            textAlign: "center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                    size: (0,react_.useBreakpointValue)({
                                        base: "xl",
                                        md: "lg"
                                    }),
                                    children: "Log in to your account"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                                    spacing: "1",
                                    justify: "center",
                                    py: "2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            color: "muted",
                                            children: "Don't have an account?"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                            href: "/signup",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                                variant: "link",
                                                colorScheme: "blue",
                                                children: "Sign up"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    py: {
                        base: "0",
                        sm: "8"
                    },
                    px: {
                        base: "4",
                        sm: "10"
                    },
                    bg: (0,react_.useBreakpointValue)({
                        base: "transparent",
                        sm: "bg-surface"
                    }),
                    boxShadow: {
                        base: "none",
                        sm: (0,react_.useColorModeValue)("md", "md-dark")
                    },
                    borderRadius: {
                        base: "none",
                        sm: "xl"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                        spacing: "6",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                                spacing: "5",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.FormLabel, {
                                                htmlFor: "email",
                                                children: "Email"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                                id: "email",
                                                type: "email"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(login_PasswordField, {})
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                                justify: "space-between",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Checkbox, {
                                        defaultChecked: true,
                                        children: "Remember me"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        variant: "link",
                                        colorScheme: "blue",
                                        size: "sm",
                                        children: "Forgot password?"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                                spacing: "6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        variant: "solid",
                                        children: "Sign in"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                fontSize: "sm",
                                                whiteSpace: "nowrap",
                                                color: "muted",
                                                fontWeight: "200",
                                                children: "or continue with"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(OAuthButtonGroup/* default */.Z, {})
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
LogIn.noAuth = true;
/* harmony default export */ const login = (LogIn);


/***/ })

};
;