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
exports.id = "pages/api/generatePDF";
exports.ids = ["pages/api/generatePDF"];
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

/***/ "(api)/./pages/api/generatePDF.js":
/*!**********************************!*\
  !*** ./pages/api/generatePDF.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/server */ \"(api)/./config/server.js\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! form-data */ \"form-data\");\n/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nconst asyncParse = async (req)=>{\n    const data = await new Promise((resolve, reject)=>{\n        const form = new formidable__WEBPACK_IMPORTED_MODULE_1__.IncomingForm();\n        form.parse(req, function(err, fields, files) {\n            if (err) reject({\n                err\n            });\n            resolve({\n                fields,\n                files\n            });\n        });\n    });\n    return JSON.stringify(data);\n};\nasync function handler(req, res) {\n    console.log(\"Receiving\");\n    const response = await asyncParse(req);\n    const data = JSON.parse(response);\n    console.log(data);\n    let f = data.files.file;\n    console.log(f);\n    try {\n        let url = `${_config_server__WEBPACK_IMPORTED_MODULE_0__.server}/api/examine/pdf`;\n        console.log(f.filepath);\n        let formData = new (form_data__WEBPACK_IMPORTED_MODULE_4___default())();\n        formData.append(\"file\", fs__WEBPACK_IMPORTED_MODULE_2___default().createReadStream(f.filepath));\n        let config1 = {\n            method: \"post\",\n            url: url,\n            headers: {\n                \"Authorization\": \"Basic ZGVsdGE6Y3lMdEVIVG53V3czV3ZwaEpWVlQ=\",\n                ...formData.getHeaders()\n            },\n            data: formData\n        };\n        const responseFinal = await axios__WEBPACK_IMPORTED_MODULE_3___default()(config1);\n        console.log(responseFinal);\n        const dataFinal = responseFinal.data;\n        res.status(200).json({\n            data: JSON.stringify(dataFinal),\n            err: null\n        });\n    } catch (err) {\n        res.status(200).json({\n            data: null,\n            err: \"Generation unsuccessful\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMvYXBpL2dlbmVyYXRlUERGLmpzPzg5Y2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VydmVyIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy9zZXJ2ZXJcIlxuaW1wb3J0IHsgSW5jb21pbmdGb3JtIH0gZnJvbSAnZm9ybWlkYWJsZSdcbmltcG9ydCB7IHByb21pc2VzIGFzIGZzIH0gZnJvbSAnZnMnO1xuaW1wb3J0IGZzQXhpb3MgZnJvbSBcImZzXCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuaW1wb3J0IEZvcm1EYXRhIGZyb20gXCJmb3JtLWRhdGFcIlxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAgIGFwaToge1xuICAgICAgICBib2R5UGFyc2VyOiBmYWxzZVxuICAgIH1cbn07XG5cbmNvbnN0IGFzeW5jUGFyc2UgPSBhc3luYyAocmVxKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybSA9IG5ldyBJbmNvbWluZ0Zvcm0oKTtcbiAgICAgICAgZm9ybS5wYXJzZShyZXEsIGZ1bmN0aW9uIChlcnIsIGZpZWxkcywgZmlsZXMpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHJlamVjdCh7IGVyciB9KTtcbiAgICAgICAgICAgIHJlc29sdmUoeyBmaWVsZHMsIGZpbGVzIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2aW5nXCIpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhc3luY1BhcnNlKHJlcSk7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2UpXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICBsZXQgZiA9IGRhdGEuZmlsZXMuZmlsZVxuICAgIGNvbnNvbGUubG9nKGYpXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHVybCA9IGAke3NlcnZlcn0vYXBpL2V4YW1pbmUvcGRmYFxuICAgICAgICBjb25zb2xlLmxvZyhmLmZpbGVwYXRoKVxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZnNBeGlvcy5jcmVhdGVSZWFkU3RyZWFtKGYuZmlsZXBhdGgpKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBjb25maWcgPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgaGVhZGVyczogeyBcbiAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWkdWc2RHRTZZM2xNZEVWSVZHNTNWM2N6VjNad2FFcFdWbFE9JywgXG4gICAgICAgICAgICAgIC4uLmZvcm1EYXRhLmdldEhlYWRlcnMoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGEgOiBmb3JtRGF0YVxuICAgICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2VGaW5hbCA9IGF3YWl0IGF4aW9zKGNvbmZpZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRmluYWwpXG4gICAgICAgIGNvbnN0IGRhdGFGaW5hbCA9IHJlc3BvbnNlRmluYWwuZGF0YTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhRmluYWwpLCBlcnI6IG51bGwgfSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiBudWxsLCBlcnI6IFwiR2VuZXJhdGlvbiB1bnN1Y2Nlc3NmdWxcIiB9KVxuICAgIH1cbn0iXSwibmFtZXMiOlsic2VydmVyIiwiSW5jb21pbmdGb3JtIiwicHJvbWlzZXMiLCJmcyIsImZzQXhpb3MiLCJheGlvcyIsIkZvcm1EYXRhIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsImFzeW5jUGFyc2UiLCJyZXEiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmb3JtIiwicGFyc2UiLCJlcnIiLCJmaWVsZHMiLCJmaWxlcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVyIiwicmVzIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZiIsImZpbGUiLCJ1cmwiLCJmaWxlcGF0aCIsImZvcm1EYXRhIiwiYXBwZW5kIiwiY3JlYXRlUmVhZFN0cmVhbSIsIm1ldGhvZCIsImhlYWRlcnMiLCJnZXRIZWFkZXJzIiwicmVzcG9uc2VGaW5hbCIsImRhdGFGaW5hbCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/generatePDF.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generatePDF.js"));
module.exports = __webpack_exports__;

})();