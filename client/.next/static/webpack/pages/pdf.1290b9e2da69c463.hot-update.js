"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pdf",{

/***/ "./pages/components/PDFCard/index.js":
/*!*******************************************!*\
  !*** ./pages/components/PDFCard/index.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ServiceCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Service_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Service.module.css */ \"./pages/components/PDFCard/Service.module.css\");\n/* harmony import */ var _Service_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Service_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ReportText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ReportText */ \"./pages/components/ReportText/index.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ServiceCard(param) {\n    var locale = param.locale;\n    _s();\n    var home = locale === \"hi-HI\" ? \"/hi-HI\" : \"/\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), result1 = ref[0], setResult = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), text = ref1[0], setText = ref1[1];\n    var generateReport = function() {\n        // TODO: required to integrate with backend \n        var result = \"\";\n        var jsonRes = {\n            \"languageCode\": \"en\",\n            \"sentiment\": {\n                \"positiveScore\": 0.20946373045444489,\n                \"negativeScore\": 6.742851692251861E-4,\n                \"neutralScore\": 0.7898232340812683,\n                \"mixedScore\": 3.8793106796219945E-5\n            },\n            \"entities\": [\n                {\n                    \"text\": \"Deutsche Bank of India\",\n                    \"type\": \"ORGANIZATION\",\n                    \"score\": 0.9490169286727905\n                },\n                {\n                    \"text\": \"summer of 2022\",\n                    \"type\": \"DATE\",\n                    \"score\": 0.8828208446502686\n                }\n            ]\n        };\n        result = JSON.stringify(jsonRes);\n        console.log(result);\n        setResult(result);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        suppressHydrationWarning: true,\n        className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Navbar, {\n                bg: \"light\",\n                expand: \"lg\",\n                className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Container, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Nav, {\n                        className: \"me-auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Nav.Link, {\n                            href: home,\n                            className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav_link),\n                            children: [\n                                \" \",\n                                locale === \"hi-HI\" ? \"\\u0939\\u094B\\u092E\\u092A\\u0947\\u091C\" : \"Homepage\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/PDFCard/index.js\",\n                            lineNumber: 50,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/PDFCard/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/PDFCard/index.js\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/PDFCard/index.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                        children: locale === \"hi-HI\" ? \"\\u0935\\u0941\\u0932\\u094D\\u092B \\u0926\\u0947\\u0916\\u0947\\u0902 \\uD83D\\uDC3A: \\u092A\\u093E\\u0920 \\u0930\\u093F\\u092A\\u094B\\u0930\\u094D\\u091F\" : \"Watch Wolf \\uD83D\\uDC3A: PDF Report\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/PDFCard/index.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_6___default().description),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            children: locale === \"hi-HI\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    \"\\u091B\\u0935\\u093F\\u092F\\u094B\\u0902 \\u0914\\u0930 \\u092A\\u0940\\u0921\\u0940\\u090F\\u092B \\u0938\\u0947 \\u0939\\u093F\\u0902\\u0926\\u0940 \\u0914\\u0930 \\u0905\\u0902\\u0917\\u094D\\u0930\\u0947\\u091C\\u0940 \\u092D\\u093E\\u0937\\u093E \\u092E\\u0947\\u0902 \\u092A\\u093E\\u0920 \\u0915\\u0940 \\u092D\\u093E\\u0935\\u0928\\u093E \\u0915\\u093E \\u0935\\u093F\\u0936\\u094D\\u0932\\u0947\\u0937\\u0923 \\u0915\\u0930\\u0947\\u0902\\u0964\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/PDFCard/index.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 29\n                                    }, this),\n                                    \"\\u091F\\u0947\\u0915\\u094D\\u0938\\u094D\\u091F \\u0907\\u0928\\u092A\\u0941\\u091F \\u0915\\u0930\\u0915\\u0947 \\u0938\\u0947\\u0902\\u091F\\u0940\\u092E\\u0947\\u0902\\u091F \\u0930\\u093F\\u092A\\u094B\\u0930\\u094D\\u091F \\u0924\\u0948\\u092F\\u093E\\u0930 \\u0915\\u0940 \\u091C\\u093E \\u0938\\u0915\\u0924\\u0940 \\u0939\\u0948\\u0964 \\u0928\\u0940\\u091A\\u0947 \\u0938\\u093E\\u0926\\u093E \\u092A\\u093E\\u0920 \\u0926\\u0930\\u094D\\u091C \\u0915\\u0930\\u0947\\u0902\\u0964\"\n                                ]\n                            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    \"Analyze the sentiment of the text from images and PDF in Hindi and English Language.\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/PDFCard/index.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 33\n                                    }, this),\n                                    \"Sentiment report can be generated by inputting the text. Enter the plain text below.\"\n                                ]\n                            }, void 0, true)\n                        }, void 0, false, {\n                            fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/PDFCard/index.js\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/PDFCard/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Form, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Form.Group, {\n                            className: \"mb-3\",\n                            controlId: \"exampleForm.ControlTextarea1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Form.Control, {\n                                as: \"textarea\",\n                                rows: 8,\n                                className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_6___default().form_text),\n                                value: text,\n                                onChange: function(e) {\n                                    setText(e.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/PDFCard/index.js\",\n                                lineNumber: 78,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/PDFCard/index.js\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/PDFCard/index.js\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/PDFCard/index.js\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                variant: \"primary\",\n                                type: \"submit\",\n                                className: (_Service_module_css__WEBPACK_IMPORTED_MODULE_6___default().submit),\n                                onClick: generateReport,\n                                children: locale === \"hi-HI\" ? \"\\u0930\\u093F\\u092A\\u094B\\u0930\\u094D\\u091F \\u092C\\u0928\\u093E\\u0913\" : \"Generate Report\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/PDFCard/index.js\",\n                                lineNumber: 87,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                type: \"submit\",\n                                className: \"\".concat((_Service_module_css__WEBPACK_IMPORTED_MODULE_6___default().submit), \" \").concat((_Service_module_css__WEBPACK_IMPORTED_MODULE_6___default().clear)),\n                                onClick: function() {\n                                    setResult(\"\");\n                                    setText(\"\");\n                                },\n                                children: locale === \"hi-HI\" ? \"\\u0930\\u093F\\u092A\\u094B\\u0930\\u094D\\u091F \\u0938\\u093E\\u092B\\u093C \\u0915\\u0930\\u0947\\u0902\" : \"Clear Report\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/PDFCard/index.js\",\n                                lineNumber: 94,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/PDFCard/index.js\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, this),\n                    result1.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ReportText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            locale: locale,\n                            result: result1\n                        }, void 0, false, {\n                            fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/PDFCard/index.js\",\n                            lineNumber: 109,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/PDFCard/index.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/components/PDFCard/index.js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n};\n_s(ServiceCard, \"RbrO7EvaECjsVDQyExqmmCjcan0=\");\n_c = ServiceCard;\nvar _c;\n$RefreshReg$(_c, \"ServiceCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1BERkNhcmQvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEI7QUFDRTtBQUNGO0FBRWE7QUFDNkI7QUFDdEM7QUFDTTs7QUFFdkIsU0FBU1csV0FBVyxDQUFDLEtBQVUsRUFBRTtRQUFaLE1BQVEsR0FBUixLQUFVLENBQVJDLE1BQU07O0lBQ3hDLElBQU1DLElBQUksR0FBR0QsTUFBTSxLQUFLLE9BQU8sR0FBSSxRQUFNLEdBQUssR0FBQztJQUMvQyxJQUE0QkgsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVg1QyxPQVdpQixHQUFlQSxHQUFZLEdBQTNCLEVBWGpCLFNBVzRCLEdBQUlBLEdBQVksR0FBaEI7SUFDeEIsSUFBd0JBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFaeEMsSUFZZSxHQUFhQSxJQUFZLEdBQXpCLEVBWmYsT0FZd0IsR0FBSUEsSUFBWSxHQUFoQjtJQUVwQixJQUFNUyxjQUFjLEdBQUcsV0FBTTtRQUN6Qiw0Q0FBNEM7UUFDNUMsSUFBSUosTUFBTSxHQUFHLEVBQUU7UUFDZixJQUFJSyxPQUFPLEdBQUc7WUFDVixjQUFjLEVBQUUsSUFBSTtZQUNwQixXQUFXLEVBQUU7Z0JBQ1QsZUFBZSxFQUFFLG1CQUFtQjtnQkFDcEMsZUFBZSxFQUFFLG9CQUFvQjtnQkFDckMsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsWUFBWSxFQUFFLHFCQUFxQjthQUN0QztZQUNELFVBQVUsRUFBRTtnQkFDUjtvQkFDSSxNQUFNLEVBQUUsd0JBQXdCO29CQUNoQyxNQUFNLEVBQUUsY0FBYztvQkFDdEIsT0FBTyxFQUFFLGtCQUFrQjtpQkFDOUI7Z0JBQ0Q7b0JBQ0ksTUFBTSxFQUFFLGdCQUFnQjtvQkFDeEIsTUFBTSxFQUFFLE1BQU07b0JBQ2QsT0FBTyxFQUFFLGtCQUFrQjtpQkFDOUI7YUFDSjtTQUNKO1FBRURMLE1BQU0sR0FBR00sSUFBSSxDQUFDQyxTQUFTLENBQUNGLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsTUFBTSxDQUFDLENBQUM7UUFDcEJDLFNBQVMsQ0FBQ0QsTUFBTSxDQUFDLENBQUM7S0FDckI7SUFFRCxxQkFDSSw4REFBQ1UsS0FBRztRQUFDQyx3QkFBd0I7UUFBQ0MsU0FBUyxFQUFFdkIsc0VBQWdCOzswQkFDckQsOERBQUNDLG1EQUFNO2dCQUFDd0IsRUFBRSxFQUFDLE9BQU87Z0JBQUNDLE1BQU0sRUFBQyxJQUFJO2dCQUFDSCxTQUFTLEVBQUV2QixnRUFBVTswQkFDaEQsNEVBQUNHLHNEQUFTOzhCQUNOLDRFQUFDRCxnREFBRzt3QkFBQ3FCLFNBQVMsRUFBQyxTQUFTO2tDQUNwQiw0RUFBQ3JCLHFEQUFROzRCQUFDMEIsSUFBSSxFQUFFbEIsSUFBSTs0QkFBRWEsU0FBUyxFQUFFdkIscUVBQWU7O2dDQUFFLEdBQUM7Z0NBQy9DUyxNQUFNLEtBQUssT0FBTyxHQUFHLHNDQUFRLEdBQWUsVUFBVTs7Ozs7O2dDQUNsQzs7Ozs7NEJBQ3RCOzs7Ozt3QkFDRTs7Ozs7b0JBQ1A7MEJBQ1QsOERBQUNxQixNQUFJO2dCQUFDUCxTQUFTLEVBQUV2QixpRUFBVzs7a0NBQ3hCLDhEQUFDK0IsSUFBRTt3QkFBQ1IsU0FBUyxFQUFFdkIsa0VBQVk7a0NBRW5CUyxNQUFNLEtBQUssT0FBTyxHQUFHLDJJQUE0QixHQUE4QyxxQ0FBMEI7Ozs7OzRCQUU5RTtrQ0FFbkQsOERBQUN3QixHQUFDO3dCQUFDVixTQUFTLEVBQUV2Qix3RUFBa0I7a0NBQzVCLDRFQUFDbUMsR0FBQztzQ0FFTTFCLE1BQU0sS0FBSyxPQUFPLGlCQUFHOztvQ0FBRSwwWUFFdkI7a0RBQUEsOERBQUMyQixJQUFFOzs7OzRDQUFHO29DQUFBLHdhQUNOOzs0Q0FBRyxpQkFDQzs7b0NBQUUsc0ZBQ0Y7a0RBQUEsOERBQUNBLElBQUU7Ozs7NENBQUc7b0NBQUEsc0ZBQ047OzRDQUFHOzs7OztnQ0FFWDs7Ozs7NEJBQ0o7a0NBQ0osOERBQUNoQyxpREFBSTtrQ0FDRCw0RUFBQ0EsdURBQVU7NEJBQUNtQixTQUFTLEVBQUMsTUFBTTs0QkFBQ2UsU0FBUyxFQUFDLDhCQUE4QjtzQ0FDakUsNEVBQUNsQyx5REFBWTtnQ0FBQ29DLEVBQUUsRUFBQyxVQUFVO2dDQUFDQyxJQUFJLEVBQUUsQ0FBQztnQ0FDbkNsQixTQUFTLEVBQUV2QixzRUFBZ0I7Z0NBQzNCMkMsS0FBSyxFQUFFOUIsSUFBSTtnQ0FDWCtCLFFBQVEsRUFBRSxTQUFDQyxDQUFDLEVBQUs7b0NBQUMvQixPQUFPLENBQUMrQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO2lDQUFDOzs7OztvQ0FDeEM7Ozs7O2dDQUNPOzs7Ozs0QkFDVjtrQ0FDUCw4REFBQ1AsSUFBRTs7Ozs0QkFBRztrQ0FDTiw4REFBQ2YsS0FBRzs7MENBQ0osOERBQUNoQixtREFBTTtnQ0FBQzBDLE9BQU8sRUFBQyxTQUFTO2dDQUNyQkMsSUFBSSxFQUFDLFFBQVE7Z0NBQ2J6QixTQUFTLEVBQUV2QixtRUFBYTtnQ0FDeEJrRCxPQUFPLEVBQUVuQyxjQUFjOzBDQUV0Qk4sTUFBTSxLQUFLLE9BQU8sR0FBRyxxRUFBYyxHQUF5QixpQkFBaUI7Ozs7O29DQUNuRDswQ0FDL0IsOERBQUNKLG1EQUFNO2dDQUNIMkMsSUFBSSxFQUFDLFFBQVE7Z0NBQ2J6QixTQUFTLEVBQUUsRUFBQyxDQUFtQnZCLE1BQVksQ0FBN0JBLG1FQUFhLEVBQUMsR0FBQyxDQUFlLFFBQWJBLGtFQUFZLENBQUU7Z0NBQzdDa0QsT0FBTyxFQUFFLFdBQU07b0NBQ1h0QyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7b0NBQ2RFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztpQ0FDZjswQ0FFQUwsTUFBTSxLQUFLLE9BQU8sR0FBRyw4RkFBbUIsR0FBRyxjQUFjOzs7OztvQ0FDckQ7Ozs7Ozs0QkFDSDtvQkFHRkUsT0FBTSxDQUFDeUMsTUFBTSxLQUFLLENBQUMsaUJBQUcsNklBQUssaUJBQzNCO2tDQUNBLDRFQUFDN0MsbURBQVU7NEJBQUNFLE1BQU0sRUFBRUEsTUFBTTs0QkFBRUUsTUFBTSxFQUFFQSxPQUFNOzs7OztnQ0FBSTtxQ0FDM0M7Ozs7OztvQkFFSjs7Ozs7O1lBQ0wsQ0FDUjtDQUNMO0dBekd1QkgsV0FBVztBQUFYQSxLQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvUERGQ2FyZC9pbmRleC5qcz8xMmU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU2VydmljZS5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IE5hdmJhciwgTmF2LCBDb250YWluZXIsIEZvcm0sIEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFJlcG9ydFRleHQgZnJvbSAnLi4vUmVwb3J0VGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZUNhcmQoeyBsb2NhbGUgfSkge1xuICAgIGNvbnN0IGhvbWUgPSBsb2NhbGUgPT09IFwiaGktSElcIiA/IGAvaGktSElgIDogYC9gO1xuICAgIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICBjb25zdCBnZW5lcmF0ZVJlcG9ydCA9ICgpID0+IHtcbiAgICAgICAgLy8gVE9ETzogcmVxdWlyZWQgdG8gaW50ZWdyYXRlIHdpdGggYmFja2VuZCBcbiAgICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIGxldCBqc29uUmVzID0ge1xuICAgICAgICAgICAgXCJsYW5ndWFnZUNvZGVcIjogXCJlblwiLFxuICAgICAgICAgICAgXCJzZW50aW1lbnRcIjoge1xuICAgICAgICAgICAgICAgIFwicG9zaXRpdmVTY29yZVwiOiAwLjIwOTQ2MzczMDQ1NDQ0NDg5LFxuICAgICAgICAgICAgICAgIFwibmVnYXRpdmVTY29yZVwiOiA2Ljc0Mjg1MTY5MjI1MTg2MUUtNCxcbiAgICAgICAgICAgICAgICBcIm5ldXRyYWxTY29yZVwiOiAwLjc4OTgyMzIzNDA4MTI2ODMsXG4gICAgICAgICAgICAgICAgXCJtaXhlZFNjb3JlXCI6IDMuODc5MzEwNjc5NjIxOTk0NUUtNVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZW50aXRpZXNcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiRGV1dHNjaGUgQmFuayBvZiBJbmRpYVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJPUkdBTklaQVRJT05cIixcbiAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiAwLjk0OTAxNjkyODY3Mjc5MDVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwic3VtbWVyIG9mIDIwMjJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiREFURVwiLFxuICAgICAgICAgICAgICAgICAgICBcInNjb3JlXCI6IDAuODgyODIwODQ0NjUwMjY4NlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KGpzb25SZXMpOyBcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmcgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxOYXZiYXIgYmc9XCJsaWdodFwiIGV4cGFuZD1cImxnXCIgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1lLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPXtob21lfSBjbGFzc05hbWU9e3N0eWxlcy5uYXZfbGlua30+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGUgPT09IFwiaGktSElcIiA/IFwi4KS54KWL4KSu4KSq4KWH4KScXCIgOiBcIkhvbWVwYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH08L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvTmF2YmFyPlxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlID09PSBcImhpLUhJXCIgPyBcIuCkteClgeCksuCljeCkqyDgpKbgpYfgpJbgpYfgpIIg8J+Qujog4KSq4KS+4KSgIOCksOCkv+CkquCli+CksOCljeCkn1wiIDogXCJXYXRjaCBXb2xmIPCfkLo6IFBERiBSZXBvcnRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9oMT5cblxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgPGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlID09PSBcImhpLUhJXCIgPyA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDgpJvgpLXgpL/gpK/gpYvgpIIg4KSU4KSwIOCkquClgOCkoeClgOCkj+CkqyDgpLjgpYcg4KS54KS/4KSC4KSm4KWAIOCklOCksCDgpIXgpILgpJfgpY3gpLDgpYfgpJzgpYAg4KSt4KS+4KS34KS+IOCkruClh+CkgiDgpKrgpL7gpKAg4KSV4KWAIOCkreCkvuCkteCkqOCkviDgpJXgpL4g4KS14KS/4KS24KWN4KSy4KWH4KS34KSjIOCkleCksOClh+CkguClpFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPuCkn+Clh+CkleCljeCkuOCljeCknyDgpIfgpKjgpKrgpYHgpJ8g4KSV4KSw4KSV4KWHIOCkuOClh+CkguCkn+ClgOCkruClh+CkguCknyDgpLDgpL/gpKrgpYvgpLDgpY3gpJ8g4KSk4KWI4KSv4KS+4KSwIOCkleClgCDgpJzgpL4g4KS44KSV4KSk4KWAIOCkueCliOClpCDgpKjgpYDgpJrgpYcg4KS44KS+4KSm4KS+IOCkquCkvuCkoCDgpKbgpLDgpY3gpJwg4KSV4KSw4KWH4KSC4KWkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5BbmFseXplIHRoZSBzZW50aW1lbnQgb2YgdGhlIHRleHQgZnJvbSBpbWFnZXMgYW5kIFBERiBpbiBIaW5kaSBhbmQgRW5nbGlzaCBMYW5ndWFnZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+U2VudGltZW50IHJlcG9ydCBjYW4gYmUgZ2VuZXJhdGVkIGJ5IGlucHV0dGluZyB0aGUgdGV4dC4gRW50ZXIgdGhlIHBsYWluIHRleHQgYmVsb3cuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZXhhbXBsZUZvcm0uQ29udHJvbFRleHRhcmVhMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBhcz1cInRleHRhcmVhXCIgcm93cz17OH0gXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX3RleHR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2dlbmVyYXRlUmVwb3J0fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2xvY2FsZSA9PT0gXCJoaS1ISVwiID8gXCLgpLDgpL/gpKrgpYvgpLDgpY3gpJ8g4KSs4KSo4KS+4KSTXCIgOiBcIkdlbmVyYXRlIFJlcG9ydFwifVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zdWJtaXR9ICR7c3R5bGVzLmNsZWFyfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdChcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRleHQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bG9jYWxlID09PSBcImhpLUhJXCIgPyBcIuCksOCkv+CkquCli+CksOCljeCknyDgpLjgpL7gpKvgpLwg4KSV4KSw4KWH4KSCXCIgOiBcIkNsZWFyIFJlcG9ydFwifVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQubGVuZ3RoID09PSAwID8gPD48Lz4gOiBcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPFJlcG9ydFRleHQgbG9jYWxlPXtsb2NhbGV9IHJlc3VsdD17cmVzdWx0fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsIkxpbmsiLCJzdHlsZXMiLCJOYXZiYXIiLCJOYXYiLCJDb250YWluZXIiLCJGb3JtIiwiQnV0dG9uIiwidXNlU3RhdGUiLCJSZXBvcnRUZXh0IiwiU2VydmljZUNhcmQiLCJsb2NhbGUiLCJob21lIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwidGV4dCIsInNldFRleHQiLCJnZW5lcmF0ZVJlcG9ydCIsImpzb25SZXMiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsImRpdiIsInN1cHByZXNzSHlkcmF0aW9uV2FybmluZyIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImJnIiwiZXhwYW5kIiwibmF2IiwiaHJlZiIsIm5hdl9saW5rIiwibWFpbiIsImgxIiwidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iLCJpIiwiYnIiLCJHcm91cCIsImNvbnRyb2xJZCIsIkNvbnRyb2wiLCJhcyIsInJvd3MiLCJmb3JtX3RleHQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhcmlhbnQiLCJ0eXBlIiwic3VibWl0Iiwib25DbGljayIsImNsZWFyIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/PDFCard/index.js\n");

/***/ })

});