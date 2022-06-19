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
exports.id = "pages/api/loginWolf";
exports.ids = ["pages/api/loginWolf"];
exports.modules = {

/***/ "(api)/./config/server.js":
/*!**************************!*\
  !*** ./config/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"server\": () => (/* binding */ server)\n/* harmony export */ });\nconst dev = \"development\";\nconst server = dev == \"development\" ? \"http://localhost:8080\" : \"https://microsoft-engage-21.vercel.app\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvc2VydmVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxHQUFHLEdBQUcsYUFBYTtBQUVsQixNQUFNQyxNQUFNLEdBQ2pCRCxHQUFHLElBQUksYUFBYSxHQUNoQix1QkFBdUIsR0FDdkIsd0NBQXdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29uZmlnL3NlcnZlci5qcz83MzY0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRldiA9IFwiZGV2ZWxvcG1lbnRcIlxuXG5leHBvcnQgY29uc3Qgc2VydmVyID1cbiAgZGV2ID09IFwiZGV2ZWxvcG1lbnRcIlxuICAgID8gXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIlxuICAgIDogXCJodHRwczovL21pY3Jvc29mdC1lbmdhZ2UtMjEudmVyY2VsLmFwcFwiIl0sIm5hbWVzIjpbImRldiIsInNlcnZlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./config/server.js\n");

/***/ }),

/***/ "(api)/./pages/api/loginWolf.js":
/*!********************************!*\
  !*** ./pages/api/loginWolf.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_server_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/server.js */ \"(api)/./config/server.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    let base64 = req.body;\n    let requestOptions = {\n        method: \"GET\",\n        headers: {\n            \"Authorization\": `Basic ${base64}`\n        },\n        redirect: \"follow\"\n    };\n    try {\n        let response = await fetch(`${_config_server_js__WEBPACK_IMPORTED_MODULE_0__.server}/api/auth/login`, requestOptions);\n        res.status(200).json({\n            data: \"Login successful\",\n            err: null\n        });\n    } catch (err) {\n        res.status(200).json({\n            data: null,\n            err: \"Login unsuccessful\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW5Xb2xmLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStDO0FBRS9DLGlFQUFlLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQy9CLElBQUlDLE1BQU0sR0FBR0YsR0FBRyxDQUFDRyxJQUFJO0lBRXJCLElBQUlDLGNBQWMsR0FBRztRQUNqQkMsTUFBTSxFQUFFLEtBQUs7UUFDYkMsT0FBTyxFQUFFO1lBQ0wsZUFBZSxFQUFFLENBQUMsTUFBTSxFQUFFSixNQUFNLENBQUMsQ0FBQztTQUNyQztRQUNESyxRQUFRLEVBQUUsUUFBUTtLQUNyQjtJQUVELElBQUk7UUFDQSxJQUFJQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLENBQUMsRUFBRVYscURBQU0sQ0FBQyxlQUFlLENBQUMsRUFBRUssY0FBYyxDQUFDO1FBQ3RFSCxHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLElBQUksRUFBRSxrQkFBa0I7WUFBRUMsR0FBRyxFQUFFLElBQUk7U0FBRSxDQUFDLENBQUM7S0FDakUsQ0FBQyxPQUFPQSxHQUFHLEVBQUU7UUFDVlosR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxJQUFJLEVBQUUsSUFBSTtZQUFFQyxHQUFHLEVBQUUsb0JBQW9CO1NBQUUsQ0FBQyxDQUFDO0tBQ25FO0NBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hcGkvbG9naW5Xb2xmLmpzPzIyZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VydmVyIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy9zZXJ2ZXIuanNcIlxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBsZXQgYmFzZTY0ID0gcmVxLmJvZHk7XG5cbiAgICBsZXQgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmFzaWMgJHtiYXNlNjR9YCwgXG4gICAgICAgIH0sXG4gICAgICAgIHJlZGlyZWN0OiAnZm9sbG93J1xuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtzZXJ2ZXJ9L2FwaS9hdXRoL2xvZ2luYCwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IFwiTG9naW4gc3VjY2Vzc2Z1bFwiLCBlcnI6IG51bGwgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogbnVsbCwgZXJyOiBcIkxvZ2luIHVuc3VjY2Vzc2Z1bFwiIH0pO1xuICAgIH1cblxufSJdLCJuYW1lcyI6WyJzZXJ2ZXIiLCJyZXEiLCJyZXMiLCJiYXNlNjQiLCJib2R5IiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwicmVkaXJlY3QiLCJyZXNwb25zZSIsImZldGNoIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/loginWolf.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/loginWolf.js"));
module.exports = __webpack_exports__;

})();