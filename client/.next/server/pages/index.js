(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9399:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"navbar": "Home_navbar__H7ooC",
	"main": "Home_main__nLjiQ",
	"footer": "Home_footer____T7K",
	"title": "Home_title__T09hD",
	"description": "Home_description__41Owk",
	"code": "Home_code__suPER",
	"grid": "Home_grid__GxQ85",
	"card": "Home_card___LpL1",
	"logo": "Home_logo__27_tb"
};


/***/ }),

/***/ 9900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(9399);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./pages/assets/home.json
const home_namespaceObject = JSON.parse('{"L":[{"locale":"en-US","title":"Text Report","description":"Understand the sentiment report from plain text","link":"/text"},{"locale":"hi-HI","title":"पाठ रिपोर्ट","description":"सादे पाठ से भावना रिपोर्ट को समझें","link":"/hi-HI/text"},{"locale":"en-US","title":"Image Report","description":"Understand the sentiment report by attaching images with text incorporated in it","link":"/image"},{"locale":"hi-HI","title":"छवि रिपोर्ट","description":"इसमें शामिल पाठ के साथ छवियों को संलग्न करके भावना रिपोर्ट को समझें","link":"/hi-HI/image"},{"locale":"en-US","title":"PDF Report","description":"Understand the sentiment report by attaching the PDF file","link":"/pdf"},{"locale":"hi-HI","title":"पीडीएफ रिपोर्ट","description":"पीडीएफ फाइल को अटैच करके सेंटीमेंट रिपोर्ट को समझें","link":"/hi-HI/pdf"},{"locale":"en-US","title":"Tweet Analysis","description":"Sentiment report generated for a particular tweet","link":"/tweet"},{"locale":"hi-HI","title":"ट्वीट विश्लेषण","description":"किसी खास ट्वीट के लिए बनाई गई सेंटीमेंट रिपोर्ट","link":"/hi-HI/tweet"}]}');
;// CONCATENATED MODULE: ./components/HomeCard/index.js


function HomeCard(props) {
    const { homeCard  } = props;
    const { title , description , link  } = homeCard;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            href: link,
            className: (Home_module_default()).card,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                    children: [
                        title,
                        " \u2192"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: description
                })
            ]
        })
    });
}
/* harmony default export */ const components_HomeCard = (HomeCard);

;// CONCATENATED MODULE: ./pages/index.js








function Home(props) {
    const { locale , locales , asPath  } = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Watch Wolf"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Watch wolf helps to understand sentiment of text, pdf, images and tweets"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("style", {
                        children: '@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap");'
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: (Home_module_default()).main,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Home_module_default()).navbar,
                        children: locales.map((l, i)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: l === locale ? (Home_module_default()).selected : "",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: asPath,
                                    locale: l,
                                    children: l == "hi-HI" ? "\u0939\u093F\u0928\u094D\u0926\u0940" : "English"
                                })
                            }, i);
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: (Home_module_default()).title,
                        children: locale === "hi-HI" ? "\u0935\u0949\u091A \u0935\u0941\u0932\u094D\u092B \uD83D\uDC3A" : "Watch Wolf \uD83D\uDC3A"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (Home_module_default()).description,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            children: locale === "hi-HI" ? "\u091B\u0935\u093F\u092F\u094B\u0902 \u0914\u0930 \u092A\u0940\u0921\u0940\u090F\u092B \u0938\u0947 \u092A\u093E\u0920 \u0915\u0940 \u092D\u093E\u0935\u0928\u093E \u0915\u093E \u0935\u093F\u0936\u094D\u0932\u0947\u0937\u0923 \u0915\u0930\u0947\u0902 \u0939\u093F\u0902\u0926\u0940 \u0914\u0930 \u0905\u0902\u0917\u094D\u0930\u0947\u091C\u0940 \u092D\u093E\u0937\u093E" : "Analyze the sentiment of the text from images and PDF in Hindi and English Language"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Home_module_default()).grid,
                        children: home_namespaceObject.L.filter((p)=>p.locale == locale
                        ).map((post, i)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(components_HomeCard, {
                                homeCard: post
                            }, i);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: (Home_module_default()).footer,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "https://github.com/Twelfth-Hour",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                        "Created  with  \u2763\uFE0F  by  the \xa0",
                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                            children: "Twelfth Hour"
                        }),
                        "\xa0 team"
                    ]
                })
            })
        ]
    });
};
async function getStaticProps(context) {
    return {
        props: {
            context
        }
    };
}


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
var __webpack_exports__ = __webpack_require__.X(0, [505,61], () => (__webpack_exec__(9900)));
module.exports = __webpack_exports__;

})();