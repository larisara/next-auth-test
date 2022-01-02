"use strict";
(() => {
var exports = {};
exports.id = 708;
exports.ids = [708];
exports.modules = {

/***/ 5733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2397);
/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_FirebaseAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6985);




const styles = {
    content: {
        padding: `8px 32px`
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: 16
    }
};
const Auth = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: styles.content,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "Sign in"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: styles.textContainer,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        "This auth page is ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                            children: "not"
                        }),
                        " static. It will server-side redirect to the app if the user is already authenticated."
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FirebaseAuth__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                })
            })
        ]
    })
;
const getServerSideProps = (0,next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.withAuthUserTokenSSR)({
    whenAuthed: next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.AuthAction.REDIRECT_TO_APP
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.withAuthUser)({
    whenAuthed: next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.AuthAction.REDIRECT_TO_APP
})(Auth));


/***/ }),

/***/ 4324:
/***/ ((module) => {

module.exports = require("firebase/app");

/***/ }),

/***/ 4610:
/***/ ((module) => {

module.exports = require("firebase/auth");

/***/ }),

/***/ 2397:
/***/ ((module) => {

module.exports = require("next-firebase-auth");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2393:
/***/ ((module) => {

module.exports = require("react-firebaseui/StyledFirebaseAuth");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [985], () => (__webpack_exec__(5733)));
module.exports = __webpack_exports__;

})();