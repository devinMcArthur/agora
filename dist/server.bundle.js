/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/jsx");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nodeFullClear = exports.setNodeLoading = exports.clearNode = exports.clearNodes = exports.clearDuplicateSourceAndSubtopics = exports.getSubtopics = exports.getSources = exports.getAllNodesForSelect = exports.getNodeByID = exports.getRootNodes = exports.editNode = exports.createNode = exports.NODE_FULL_CLEAR = exports.CLEAR_NODE = exports.CLEAR_NODES = exports.NODE_LOADING = exports.GET_SUBTOPICS = exports.GET_SOURCES = exports.GET_ALL_NODES = exports.GET_NODES = exports.GET_NODE = undefined;

var _apiCaller = __webpack_require__(26);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

var _setAuthToken = __webpack_require__(33);

var _setAuthToken2 = _interopRequireDefault(_setAuthToken);

var _jwtDecode = __webpack_require__(34);

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _ErrorActions = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GET_NODE = exports.GET_NODE = "GET_NODE";
var GET_NODES = exports.GET_NODES = "GET_NODES";
var GET_ALL_NODES = exports.GET_ALL_NODES = "GET_ALL_NODES";
var GET_SOURCES = exports.GET_SOURCES = "GET_SOURCES";
var GET_SUBTOPICS = exports.GET_SUBTOPICS = "GET_SUBTOPICS";
var NODE_LOADING = exports.NODE_LOADING = "NODE_LOADING";
var CLEAR_NODES = exports.CLEAR_NODES = "CLEAR_NODES";
var CLEAR_NODE = exports.CLEAR_NODE = "CLEAR_NODE";
var NODE_FULL_CLEAR = exports.NODE_FULL_CLEAR = "NODE_FULL_CLEAR";

// Create a node
var createNode = exports.createNode = function createNode(node) {
  return function (dispatch) {
    return (0, _apiCaller2.default)("node", "post", node).then(function (res) {
      return location.reload();
    }).catch(function (err) {
      return dispatch({ type: _ErrorActions.GET_ERRORS, payload: err });
    });
  };
};

// Edit a node
var editNode = exports.editNode = function editNode(node) {
  return function (dispatch) {
    return (0, _apiCaller2.default)("node/" + node.id + "/edit", "post", node).then(function (res) {
      return location.reload();
    }).catch(function (err) {
      return dispatch({ type: _ErrorActions.GET_ERRORS, payload: err });
    });
  };
};

// Get all root nodes (no sources)
var getRootNodes = exports.getRootNodes = function getRootNodes() {
  return function (dispatch) {
    dispatch(setNodeLoading());
    return (0, _apiCaller2.default)("nodes/root", "get").then(function (res) {
      return dispatch({
        type: GET_NODES,
        payload: res
      });
    }).catch(function (err) {
      return dispatch({ type: _ErrorActions.GET_ERRORS, payload: err });
    });
  };
};

// Retrieve Node by ID
var getNodeByID = exports.getNodeByID = function getNodeByID(id) {
  return function (dispatch) {
    dispatch(setNodeLoading());
    return (0, _apiCaller2.default)("/node/" + id, "get").then(function (res) {
      return dispatch({
        type: GET_NODE,
        payload: res
      });
    }).catch(function (err) {
      return dispatch({
        type: _ErrorActions.GET_ERRORS,
        payload: err
      });
    });
  };
};

// Retrieve an ID and Title for all Nodes
var getAllNodesForSelect = exports.getAllNodesForSelect = function getAllNodesForSelect() {
  return function (dispatch) {
    dispatch(setNodeLoading());
    return (0, _apiCaller2.default)("/nodes/form/all", "get").then(function (res) {
      return dispatch({ type: GET_ALL_NODES, payload: res });
    }).catch(function (err) {
      return dispatch({ type: _ErrorActions.GET_ERRORS, payload: err });
    });
  };
};

// Get all source nodes for a given node
var getSources = exports.getSources = function getSources(id) {
  return function (dispatch) {
    dispatch(setNodeLoading());
    return (0, _apiCaller2.default)("/node/" + id + "/sources", "get").then(function (res) {
      return dispatch({ type: GET_SOURCES, payload: res });
    }).catch(function (err) {
      return dispatch({ type: _ErrorActions.GET_ERRORS, payload: err });
    });
  };
};

// Get all subtopic nodes for a given node
var getSubtopics = exports.getSubtopics = function getSubtopics(id) {
  return function (dispatch) {
    dispatch(setNodeLoading());
    return (0, _apiCaller2.default)("/node/" + id + "/subtopics", "get").then(function (res) {
      return dispatch({ type: GET_SUBTOPICS, payload: res });
    }).catch(function (err) {
      return dispatch({ type: _ErrorActions.GET_ERRORS, payload: err });
    });
  };
};

// Remove duplicate sources and subtopics from all nodes
var clearDuplicateSourceAndSubtopics = exports.clearDuplicateSourceAndSubtopics = function clearDuplicateSourceAndSubtopics(dispatch) {
  return (0, _apiCaller2.default)("/node/remove/duplicates/all", "get").then(function (res) {
    return location.reload();
  }).catch(function (err) {
    return dispatch({ type: _ErrorActions.GET_ERRORS, payload: err });
  });
};

var clearNodes = exports.clearNodes = function clearNodes() {
  return {
    type: CLEAR_NODES
  };
};

var clearNode = exports.clearNode = function clearNode() {
  return {
    type: CLEAR_NODE
  };
};

var setNodeLoading = exports.setNodeLoading = function setNodeLoading() {
  return {
    type: NODE_LOADING
  };
};

var nodeFullClear = exports.nodeFullClear = function nodeFullClear() {
  return {
    type: NODE_FULL_CLEAR
  };
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logoutUser = exports.setCurrentUser = exports.loginUser = exports.registerUser = exports.GET_ERRORS = exports.SET_CURRENT_USER = undefined;

var _apiCaller = __webpack_require__(26);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

var _setAuthToken = __webpack_require__(33);

var _setAuthToken2 = _interopRequireDefault(_setAuthToken);

var _jwtDecode = __webpack_require__(34);

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SET_CURRENT_USER = exports.SET_CURRENT_USER = "SET_CURRENT_USER";
var GET_ERRORS = exports.GET_ERRORS = "GET_ERRORS";

// Register a User
var registerUser = exports.registerUser = function registerUser(user, history) {
  return function (dispatch) {
    return (0, _apiCaller2.default)("users", "post", user).then(function (res) {
      return history.push("/login");
    });
  };
};

var loginUser = exports.loginUser = function loginUser(userData) {
  return function (dispatch) {
    return (0, _apiCaller2.default)("user/login", "post", userData).then(function (res) {
      var token = res.token;

      localStorage.setItem("jwToken", token);
      (0, _setAuthToken2.default)(token);
      var decoded = (0, _jwtDecode2.default)(token);
      dispatch(setCurrentUser(decoded));
      location.reload();
    }).catch(function (err) {
      dispatch({ type: GET_ERRORS, payload: err });
    });
  };
};

// Set logged in user
var setCurrentUser = exports.setCurrentUser = function setCurrentUser(decoded) {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

var logoutUser = exports.logoutUser = function logoutUser() {
  return function (dispatch) {
    localStorage.removeItem("jwToken");
    (0, _setAuthToken2.default)(false);
    dispatch(setCurrentUser({}));
    location.reload();
  };
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleAddPost = toggleAddPost;
// Export Constants
var TOGGLE_ADD_POST = exports.TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';

// Export Actions
function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST
  };
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPost = exports.getPosts = undefined;

var _toConsumableArray2 = __webpack_require__(60);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _PostActions = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initial State
var initialState = { data: [] };

var PostReducer = function PostReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _PostActions.ADD_POST:
      return {
        data: [action.post].concat((0, _toConsumableArray3.default)(state.data))
      };

    case _PostActions.ADD_POSTS:
      return {
        data: action.posts
      };

    case _PostActions.DELETE_POST:
      return {
        data: state.data.filter(function (post) {
          return post.cuid !== action.cuid;
        })
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
var getPosts = exports.getPosts = function getPosts(state) {
  return state.posts.data;
};

// Get post by cuid
var getPost = exports.getPost = function getPost(state, cuid) {
  return state.posts.data.filter(function (post) {
    return post.cuid === cuid;
  })[0];
};

// Export Reducer
exports.default = PostReducer;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DELETE_POST = exports.ADD_POSTS = exports.ADD_POST = undefined;
exports.addPost = addPost;
exports.addPostRequest = addPostRequest;
exports.addPosts = addPosts;
exports.fetchPosts = fetchPosts;
exports.fetchPost = fetchPost;
exports.deletePost = deletePost;
exports.deletePostRequest = deletePostRequest;

var _apiCaller = __webpack_require__(26);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export Constants
var ADD_POST = exports.ADD_POST = 'ADD_POST';
var ADD_POSTS = exports.ADD_POSTS = 'ADD_POSTS';
var DELETE_POST = exports.DELETE_POST = 'DELETE_POST';

// Export Actions
function addPost(post) {
  return {
    type: ADD_POST,
    post: post
  };
}

function addPostRequest(post) {
  return function (dispatch) {
    return (0, _apiCaller2.default)('posts', 'post', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content
      }
    }).then(function (res) {
      return dispatch(addPost(res.post));
    });
  };
}

function addPosts(posts) {
  return {
    type: ADD_POSTS,
    posts: posts
  };
}

function fetchPosts() {
  return function (dispatch) {
    return (0, _apiCaller2.default)('posts').then(function (res) {
      dispatch(addPosts(res.posts));
    });
  };
}

function fetchPost(cuid) {
  return function (dispatch) {
    return (0, _apiCaller2.default)('posts/' + cuid).then(function (res) {
      return dispatch(addPost(res.post));
    });
  };
}

function deletePost(cuid) {
  return {
    type: DELETE_POST,
    cuid: cuid
  };
}

function deletePostRequest(cuid) {
  return function (dispatch) {
    return (0, _apiCaller2.default)('posts/' + cuid, 'delete').then(function () {
      return dispatch(deletePost(cuid));
    });
  };
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_URL = undefined;
exports.default = callApi;

var _isomorphicFetch = __webpack_require__(61);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _config = __webpack_require__(62);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_URL = exports.API_URL = typeof window === "undefined" || process.env.NODE_ENV === "test" ? process.env.BASE_URL || "http://localhost:" + (process.env.PORT || _config2.default.port) + "/api" : "/api";

function callApi(endpoint) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "get";
  var body = arguments[2];

  return (0, _isomorphicFetch2.default)(API_URL + "/" + endpoint, {
    headers: { "content-type": "application/json" },
    method: method,
    body: JSON.stringify(body)
  }).then(function (response) {
    return response.json().then(function (json) {
      return { json: json, response: response };
    });
  }).then(function (_ref) {
    var json = _ref.json,
        response = _ref.response;

    if (!response.ok) {
      return Promise.reject(json);
    }

    return json;
  }).then(function (response) {
    return response;
  }, function (error) {
    return error;
  });
}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(13);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

// Highlight Array Legend
// 0: Nothing
// 1: Speculation
// 2: Opinion
// 3: Fact
// 4: Incorrect Statement
// 5: Question
// 6: Command
// 7: Axiom

var nodeSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    string: {
      type: String
    },
    highlightArray: {
      type: [Number]
    },
    authorArray: {
      type: [Schema.Types.ObjectId]
    }
  },
  subtopics: {
    type: [Schema.Types.ObjectId]
  },
  sources: {
    type: [Schema.Types.ObjectId]
  },
  version: {
    type: Number,
    required: true,
    default: 0
  },
  versions: {
    type: [Schema.Types.ObjectId]
  }
});

exports.default = _mongoose2.default.model("Node", nodeSchema);

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShowAddPost = undefined;

var _AppActions = __webpack_require__(23);

// Initial State
var initialState = {
  showAddPost: false
}; // Import Actions


var AppReducer = function AppReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _AppActions.TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
var getShowAddPost = exports.getShowAddPost = function getShowAddPost(state) {
  return state.app.showAddPost;
};

// Export Reducer
exports.default = AppReducer;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localizationData = exports.enabledLanguages = undefined;

var _reactIntl = __webpack_require__(11);

var _intl = __webpack_require__(65);

var _intl2 = _interopRequireDefault(_intl);

var _intlLocalesSupported = __webpack_require__(66);

var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);

__webpack_require__(67);

var _en = __webpack_require__(68);

var _en2 = _interopRequireDefault(_en);

var _en3 = __webpack_require__(69);

var _en4 = _interopRequireDefault(_en3);

__webpack_require__(70);

var _fr = __webpack_require__(71);

var _fr2 = _interopRequireDefault(_fr);

var _fr3 = __webpack_require__(72);

var _fr4 = _interopRequireDefault(_fr3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// list of available languages
var enabledLanguages = exports.enabledLanguages = ['en', 'fr'];

// this object will have language-specific data added to it which will be placed in the state when that language is active
// if localization data get to big, stop importing in all languages and switch to using API requests to load upon switching languages
var localizationData = exports.localizationData = {};

// here you bring in 'intl' browser polyfill and language-specific polyfills
// (needed as safari doesn't have native intl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
// as well as react-intl's language-specific data
// be sure to use static imports for language or else every language will be included in your build (adds ~800 kb)


// need Intl polyfill, Intl not supported in Safari


if (global.Intl) {
  // Determine if the built-in `Intl` has the locale data we need.
  if (!(0, _intlLocalesSupported2.default)(enabledLanguages)) {
    // `Intl` exists, but it doesn't have the data we need, so load the
    // polyfill and patch the constructors we need with the polyfill's.
    global.Intl.NumberFormat = _intl2.default.NumberFormat;
    global.Intl.DateTimeFormat = _intl2.default.DateTimeFormat;
  }
} else {
  // No `Intl`, so use and load the polyfill.
  global.Intl = _intl2.default;
}

// use this to allow nested messages, taken from docs:
// https://github.com/yahoo/react-intl/wiki/Upgrade-Guide#flatten-messages-object
function flattenMessages() {
  var nestedMessages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return Object.keys(nestedMessages).reduce(function (messages, key) {
    var value = nestedMessages[key];
    var prefixedKey = prefix ? prefix + '.' + key : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value; // eslint-disable-line no-param-reassign
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
}

// bring in intl polyfill, react-intl, and app-specific language data

(0, _reactIntl.addLocaleData)(_en2.default);
localizationData.en = _en4.default;
localizationData.en.messages = flattenMessages(localizationData.en.messages);

(0, _reactIntl.addLocaleData)(_fr2.default);
localizationData.fr = _fr4.default;
localizationData.fr.messages = flattenMessages(localizationData.fr.messages);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SWITCH_LANGUAGE = undefined;

var _extends2 = __webpack_require__(16);

var _extends3 = _interopRequireDefault(_extends2);

exports.switchLanguage = switchLanguage;

var _setup = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export Constants
var SWITCH_LANGUAGE = exports.SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';

function switchLanguage(newLang) {
  return (0, _extends3.default)({
    type: SWITCH_LANGUAGE
  }, _setup.localizationData[newLang]);
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(74);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setAuthToken = function setAuthToken(token) {
  if (token) {
    // Apply to every request
    _axios2.default.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete _axios2.default.defaults.headers.common["Authorization"];
  }
};

exports.default = setAuthToken;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CLEAR_ERRORS = exports.CLEAR_ERRORS = "CLEAR_ERRORS";
var GET_ERRORS = exports.GET_ERRORS = "GET_ERRORS";

// Clear all errors
var clearErrors = exports.clearErrors = function clearErrors() {
  return {
    type: CLEAR_ERRORS,
    payload: {}
  };
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxDevtools = __webpack_require__(77);

var _reduxDevtoolsLogMonitor = __webpack_require__(78);

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _reduxDevtoolsDockMonitor = __webpack_require__(79);

var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxDevtools.createDevTools)((0, _jsx3.default)(_reduxDevtoolsDockMonitor2.default, {
  toggleVisibilityKey: 'ctrl-h',
  changePositionKey: 'ctrl-w'
}, void 0, (0, _jsx3.default)(_reduxDevtoolsLogMonitor2.default, {})));

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _reactHelmet = __webpack_require__(8);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRouter = __webpack_require__(9);

var _TextField = __webpack_require__(15);

var _TextField2 = _interopRequireDefault(_TextField);

var _Paper = __webpack_require__(10);

var _Paper2 = _interopRequireDefault(_Paper);

var _core = __webpack_require__(38);

var _Switch = __webpack_require__(39);

var _Switch2 = _interopRequireDefault(_Switch);

var _FormControlLabel = __webpack_require__(40);

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _AuthActions = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Style
// import styles from "../../components/PostListItem/PostListItem.css";

var styles = function styles(theme) {
  return {
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    }
  };
};

var _ref = (0, _jsx3.default)(_reactHelmet2.default, {
  title: "Login"
});

var _ref2 = (0, _jsx3.default)(_core.Typography, {
  variant: "h3"
}, void 0, "Login");

var _ref3 = (0, _jsx3.default)("input", {
  type: "submit",
  className: "btn btn-info btn-block mt-4"
});

var LoginPage = function (_Component) {
  (0, _inherits3.default)(LoginPage, _Component);

  function LoginPage(props) {
    (0, _classCallCheck3.default)(this, LoginPage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props));

    _this.state = {
      email: "",
      password: "",
      rememberMe: false,
      errors: {}
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onToggle = _this.onToggle.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(LoginPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.auth.isAuthenticated) {
        _reactRouter.browserHistory.push("/");
      }
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();

      var userData = {
        email: this.state.email,
        password: this.state.password,
        rememberMe: this.state.rememberMe
      };

      this.props.loginUser(userData);
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      this.setState((0, _defineProperty3.default)({}, e.target.name, e.target.value));
    }
  }, {
    key: "onToggle",
    value: function onToggle(e) {
      this.setState((0, _defineProperty3.default)({}, e.target.name, e.target.checked));
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _jsx3.default)("div", {}, void 0, _ref, (0, _jsx3.default)(_Paper2.default, {}, void 0, _ref2, (0, _jsx3.default)("form", {
        className: styles.container,
        noValidate: true,
        onSubmit: this.onSubmit
      }, void 0, (0, _jsx3.default)(_TextField2.default, {
        id: "email",
        label: "Email",
        name: "email",
        className: styles.textField,
        value: this.state.email,
        onChange: this.onChange,
        margin: "normal",
        variant: "outlined"
      }), (0, _jsx3.default)(_TextField2.default, {
        type: "password",
        id: "password",
        label: "Password",
        name: "password",
        className: styles.textField,
        value: this.state.password,
        onChange: this.onChange,
        margin: "normal",
        variant: "outlined"
      }), (0, _jsx3.default)(_FormControlLabel2.default, {
        control: (0, _jsx3.default)(_Switch2.default, {
          name: "rememberMe",
          checked: this.state.rememberMe,
          onChange: this.onToggle,
          value: "rememberMe"
        }),
        label: "Remember Me"
      }), _ref3)));
    }
  }]);
  return LoginPage;
}(_react.Component);

// Retrieve data from store as props


function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { loginUser: _AuthActions.loginUser })(LoginPage);

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _reactHelmet = __webpack_require__(8);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactIntl = __webpack_require__(11);

var _reactRouter = __webpack_require__(9);

var _TextField = __webpack_require__(15);

var _TextField2 = _interopRequireDefault(_TextField);

var _Paper = __webpack_require__(10);

var _Paper2 = _interopRequireDefault(_Paper);

var _core = __webpack_require__(38);

var _Switch = __webpack_require__(39);

var _Switch2 = _interopRequireDefault(_Switch);

var _FormControlLabel = __webpack_require__(40);

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _AuthActions = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Style
// import styles from "../../components/PostListItem/PostListItem.css";

var styles = function styles(theme) {
  return {
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    }
  };
};

var _ref = (0, _jsx3.default)(_reactHelmet2.default, {
  title: "Login"
});

var _ref2 = (0, _jsx3.default)(_core.Typography, {
  variant: "h3"
}, void 0, "Signup");

var _ref3 = (0, _jsx3.default)("input", {
  type: "submit",
  className: "btn btn-info btn-block mt-4"
});

var SignupPage = function (_Component) {
  (0, _inherits3.default)(SignupPage, _Component);

  function SignupPage(props) {
    (0, _classCallCheck3.default)(this, SignupPage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SignupPage.__proto__ || Object.getPrototypeOf(SignupPage)).call(this, props));

    _this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      errors: {}
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(SignupPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.auth.isAuthenticated) {
        _reactRouter.browserHistory.push("/");
      }
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();

      var newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        passwordConfirm: this.state.passwordConfirm
      };
      this.props.registerUser(newUser, _reactRouter.browserHistory);
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      this.setState((0, _defineProperty3.default)({}, e.target.name, e.target.value));
    }
  }, {
    key: "onToggle",
    value: function onToggle(e) {
      this.setState((0, _defineProperty3.default)({}, e.target.name, e.target.checked));
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _jsx3.default)("div", {}, void 0, _ref, (0, _jsx3.default)(_Paper2.default, {}, void 0, _ref2, (0, _jsx3.default)("form", {
        className: styles.container,
        noValidate: true,
        autoComplete: "off",
        onSubmit: this.onSubmit
      }, void 0, (0, _jsx3.default)(_TextField2.default, {
        id: "name",
        label: "Name",
        name: "name",
        className: styles.textField,
        value: this.state.name,
        onChange: this.onChange,
        margin: "normal",
        variant: "outlined"
      }), (0, _jsx3.default)(_TextField2.default, {
        id: "email",
        label: "Email",
        name: "email",
        className: styles.textField,
        value: this.state.email,
        onChange: this.onChange,
        margin: "normal",
        variant: "outlined"
      }), (0, _jsx3.default)(_TextField2.default, {
        type: "password",
        id: "password",
        label: "Password",
        name: "password",
        className: styles.textField,
        value: this.state.password,
        onChange: this.onChange,
        margin: "normal",
        variant: "outlined"
      }), (0, _jsx3.default)(_TextField2.default, {
        type: "password",
        id: "passwordConfirm",
        label: "Password",
        name: "passwordConfirm",
        className: styles.textField,
        value: this.state.passwordConfirm,
        onChange: this.onChange,
        margin: "normal",
        variant: "outlined"
      }), _ref3)));
    }
  }]);
  return SignupPage;
}(_react.Component);

// Retrieve data from store as props


var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { registerUser: _AuthActions.registerUser })(SignupPage);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _reactHelmet = __webpack_require__(8);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRouter = __webpack_require__(9);

var _Paper = __webpack_require__(10);

var _Paper2 = _interopRequireDefault(_Paper);

var _Button = __webpack_require__(12);

var _Button2 = _interopRequireDefault(_Button);

var _NodeForm = __webpack_require__(43);

var _NodeForm2 = _interopRequireDefault(_NodeForm);

var _NodeList = __webpack_require__(97);

var _NodeList2 = _interopRequireDefault(_NodeList);

var _NodeActions = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_NodeForm2.default, {});

var _ref2 = (0, _jsx3.default)("h1", {}, void 0, "Welcome to the Homepage!");

var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.state = {
      nodeFormToggle: false,
      title: "",
      content: "",
      subtopics: [],
      sources: [],
      errors: {}
    };

    _this.nodeFormToggle = _this.nodeFormToggle.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.auth.isAuthenticated) {
        _reactRouter.browserHistory.push("/login");
      }
      this.props.getRootNodes();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.clearNodes();
    }
  }, {
    key: "nodeFormToggle",
    value: function nodeFormToggle() {
      this.setState({ nodeFormToggle: !this.state.nodeFormToggle });
    }
  }, {
    key: "render",
    value: function render() {
      var nodeForm = void 0,
          nodeFormComp = _ref;

      if (this.state.nodeFormToggle) {
        nodeForm = nodeFormComp;
      } else {
        nodeForm = "";
      }

      var rootNodeList = void 0;
      if (this.props.node.nodes !== null && this.props.node.nodes.length > 0) {
        rootNodeList = (0, _jsx3.default)(_NodeList2.default, {
          nodes: this.props.node.nodes
        });
      }

      return (0, _jsx3.default)("div", {}, void 0, _ref2, (0, _jsx3.default)(_Button2.default, {
        variant: "contained",
        onClick: this.nodeFormToggle
      }, void 0, "Add an Idea"), nodeForm, rootNodeList);
    }
  }]);
  return Home;
}(_react.Component);

// Retrieve data from store as props


var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    node: state.node
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { getRootNodes: _NodeActions.getRootNodes, clearNodes: _NodeActions.clearNodes })(Home);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _reactHelmet = __webpack_require__(8);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _NodeActions = __webpack_require__(14);

var _SelectMultiple = __webpack_require__(44);

var _SelectMultiple2 = _interopRequireDefault(_SelectMultiple);

var _Paper = __webpack_require__(10);

var _Paper2 = _interopRequireDefault(_Paper);

var _TextField = __webpack_require__(15);

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = __webpack_require__(12);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)("h4", {}, void 0, "Add a New Idea (Node)");

var _ref2 = (0, _jsx3.default)(_Button2.default, {
  type: "submit",
  color: "primary"
}, void 0, "Submit");

var _ref3 = (0, _jsx3.default)("p", {}, void 0, "Loading . . . ");

var NodeForm = function (_Component) {
  (0, _inherits3.default)(NodeForm, _Component);

  function NodeForm(props) {
    (0, _classCallCheck3.default)(this, NodeForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NodeForm.__proto__ || Object.getPrototypeOf(NodeForm)).call(this, props));

    var defaultSources = [],
        sources = [];
    if (_this.props.node.node !== null) {
      sources.push(_this.props.node.node._id);
      defaultSources.push({
        label: _this.props.node.node.title,
        value: _this.props.node.node._id.toString()
      });
    }

    _this.state = {
      title: "",
      content: "",
      subtopics: [],
      sources: sources,
      defaultSources: defaultSources,
      errors: {}
    };

    _this.onSubmit = _this.onSubmit.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    _this.onSourceSelect = _this.onSourceSelect.bind(_this);
    _this.onSubtopicSelect = _this.onSubtopicSelect.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(NodeForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.node.allNodes == null && !this.props.node.loading) {
        this.props.getAllNodesForSelect();
      }
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      var newData = {
        title: this.state.title,
        content: this.state.content,
        subtopics: this.state.subtopics,
        sources: this.state.sources,
        author: this.props.auth.user.id
      };
      this.props.createNode(newData);
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      this.setState((0, _defineProperty3.default)({}, e.target.name, e.target.value));
    }
  }, {
    key: "onSourceSelect",
    value: function onSourceSelect(selection) {
      var sources = [];
      for (var i in selection) {
        sources[i] = selection[i].value;
      }
      this.setState({ sources: sources });
    }
  }, {
    key: "onSubtopicSelect",
    value: function onSubtopicSelect(selection) {
      var subtopics = [];
      for (var i in selection) {
        subtopics[i] = selection[i].value;
      }
      this.setState({ subtopics: subtopics });
    }
  }, {
    key: "onSubtopicOfSelect",
    value: function onSubtopicOfSelect(selection) {
      var subtopicOf = [];
      for (var i in selection) {
        subtopicOf[i] = selection[i].value;
      }
      this.setState({ subtopicOf: subtopicOf });
    }
  }, {
    key: "render",
    value: function render() {
      var content = void 0;
      if (this.props.node.formNodes !== null) {
        content = (0, _jsx3.default)("div", {}, void 0, (0, _jsx3.default)(_Paper2.default, {}, void 0, _ref, (0, _jsx3.default)("form", {
          onSubmit: this.onSubmit
        }, void 0, (0, _jsx3.default)(_TextField2.default, {
          id: "title",
          label: "Title of Idea",
          name: "title",
          onChange: this.onChange,
          value: this.state.title,
          margin: "normal",
          variant: "outlined"
        }), (0, _jsx3.default)(_TextField2.default, {
          id: "content",
          label: "Description of Idea",
          name: "content",
          onChange: this.onChange,
          value: this.state.content,
          margin: "normal",
          variant: "outlined",
          multiline: true
        }), (0, _jsx3.default)(_SelectMultiple2.default, {
          placeholder: "Select sources for this subject",
          onChange: this.onSourceSelect,
          options: this.props.node.formNodes,
          defaultValue: this.state.defaultSources
        }), (0, _jsx3.default)(_SelectMultiple2.default, {
          placeholder: "Select subtopics that belong to this subject",
          onChange: this.onSubtopicSelect,
          options: this.props.node.formNodes
        }), _ref2)));
      } else {
        content = _ref3;
      }

      return (0, _jsx3.default)("div", {}, void 0, content);
    }
  }]);
  return NodeForm;
}(_react.Component);

// Retrieve data from store as props


var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    node: state.node
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { createNode: _NodeActions.createNode, getAllNodesForSelect: _NodeActions.getAllNodesForSelect })(NodeForm);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _extends2 = __webpack_require__(16);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(96);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSelect = __webpack_require__(45);

var _reactSelect2 = _interopRequireDefault(_reactSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectMultiple = function SelectMultiple(_ref) {
  var error = _ref.error,
      info = _ref.info,
      onChange = _ref.onChange,
      options = _ref.options,
      id = _ref.id,
      placeholder = _ref.placeholder,
      defaultValue = _ref.defaultValue;

  var colourStyles = {
    control: function control(styles) {
      return (0, _extends3.default)({}, styles, { backgroundColor: "white" });
    },
    option: function option(styles, _ref2) {
      var data = _ref2.data,
          isDisabled = _ref2.isDisabled,
          isFocused = _ref2.isFocused,
          isSelected = _ref2.isSelected;

      return (0, _extends3.default)({}, styles, {
        color: "black",
        cursor: isDisabled ? "not-allowed" : "default"
      });
    },
    input: function input(styles) {
      return (0, _extends3.default)({}, styles);
    },
    placeholder: function placeholder(styles) {
      return (0, _extends3.default)({}, styles);
    },
    singleValue: function singleValue(styles, _ref3) {
      var data = _ref3.data;
      return (0, _extends3.default)({}, styles);
    }
  };

  return (0, _jsx3.default)("div", {
    className: "form-group"
  }, void 0, (0, _jsx3.default)(_reactSelect2.default, {
    className: (0, _classnames2.default)("form-control form-control-lg", {
      "is-invalid": error
    }),
    placeholder: placeholder,
    defaultValue: defaultValue,
    onChange: onChange,
    isMulti: true,
    options: options,
    styles: colourStyles,
    id: id
  }), info && (0, _jsx3.default)("small", {
    className: "form-text text-muted"
  }, void 0, info), error && (0, _jsx3.default)("div", {
    className: "invalid-feedback"
  }, void 0, error));
};

exports.default = SelectMultiple;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _reactRouter = __webpack_require__(9);

var _Paper = __webpack_require__(10);

var _Paper2 = _interopRequireDefault(_Paper);

var _Button = __webpack_require__(12);

var _Button2 = _interopRequireDefault(_Button);

var _EditNodeForm = __webpack_require__(98);

var _EditNodeForm2 = _interopRequireDefault(_EditNodeForm);

var _NodeForm = __webpack_require__(43);

var _NodeForm2 = _interopRequireDefault(_NodeForm);

var _NodeActions = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_NodeForm2.default, {});

var _ref2 = (0, _jsx3.default)("br", {});

var _ref3 = (0, _jsx3.default)("p", {}, void 0, "Loading . . . ");

var Node = function (_Component) {
  (0, _inherits3.default)(Node, _Component);

  function Node() {
    (0, _classCallCheck3.default)(this, Node);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this));

    _this.state = {
      editFormToggle: false,
      nodeFormToggle: false
    };

    _this.toggleEditForm = _this.toggleEditForm.bind(_this);
    _this.nodeFormToggle = _this.nodeFormToggle.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Node, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.node.node === null && !this.props.node.loading) {
        this.props.getNodeByID(this.props.params.nodeID);
      }
    }
  }, {
    key: "toggleEditForm",
    value: function toggleEditForm() {
      this.setState({ editFormToggle: !this.state.editFormToggle });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.nodeFullClear();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.node.node !== null && this.props.node.node.subtopics && this.props.node.node.subtopics.length > 0 && this.props.node.subtopics === null && !this.props.node.loading) {
        this.props.getSubtopics(this.props.params.nodeID);
      }
      if (this.props.node.node !== null && this.props.node.node.sources && this.props.node.node.sources.length > 0 && this.props.node.sources === null && !this.props.node.loading) {
        this.props.getSources(this.props.params.nodeID);
      }
      // Check for redirect to other Node
      if (this.props.params.nodeID !== prevProps.params.nodeID) {
        this.props.nodeFullClear();
        this.props.getNodeByID(this.props.params.nodeID);
      }
    }
  }, {
    key: "nodeFormToggle",
    value: function nodeFormToggle() {
      this.setState({ nodeFormToggle: !this.state.nodeFormToggle });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          editFormToggle = _state.editFormToggle,
          nodeFormToggle = _state.nodeFormToggle;

      var content = void 0;
      if (this.props.node.node !== null) {
        var sourceJSX = [],
            subtopicJSX = [],
            editForm = void 0,
            nodeForm = void 0;
        var node = this.props.node.node;

        console.log(node.content.string.split("\n"));

        if (editFormToggle) {
          editForm = (0, _jsx3.default)("div", {}, void 0, (0, _jsx3.default)(_EditNodeForm2.default, {
            node: node
          }));
        } else {
          editForm = "";
        }

        if (nodeFormToggle) {
          nodeForm = _ref;
        }

        var _props$node = this.props.node,
            subtopics = _props$node.subtopics,
            sources = _props$node.sources;

        // Sources

        if (sources && sources.length > 0) {
          sources.forEach(function (source) {
            sourceJSX.push((0, _jsx3.default)("span", {}, void 0, (0, _jsx3.default)(_reactRouter.Link, {
              to: "/node/" + source._id,
              style: { textDecoration: "none" }
            }, void 0, "#", source.title), " "));
          });
        } else {
          sourceJSX.push((0, _jsx3.default)("span", {}, void 0, (0, _jsx3.default)(_reactRouter.Link, {
            to: "/",
            style: { textDecoration: "none" }
          }, void 0, "#root"), " "));
        }

        // Subtopics
        if (subtopics && subtopics.length > 0) {
          subtopics.forEach(function (subtopic) {
            subtopicJSX.push((0, _jsx3.default)(_Paper2.default, {
              style: { padding: "0.5em", marginTop: "0.5em" }
            }, void 0, (0, _jsx3.default)(_reactRouter.Link, {
              to: "/node/" + subtopic._id,
              style: { textDecoration: "none" }
            }, void 0, (0, _jsx3.default)("h3", {}, void 0, subtopic.title)), subtopic.content.string === "" ? "No Content" : (0, _jsx3.default)("p", {}, void 0, subtopic.content.string)));
          });
        } else {
          subtopicJSX = "";
        }

        // render new lines
        var count = 0,
            nodeContent = [];
        node.content.string.split("\n").forEach(function (line) {
          nodeContent.push((0, _jsx3.default)("p", {}, "line-" + count, line));
          count++;
        });

        // FINAL CONTENT THAT WILL BE LOADED
        content = (0, _jsx3.default)("div", {}, void 0, (0, _jsx3.default)("div", {
          className: "row"
        }, void 0, (0, _jsx3.default)(_Button2.default, {
          variant: "contained",
          onClick: this.nodeFormToggle
        }, void 0, "Add an Idea"), (0, _jsx3.default)(_Button2.default, {
          variant: "contained",
          onClick: this.toggleEditForm
        }, void 0, "Edit Node")), nodeForm, editForm, (0, _jsx3.default)("h1", {}, void 0, node.title), sourceJSX, _ref2, (0, _jsx3.default)(_Paper2.default, {
          style: { padding: "0.5em" }
        }, void 0, nodeContent, (0, _jsx3.default)("div", {}, void 0, subtopicJSX)));
      } else {
        content = _ref3;
      }

      return (0, _jsx3.default)("div", {}, void 0, content);
    }
  }]);
  return Node;
}(_react.Component);

// Retrieve data from store as props


var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    node: state.node
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { getNodeByID: _NodeActions.getNodeByID, getSubtopics: _NodeActions.getSubtopics, getSources: _NodeActions.getSources, nodeFullClear: _NodeActions.nodeFullClear })(Node);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _reactHelmet = __webpack_require__(8);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _TextField = __webpack_require__(15);

var _TextField2 = _interopRequireDefault(_TextField);

var _Paper = __webpack_require__(10);

var _Paper2 = _interopRequireDefault(_Paper);

var _Button = __webpack_require__(12);

var _Button2 = _interopRequireDefault(_Button);

var _NodeActions = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_reactHelmet2.default, {
  title: "Admin"
});

var Admin = function (_Component) {
  (0, _inherits3.default)(Admin, _Component);

  function Admin(props) {
    (0, _classCallCheck3.default)(this, Admin);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Admin.__proto__ || Object.getPrototypeOf(Admin)).call(this, props));

    _this.state = {
      errors: {}
    };

    _this.onDuplicatePress = _this.onDuplicatePress.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Admin, [{
    key: "onDuplicatePress",
    value: function onDuplicatePress() {
      console.log("hello");
      this.props.clearDuplicateSourceAndSubtopics();
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _jsx3.default)("div", {}, void 0, _ref, (0, _jsx3.default)(_Paper2.default, {}, void 0, (0, _jsx3.default)(_Button2.default, {
        onClick: this.onDuplicatePress
      }, void 0, "Remove Duplicates")));
    }
  }]);
  return Admin;
}(_react.Component);

// Retrieve data from store as props


function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { clearDuplicateSourceAndSubtopics: _NodeActions.clearDuplicateSourceAndSubtopics })(Admin);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(13);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var postSchema = new Schema({
  name: { type: 'String', required: true },
  title: { type: 'String', required: true },
  content: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true }
});

exports.default = _mongoose2.default.model('Post', postSchema);

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("sanitize-html");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (process.env.NODE_ENV === "production") {
  module.exports = __webpack_require__(112);
} else {
  module.exports = __webpack_require__(113);
}

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _express = __webpack_require__(17);

var _express2 = _interopRequireDefault(_express);

var _compression = __webpack_require__(53);

var _compression2 = _interopRequireDefault(_compression);

var _mongoose = __webpack_require__(13);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = __webpack_require__(54);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = __webpack_require__(55);

var _path2 = _interopRequireDefault(_path);

var _IntlWrapper = __webpack_require__(56);

var _IntlWrapper2 = _interopRequireDefault(_IntlWrapper);

var _store = __webpack_require__(57);

var _reactRedux = __webpack_require__(3);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(80);

var _reactRouter = __webpack_require__(9);

var _reactHelmet = __webpack_require__(8);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _routes = __webpack_require__(81);

var _routes2 = _interopRequireDefault(_routes);

var _fetchData = __webpack_require__(99);

var _post = __webpack_require__(101);

var _post2 = _interopRequireDefault(_post);

var _user = __webpack_require__(105);

var _user2 = _interopRequireDefault(_user);

var _node = __webpack_require__(114);

var _node2 = _interopRequireDefault(_node);

var _dummyData = __webpack_require__(121);

var _dummyData2 = _interopRequireDefault(_dummyData);

var _keys = __webpack_require__(50);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initialize the Express App
var app = new _express2.default();

// Set Development modes checks
var isDevMode = process.env.NODE_ENV === "development" || false;
var isProdMode = process.env.NODE_ENV === "production" || false;

// Run Webpack dev server in development mode
if (isDevMode) {
  // Webpack Requirements
  // eslint-disable-next-line global-require
  var webpack = __webpack_require__(51);
  // eslint-disable-next-line global-require
  var config = __webpack_require__(122);
  // eslint-disable-next-line global-require
  var webpackDevMiddleware = __webpack_require__(126);
  // eslint-disable-next-line global-require
  var webpackHotMiddleware = __webpack_require__(127);
  var compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    watchOptions: {
      poll: 1000
    }
  }));
  app.use(webpackHotMiddleware(compiler));
}

// React And Redux Setup


// Import required modules


// Set native promises as mongoose promise
_mongoose2.default.Promise = global.Promise;

// MongoDB Connection
if (process.env.NODE_ENV !== "test") {
  var db = _mongoose2.default.connection;

  db.on("error", console.error);
  db.once("open", function (res) {});

  _mongoose2.default.connect(_keys2.default.mongoURI, function (error) {
    if (error) {
      console.error("Please make sure Mongodb is installed and running!"); // eslint-disable-line no-console
      throw error;
    }
  });
}

// Apply body Parser and server public assets and routes
app.use((0, _compression2.default)());
app.use(_bodyParser2.default.json({ limit: "20mb" }));
app.use(_bodyParser2.default.urlencoded({ limit: "20mb", extended: false }));
app.use(_express2.default.static(_path2.default.resolve(__dirname, "../dist/client")));
app.use("/api", _post2.default);
app.use("/api", _user2.default);
app.use("/api", _node2.default);

// Render Initial HTML
var renderFullPage = function renderFullPage(html, initialState) {
  var head = _reactHelmet2.default.rewind();

  // Import Manifests
  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);

  return "\n    <!doctype html>\n    <html>\n      <head>\n        " + head.base.toString() + "\n        " + head.title.toString() + "\n        " + head.meta.toString() + "\n        " + head.link.toString() + "\n        " + head.script.toString() + "\n\n        " + (isProdMode ? "<link rel='stylesheet' href='" + assetsManifest["/app.css"] + "' />" : "") + "\n        <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'/>\n        <link rel=\"shortcut icon\" href=\"http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png\" type=\"image/png\" />\n      </head>\n      <body>\n        <div id=\"root\">" + (process.env.NODE_ENV === "production" ? html : "<div>" + html + "</div>") + "</div>\n        <script>\n          window.__INITIAL_STATE__ = " + JSON.stringify(initialState) + ";\n          " + (isProdMode ? "//<![CDATA[\n          window.webpackManifest = " + JSON.stringify(chunkManifest) + ";\n          //]]>" : "") + "\n        </script>\n        <script src='" + (isProdMode ? assetsManifest["/vendor.js"] : "/vendor.js") + "'></script>\n        <script src='" + (isProdMode ? assetsManifest["/app.js"] : "/app.js") + "'></script>\n      </body>\n    </html>\n  ";
};

var renderError = function renderError(err) {
  var softTab = "&#32;&#32;&#32;&#32;";
  var errTrace = isProdMode ? ":<br><br><pre style=\"color:red\">" + softTab + err.stack.replace(/\n/g, "<br>" + softTab) + "</pre>" : "";
  return renderFullPage("Server Error" + errTrace, {});
};

// Server Side Rendering based on routes matched by React-router.
app.use(function (req, res, next) {
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
    if (err) {
      return res.status(500).end(renderError(err));
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (!renderProps) {
      return next();
    }

    var store = (0, _store.configureStore)();

    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
      var initialView = (0, _server.renderToString)((0, _jsx3.default)(_reactRedux.Provider, {
        store: store
      }, void 0, (0, _jsx3.default)(_IntlWrapper2.default, {}, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps))));
      var finalState = store.getState();

      res.set("Content-Type", "text/html").status(200).end(renderFullPage(initialView, finalState));
    }).catch(function (error) {
      return next(error);
    });
  });
});

var port = process.env.PORT || 8000;

// start app
app.listen(port, function (error) {
  if (!error) {
    console.log("MERN is running on port: " + port + "! Build something amazing!"); // eslint-disable-line
  }
});

exports.default = app;
/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntlWrapper = IntlWrapper;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = __webpack_require__(11);

var _reactRedux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IntlWrapper(props) {
  return _react2.default.createElement(
    _reactIntl.IntlProvider,
    props.intl,
    props.children
  );
}

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(IntlWrapper);

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = configureStore;

var _redux = __webpack_require__(29);

var _reduxThunk = __webpack_require__(58);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(59);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DevTools = void 0; /**
                        * Main store function
                        */

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line global-require
  DevTools = __webpack_require__(36).default;
}

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // Middleware and store enhancers
  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];

  if (process.env.CLIENT && process.env.NODE_ENV === "development") {
    // Enable DevTools only when rendering on client and during development.
    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument());
  }

  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));

  // For hot reloading reducers
  if (false) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", function () {
      var nextReducer = require("./reducers").default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(29);

var _AppReducer = __webpack_require__(30);

var _AppReducer2 = _interopRequireDefault(_AppReducer);

var _PostReducer = __webpack_require__(24);

var _PostReducer2 = _interopRequireDefault(_PostReducer);

var _IntlReducer = __webpack_require__(63);

var _IntlReducer2 = _interopRequireDefault(_IntlReducer);

var _AuthReducer = __webpack_require__(73);

var _AuthReducer2 = _interopRequireDefault(_AuthReducer);

var _ErrorReducer = __webpack_require__(75);

var _ErrorReducer2 = _interopRequireDefault(_ErrorReducer);

var _NodeReducer = __webpack_require__(76);

var _NodeReducer2 = _interopRequireDefault(_NodeReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Combine all reducers into one root reducer


// Import Reducers
exports.default = (0, _redux.combineReducers)({
  app: _AppReducer2.default,
  posts: _PostReducer2.default,
  intl: _IntlReducer2.default,
  auth: _AuthReducer2.default,
  error: _ErrorReducer2.default,
  node: _NodeReducer2.default
}); /**
     * Root Reducer
     */

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  mongoURL: process.env.MONGO_URL || "mongodb://devinMcArthur:chaos1@ds139934.mlab.com:39934/agora-dev",
  port: process.env.PORT || 8000
};

exports.default = config;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(64);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(16);

var _extends3 = _interopRequireDefault(_extends2);

var _setup = __webpack_require__(31);

var _IntlActions = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initLocale = global.navigator && global.navigator.language || 'en';

var initialState = (0, _extends3.default)({
  locale: initLocale,
  enabledLanguages: _setup.enabledLanguages
}, _setup.localizationData[initLocale] || {});

var IntlReducer = function IntlReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _IntlActions.SWITCH_LANGUAGE:
      {
        var type = action.type,
            actionWithoutType = (0, _objectWithoutProperties3.default)(action, ['type']); // eslint-disable-line

        return (0, _extends3.default)({}, state, actionWithoutType);
      }

    default:
      return state;
  }
};

exports.default = IntlReducer;

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("intl");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("intl-locales-supported");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("intl/locale-data/jsonp/en");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en");

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  locale: 'en',
  messages: {
    siteTitle: 'MERN Starter Blog',
    addPost: 'Add Post',
    switchLanguage: 'Switch Language',
    twitterMessage: 'We are on Twitter',
    by: 'By',
    deletePost: 'Delete Post',
    createNewPost: 'Create new post',
    authorName: 'Author\'s Name',
    postTitle: 'Post Title',
    postContent: 'Post Content',
    submit: 'Submit',
    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t}',
    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t}',
    nestedDateComment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} as of {date}'
  }
};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("intl/locale-data/jsonp/fr");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/fr");

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  locale: 'fr',
  messages: {
    siteTitle: 'MERN blog de démarrage',
    addPost: 'Ajouter Poster',
    switchLanguage: 'Changer de langue',
    twitterMessage: 'Nous sommes sur Twitter',
    by: 'Par',
    deletePost: 'Supprimer le message',
    createNewPost: 'Créer un nouveau message',
    authorName: 'Nom de l\'auteur',
    postTitle: 'Titre de l\'article',
    postContent: 'Contenu après',
    submit: 'Soumettre',
    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} (in real app this would be translated to French)',
    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t} (in real app this would be translated to French)',
    nestedDateComment: 'user {name} {value, plural,\n  \t\t  =0 {does not have any comments}\n  \t\t  =1 {has # comment}\n  \t\t  other {has # comments}\n  \t\t} as of {date} (in real app this would be translated to French)'
  }
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(16);

var _extends3 = _interopRequireDefault(_extends2);

var _lodash = __webpack_require__(18);

var _lodash2 = _interopRequireDefault(_lodash);

var _AuthActions = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  isAuthenticated: false,
  user: {}
};

var AuthReducer = function AuthReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _AuthActions.SET_CURRENT_USER:
      return (0, _extends3.default)({}, state, {
        isAuthenticated: !_lodash2.default.isEmpty(action.payload),
        user: action.payload
      });
    default:
      return state;
  }
};

exports.default = AuthReducer;

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _ErrorActions.GET_ERRORS:
      return action.payload;
    case _ErrorActions.CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};

var _ErrorActions = __webpack_require__(35);

var initialState = {};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(16);

var _extends3 = _interopRequireDefault(_extends2);

var _NodeActions = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  node: null,
  nodes: null,
  // formNodes: nodes used within select forms (an array of objects {label: , value: })
  formNodes: null,
  subtopics: null,
  sources: null,
  loading: false
};

var NodeReducer = function NodeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _NodeActions.GET_NODE:
      return (0, _extends3.default)({}, state, {
        node: action.payload,
        loading: false
      });
    case _NodeActions.GET_NODES:
      return (0, _extends3.default)({}, state, {
        nodes: action.payload,
        loading: false
      });
    case _NodeActions.GET_ALL_NODES:
      return (0, _extends3.default)({}, state, {
        formNodes: action.payload,
        loading: false
      });
    case _NodeActions.GET_SOURCES:
      return (0, _extends3.default)({}, state, {
        sources: action.payload,
        loading: false
      });
    case _NodeActions.GET_SUBTOPICS:
      return (0, _extends3.default)({}, state, {
        subtopics: action.payload,
        loading: false
      });
    case _NodeActions.NODE_LOADING:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case _NodeActions.CLEAR_NODES:
      return (0, _extends3.default)({}, state, {
        nodes: null
      });
    case _NodeActions.CLEAR_NODE:
      return (0, _extends3.default)({}, state, {
        node: null
      });
    case _NodeActions.NODE_FULL_CLEAR:
      return {
        node: null,
        nodes: null,
        formNodes: null,
        subtopics: null,
        sources: null,
        loading: false
      };
    default:
      return state;
  }
};

exports.default = NodeReducer;

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-log-monitor");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-dock-monitor");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _App = __webpack_require__(82);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require.ensure polyfill for node
if (false) {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
/* eslint-disable global-require */
if (process.env.NODE_ENV !== "production") {
  // Require async routes only in development for react-hot-reloader to work.
  __webpack_require__(91);
  __webpack_require__(95);
  // Auth Components
  __webpack_require__(37);
  __webpack_require__(41);
  // App Components
  __webpack_require__(42);
  // Node Components
  __webpack_require__(46);

  // Admin
  __webpack_require__(47);
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
exports.default = (0, _jsx3.default)(_reactRouter.Route, {
  path: "/",
  component: _App2.default
}, void 0, (0, _jsx3.default)(_reactRouter.IndexRoute, {
  getComponent: function getComponent(nextState, cb) {
    new Promise(function(resolve) { resolve(); }).then((function (require) {
      cb(null, __webpack_require__(42).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), (0, _jsx3.default)(_reactRouter.Route, {
  path: "/login",
  getComponent: function getComponent(nextState, cb) {
    new Promise(function(resolve) { resolve(); }).then((function (require) {
      cb(null, __webpack_require__(37).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), (0, _jsx3.default)(_reactRouter.Route, {
  path: "/signup",
  getComponent: function getComponent(nextState, cb) {
    new Promise(function(resolve) { resolve(); }).then((function (require) {
      cb(null, __webpack_require__(41).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), (0, _jsx3.default)(_reactRouter.Route, {
  path: "/admin",
  getComponent: function getComponent(nextState, cb) {
    new Promise(function(resolve) { resolve(); }).then((function (require) {
      cb(null, __webpack_require__(47).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), (0, _jsx3.default)(_reactRouter.Route, {
  path: "/node/:nodeID",
  getComponent: function getComponent(nextState, cb) {
    new Promise(function(resolve) { resolve(); }).then((function (require) {
      cb(null, __webpack_require__(46).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}));

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _App = {
  "container": "_15uqt7TaQcflNYjiD0-re1"
};

var _App2 = _interopRequireDefault(_App);

var _reactHelmet = __webpack_require__(8);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Header = __webpack_require__(83);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(90);

var _Footer2 = _interopRequireDefault(_Footer);

var _AppActions = __webpack_require__(23);

var _IntlActions = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Actions


// Import Style
var DevTools = void 0;

// Import Components

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line global-require
  DevTools = __webpack_require__(36).default;
}

var _ref = (0, _jsx3.default)(DevTools, {});

var _ref2 = (0, _jsx3.default)("link", {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500"
});

var _ref3 = (0, _jsx3.default)(_Footer2.default, {});

var App = exports.App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.toggleAddPostSection = function () {
      _this.props.dispatch((0, _AppActions.toggleAddPost)());
    };

    _this.state = { isMounted: false };
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({ isMounted: true }); // eslint-disable-line
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return (0, _jsx3.default)("div", {}, void 0, this.state.isMounted && !window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV === "development" && _ref, (0, _jsx3.default)("div", {}, void 0, (0, _jsx3.default)(_reactHelmet2.default, {
        title: "Home",
        titleTemplate: "%s - Agora",
        meta: [{ charset: "utf-8" }, {
          "http-equiv": "X-UA-Compatible",
          content: "IE=edge"
        }, {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }]
      }), _ref2, (0, _jsx3.default)(_Header2.default, {
        switchLanguage: function switchLanguage(lang) {
          return _this2.props.dispatch((0, _IntlActions.switchLanguage)(lang));
        },
        intl: this.props.intl,
        toggleAddPost: this.toggleAddPostSection
      }), (0, _jsx3.default)("div", {
        className: _App2.default.container
      }, void 0, this.props.children), _ref3));
    }
  }]);
  return App;
}(_react.Component);

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
    auth: store.auth
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = __webpack_require__(9);

var _reactRedux = __webpack_require__(3);

var _styles = __webpack_require__(84);

var _AppBar = __webpack_require__(85);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = __webpack_require__(86);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(87);

var _Typography2 = _interopRequireDefault(_Typography);

var _Button = __webpack_require__(12);

var _Button2 = _interopRequireDefault(_Button);

var _IconButton = __webpack_require__(88);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = __webpack_require__(89);

var _Menu2 = _interopRequireDefault(_Menu);

var _AuthActions = __webpack_require__(19);

var _Header = {
  "header": "_3EGjKVGKCGTGQn_m_YASdF",
  "content": "_391cv5n_RFU0K9SBOjXDEt",
  "site-title": "_11V45Tl3_Hdy_ARI53CW9g",
  "add-post-button": "XrNjmGRHH_vMEgGeC3S75",
  "language-switcher": "X6vAu1vEuRDWiN2kDvA_z",
  "selected": "_3ecuVjN6tTUWkR7u3Co3s"
};

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matStyles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

// Import Style

var _ref = (0, _jsx3.default)(_Menu2.default, {});

var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header(props) {
    (0, _classCallCheck3.default)(this, Header);
    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
  }

  (0, _createClass3.default)(Header, [{
    key: "onLogoutClick",
    value: function onLogoutClick(e) {
      e.preventDefault();
      this.props.logoutUser();
    }
  }, {
    key: "render",
    value: function render() {
      // const languageNodes = props.intl.enabledLanguages.map(lang => (
      //   <li
      //     key={lang}
      //     onClick={() => props.switchLanguage(lang)}
      //     className={lang === props.intl.locale ? styles.selected : ""}
      //   >
      //     {lang}
      //   </li>
      // ));

      var classes = this.props.classes,
          buttons = void 0;


      if (this.props.auth.isAuthenticated) {
        buttons = (0, _jsx3.default)(_Button2.default, {
          color: "inherit",
          onClick: this.onLogoutClick.bind(this)
        }, void 0, "Logout");
      } else {
        buttons = (0, _jsx3.default)("div", {}, void 0, (0, _jsx3.default)(_Button2.default, {
          color: "inherit"
        }, void 0, (0, _jsx3.default)(_reactRouter.Link, {
          to: "/signup",
          style: { textDecoration: "none", color: "inherit" }
        }, void 0, "Signup")), (0, _jsx3.default)(_Button2.default, {
          color: "inherit"
        }, void 0, (0, _jsx3.default)(_reactRouter.Link, {
          to: "/login",
          style: { textDecoration: "none", color: "inherit" }
        }, void 0, "Login")));
      }

      return (0, _jsx3.default)("div", {
        className: classes.root
      }, void 0, (0, _jsx3.default)(_AppBar2.default, {
        position: "static"
      }, void 0, (0, _jsx3.default)(_Toolbar2.default, {}, void 0, (0, _jsx3.default)(_IconButton2.default, {
        className: classes.menuButton,
        color: "inherit",
        "aria-label": "Menu"
      }, void 0, _ref), (0, _jsx3.default)(_Typography2.default, {
        variant: "h6",
        color: "inherit",
        className: classes.grow
      }, void 0, (0, _jsx3.default)(_reactRouter.Link, {
        to: "/",
        style: { textDecoration: "none", color: "inherit" }
      }, void 0, "Agora")), buttons)));
    }
  }]);
  return Header;
}(_react.Component);

Header.contextTypes = {
  router: _propTypes2.default.object
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { logoutUser: _AuthActions.logoutUser })((0, _styles.withStyles)(matStyles)(Header));

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

exports.Footer = Footer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(11);

var _Footer = {
  "footer": "_1oiRVDtQ6fOWkhBVWcRyE_"
};

var _Footer2 = _interopRequireDefault(_Footer);

var _headerBk = "/" + "bbaeb5f32b7042f0def39648a1d111b9.png";

var _headerBk2 = _interopRequireDefault(_headerBk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Style
function Footer() {
  return (0, _jsx3.default)("div", {
    style: { background: "#FFF center" },
    className: _Footer2.default.footer
  }, void 0, (0, _jsx3.default)("p", {
    style: { color: "black" }
  }, void 0, "\xA9 2019 \xB7 Solitaire \xB7 Alpha 0.1"));
}

// Import Images
exports.default = Footer;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _PostList = __webpack_require__(92);

var _PostList2 = _interopRequireDefault(_PostList);

var _PostCreateWidget = __webpack_require__(94);

var _PostCreateWidget2 = _interopRequireDefault(_PostCreateWidget);

var _PostActions = __webpack_require__(25);

var _AppActions = __webpack_require__(23);

var _AppReducer = __webpack_require__(30);

var _PostReducer = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Selectors


// Import Actions


// Import Components
var PostListPage = function (_Component) {
  (0, _inherits3.default)(PostListPage, _Component);

  function PostListPage() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PostListPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PostListPage.__proto__ || Object.getPrototypeOf(PostListPage)).call.apply(_ref, [this].concat(args))), _this), _this.handleDeletePost = function (post) {
      if (confirm('Do you want to delete this post')) {
        // eslint-disable-line
        _this.props.dispatch((0, _PostActions.deletePostRequest)(post));
      }
    }, _this.handleAddPost = function (name, title, content) {
      _this.props.dispatch((0, _AppActions.toggleAddPost)());
      _this.props.dispatch((0, _PostActions.addPostRequest)({ name: name, title: title, content: content }));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PostListPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.dispatch((0, _PostActions.fetchPosts)());
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_PostCreateWidget2.default, {
        addPost: this.handleAddPost,
        showAddPost: this.props.showAddPost
      }), (0, _jsx3.default)(_PostList2.default, {
        handleDeletePost: this.handleDeletePost,
        posts: this.props.posts
      }));
    }
  }]);
  return PostListPage;
}(_react.Component);

// Actions required to provide data for this component to render in sever side.


PostListPage.need = [function () {
  return (0, _PostActions.fetchPosts)();
}];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPost: (0, _AppReducer.getShowAddPost)(state),
    posts: (0, _PostReducer.getPosts)(state)
  };
}

PostListPage.contextTypes = {
  router: _propTypes2.default.object
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PostListPage);

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PostListItem = __webpack_require__(93);

var _PostListItem2 = _interopRequireDefault(_PostListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PostList(props) {
  return (0, _jsx3.default)('div', {
    className: 'listView'
  }, void 0, props.posts.map(function (post) {
    return (0, _jsx3.default)(_PostListItem2.default, {
      post: post,
      onDelete: function onDelete() {
        return props.handleDeletePost(post.cuid);
      }
    }, post.cuid);
  }));
}

// Import Components
exports.default = PostList;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = __webpack_require__(9);

var _reactIntl = __webpack_require__(11);

var _PostListItem = {
  "single-post": "_2wFZUrnLLPIM2UvuNgnV1r",
  "post-title": "_1BU3HyU1b5fh1tsPA9MtRq",
  "author-name": "_2pYEGhQRMs0Mh9CsoJsCrq",
  "post-desc": "_2hG8tPFCGI0k7BZ5cz9nnH",
  "post-action": "_37qYFcYfJHxrTH_bV6-TQo",
  "divider": "_3H_6OlXO_Hx_93avyoPoZ2",
  "post-detail": "_16xorg78DM6DwmPTBglw02"
};

var _PostListItem2 = _interopRequireDefault(_PostListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'by'
});

// Import Style


var _ref2 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'deletePost'
});

function PostListItem(props) {
  return (0, _jsx3.default)('div', {
    className: _PostListItem2.default['single-post']
  }, void 0, (0, _jsx3.default)('h3', {
    className: _PostListItem2.default['post-title']
  }, void 0, (0, _jsx3.default)(_reactRouter.Link, {
    to: '/posts/' + props.post.slug + '-' + props.post.cuid
  }, void 0, props.post.title)), (0, _jsx3.default)('p', {
    className: _PostListItem2.default['author-name']
  }, void 0, _ref, ' ', props.post.name), (0, _jsx3.default)('p', {
    className: _PostListItem2.default['post-desc']
  }, void 0, props.post.content), (0, _jsx3.default)('p', {
    className: _PostListItem2.default['post-action']
  }, void 0, (0, _jsx3.default)('a', {
    href: '#',
    onClick: props.onDelete
  }, void 0, _ref2)), (0, _jsx3.default)('hr', {
    className: _PostListItem2.default.divider
  }));
}

exports.default = PostListItem;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostCreateWidget = undefined;

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = __webpack_require__(11);

var _PostCreateWidget = {
  "form": "_1_WEV3z8MyISJ_IVeQGbfN",
  "form-content": "_3CPctdi6XIS37va2ubmlCG",
  "form-title": "_1CSMUfhA4ysKjSED0EfzhX",
  "form-field": "_2UV8G3K76UKXYl2G9ov3yn",
  "post-submit-button": "_1atG94QrpmrK4ei1Y4lDc3",
  "appear": "_38mS7lSZiNDV5iEXieRUC7"
};

var _PostCreateWidget2 = _interopRequireDefault(_PostCreateWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: "createNewPost"
});

// Import Style


var _ref3 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: "submit"
});

var PostCreateWidget = exports.PostCreateWidget = function (_Component) {
  (0, _inherits3.default)(PostCreateWidget, _Component);

  function PostCreateWidget() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PostCreateWidget);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PostCreateWidget.__proto__ || Object.getPrototypeOf(PostCreateWidget)).call.apply(_ref, [this].concat(args))), _this), _this.addPost = function () {
      var nameRef = _this.refs.name;
      var titleRef = _this.refs.title;
      var contentRef = _this.refs.content;
      if (nameRef.value && titleRef.value && contentRef.value) {
        _this.props.addPost(nameRef.value, titleRef.value, contentRef.value);
        nameRef.value = titleRef.value = contentRef.value = "";
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PostCreateWidget, [{
    key: "render",
    value: function render() {
      var cls = _PostCreateWidget2.default.form + " " + (this.props.showAddPost ? _PostCreateWidget2.default.appear : "");
      return (0, _jsx3.default)("div", {
        className: cls
      }, void 0, (0, _jsx3.default)("div", {
        className: _PostCreateWidget2.default["form-content"]
      }, void 0, (0, _jsx3.default)("h2", {
        className: _PostCreateWidget2.default["form-title"]
      }, void 0, _ref2), _react2.default.createElement("input", {
        placeholder: this.props.intl.messages.authorName,
        className: _PostCreateWidget2.default["form-field"],
        ref: "name"
      }), _react2.default.createElement("input", {
        placeholder: this.props.intl.messages.postTitle,
        className: _PostCreateWidget2.default["form-field"],
        ref: "title"
      }), _react2.default.createElement("textarea", {
        placeholder: this.props.intl.messages.postContent,
        className: _PostCreateWidget2.default["form-field"],
        ref: "content"
      }), (0, _jsx3.default)("a", {
        className: _PostCreateWidget2.default["post-submit-button"],
        href: "#",
        onClick: this.addPost
      }, void 0, _ref3)));
    }
  }]);
  return PostCreateWidget;
}(_react.Component);

exports.default = (0, _reactIntl.injectIntl)(PostCreateWidget);

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

exports.PostDetailPage = PostDetailPage;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _reactHelmet = __webpack_require__(8);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactIntl = __webpack_require__(11);

var _PostListItem = {
  "single-post": "_2wFZUrnLLPIM2UvuNgnV1r",
  "post-title": "_1BU3HyU1b5fh1tsPA9MtRq",
  "author-name": "_2pYEGhQRMs0Mh9CsoJsCrq",
  "post-desc": "_2hG8tPFCGI0k7BZ5cz9nnH",
  "post-action": "_37qYFcYfJHxrTH_bV6-TQo",
  "divider": "_3H_6OlXO_Hx_93avyoPoZ2",
  "post-detail": "_16xorg78DM6DwmPTBglw02"
};

var _PostListItem2 = _interopRequireDefault(_PostListItem);

var _PostActions = __webpack_require__(25);

var _PostReducer = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Actions
var _ref = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: "by"
});

// Import Selectors


// Import Style


function PostDetailPage(props) {
  return (0, _jsx3.default)("div", {}, void 0, (0, _jsx3.default)(_reactHelmet2.default, {
    title: props.post.title
  }), (0, _jsx3.default)("div", {
    className: _PostListItem2.default["single-post"] + " " + _PostListItem2.default["post-detail"]
  }, void 0, (0, _jsx3.default)("h3", {
    className: _PostListItem2.default["post-title"]
  }, void 0, props.post.title), (0, _jsx3.default)("p", {
    className: _PostListItem2.default["author-name"]
  }, void 0, _ref, " ", props.post.name), (0, _jsx3.default)("p", {
    className: _PostListItem2.default["post-desc"]
  }, void 0, props.post.content)));
}

// Actions required to provide data for this component to render in server side.
PostDetailPage.need = [function (params) {
  return (0, _PostActions.fetchPost)(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    post: (0, _PostReducer.getPost)(state, props.params.cuid)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PostDetailPage);

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _reactHelmet = __webpack_require__(8);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRouter = __webpack_require__(9);

var _reactSelect = __webpack_require__(45);

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _Paper = __webpack_require__(10);

var _Paper2 = _interopRequireDefault(_Paper);

var _TextField = __webpack_require__(15);

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = __webpack_require__(12);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NodeForm = function (_Component) {
  (0, _inherits3.default)(NodeForm, _Component);

  function NodeForm() {
    (0, _classCallCheck3.default)(this, NodeForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NodeForm.__proto__ || Object.getPrototypeOf(NodeForm)).call(this));

    _this.state = {
      hiCounter: 0
    };

    // this.iH = this.iH.bind(this);
    return _this;
  }

  // iH() {
  //   let { hi } = this.state;
  //   let content = "hI";
  //   if (hi > 0) {
  //     content = "hI" + "hI" * hiCounter;
  //   }
  //   alert(content);
  //   this.setState({ hiCounter: this.state.hiCounter + 1 });
  // }

  (0, _createClass3.default)(NodeForm, [{
    key: "render",
    value: function render() {
      var nodeArray = [];
      if (this.props.nodes.length > 0) {
        nodeArray.push((0, _jsx3.default)("h4", {}, "title", (0, _jsx3.default)(_reactRouter.Link, {
          to: "/",
          style: { textDecoration: "none" }
        }, void 0, "#root")));
        this.props.nodes.forEach(function (node) {
          nodeArray.push((0, _jsx3.default)("div", {}, node._id, (0, _jsx3.default)(_Paper2.default, {
            style: { margin: "1em", padding: "1em" }
          }, void 0, (0, _jsx3.default)(_reactRouter.Link, {
            to: "/node/" + node._id,
            style: { textDecoration: "none" }
          }, void 0, (0, _jsx3.default)("h5", {}, void 0, node.title)), (0, _jsx3.default)("p", {}, void 0, node.content.string))));
        });
      }
      return (0, _jsx3.default)("div", {}, void 0, nodeArray);
    }
  }]);
  return NodeForm;
}(_react.Component);

// Retrieve data from store as props


var mapStateToProps = function mapStateToProps(state) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {})(NodeForm);

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _reactHelmet = __webpack_require__(8);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _NodeActions = __webpack_require__(14);

var _SelectMultiple = __webpack_require__(44);

var _SelectMultiple2 = _interopRequireDefault(_SelectMultiple);

var _Paper = __webpack_require__(10);

var _Paper2 = _interopRequireDefault(_Paper);

var _TextField = __webpack_require__(15);

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = __webpack_require__(12);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)("h4", {}, void 0, "Edit this Node");

var _ref2 = (0, _jsx3.default)(_Button2.default, {
  type: "submit",
  color: "primary"
}, void 0, "Submit");

var _ref3 = (0, _jsx3.default)("p", {}, void 0, "Loading . . . ");

var EditNodeForm = function (_Component) {
  (0, _inherits3.default)(EditNodeForm, _Component);

  function EditNodeForm(props) {
    (0, _classCallCheck3.default)(this, EditNodeForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EditNodeForm.__proto__ || Object.getPrototypeOf(EditNodeForm)).call(this, props));

    _this.state = {
      title: _this.props.node.node.title,
      content: _this.props.node.node.content.string,
      sources: _this.props.node.node.sources,
      subtopics: _this.props.node.node.subtopics,
      errors: {}
    };

    _this.onSubmit = _this.onSubmit.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    _this.onSourceSelect = _this.onSourceSelect.bind(_this);
    _this.onSubtopicSelect = _this.onSubtopicSelect.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(EditNodeForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.node.formNodes === null && !this.props.node.loading) {
        this.props.getAllNodesForSelect();
      }
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      var newData = {
        id: this.props.node.node._id,
        title: this.state.title,
        content: this.state.content,
        sources: this.state.sources,
        subtopics: this.state.subtopics,
        author: this.props.auth.user.id
      };
      this.props.editNode(newData);
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      this.setState((0, _defineProperty3.default)({}, e.target.name, e.target.value));
    }
  }, {
    key: "onSourceSelect",
    value: function onSourceSelect(selection) {
      var sources = [];
      for (var i in selection) {
        sources[i] = selection[i].value;
      }
      this.setState({ sources: sources });
    }
  }, {
    key: "onSubtopicSelect",
    value: function onSubtopicSelect(selection) {
      var subtopics = [];
      for (var i in selection) {
        subtopics[i] = selection[i].value;
      }
      this.setState({ subtopics: subtopics });
    }
  }, {
    key: "onSubtopicOfSelect",
    value: function onSubtopicOfSelect(selection) {
      var subtopicOf = [];
      for (var i in selection) {
        subtopicOf[i] = selection[i].value;
      }
      this.setState({ subtopicOf: subtopicOf });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state);
      var content = void 0;
      if (this.props.node !== null && this.props.node.formNodes !== null) {
        var subtopicOptions = [],
            sourceOptions = [];

        for (var i in this.props.node.formNodes) {
          if (this.props.node.node.subtopics.includes(this.props.node.formNodes[i].value)) {
            subtopicOptions.push(this.props.node.formNodes[i]);
          }
          if (this.props.node.node.sources.includes(this.props.node.formNodes[i].value)) {
            sourceOptions.push(this.props.node.formNodes[i]);
          }
        }

        content = (0, _jsx3.default)("div", {}, void 0, (0, _jsx3.default)(_Paper2.default, {}, void 0, _ref, (0, _jsx3.default)("form", {
          onSubmit: this.onSubmit
        }, void 0, (0, _jsx3.default)(_TextField2.default, {
          id: "title",
          label: "Title of Idea",
          name: "title",
          onChange: this.onChange,
          value: this.state.title,
          margin: "normal",
          variant: "outlined"
        }), (0, _jsx3.default)(_TextField2.default, {
          id: "content",
          label: "Description of Idea",
          name: "content",
          onChange: this.onChange,
          value: this.state.content,
          margin: "normal",
          variant: "outlined",
          multiline: true
        }), (0, _jsx3.default)(_SelectMultiple2.default, {
          placeholder: "Select sources for this subject",
          onChange: this.onSourceSelect,
          options: this.props.node.formNodes,
          defaultValue: sourceOptions
        }), (0, _jsx3.default)(_SelectMultiple2.default, {
          placeholder: "Select subtopics that belong to this subject",
          onChange: this.onSubtopicSelect,
          options: this.props.node.formNodes,
          defaultValue: subtopicOptions
        }), _ref2)));
      } else {
        content = _ref3;
      }

      return (0, _jsx3.default)("div", {}, void 0, content);
    }
  }]);
  return EditNodeForm;
}(_react.Component);

// Retrieve data from store as props


var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    node: state.node
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { editNode: _NodeActions.editNode, getAllNodesForSelect: _NodeActions.getAllNodesForSelect })(EditNodeForm);

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchComponentData = fetchComponentData;

var _promiseUtils = __webpack_require__(100);

function fetchComponentData(store, components, params) {
  var needs = components.reduce(function (prev, current) {
    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
  }, []);

  return (0, _promiseUtils.sequence)(needs, function (need) {
    return store.dispatch(need(params, store.getState()));
  });
} /*
  Utility function to fetch required data for component to render in server side.
  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
  */

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequence = sequence;
/**
 * Throw an array to it and a function which can generate promises
 * and it will call them sequentially, one after another
 */
function sequence(items, consumer) {
  var results = [];
  var runner = function runner() {
    var item = items.shift();
    if (item) {
      return consumer(item).then(function (result) {
        results.push(result);
      }).then(runner);
    }

    return Promise.resolve(results);
  };

  return runner();
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(17);

var _post = __webpack_require__(102);

var PostController = _interopRequireWildcard(_post);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = new _express.Router();

// Get all Posts
router.route('/posts').get(PostController.getPosts);

// Get one post by cuid
router.route('/posts/:cuid').get(PostController.getPost);

// Add a new Post
router.route('/posts').post(PostController.addPost);

// Delete a post by cuid
router.route('/posts/:cuid').delete(PostController.deletePost);

exports.default = router;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPosts = getPosts;
exports.addPost = addPost;
exports.getPost = getPost;
exports.deletePost = deletePost;

var _post = __webpack_require__(48);

var _post2 = _interopRequireDefault(_post);

var _cuid = __webpack_require__(103);

var _cuid2 = _interopRequireDefault(_cuid);

var _limax = __webpack_require__(104);

var _limax2 = _interopRequireDefault(_limax);

var _sanitizeHtml = __webpack_require__(49);

var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
function getPosts(req, res) {
  _post2.default.find().sort('-dateAdded').exec(function (err, posts) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts: posts });
  });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
function addPost(req, res) {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  var newPost = new _post2.default(req.body.post);

  // Let's sanitize inputs
  newPost.title = (0, _sanitizeHtml2.default)(newPost.title);
  newPost.name = (0, _sanitizeHtml2.default)(newPost.name);
  newPost.content = (0, _sanitizeHtml2.default)(newPost.content);

  newPost.slug = (0, _limax2.default)(newPost.title.toLowerCase(), { lowercase: true });
  newPost.cuid = (0, _cuid2.default)();
  newPost.save(function (err, saved) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
function getPost(req, res) {
  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: post });
  });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
function deletePost(req, res) {
  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
    if (err) {
      res.status(500).send(err);
    }

    post.remove(function () {
      res.status(200).end();
    });
  });
}

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = require("cuid");

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("limax");

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(17);

var _user = __webpack_require__(106);

var UserController = _interopRequireWildcard(_user);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = new _express.Router();

// Get all Users
router.route("/users").get(UserController.getUsers);

// Get one post by cuid
// router.route("/posts/:cuid").get(PostController.getPost);

// Add a new Post
router.route("/users").post(UserController.addUser);

// Delete a post by cuid
// router.route("/posts/:cuid").delete(PostController.deletePost);

// Log in a user
router.route("/user/login").post(UserController.loginUser);

exports.default = router;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginUser = exports.addUser = undefined;

var _regenerator = __webpack_require__(21);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(22);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * Save a new User
 * @param req
 * @param res
 * @returns void
 */
var addUser = exports.addUser = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var _validateUserSignupIn, errors, isValid, user, newUser, salt, hash, _errors;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _validateUserSignupIn = (0, _validateUserSignupInputs2.default)(req.body), errors = _validateUserSignupIn.errors, isValid = _validateUserSignupIn.isValid;

            if (isValid) {
              _context.next = 5;
              break;
            }

            console.log(errors);
            return _context.abrupt("return", res.status(400).json(errors));

          case 5:
            _context.next = 7;
            return _user2.default.findOne({ email: req.body.email });

          case 7:
            user = _context.sent;

            if (!user) {
              _context.next = 14;
              break;
            }

            errors.email = "Email already exists";
            console.log(errors);
            return _context.abrupt("return", res.status(400).json(errors));

          case 14:
            // Define new user
            newUser = new _user2.default({
              name: req.body.name,
              email: req.body.email,
              password: req.body.password
            });

            // Hash password

            _context.next = 17;
            return _bcryptjs2.default.genSalt(10);

          case 17:
            salt = _context.sent;
            _context.next = 20;
            return _bcryptjs2.default.hash(newUser.password, salt);

          case 20:
            hash = _context.sent;

            newUser.password = hash;
            _context.next = 24;
            return newUser.save();

          case 24:
            user = _context.sent;


            res.json(user);

          case 26:
            _context.next = 34;
            break;

          case 28:
            _context.prev = 28;
            _context.t0 = _context["catch"](0);

            console.log(_context.t0);
            _errors = {};

            _errors.general = _context.t0;
            res.status(500).json(_errors);

          case 34:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 28]]);
  }));

  return function addUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Login a User
 * @param req
 * @param res
 * @returns void
 */


var loginUser = exports.loginUser = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var _validateLoginInput, errors, isValid, email, password, user, isMatch, payload, token, _errors2;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _validateLoginInput = (0, _validateLoginInput3.default)(req.body), errors = _validateLoginInput.errors, isValid = _validateLoginInput.isValid;

            if (isValid) {
              _context2.next = 5;
              break;
            }

            console.log(errors);
            return _context2.abrupt("return", res.status(400).json(errors));

          case 5:
            email = req.body.email;
            password = req.body.password;
            _context2.next = 9;
            return _user2.default.findOne({ email: email });

          case 9:
            user = _context2.sent;

            if (user) {
              _context2.next = 14;
              break;
            }

            errors.email = "User with this email not found";
            console.log(errors);
            return _context2.abrupt("return", res.status(400).json(errors));

          case 14:
            _context2.next = 16;
            return _bcryptjs2.default.compare(password, user.password);

          case 16:
            isMatch = _context2.sent;

            if (!isMatch) {
              _context2.next = 30;
              break;
            }

            payload = {
              id: user._id,
              name: user.name
            };
            token = void 0;

            if (!req.body.rememberMe) {
              _context2.next = 26;
              break;
            }

            _context2.next = 23;
            return _jsonwebtoken2.default.sign(payload, _keys2.default.secretOrKey);

          case 23:
            token = _context2.sent;
            _context2.next = 29;
            break;

          case 26:
            _context2.next = 28;
            return _jsonwebtoken2.default.sign(payload, _keys2.default.secretOrKey, {
              expiresIn: 3600 * 24
            });

          case 28:
            token = _context2.sent;

          case 29:

            res.json({ token: "Bearer " + token });

          case 30:
            _context2.next = 38;
            break;

          case 32:
            _context2.prev = 32;
            _context2.t0 = _context2["catch"](0);

            console.log(_context2.t0);
            _errors2 = {};

            _errors2.general = _context2.t0;
            res.status(500).json(_errors2);

          case 38:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 32]]);
  }));

  return function loginUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUsers = getUsers;

var _user = __webpack_require__(107);

var _user2 = _interopRequireDefault(_user);

var _sanitizeHtml = __webpack_require__(49);

var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

var _bcryptjs = __webpack_require__(108);

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _jsonwebtoken = __webpack_require__(109);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _validateUserSignupInputs = __webpack_require__(110);

var _validateUserSignupInputs2 = _interopRequireDefault(_validateUserSignupInputs);

var _validateLoginInput2 = __webpack_require__(111);

var _validateLoginInput3 = _interopRequireDefault(_validateLoginInput2);

var _keys = __webpack_require__(50);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get all users
 * @param req
 * @param res
 * @returns void
 */
function getUsers(req, res) {
  _user2.default.find().sort("-dateCreated").exec(function (err, users) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ users: users });
  });
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(13);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now, required: true }
});

exports.default = _mongoose2.default.model("User", userSchema);

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Validator = __webpack_require__(27);
var _ = __webpack_require__(18);

module.exports = function validateWebAdminSignupInput(data) {
  var errors = {};

  // Make attributes empty string if empty
  data.name = !_.isEmpty(data.name) ? data.name : "";
  data.email = !_.isEmpty(data.email) ? data.email : "";
  data.password = !_.isEmpty(data.password) ? data.password : "";
  data.passconfirm = !_.isEmpty(data.passconfirm) ? data.passconfirm : "";

  // Validate name length
  if (!Validator.isLength(data.name, { min: 1, max: 60 })) {
    errors.name = "Name must be between 1 and 60 characters";
  }

  // Validate existance of name
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // Validate existance of email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  // Validate the form of the email
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Validate existance of password
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  // Validate length of password
  if (!Validator.isLength(data.password, { min: 6, max: 60 })) {
    errors.password = "Password must be at least 6 characters";
  }

  // Validate existance of password confirmation
  if (Validator.isEmpty(data.passwordConfirm)) {
    errors.passwordConfirm = "You must confirm your password";
  }

  // Ensure that password and password confirmation are matching
  if (!Validator.equals(data.password, data.passwordConfirm)) {
    errors.passwordConfirm = "Passwords must match";
  }

  return {
    errors: errors,
    isValid: _.isEmpty(errors)
  };
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Validator = __webpack_require__(27);
var _ = __webpack_require__(18);

module.exports = function validateLoginInput(data) {
  var errors = {};

  data.email = !_.isEmpty(data.email) ? data.email : "";
  data.password = !_.isEmpty(data.password) ? data.password : "";

  // Validate the form of the email
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Validate existance of password
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  // Validate existance of email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  return {
    errors: errors,
    isValid: _.isEmpty(errors)
  };
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  mongoURI: process.env.MONGO_URI,
  secretOrKey: process.env.SECRET_OR_KEY,
  accountSid: process.env.ACCOUNT_SID,
  authToken: process.env.AUTH_TOKEN
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  mongoURI: "mongodb://devinMcArthur:chaos1@ds139934.mlab.com:39934/agora-dev",
  secretOrKey: "thisisasecret...shhhhhhhhhh",
  accountSid: "AC310a425b6387ea7744d2a6b3aec1d06c",
  authToken: "d4a0a2a3c483750172672b4c4701e34f"
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(17);

var _node = __webpack_require__(115);

var NodeController = _interopRequireWildcard(_node);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = new _express.Router();

// Get Node by ID
router.route("/node/:nodeID").get(NodeController.getNodeByID);

// Get all root Nodes
router.route("/nodes/root").get(NodeController.getRootNodes);

// Get all Nodes for Forms (returns ID and Title)
router.route("/nodes/form/all").get(NodeController.getAllNodesForSelect);

// Get Node sources
router.route("/node/:id/sources").get(NodeController.getNodeSources);

// Get Node sources
router.route("/node/:id/subtopics").get(NodeController.getNodeSubtopics);

// Create a node
router.route("/node").post(NodeController.createNode);

// Edit a node
router.route("/node/:id/edit").post(NodeController.editNode);

// Remove Duplicate Sources and Subtopics from all Nodes
router.route("/node/remove/duplicates/all").get(NodeController.removeDuplicateSourcesAndSubtopics);

exports.default = router;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeDuplicateSourcesAndSubtopics = exports.getAllNodesForSelect = exports.getRootNodes = exports.getNodeSubtopics = exports.getNodeSources = exports.getNodeByID = exports.editNode = exports.createNode = undefined;

var _regenerator = __webpack_require__(21);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(22);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

// Highlight Array Legend
// 0: Nothing
// 1: Speculation
// 2: Opinion
// 3: Fact
// 4: Incorrect Statement
// 5: Question
// 6: Command
// 7: Axiom

/**
 * Create a node
 * @param req
 * @param res
 * @returns void
 */
var createNode = exports.createNode = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var _this = this;

    var _validateNodeInput, isValid, errors, highlightArray, authorArray, nodeContent, node, _errors;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _validateNodeInput = (0, _validateNodeInput3.default)(req.body), isValid = _validateNodeInput.isValid, errors = _validateNodeInput.errors;

            if (isValid) {
              _context3.next = 5;
              break;
            }

            console.log(errors);
            return _context3.abrupt("return", res.status(400).json(errors));

          case 5:
            highlightArray = [], authorArray = [];

            if (req.body.content && req.body.content.length > 0) {
              highlightArray.length = req.body.content.length;
              highlightArray.fill(0, 0, highlightArray.length);

              authorArray.length = req.body.content.length;
              authorArray.fill(req.body.author, 0, authorArray.length);
            }

            nodeContent = {
              string: req.body.content,
              highlightArray: highlightArray,
              authorArray: authorArray
            };
            node = new _node2.default({
              title: req.body.title,
              content: nodeContent,
              subtopics: req.body.subtopics,
              sources: req.body.sources
            });
            _context3.next = 11;
            return node.save();

          case 11:
            node = _context3.sent;


            node.sources.forEach(function () {
              var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(source) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _node2.default.findByIdAndUpdate(source, { $push: { subtopics: node._id } }, { new: true });

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }());

            node.subtopics.forEach(function () {
              var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(subtopic) {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return _node2.default.findByIdAndUpdate(subtopic, { $push: { sources: node._id } }, { new: true });

                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, _this);
              }));

              return function (_x4) {
                return _ref3.apply(this, arguments);
              };
            }());

            res.end();
            _context3.next = 23;
            break;

          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](0);

            console.log(_context3.t0);
            _errors = {};

            _errors.general = _context3.t0;
            res.status(500).json(_errors);

          case 23:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 17]]);
  }));

  return function createNode(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Edit a node
 * @param req
 * @param res
 * @returns void
 */


var editNode = exports.editNode = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
    var node, errors;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _node2.default.findById(req.params.id);

          case 3:
            node = _context4.sent;

            node.version++;

            node.title = req.body.title, node.content.string = req.body.content;
            (0, _addSource.addSource)(node, req.body.sources);
            (0, _addSubtopic.addSubtopic)(node, req.body.subtopics);
            _context4.next = 10;
            return node.save();

          case 10:

            res.end();
            _context4.next = 19;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](0);

            console.log(_context4.t0);
            errors = {};

            errors.general = _context4.t0;
            res.status(500).json(errors);

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 13]]);
  }));

  return function editNode(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * Get a node by its ID
 * @param req
 * @param res
 * @returns void
 */


var getNodeByID = exports.getNodeByID = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
    var node, errors;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _node2.default.findById(req.params.nodeID);

          case 3:
            node = _context5.sent;

            res.json(node);
            _context5.next = 13;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);

            console.log(_context5.t0);
            errors = {};

            errors.general = _context5.t0;
            res.status(500).json(errors);

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this, [[0, 7]]);
  }));

  return function getNodeByID(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * Get all sources for a Node
 * @param req
 * @param res
 * @returns void
 */


var getNodeSources = exports.getNodeSources = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
    var node, sourceArray, src, sources, i, errors;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _node2.default.findById(req.params.id);

          case 3:
            node = _context6.sent;
            sourceArray = [], src = void 0;

            if (!(node.sources && node.sources.length > 0)) {
              _context6.next = 16;
              break;
            }

            sources = node.sources.slice();
            _context6.t0 = _regenerator2.default.keys(sources);

          case 8:
            if ((_context6.t1 = _context6.t0()).done) {
              _context6.next = 16;
              break;
            }

            i = _context6.t1.value;
            _context6.next = 12;
            return _node2.default.findById(sources[i]);

          case 12:
            src = _context6.sent;

            sourceArray.push(src);
            _context6.next = 8;
            break;

          case 16:

            res.json(sourceArray);
            _context6.next = 25;
            break;

          case 19:
            _context6.prev = 19;
            _context6.t2 = _context6["catch"](0);

            console.log(_context6.t2);
            errors = {};

            errors.general = _context6.t2;
            res.status(500).json(errors);

          case 25:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this, [[0, 19]]);
  }));

  return function getNodeSources(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();

/**
 * Get all subtopics for a Node
 * @param req
 * @param res
 * @returns void
 */


var getNodeSubtopics = exports.getNodeSubtopics = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(req, res) {
    var node, subtopicArray, src, subtopics, i, errors;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _node2.default.findById(req.params.id);

          case 3:
            node = _context7.sent;
            subtopicArray = [], src = void 0;

            if (!(node.subtopics && node.subtopics.length > 0)) {
              _context7.next = 16;
              break;
            }

            subtopics = node.subtopics.slice();
            _context7.t0 = _regenerator2.default.keys(subtopics);

          case 8:
            if ((_context7.t1 = _context7.t0()).done) {
              _context7.next = 16;
              break;
            }

            i = _context7.t1.value;
            _context7.next = 12;
            return _node2.default.findById(subtopics[i]);

          case 12:
            src = _context7.sent;

            subtopicArray.push(src);
            _context7.next = 8;
            break;

          case 16:

            res.json(subtopicArray);
            _context7.next = 25;
            break;

          case 19:
            _context7.prev = 19;
            _context7.t2 = _context7["catch"](0);

            console.log(_context7.t2);
            errors = {};

            errors.general = _context7.t2;
            res.status(500).json(errors);

          case 25:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this, [[0, 19]]);
  }));

  return function getNodeSubtopics(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();

/**
 * Get all root nodes
 * @param req
 * @param res
 * @returns void
 */


var getRootNodes = exports.getRootNodes = function () {
  var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(req, res) {
    var nodes, errors;
    return _regenerator2.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _node2.default.find({
              sources: { $eq: [] }
            });

          case 3:
            nodes = _context8.sent;

            res.json(nodes);
            _context8.next = 13;
            break;

          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8["catch"](0);

            console.log(_context8.t0);
            errors = {};

            errors.general = _context8.t0;
            res.status(500).json(errors);

          case 13:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this, [[0, 7]]);
  }));

  return function getRootNodes(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();

/**
 * Get all Nodes for form
 * @param req
 * @param res
 * @returns void
 */


var getAllNodesForSelect = exports.getAllNodesForSelect = function () {
  var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(req, res) {
    var nodes, nodeArray, errors;
    return _regenerator2.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _node2.default.find();

          case 3:
            nodes = _context9.sent;
            nodeArray = [];

            nodes.forEach(function (node) {
              nodeArray.push({
                label: node.title,
                value: node._id
              });
            });
            res.json(nodeArray);
            _context9.next = 15;
            break;

          case 9:
            _context9.prev = 9;
            _context9.t0 = _context9["catch"](0);

            console.log(_context9.t0);
            errors = {};

            errors.general = _context9.t0;
            res.status(500).json(errors);

          case 15:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this, [[0, 9]]);
  }));

  return function getAllNodesForSelect(_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}();

/**
 * Remove duplicate sources and subtopics from all nodes
 * @param req
 * @param res
 * @returns void
 */


var removeDuplicateSourcesAndSubtopics = exports.removeDuplicateSourcesAndSubtopics = function () {
  var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(req, res) {
    var _this2 = this;

    var nodes, errors;
    return _regenerator2.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return _node2.default.find();

          case 3:
            nodes = _context11.sent;

            nodes.forEach(function () {
              var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(node) {
                return _regenerator2.default.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        node.sources = node.sources.filter(function (elem, index, self) {
                          return index == self.indexOf(elem);
                        });
                        node.subtopics = node.subtopics.filter(function (elem, index, self) {
                          return index == self.indexOf(elem);
                        });
                        _context10.next = 4;
                        return node.save();

                      case 4:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, _this2);
              }));

              return function (_x19) {
                return _ref11.apply(this, arguments);
              };
            }());

            console.log("Big success");
            res.end();
            _context11.next = 15;
            break;

          case 9:
            _context11.prev = 9;
            _context11.t0 = _context11["catch"](0);

            console.log(_context11.t0);
            errors = {};

            errors.general = _context11.t0;
            res.status(500).json(errors);

          case 15:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this, [[0, 9]]);
  }));

  return function removeDuplicateSourcesAndSubtopics(_x17, _x18) {
    return _ref10.apply(this, arguments);
  };
}();

var _node = __webpack_require__(28);

var _node2 = _interopRequireDefault(_node);

var _mongodb = __webpack_require__(116);

var _validateNodeInput2 = __webpack_require__(117);

var _validateNodeInput3 = _interopRequireDefault(_validateNodeInput2);

var _addSource = __webpack_require__(118);

var _addSubtopic = __webpack_require__(119);

var _assert = __webpack_require__(120);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Validator = __webpack_require__(27);
var _ = __webpack_require__(18);

module.exports = function validateNodeInput(data) {
  var errors = {};

  data.title = !_.isEmpty(data.title) ? data.title : "";
  data.content = !_.isEmpty(data.content) ? data.content : "";

  // Validate length of title
  if (!Validator.isLength(data.title, { max: 70 })) {
    errors.title = "Title must be shorter than 70 characters";
  }

  // Validate existance of password
  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  return {
    errors: errors,
    isValid: _.isEmpty(errors)
  };
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSource = undefined;

var _regenerator = __webpack_require__(21);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(22);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var addSource = exports.addSource = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(node, sources) {
    var _this = this;

    var nodeId, oldSources, newSources, errors;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            nodeId = _mongoose2.default.Types.ObjectId(node._id);

            if (!(sources.length > 0)) {
              _context4.next = 12;
              break;
            }

            // Find items that have been removed, remove subtopic relationship from that node
            oldSources = node.sources.filter(function (x) {
              return !sources.includes(x.toString());
            });

            oldSources.forEach(function () {
              var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(source) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _node2.default.findByIdAndUpdate(source, { $pull: { subtopics: nodeId } }, { new: true });

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }());

            // Find objects that are new, add subtopic relationship from that node
            newSources = sources.filter(function (newSource) {
              return !node.sources.some(function (source) {
                return source.equals(_mongoose2.default.Types.ObjectId(newSource));
              });
            });

            newSources.forEach(function () {
              var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(source) {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return _node2.default.findByIdAndUpdate(source, { $push: { subtopics: nodeId } }, { new: true });

                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, _this);
              }));

              return function (_x4) {
                return _ref3.apply(this, arguments);
              };
            }());
            node.sources = sources;
            _context4.next = 10;
            return node.save();

          case 10:
            _context4.next = 17;
            break;

          case 12:
            // Remove from subtopic of related nodes
            node.sources.forEach(function () {
              var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(source) {
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return _node2.default.findByIdAndUpdate(source, { $pull: { subtopics: nodeId } }, { new: true });

                      case 2:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, _this);
              }));

              return function (_x5) {
                return _ref4.apply(this, arguments);
              };
            }());
            node.sources = [];
            _context4.next = 16;
            return node.save();

          case 16:
            return _context4.abrupt("return");

          case 17:
            _context4.next = 25;
            break;

          case 19:
            _context4.prev = 19;
            _context4.t0 = _context4["catch"](0);

            console.log(_context4.t0);
            errors = {};

            errors.general = _context4.t0;
            return _context4.abrupt("return", new Error(errors));

          case 25:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 19]]);
  }));

  return function addSource(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _node = __webpack_require__(28);

var _node2 = _interopRequireDefault(_node);

var _mongoose = __webpack_require__(13);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSubtopic = undefined;

var _regenerator = __webpack_require__(21);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(22);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var addSubtopic = exports.addSubtopic = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(node, subtopics) {
    var _this = this;

    var nodeId, oldSubtopics, newSubtopics, errors;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            nodeId = _mongoose2.default.Types.ObjectId(node._id);

            if (!(subtopics.length > 0)) {
              _context4.next = 15;
              break;
            }

            // Find items that have been removed, remove source relationship in that node
            oldSubtopics = node.subtopics.filter(function (x) {
              return !subtopics.includes(x.toString());
            });

            console.log(oldSubtopics);
            oldSubtopics.forEach(function () {
              var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(subtopic) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _node2.default.findByIdAndUpdate(subtopic, { $pull: { sources: nodeId } }, { new: true });

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }());

            // Find objects that are new, add source relationship in that node
            newSubtopics = subtopics.filter(function (newSubtopic) {
              return !node.subtopics.some(function (subtopic) {
                return subtopic.equals(_mongoose2.default.Types.ObjectId(newSubtopic));
              });
            });

            console.log(newSubtopics);
            newSubtopics.forEach(function () {
              var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(subtopic) {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return _node2.default.findByIdAndUpdate(subtopic, { $addToSet: { sources: nodeId } }, { new: true });

                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, _this);
              }));

              return function (_x4) {
                return _ref3.apply(this, arguments);
              };
            }());
            node.subtopics = subtopics;
            _context4.next = 12;
            return node.save();

          case 12:
            return _context4.abrupt("return");

          case 15:
            // Remove from source of related nodes
            node.subtopics.forEach(function () {
              var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(source) {
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return _node2.default.findByIdAndUpdate(source, { $pull: { sources: nodeId } }, { new: true });

                      case 2:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, _this);
              }));

              return function (_x5) {
                return _ref4.apply(this, arguments);
              };
            }());
            node.subtopics = [];
            _context4.next = 19;
            return node.save();

          case 19:
            return _context4.abrupt("return");

          case 20:
            _context4.next = 28;
            break;

          case 22:
            _context4.prev = 22;
            _context4.t0 = _context4["catch"](0);

            console.log(_context4.t0);
            errors = {};

            errors.general = _context4.t0;
            return _context4.abrupt("return", new Error(errors));

          case 28:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 22]]);
  }));

  return function addSubtopic(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _node = __webpack_require__(28);

var _node2 = _interopRequireDefault(_node);

var _mongoose = __webpack_require__(13);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  _post2.default.count().exec(function (err, count) {
    if (count > 0) {
      return;
    }

    var content1 = 'Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum';

    var content2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum. Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet.';

    var post1 = new _post2.default({ name: 'Admin', title: 'Hello MERN', slug: 'hello-mern', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
    var post2 = new _post2.default({ name: 'Admin', title: 'Lorem Ipsum', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });

    _post2.default.create([post1, post2], function (error) {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
};

var _post = __webpack_require__(48);

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var webpack = __webpack_require__(51);
var cssnext = __webpack_require__(123);
var postcssFocus = __webpack_require__(124);
var postcssReporter = __webpack_require__(125);

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
    vendor: ['react', 'react-dom']
  },

  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: 'http://0.0.0.0:8000/'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['client', 'node_modules']
  },

  module: {
    rules: [{
      test: /\.s?css$/,
      exclude: /node_modules/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          localIdentName: '[name]__[local]__[hash:base64:5]',
          modules: true,
          importLoaders: 1,
          sourceMap: true
        }
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: function plugins() {
            return [postcssFocus(), cssnext({
              browsers: ['last 2 versions', 'IE > 10']
            }), postcssReporter({
              clearMessages: true
            })];
          }
        }
      }]
    }, {
      test: /\.css$/,
      include: /node_modules/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.jsx*$/,
      exclude: [/node_modules/, /.+\.config.js/],
      use: 'babel-loader'
    }, {
      test: /\.(jpe?g|gif|png|svg)$/i,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }]
    }]
  },

  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'vendor.js'
  }), new webpack.DefinePlugin({
    'process.env': {
      CLIENT: JSON.stringify(true),
      'NODE_ENV': JSON.stringify('development')
    }
  })]
};
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = require("postcss-cssnext");

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = require("postcss-focus");

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = require("postcss-reporter");

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ })
/******/ ]);