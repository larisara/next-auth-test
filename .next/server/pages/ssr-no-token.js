"use strict";
(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 4601:
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
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7673);
/* harmony import */ var _components_DemoPageLinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2806);
/* harmony import */ var _utils_getAbsoluteURL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(986);






const styles = {
    content: {
        padding: 32
    },
    infoTextContainer: {
        marginBottom: 32
    }
};
const defaultProps = {
    favoriteColor: undefined
};
const Demo = ({ favoriteColor  })=>{
    const AuthUser = (0,next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthUser)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                email: AuthUser.email,
                signOut: AuthUser.signOut
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: styles.content,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: styles.infoTextContainer,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "Example: SSR + no ID token"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "This page requires authentication. It will do a server-side redirect (307) to the login page if the auth cookies are not set."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "This page uses `withAuthUserSSR` rather than `withAuthUserTokenSSR`, so it does not have server-side access to the user ID token."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Your favorite color is: ",
                                    favoriteColor
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DemoPageLinks__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    })
                ]
            })
        ]
    }));
};
Demo.defaultProps = defaultProps;
const getServerSideProps = (0,next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.withAuthUserSSR)({
    whenUnauthed: next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.AuthAction.REDIRECT_TO_LOGIN
})(async ({ AuthUser , req  })=>{
    // The ID token will be null, because `withAuthUserSSR` does not
    // include one. If you need a server-side token, use
    // `withAuthUserTokenSSR`.
    const token = await AuthUser.getIdToken();
    const endpoint = (0,_utils_getAbsoluteURL__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)('/api/example', req);
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
            Authorization: token || 'unauthenticated'
        }
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(`Data fetching failed with status ${response.status}: ${JSON.stringify(data)}`);
    }
    return {
        props: {
            favoriteColor: data.favoriteColor
        }
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.withAuthUser)({
    whenUnauthedAfterInit: next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.AuthAction.REDIRECT_TO_LOGIN
})(Demo));


/***/ }),

/***/ 986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* globals window */ const getAbsoluteURL = (url, req = null)=>{
    let host;
    if (req) {
        host = req.headers.host;
    } else {
        if (true) {
            throw new Error('The "req" parameter must be provided if on the server side.');
        }
        host = window.location.host;
    }
    const isLocalhost = host.indexOf('localhost') === 0;
    const protocol = isLocalhost ? 'http' : 'https';
    return `${protocol}://${host}${url}`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAbsoluteURL);


/***/ }),

/***/ 2397:
/***/ ((module) => {

module.exports = require("next-firebase-auth");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,843], () => (__webpack_exec__(4601)));
module.exports = __webpack_exports__;

})();