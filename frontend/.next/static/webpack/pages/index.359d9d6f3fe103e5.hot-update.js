"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/functions/users/AddUser.ts":
/*!****************************************!*\
  !*** ./src/functions/users/AddUser.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddUser\": function() { return /* binding */ AddUser; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction AddUser(userInfo) {\n    var name = userInfo.name, email = userInfo.email, image = userInfo.image;\n    var data1 = {\n        name: {\n            first: name.first,\n            last: name.last\n        },\n        accountTimeCreated: new Date(),\n        email: email,\n        image: image\n    };\n    console.log(\"data = \" + JSON.stringify(data1));\n    //insert\n    var requestOptions = {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data1)\n    };\n    // fetch(process.env.SERVERPORT + \"/user/add/\", requestOptions)\n    // .then(response => response.json())\n    // .then(data => console.log(\"data inside = \" + JSON.stringify(data)));\n    fetch(\"http://localhost:2000\" + \"/user/add/\", requestOptions).then(function(response) {\n        return response.json();\n    }).then(function(data) {\n        return console.log(\"data inside = \" + JSON.stringify(data));\n    });\n    console.log(\"fetched\");\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3VzZXJzL0FkZFVzZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBR2xCLFNBQVNDLE9BQU8sQ0FBQ0MsUUFBa0IsRUFBRTtJQUMxQyxJQUFPQyxJQUFJLEdBQWtCRCxRQUFRLENBQTlCQyxJQUFJLEVBQUVDLEtBQUssR0FBV0YsUUFBUSxDQUF4QkUsS0FBSyxFQUFFQyxLQUFLLEdBQUlILFFBQVEsQ0FBakJHLEtBQUs7SUFFekIsSUFBTUMsS0FBSSxHQUFHO1FBQUVILElBQUksRUFBRTtZQUFDSSxLQUFLLEVBQUVKLElBQUksQ0FBQ0ksS0FBSztZQUFFQyxJQUFJLEVBQUVMLElBQUksQ0FBQ0ssSUFBSTtTQUFDO1FBQUVDLGtCQUFrQixFQUFFLElBQUlDLElBQUksRUFBRTtRQUFFTixLQUFLLEVBQUVBLEtBQUs7UUFBRUMsS0FBSyxFQUFFQSxLQUFLO0tBQUM7SUFDdEhNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxTQUFTLENBQUNSLEtBQUksQ0FBQyxDQUFDLENBQUM7SUFFOUMsUUFBUTtJQUNSLElBQU1TLGNBQWMsR0FBRztRQUNyQkMsTUFBTSxFQUFFLE1BQU07UUFDZEMsT0FBTyxFQUFFO1lBQUMsY0FBYyxFQUFFLGtCQUFrQjtTQUFDO1FBQzdDQyxJQUFJLEVBQUVMLElBQUksQ0FBQ0MsU0FBUyxDQUFDUixLQUFJLENBQUM7S0FDM0I7SUFFRCwrREFBK0Q7SUFDL0QscUNBQXFDO0lBQ3JDLHVFQUF1RTtJQUV2RWEsS0FBSyxDQUFDQyx1QkFBc0IsR0FBRyxZQUFZLEVBQUVMLGNBQWMsQ0FBQyxDQUMzRFEsSUFBSSxDQUFDQyxTQUFBQSxRQUFRO2VBQUlBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO0tBQUEsQ0FBQyxDQUNqQ0YsSUFBSSxDQUFDakIsU0FBQUEsSUFBSTtlQUFJSyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBR0MsSUFBSSxDQUFDQyxTQUFTLENBQUNSLElBQUksQ0FBQyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRXBFSyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztDQUV4QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZnVuY3Rpb25zL3VzZXJzL0FkZFVzZXIudHM/NGM1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIEFkZFVzZXIodXNlckluZm86IFVzZXJJbmZvKSB7XG4gIGNvbnN0IHtuYW1lLCBlbWFpbCwgaW1hZ2V9ID0gdXNlckluZm87XG4gIFxuICBjb25zdCBkYXRhID0geyBuYW1lOiB7Zmlyc3Q6IG5hbWUuZmlyc3QsIGxhc3Q6IG5hbWUubGFzdH0sIGFjY291bnRUaW1lQ3JlYXRlZDogbmV3IERhdGUoKSwgZW1haWw6IGVtYWlsLCBpbWFnZTogaW1hZ2V9O1xuICBjb25zb2xlLmxvZyhcImRhdGEgPSBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgXG4gIC8vaW5zZXJ0XG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gIH07XG4gIFxuICAvLyBmZXRjaChwcm9jZXNzLmVudi5TRVJWRVJQT1JUICsgXCIvdXNlci9hZGQvXCIsIHJlcXVlc3RPcHRpb25zKVxuICAvLyAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC8vIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coXCJkYXRhIGluc2lkZSA9IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpKTtcblxuICBmZXRjaChwcm9jZXNzLmVudi5TRVJWRVJQT1JUICsgXCIvdXNlci9hZGQvXCIsIHJlcXVlc3RPcHRpb25zKVxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coXCJkYXRhIGluc2lkZSA9IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpKTtcbiAgXG4gIGNvbnNvbGUubG9nKFwiZmV0Y2hlZFwiKTtcbiAgXG59XG4gIl0sIm5hbWVzIjpbIlJlYWN0IiwiQWRkVXNlciIsInVzZXJJbmZvIiwibmFtZSIsImVtYWlsIiwiaW1hZ2UiLCJkYXRhIiwiZmlyc3QiLCJsYXN0IiwiYWNjb3VudFRpbWVDcmVhdGVkIiwiRGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIlNFUlZFUlBPUlQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/users/AddUser.ts\n");

/***/ })

});