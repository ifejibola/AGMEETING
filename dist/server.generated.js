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

/***/ "./config/config.json":
/*!****************************!*\
  !*** ./config/config.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"development\":{\"username\":\"root\",\"password\":\"arsenal23\",\"database\":\"AGMEETING\",\"host\":\"127.0.0.1\",\"dialect\":\"mysql\"},\"test\":{\"username\":\"root\",\"password\":null,\"database\":\"database_test\",\"host\":\"127.0.0.1\",\"dialect\":\"mysql\"},\"production\":{\"username\":\"root\",\"password\":null,\"database\":\"database_production\",\"host\":\"127.0.0.1\",\"dialect\":\"mysql\"}}');\n\n//# sourceURL=webpack://agmeeting/./config/config.json?");

/***/ }),

/***/ "./models sync recursive":
/*!**********************!*\
  !*** ./models/ sync ***!
  \**********************/
/***/ ((module) => {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = () => ([]);\nwebpackEmptyContext.resolve = webpackEmptyContext;\nwebpackEmptyContext.id = \"./models sync recursive\";\nmodule.exports = webpackEmptyContext;\n\n//# sourceURL=webpack://agmeeting/./models/_sync?");

/***/ }),

/***/ "./client/MainRouter.js":
/*!******************************!*\
  !*** ./client/MainRouter.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Home */ \"./client/core/Home.js\");\n/* harmony import */ var _Moderator_moderator_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Moderator/moderator.login */ \"./client/Moderator/moderator.login.js\");\n/* harmony import */ var _Moderator_signup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Moderator/signup.js */ \"./client/Moderator/signup.js\");\n/* harmony import */ var _Moderator_test_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Moderator/test.js */ \"./client/Moderator/test.js\");\n/* harmony import */ var _core_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/Menu */ \"./client/core/Menu.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\nconst MainRouter = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_core_Menu__WEBPACK_IMPORTED_MODULE_6__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/home\",\n    component: _core_Home__WEBPACK_IMPORTED_MODULE_2__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/msignup\",\n    component: _Moderator_signup_js__WEBPACK_IMPORTED_MODULE_4__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/signin\",\n    component: _Moderator_moderator_login__WEBPACK_IMPORTED_MODULE_3__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/test\",\n    component: _Moderator_test_js__WEBPACK_IMPORTED_MODULE_5__.default\n  })));\n};\n\nconst _default = MainRouter;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(MainRouter, \"MainRouter\", \"/Users/ife/sequelize/client/MainRouter.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/ife/sequelize/client/MainRouter.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://agmeeting/./client/MainRouter.js?");

/***/ }),

/***/ "./client/Moderator/api-mod.js":
/*!*************************************!*\
  !*** ./client/Moderator/api-mod.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create\": () => (/* binding */ create)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst create = async mod => {\n  try {\n    let response = await fetch('/api/mod/', {\n      method: 'POST',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(mod)\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"/Users/ife/sequelize/client/Moderator/api-mod.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://agmeeting/./client/Moderator/api-mod.js?");

/***/ }),

/***/ "./client/Moderator/moderator.login.js":
/*!*********************************************!*\
  !*** ./client/Moderator/moderator.login.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth_api_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/api-auth */ \"./client/auth/api-auth.js\");\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst moderatorLogin = props => {\n  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    email: '',\n    password: '',\n    error: '',\n    redirectToReferrer: false\n  });\n\n  const clickSubmit = () => {\n    const user = {\n      email: values.email || undefined,\n      password: values.password || undefined\n    };\n    (0,_auth_api_auth__WEBPACK_IMPORTED_MODULE_3__.signin)(user).then(data => {\n      if (data.error) {\n        setValues({ ...values,\n          error: data.error\n        });\n      } else {\n        _auth_auth_helper__WEBPACK_IMPORTED_MODULE_4__.default.authenticate(data, () => {\n          setValues({ ...values,\n            error: '',\n            redirectToReferrer: true\n          });\n        });\n        console.log('im in from front end ');\n        alert('user in');\n      }\n    });\n  };\n\n  const handleChange = name => event => {\n    setValues({ ...values,\n      [name]: event.target.value\n    });\n  };\n\n  const {\n    from\n  } = props.location.state || {\n    from: {\n      pathname: '/'\n    }\n  };\n  const {\n    redirectToReferrer\n  } = values;\n\n  if (redirectToReferrer) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Redirect, {\n      to: from\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Form, {\n    inline: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.FormGroup, {\n    className: \"mb-2 me-sm-2 mb-sm-0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Label, {\n    for: \"exampleEmail\",\n    className: \"me-sm-2\"\n  }, \"Email\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Input, {\n    type: \"email\",\n    name: \"email\",\n    id: \"email\",\n    value: values.email,\n    onChange: handleChange('email'),\n    placeholder: \"something@idk.cool\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.FormGroup, {\n    className: \"mb-2 me-sm-2 mb-sm-0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Label, {\n    for: \"examplePassword\",\n    className: \"me-sm-2\"\n  }, \"Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Input, {\n    type: \"password\",\n    name: \"password\",\n    id: \"password\",\n    value: values.password,\n    onChange: handleChange('password'),\n    placeholder: \"don't tell!\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), values.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"Error! \", values.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    type: \"submit\",\n    onClick: clickSubmit\n  }, \"Submit\"));\n};\n\n__signature__(moderatorLogin, \"useState{[values, setValues]({\\n        email: '',\\n        password: '',\\n        error: '',\\n        redirectToReferrer: false\\n    })}\");\n\nconst _default = moderatorLogin;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(moderatorLogin, \"moderatorLogin\", \"/Users/ife/sequelize/client/Moderator/moderator.login.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/ife/sequelize/client/Moderator/moderator.login.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://agmeeting/./client/Moderator/moderator.login.js?");

/***/ }),

/***/ "./client/Moderator/signup.js":
/*!************************************!*\
  !*** ./client/Moderator/signup.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ signup)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_user_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user.js */ \"./models/user.js\");\n/* harmony import */ var _models_user_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_user_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_mod_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-mod.js */ \"./client/Moderator/api-mod.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nfunction signup() {\n  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    email: '',\n    name: '',\n    company: '',\n    password: '',\n    error: ''\n  });\n\n  const handleChange = name => event => {\n    setValues({ ...values,\n      [name]: event.target.value\n    }); // event.preventDefault();\n    // alert('ife!!')\n  };\n\n  const clickSubmit = () => {\n    const user = {\n      name: values.name || undefined,\n      email: values.email || undefined,\n      password: values.password || undefined\n    };\n    (0,_api_mod_js__WEBPACK_IMPORTED_MODULE_3__.create)(user).then(data => {\n      if (data.error) {\n        setValues({ ...values,\n          error: data.error\n        });\n      } else {\n        setValues({ ...values,\n          error: '',\n          open: true\n        });\n      }\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Form, {\n    inline: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Label, {\n    for: \"email\",\n    className: \"me-sm-2\"\n  }, \"Email\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Input, {\n    type: \"text\",\n    name: \"email\",\n    id: \"email\",\n    value: values.email,\n    onChange: handleChange('email'),\n    placeholder: \"something@idk.cool\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.FormGroup, {\n    className: \"mb-2 me-sm-2 mb-sm-0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Label, {\n    for: \"name\",\n    className: \"me-sm-2\"\n  }, \"Full Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Input, {\n    type: \"text\",\n    name: \"name\",\n    id: \"name\",\n    value: values.name,\n    onChange: handleChange('name'),\n    placeholder: \"John Doe\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.FormGroup, {\n    className: \"mb-2 me-sm-2 mb-sm-0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Label, {\n    for: \"company\",\n    className: \"me-sm-2\"\n  }, \"Company\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Input, {\n    type: \"text\",\n    name: \"company\",\n    id: \"company\",\n    value: values.company,\n    onChange: handleChange('company'),\n    placeholder: \"Organization\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.FormGroup, {\n    className: \"mb-2 me-sm-2 mb-sm-0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Label, {\n    for: \"password\",\n    className: \"me-sm-2\"\n  }, \"Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Input, {\n    type: \"password\",\n    name: \"password\",\n    id: \"password\",\n    value: values.password,\n    onChange: handleChange('password'),\n    placeholder: \"Password\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), values.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"Error! \", values.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    type: \"submit\",\n    onClick: clickSubmit\n  }, \"Submit\"));\n}\n\n__signature__(signup, \"useState{[values, setValues]({\\n        email: '',\\n        name: '',\\n        company: '',\\n        password: '',\\n        error: ''\\n    })}\");\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signup, \"signup\", \"/Users/ife/sequelize/client/Moderator/signup.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://agmeeting/./client/Moderator/signup.js?");

/***/ }),

/***/ "./client/Moderator/test.js":
/*!**********************************!*\
  !*** ./client/Moderator/test.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_mod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-mod */ \"./client/Moderator/api-mod.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst signup = props => {\n  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    name: '',\n    email: '',\n    password: '',\n    company: '',\n    error: ''\n  });\n\n  const handleChange = name => event => {\n    console.log(setValues({ ...values,\n      [name]: event.target.value\n    }));\n  };\n\n  const clickSubmit = () => {\n    console.log(alert());\n    const mod = {\n      name: values.name || undefined,\n      email: values.email || undefined,\n      password: values.password || undefined,\n      company: values.company || undefined\n    };\n    console.log(mod); // create(mod).then((data) => {\n    //     if (data.error) {\n    //         setValues({ ...values, error: data.error })\n    //     } else {\n    //         setValues({ ...values, error: '' })\n    //     }\n    // })\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Form, {\n    onSubmit: clickSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.FormGroup, {\n    className: \"mb-2 me-sm-2 mb-sm-0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Label, {\n    for: \"email\",\n    className: \"me-sm-2\"\n  }, \"Email\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Input, {\n    type: \"text\",\n    name: \"email\",\n    id: \"email\",\n    value: values.email,\n    onChange: handleChange('email'),\n    placeholder: \"something@idk.cool\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.FormGroup, {\n    className: \"mb-2 me-sm-2 mb-sm-0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Label, {\n    for: \"name\",\n    className: \"me-sm-2\"\n  }, \"Full Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Input, {\n    type: \"text\",\n    name: \"name\",\n    id: \"name\",\n    value: values.name,\n    onChange: handleChange('name'),\n    placeholder: \"John Doe\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.FormGroup, {\n    className: \"mb-2 me-sm-2 mb-sm-0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Label, {\n    for: \"company\",\n    className: \"me-sm-2\"\n  }, \"Company\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Input, {\n    type: \"text\",\n    name: \"company\",\n    id: \"company\",\n    value: values.company,\n    onChange: handleChange('company'),\n    placeholder: \"Organization\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.FormGroup, {\n    className: \"mb-2 me-sm-2 mb-sm-0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Label, {\n    for: \"password\",\n    className: \"me-sm-2\"\n  }, \"Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Input, {\n    type: \"password\",\n    name: \"password\",\n    id: \"password\",\n    value: values.password,\n    onChange: handleChange('password'),\n    placeholder: \"Password\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    type: \"submit\"\n  }, \"Submit\"));\n};\n\n__signature__(signup, \"useState{[values, setValues]({\\n        name: '',\\n        email: '',\\n        password: '',\\n        company: '',\\n        error: ''\\n    })}\");\n\nconst _default = signup;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signup, \"signup\", \"/Users/ife/sequelize/client/Moderator/test.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/ife/sequelize/client/Moderator/test.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://agmeeting/./client/Moderator/test.js?");

/***/ }),

/***/ "./client/auth/api-auth.js":
/*!*********************************!*\
  !*** ./client/auth/api-auth.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signin\": () => (/* binding */ signin),\n/* harmony export */   \"signout\": () => (/* binding */ signout)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst signin = async user => {\n  try {\n    let response = await fetch('/auth/signin/', {\n      method: 'POST',\n      headers: {\n        'Accept': 'application.json',\n        'Content-Type': 'application/json'\n      },\n      credentials: 'include',\n      body: JSON.stringify(user)\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst signout = async () => {\n  try {\n    let response = await fetch('/auth/signout/', {\n      method: 'GET'\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, \"signin\", \"/Users/ife/sequelize/client/auth/api-auth.js\");\n  reactHotLoader.register(signout, \"signout\", \"/Users/ife/sequelize/client/auth/api-auth.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://agmeeting/./client/auth/api-auth.js?");

/***/ }),

/***/ "./client/auth/auth-helper.js":
/*!************************************!*\
  !*** ./client/auth/auth-helper.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst auth = {\n  isAuthenticated() {\n    if (typeof window == \"undefined\") return false;\n    if (sessionStorage.getItem('jwt')) return JSON.parse(sessionStorage.getItem('jwt'));else return false;\n  },\n\n  authenticate(jwt, cb) {\n    if (typeof window !== \"undefined\") sessionStorage.setItem('jwt', JSON.stringify(jwt));\n    cb();\n  },\n\n  clearJWT(cb) {\n    if (typeof window !== \"undefined\") sessionStorage.removeItem('jwt');\n    cb(); //optional\n  },\n\n  updateMod(mod, cb) {\n    if (typeof window !== \"undefined\") {\n      if (sessionStorage.getItem('jwt')) {\n        let auth = JSON.parse(sessionStorage.getItem('jwt'));\n        auth.mod = mod;\n        sessionStorage.setItem('jwt', JSON.stringify(auth));\n        cb();\n      }\n    }\n  }\n\n};\nconst _default = auth;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(auth, \"auth\", \"/Users/ife/sequelize/client/auth/auth-helper.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/ife/sequelize/client/auth/auth-helper.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://agmeeting/./client/auth/auth-helper.js?");

/***/ }),

/***/ "./client/core/Home.js":
/*!*****************************!*\
  !*** ./client/core/Home.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n // const useStyles = makeStyles(theme => ({\n//     card: {\n//         maxWidth: 600,\n//         margin: 'auto',\n//         marginTop: theme.spacing(5)\n//     }, title: {\n//         padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px\n//   ${theme.spacing(2)}px`,\n//         color: theme.palette.openTitle\n//     },\n//     media: {\n//         minHeight: 400\n//     }\n// }))\n\nfunction Home() {\n  // const classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"helloooooo\", console.log('ife~')));\n}\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Home, \"Home\", \"/Users/ife/sequelize/client/core/Home.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://agmeeting/./client/core/Home.js?");

/***/ }),

/***/ "./client/core/Menu.js":
/*!*****************************!*\
  !*** ./client/core/Menu.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst isActive = (history, path) => {\n  if (history.location.pathname == path) return {\n    color: '#bef67a'\n  };else return {\n    color: '#ffffff'\n  };\n};\n\nconst isPartActive = (history, path) => {\n  if (history.location.pathname.includes(path)) return {\n    color: '#bef67a'\n  };else return {\n    color: '#ffffff'\n  };\n};\n\nconst Menu = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.withRouter)(({\n  history\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"nav\", {\n  className: \"navbar navbar-light bg-light\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n  className: \"container-fluid\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n  className: \"navbar-brand\",\n  href: \"/home\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n  className: \"navbar-brand mb-0 h1\"\n}, \"AGMEETING\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n  className: \"navbar-nav me-auto mb-2 mb-lg-0\"\n}, !_auth_auth_helper__WEBPACK_IMPORTED_MODULE_2__.default.isAuthenticated() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n  to: \"/signup\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n  style: isActive(history, \"/msignup\")\n}, \"Sign up\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n  to: \"/signin\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n  style: isActive(history, \"/signin\")\n}, \"Sign In\"))))));\nconst _default = Menu;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(isActive, \"isActive\", \"/Users/ife/sequelize/client/core/Menu.js\");\n  reactHotLoader.register(isPartActive, \"isPartActive\", \"/Users/ife/sequelize/client/core/Menu.js\");\n  reactHotLoader.register(Menu, \"Menu\", \"/Users/ife/sequelize/client/core/Menu.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/ife/sequelize/client/core/Menu.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://agmeeting/./client/core/Menu.js?");

/***/ }),

/***/ "./client/theme.js":
/*!*************************!*\
  !*** ./client/theme.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ \"@material-ui/core/colors\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createMuiTheme)({\n  palette: {\n    primary: {\n      light: '#8eacbb',\n      main: '#101820FF',\n      dark: '#34515e',\n      contrastText: '#fff'\n    },\n    secondary: {\n      light: '#e7ff8c',\n      main: '#b2ff59',\n      dark: '#7ecb20',\n      contrastText: '#000'\n    },\n    openTitle: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__.blueGrey[400],\n    protectedTitle: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__.lightGreen[400],\n    type: 'light'\n  }\n});\nconst _default = theme;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(theme, \"theme\", \"/Users/ife/sequelize/client/theme.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/ife/sequelize/client/theme.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://agmeeting/./client/theme.js?");

/***/ }),

/***/ "./config/devConfig.js":
/*!*****************************!*\
  !*** ./config/devConfig.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst config = {\n  env: \"development\" || 0,\n  port: process.env.PORT || 8080,\n  jwtSecret: process.env.JWT_SECRET || \"123Secret\",\n  stripe_connect_test_client_id: 'pk_test_51IFiczICzvX2SDBYrXj4LoYOkxLtH2yDUdRbD9K5nlUJgRYZQtoCG7EVtMArAgFgMT6ILX65nTcJyvpIgCPODlJL00cvV3KCvx',\n  stripe_test_secret_key: 'sk_test_51IFiczICzvX2SDBYLSyfOLkUSPe8NXibMfkmW3tPa5Xtc9XVk2InfFwVtWyFOTH8Q4eAgiLXUugOkGFgRXKJvwYh00IUNOBKYF',\n  stripe_test_api_key: 'pk_test_51IFiczICzvX2SDBYrXj4LoYOkxLtH2yDUdRbD9K5nlUJgRYZQtoCG7EVtMArAgFgMT6ILX65nTcJyvpIgCPODlJL00cvV3KCvx'\n};\nconst _default = config;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, \"config\", \"/Users/ife/sequelize/config/devConfig.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/ife/sequelize/config/devConfig.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://agmeeting/./config/devConfig.js?");

/***/ }),

/***/ "./models/index.js":
/*!*************************!*\
  !*** ./models/index.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nconst basename = path.basename(__filename);\nconst env = \"development\" || 0;\n\nconst config = __webpack_require__(/*! ./config/config.json */ \"./config/config.json\")[env];\n\nconst db = {};\nlet sequelize;\n\nif (config.use_env_variable) {\n  sequelize = new Sequelize(process.env[config.use_env_variable], config);\n} else {\n  sequelize = new Sequelize(config.database, config.username, config.password, config);\n}\n\nfs.readdirSync(__dirname).filter(file => {\n  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';\n}).forEach(file => {\n  const model = __webpack_require__(\"./models sync recursive\")(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);\n\n  db[model.name] = model;\n});\nObject.keys(db).forEach(modelName => {\n  if (db[modelName].associate) {\n    db[modelName].associate(db);\n  }\n}); // global.sequelize = sequelize;\n\ndb.sequelize = sequelize;\ndb.Sequelize = Sequelize;\ndb.User = __webpack_require__(/*! ./user */ \"./models/user.js\")(sequelize, Sequelize);\ndb.Moderator = __webpack_require__(/*! ./moderator */ \"./models/moderator.js\")(sequelize, Sequelize);\ndb.Moderator.hasMany(db.User);\ndb.User.belongsTo(db.Moderator); // db.Moderator.User = db.Moderator.hasMany(db.User)\n// db.User.Moderator = db.User.belongsTo(db.Moderator)\n\nmodule.exports = db;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(basename, \"basename\", \"/Users/ife/sequelize/models/index.js\");\n  reactHotLoader.register(env, \"env\", \"/Users/ife/sequelize/models/index.js\");\n  reactHotLoader.register(config, \"config\", \"/Users/ife/sequelize/models/index.js\");\n  reactHotLoader.register(db, \"db\", \"/Users/ife/sequelize/models/index.js\");\n  reactHotLoader.register(sequelize, \"sequelize\", \"/Users/ife/sequelize/models/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://agmeeting/./models/index.js?");

/***/ }),

/***/ "./models/moderator.js":
/*!*****************************!*\
  !*** ./models/moderator.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst {\n  Model,\n  Sequelize\n} = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nconst User = __webpack_require__(/*! ./user */ \"./models/user.js\");\n\nmodule.exports = (sequelize, DataTypes) => {\n  class Moderator extends Sequelize.Model {\n    /**\n     * Helper method for defining associations.\n     * This method is not a part of Sequelize lifecycle.\n     * The `models/index` file will call this method automatically.\n     */\n  }\n\n  ;\n  Moderator.init({\n    // Model Attributes \n    email: {\n      type: Sequelize.STRING,\n      allowNull: false\n    },\n    password: {\n      type: Sequelize.STRING,\n      allowNull: false,\n\n      get() {\n        return () => this.getDataValue('password');\n      }\n\n    },\n    salt: {\n      type: Sequelize.STRING,\n      allowNull: true,\n\n      get() {\n        return () => this.getDataValue('salt');\n      }\n\n    },\n    company: {\n      type: Sequelize.STRING,\n      allowNull: true\n    },\n    name: {\n      type: Sequelize.STRING,\n      allowNull: true\n    },\n    registered: {\n      type: Sequelize.DATE,\n      allowNull: true\n    },\n    is_admin: {\n      type: Sequelize.BOOLEAN,\n      allowNull: true\n    }\n  }, {\n    sequelize,\n    timestamps: false,\n    modelName: 'moderator',\n    freezeTableName: true // Model tableName will be the same as the model name \n\n  });\n  return Moderator;\n};\n\n//# sourceURL=webpack://agmeeting/./models/moderator.js?");

/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst {\n  Model\n} = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nmodule.exports = (sequelize, DataTypes) => {\n  class User extends Model {\n    /**\n     * Helper method for defining associations.\n     * This method is not a part of Sequelize lifecycle.\n     * The `models/index` file will call this method automatically.\n     */\n    // getbasicuserinfo() {\n    //   return [this.name, this.email].join(' ');\n    // }\n    // allusers() {\n    //   return this.findAll({ limit: 10 }).then((user) => {\n    //     console.log(JSON.stringify(user));\n    //   })\n    // }\n    // static associate(models) {\n    //   // define association here\n    // }\n  }\n\n  ;\n  User.init({\n    // Model Attributes \n    email: {\n      type: Sequelize.STRING,\n      allowNull: true\n    },\n    password: {\n      type: Sequelize.STRING,\n      allowNull: true\n    },\n    name: {\n      type: Sequelize.STRING,\n      allowNull: true\n    },\n    registered: {\n      type: Sequelize.DATE,\n      allowNull: true\n    },\n    is_admin: {\n      type: Sequelize.BOOLEAN,\n      allowNull: true\n    }\n  }, {\n    sequelize,\n    timestamps: false,\n    modelName: 'user',\n    freezeTableName: true // Model tableName will be the same as the model name \n\n  });\n  return User;\n};\n\n//# sourceURL=webpack://agmeeting/./models/user.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ \"./models/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_devConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../config/devConfig */ \"./config/devConfig.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n //Salt generation & encryption helper func\n\n_models__WEBPACK_IMPORTED_MODULE_0__.Moderator.generateSalt = function () {\n  return crypto__WEBPACK_IMPORTED_MODULE_4___default().randomBytes(16).toString('base64');\n}; // generate an encrypted hash from the plainText password and a unique salt value\n\n\n_models__WEBPACK_IMPORTED_MODULE_0__.Moderator.encryptPassword = function (plainText, salt) {\n  if (!plainText) return '';\n\n  try {\n    return crypto__WEBPACK_IMPORTED_MODULE_4___default().createHmac('sha1', salt).update(plainText).digest('hex');\n  } catch (err) {\n    return '';\n  }\n}; // Moderator.encryptPassword = function (plainText, salt) {\n//     return crypto\n//         .createHash('RSA-SHA256')\n//         .update(plainText)\n//         .update(salt)\n//         .digest('hex')\n// }\n// automatic password encryption using Sequelize hooks\n\n\nconst setSaltAndPassword = mod => {\n  if (mod.changed('password')) {\n    mod.salt = _models__WEBPACK_IMPORTED_MODULE_0__.Moderator.generateSalt();\n    mod.password = _models__WEBPACK_IMPORTED_MODULE_0__.Moderator.encryptPassword(mod.password(), mod.salt());\n  }\n};\n\n_models__WEBPACK_IMPORTED_MODULE_0__.Moderator.beforeCreate(setSaltAndPassword);\n_models__WEBPACK_IMPORTED_MODULE_0__.Moderator.beforeUpdate(setSaltAndPassword); // Validate password\n// const correctPassword = function (enteredPassword, mod) {\n//     return Moderator.encryptPassword(enteredPassword, mod.salt()) === mod.password()\n// }\n\n_models__WEBPACK_IMPORTED_MODULE_0__.Moderator.prototype.correctPassword = (enteredPassword, mod) => {\n  return _models__WEBPACK_IMPORTED_MODULE_0__.Moderator.encryptPassword(enteredPassword, mod.salt()) === mod.password();\n};\n\nconst signin = async (req, res) => {\n  try {\n    let mod = await _models__WEBPACK_IMPORTED_MODULE_0__.Moderator.findOne({\n      where: {\n        email: req.body.email\n      }\n    }); // verify existence of email \n\n    if (!mod) return res.status('401').json({\n      error: 'User not found'\n    }); // Verify password \n\n    if (!mod.correctPassword(req.body.password, mod)) {\n      return res.status('401').send({\n        error: \"Email and password don't match.\"\n      });\n    } // if (!correctPassword(req.body.password, mod)) {\n    //     return res.status('401').send({\n    //         error: \"Email and password don't match.\"\n    //     })\n    // }\n\n\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n      _id: mod._id\n    }, _config_devConfig__WEBPACK_IMPORTED_MODULE_3__.default.jwtSecret);\n    res.cookie(\"AGCookie\", token, {\n      expire: new Date() + 9999\n    });\n    console.log(mod.name, \" signed in\");\n    return res.json({\n      token,\n      mod: {\n        _id: mod._id,\n        name: mod.name,\n        email: mod.email\n      }\n    });\n  } catch (err) {\n    return res.status('401').json({\n      error: \"Could not sign in\"\n    });\n  }\n};\n/*\n\n    Verify that the incoming request has a valid jwt in the Auth header.\n        If valid, apped modID in the 'auth' key to the req object\n*/\n\n\nconst requireSignin = express_jwt__WEBPACK_IMPORTED_MODULE_2___default()({\n  secret: _config_devConfig__WEBPACK_IMPORTED_MODULE_3__.default.jwtSecret,\n  userProperty: 'auth',\n  algorithms: ['sha1'] // algorithms: ['sha1']\n\n});\n\nconst hasAuthorization = (req, res, next) => {\n  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n\n  if (!authorized) {\n    return res.status('403').json({\n      error: \"User is not authorized\"\n    });\n  }\n\n  next();\n};\n\nconst _default = {\n  signin,\n  requireSignin,\n  hasAuthorization\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(setSaltAndPassword, \"setSaltAndPassword\", \"/Users/ife/sequelize/server/controllers/auth.controller.js\");\n  reactHotLoader.register(signin, \"signin\", \"/Users/ife/sequelize/server/controllers/auth.controller.js\");\n  reactHotLoader.register(requireSignin, \"requireSignin\", \"/Users/ife/sequelize/server/controllers/auth.controller.js\");\n  reactHotLoader.register(hasAuthorization, \"hasAuthorization\", \"/Users/ife/sequelize/server/controllers/auth.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/ife/sequelize/server/controllers/auth.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://agmeeting/./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/mod.controller.js":
/*!**********************************************!*\
  !*** ./server/controllers/mod.controller.js ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/ */ \"./models/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/extend */ \"lodash/extend\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n // import request from 'request'\n// const Moderator = require('../../models/moderator')\n\nconst create = async (req, res) => {\n  // Moderator.User = User.belongsTo(Moderator, { as: 'user' });\n  // User.belongsTo(Moderator, { as: 'user' });\n  _models__WEBPACK_IMPORTED_MODULE_0__.Moderator.User = _models__WEBPACK_IMPORTED_MODULE_0__.Moderator.hasMany(_models__WEBPACK_IMPORTED_MODULE_0__.User, {\n    as: 'user'\n  }); // add moderatorid to User table, assessors getMod, set Mod\n\n  const mod = await _models__WEBPACK_IMPORTED_MODULE_0__.Moderator.create(req.body, {\n    include: [{\n      model: _models__WEBPACK_IMPORTED_MODULE_0__.User,\n      as: 'user'\n    }],\n    freezeTableName: true\n  }); // save user to db\n\n  try {\n    await mod.save();\n    console.log(`${mod.name} was added to the db`);\n    return res.status(200).json({\n      message: \"Successfully signed up!!\"\n    });\n  } catch (err) {\n    return res.status(400).console.log(err);\n  }\n};\n/*\n    Load mod and append to req\n        fetches and loads the user based on user ID into the request object\n*/\n\n\nconst modByID = async (req, res, next, id) => {\n  try {\n    let mod = await _models__WEBPACK_IMPORTED_MODULE_0__.Moderator.findOne({\n      where: {\n        id: id\n      }\n    });\n    if (!mod) return res.status('400').json({\n      error: \"User not found\"\n    });\n    req.profile = mod;\n    next();\n  } catch (err) {\n    return res.status('400').json({\n      error: \"Could not retrieve user\"\n    });\n  }\n};\n/*\n    executes modById to load the user by the userId value, then read func\n*/\n\n\nconst read = (req, res) => {\n  //remove sensitive information when loading profile\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  return res.json(res.profile);\n};\n/*\n    Moderator adding a user \n*/\n\n\nconst createUser = async (req, res, next) => {\n  const user = await _models__WEBPACK_IMPORTED_MODULE_0__.User.create(req.body);\n\n  try {\n    await user.save();\n    return res.status(200).json({\n      message: \"Successfully signed up!\"\n    });\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__.default.getErrorMessage(err)\n    });\n  }\n};\n\nconst _default = {\n  create,\n  modByID,\n  read,\n  createUser\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"/Users/ife/sequelize/server/controllers/mod.controller.js\");\n  reactHotLoader.register(modByID, \"modByID\", \"/Users/ife/sequelize/server/controllers/mod.controller.js\");\n  reactHotLoader.register(read, \"read\", \"/Users/ife/sequelize/server/controllers/mod.controller.js\");\n  reactHotLoader.register(createUser, \"createUser\", \"/Users/ife/sequelize/server/controllers/mod.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/ife/sequelize/server/controllers/mod.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://agmeeting/./server/controllers/mod.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/user */ \"./models/user.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models_user__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models */ \"./models/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/extend */ \"lodash/extend\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! request */ \"request\");\n/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(request__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n// import User from '../models/User.model'\n\n\n\n\n\n\nconst create = async (req, res) => {\n  // console.log(user.toJSON());\n  const us = {\n    email: req.body.email,\n    password: req.body.password,\n    name: req.body.name,\n    is_admin: req.body.is_admin\n  }; // Validate request\n  // if (!req.body.title) {\n  //     res.status(400).send({\n  //         message: \"Content can not be empty!\"\n  //     });\n  //     return;\n  // }\n  // user.create(us).then(data => {\n  //     res.send(data);\n  // })        \n\n  const user = await _models__WEBPACK_IMPORTED_MODULE_1___default().User.create(req.body, {\n    include: [(_models__WEBPACK_IMPORTED_MODULE_1___default().Moderator)]\n  }); // save user to db\n\n  try {\n    await user.save();\n    console.log(`${user.email} was added to the db`);\n    return res.status(200).json({\n      message: \"Successfully signed up!!\"\n    });\n  } catch (err) {\n    return res.status(400).console.log(err);\n  }\n};\n\nconst list = async (req, res) => {\n  try {\n    const user = await _models__WEBPACK_IMPORTED_MODULE_1___default().User.findAll({\n      limit: 10\n    }).then(user => {\n      console.log(JSON.stringify(user));\n    });\n  } catch (err) {\n    return res.status(400).console.log(err);\n  }\n};\n\nconst _default = {\n  create,\n  list\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"/Users/ife/sequelize/server/controllers/user.controller.js\");\n  reactHotLoader.register(list, \"list\", \"/Users/ife/sequelize/server/controllers/user.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/ife/sequelize/server/controllers/user.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://agmeeting/./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_devConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/devConfig */ \"./config/devConfig.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n // import webpackHotMiddleware from 'webpack-hot-middleware'\n\n\n\nconst compile = app => {\n  if (_config_devConfig__WEBPACK_IMPORTED_MODULE_0__.default.env === \"development\") {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()((_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3___default()));\n    const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: (_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3___default().output.publicPath)\n    });\n    app.use(middleware); // app.use(webpackHotMiddleware(compiler))\n  }\n};\n\nconst _default = {\n  compile\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"/Users/ife/sequelize/server/devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/ife/sequelize/server/devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://agmeeting/./server/devBundle.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst getUniqueErrorMessage = err => {\n  let output;\n\n  try {\n    let fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n    output = fieldName.charAt(0).toUpperCase() + fieldName.silce(1) + ' already exists';\n  } catch (ex) {\n    output = 'Unique field already exists';\n  }\n\n  return output;\n};\n\nconst getErrorMessage = err => {\n  let message = '';\n\n  if (err.code) {\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = getUniqueErrorMessage(err);\n        break;\n\n      default:\n        message = 'Something went wrong';\n    }\n  } else {\n    for (let errName in err.errors) {\n      if (err.errors[errName].message) message = err.errors[errName].message;\n    }\n  }\n\n  return message;\n};\n\nconst _default = {\n  getErrorMessage\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getUniqueErrorMessage, \"getUniqueErrorMessage\", \"/Users/ife/sequelize/server/helpers/dbErrorHandler.js\");\n  reactHotLoader.register(getErrorMessage, \"getErrorMessage\", \"/Users/ife/sequelize/server/helpers/dbErrorHandler.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/ife/sequelize/server/helpers/dbErrorHandler.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://agmeeting/./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/routes/mod.auth.routes.js":
/*!******************************************!*\
  !*** ./server/routes/mod.auth.routes.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/auth/signin').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__.default.signin);\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/Users/ife/sequelize/server/routes/mod.auth.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/ife/sequelize/server/routes/mod.auth.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://agmeeting/./server/routes/mod.auth.routes.js?");

/***/ }),

/***/ "./server/routes/mod.routes.js":
/*!*************************************!*\
  !*** ./server/routes/mod.routes.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_mod_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/mod.controller */ \"./server/controllers/mod.controller.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/mod/').post(_controllers_mod_controller__WEBPACK_IMPORTED_MODULE_1__.default.create);\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/Users/ife/sequelize/server/routes/mod.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/ife/sequelize/server/routes/mod.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://agmeeting/./server/routes/mod.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/users').post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.create); // .get(userCtrl.list)\n\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/Users/ife/sequelize/server/routes/user.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/ife/sequelize/server/routes/user.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://agmeeting/./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/script.js":
/*!**************************!*\
  !*** ./server/script.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _routes_mod_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/mod.routes */ \"./server/routes/mod.routes.js\");\n/* harmony import */ var _routes_mod_auth_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/mod.auth.routes */ \"./server/routes/mod.auth.routes.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models */ \"./models/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_models__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n/* harmony import */ var _config_devConfig__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../config/devConfig */ \"./config/devConfig.js\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../template */ \"./template.js\");\n/* harmony import */ var _client_core_Home__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../client/core/Home */ \"./client/core/Home.js\");\n/* harmony import */ var _client_theme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../client/theme */ \"./client/theme.js\");\n/* harmony import */ var _client_MainRouter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../client/MainRouter */ \"./client/MainRouter.js\");\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/styles */ \"@material-ui/styles\");\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_21__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n //SSR\n\n\n\n\n //config\n\n\n\n\n\n\n\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst server = express__WEBPACK_IMPORTED_MODULE_0___default()();\n_devBundle__WEBPACK_IMPORTED_MODULE_15__.default.compile(server); // parse body params and attache them to req.body\n\nserver.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default().json());\nserver.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default().urlencoded({\n  extended: true\n}));\nserver.use(cookie_parser__WEBPACK_IMPORTED_MODULE_4___default()());\nserver.use(compression__WEBPACK_IMPORTED_MODULE_5___default()()); // secure apps by setting various HTTP headers\n\nserver.use(helmet__WEBPACK_IMPORTED_MODULE_7___default()()); // enable CORS - Cross Origin Resource Sharing\n\nserver.use(cors__WEBPACK_IMPORTED_MODULE_6___default()());\nserver.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default().static(path__WEBPACK_IMPORTED_MODULE_2___default().join(CURRENT_WORKING_DIR, 'dist')));\nserver.use('/', _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__.default);\nserver.use('/', _routes_mod_routes__WEBPACK_IMPORTED_MODULE_9__.default);\nserver.use('/', _routes_mod_auth_routes__WEBPACK_IMPORTED_MODULE_10__.default);\nserver.get('*', (req, res, next) => {\n  // const sheets = new ServerStyleSheets()\n  const context = {}; // const markup = ReactDOMServer.renderToString(\n  //     sheets.collect(\n  //         <StaticRouter location={req.url} context={context}>\n  //             <ThemeProvider theme={theme}>\n  //                 <MainRouter />\n  //             </ThemeProvider>\n  //         </StaticRouter>\n  //     )\n  // )\n\n  const markup = react_dom_server__WEBPACK_IMPORTED_MODULE_13___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.StaticRouter, {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_client_MainRouter__WEBPACK_IMPORTED_MODULE_20__.default, null)));\n\n  if (context.url) {\n    return res.redirect(303, context.url);\n  } // const css = sheets.toString()\n\n\n  res.status(200).send((0,_template__WEBPACK_IMPORTED_MODULE_17__.default)({\n    markup: markup // css: css\n\n  }));\n});\nserver.use((err, req, res, next) => {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({\n      \"error\": err.name + \": \" + err.message\n    });\n  } else if (err) {\n    res.status(400).json({\n      \"error\": err.name + \": \" + err.message\n    });\n    console.log(err);\n  }\n});\n_models__WEBPACK_IMPORTED_MODULE_11___default().sequelize.sync().then(() => {\n  console.log(\"Drop and re-sync db..\");\n  server.listen(_config_devConfig__WEBPACK_IMPORTED_MODULE_16__.default.port, () => {\n    // console.log('%s listening at %s', server.name, server.url);\n    console.log(`Listening on port: ${_config_devConfig__WEBPACK_IMPORTED_MODULE_16__.default.port}`);\n  });\n});\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/ife/sequelize/server/script.js\");\n  reactHotLoader.register(server, \"server\", \"/Users/ife/sequelize/server/script.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://agmeeting/./server/script.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst _default = ({\n  markup\n}) => {\n  return `<!doctype html>\n      <html lang=\"en\">\n        <head>\n          <meta charset=\"utf-8\">\n          <title>AGMEETING</title>\n          <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\">\n          <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n          <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n\n          <style>\n              a{\n                text-decoration: none\n              }\n          </style>\n        </head>\n        <body style=\"margin:0\">\n          <div id=\"root\">${markup}</div>\n          <script type=\"text/javascript\" src=\"/dist/bundle.js\"></script>\n        </body>\n      </html>`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/ife/sequelize/template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://agmeeting/./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'eval-source-map',\n  entry: [// 'react-hot-loader/patch',\n  // 'webpack-hot-middleware/client?reload=true',\n  path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n  devtool: 'cheap-module-source-map',\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  resolve: {\n    // ... rest of the resolve config\n    fallback: {\n      \"path\": /*require.resolve*/(/*! path-browserify */ \"path-browserify\"),\n      \"crypto\": /*require.resolve*/(/*! crypto-browserify */ \"crypto-browserify\"),\n      \"stream\": /*require.resolve*/(/*! stream-browserify */ \"stream-browserify\"),\n      \"buffer\": /*require.resolve*/(/*! buffer/ */ \"buffer/\")\n    } // extensions: ['.js', '.jsx']\n\n  },\n  externals: [\"fs\"],\n  stats: 'errors-only',\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }]\n  },\n  plugins: [// new webpack.HotModuleReplacementPlugin(),\n  // new webpack.NoEmitOnErrorsPlugin(),\n  new webpack.DefinePlugin({\n    'process.env.NODE_ENV': JSON.stringify('development')\n  }), new webpack.ProvidePlugin({\n    process: 'process/browser',\n    Buffer: ['buffer', 'Buffer']\n  })]\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/ife/sequelize/webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"/Users/ife/sequelize/webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://agmeeting/./webpack.config.client.js?");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/colors");;

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/styles");;

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("babel-polyfill");;

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");;

/***/ }),

/***/ "buffer/":
/*!**************************!*\
  !*** external "buffer/" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer/");;

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("compression");;

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");;

/***/ }),

/***/ "crypto-browserify":
/*!************************************!*\
  !*** external "crypto-browserify" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto-browserify");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-jwt");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("helmet");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "lodash/extend":
/*!********************************!*\
  !*** external "lodash/extend" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/extend");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "path-browserify":
/*!**********************************!*\
  !*** external "path-browserify" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("path-browserify");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");;

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("reactstrap");;

/***/ }),

/***/ "request":
/*!**************************!*\
  !*** external "request" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("request");;

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("sequelize");;

/***/ }),

/***/ "stream-browserify":
/*!************************************!*\
  !*** external "stream-browserify" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream-browserify");;

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");;

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("babel-polyfill");
/******/ 	var __webpack_exports__ = __webpack_require__("./server/script.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;