"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-firebase-auth"
var external_next_firebase_auth_ = __webpack_require__(2397);
;// CONCATENATED MODULE: external "next-absolute-url"
const external_next_absolute_url_namespaceObject = require("next-absolute-url");
var external_next_absolute_url_default = /*#__PURE__*/__webpack_require__.n(external_next_absolute_url_namespaceObject);
;// CONCATENATED MODULE: ./utils/initAuth.js
/* globals window */ 

const TWELVE_DAYS_IN_MS = 12 * 60 * 60 * 24 * 1000;
const initAuth = ()=>{
    (0,external_next_firebase_auth_.init)({
        debug: true,
        // This demonstrates setting a dynamic destination URL when
        // redirecting from app pages. Alternatively, you can simply
        // specify `authPageURL: '/auth-ssr'`.
        authPageURL: ({ ctx  })=>{
            const isServerSide = "undefined" === 'undefined';
            const origin = isServerSide ? external_next_absolute_url_default()(ctx.req).origin : window.location.origin;
            const destPath =  true ? ctx.resolvedUrl : 0;
            const destURL = new URL(destPath, origin);
            return `auth-ssr?destination=${encodeURIComponent(destURL)}`;
        },
        // This demonstrates setting a dynamic destination URL when
        // redirecting from auth pages. Alternatively, you can simply
        // specify `appPageURL: '/'`.
        appPageURL: ({ ctx  })=>{
            const isServerSide = "undefined" === 'undefined';
            const origin = isServerSide ? external_next_absolute_url_default()(ctx.req).origin : window.location.origin;
            const params = isServerSide ? new URL(ctx.req.url, origin).searchParams : new URLSearchParams(window.location.search);
            const destinationParamVal = params.get('destination') ? decodeURIComponent(params.get('destination')) : undefined;
            // By default, go to the index page if the destination URL
            // is invalid or unspecified.
            let destURL = '/';
            if (destinationParamVal) {
                // Verify the redirect URL host is allowed.
                // https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/11-Client_Side_Testing/04-Testing_for_Client_Side_URL_Redirect
                const allowedHosts = [
                    'localhost:3000',
                    'nfa-example.vercel.app'
                ];
                const allowed = allowedHosts.indexOf(new URL(destinationParamVal).host) > -1;
                if (allowed) {
                    destURL = destinationParamVal;
                } else {
                    // eslint-disable-next-line no-console
                    console.warn(`Redirect destination host must be one of ${allowedHosts.join(', ')}.`);
                }
            }
            return destURL;
        },
        loginAPIEndpoint: '/api/login',
        logoutAPIEndpoint: '/api/logout',
        firebaseAdminInitConfig: {
            credential: {
                projectId: "next-auth-test-64163",
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                // Using JSON to handle newline problems when storing the
                // key as a secret in Vercel. See:
                // https://github.com/vercel/vercel/issues/749#issuecomment-707515089
                privateKey: process.env.FIREBASE_PRIVATE_KEY ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY) : undefined
            },
            databaseURL: "https://next-auth-test-64163.firebaseio.com"
        },
        firebaseClientInitConfig: {
            apiKey: "AIzaSyDtGfnW-LrUtqngcnu3kOFR89HayYuWLcI",
            authDomain: "next-auth-test-64163.firebaseapp.com",
            databaseURL: "https://next-auth-test-64163.firebaseio.com",
            projectId: "next-auth-test-64163"
        },
        cookies: {
            name: 'ExampleApp',
            keys: [
                process.env.COOKIE_SECRET_CURRENT,
                process.env.COOKIE_SECRET_PREVIOUS, 
            ],
            httpOnly: true,
            maxAge: TWELVE_DAYS_IN_MS,
            overwrite: true,
            path: '/',
            sameSite: 'lax',
            secure: "false # set to true in HTTPS environment" === 'true',
            signed: true
        }
    });
};
/* harmony default export */ const utils_initAuth = (initAuth);

;// CONCATENATED MODULE: ./pages/_app.js




utils_initAuth();
const MyApp = ({ Component , pageProps  })=>// eslint-disable-next-line react/jsx-props-no-spreading
    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...pageProps
    })
;
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2397:
/***/ ((module) => {

module.exports = require("next-firebase-auth");

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
var __webpack_exports__ = (__webpack_exec__(5672));
module.exports = __webpack_exports__;

})();