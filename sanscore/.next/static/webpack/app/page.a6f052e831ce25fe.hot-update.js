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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Teams; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _styles_teams_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/teams.module.css */ \"(app-pages-browser)/./styles/teams.module.css\");\n/* harmony import */ var _styles_teams_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_teams_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Teams(props) {\n    _s();\n    const p = props.props;\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const rank = (num)=>{\n        if (num === 0 && p.team_score) {\n            return \"7px outset #FFD66E;\";\n        } else if (num === 1 && p.team_score) {\n            return \"7px outset #C1C1C1;\";\n        } else if (num === 2 && p.team_score) {\n            return \"7px outset #CAA17B;\";\n        }\n        return \"0.2rem solid #a6a4a4;\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_teams_module_css__WEBPACK_IMPORTED_MODULE_2___default().teamItem),\n        style: {\n            border: rank(props.num)\n        },\n        onClick: ()=>{\n            router.push(\"/detail/\".concat(p.team_num), {\n                scroll: false\n            });\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                className: (_styles_teams_module_css__WEBPACK_IMPORTED_MODULE_2___default().teamimg),\n                src: __webpack_require__(\"(app-pages-browser)/./public/teamCharacter sync recursive ^\\\\.\\\\/.*\\\\.png$\")(\"./\".concat(p.team_num, \".png\")),\n                alt: \"팀이미지\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\신제형\\\\Desktop\\\\SanScore\\\\sanscore\\\\components\\\\teams.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    wordSpacing: \"-4px\",\n                    minWidth: \"32%\"\n                },\n                children: [\n                    p.team_name,\n                    \"팀\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\신제형\\\\Desktop\\\\SanScore\\\\sanscore\\\\components\\\\teams.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\신제형\\\\Desktop\\\\SanScore\\\\sanscore\\\\components\\\\teams.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_s(Teams, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Teams;\nvar _c;\n$RefreshReg$(_c, \"Teams\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGVhbXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzRCO0FBQ21CO0FBQ0o7QUFDYjtBQUVmLFNBQVNJLE1BQU1DLEtBQUs7O0lBRS9CLE1BQU1DLElBQUlELE1BQU1BLEtBQUs7SUFDckIsTUFBTUUsU0FBU0wsMERBQVNBO0lBQ3hCLE1BQU1NLE9BQU8sQ0FBQ0M7UUFDVixJQUFHQSxRQUFNLEtBQUtILEVBQUVJLFVBQVUsRUFBQztZQUN2QixPQUFPO1FBQ1gsT0FBTSxJQUFHRCxRQUFPLEtBQUtILEVBQUVJLFVBQVUsRUFBQztZQUM5QixPQUFPO1FBQ1gsT0FBTSxJQUFHRCxRQUFNLEtBQUtILEVBQUVJLFVBQVUsRUFBQztZQUM3QixPQUFPO1FBQ1g7UUFDQSxPQUFPO0lBQ1g7SUFDQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBV1gsMEVBQWU7UUFBRWEsT0FBTztZQUFDQyxRQUFTUCxLQUFLSCxNQUFNSSxHQUFHO1FBQUU7UUFBR08sU0FBUztZQUMxRVQsT0FBT1UsSUFBSSxDQUFDLFdBQXNCLE9BQVhYLEVBQUVZLFFBQVEsR0FBRztnQkFBQ0MsUUFBTztZQUFLO1FBQUU7OzBCQUVuRCw4REFBQ2hCLGtEQUFLQTtnQkFBQ1MsV0FBV1gseUVBQWM7Z0JBQUVvQixLQUFLQyxrR0FBUSxLQUFvQyxPQUFYaEIsRUFBRVksUUFBUSxFQUFDO2dCQUFRSyxLQUFJOzs7Ozs7MEJBQy9GLDhEQUFDakI7Z0JBQUVRLE9BQU87b0JBQUNVLGFBQVk7b0JBQU9DLFVBQVM7Z0JBQUs7O29CQUFJbkIsRUFBRW9CLFNBQVM7b0JBQUM7Ozs7Ozs7Ozs7Ozs7QUFLeEU7R0F4QndCdEI7O1FBR0xGLHNEQUFTQTs7O0tBSEpFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGVhbXMuanM/OGY1YyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy90ZWFtcy5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWFtcyhwcm9wcyl7XHJcblxyXG4gICAgY29uc3QgcCA9IHByb3BzLnByb3BzXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgcmFuayA9IChudW0pPT57XHJcbiAgICAgICAgaWYobnVtPT09MCAmJiBwLnRlYW1fc2NvcmUpe1xyXG4gICAgICAgICAgICByZXR1cm4gXCI3cHggb3V0c2V0ICNGRkQ2NkU7XCJcclxuICAgICAgICB9ZWxzZSBpZihudW0gPT09MSAmJiBwLnRlYW1fc2NvcmUpe1xyXG4gICAgICAgICAgICByZXR1cm4gXCI3cHggb3V0c2V0ICNDMUMxQzE7XCJcclxuICAgICAgICB9ZWxzZSBpZihudW09PT0yICYmIHAudGVhbV9zY29yZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBcIjdweCBvdXRzZXQgI0NBQTE3QjtcIlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCIwLjJyZW0gc29saWQgI2E2YTRhNDtcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVhbUl0ZW19IHN0eWxlPXt7Ym9yZGVyIDogcmFuayhwcm9wcy5udW0pIH19IG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvZGV0YWlsLyR7cC50ZWFtX251bX1gLHtzY3JvbGw6ZmFsc2V9KX1cclxuICAgICAgICAgICAgfSA+XHJcbiAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy50ZWFtaW1nfSBzcmM9e3JlcXVpcmUoYC9wdWJsaWMvdGVhbUNoYXJhY3Rlci8ke3AudGVhbV9udW19LnBuZ2ApfSBhbHQ9XCLtjIDsnbTrr7jsp4BcIi8+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7d29yZFNwYWNpbmc6XCItNHB4XCIsbWluV2lkdGg6XCIzMiVcIn19PntwLnRlYW1fbmFtZX3tjIA8L3A+XHJcbiAgICAgICAgICAgIHsvKiA8cCBzdHlsZT17e21pbldpZHRoOlwiMjMlXCJ9fT57cC50ZWFtX3Njb3JlfTwvcD4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8cD7soJA8L3A+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkxpbmsiLCJzdHlsZXMiLCJ1c2VSb3V0ZXIiLCJJbWFnZSIsIlRlYW1zIiwicHJvcHMiLCJwIiwicm91dGVyIiwicmFuayIsIm51bSIsInRlYW1fc2NvcmUiLCJkaXYiLCJjbGFzc05hbWUiLCJ0ZWFtSXRlbSIsInN0eWxlIiwiYm9yZGVyIiwib25DbGljayIsInB1c2giLCJ0ZWFtX251bSIsInNjcm9sbCIsInRlYW1pbWciLCJzcmMiLCJyZXF1aXJlIiwiYWx0Iiwid29yZFNwYWNpbmciLCJtaW5XaWR0aCIsInRlYW1fbmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/teams.js\n"));

/***/ })

});