"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/teams.js":
/*!*****************************!*\
  !*** ./components/teams.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Teams; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _styles_teams_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/teams.module.css */ \"(app-pages-browser)/./styles/teams.module.css\");\n/* harmony import */ var _styles_teams_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_teams_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Teams(props) {\n    _s();\n    const p = props.props;\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_teams_module_css__WEBPACK_IMPORTED_MODULE_2___default().teamItem),\n        onClick: ()=>{\n            router.push(\"/detail/\".concat(p.team_num));\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    wordSpacing: \"-4px\",\n                    minWidth: \"32%\"\n                },\n                children: [\n                    p.team_num,\n                    \" 조\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\신제형\\\\Desktop\\\\SanScore\\\\sanscore\\\\components\\\\teams.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    minWidth: \"20%\"\n                },\n                children: p.team_score\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\신제형\\\\Desktop\\\\SanScore\\\\sanscore\\\\components\\\\teams.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"점\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\신제형\\\\Desktop\\\\SanScore\\\\sanscore\\\\components\\\\teams.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\신제형\\\\Desktop\\\\SanScore\\\\sanscore\\\\components\\\\teams.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_s(Teams, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Teams;\nvar _c;\n$RefreshReg$(_c, \"Teams\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGVhbXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDNEI7QUFDbUI7QUFDSjtBQUc1QixTQUFTRyxNQUFNQyxLQUFLOztJQUUvQixNQUFNQyxJQUFJRCxNQUFNQSxLQUFLO0lBQ3JCLE1BQU1FLFNBQVNKLDBEQUFTQTtJQUN4QixxQkFDSSw4REFBQ0s7UUFBSUMsV0FBV1AsMEVBQWU7UUFBRVMsU0FBUztZQUN0Q0osT0FBT0ssSUFBSSxDQUFDLFdBQXNCLE9BQVhOLEVBQUVPLFFBQVE7UUFBRzs7MEJBRXBDLDhEQUFDUDtnQkFBRVEsT0FBTztvQkFBQ0MsYUFBWTtvQkFBT0MsVUFBUztnQkFBSzs7b0JBQUlWLEVBQUVPLFFBQVE7b0JBQUM7Ozs7Ozs7MEJBQzNELDhEQUFDUDtnQkFBRVEsT0FBTztvQkFBQ0UsVUFBUztnQkFBSzswQkFBSVYsRUFBRVcsVUFBVTs7Ozs7OzBCQUN6Qyw4REFBQ1g7MEJBQUU7Ozs7Ozs7Ozs7OztBQUdmO0dBYndCRjs7UUFHTEQsc0RBQVNBOzs7S0FISkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZWFtcy5qcz84ZjVjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3RlYW1zLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWFtcyhwcm9wcyl7XHJcblxyXG4gICAgY29uc3QgcCA9IHByb3BzLnByb3BzIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlYW1JdGVtfSBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChgL2RldGFpbC8ke3AudGVhbV9udW19YCl9XHJcbiAgICAgICAgICAgIH0gPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17e3dvcmRTcGFjaW5nOlwiLTRweFwiLG1pbldpZHRoOlwiMzIlXCJ9fT57cC50ZWFtX251bX0g7KGwPC9wPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17e21pbldpZHRoOlwiMjAlXCJ9fT57cC50ZWFtX3Njb3JlfTwvcD5cclxuICAgICAgICAgICAgPHA+7KCQPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkxpbmsiLCJzdHlsZXMiLCJ1c2VSb3V0ZXIiLCJUZWFtcyIsInByb3BzIiwicCIsInJvdXRlciIsImRpdiIsImNsYXNzTmFtZSIsInRlYW1JdGVtIiwib25DbGljayIsInB1c2giLCJ0ZWFtX251bSIsInN0eWxlIiwid29yZFNwYWNpbmciLCJtaW5XaWR0aCIsInRlYW1fc2NvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/teams.js\n"));

/***/ })

});