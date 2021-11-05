/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server/controllers/index.controller.js":
/*!************************************************!*\
  !*** ./server/controllers/index.controller.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("let express = __webpack_require__(/*! express */ \"express\");\n\nconst router = express.Router();\nrouter.get('/', (req, res) => {\n  res.status(200).send(\"/ page\");\n});\nrouter.get('/servering', (req, res) => {\n  res.status(200).send(\"/ page\");\n});\nmodule.exports = router;\n\n//# sourceURL=webpack://agmeeting_2/./server/controllers/index.controller.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var __dirname = \"/\";\nconst express = __webpack_require__(/*! express */ \"express\");\n\nconst app = express();\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst port = process.env.PORT || 3000; // import routes from \"../client/routes\";\n\nconst indexRoutes = __webpack_require__(/*! ./controllers/index.controller */ \"./server/controllers/index.controller.js\");\n\nconst DIST_DIR = path.join(__dirname, \"public\");\nconst HTML_FILE = path.join(DIST_DIR, \"index.html\");\napp.use(express.json());\napp.use(express.static(\"public\"));\napp.use(express.static(\"build\")); //this works too\n// app.use(express.static(path.join(__dirname, \"../public\")));\n// app.use(express.static(path.join(__dirname, \"../dist\")));\n\napp.use(\"/api\", indexRoutes);\napp.get(\"*\", (req, res) => {\n  res.sendFile(path.join(__dirname, '../public', '/index.html'), function (err) {\n    if (err) {\n      res.status(500).send(err);\n    }\n  });\n}); // custom 404 page\n\napp.use(function (req, res) {\n  // res.type('text/plain');\n  res.status(404).send('404 - not found');\n}); // custom 500 page\n\napp.use(function (err, req, res, next) {\n  console.error(err.stack); // res.type('text/plain')\n\n  res.status(500).send('500 - Server Error');\n}); // app.use(function (req, res, next) {\n// });\n\napp.listen(port, () => {\n  console.log(`The app server is running on port: ${port}`);\n});\n\n//# sourceURL=webpack://agmeeting_2/./server/server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.js");
/******/ 	
/******/ })()
;