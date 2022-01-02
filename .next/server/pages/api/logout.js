"use strict";
(() => {
var exports = {};
exports.id = 30;
exports.ids = [30];
exports.modules = {

/***/ 5506:
/***/ ((module) => {

module.exports = require("next-absolute-url");

/***/ }),

/***/ 2397:
/***/ ((module) => {

module.exports = require("next-firebase-auth");

/***/ }),

/***/ 1535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2397);
/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_firebase_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_initAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1694);


(0,_utils_initAuth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
const handler = async (req, res)=>{
    try {
        await (0,next_firebase_auth__WEBPACK_IMPORTED_MODULE_0__.unsetAuthCookies)(req, res);
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        return res.status(500).json({
            error: 'Unexpected error.'
        });
    }
    return res.status(200).json({
        status: true
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [694], () => (__webpack_exec__(1535)));
module.exports = __webpack_exports__;

})();