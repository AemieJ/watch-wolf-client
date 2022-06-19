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
exports.id = "pages/api/generateTweet";
exports.ids = ["pages/api/generateTweet"];
exports.modules = {

/***/ "(api)/./config/server.js":
/*!**************************!*\
  !*** ./config/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"server\": () => (/* binding */ server)\n/* harmony export */ });\nconst dev = \"development\";\nconst server = dev == \"development\" ? \"http://localhost:8080\" : \"https://microsoft-engage-21.vercel.app\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvc2VydmVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxHQUFHLEdBQUcsYUFBYTtBQUVsQixNQUFNQyxNQUFNLEdBQ2pCRCxHQUFHLElBQUksYUFBYSxHQUNoQix1QkFBdUIsR0FDdkIsd0NBQXdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29uZmlnL3NlcnZlci5qcz83MzY0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRldiA9IFwiZGV2ZWxvcG1lbnRcIlxuXG5leHBvcnQgY29uc3Qgc2VydmVyID1cbiAgZGV2ID09IFwiZGV2ZWxvcG1lbnRcIlxuICAgID8gXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIlxuICAgIDogXCJodHRwczovL21pY3Jvc29mdC1lbmdhZ2UtMjEudmVyY2VsLmFwcFwiIl0sIm5hbWVzIjpbImRldiIsInNlcnZlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./config/server.js\n");

/***/ }),

/***/ "(api)/./pages/api/generateTweet.js":
/*!************************************!*\
  !*** ./pages/api/generateTweet.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_server_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/server.js */ \"(api)/./config/server.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    let body = JSON.parse(req.body);\n    let base64 = body.base64;\n    let tweet = body.tweet;\n    let requestOptions = {\n        method: \"POST\",\n        headers: {\n            \"Authorization\": `Basic ${base64}`,\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            \"tweetId\": tweet\n        }),\n        redirect: \"follow\"\n    };\n    try {\n        let response = await fetch(`${_config_server_js__WEBPACK_IMPORTED_MODULE_0__.server}/api/examine/twitter`, requestOptions);\n        let data = await response.json();\n        res.status(200).json({\n            data: JSON.stringify(data),\n            err: null\n        });\n    } catch (err) {\n        res.status(500).json({\n            data: null,\n            err: \"Generation unsuccessful\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGVUd2VldC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUErQztBQUUvQyxpRUFBZSxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUMvQixJQUFJQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSixHQUFHLENBQUNFLElBQUksQ0FBQztJQUMvQixJQUFJRyxNQUFNLEdBQUdILElBQUksQ0FBQ0csTUFBTTtJQUN4QixJQUFJQyxLQUFLLEdBQUdKLElBQUksQ0FBQ0ksS0FBSztJQUV0QixJQUFJQyxjQUFjLEdBQUc7UUFDakJDLE1BQU0sRUFBRSxNQUFNO1FBQ2RDLE9BQU8sRUFBRTtZQUNMLGVBQWUsRUFBRSxDQUFDLE1BQU0sRUFBRUosTUFBTSxDQUFDLENBQUM7WUFDbEMsY0FBYyxFQUFFLGtCQUFrQjtTQUNyQztRQUNESCxJQUFJLEVBQUVDLElBQUksQ0FBQ08sU0FBUyxDQUFDO1lBQ2pCLFNBQVMsRUFBRUosS0FBSztTQUNuQixDQUFDO1FBQ0ZLLFFBQVEsRUFBRSxRQUFRO0tBQ3JCO0lBRUQsSUFBSTtRQUNBLElBQUlDLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsQ0FBQyxFQUFFZCxxREFBTSxDQUFDLG9CQUFvQixDQUFDLEVBQUVRLGNBQWMsQ0FBQztRQUMzRSxJQUFJTyxJQUFJLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFJLEVBQUU7UUFDaENkLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRCxJQUFJLENBQUM7WUFBRUQsSUFBSSxFQUFFWCxJQUFJLENBQUNPLFNBQVMsQ0FBQ0ksSUFBSSxDQUFDO1lBQUVHLEdBQUcsRUFBRSxJQUFJO1NBQUUsQ0FBQyxDQUFDO0tBQ25FLENBQUMsT0FBT0EsR0FBRyxFQUFFO1FBQ1ZoQixHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0QsSUFBSSxDQUFDO1lBQUVELElBQUksRUFBRSxJQUFJO1lBQUVHLEdBQUcsRUFBRSx5QkFBeUI7U0FBQyxDQUFDO0tBQ3RFO0NBR0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hcGkvZ2VuZXJhdGVUd2VldC5qcz9hNTQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlcnZlciB9IGZyb20gXCIuLi8uLi9jb25maWcvc2VydmVyLmpzXCJcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgbGV0IGJvZHkgPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcbiAgICBsZXQgYmFzZTY0ID0gYm9keS5iYXNlNjQ7XG4gICAgbGV0IHR3ZWV0ID0gYm9keS50d2VldDtcblxuICAgIGxldCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmFzaWMgJHtiYXNlNjR9YCxcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIFwidHdlZXRJZFwiOiB0d2VldFxuICAgICAgICB9KSxcbiAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnXG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3NlcnZlcn0vYXBpL2V4YW1pbmUvdHdpdHRlcmAsIHJlcXVlc3RPcHRpb25zKTsgXG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCBlcnI6IG51bGwgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZGF0YTogbnVsbCwgZXJyOiAnR2VuZXJhdGlvbiB1bnN1Y2Nlc3NmdWwnfSlcbiAgICB9XG5cblxufSJdLCJuYW1lcyI6WyJzZXJ2ZXIiLCJyZXEiLCJyZXMiLCJib2R5IiwiSlNPTiIsInBhcnNlIiwiYmFzZTY0IiwidHdlZXQiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJzdHJpbmdpZnkiLCJyZWRpcmVjdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInN0YXR1cyIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generateTweet.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generateTweet.js"));
module.exports = __webpack_exports__;

})();