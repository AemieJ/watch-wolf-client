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

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("formidable");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_server_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/server.js */ \"(api)/./config/server.js\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const form = new (formidable__WEBPACK_IMPORTED_MODULE_1___default().IncomingForm)();\n    form.uploadDir = \"./\";\n    form.keepExtensions = true;\n    form.parse(req, (err, fields, files)=>{\n        console.log(err, fields, files);\n    });\n    let requestOptions = {\n        method: \"POST\",\n        headers: {\n            \"Authorization\": `Basic ZGVsdGE6Y3lMdEVIVG53V3czV3ZwaEpWVlQ=`,\n            \"Content-Type\": \"multipart/form-data\"\n        },\n        body: form,\n        redirect: \"follow\"\n    };\n    console.log(requestOptions);\n    try {\n        let response = await fetch(`${_config_server_js__WEBPACK_IMPORTED_MODULE_0__.server}/api/examine/pdf`, requestOptions);\n        let data = await response.json();\n        console.log(data);\n        res.status(200).json({\n            data: JSON.stringify(data),\n            err: null\n        });\n    } catch (err) {\n        res.status(500).json({\n            data: null,\n            err: \"Generation unsuccessful\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGVQREYuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0M7QUFDWDtBQUc3QixNQUFNRSxNQUFNLEdBQUc7SUFDcEJDLEdBQUcsRUFBRTtRQUNIQyxVQUFVLEVBQUUsS0FBSztLQUNsQjtDQUNGO0FBR0QsaUVBQWUsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDL0IsTUFBTUMsSUFBSSxHQUFHLElBQUlOLGdFQUF1QixFQUFFO0lBQzFDTSxJQUFJLENBQUNFLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEJGLElBQUksQ0FBQ0csY0FBYyxHQUFHLElBQUksQ0FBQztJQUMzQkgsSUFBSSxDQUFDSSxLQUFLLENBQUNOLEdBQUcsRUFBRSxDQUFDTyxHQUFHLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxHQUFLO1FBQ3RDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osR0FBRyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssQ0FBQyxDQUFDO0tBQ2pDLENBQUMsQ0FBQztJQUVELElBQUlHLGNBQWMsR0FBRztRQUNqQkMsTUFBTSxFQUFFLE1BQU07UUFDZEMsT0FBTyxFQUFFO1lBQ0wsZUFBZSxFQUFFLENBQUMsMENBQTBDLENBQUM7WUFDN0QsY0FBYyxFQUFFLHFCQUFxQjtTQUN4QztRQUNEQyxJQUFJLEVBQUViLElBQUk7UUFDVmMsUUFBUSxFQUFFLFFBQVE7S0FDbkI7SUFFSE4sT0FBTyxDQUFDQyxHQUFHLENBQUNDLGNBQWMsQ0FBQztJQUUzQixJQUFJO1FBQ0EsSUFBSUssUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLEVBQUV2QixxREFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUVpQixjQUFjLENBQUM7UUFDdkUsSUFBSU8sSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBSSxFQUFFO1FBQ2hDVixPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsSUFBSSxDQUFDO1FBQ2pCbEIsR0FBRyxDQUFDb0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRCxJQUFJLENBQUM7WUFBRUQsSUFBSSxFQUFFRyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osSUFBSSxDQUFDO1lBQUVaLEdBQUcsRUFBRSxJQUFJO1NBQUUsQ0FBQyxDQUFDO0tBQ25FLENBQUMsT0FBT0EsR0FBRyxFQUFFO1FBQ1ZOLEdBQUcsQ0FBQ29CLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0QsSUFBSSxDQUFDO1lBQUVELElBQUksRUFBRSxJQUFJO1lBQUVaLEdBQUcsRUFBRSx5QkFBeUI7U0FBQyxDQUFDO0tBQ3RFO0NBR0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hcGkvZ2VuZXJhdGVQREYuanM/ODljZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXJ2ZXIgfSBmcm9tIFwiLi4vLi4vY29uZmlnL3NlcnZlci5qc1wiXG5pbXBvcnQgZm9ybWlkYWJsZSBmcm9tICdmb3JtaWRhYmxlJztcblxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGk6IHtcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcbiAgfSxcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBmb3JtID0gbmV3IGZvcm1pZGFibGUuSW5jb21pbmdGb3JtKCk7XG4gICAgZm9ybS51cGxvYWREaXIgPSBcIi4vXCI7XG4gIGZvcm0ua2VlcEV4dGVuc2lvbnMgPSB0cnVlO1xuICBmb3JtLnBhcnNlKHJlcSwgKGVyciwgZmllbGRzLCBmaWxlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVyciwgZmllbGRzLCBmaWxlcyk7XG4gIH0pO1xuXG4gICAgbGV0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCYXNpYyBaR1ZzZEdFNlkzbE1kRVZJVkc1M1YzY3pWM1p3YUVwV1ZsUT1gLFxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogZm9ybSxcbiAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnXG4gICAgICB9O1xuXG4gICAgY29uc29sZS5sb2cocmVxdWVzdE9wdGlvbnMpXG5cbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtzZXJ2ZXJ9L2FwaS9leGFtaW5lL3BkZmAsIHJlcXVlc3RPcHRpb25zKTsgXG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCBlcnI6IG51bGwgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZGF0YTogbnVsbCwgZXJyOiAnR2VuZXJhdGlvbiB1bnN1Y2Nlc3NmdWwnfSlcbiAgICB9XG5cblxufSJdLCJuYW1lcyI6WyJzZXJ2ZXIiLCJmb3JtaWRhYmxlIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsInJlcSIsInJlcyIsImZvcm0iLCJJbmNvbWluZ0Zvcm0iLCJ1cGxvYWREaXIiLCJrZWVwRXh0ZW5zaW9ucyIsInBhcnNlIiwiZXJyIiwiZmllbGRzIiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInJlZGlyZWN0IiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwic3RhdHVzIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generatePDF.js\n");

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