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
exports.id = "pages/api/generateImage";
exports.ids = ["pages/api/generateImage"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "form-data":
/*!****************************!*\
  !*** external "form-data" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("form-data");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./config/server.js":
/*!**************************!*\
  !*** ./config/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"server\": () => (/* binding */ server)\n/* harmony export */ });\nconst dev = \"production\";\nconst server = dev == \"development\" ? \"http://localhost:8080\" : \"http://13.233.148.83\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvc2VydmVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxHQUFHLEdBQUcsWUFBWTtBQUVqQixNQUFNQyxNQUFNLEdBQ2pCRCxHQUFHLElBQUksYUFBYSxHQUNoQix1QkFBdUIsR0FDdkIsc0JBQXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29uZmlnL3NlcnZlci5qcz83MzY0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRldiA9IFwicHJvZHVjdGlvblwiXG5cbmV4cG9ydCBjb25zdCBzZXJ2ZXIgPVxuICBkZXYgPT0gXCJkZXZlbG9wbWVudFwiXG4gICAgPyBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiXG4gICAgOiBcImh0dHA6Ly8xMy4yMzMuMTQ4LjgzXCIiXSwibmFtZXMiOlsiZGV2Iiwic2VydmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config/server.js\n");

/***/ }),

/***/ "(api)/./pages/api/generateImage.js":
/*!************************************!*\
  !*** ./pages/api/generateImage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/server */ \"(api)/./config/server.js\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! form-data */ \"form-data\");\n/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nconst asyncParse = async (req)=>{\n    const data = await new Promise((resolve, reject)=>{\n        const form = new formidable__WEBPACK_IMPORTED_MODULE_1__.IncomingForm();\n        form.parse(req, function(err, fields, files) {\n            if (err) reject({\n                err\n            });\n            resolve({\n                fields,\n                files\n            });\n        });\n    });\n    return JSON.stringify(data);\n};\nasync function handler(req, res) {\n    console.log(\"Receiving\");\n    const response = await asyncParse(req);\n    const data = JSON.parse(response);\n    console.log(data);\n    let f = data.files.file;\n    console.log(f);\n    try {\n        let url = `${_config_server__WEBPACK_IMPORTED_MODULE_0__.server}/api/examine/image`;\n        console.log(f.filepath);\n        let formData = new (form_data__WEBPACK_IMPORTED_MODULE_4___default())();\n        formData.append(\"file\", fs__WEBPACK_IMPORTED_MODULE_2___default().createReadStream(f.filepath));\n        let config1 = {\n            method: \"post\",\n            url: url,\n            headers: {\n                \"Authorization\": \"Basic ZGVsdGE6Y3lMdEVIVG53V3czV3ZwaEpWVlQ=\",\n                ...formData.getHeaders()\n            },\n            data: formData\n        };\n        const responseFinal = await axios__WEBPACK_IMPORTED_MODULE_3___default()(config1);\n        console.log(responseFinal);\n        const dataFinal = responseFinal.data;\n        res.status(200).json({\n            data: JSON.stringify(dataFinal),\n            err: null\n        });\n    } catch (err) {\n        res.status(200).json({\n            data: null,\n            err: \"Generation unsuccessful\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWdlcy9hcGkvZ2VuZXJhdGVJbWFnZS5qcz82MTBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlcnZlciB9IGZyb20gXCIuLi8uLi9jb25maWcvc2VydmVyXCJcbmltcG9ydCB7IEluY29taW5nRm9ybSB9IGZyb20gJ2Zvcm1pZGFibGUnXG5pbXBvcnQgeyBwcm9taXNlcyBhcyBmcyB9IGZyb20gJ2ZzJztcbmltcG9ydCBmc0F4aW9zIGZyb20gXCJmc1wiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCBGb3JtRGF0YSBmcm9tIFwiZm9ybS1kYXRhXCJcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgICBhcGk6IHtcbiAgICAgICAgYm9keVBhcnNlcjogZmFsc2VcbiAgICB9XG59O1xuXG5jb25zdCBhc3luY1BhcnNlID0gYXN5bmMgKHJlcSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBuZXcgSW5jb21pbmdGb3JtKCk7XG4gICAgICAgIGZvcm0ucGFyc2UocmVxLCBmdW5jdGlvbiAoZXJyLCBmaWVsZHMsIGZpbGVzKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSByZWplY3QoeyBlcnIgfSk7XG4gICAgICAgICAgICByZXNvbHZlKHsgZmllbGRzLCBmaWxlcyB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmluZ1wiKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXN5bmNQYXJzZShyZXEpO1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgbGV0IGYgPSBkYXRhLmZpbGVzLmZpbGVcbiAgICBjb25zb2xlLmxvZyhmKVxuICAgIHRyeSB7XG4gICAgICAgIGxldCB1cmwgPSBgJHtzZXJ2ZXJ9L2FwaS9leGFtaW5lL2ltYWdlYFxuICAgICAgICBjb25zb2xlLmxvZyhmLmZpbGVwYXRoKVxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZnNBeGlvcy5jcmVhdGVSZWFkU3RyZWFtKGYuZmlsZXBhdGgpKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBjb25maWcgPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgaGVhZGVyczogeyBcbiAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdWc2RHRTZZM2xNZEVWSVZHNTNWM2N6VjNad2FFcFdWbFE9JywgXG4gICAgICAgICAgICAgIC4uLmZvcm1EYXRhLmdldEhlYWRlcnMoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGEgOiBmb3JtRGF0YVxuICAgICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2VGaW5hbCA9IGF3YWl0IGF4aW9zKGNvbmZpZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRmluYWwpXG4gICAgICAgIGNvbnN0IGRhdGFGaW5hbCA9IHJlc3BvbnNlRmluYWwuZGF0YTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhRmluYWwpLCBlcnI6IG51bGwgfSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiBudWxsLCBlcnI6IFwiR2VuZXJhdGlvbiB1bnN1Y2Nlc3NmdWxcIiB9KVxuICAgIH1cbn0iXSwibmFtZXMiOlsic2VydmVyIiwiSW5jb21pbmdGb3JtIiwicHJvbWlzZXMiLCJmcyIsImZzQXhpb3MiLCJheGlvcyIsIkZvcm1EYXRhIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsImFzeW5jUGFyc2UiLCJyZXEiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmb3JtIiwicGFyc2UiLCJlcnIiLCJmaWVsZHMiLCJmaWxlcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVyIiwicmVzIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZiIsImZpbGUiLCJ1cmwiLCJmaWxlcGF0aCIsImZvcm1EYXRhIiwiYXBwZW5kIiwiY3JlYXRlUmVhZFN0cmVhbSIsIm1ldGhvZCIsImhlYWRlcnMiLCJnZXRIZWFkZXJzIiwicmVzcG9uc2VGaW5hbCIsImRhdGFGaW5hbCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/generateImage.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generateImage.js"));
module.exports = __webpack_exports__;

})();