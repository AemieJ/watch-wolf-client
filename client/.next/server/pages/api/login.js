"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "(api)/./config/server.js":
/*!**************************!*\
  !*** ./config/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"server\": () => (/* binding */ server)\n/* harmony export */ });\nconst dev = \"development\";\nconst server = dev == \"development\" ? \"http://localhost:8080\" : \"https://microsoft-engage-21.vercel.app\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvc2VydmVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxHQUFHLEdBQUcsYUFBYTtBQUVsQixNQUFNQyxNQUFNLEdBQ2pCRCxHQUFHLElBQUksYUFBYSxHQUNoQix1QkFBdUIsR0FDdkIsd0NBQXdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29uZmlnL3NlcnZlci5qcz83MzY0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRldiA9IFwiZGV2ZWxvcG1lbnRcIlxuXG5leHBvcnQgY29uc3Qgc2VydmVyID1cbiAgZGV2ID09IFwiZGV2ZWxvcG1lbnRcIlxuICAgID8gXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIlxuICAgIDogXCJodHRwczovL21pY3Jvc29mdC1lbmdhZ2UtMjEudmVyY2VsLmFwcFwiIl0sIm5hbWVzIjpbImRldiIsInNlcnZlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./config/server.js\n");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_server_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/server.js */ \"(api)/./config/server.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    let base64 = req.body;\n    let requestOptions = {\n        method: \"GET\",\n        headers: {\n            \"Authorization\": `Basic ${base64}`\n        },\n        redirect: \"follow\"\n    };\n    try {\n        let response = await fetch(`${_config_server_js__WEBPACK_IMPORTED_MODULE_0__.server}/api/auth/login`, requestOptions);\n        res.status(200).json({\n            data: \"Login successful\",\n            err: null\n        });\n    } catch (err) {\n        res.status(200).json({\n            data: null,\n            err: \"Login unsuccessful\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0M7QUFFL0MsaUVBQWUsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDL0IsSUFBSUMsTUFBTSxHQUFHRixHQUFHLENBQUNHLElBQUk7SUFFckIsSUFBSUMsY0FBYyxHQUFHO1FBQ2pCQyxNQUFNLEVBQUUsS0FBSztRQUNiQyxPQUFPLEVBQUU7WUFDTCxlQUFlLEVBQUUsQ0FBQyxNQUFNLEVBQUVKLE1BQU0sQ0FBQyxDQUFDO1NBQ3JDO1FBQ0RLLFFBQVEsRUFBRSxRQUFRO0tBQ3JCO0lBRUQsSUFBSTtRQUNBLElBQUlDLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsQ0FBQyxFQUFFVixxREFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFSyxjQUFjLENBQUM7UUFDdEVILEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsSUFBSSxFQUFFLGtCQUFrQjtZQUFFQyxHQUFHLEVBQUUsSUFBSTtTQUFFLENBQUMsQ0FBQztLQUNqRSxDQUFDLE9BQU9BLEdBQUcsRUFBRTtRQUNWWixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLElBQUksRUFBRSxJQUFJO1lBQUVDLEdBQUcsRUFBRSxvQkFBb0I7U0FBRSxDQUFDLENBQUM7S0FDbkU7Q0FFSiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2FwaS9sb2dpbi5qcz9hZTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlcnZlciB9IGZyb20gXCIuLi8uLi9jb25maWcvc2VydmVyLmpzXCJcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgbGV0IGJhc2U2NCA9IHJlcS5ib2R5O1xuXG4gICAgbGV0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJhc2ljICR7YmFzZTY0fWAsIFxuICAgICAgICB9LFxuICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdydcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7c2VydmVyfS9hcGkvYXV0aC9sb2dpbmAsIHJlcXVlc3RPcHRpb25zKTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiBcIkxvZ2luIHN1Y2Nlc3NmdWxcIiwgZXJyOiBudWxsIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IG51bGwsIGVycjogXCJMb2dpbiB1bnN1Y2Nlc3NmdWxcIiB9KTtcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsic2VydmVyIiwicmVxIiwicmVzIiwiYmFzZTY0IiwiYm9keSIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsInJlZGlyZWN0IiwicmVzcG9uc2UiLCJmZXRjaCIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();