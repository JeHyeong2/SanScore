"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/@modal/(.)detail/[teamnum]/page",{

/***/ "(app-pages-browser)/./app/@modal/(.)detail/[teamnum]/modal.js":
/*!*************************************************!*\
  !*** ./app/@modal/(.)detail/[teamnum]/modal.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Modal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_modal_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../styles/modal.module.css */ \"(app-pages-browser)/./styles/modal.module.css\");\n/* harmony import */ var _styles_modal_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_modal_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Modal(children) {\n    _s();\n    console.log(children.info);\n    let info = JSON.parse(children);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const dialogRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        var _dialogRef_current;\n        (_dialogRef_current = dialogRef.current) === null || _dialogRef_current === void 0 ? void 0 : _dialogRef_current.showModal();\n    }, []);\n    const closeModal = (e)=>{\n        e.target === dialogRef.current && router.back();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dialog\", {\n        ref: dialogRef,\n        onClick: closeModal,\n        onClose: router.back,\n        className: (_styles_modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().modalBox),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            info.team_num,\n                            \" 조\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\신제형\\\\Desktop\\\\SanScore\\\\sanscroe\\\\app\\\\@modal\\\\(.)detail\\\\[teamnum]\\\\modal.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" 총점 \",\n                            info.team_score,\n                            \" 점\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\신제형\\\\Desktop\\\\SanScore\\\\sanscroe\\\\app\\\\@modal\\\\(.)detail\\\\[teamnum]\\\\modal.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"상세내역\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\신제형\\\\Desktop\\\\SanScore\\\\sanscroe\\\\app\\\\@modal\\\\(.)detail\\\\[teamnum]\\\\modal.js\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().descripBox),\n                        children: info.score_description.length > 0 ? info.score_description.map((el)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    el.get ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"blue\"\n                                        },\n                                        children: \"+\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\신제형\\\\Desktop\\\\SanScore\\\\sanscroe\\\\app\\\\@modal\\\\(.)detail\\\\[teamnum]\\\\modal.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 38\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"red\"\n                                        },\n                                        children: \"-\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\신제형\\\\Desktop\\\\SanScore\\\\sanscroe\\\\app\\\\@modal\\\\(.)detail\\\\[teamnum]\\\\modal.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 78\n                                    }, this),\n                                    \"  \",\n                                    el.score,\n                                    \" \",\n                                    el.description\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\신제형\\\\Desktop\\\\SanScore\\\\sanscroe\\\\app\\\\@modal\\\\(.)detail\\\\[teamnum]\\\\modal.js\",\n                                lineNumber: 40,\n                                columnNumber: 25\n                            }, this);\n                        }) : \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\신제형\\\\Desktop\\\\SanScore\\\\sanscroe\\\\app\\\\@modal\\\\(.)detail\\\\[teamnum]\\\\modal.js\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\신제형\\\\Desktop\\\\SanScore\\\\sanscroe\\\\app\\\\@modal\\\\(.)detail\\\\[teamnum]\\\\modal.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().closeBtn),\n                onClick: ()=>{\n                    router.back();\n                },\n                children: \" 닫기 \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\신제형\\\\Desktop\\\\SanScore\\\\sanscroe\\\\app\\\\@modal\\\\(.)detail\\\\[teamnum]\\\\modal.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\신제형\\\\Desktop\\\\SanScore\\\\sanscroe\\\\app\\\\@modal\\\\(.)detail\\\\[teamnum]\\\\modal.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_s(Modal, \"GF2eLZRm9UlajZGEa2OtZUwVtdU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Modal;\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9AbW9kYWwvKC4pZGV0YWlsL1t0ZWFtbnVtXS9tb2RhbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRTRCO0FBQ2U7QUFDRjtBQUNlO0FBR3pDLFNBQVNLLE1BQU1DLFFBQVE7O0lBQ2xDQyxRQUFRQyxHQUFHLENBQUNGLFNBQVNHLElBQUk7SUFDekIsSUFBSUEsT0FBT0MsS0FBS0MsS0FBSyxDQUFDTDtJQUN0QixNQUFNTSxTQUFTWCwwREFBU0E7SUFDeEIsTUFBTVksWUFBWVYsNkNBQU1BLENBQUM7SUFFekJELGdEQUFTQSxDQUFDO1lBQ05XO1NBQUFBLHFCQUFBQSxVQUFVQyxPQUFPLGNBQWpCRCx5Q0FBQUEsbUJBQW1CRSxTQUFTO0lBQ2hDLEdBQUUsRUFBRTtJQUVKLE1BQU1DLGFBQWEsQ0FBQ0M7UUFDaEJBLEVBQUVDLE1BQU0sS0FBS0wsVUFBVUMsT0FBTyxJQUFJRixPQUFPTyxJQUFJO0lBQ2pEO0lBRUEscUJBQ0ksOERBQUNDO1FBQ0RDLEtBQUtSO1FBQ0xTLFNBQVNOO1FBQ1RPLFNBQVNYLE9BQU9PLElBQUk7UUFDcEJLLFdBQVdwQiwwRUFBZTs7MEJBRzFCLDhEQUFDc0I7O2tDQUNHLDhEQUFDQzs7NEJBQUdsQixLQUFLbUIsUUFBUTs0QkFBQzs7Ozs7OztrQ0FDbEIsOERBQUNEOzs0QkFBRTs0QkFBS2xCLEtBQUtvQixVQUFVOzRCQUFDOzs7Ozs7O2tDQUN4Qiw4REFBQ0Y7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0Q7d0JBQUlGLFdBQVdwQiw0RUFBaUI7a0NBRTdCSyxLQUFLc0IsaUJBQWlCLENBQUNDLE1BQU0sR0FBRyxJQUNoQ3ZCLEtBQUtzQixpQkFBaUIsQ0FBQ0UsR0FBRyxDQUFDLENBQUNDOzRCQUN4QixxQkFDSSw4REFBQ1A7O29DQUFHTyxHQUFHQyxHQUFHLGlCQUFHLDhEQUFDQzt3Q0FBS0MsT0FBTzs0Q0FBQ0MsT0FBTTt3Q0FBTTtrREFBRzs7Ozs7NkRBQVcsOERBQUNGO3dDQUFLQyxPQUFPOzRDQUFDQyxPQUFNO3dDQUFLO2tEQUFHOzs7Ozs7b0NBQVM7b0NBQUdKLEdBQUdLLEtBQUs7b0NBQUM7b0NBQUVMLEdBQUdNLFdBQVc7Ozs7Ozs7d0JBRTlILEtBQ0g7Ozs7Ozs7Ozs7OzswQkFLTCw4REFBQ0M7Z0JBQU9qQixXQUFXcEIsMEVBQWU7Z0JBQUVrQixTQUFTO29CQUFLVixPQUFPTyxJQUFJO2dCQUFFOzBCQUFJOzs7Ozs7Ozs7Ozs7QUFLM0U7R0E1Q3dCZDs7UUFHTEosc0RBQVNBOzs7S0FISkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0Btb2RhbC8oLilkZXRhaWwvW3RlYW1udW1dL21vZGFsLmpzPzcxNWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvbW9kYWwubW9kdWxlLmNzc1wiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwoY2hpbGRyZW4pe1xyXG4gICAgY29uc29sZS5sb2coY2hpbGRyZW4uaW5mbylcclxuICAgIGxldCBpbmZvID0gSlNPTi5wYXJzZShjaGlsZHJlbilcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB1c2VSZWYobnVsbClcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZGlhbG9nUmVmLmN1cnJlbnQ/LnNob3dNb2RhbCgpXHJcbiAgICB9LFtdKVxyXG4gICAgXHJcbiAgICBjb25zdCBjbG9zZU1vZGFsID0gKGUpPT57XHJcbiAgICAgICAgZS50YXJnZXQgPT09IGRpYWxvZ1JlZi5jdXJyZW50ICYmIHJvdXRlci5iYWNrKClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpYWxvZ1xyXG4gICAgICAgIHJlZj17ZGlhbG9nUmVmfVxyXG4gICAgICAgIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17cm91dGVyLmJhY2t9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxCb3h9XHJcbiAgICAgICAgPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwPntpbmZvLnRlYW1fbnVtfSDsobA8L3A+XHJcbiAgICAgICAgICAgIDxwPiDstJ3soJAge2luZm8udGVhbV9zY29yZX0g7KCQPC9wPlxyXG4gICAgICAgICAgICA8cD7sg4HshLjrgrTsl608L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcEJveH0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbmZvLnNjb3JlX2Rlc2NyaXB0aW9uLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgaW5mby5zY29yZV9kZXNjcmlwdGlvbi5tYXAoKGVsKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2VsLmdldCA/IDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJibHVlXCJ9fT4rPC9zcGFuPiA6IDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJyZWRcIn19Pi08L3NwYW4+fSAge2VsLnNjb3JlfSB7ZWwuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIDpcIlwifVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VCdG59IG9uQ2xpY2s9eygpPT57cm91dGVyLmJhY2soKX19ID4g64ur6riwIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8L2RpYWxvZz5cclxuXHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVJlZiIsInN0eWxlcyIsIk1vZGFsIiwiY2hpbGRyZW4iLCJjb25zb2xlIiwibG9nIiwiaW5mbyIsIkpTT04iLCJwYXJzZSIsInJvdXRlciIsImRpYWxvZ1JlZiIsImN1cnJlbnQiLCJzaG93TW9kYWwiLCJjbG9zZU1vZGFsIiwiZSIsInRhcmdldCIsImJhY2siLCJkaWFsb2ciLCJyZWYiLCJvbkNsaWNrIiwib25DbG9zZSIsImNsYXNzTmFtZSIsIm1vZGFsQm94IiwiZGl2IiwicCIsInRlYW1fbnVtIiwidGVhbV9zY29yZSIsImRlc2NyaXBCb3giLCJzY29yZV9kZXNjcmlwdGlvbiIsImxlbmd0aCIsIm1hcCIsImVsIiwiZ2V0Iiwic3BhbiIsInN0eWxlIiwiY29sb3IiLCJzY29yZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwiY2xvc2VCdG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/@modal/(.)detail/[teamnum]/modal.js\n"));

/***/ })

});