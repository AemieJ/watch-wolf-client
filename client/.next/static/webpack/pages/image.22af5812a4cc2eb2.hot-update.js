"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/image",{

/***/ "./pages/image.js":
/*!************************!*\
  !*** ./pages/image.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Text; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_LoginCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/LoginCard */ \"./pages/components/LoginCard/index.js\");\n/* harmony import */ var _components_PDFCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/PDFCard */ \"./pages/components/PDFCard/index.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction Text() {\n    _s();\n    var ref = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(), locale = ref.locale, locales = ref.locales, asPath = ref.asPath;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true), isAuth = ref1[0], setAuth = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        if (true) {\n            var item = localStorage.getItem(\"auth\");\n            if (item === null || item === undefined) setAuth(false);\n            if (item === \"1\") setAuth(true);\n            if (item === \"0\") setAuth(false);\n        }\n    }, []);\n    return isAuth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageCard, {\n        locale: locale\n    }, void 0, false, {\n        fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/image.js\",\n        lineNumber: 24,\n        columnNumber: 10\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoginCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        locale: locale,\n        service: \"pdf\"\n    }, void 0, false, {\n        fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/image.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n};\n_s(Text, \"sHTZiuEQ+u8f9re9Ivj8GS0qJXA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Text;\nvar _c;\n$RefreshReg$(_c, \"Text\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbWFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEI7QUFDRTtBQUNGO0FBRVc7QUFDSTtBQUNHO0FBQ0o7OztBQUUzQixTQUFTUSxJQUFJLEdBQUc7O0lBQzNCLElBQW9DTCxHQUFXLEdBQVhBLHNEQUFTLEVBQUUsRUFBdkNNLE1BQU0sR0FBc0JOLEdBQVcsQ0FBdkNNLE1BQU0sRUFBRUMsT0FBTyxHQUFhUCxHQUFXLENBQS9CTyxPQUFPLEVBQUVDLE1BQU0sR0FBS1IsR0FBVyxDQUF0QlEsTUFBTTtJQUMvQixJQUEwQk4sSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQVg1QyxNQVdpQixHQUFhQSxJQUFjLEdBQTNCLEVBWGpCLE9BVzBCLEdBQUlBLElBQWMsR0FBbEI7SUFFdEJELGdEQUFTLENBQUMsV0FBTTtRQUNaLElBQUksSUFBNkIsRUFBRTtZQUMvQixJQUFNVSxJQUFJLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUN6QyxJQUFJRixJQUFJLEtBQUssSUFBSSxJQUFJQSxJQUFJLEtBQUtHLFNBQVMsRUFBRUosT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hELElBQUlDLElBQUksS0FBSyxHQUFHLEVBQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxJQUFJQyxJQUFJLEtBQUssR0FBRyxFQUFFRCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEM7S0FDSixFQUFFLEVBQUUsQ0FBQztJQUVOLE9BQU9ELE1BQU0saUJBQ1IsOERBQUNNLFNBQVM7UUFBQ1QsTUFBTSxFQUFFQSxNQUFNOzs7OztZQUFJLGlCQUU5Qiw4REFBQ0gsNkRBQVM7UUFBQ0csTUFBTSxFQUFFQSxNQUFNO1FBQUVVLE9BQU8sRUFBQyxLQUFLOzs7OztZQUFHLENBQzdDO0NBQ0w7R0FsQnVCWCxJQUFJOztRQUNZTCxrREFBUzs7O0FBRHpCSyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ltYWdlLmpzPzcwYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExvZ2luQ2FyZCBmcm9tIFwiLi9jb21wb25lbnRzL0xvZ2luQ2FyZFwiXG5pbXBvcnQgUERGQ2FyZCBmcm9tIFwiLi9jb21wb25lbnRzL1BERkNhcmRcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0KCkge1xuICAgIGNvbnN0IHsgbG9jYWxlLCBsb2NhbGVzLCBhc1BhdGggfSA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgW2lzQXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoXCIpXG4gICAgICAgICAgICBpZiAoaXRlbSA9PT0gbnVsbCB8fCBpdGVtID09PSB1bmRlZmluZWQpIHNldEF1dGgoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IFwiMVwiKSBzZXRBdXRoKHRydWUpO1xuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IFwiMFwiKSBzZXRBdXRoKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIGlzQXV0aCA/IChcbiAgICAgICAgIDxJbWFnZUNhcmQgbG9jYWxlPXtsb2NhbGV9IC8+XG4gICAgKSA6IChcbiAgICAgICAgPExvZ2luQ2FyZCBsb2NhbGU9e2xvY2FsZX0gc2VydmljZT1cInBkZlwiIC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgfSxcbiAgICB9O1xufSJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJMaW5rIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMb2dpbkNhcmQiLCJQREZDYXJkIiwiVGV4dCIsImxvY2FsZSIsImxvY2FsZXMiLCJhc1BhdGgiLCJpc0F1dGgiLCJzZXRBdXRoIiwiaXRlbSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJJbWFnZUNhcmQiLCJzZXJ2aWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/image.js\n");

/***/ })

});