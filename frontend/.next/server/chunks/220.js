exports.id = 220;
exports.ids = [220];
exports.modules = {

/***/ 4739:
/***/ ((module) => {

// Exports
module.exports = {
	"progressCard": "progressCard_progressCard__wzPTr"
};


/***/ }),

/***/ 9807:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _taskProgress_ProgressCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3094);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4508);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_taskProgress_ProgressCard__WEBPACK_IMPORTED_MODULE_1__]);
_taskProgress_ProgressCard__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// import { Carousel } from "react-responsive-carousel/lib/js";

// interface IRenderIndicator {
//   onClickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void;
//   isSelected: boolean;
//   index: number;
//   label: string;
// }
const ImageSlider = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel, {
            showThumbs: false,
            emulateTouch: true,
            showArrows: false,
            showStatus: false,
            useKeyboardArrows: true,
            preventMovementUntilSwipeScrollTolerance: true,
            swipeScrollTolerance: 100,
            children: props.slides.map((slide, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_taskProgress_ProgressCard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    timeType: slide.timeType,
                    progress: slide.progress
                }, index)
            )
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageSlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_datetime_picker_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9198);
/* harmony import */ var react_datetime_picker_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datetime_picker_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_3__);





const Milestone = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                isRequired: true,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                        marginBottom: 0,
                        fontSize: "md",
                        children: [
                            "Milestone ",
                            props.index + 1
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_datetime_picker_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_3___default()), {
                        onChange: (time)=>props.updateMilestones(time, props.index)
                        ,
                        value: props.milestones[props.index]
                    }, props.index)
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                display: "flex",
                justifyContent: "left",
                width: "100%",
                mb: 1,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
                    spacing: "3",
                    size: "xs",
                    marginTop: "5px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        colorScheme: "red",
                        onClick: ()=>props.remove(props.index)
                        ,
                        children: "Remove"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Milestone);


/***/ }),

/***/ 3051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);





const Profile = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        justifyContent: "space-between",
        margin: "5% 8%",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                    marginLeft: "11%",
                    marginTop: "7%",
                    spacing: 0,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            fontSize: "3xl",
                            fontWeight: 600,
                            children: "Welcome,"
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            fontSize: "2xl",
                            color: "#7A7878",
                            fontWeight: 500,
                            children: "Alan"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuButton, {
                            as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button,
                            variantColor: "pink",
                            bg: "lightgray",
                            borderRadius: "50%",
                            h: "80px",
                            w: "80px",
                            top: "20%",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                                src: "https://bit.ly/broken-link",
                                bg: "#"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuList, {
                            minWidth: "0",
                            position: "relative",
                            left: "15%",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, {
                                    title: "Profile",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                            children: "My Account"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                            children: "Payments "
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuDivider, {}),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, {
                                    title: "Help",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                            children: "Docs"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                            onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)()
                                            ,
                                            children: "Log out"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);


/***/ }),

/***/ 5732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ home_TodayTaskList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./src/styles/theme.js
var theme = __webpack_require__(7720);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/tasks/TaskCard.tsx





const TaskCard = ({ task  })=>{
    //deciding the background color: red means its urgent, oragne means it's moderate urgent, green means it's not urgent
    let color = theme/* Theme.colors.task.green */.Q.colors.task.green;
    const imgPath = "/taskTypes/" + task.type + ".svg";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        background: color,
        borderRadius: "10",
        padding: "7%",
        paddingLeft: "5",
        marginBottom: "2%",
        width: "100%",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                gap: "12%",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        borderRadius: "100%",
                        backgroundColor: "#C4C4C4",
                        width: "60px",
                        height: "60px",
                        pos: "relative",
                        bottom: "1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            position: "relative",
                            left: "14%",
                            top: "10%",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                layout: "fixed",
                                width: "40vw",
                                height: "40vw",
                                src: imgPath,
                                alt: "task image"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        fontWeight: "semibold",
                        children: task.taskTitle
                    })
                ]
            }),
            task.due && /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                color: theme/* Theme.colors.task.due */.Q.colors.task.due,
                fontSize: "xs",
                float: "right",
                fontWeight: "semibold",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        "Due: ",
                        task.due
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const tasks_TaskCard = (TaskCard);

// EXTERNAL MODULE: ./src/context/EmailContext.tsx
var EmailContext = __webpack_require__(3024);
// EXTERNAL MODULE: external "react-swipeable-list"
var external_react_swipeable_list_ = __webpack_require__(8967);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
// EXTERNAL MODULE: ./src/styles/home/styledComponents.ts
var styledComponents = __webpack_require__(5607);
;// CONCATENATED MODULE: ./src/functions/tasks/deleteTask.ts

const deleteTask = (email, taskId)=>{
    const data = {
        email: email
    };
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };
    return fetch("http://localhost:2000" + "/task/delete/" + taskId, requestOptions);
};

;// CONCATENATED MODULE: ./src/components/home/TodayTaskList.tsx










const TodayTaskList = (props)=>{
    const { 0: hoveredTaskId , 1: sethoveredTaskId  } = (0,external_react_.useState)("");
    const moveTaskCardToLeftStyle = {
        transition: "transform 0.3s",
        transform: "translateX(-23%)",
        opacity: "100%"
    };
    const { 0: showAllTask , 1: setshowAllTask  } = (0,external_react_.useState)(false);
    const showAll = ()=>{
        setshowAllTask(!showAllTask);
    };
    const { email  } = (0,EmailContext/* useEmailContext */.s)();
    function onSwipeDelete(taskId) {
        deleteTask(email, taskId).then(()=>props.mutate()
        );
    }
    const trailingActions = (taskId)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(external_react_swipeable_list_.TrailingActions, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_swipeable_list_.SwipeAction, {
                destructive: true,
                onClick: ()=>onSwipeDelete(taskId)
                ,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                    ...styledComponents/* deleteActionStyle */.Di,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdDeleteForever, {
                        color: "#E2E8F0",
                        size: "43px"
                    })
                })
            })
        });
    };
    if (props.error) return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Alert, {
        status: "error",
        marginTop: "3%",
        padding: "12px",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.AlertIcon, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                fontSize: "sm",
                children: "Failed to fetch your tasks"
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
        align: "stretch",
        marginTop: "3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_swipeable_list_.SwipeableList, {
                children: props.data && props.data.tasks.filter((item, index)=>{
                    const endIndex = showAllTask ? props.data.tasks.length : 3;
                    return index < endIndex;
                }).map((task, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_swipeable_list_.SwipeableListItem, {
                        trailingActions: trailingActions(task._id),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                            width: "100%",
                            position: "relative",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    width: "100%",
                                    height: "100%",
                                    ...task._id === hoveredTaskId ? moveTaskCardToLeftStyle : {},
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(tasks_TaskCard, {
                                        task: task
                                    }, index)
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                    ...styledComponents/* hideDelete */.Y3,
                                    opacity: "0%",
                                    left: "80%",
                                    position: "absolute",
                                    onMouseEnter: ()=>{
                                        sethoveredTaskId(task._id);
                                    },
                                    onMouseLeave: ()=>{
                                        sethoveredTaskId("");
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                    ...styledComponents/* hideDelete */.Y3,
                                    position: "absolute",
                                    onMouseEnter: ()=>{
                                        sethoveredTaskId(task._id);
                                    },
                                    onMouseLeave: ()=>{
                                        sethoveredTaskId("");
                                    },
                                    onClick: ()=>onSwipeDelete(task._id)
                                    ,
                                    ...task._id === hoveredTaskId && {
                                        transition: "transform 0.3s",
                                        transform: "translateX(-100%)"
                                    },
                                    //make sure after it moved and are hovered, it stays in the same place
                                    _hover: {
                                        transition: "transform 0.3s",
                                        transform: "translateX(-100%)"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdDeleteForever, {
                                        color: "#E2E8F0",
                                        size: "43px"
                                    })
                                })
                            ]
                        })
                    }, task._id)
                )
            }),
            props.data && props.data.tasks.length > 3 && /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                bg: "none",
                marginTop: "0 !important",
                _hover: {
                    bg: "none"
                },
                _active: {
                    bg: "none"
                },
                color: "#2B6CB0",
                fontWeight: "600",
                onClick: showAll,
                children: showAllTask ? "Hide" : "Show All"
            })
        ]
    });
};
/* harmony default export */ const home_TodayTaskList = (TodayTaskList);


/***/ }),

/***/ 7139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_move__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9222);
/* harmony import */ var react_move__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_move__WEBPACK_IMPORTED_MODULE_2__);



class AnimatedProgressProvider extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    interval = undefined;
    state = {
        isAnimated: false
    };
    static defaultProps = {
        valueStart: 0
    };
    componentDidMount() {
        if (this.props.repeat) {
            this.interval = window.setInterval(()=>{
                this.setState({
                    isAnimated: !this.state.isAnimated
                });
            }, this.props.duration * 1000);
        } else {
            this.setState({
                isAnimated: !this.state.isAnimated
            });
        }
    }
    componentWillUnmount() {
        window.clearInterval(this.interval);
    }
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_move__WEBPACK_IMPORTED_MODULE_2__.Animate, {
            start: ()=>({
                    value: this.props.valueStart
                })
            ,
            update: ()=>({
                    value: [
                        this.state.isAnimated ? this.props.valueEnd : this.props.valueStart, 
                    ],
                    timing: {
                        duration: this.props.duration * 1000,
                        ease: this.props.easingFunction
                    }
                })
            ,
            children: ({ value  })=>this.props.children(value)
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimatedProgressProvider);


/***/ }),

/***/ 3094:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_progressCard_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4739);
/* harmony import */ var _styles_progressCard_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_progressCard_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5954);
/* harmony import */ var _AnimatedProgressProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7139);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1400);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([d3_ease__WEBPACK_IMPORTED_MODULE_3__]);
d3_ease__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const ProgressCard = ({ timeType , progress  })=>{
    // Progress decide the color
    const [color, setColor] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("#C53030");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (progress < 50) {
            setColor("#C53030");
        } else if (progress < 75) {
            setColor("#D69E2E");
        } else {
            setColor("#48BB78");
        }
    }, [
        progress
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_progressCard_module_css__WEBPACK_IMPORTED_MODULE_6___default().progressCard),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                textAlign: "left",
                marginLeft: "4%",
                paddingTop: "3%",
                color: "#474444",
                fontWeight: 600,
                children: [
                    timeType,
                    ", I have achieved:",
                    " "
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AnimatedProgressProvider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                valueStart: 0,
                valueEnd: 66,
                duration: 1.4,
                easingFunction: d3_ease__WEBPACK_IMPORTED_MODULE_3__.easeQuadInOut,
                repeat: true,
                children: (value)=>{
                    const roundedValue = Math.round(value);
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        style: {
                            width: 150,
                            height: 220,
                            margin: "0 auto",
                            position: "relative",
                            top: "3vw"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_5__.CircularProgressbar, {
                            value: value,
                            text: `${roundedValue}%`,
                            styles: (0,react_circular_progressbar__WEBPACK_IMPORTED_MODULE_5__.buildStyles)({
                                pathTransition: "none"
                            })
                        })
                    });
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8766:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ImageSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9807);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ImageSlider__WEBPACK_IMPORTED_MODULE_3__]);
_ImageSlider__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ProgressCards = ()=>{
    // TODO: Updating the data here, for now the data is static
    const slides = [
        {
            timeType: "Today",
            progress: 10
        },
        {
            timeType: "This week",
            progress: 50
        },
        {
            timeType: "This month",
            progress: 80
        }, 
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
            w: "100%",
            p: 4,
            color: "white",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageSlider__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                slides: slides
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressCards);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 101:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Subtask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(708);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5641);
/* harmony import */ var react_datetime_picker_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9198);
/* harmony import */ var react_datetime_picker_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datetime_picker_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8434);
/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_clock_dist_Clock_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6539);
/* harmony import */ var react_clock_dist_Clock_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_clock_dist_Clock_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _home_Milestone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(779);
/* harmony import */ var _styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5607);
/* harmony import */ var _functions_tasks_addTask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3022);
/* harmony import */ var _context_EmailContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3024);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7720);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_4__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






// import DateTimePicker from "react-datetime-picker";








const AddTask = (props)=>{
    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();
    const initialRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const { 0: dateTime , 1: setDateTime  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: milestonesState , 1: setMilestonesState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    //set default date
    const noDueDate = new Date();
    noDueDate.setDate(noDueDate.getDate() + 99999);
    //get email
    const { email  } = (0,_context_EmailContext__WEBPACK_IMPORTED_MODULE_11__/* .useEmailContext */ .s)();
    //useFieldAray
    const { register , setValue , control , handleSubmit , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
        defaultValues: {
            _id: "UNIQUE COUNT DOCUMENT IDENTIFIER",
            taskTitle: "",
            taskDescription: "",
            type: "Others",
            due: noDueDate,
            milestones: [],
            subtask: []
        },
        mode: "onBlur"
    });
    const { fields: subtask , append: subtaskAppend , remove: subtaskRemove ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFieldArray)({
        name: "subtask",
        control
    });
    const { fields: milestones , append: milestonesAppend , remove: milestonesRemove ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFieldArray)({
        name: "milestones",
        control
    });
    const onSubmit = (data)=>{
        let dataWithEmail = data;
        dataWithEmail["email"] = email;
        //update tasks to the component immediatelly
        (0,_functions_tasks_addTask__WEBPACK_IMPORTED_MODULE_10__/* .addTask */ .g)(dataWithEmail).then(()=>{
            props.mutate();
        });
    /**
     * ===========Local storage START==========
     */ //store to the localstorage
    // const tasks = window.localStorage.hasOwnProperty("tasks")
    //   ? window.localStorage.getItem("tasks")
    //   : "[]";
    // let newTasks: Array<string | Object> = tasks ? JSON.parse(tasks) : [];
    // newTasks.push(data);
    // window.localStorage.setItem("tasks", JSON.stringify(newTasks));
    /**
     * ===========Local storage END==========
     */ };
    const updateMilestones = (time, index)=>{
        const newState = [
            ...milestonesState
        ];
        newState[index] = time;
        setMilestonesState(newState);
    };
    const onClickMilestoneAdd = ()=>{
        milestonesAppend({
            milestone: new Date()
        });
        setMilestonesState([
            ...milestonesState,
            new Date()
        ]);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (dateTime == undefined) {
            setValue("due", noDueDate);
        } else {
            setValue("due", dateTime);
        }
    }, [
        dateTime
    ]);
    // if (fetchtaskDataError)
    //   return (
    //     <Alert status="error" marginTop="3%" padding="12px">
    //       <AlertIcon />
    //       <Text fontSize="sm">Failed to fetch your new tasks</Text>
    //     </Alert>
    //   );
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Center, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                colorScheme: _styles_theme__WEBPACK_IMPORTED_MODULE_12__/* .Theme.colors.task.add */ .Q.colors.task.add,
                size: "sm",
                onClick: onOpen,
                width: "50%",
                children: "Add Tasks"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                initialFocusRef: initialRef,
                isOpen: isOpen,
                onClose: onClose,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: handleSubmit(onSubmit),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {
                                    children: "What is your next task?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalCloseButton, {}),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {
                                    pb: 6,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                            isRequired: true,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                                                    children: "Task name:"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                                    placeholder: "Task name",
                                                    ...register("taskTitle")
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                            mt: 4,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                                                    children: "Description:"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Textarea, {
                                                    ...register("taskDescription"),
                                                    placeholder: "My description of the task is.."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                            mt: 3,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                                                    htmlFor: "type",
                                                    children: "Type:"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {
                                                    id: "type",
                                                    color: "gray",
                                                    ...register("type"),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            children: "Work"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            children: "Study"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            children: "Exercise"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            children: "Entertainment"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            children: "Others"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                            mt: 3,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                                                    htmlFor: "due",
                                                    children: "Due:"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_datetime_picker_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    onChange: setDateTime,
                                                    value: dateTime
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                            mt: 4,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                                                    htmlFor: "milestones",
                                                    children: "Milestones:"
                                                }),
                                                milestones.map((milestone, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_Milestone__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                        index: index,
                                                        isLast: subtask.length === index + 1,
                                                        register: register,
                                                        milestones: milestonesState,
                                                        updateMilestones: updateMilestones,
                                                        append: milestonesAppend,
                                                        remove: milestonesRemove
                                                    }, index)
                                                ),
                                                milestones.length < 3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                    ..._styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_9__/* .buttonAddStyle */ .Bo,
                                                    bottom: milestones.length !== 0 ? "28.5px" : "0",
                                                    onClick: onClickMilestoneAdd,
                                                    children: "Add"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                            mt: 4,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                                                    marginBottom: 0,
                                                    children: "Subtasks"
                                                }),
                                                subtask.map((field, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Subtask__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                        index: index,
                                                        isLast: subtask.length === index + 1,
                                                        register: register,
                                                        append: subtaskAppend,
                                                        remove: subtaskRemove
                                                    }, index)
                                                ),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                    ..._styles_home_styledComponents__WEBPACK_IMPORTED_MODULE_9__/* .buttonAddStyle */ .Bo,
                                                    bottom: subtask.length !== 0 ? "28.5px" : "0",
                                                    onClick: ()=>subtaskAppend({
                                                            title: "",
                                                            description: ""
                                                        })
                                                    ,
                                                    children: "Add"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            colorScheme: "blue",
                                            mr: 3,
                                            onClick: onClose,
                                            type: "submit",
                                            children: "Save"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            onClick: onClose,
                                            children: "Cancel"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddTask);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ tasks_Subtask)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/home/buttons/RemoveButton.tsx



const RemoveButton = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        display: "flex",
        justifyContent: "right",
        width: "100%",
        mb: 1,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.ButtonGroup, {
            spacing: "3",
            size: "xs",
            marginTop: "5px",
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                colorScheme: "red",
                onClick: ()=>props.remove(props.index)
                ,
                children: "Remove"
            })
        })
    });
};
/* harmony default export */ const buttons_RemoveButton = (RemoveButton);

;// CONCATENATED MODULE: ./src/components/tasks/Subtask.tsx




const Subtask = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                isRequired: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormLabel, {
                        marginBottom: 0,
                        fontSize: "md",
                        children: [
                            "Task ",
                            props.index + 1,
                            ":"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                        placeholder: "Title",
                        size: "sm",
                        fontSize: "sm",
                        ...props.register(`subtask.${props.index}.title`, {
                            require: true
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                mt: 2,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.FormLabel, {
                        marginBottom: 0,
                        fontSize: "sm",
                        children: "Description:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Textarea, {
                        size: "sm",
                        placeholder: "Remind my future self..",
                        ...props.register(`subtask.${props.index}.description`)
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(buttons_RemoveButton, {
                index: props.index,
                remove: props.remove
            })
        ]
    });
};
/* harmony default export */ const tasks_Subtask = (Subtask);


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

/***/ 3022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ addTask)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const addTask = (taskInfo)=>{
    const data = {
        taskTitle: taskInfo.taskTitle,
        taskDescription: taskInfo.taskDescription,
        type: taskInfo.type,
        email: taskInfo.email,
        due: taskInfo.due,
        milestones: taskInfo.milestones,
        subtask: taskInfo.subtask
    };
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };
    return fetch("http://localhost:2000" + "/task/add/", requestOptions);
};


/***/ }),

/***/ 8220:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_home_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3051);
/* harmony import */ var _components_home_taskProgress_ProgressDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8766);
/* harmony import */ var _components_home_TodayTaskList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5732);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_tasks_AddTask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(101);
/* harmony import */ var _context_EmailContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3024);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_home_taskProgress_ProgressDisplay__WEBPACK_IMPORTED_MODULE_3__, _components_tasks_AddTask__WEBPACK_IMPORTED_MODULE_7__, swr__WEBPACK_IMPORTED_MODULE_9__]);
([_components_home_taskProgress_ProgressDisplay__WEBPACK_IMPORTED_MODULE_3__, _components_tasks_AddTask__WEBPACK_IMPORTED_MODULE_7__, swr__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const HomePage = ()=>{
    //using useContext to set email after logged in
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();
    const { setEmail  } = (0,_context_EmailContext__WEBPACK_IMPORTED_MODULE_8__/* .useEmailContext */ .s)();
    setEmail(session && session.user && session.user.email ? session.user.email : "");
    const { email  } = (0,_context_EmailContext__WEBPACK_IMPORTED_MODULE_8__/* .useEmailContext */ .s)();
    const SHOW_TASK_URL = "http://localhost:2000/task/email/" + email;
    const fetcher = (url)=>fetch(url).then((res)=>res.json()
        )
    ;
    const { data , error , mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_9__["default"])(SHOW_TASK_URL, fetcher);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
        marginBottom: "30%",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_Profile__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_taskProgress_ProgressDisplay__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
                style: {
                    width: "90%",
                    margin: "0 auto"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                        fontSize: "1xl",
                        fontWeight: 600,
                        children: "What do I need to do today?"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_TodayTaskList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        data: data,
                        error: error,
                        mutate: mutate
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_tasks_AddTask__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        url: SHOW_TASK_URL,
                        mutate: ()=>mutate()
                    })
                ]
            })
        ]
    });
};
HomePage.auth = true;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bo": () => (/* binding */ buttonAddStyle),
/* harmony export */   "Di": () => (/* binding */ deleteActionStyle),
/* harmony export */   "Y3": () => (/* binding */ hideDelete)
/* harmony export */ });
const colors = {
    deleted: "#eee"
};
const buttonAddStyle = {
    colorScheme: "green",
    size: "xs",
    width: "60px",
    variant: "outline",
    marginLeft: "40%"
};
const deleteActionStyle = {
    backgroundColor: "#E53E3E",
    borderRadius: "10",
    // height:"110px",
    marginBottom: "8px",
    paddingRight: "15px",
    paddingTop: "35px",
    color: colors.deleted
};
const hideDelete = {
    ...deleteActionStyle,
    width: "24%",
    left: "100%",
    height: "93%",
    opacity: "100%",
    paddingBottom: "5%"
};


/***/ }),

/***/ 7720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ Theme)
/* harmony export */ });
const Theme = {
    colors: {
        task: {
            red: "#F56565",
            orange: "#ED8936",
            green: "#48BB78",
            add: "teal",
            due: "#E2E8F0"
        }
    }
};


/***/ }),

/***/ 8434:
/***/ (() => {



/***/ }),

/***/ 6539:
/***/ (() => {



/***/ })

};
;