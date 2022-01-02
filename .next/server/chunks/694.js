"use strict";
exports.id = 694;
exports.ids = [694];
exports.modules = {

/***/ 1694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2397);
/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_firebase_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5506);
/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_absolute_url__WEBPACK_IMPORTED_MODULE_1__);
/* globals window */ 

const TWELVE_DAYS_IN_MS = 12 * 60 * 60 * 24 * 1000;
const initAuth = ()=>{
    (0,next_firebase_auth__WEBPACK_IMPORTED_MODULE_0__.init)({
        debug: true,
        // This demonstrates setting a dynamic destination URL when
        // redirecting from app pages. Alternatively, you can simply
        // specify `authPageURL: '/auth-ssr'`.
        authPageURL: ({ ctx  })=>{
            const isServerSide = "undefined" === 'undefined';
            const origin = isServerSide ? next_absolute_url__WEBPACK_IMPORTED_MODULE_1___default()(ctx.req).origin : window.location.origin;
            const destPath =  true ? ctx.resolvedUrl : 0;
            const destURL = new URL(destPath, origin);
            return `auth-ssr?destination=${encodeURIComponent(destURL)}`;
        },
        // This demonstrates setting a dynamic destination URL when
        // redirecting from auth pages. Alternatively, you can simply
        // specify `appPageURL: '/'`.
        appPageURL: ({ ctx  })=>{
            const isServerSide = "undefined" === 'undefined';
            const origin = isServerSide ? next_absolute_url__WEBPACK_IMPORTED_MODULE_1___default()(ctx.req).origin : window.location.origin;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initAuth);


/***/ })

};
;