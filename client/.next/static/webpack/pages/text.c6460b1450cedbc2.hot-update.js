"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/text",{

/***/ "./pages/components/TextCard/index.js":
/*!********************************************!*\
  !*** ./pages/components/TextCard/index.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ServiceCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Service_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Service.module.css */ \"./pages/components/TextCard/Service.module.css\");\n/* harmony import */ var _Service_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Service_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ReportText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ReportText */ \"./pages/components/ReportText/index.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ServiceCard(param) {\n    var locale = param.locale;\n    _s();\n    var home = locale === \"hi-HI\" ? \"/hi-HI\" : \"/\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), result1 = ref[0], setResult = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), clicked = ref1[0], setClicked = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), text = ref2[0], setText = ref2[1];\n    var generateReport = function() {\n        setClicked(true);\n        // TODO: required to integrate with backend \n        var result = \"\";\n        var jsonRes = {\n            \"languageCode\": \"hi\",\n            \"sentiment\": {\n                \"positiveScore\": 0.00647724000737071,\n                \"negativeScore\": 0.44378843903541565,\n                \"neutralScore\": 0.5497118234634399,\n                \"mixedScore\": 2.2468699171440676E-5\n            },\n            \"entities\": [\n                {\n                    \"text\": \"\\u092C\\u0947\\u091C\\u094B\\u0938\",\n                    \"type\": \"ORGANIZATION\",\n                    \"score\": 0.5235549807548523\n                },\n                {\n                    \"text\": \"16 \\u092C\\u093E\\u0930\",\n                    \"type\": \"QUANTITY\",\n                    \"score\": 0.9968825578689575\n                },\n                {\n                    \"text\": \"\\u0905\\u092E\\u0947\\u091C\\u093C\\u0928\",\n                    \"type\": \"ORGANIZATION\",\n                    \"score\": 0.998528003692627\n                },\n                {\n                    \"text\": \"Web3\",\n                    \"type\": \"ORGANIZATION\",\n                    \"score\": 0.8461787104606628\n                },\n                {\n                    \"text\": \"Web3\",\n                    \"type\": \"ORGANIZATION\",\n                    \"score\": 0.898071825504303\n                },\n                {\n                    \"text\": \"\\u0935\\u0947\\u092C\",\n                    \"type\": \"ORGANIZATION\",\n                    \"score\": 0.696683406829834\n                },\n                {\n                    \"text\": \"\\u0935\\u0947\\u092C3\",\n                    \"type\": \"ORGANIZATION\",\n                    \"score\": 0.6806062459945679\n                }\n            ]\n        };\n        result = JSON.stringify(jsonRes);\n        console.log(result);\n        setResult(result);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        suppressHydrationWarning: true,\n        className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Navbar, {\n                bg: \"light\",\n                expand: \"lg\",\n                className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Container, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Nav, {\n                            className: \"me-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Nav.Link, {\n                                href: home,\n                                className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav_link),\n                                children: [\n                                    \" \",\n                                    locale === \"hi-HI\" ? \"\\u0939\\u094B\\u092E\\u092A\\u0947\\u091C\" : \"Homepage\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/TextCard/index.js\",\n                                lineNumber: 77,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/TextCard/index.js\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Nav, {\n                            className: \"mr-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Nav.Link, {\n                                href: home,\n                                className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav_link),\n                                children: [\n                                    \" \",\n                                    locale === \"hi-HI\" ? \"\\u0939\\u094B\\u092E\\u092A\\u0947\\u091C\" : \"Homepage\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/TextCard/index.js\",\n                                lineNumber: 82,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/TextCard/index.js\",\n                            lineNumber: 81,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/TextCard/index.js\",\n                    lineNumber: 75,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/TextCard/index.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                        children: locale === \"hi-HI\" ? \"\\u0935\\u0941\\u0932\\u094D\\u092B \\u0926\\u0947\\u0916\\u0947\\u0902 \\uD83D\\uDC3A: \\u092A\\u093E\\u0920 \\u0930\\u093F\\u092A\\u094B\\u0930\\u094D\\u091F\" : \"Watch Wolf \\uD83D\\uDC3A: Text Report\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/TextCard/index.js\",\n                        lineNumber: 89,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_6___default().description),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            children: locale === \"hi-HI\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    \"\\u091B\\u0935\\u093F\\u092F\\u094B\\u0902 \\u0914\\u0930 \\u092A\\u0940\\u0921\\u0940\\u090F\\u092B \\u0938\\u0947 \\u0939\\u093F\\u0902\\u0926\\u0940 \\u0914\\u0930 \\u0905\\u0902\\u0917\\u094D\\u0930\\u0947\\u091C\\u0940 \\u092D\\u093E\\u0937\\u093E \\u092E\\u0947\\u0902 \\u092A\\u093E\\u0920 \\u0915\\u0940 \\u092D\\u093E\\u0935\\u0928\\u093E \\u0915\\u093E \\u0935\\u093F\\u0936\\u094D\\u0932\\u0947\\u0937\\u0923 \\u0915\\u0930\\u0947\\u0902\\u0964\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/TextCard/index.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 29\n                                    }, this),\n                                    \"\\u091F\\u0947\\u0915\\u094D\\u0938\\u094D\\u091F \\u0907\\u0928\\u092A\\u0941\\u091F \\u0915\\u0930\\u0915\\u0947 \\u0938\\u0947\\u0902\\u091F\\u0940\\u092E\\u0947\\u0902\\u091F \\u0930\\u093F\\u092A\\u094B\\u0930\\u094D\\u091F \\u0924\\u0948\\u092F\\u093E\\u0930 \\u0915\\u0940 \\u091C\\u093E \\u0938\\u0915\\u0924\\u0940 \\u0939\\u0948\\u0964 \\u0928\\u0940\\u091A\\u0947 \\u0938\\u093E\\u0926\\u093E \\u092A\\u093E\\u0920 \\u0926\\u0930\\u094D\\u091C \\u0915\\u0930\\u0947\\u0902\\u0964\"\n                                ]\n                            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    \"Analyze the sentiment of the text from images and PDF in Hindi and English Language.\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/TextCard/index.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 33\n                                    }, this),\n                                    \"Sentiment report can be generated by inputting the text. Enter the plain text below.\"\n                                ]\n                            }, void 0, true)\n                        }, void 0, false, {\n                            fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/TextCard/index.js\",\n                            lineNumber: 96,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/TextCard/index.js\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Form, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Form.Group, {\n                            className: \"mb-3\",\n                            controlId: \"exampleForm.ControlTextarea1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Form.Control, {\n                                as: \"textarea\",\n                                rows: 8,\n                                className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_6___default().form_text),\n                                value: text,\n                                onChange: function(e) {\n                                    setText(e.target.value);\n                                },\n                                disabled: clicked\n                            }, void 0, false, {\n                                fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/TextCard/index.js\",\n                                lineNumber: 110,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/TextCard/index.js\",\n                            lineNumber: 109,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/TextCard/index.js\",\n                        lineNumber: 108,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/TextCard/index.js\",\n                        lineNumber: 118,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                variant: \"primary\",\n                                type: \"submit\",\n                                className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_6___default().submit),\n                                onClick: generateReport,\n                                children: locale === \"hi-HI\" ? \"\\u0930\\u093F\\u092A\\u094B\\u0930\\u094D\\u091F \\u092C\\u0928\\u093E\\u0913\" : \"Generate Report\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/TextCard/index.js\",\n                                lineNumber: 120,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                type: \"submit\",\n                                className: \"\".concat((_Service_module_css__WEBPACK_IMPORTED_MODULE_6___default().submit), \" \").concat((_Service_module_css__WEBPACK_IMPORTED_MODULE_6___default().clear)),\n                                onClick: function() {\n                                    setClicked(false);\n                                    setResult(\"\");\n                                    setText(\"\");\n                                },\n                                children: locale === \"hi-HI\" ? \"\\u0930\\u093F\\u092A\\u094B\\u0930\\u094D\\u091F \\u0938\\u093E\\u092B\\u093C \\u0915\\u0930\\u0947\\u0902\" : \"Clear Report\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/TextCard/index.js\",\n                                lineNumber: 127,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/TextCard/index.js\",\n                        lineNumber: 119,\n                        columnNumber: 17\n                    }, this),\n                    result1.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ReportText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            locale: locale,\n                            result: result1\n                        }, void 0, false, {\n                            fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/TextCard/index.js\",\n                            lineNumber: 143,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/TextCard/index.js\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/TextCard/index.js\",\n        lineNumber: 73,\n        columnNumber: 9\n    }, this);\n};\n_s(ServiceCard, \"ojiSMdIOpsfIKsAftW2C3N83qZo=\");\n_c = ServiceCard;\nvar _c;\n$RefreshReg$(_c, \"ServiceCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9UZXh0Q2FyZC9pbmRleC5qcz85NDIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU2VydmljZS5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IE5hdmJhciwgTmF2LCBDb250YWluZXIsIEZvcm0sIEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFJlcG9ydFRleHQgZnJvbSAnLi4vUmVwb3J0VGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZUNhcmQoeyBsb2NhbGUgfSkge1xuICAgIGNvbnN0IGhvbWUgPSBsb2NhbGUgPT09IFwiaGktSElcIiA/IGAvaGktSElgIDogYC9gO1xuICAgIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtjbGlja2VkLCBzZXRDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICBjb25zdCBnZW5lcmF0ZVJlcG9ydCA9ICgpID0+IHtcbiAgICAgICAgc2V0Q2xpY2tlZCh0cnVlKVxuICAgICAgICAvLyBUT0RPOiByZXF1aXJlZCB0byBpbnRlZ3JhdGUgd2l0aCBiYWNrZW5kIFxuICAgICAgICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgbGV0IGpzb25SZXMgPSB7XG4gICAgICAgICAgICBcImxhbmd1YWdlQ29kZVwiOiBcImhpXCIsXG4gICAgICAgICAgICBcInNlbnRpbWVudFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwb3NpdGl2ZVNjb3JlXCI6IDAuMDA2NDc3MjQwMDA3MzcwNzEsXG4gICAgICAgICAgICAgICAgXCJuZWdhdGl2ZVNjb3JlXCI6IDAuNDQzNzg4NDM5MDM1NDE1NjUsXG4gICAgICAgICAgICAgICAgXCJuZXV0cmFsU2NvcmVcIjogMC41NDk3MTE4MjM0NjM0Mzk5LFxuICAgICAgICAgICAgICAgIFwibWl4ZWRTY29yZVwiOiAyLjI0Njg2OTkxNzE0NDA2NzZFLTVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVudGl0aWVzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIuCkrOClh+CknOCli+CkuFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJPUkdBTklaQVRJT05cIixcbiAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiAwLjUyMzU1NDk4MDc1NDg1MjNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiMTYg4KSs4KS+4KSwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlFVQU5USVRZXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic2NvcmVcIjogMC45OTY4ODI1NTc4Njg5NTc1XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIuCkheCkruClh+CknOCkvOCkqFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJPUkdBTklaQVRJT05cIixcbiAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiAwLjk5ODUyODAwMzY5MjYyN1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJXZWIzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk9SR0FOSVpBVElPTlwiLFxuICAgICAgICAgICAgICAgICAgICBcInNjb3JlXCI6IDAuODQ2MTc4NzEwNDYwNjYyOFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJXZWIzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk9SR0FOSVpBVElPTlwiLFxuICAgICAgICAgICAgICAgICAgICBcInNjb3JlXCI6IDAuODk4MDcxODI1NTA0MzAzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIuCkteClh+CkrFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJPUkdBTklaQVRJT05cIixcbiAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiAwLjY5NjY4MzQwNjgyOTgzNFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCLgpLXgpYfgpKwzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk9SR0FOSVpBVElPTlwiLFxuICAgICAgICAgICAgICAgICAgICBcInNjb3JlXCI6IDAuNjgwNjA2MjQ1OTk0NTY3OVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KGpzb25SZXMpOyBcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmcgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxOYXZiYXIgYmc9XCJsaWdodFwiIGV4cGFuZD1cImxnXCIgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1lLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPXtob21lfSBjbGFzc05hbWU9e3N0eWxlcy5uYXZfbGlua30+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGUgPT09IFwiaGktSElcIiA/IFwi4KS54KWL4KSu4KSq4KWH4KScXCIgOiBcIkhvbWVwYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH08L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj17aG9tZX0gY2xhc3NOYW1lPXtzdHlsZXMubmF2X2xpbmt9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlID09PSBcImhpLUhJXCIgPyBcIuCkueCli+CkruCkquClh+CknFwiIDogXCJIb21lcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9PC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L05hdmJhcj5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZSA9PT0gXCJoaS1ISVwiID8gXCLgpLXgpYHgpLLgpY3gpKsg4KSm4KWH4KSW4KWH4KSCIPCfkLo6IOCkquCkvuCkoCDgpLDgpL/gpKrgpYvgpLDgpY3gpJ9cIiA6IFwiV2F0Y2ggV29sZiDwn5C6OiBUZXh0IFJlcG9ydFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgICAgICA8aT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGUgPT09IFwiaGktSElcIiA/IDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOCkm+CkteCkv+Ckr+Cli+CkgiDgpJTgpLAg4KSq4KWA4KSh4KWA4KSP4KSrIOCkuOClhyDgpLngpL/gpILgpKbgpYAg4KSU4KSwIOCkheCkguCkl+CljeCksOClh+CknOClgCDgpK3gpL7gpLfgpL4g4KSu4KWH4KSCIOCkquCkvuCkoCDgpJXgpYAg4KSt4KS+4KS14KSo4KS+IOCkleCkviDgpLXgpL/gpLbgpY3gpLLgpYfgpLfgpKMg4KSV4KSw4KWH4KSC4KWkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+4KSf4KWH4KSV4KWN4KS44KWN4KSfIOCkh+CkqOCkquClgeCknyDgpJXgpLDgpJXgpYcg4KS44KWH4KSC4KSf4KWA4KSu4KWH4KSC4KSfIOCksOCkv+CkquCli+CksOCljeCknyDgpKTgpYjgpK/gpL7gpLAg4KSV4KWAIOCknOCkviDgpLjgpJXgpKTgpYAg4KS54KWI4KWkIOCkqOClgOCkmuClhyDgpLjgpL7gpKbgpL4g4KSq4KS+4KSgIOCkpuCksOCljeCknCDgpJXgpLDgpYfgpILgpaRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PkFuYWx5emUgdGhlIHNlbnRpbWVudCBvZiB0aGUgdGV4dCBmcm9tIGltYWdlcyBhbmQgUERGIGluIEhpbmRpIGFuZCBFbmdsaXNoIExhbmd1YWdlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5TZW50aW1lbnQgcmVwb3J0IGNhbiBiZSBnZW5lcmF0ZWQgYnkgaW5wdXR0aW5nIHRoZSB0ZXh0LiBFbnRlciB0aGUgcGxhaW4gdGV4dCBiZWxvdy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJleGFtcGxlRm9ybS5Db250cm9sVGV4dGFyZWExXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGFzPVwidGV4dGFyZWFcIiByb3dzPXs4fSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1fdGV4dH0gXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3NldFRleHQoZS50YXJnZXQudmFsdWUpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjbGlja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3VibWl0fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtnZW5lcmF0ZVJlcG9ydH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtsb2NhbGUgPT09IFwiaGktSElcIiA/IFwi4KSw4KS/4KSq4KWL4KSw4KWN4KSfIOCkrOCkqOCkvuCkk1wiIDogXCJHZW5lcmF0ZSBSZXBvcnRcIn1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc3VibWl0fSAke3N0eWxlcy5jbGVhcn1gfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDbGlja2VkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdChcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRleHQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bG9jYWxlID09PSBcImhpLUhJXCIgPyBcIuCksOCkv+CkquCli+CksOCljeCknyDgpLjgpL7gpKvgpLwg4KSV4KSw4KWH4KSCXCIgOiBcIkNsZWFyIFJlcG9ydFwifVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQubGVuZ3RoID09PSAwID8gPD48Lz4gOiBcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPFJlcG9ydFRleHQgbG9jYWxlPXtsb2NhbGV9IHJlc3VsdD17cmVzdWx0fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsIkxpbmsiLCJzdHlsZXMiLCJOYXZiYXIiLCJOYXYiLCJDb250YWluZXIiLCJGb3JtIiwiQnV0dG9uIiwidXNlU3RhdGUiLCJSZXBvcnRUZXh0IiwiU2VydmljZUNhcmQiLCJsb2NhbGUiLCJob21lIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiY2xpY2tlZCIsInNldENsaWNrZWQiLCJ0ZXh0Iiwic2V0VGV4dCIsImdlbmVyYXRlUmVwb3J0IiwianNvblJlcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiYmciLCJleHBhbmQiLCJuYXYiLCJocmVmIiwibmF2X2xpbmsiLCJtYWluIiwiaDEiLCJ0aXRsZSIsInAiLCJkZXNjcmlwdGlvbiIsImkiLCJiciIsIkdyb3VwIiwiY29udHJvbElkIiwiQ29udHJvbCIsImFzIiwicm93cyIsImZvcm1fdGV4dCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZGlzYWJsZWQiLCJ2YXJpYW50IiwidHlwZSIsInN1Ym1pdCIsIm9uQ2xpY2siLCJjbGVhciIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/TextCard/index.js\n");

/***/ })

});