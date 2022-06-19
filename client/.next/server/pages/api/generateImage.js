"use strict";
(() => {
var exports = {};
exports.id = 793;
exports.ids = [793];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8941:
/***/ ((module) => {

module.exports = require("form-data");

/***/ }),

/***/ 2616:
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 2802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ server)
/* harmony export */ });
const dev = "production";
const server = dev == "development" ? "http://localhost:8080" : "http://13.233.148.83";


/***/ }),

/***/ 4983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _config_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2802);
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2616);
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8941);
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_4__);






const config = {
    api: {
        bodyParser: false
    }
};
const asyncParse = async (req)=>{
    const data = await new Promise((resolve, reject)=>{
        const form = new formidable__WEBPACK_IMPORTED_MODULE_1__.IncomingForm();
        form.parse(req, function(err, fields, files) {
            if (err) reject({
                err
            });
            resolve({
                fields,
                files
            });
        });
    });
    return JSON.stringify(data);
};
async function handler(req, res) {
    console.log("Receiving");
    const response = await asyncParse(req);
    const data = JSON.parse(response);
    console.log(data);
    let f = data.files.file;
    console.log(f);
    try {
        let url = `${_config_server__WEBPACK_IMPORTED_MODULE_0__/* .server */ .f}/api/examine/image`;
        console.log(f.filepath);
        let formData = new (form_data__WEBPACK_IMPORTED_MODULE_4___default())();
        formData.append("file", fs__WEBPACK_IMPORTED_MODULE_2___default().createReadStream(f.filepath));
        let config1 = {
            method: "post",
            url: url,
            headers: {
                "Authorization": "Basic ZGVsdGE6Y3lMdEVIVG53V3czV3ZwaEpWVlQ=",
                ...formData.getHeaders()
            },
            data: formData
        };
        const responseFinal = await axios__WEBPACK_IMPORTED_MODULE_3___default()(config1);
        console.log(responseFinal);
        const dataFinal = responseFinal.data;
        res.status(200).json({
            data: JSON.stringify(dataFinal),
            err: null
        });
    } catch (err) {
        res.status(200).json({
            data: null,
            err: "Generation unsuccessful"
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4983));
module.exports = __webpack_exports__;

})();