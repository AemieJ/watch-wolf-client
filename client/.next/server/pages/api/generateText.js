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
exports.id = "pages/api/generateText";
exports.ids = ["pages/api/generateText"];
exports.modules = {

/***/ "(api)/./config/server.js":
/*!**************************!*\
  !*** ./config/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"server\": () => (/* binding */ server)\n/* harmony export */ });\nconst dev = \"development\";\nconst server = dev == \"development\" ? \"http://localhost:8080\" : \"https://microsoft-engage-21.vercel.app\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvc2VydmVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxHQUFHLEdBQUcsYUFBYTtBQUVsQixNQUFNQyxNQUFNLEdBQ2pCRCxHQUFHLElBQUksYUFBYSxHQUNoQix1QkFBdUIsR0FDdkIsd0NBQXdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29uZmlnL3NlcnZlci5qcz83MzY0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRldiA9IFwiZGV2ZWxvcG1lbnRcIlxuXG5leHBvcnQgY29uc3Qgc2VydmVyID1cbiAgZGV2ID09IFwiZGV2ZWxvcG1lbnRcIlxuICAgID8gXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIlxuICAgIDogXCJodHRwczovL21pY3Jvc29mdC1lbmdhZ2UtMjEudmVyY2VsLmFwcFwiIl0sIm5hbWVzIjpbImRldiIsInNlcnZlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./config/server.js\n");

/***/ }),

/***/ "(api)/./pages/api/generateText.js":
/*!***********************************!*\
  !*** ./pages/api/generateText.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_server_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/server.js */ \"(api)/./config/server.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    let body = JSON.parse(req.body);\n    let base64 = body.base64;\n    let text = body.text;\n    let requestOptions = {\n        method: \"POST\",\n        headers: {\n            \"Authorization\": `Basic ${base64}`,\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(text),\n        redirect: \"follow\"\n    };\n    try {\n        let response = await fetch(`${_config_server_js__WEBPACK_IMPORTED_MODULE_0__.server}/api/examine/text`, requestOptions);\n        let data = await response.json();\n        res.status(200).json({\n            data: JSON.stringify(data),\n            err: null\n        });\n    } catch (err) {\n        res.status(500).json({\n            data: null,\n            err: \"Generation unsuccessful\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGVUZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStDO0FBRS9DLGlFQUFlLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQy9CLElBQUlDLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNKLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDO0lBQy9CLElBQUlHLE1BQU0sR0FBR0gsSUFBSSxDQUFDRyxNQUFNO0lBQ3hCLElBQUlDLElBQUksR0FBR0osSUFBSSxDQUFDSSxJQUFJO0lBRXBCLElBQUlDLGNBQWMsR0FBRztRQUNqQkMsTUFBTSxFQUFFLE1BQU07UUFDZEMsT0FBTyxFQUFFO1lBQ0wsZUFBZSxFQUFFLENBQUMsTUFBTSxFQUFFSixNQUFNLENBQUMsQ0FBQztZQUNsQyxjQUFjLEVBQUUsa0JBQWtCO1NBQ3JDO1FBQ0RILElBQUksRUFBRUMsSUFBSSxDQUFDTyxTQUFTLENBQUNKLElBQUksQ0FBQztRQUMxQkssUUFBUSxFQUFFLFFBQVE7S0FDckI7SUFFRCxJQUFJO1FBQ0EsSUFBSUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLEVBQUVkLHFEQUFNLENBQUMsaUJBQWlCLENBQUMsRUFBRVEsY0FBYyxDQUFDO1FBQ3hFLElBQUlPLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQUksRUFBRTtRQUNoQ2QsR0FBRyxDQUFDZSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNELElBQUksQ0FBQztZQUFFRCxJQUFJLEVBQUVYLElBQUksQ0FBQ08sU0FBUyxDQUFDSSxJQUFJLENBQUM7WUFBRUcsR0FBRyxFQUFFLElBQUk7U0FBRSxDQUFDLENBQUM7S0FDbkUsQ0FBQyxPQUFPQSxHQUFHLEVBQUU7UUFDVmhCLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRCxJQUFJLENBQUM7WUFBRUQsSUFBSSxFQUFFLElBQUk7WUFBRUcsR0FBRyxFQUFFLHlCQUF5QjtTQUFDLENBQUM7S0FDdEU7Q0FHSiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2FwaS9nZW5lcmF0ZVRleHQuanM/MjQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXJ2ZXIgfSBmcm9tIFwiLi4vLi4vY29uZmlnL3NlcnZlci5qc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGxldCBib2R5ID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XG4gICAgbGV0IGJhc2U2NCA9IGJvZHkuYmFzZTY0O1xuICAgIGxldCB0ZXh0ID0gYm9keS50ZXh0O1xuXG4gICAgbGV0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCYXNpYyAke2Jhc2U2NH1gLFxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGV4dCksXG4gICAgICAgIHJlZGlyZWN0OiAnZm9sbG93J1xuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtzZXJ2ZXJ9L2FwaS9leGFtaW5lL3RleHRgLCByZXF1ZXN0T3B0aW9ucyk7IFxuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhKSwgZXJyOiBudWxsIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGRhdGE6IG51bGwsIGVycjogJ0dlbmVyYXRpb24gdW5zdWNjZXNzZnVsJ30pXG4gICAgfVxuXG5cbn0iXSwibmFtZXMiOlsic2VydmVyIiwicmVxIiwicmVzIiwiYm9keSIsIkpTT04iLCJwYXJzZSIsImJhc2U2NCIsInRleHQiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJzdHJpbmdpZnkiLCJyZWRpcmVjdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInN0YXR1cyIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generateText.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generateText.js"));
module.exports = __webpack_exports__;

})();