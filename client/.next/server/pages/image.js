(() => {
var exports = {};
exports.id = 358;
exports.ids = [358];
exports.modules = {

/***/ 4122:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Service_container__hRXMw",
	"main": "Service_main__fANFJ",
	"nav": "Service_nav__sJ_sW",
	"nav_link": "Service_nav_link__IXnLZ",
	"nav_btn": "Service_nav_btn__cUqFv",
	"title": "Service_title__BgSaN",
	"description": "Service_description__zq3lK",
	"form_text": "Service_form_text__F4oZT",
	"submit": "Service_submit__gVBSF",
	"clear": "Service_clear__tX_8Z"
};


/***/ }),

/***/ 7521:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Report_main__YH9es",
	"title": "Report_title__P_nlz",
	"description": "Report_description__slbV2",
	"reports": "Report_reports__sK5hP",
	"report_circular": "Report_report_circular__tSEuH",
	"report_text": "Report_report_text__euU0Y",
	"entity_sec": "Report_entity_sec__w2tGj",
	"card": "Report_card__aEIVb",
	"card_header": "Report_card_header__jk7fB",
	"card_row": "Report_card_row__JedzL"
};


/***/ }),

/***/ 8182:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ServiceCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Service_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4122);
/* harmony import */ var _Service_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Service_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ReportImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8770);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5139);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_7__]);
react_toastify__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function ServiceCard({ locale  }) {
    const home = locale === "hi-HI" ? `/hi-HI` : `/`;
    const { 0: result1 , 1: setResult  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const { 0: clicked , 1: setClicked  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: file , 1: setFile  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const uploadToClient = (event)=>{
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            setFile(i);
        }
    };
    const generateReport = async (e)=>{
        e.preventDefault();
        setClicked(true);
        // TODO: required to integrate with backend 
        if (file === null) {
            setClicked(false);
            setFile(null);
            let err = locale === "hi-HI" ? "\u0915\u0943\u092A\u092F\u093E \u090F\u0915 \u091B\u0935\u093F \u0938\u0902\u0932\u0917\u094D\u0928 \u0915\u0930\u0947\u0902\u0964 \u0905\u091F\u0948\u091A\u092E\u0947\u0902\u091F \u0916\u093E\u0932\u0940 \u0928\u0939\u0940\u0902 \u0939\u094B \u0938\u0915\u0924\u093E|" : "Please attach an image. Attachment cannot be empty.";
            (0,react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast)(err, {
                closeOnClick: true,
                autoClose: 10000
            });
        } else {
            let body = new FormData();
            body.append("file", file);
            console.log(file);
            const res = await fetch(`${_config_client__WEBPACK_IMPORTED_MODULE_9__/* .client */ .L}/api/generateImage`, {
                method: "POST",
                body
            });
            const { data , err  } = await res.json();
            let result = "";
            if (err) {
                setFile(null);
                (0,react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast)(err, {
                    closeOnClick: true,
                    autoClose: 10000
                });
            } else {
                let res1 = JSON.parse(data);
                console.log(res1["status"]);
                if (res1["status"] === undefined) {
                    console.log(res1);
                    result = data;
                    setResult(result);
                }
            }
        }
    };
    const logout = async (e)=>{
        e.preventDefault();
        const res = await fetch(`${_config_client__WEBPACK_IMPORTED_MODULE_9__/* .client */ .L}/api/logout`, {
            method: "GET"
        });
        const { data , err  } = await res.json();
        if (data !== null) {
            localStorage.setItem("auth", 0);
            localStorage.setItem("encode", "");
            window.location.href = `${_config_client__WEBPACK_IMPORTED_MODULE_9__/* .client */ .L}/`;
        } else {
            let err = locale === "hi-HI" ? "\u0932\u0949\u0917\u0906\u0909\u091F \u0905\u0938\u092B\u0932" : "Logout unsuccessful";
            (0,react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast)(err, {
                closeOnClick: true,
                autoClose: 10000
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        suppressHydrationWarning: true,
        className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar, {
                bg: "light",
                expand: "lg",
                className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_10___default().nav),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav, {
                            className: "me-auto",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {
                                href: home,
                                className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_10___default().nav_link),
                                children: [
                                    " ",
                                    locale === "hi-HI" ? "\u0939\u094B\u092E\u092A\u0947\u091C" : "Homepage"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav, {
                            className: "mr-auto",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {
                                href: home,
                                className: `${(_Service_module_css__WEBPACK_IMPORTED_MODULE_10___default().nav_link)} ${(_Service_module_css__WEBPACK_IMPORTED_MODULE_10___default().nav_btn)}`,
                                onClick: logout,
                                children: [
                                    " ",
                                    locale === "hi-HI" ? "\u0932\u0949\u0917 \u0906\u0909\u091F" : "Logout"
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_10___default().main),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_10___default().title),
                        children: locale === "hi-HI" ? "\u0935\u0941\u0932\u094D\u092B \u0926\u0947\u0916\u0947\u0902 \uD83D\uDC3A: \u091B\u0935\u093F \u0930\u093F\u092A\u094B\u0930\u094D\u091F" : "Watch Wolf \uD83D\uDC3A: Image Report"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_10___default().description),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            children: locale === "hi-HI" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    "\u091B\u0935\u093F\u092F\u094B\u0902 \u0914\u0930 \u092A\u0940\u0921\u0940\u090F\u092B \u0938\u0947 \u0939\u093F\u0902\u0926\u0940 \u0914\u0930 \u0905\u0902\u0917\u094D\u0930\u0947\u091C\u0940 \u092D\u093E\u0937\u093E \u092E\u0947\u0902 \u092A\u093E\u0920 \u0915\u0940 \u092D\u093E\u0935\u0928\u093E \u0915\u093E \u0935\u093F\u0936\u094D\u0932\u0947\u0937\u0923 \u0915\u0930\u0947\u0902\u0964",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "\u091B\u0935\u093F \u0938\u0902\u0932\u0917\u094D\u0928 \u0915\u0930\u0915\u0947 \u0938\u0947\u0902\u091F\u0940\u092E\u0947\u0902\u091F \u0930\u093F\u092A\u094B\u0930\u094D\u091F \u0924\u0948\u092F\u093E\u0930 \u0915\u0940 \u091C\u093E \u0938\u0915\u0924\u0940 \u0939\u0948\u0964 \u0928\u0940\u091A\u0947 \u0926\u0940 \u0917\u0908 \u091B\u0935\u093F \u0938\u0902\u0932\u0917\u094D\u0928 \u0915\u0930\u0947\u0902\u0964 (\u0915\u0947\u0935\u0932 \u0905\u0902\u0917\u094D\u0930\u0947\u091C\u0940 \u0915\u0947 \u0932\u093F\u090F \u0915\u093E\u092E \u0915\u0930\u0924\u093E \u0939\u0948)"
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    "Analyze the sentiment of the text from images and PDF in Hindi and English Language.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "Sentiment report can be generated by attaching image. Attach the image below. (Only works for English)"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "file",
                        className: "form-control",
                        id: "customFile",
                        accept: "image/gif, image/jpeg, image/png",
                        onChange: uploadToClient,
                        disabled: clicked
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                variant: "primary",
                                type: "submit",
                                className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_10___default().submit),
                                onClick: generateReport,
                                children: locale === "hi-HI" ? "\u0930\u093F\u092A\u094B\u0930\u094D\u091F \u092C\u0928\u093E\u0913" : "Generate Report"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                type: "submit",
                                className: `${(_Service_module_css__WEBPACK_IMPORTED_MODULE_10___default().submit)} ${(_Service_module_css__WEBPACK_IMPORTED_MODULE_10___default().clear)}`,
                                onClick: ()=>{
                                    setClicked(false);
                                    setResult("");
                                    setFile(null);
                                    document.querySelector("#customFile").value = null;
                                },
                                children: locale === "hi-HI" ? "\u0930\u093F\u092A\u094B\u0930\u094D\u091F \u0938\u093E\u092B\u093C \u0915\u0930\u0947\u0902" : "Clear Report"
                            })
                        ]
                    }),
                    result1.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReportImage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            locale: locale,
                            result: result1
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_7__.ToastContainer, {
                autoClose: 10000,
                closeOnClick: true
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ReportImage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/ReportImage/Report.module.css
var Report_module = __webpack_require__(7521);
var Report_module_default = /*#__PURE__*/__webpack_require__.n(Report_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);
;// CONCATENATED MODULE: ./components/ReportImage/RadialSeparators.js



function Separator(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            position: "absolute",
            height: "100%",
            transform: `rotate(${props.turns}turn)`
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: props.style
        })
    });
}
function RadialSeparators(props) {
    const turns = 1 / props.count;
    return external_lodash_default().range(props.count).map((index)=>/*#__PURE__*/ jsx_runtime_.jsx(Separator, {
            turns: index * turns,
            style: props.style
        }, index)
    );
}
/* harmony default export */ const ReportImage_RadialSeparators = (RadialSeparators);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: external "react-circular-progressbar"
var external_react_circular_progressbar_ = __webpack_require__(1400);
;// CONCATENATED MODULE: ./components/ReportImage/index.js










function ReportImage({ locale , result  }) {
    const jsonRes = JSON.parse(result);
    const positive = (Math.round(jsonRes.sentiment.positiveScore * 1000) / 1000).toFixed(3);
    const negative = (Math.round(jsonRes.sentiment.negativeScore * 1000) / 1000).toFixed(3);
    const neutral = (Math.round(jsonRes.sentiment.neutralScore * 1000) / 1000).toFixed(3);
    const mixed = (Math.round(jsonRes.sentiment.mixedScore * 1000) / 1000).toFixed(3);
    const lists = jsonRes.entities;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: (Report_module_default()).main,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (Report_module_default()).title,
                children: locale === "hi-HI" ? "\u092D\u093E\u0935\u0928\u093E \u0930\u093F\u092A\u094B\u0930\u094D" : "Sentiment Report"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (Report_module_default()).description,
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    children: locale === "hi-HI" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            "\u092F\u0939 \u0930\u093F\u092A\u094B\u0930\u094D\u091F \u0907\u092E\u0947\u091C \u092E\u0947\u0902 \u091F\u0947\u0915\u094D\u0938\u094D\u091F \u0915\u0947 \u0935\u093F\u0936\u094D\u0932\u0947\u0937\u0923 \u0915\u094B \u092A\u094D\u0930\u0926\u0930\u094D\u0936\u093F\u0924 \u0915\u0930\u0947\u0917\u0940\u0964",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "\u0907\u0938 \u0935\u093F\u0936\u094D\u0932\u0947\u0937\u0923 \u0938\u0947 \u0906\u092A \u0938\u092E\u091D \u0938\u0915\u0924\u0947 \u0939\u0948\u0902 \u0915\u093F \u0907\u0928\u092A\u0941\u091F \u0915\u0940 \u092D\u093E\u0935\u0928\u093E \u0938\u0915\u093E\u0930\u093E\u0924\u094D\u092E\u0915 \u0939\u0948 \u092F\u093E \u0928\u0915\u093E\u0930\u093E\u0924\u094D\u092E\u0915\u0964"
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            "This report will showcase the analysis of the text within Image. ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " With this analysis, you can understand whether the sentiment of the input is positive or negative."
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Report_module_default()).reports,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Report_module_default()).report_circular,
                        style: {
                            width: 200,
                            height: 200
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_circular_progressbar_.CircularProgressbarWithChildren, {
                                    value: positive * 100,
                                    text: `${positive}`,
                                    strokeWidth: 10,
                                    styles: (0,external_react_circular_progressbar_.buildStyles)({
                                        pathColor: "#008000",
                                        strokeLinecap: "butt",
                                        textColor: "#008000"
                                    }),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ReportImage_RadialSeparators, {
                                        count: 12,
                                        style: {
                                            background: "#fff",
                                            width: "2px",
                                            height: `${10}%`
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (Report_module_default()).report_text,
                                children: locale === "hi-HI" ? "\u0938\u0915\u093E\u0930\u093E\u0924\u094D\u092E\u0915 \u0938\u094D\u0915\u094B\u0930" : "Positive Score"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Report_module_default()).report_circular,
                        style: {
                            width: 200,
                            height: 200
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_circular_progressbar_.CircularProgressbarWithChildren, {
                                    value: negative * 100,
                                    text: `${negative}`,
                                    strokeWidth: 10,
                                    styles: (0,external_react_circular_progressbar_.buildStyles)({
                                        pathColor: "#950002",
                                        strokeLinecap: "butt",
                                        textColor: "#950002"
                                    }),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ReportImage_RadialSeparators, {
                                        count: 12,
                                        style: {
                                            background: "#fff",
                                            width: "2px",
                                            height: `${10}%`
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (Report_module_default()).report_text,
                                children: locale === "hi-HI" ? "\u0928\u0915\u093E\u0930\u093E\u0924\u094D\u092E\u0915 \u0938\u094D\u0915\u094B\u0930" : "Negative Score"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Report_module_default()).report_circular,
                        style: {
                            width: 200,
                            height: 200
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_circular_progressbar_.CircularProgressbarWithChildren, {
                                    value: neutral * 100,
                                    text: `${neutral}`,
                                    strokeWidth: 10,
                                    styles: (0,external_react_circular_progressbar_.buildStyles)({
                                        pathColor: "#083a61",
                                        strokeLinecap: "butt",
                                        textColor: "#083a61"
                                    }),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ReportImage_RadialSeparators, {
                                        count: 12,
                                        style: {
                                            background: "#fff",
                                            width: "2px",
                                            height: `${10}%`
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (Report_module_default()).report_text,
                                children: locale === "hi-HI" ? "\u0924\u091F\u0938\u094D\u0925 \u0938\u094D\u0915\u094B\u0930" : "Neutral Score"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Report_module_default()).report_circular,
                        style: {
                            width: 200,
                            height: 200
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_circular_progressbar_.CircularProgressbarWithChildren, {
                                    value: mixed * 100,
                                    text: `${mixed}`,
                                    strokeWidth: 10,
                                    styles: (0,external_react_circular_progressbar_.buildStyles)({
                                        pathColor: "#ff8000",
                                        strokeLinecap: "butt",
                                        textColor: "#ff8000"
                                    }),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ReportImage_RadialSeparators, {
                                        count: 12,
                                        style: {
                                            background: "#fff",
                                            width: "2px",
                                            height: `${10}%`
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (Report_module_default()).report_text,
                                children: locale === "hi-HI" ? "\u092E\u093F\u0936\u094D\u0930\u093F\u0924 \u0938\u094D\u0915\u094B\u0930" : "Mixed Score"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (Report_module_default()).title,
                children: locale === "hi-HI" ? "\u0938\u0902\u0938\u094D\u0925\u093E\u0913\u0902 \u0915\u0940 \u0930\u093F\u092A\u094B\u0930\u094D\u091F" : "Entities Report"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (Report_module_default()).description,
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    children: locale === "hi-HI" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            "\u092F\u0939 \u0930\u093F\u092A\u094B\u0930\u094D\u091F \u091B\u0935\u093F \u0915\u0947 \u0935\u093F\u0936\u094D\u0932\u0947\u0937\u0923 \u0915\u094B \u092A\u094D\u0930\u0926\u0930\u094D\u0936\u093F\u0924 \u0915\u0930\u0947\u0917\u0940\u0964",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "\u0907\u0938 \u0935\u093F\u0936\u094D\u0932\u0947\u0937\u0923 \u0915\u0947 \u0938\u093E\u0925, \u0906\u092A \u0935\u093F\u0936\u0947\u0937 \u091B\u0935\u093F \u0915\u0940 \u0938\u0902\u0938\u094D\u0925\u093E\u0913\u0902 \u0915\u094B \u0938\u092E\u091D \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964"
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            "This report will showcase the analysis of the image. ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " With this analysis, you can understand the entities of the particular image."
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Report_module_default()).entity_sec,
                children: lists.map(function(elm, idx) {
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card, {
                        className: (Report_module_default()).card,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card.Header, {
                                className: (Report_module_default()).card_header,
                                children: [
                                    "Entity - ",
                                    idx + 1
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card.Body, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Report_module_default()).card_row,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card.Title, {
                                                className: (Report_module_default()).title,
                                                children: [
                                                    locale === "hi-HI" ? "\u092E\u0942\u0932\u092A\u093E\u0920" : "Text",
                                                    ": \xa0"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Text, {
                                                children: locale === "hi-HI" ? elm.text : elm.text.toLowerCase()[0].toUpperCase() + elm.text.toLowerCase().slice(1)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Report_module_default()).card_row,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card.Title, {
                                                className: (Report_module_default()).title,
                                                children: [
                                                    locale === "hi-HI" ? "\u091F\u093E\u0907\u092A" : "Type",
                                                    ": \xa0"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Text, {
                                                children: elm.type.toLowerCase()[0].toUpperCase() + elm.type.toLowerCase().slice(1)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Report_module_default()).card_row,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card.Title, {
                                                className: (Report_module_default()).title,
                                                children: [
                                                    locale === "hi-HI" ? "\u0905\u0902\u0915" : "Score",
                                                    ": \xa0"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Text, {
                                                children: (Math.round(elm.score * 1000) / 1000).toFixed(3)
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, idx);
                })
            })
        ]
    });
};


/***/ }),

/***/ 921:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Images),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_LoginCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2726);
/* harmony import */ var _components_ImageCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8182);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_LoginCard__WEBPACK_IMPORTED_MODULE_6__, _components_ImageCard__WEBPACK_IMPORTED_MODULE_7__]);
([_components_LoginCard__WEBPACK_IMPORTED_MODULE_6__, _components_ImageCard__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Images(props) {
    const { locale , locales , asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { 0: isAuth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (false) {}
    }, []);
    return isAuth ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        locale: locale
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LoginCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        locale: locale,
        service: "pdf"
    });
};
async function getStaticProps(context) {
    return {
        props: {
            context
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6517:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

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

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

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

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 1400:
/***/ ((module) => {

"use strict";
module.exports = require("react-circular-progressbar");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61,726], () => (__webpack_exec__(921)));
module.exports = __webpack_exports__;

})();