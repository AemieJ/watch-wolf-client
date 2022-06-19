/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/text",{

/***/ "./pages/components/ServiceCard/index.js":
/*!***********************************************!*\
  !*** ./pages/components/ServiceCard/index.js ***!
  \***********************************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/text.js":
/*!***********************!*\
  !*** ./pages/text.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Text; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_LoginCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/LoginCard */ \"./pages/components/LoginCard/index.js\");\n/* harmony import */ var _components_ServiceCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ServiceCard */ \"./pages/components/ServiceCard/index.js\");\n/* harmony import */ var _components_ServiceCard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_ServiceCard__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction Text() {\n    _s();\n    var ref = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(), locale = ref.locale, locales = ref.locales, asPath = ref.asPath;\n    var getFromStorage = function(key) {\n        if (true) {\n            var item = localStorage.getItem(key);\n            if (item === null || item === undefined) return false;\n            if (item === \"1\") return true;\n            if (item === \"0\") return false;\n        }\n    };\n    console.log(getFromStorage(\"auth\"));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: getFromStorage(\"auth\") === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_ServiceCard__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {\n                fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/text.js\",\n                lineNumber: 28,\n                columnNumber: 21\n            }, this)\n        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoginCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                locale: locale,\n                service: \"text\"\n            }, void 0, false, {\n                fileName: \"/Users/aemiej/Documents/github/hackmanthon/client/pages/text.js\",\n                lineNumber: 31,\n                columnNumber: 17\n            }, this)\n        }, void 0, false)\n    }, void 0, false);\n};\n_s(Text, \"lwgbXI8xkPgKeaWVmUiXvuBmGL0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Text;\nvar _c;\n$RefreshReg$(_c, \"Text\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTRCO0FBQ0U7QUFDRjtBQUVzQjtBQUNKO0FBQ0k7QUFDSjs7O0FBRS9CLFNBQVNRLElBQUksR0FBRzs7SUFDM0IsSUFBb0NMLEdBQVcsR0FBWEEsc0RBQVMsRUFBRSxFQUF2Q00sTUFBTSxHQUFzQk4sR0FBVyxDQUF2Q00sTUFBTSxFQUFFQyxPQUFPLEdBQWFQLEdBQVcsQ0FBL0JPLE9BQU8sRUFBRUMsTUFBTSxHQUFLUixHQUFXLENBQXRCUSxNQUFNO0lBRS9CLElBQU1DLGNBQWMsR0FBRyxTQUFDQyxHQUFHLEVBQUs7UUFDNUIsSUFBSSxJQUE2QixFQUFFO1lBQy9CLElBQU1DLElBQUksR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUNILEdBQUcsQ0FBQztZQUN0QyxJQUFJQyxJQUFJLEtBQUssSUFBSSxJQUFJQSxJQUFJLEtBQUtHLFNBQVMsRUFBRSxPQUFPLEtBQUssQ0FBQztZQUN0RCxJQUFJSCxJQUFJLEtBQUssR0FBRyxFQUFFLE9BQU8sSUFBSSxDQUFDO1lBQzlCLElBQUlBLElBQUksS0FBSyxHQUFHLEVBQUUsT0FBTyxLQUFLLENBQUM7U0FDbEM7S0FDSjtJQUVESSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLHFCQUNJO2tCQUVJQSxjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxpQkFDM0I7c0JBQ0ksNEVBQUNOLGdFQUFXOzs7O29CQUFHO3lCQUNoQixpQkFDSjtzQkFDQyw0RUFBQ0QsNkRBQVM7Z0JBQUNJLE1BQU0sRUFBRUEsTUFBTTtnQkFBRVcsT0FBTyxFQUFDLE1BQU07Ozs7O29CQUFHO3lCQUM3QztxQkFFSixDQUNMO0NBQ0w7R0ExQnVCWixJQUFJOztRQUNZTCxrREFBUzs7O0FBRHpCSyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RleHQuanM/MTA1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHVzZUVmZmVjdCB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgTG9naW5DYXJkIGZyb20gXCIuL2NvbXBvbmVudHMvTG9naW5DYXJkXCJcbmltcG9ydCBTZXJ2aWNlQ2FyZCBmcm9tIFwiLi9jb21wb25lbnRzL1NlcnZpY2VDYXJkXCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9UZXh0Lm1vZHVsZS5jc3NcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0KCkgeyBcbiAgICBjb25zdCB7IGxvY2FsZSwgbG9jYWxlcywgYXNQYXRoIH0gPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3QgZ2V0RnJvbVN0b3JhZ2UgPSAoa2V5KSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcbiAgICAgICAgICAgIGlmIChpdGVtID09PSBudWxsIHx8IGl0ZW0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IFwiMVwiKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChpdGVtID09PSBcIjBcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coZ2V0RnJvbVN0b3JhZ2UoXCJhdXRoXCIpKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGdldEZyb21TdG9yYWdlKFwiYXV0aFwiKSA9PT0gdHJ1ZSA/XG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPFNlcnZpY2VDYXJkIC8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgOiA8PlxuICAgICAgICAgICAgICAgIDxMb2dpbkNhcmQgbG9jYWxlPXtsb2NhbGV9IHNlcnZpY2U9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICB9XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICB9LFxuICAgIH07XG4gIH0iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwiTGluayIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIkxvZ2luQ2FyZCIsIlNlcnZpY2VDYXJkIiwic3R5bGVzIiwiVGV4dCIsImxvY2FsZSIsImxvY2FsZXMiLCJhc1BhdGgiLCJnZXRGcm9tU3RvcmFnZSIsImtleSIsIml0ZW0iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsInNlcnZpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/text.js\n");

/***/ })

});