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

/***/ "./pages/text.js":
/*!***********************!*\
  !*** ./pages/text.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Text; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_LoginCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/LoginCard */ \"./pages/components/LoginCard/index.js\");\n/* harmony import */ var _components_ServiceCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ServiceCard */ \"./pages/components/ServiceCard/index.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction Text() {\n    _s();\n    var ref = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(), locale = ref.locale, locales = ref.locales, asPath = ref.asPath;\n    var getFromStorage = function(key) {\n        if (true) {\n            var item = localStorage.getItem(key);\n            if (item === null || item === undefined) return false;\n            if (item === \"1\") return true;\n            if (item === \"0\") return false;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: getFromStorage(\"auth\") ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ServiceCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            locale: locale\n        }, void 0, false, {\n            fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/text.js\",\n            lineNumber: 24,\n            columnNumber: 42\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoginCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            locale: locale,\n            service: \"text\"\n        }, void 0, false, {\n            fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/text.js\",\n            lineNumber: 24,\n            columnNumber: 76\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/text.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n};\n_s(Text, \"lwgbXI8xkPgKeaWVmUiXvuBmGL0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Text;\nvar _c;\n$RefreshReg$(_c, \"Text\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEI7QUFDRTtBQUNGO0FBRXNCO0FBQ0o7QUFDSTs7O0FBRW5DLFNBQVNPLElBQUksR0FBRzs7SUFDM0IsSUFBb0NKLEdBQVcsR0FBWEEsc0RBQVMsRUFBRSxFQUF2Q0ssTUFBTSxHQUFzQkwsR0FBVyxDQUF2Q0ssTUFBTSxFQUFFQyxPQUFPLEdBQWFOLEdBQVcsQ0FBL0JNLE9BQU8sRUFBRUMsTUFBTSxHQUFLUCxHQUFXLENBQXRCTyxNQUFNO0lBRS9CLElBQU1DLGNBQWMsR0FBRyxTQUFDQyxHQUFHLEVBQUs7UUFDNUIsSUFBSSxJQUE2QixFQUFFO1lBQy9CLElBQU1DLElBQUksR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUNILEdBQUcsQ0FBQztZQUN0QyxJQUFJQyxJQUFJLEtBQUssSUFBSSxJQUFJQSxJQUFJLEtBQUtHLFNBQVMsRUFBRSxPQUFPLEtBQUssQ0FBQztZQUN0RCxJQUFJSCxJQUFJLEtBQUssR0FBRyxFQUFFLE9BQU8sSUFBSSxDQUFDO1lBQzlCLElBQUlBLElBQUksS0FBSyxHQUFHLEVBQUUsT0FBTyxLQUFLLENBQUM7U0FDbEM7S0FDSjtJQUVELHFCQUNJLDhEQUFDSSxLQUFHO2tCQUVJTixjQUFjLENBQUMsTUFBTSxDQUFDLGlCQUFHLDhEQUFDTCwrREFBVztZQUFDRSxNQUFNLEVBQUVBLE1BQU07Ozs7O2dCQUFJLGlCQUFHLDhEQUFDSCw2REFBUztZQUFDRyxNQUFNLEVBQUVBLE1BQU07WUFBRVUsT0FBTyxFQUFDLE1BQU07Ozs7O2dCQUFHOzs7OztZQUl6RyxDQUNSO0NBQ0w7R0FyQnVCWCxJQUFJOztRQUNZSixrREFBUzs7O0FBRHpCSSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RleHQuanM/MTA1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHVzZUVmZmVjdCB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgTG9naW5DYXJkIGZyb20gXCIuL2NvbXBvbmVudHMvTG9naW5DYXJkXCJcbmltcG9ydCBTZXJ2aWNlQ2FyZCBmcm9tIFwiLi9jb21wb25lbnRzL1NlcnZpY2VDYXJkXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dCgpIHtcbiAgICBjb25zdCB7IGxvY2FsZSwgbG9jYWxlcywgYXNQYXRoIH0gPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3QgZ2V0RnJvbVN0b3JhZ2UgPSAoa2V5KSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcbiAgICAgICAgICAgIGlmIChpdGVtID09PSBudWxsIHx8IGl0ZW0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IFwiMVwiKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChpdGVtID09PSBcIjBcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBnZXRGcm9tU3RvcmFnZShcImF1dGhcIikgPyA8U2VydmljZUNhcmQgbG9jYWxlPXtsb2NhbGV9IC8+IDogPExvZ2luQ2FyZCBsb2NhbGU9e2xvY2FsZX0gc2VydmljZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgfSxcbiAgICB9O1xufSJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJMaW5rIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiTG9naW5DYXJkIiwiU2VydmljZUNhcmQiLCJUZXh0IiwibG9jYWxlIiwibG9jYWxlcyIsImFzUGF0aCIsImdldEZyb21TdG9yYWdlIiwia2V5IiwiaXRlbSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJkaXYiLCJzZXJ2aWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/text.js\n");

/***/ })

});