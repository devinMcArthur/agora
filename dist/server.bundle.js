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
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nodeFullClear = exports.setNodeLoading = exports.clearSubtopics = exports.clearSources = exports.clearNode = exports.clearNodes = exports.setNode = exports.updateNodeConnections = exports.clearDuplicateSourceAndSubtopics = exports.legacyClearDuplicateSourceAndSubtopics = exports.getSubtopics = exports.getSources = exports.getAllPrivateNodesForSelect = exports.getAllPublicNodesForSelect = exports.deleteNode = exports.getNodeByID = exports.getUniverseRootNodes = exports.editNode = exports.createNode = exports.NODE_FULL_CLEAR = exports.CLEAR_SUBTOPICS = exports.CLEAR_SOURCES = exports.CLEAR_NODE = exports.CLEAR_NODES = exports.SET_NODE = exports.NODE_LOADING = exports.GET_SUBTOPICS = exports.GET_SOURCES = exports.GET_ALL_PRIVATE_NODES = exports.GET_ALL_PUBLIC_NODES = exports.GET_NODES = exports.GET_NODE = undefined;

var _apiCaller = __webpack_require__(19);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

var _setAuthToken = __webpack_require__(43);

var _setAuthToken2 = _interopRequireDefault(_setAuthToken);

var _jwtDecode = __webpack_require__(44);

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _ErrorActions = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GET_NODE = exports.GET_NODE = "GET_NODE";
var GET_NODES = exports.GET_NODES = "GET_NODES";
var GET_ALL_PUBLIC_NODES = exports.GET_ALL_PUBLIC_NODES = "GET_ALL_PUBLIC_NODES";
var GET_ALL_PRIVATE_NODES = exports.GET_ALL_PRIVATE_NODES = "GET_ALL_PRIVATE_NODES";
var GET_SOURCES = exports.GET_SOURCES = "GET_SOURCES";
var GET_SUBTOPICS = exports.GET_SUBTOPICS = "GET_SUBTOPICS";
var NODE_LOADING = exports.NODE_LOADING = "NODE_LOADING";
var SET_NODE = exports.SET_NODE = "SET_NODE";
var CLEAR_NODES = exports.CLEAR_NODES = "CLEAR_NODES";
var CLEAR_NODE = exports.CLEAR_NODE = "CLEAR_NODE";
var CLEAR_SOURCES = exports.CLEAR_SOURCES = "CLEAR_SOURCES";
var CLEAR_SUBTOPICS = exports.CLEAR_SUBTOPICS = "CLEAR_SUBTOPICS";
var NODE_FULL_CLEAR = exports.NODE_FULL_CLEAR = "NODE_FULL_CLEAR";

// Create a node
var createNode = exports.createNode = function createNode(node) {
  return function (dispatch) {
    return (0, _apiCaller2.default)("node", "post", node).then(function (res) {
      return dispatch({ type: GET_NODE, payload: res });
    }).catch(function (err) {
      return dispatch({ type: _ErrorActions.GET_ERRORS, payload: err });
    });
  };
};

// Edit a node
var editNode = exports.editNode = function editNode(node) {
  return function (dispatch) {
    return (0, _apiCaller2.default)("node/" + node.id + "/edit", "post", node).then(function (res) {
      return dispatch({ type: GET_NODE, payload: res });
    }).catch(function (err) {
      return dispatch({ type: _ErrorActions.GET_ERRORS, payload: err });
    });
  };
};

// Get all root nodes for a given universe (no sources)
var getUniverseRootNodes = exports.getUniverseRootNodes = function getUniverseRootNodes(id) {
  return function (dispatch) {
    dispatch(setNodeLoading());
    return (0, _apiCaller2.default)("nodes/universe/" + id + "/root", "get").then(function (res) {
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

// Remove duplicate sources and subtopics from all nodes
var deleteNode = exports.deleteNode = function deleteNode(id) {
  return function (dispatch) {
    return (0, _apiCaller2.default)("/node/" + id + "/delete", "get").then(function (res) {
      return location.reload();
    }).catch(function (err) {
      return dispatch({ type: _ErrorActions.GET_ERRORS, payload: err });
    });
  };
};

// Retrieve an ID and Title for all Public Nodes
var getAllPublicNodesForSelect = exports.getAllPublicNodesForSelect = function getAllPublicNodesForSelect() {
  return function (dispatch) {
    dispatch(setNodeLoading());
    return (0, _apiCaller2.default)("/nodes/form/public/all", "get").then(function (res) {
      return dispatch({ type: GET_ALL_PUBLIC_NODES, payload: res });
    }).catch(function (err) {
      return dispatch({ type: _ErrorActions.GET_ERRORS, payload: err });
    });
  };
};

// Retrieve an ID and Title for all Private Nodes
var getAllPrivateNodesForSelect = exports.getAllPrivateNodesForSelect = function getAllPrivateNodesForSelect(id) {
  return function (dispatch) {
    dispatch(setNodeLoading());
    return (0, _apiCaller2.default)("/nodes/form/private/" + id + "/all", "get").then(function (res) {
      return dispatch({ type: GET_ALL_PRIVATE_NODES, payload: res });
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

// LEGACY ** Remove duplicate sources and subtopics from all nodes
var legacyClearDuplicateSourceAndSubtopics = exports.legacyClearDuplicateSourceAndSubtopics = function legacyClearDuplicateSourceAndSubtopics(dispatch) {
  return (0, _apiCaller2.default)("/node/remove/duplicates/all/legacy", "get").then(function (res) {
    return location.reload();
  }).catch(function (err) {
    return dispatch({ type: _ErrorActions.GET_ERRORS, payload: err });
  });
};

// Remove duplicate sources and subtopics from all nodes
var clearDuplicateSourceAndSubtopics = exports.clearDuplicateSourceAndSubtopics = function clearDuplicateSourceAndSubtopics(dispatch) {
  return (0, _apiCaller2.default)("/node/remove/duplicates/all", "get").then(function (res) {
    return location.reload();
  }).catch(function (err) {
    return dispatch({ type: _ErrorActions.GET_ERRORS, payload: err });
  });
};

// Change legacy source and subtopic connections to connection object references
var updateNodeConnections = exports.updateNodeConnections = function updateNodeConnections(dispatch) {
  return (0, _apiCaller2.default)("/node/connections/update/all", "get").then(function (res) {
    return location.reload();
  }).catch(function (err) {
    return dispatch({ type: _ErrorActions.GET_ERRORS, payload: err });
  });
};

var setNode = exports.setNode = function setNode(node) {
  return {
    type: SET_NODE,
    payload: node
  };
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

var clearSources = exports.clearSources = function clearSources() {
  return {
    type: CLEAR_SOURCES
  };
};

var clearSubtopics = exports.clearSubtopics = function clearSubtopics() {
  return {
    type: CLEAR_SUBTOPICS
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
/* 11 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUniverseLoading = exports.clearUniverse = exports.createPublicUniverse = exports.getUserUniverses = exports.createPersonalUniverse = exports.getPublicUniverse = exports.getUniverse = exports.createUniverse = exports.CLEAR_UNIVERSE = exports.UNIVERSE_LOADING = exports.GET_UNIVERSES = exports.GET_UNIVERSE = undefined;

var _apiCaller = __webpack_require__(19);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

var _ErrorActions = __webpack_require__(25);

var _AuthActions = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GET_UNIVERSE = exports.GET_UNIVERSE = "GET_UNIVERSE";
var GET_UNIVERSES = exports.GET_UNIVERSES = "GET_UNIVERSES";
var UNIVERSE_LOADING = exports.UNIVERSE_LOADING = "UNIVERSE_LOADING";
var CLEAR_UNIVERSE = exports.CLEAR_UNIVERSE = "CLEAR_UNIVERSE";

// Create Universe
var createUniverse = exports.createUniverse = function createUniverse(universe) {
  return function (dispatch) {
    return (0, _apiCaller2.default)("/universe", "post", universe).then(function (res) {
      return window.location.replace("/universe/" + res);
    }).catch(function (err) {
      return dispatch({ type: _ErrorActions.GET_ERRORS, payload: err });
    });
  };
};

// Get universe by id
var getUniverse = exports.getUniverse = function getUniverse(id) {
  return function (dispatch) {
    dispatch(setUniverseLoading());
    return (0, _apiCaller2.default)("/universe/" + id, "get").then(function (res) {
      return dispatch({ type: GET_UNIVERSE, payload: res });
    }).catch(function (err) {
      return dispatch({ type: _ErrorActions.GET_ERRORS, payload: err });
    });
  };
};

// Get public universe
var getPublicUniverse = exports.getPublicUniverse = function getPublicUniverse() {
  return function (dispatch) {
    dispatch(setUniverseLoading());
    return (0, _apiCaller2.default)("/universe/public/get", "get").then(function (res) {
      return dispatch({ type: GET_UNIVERSE, payload: res });
    }).catch(function (err) {
      return dispatch({ type: _ErrorActions.GET_ERRORS, payload: err });
    });
  };
};

// Create a personal universe for a given user that does not already have one
var createPersonalUniverse = exports.createPersonalUniverse = function createPersonalUniverse(id) {
  return function (dispatch) {
    return (0, _apiCaller2.default)("/universe/create/personal/" + id, "get").then(function (res) {
      dispatch((0, _AuthActions.setCurrentUser)());
      location.reload();
    }).catch(function (err) {
      return dispatch({ type: _ErrorActions.GET_ERRORS, payload: err });
    });
  };
};

var getUserUniverses = exports.getUserUniverses = function getUserUniverses(id) {
  return function (dispatch) {
    dispatch(setUniverseLoading());
    return (0, _apiCaller2.default)("/universe/user/" + id + "/fetch/all").then(function (res) {
      return dispatch({ type: GET_UNIVERSES, payload: res });
    }).catch(function (err) {
      return dispatch({ type: _ErrorActions.GET_ERRORS, payload: err });
    });
  };
};

// Change legacy source and subtopic connections to connection object references
var createPublicUniverse = exports.createPublicUniverse = function createPublicUniverse(dispatch) {
  return (0, _apiCaller2.default)("/universe/create/public", "get").then(function (res) {
    return location.reload();
  }).catch(function (err) {
    return dispatch({ type: _ErrorActions.GET_ERRORS, payload: err });
  });
};

var clearUniverse = exports.clearUniverse = function clearUniverse() {
  return {
    type: CLEAR_UNIVERSE
  };
};

var setUniverseLoading = exports.setUniverseLoading = function setUniverseLoading() {
  return {
    type: UNIVERSE_LOADING
  };
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logoutUser = exports.setCurrentUser = exports.loginUser = exports.registerUser = exports.GET_ERRORS = exports.SET_CURRENT_USER = undefined;

var _apiCaller = __webpack_require__(19);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

var _setAuthToken = __webpack_require__(43);

var _setAuthToken2 = _interopRequireDefault(_setAuthToken);

var _jwtDecode = __webpack_require__(44);

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
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_URL = undefined;
exports.default = callApi;

var _isomorphicFetch = __webpack_require__(71);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _config = __webpack_require__(72);

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
/* 20 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(11);

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
  author: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  content: {
    string: {
      type: String
    },
    highlightArray: {
      type: [Number]
    },
    // Can be used to have a set of words reference multiple other nodes
    nodeReferenceArray: [{
      type: [Schema.Types.ObjectId]
    }],
    authorArray: {
      type: [Schema.Types.ObjectId]
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "user"
    },
    version: {
      type: Number,
      default: 0
    }
  },
  versionsReference: {
    type: Schema.Types.ObjectId,
    ref: "nodeVersions"
  },
  subtopics: {
    type: [Schema.Types.ObjectId]
  },
  subtopicConnections: {
    type: [Schema.Types.ObjectId]
  },
  sources: {
    type: [Schema.Types.ObjectId]
  },
  sourceConnections: {
    type: [Schema.Types.ObjectId]
  },
  // Determine whether this is a public or private node
  public: {
    type: Boolean,
    default: true
  },
  // this is the universe that this node exists in (Public Universe if Public)
  originUniverse: {
    type: Schema.Types.ObjectId,
    ref: "universe"
  },
  // Universes that this node is shared in, can be used if this node is public
  sharedUniverses: {
    type: [Schema.Types.ObjectId]
  },
  // Can be toggled to only show this node to particular users even within a Private Universe
  hidden: {
    type: Boolean,
    default: false
  },
  // List of users that can view this node when hidden
  hiddenWhitelist: {
    type: [Schema.Types.ObjectId]
  }
});

exports.default = _mongoose2.default.model("Node", nodeSchema);

/***/ }),
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPost = exports.getPosts = undefined;

var _toConsumableArray2 = __webpack_require__(70);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _PostActions = __webpack_require__(29);

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
/* 29 */
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

var _apiCaller = __webpack_require__(19);

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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = __webpack_require__(21);

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

var _NodeActions = __webpack_require__(10);

var _SelectMultiple = __webpack_require__(31);

var _SelectMultiple2 = _interopRequireDefault(_SelectMultiple);

var _Paper = __webpack_require__(15);

var _Paper2 = _interopRequireDefault(_Paper);

var _TextField = __webpack_require__(22);

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = __webpack_require__(17);

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
    } else if (_this.props.sourceNode) {
      sources.push(_this.props.sourceNode._id);
      defaultSources.push({
        label: _this.props.sourceNode.title,
        value: _this.props.sourceNode._id.toString()
      });
    }

    _this.state = {
      title: "",
      content: "",
      subtopics: [],
      sources: sources,
      defaultSources: defaultSources,
      universe: null,
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
        if (this.props.private) {
          this.props.getAllPrivateNodesForSelect(this.props.universe.universe._id);
        } else {
          this.props.getAllPublicNodesForSelect();
        }
      }
      this.setState({ universe: this.props.universe.universe._id });
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
        author: this.props.auth.user.id,
        private: this.props.private,
        universe: this.state.universe
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
    key: "render",
    value: function render() {
      var content = void 0;
      if (this.props.node.formNodes !== null) {
        console.log(this.props.node.formNodes);
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
          multiline: true,
          fullWidth: true
        }), (0, _jsx3.default)(_SelectMultiple2.default, {
          label: "Sources",
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
    node: state.node,
    universe: state.universe
  };
};

NodeForm.defaultProps = {
  private: false
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { createNode: _NodeActions.createNode, getAllPublicNodesForSelect: _NodeActions.getAllPublicNodesForSelect, getAllPrivateNodesForSelect: _NodeActions.getAllPrivateNodesForSelect })(NodeForm);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(108);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSelect = __webpack_require__(109);

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
/* 32 */
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

var _Paper = __webpack_require__(15);

var _Paper2 = _interopRequireDefault(_Paper);

var _Button = __webpack_require__(17);

var _Button2 = _interopRequireDefault(_Button);

var _Grid = __webpack_require__(53);

var _Grid2 = _interopRequireDefault(_Grid);

var _NodeForm = __webpack_require__(30);

var _NodeForm2 = _interopRequireDefault(_NodeForm);

var _RootNodeList = __webpack_require__(110);

var _RootNodeList2 = _interopRequireDefault(_RootNodeList);

var _NodeActions = __webpack_require__(10);

var _UniverseActions = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UniverseRoot = function (_Component) {
  (0, _inherits3.default)(UniverseRoot, _Component);

  function UniverseRoot() {
    (0, _classCallCheck3.default)(this, UniverseRoot);

    var _this = (0, _possibleConstructorReturn3.default)(this, (UniverseRoot.__proto__ || Object.getPrototypeOf(UniverseRoot)).call(this));

    _this.state = {
      nodeFormToggle: false,
      universe: null,
      content: "",
      subtopics: [],
      sources: [],
      errors: {}
    };

    _this.nodeFormToggle = _this.nodeFormToggle.bind(_this);
    _this.onNavigation = _this.onNavigation.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(UniverseRoot, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.universe.universe._id !== null) {
        this.props.clearNodes();
        this.props.clearNode();
        this.props.getUniverseRootNodes(this.props.universe.universe._id);
      }
      if (this.props.universe.universe.public === true) {
        _reactRouter.browserHistory.push("/");
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.clearUniverse();
      this.props.nodeFullClear();
    }
  }, {
    key: "nodeFormToggle",
    value: function nodeFormToggle() {
      this.setState({ nodeFormToggle: !this.state.nodeFormToggle });
    }
  }, {
    key: "onNavigation",
    value: function onNavigation(id) {
      if (id.includes("root")) {
        return _reactRouter.browserHistory.push("/universe/" + this.props.universe.universe._id);
      }
      var newNode = void 0;
      if (this.props.node.nodes !== null) {
        newNode = this.props.node.nodes.filter(function (node) {
          return node._id.toString() === id;
        });
        if (newNode.length === 1) {
          this.props.setNode(newNode[0]);
        } else {
          this.props.getNodeByID(id);
        }
      } else {
        this.props.getNodeByID(id);
      }
    }
  }, {
    key: "universeNavigation",
    value: function universeNavigation(id) {
      _reactRouter.browserHistory.push("/universe/" + id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var nodeForm = void 0,
          nodeFormComp = (0, _jsx3.default)(_NodeForm2.default, {
        "private": !this.props.universe.universe.public
      });

      if (this.state.nodeFormToggle) {
        nodeForm = nodeFormComp;
      } else {
        nodeForm = "";
      }

      var content = void 0;
      if (this.props.node.nodes !== null && this.props.node.nodes.length > 0 && this.props.node.node === null) {
        content = (0, _jsx3.default)(_RootNodeList2.default, {
          nodes: this.props.node.nodes,
          onNavigation: this.onNavigation
        });
      } else if (this.props.node.node !== null) {
        content = (0, _jsx3.default)(_RootNodeList2.default, {
          nodes: new Array(this.props.node.node),
          onNavigation: this.onNavigation
        });
      }

      var title = void 0;
      this.props.title ? title = this.props.title : title = this.props.universe.universe.title;

      return (0, _jsx3.default)("div", {}, void 0, (0, _jsx3.default)(_Grid2.default, {
        container: true,
        spacing: 24
      }, void 0, (0, _jsx3.default)(_Grid2.default, {
        item: true,
        xs: "auto"
      }, void 0, (0, _jsx3.default)("h1", {
        style: { cursor: "pointer" },
        onClick: function onClick() {
          _this2.universeNavigation(_this2.props.universe.universe._id);
        }
      }, void 0, title)), this.props.auth.isAuthenticated ? (0, _jsx3.default)(_Grid2.default, {
        item: true,
        xs: 4
      }, void 0, (0, _jsx3.default)(_Button2.default, {
        variant: "outlined",
        color: "primary",
        onClick: this.nodeFormToggle
      }, void 0, "Add a new Node")) : ""), nodeForm, (0, _jsx3.default)("p", {}, void 0, this.props.text), content);
    }
  }]);
  return UniverseRoot;
}(_react.Component);

// Retrieve data from store as props


var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    node: state.node,
    universe: state.universe
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  getUniverseRootNodes: _NodeActions.getUniverseRootNodes,
  clearNodes: _NodeActions.clearNodes,
  clearNode: _NodeActions.clearNode,
  setNode: _NodeActions.setNode,
  getNodeByID: _NodeActions.getNodeByID,
  nodeFullClear: _NodeActions.nodeFullClear,
  clearUniverse: _UniverseActions.clearUniverse
})(UniverseRoot);

/***/ }),
/* 33 */
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

var _lodash = __webpack_require__(20);

var _lodash2 = _interopRequireDefault(_lodash);

var _Paper = __webpack_require__(15);

var _Paper2 = _interopRequireDefault(_Paper);

var _Button = __webpack_require__(17);

var _Button2 = _interopRequireDefault(_Button);

var _Grid = __webpack_require__(53);

var _Grid2 = _interopRequireDefault(_Grid);

var _EditNodeForm = __webpack_require__(111);

var _EditNodeForm2 = _interopRequireDefault(_EditNodeForm);

var _NodeForm = __webpack_require__(30);

var _NodeForm2 = _interopRequireDefault(_NodeForm);

var _Spinner = __webpack_require__(34);

var _Spinner2 = _interopRequireDefault(_Spinner);

var _ShareButton = __webpack_require__(112);

var _ShareButton2 = _interopRequireDefault(_ShareButton);

var _NodeActions = __webpack_require__(10);

var _UniverseActions = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_Spinner2.default, {});

var _ref2 = (0, _jsx3.default)(_Spinner2.default, {});

var Node = function (_Component) {
  (0, _inherits3.default)(Node, _Component);

  function Node(props) {
    (0, _classCallCheck3.default)(this, Node);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this, props));

    var subtopicToggle = void 0;
    _this.props.subtopicToggle !== undefined ? subtopicToggle = _this.props.subtopicToggle : subtopicToggle = true;

    _this.state = {
      node: _this.props.singleNode || null,
      editFormToggle: false,
      toggleNodeForm: false,
      subtopicToggle: subtopicToggle,
      subtopics: null,
      sources: null
    };

    _this.toggleEditForm = _this.toggleEditForm.bind(_this);
    _this.toggleNodeForm = _this.toggleNodeForm.bind(_this);
    _this.toggleSubtopics = _this.toggleSubtopics.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Node, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Handle component loading
      var node = this.state.node;

      if (node) {
        if (node.subtopicConnections && node.subtopicConnections.length > 0) {
          this.props.getSubtopics(node._id);
        }
        if (node.sourceConnections && node.sourceConnections.length > 0) {
          this.props.getSources(node._id);
        }
      }
      // Handle loading node through url
      if (this.props.singleNode === null && this.props.node.node === null && !this.props.node.loading) {
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
      this.props.clearNodes();
    }
  }, {
    key: "toggleSubtopics",
    value: function toggleSubtopics() {
      this.setState({ subtopicToggle: !this.state.subtopicToggle });
    }
  }, {
    key: "copyNodeAddressToClipboard",
    value: function copyNodeAddressToClipboard() {
      var textField = document.createElement("textarea");
      textField.innerText = "";
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Grab appropriate subtopics for this node
      if (this.props.node.subtopics !== null && (this.state.subtopics === null || !_lodash2.default.isEqual(this.state.subtopics, this.props.node.subtopics)) && this.state.node !== null && this.state.node._id.toString() === this.props.node.subtopics[0].connection.sourceNode.toString()) {
        this.setState({ subtopics: this.props.node.subtopics });
        this.props.clearSubtopics();
      }
      // Grab appropriate sources for this node
      if (this.props.node.sources !== null && (this.state.sources === null || !_lodash2.default.isEqual(this.state.sources, this.props.node.sources)) && this.state.node && this.state.node._id.toString() === this.props.node.sources[0].connection.subtopicNode.toString()) {
        this.setState({ sources: this.props.node.sources });
        this.props.clearSources();
      }
      // Grab loaded node if necessary
      if (this.props.node.node !== null && this.state.node === null) {
        this.setState({
          node: this.props.node.node
        });
        this.props.getUniverse(this.props.node.node.originUniverse);
        if (this.props.node.node.subtopicConnections && this.props.node.node.subtopicConnections.length > 0) {
          this.props.getSubtopics(this.props.node.node._id);
        }
        if (this.props.node.node.sourceConnections && this.props.node.node.sourceConnections.length > 0) {
          this.props.getSources(this.props.node.node._id);
        }
      }
      // Update subtopicToggle
      if (this.props.subtopicToggle !== prevProps.subtopicToggle) {
        this.setState({ subtopicToggle: this.props.subtopicToggle });
      }
      // Update state node on update (edit)
      if (!_lodash2.default.isEqual(this.state.node, this.props.node.node) && this.props.node.node !== null && this.state.node !== null) {
        this.setState({ node: this.props.node.node, editFormToggle: false });
        if (this.props.node.node.subtopicConnections && this.props.node.node.subtopicConnections.length > 0) {
          this.props.getSubtopics(this.props.node.node._id);
        }
        if (this.props.node.node.sourceConnections && this.props.node.node.sourceConnections.length > 0) {
          this.props.getSources(this.props.node.node._id);
        }
      }
    }
  }, {
    key: "toggleNodeForm",
    value: function toggleNodeForm() {
      this.setState({ toggleNodeForm: !this.state.toggleNodeForm });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.state);
      var _state = this.state,
          editFormToggle = _state.editFormToggle,
          toggleNodeForm = _state.toggleNodeForm;

      var content = void 0;
      if (this.state.node !== null) {
        var sourceJSX = [],
            subtopicJSX = [],
            editForm = void 0,
            nodeForm = void 0,
            subtopicToggleButtonText = void 0;
        var node = this.state.node;

        if (editFormToggle) {
          editForm = (0, _jsx3.default)("div", {}, void 0, (0, _jsx3.default)(_EditNodeForm2.default, {
            singleNode: node,
            "private": !this.props.universe.universe.public
          }));
        } else {
          editForm = "";
        }

        if (toggleNodeForm) {
          nodeForm = (0, _jsx3.default)(_NodeForm2.default, {
            "private": !this.props.universe.universe.public,
            sourceNode: this.state.node
          });
        }

        var _state2 = this.state,
            subtopics = _state2.subtopics,
            sources = _state2.sources;

        // Sources

        if (sources && sources.length > 0) {
          sources.forEach(function (source) {
            source = source.source;
            sourceJSX.push((0, _jsx3.default)("span", {}, source._id, (0, _jsx3.default)(_Button2.default, {
              onClick: function onClick() {
                _this2.props.onNavigation(source._id);
              }
            }, void 0, "#", source.title), " "));
          });
        } else {
          if (this.props.universe.universe !== null) {
            sourceJSX.push((0, _jsx3.default)("span", {}, "root-link", (0, _jsx3.default)(_Button2.default, {
              onClick: function onClick() {
                _this2.props.onNavigation("root-" + _this2.props.universe.universe._id);
              }
            }, void 0, "#root")));
          } else {
            sourceJSX.push("Loading . . .");
          }
        }

        // Subtopics
        if (subtopics && subtopics.length > 0 && this.state.subtopicToggle) {
          subtopicToggleButtonText = "Hide Subtopics";
          subtopics.forEach(function (subtopic) {
            subtopic = subtopic.subtopic;
            subtopicJSX.push((0, _jsx3.default)(_Paper2.default, {
              style: {
                padding: "0.5em",
                marginTop: "0.5em",
                border: "solid black 1px"
              }
            }, subtopic._id, (0, _jsx3.default)("h3", {
              style: { cursor: "pointer" },
              onClick: function onClick() {
                _this2.props.onNavigation(subtopic._id);
              }
            }, void 0, subtopic.title), subtopic.content.string === "" ? "No Content" : (0, _jsx3.default)("p", {}, void 0, subtopic.content.string)));
          });
        } else if (this.props.node.loading && this.state.node.subtopicConnections.length > 0) {
          subtopicToggleButtonText = "Subtopics Loading . . .";
          subtopicJSX = _ref;
        } else {
          subtopicToggleButtonText = "Show Subtopics";
          subtopicJSX = "";
        }

        var subtopicToggleJSX = void 0;
        if (subtopics && subtopics.length > 0) {
          subtopicToggleJSX = (0, _jsx3.default)(_Grid2.default, {
            container: true,
            spacing: 0,
            direction: "column",
            alignItems: "center",
            justify: "center"
          }, void 0, (0, _jsx3.default)(_Button2.default, {
            onClick: this.toggleSubtopics
          }, void 0, subtopicToggleButtonText));
        }

        var lineArray = void 0,
            nodeContent = void 0;
        if (node.content.string) {
          // render new lines
          var count = 0;
          lineArray = [];
          node.content.string.split("\n").forEach(function (line) {
            lineArray.push((0, _jsx3.default)("p", {
              style: { color: "white" }
            }, "line-" + count, line));
            count++;
          });
          nodeContent = (0, _jsx3.default)(_Paper2.default, {
            style: {
              padding: "0.5em",
              marginTop: "0.5em",
              backgroundColor: "gray"
            },
            square: true
          }, "node-content", lineArray);
        } else {
          nodeContent = "";
        }

        var deleteButton = void 0;
        if (this.props.auth.user && this.props.auth.user.admin) {
          deleteButton = (0, _jsx3.default)("span", {}, void 0, " | ", (0, _jsx3.default)(_Button2.default, {
            variant: "outlined",
            color: "secondary",
            onClick: function onClick() {
              if (window.confirm("Are you sure you want to delete this Node?")) _this2.props.deleteNode(node._id);
            }
          }, void 0, "Delete Node"));
        }

        // FINAL CONTENT THAT WILL BE LOADED
        content = (0, _jsx3.default)("div", {}, node._id, (0, _jsx3.default)(_Paper2.default, {
          style: {
            padding: "0.5em",
            margin: "1em",
            border: "solid black 1px"
          }
        }, void 0, (0, _jsx3.default)(_Grid2.default, {
          justify: "space-between",
          container: true,
          spacing: 24
        }, void 0, (0, _jsx3.default)(_Grid2.default, {
          item: true
        }, void 0, " ", (0, _jsx3.default)("h1", {
          style: { cursor: "pointer" },
          className: "link-text",
          onClick: function onClick() {
            _this2.props.onNavigation(node._id);
          }
        }, void 0, node.title)), (0, _jsx3.default)(_Grid2.default, {
          item: true
        }, void 0, (0, _jsx3.default)(_ShareButton2.default, {
          link: location.origin + "/node/" + node._id
        }))), (0, _jsx3.default)("div", {
          className: "row"
        }, void 0, (0, _jsx3.default)("div", {
          className: "col"
        }, void 0, this.props.auth.isAuthenticated ? (0, _jsx3.default)("span", {}, void 0, (0, _jsx3.default)(_Button2.default, {
          variant: "outlined",
          color: "primary",
          style: { marginRight: "0.5em" },
          onClick: this.toggleEditForm
        }, void 0, "Edit Node"), (0, _jsx3.default)(_Button2.default, {
          variant: "outlined",
          color: "primary",
          onClick: this.toggleNodeForm
        }, void 0, "Add Node"), deleteButton) : "")), nodeForm, editForm, sourceJSX, nodeContent, (0, _jsx3.default)("div", {}, void 0, subtopicJSX), subtopicToggleJSX));
      } else {
        content = _ref2;
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
    node: state.node,
    universe: state.universe
  };
};

Node.defaultProps = {
  onNavigation: function onNavigation(e) {
    if (e.includes("root")) {
      _reactRouter.browserHistory.push("/universe/" + e.split("-")[1]);
    } else {
      _reactRouter.browserHistory.push("/node/" + e);
      location.reload();
    }
  },
  singleNode: null
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  getNodeByID: _NodeActions.getNodeByID,
  getSubtopics: _NodeActions.getSubtopics,
  getSources: _NodeActions.getSources,
  nodeFullClear: _NodeActions.nodeFullClear,
  getUniverse: _UniverseActions.getUniverse,
  clearUniverse: _UniverseActions.clearUniverse,
  clearSources: _NodeActions.clearSources,
  clearSubtopics: _NodeActions.clearSubtopics,
  clearNodes: _NodeActions.clearNodes,
  clearNode: _NodeActions.clearNode,
  deleteNode: _NodeActions.deleteNode
})(Node);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _spinner = "/" + "559144c0218bc96a80bbd151315aeb99.gif";

var _spinner2 = _interopRequireDefault(_spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return (0, _jsx3.default)("div", {}, void 0, (0, _jsx3.default)("img", {
    src: _spinner2.default,
    alt: "Loading...",
    style: { width: "200px", margin: "auto", display: "block" }
  }));
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(11);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  active: { type: Boolean, default: false },
  admin: { type: Boolean, default: false },
  personalUniverse: { type: Schema.Types.ObjectId, ref: "universes" },
  universes: { type: [Schema.Types.ObjectId] },
  dateCreated: { type: Date, default: Date.now, required: true }
});

exports.default = _mongoose2.default.model("User", userSchema);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(11);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var universeSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  // Will be used to define the single public universe that all users can see
  public: {
    type: Boolean,
    default: false
  },
  // List all users that belong to a private Universe
  users: {
    type: [Schema.Types.ObjectId]
  },
  // Hold a list of all nodes that have been shared with this universe
  // Allows for easier queries
  // Not done for all nodes as its easy to query nodes by their primaryUniverse field
  sharedNodes: {
    type: [Schema.Types.ObjectId]
  }
});

exports.default = _mongoose2.default.model("Universe", universeSchema);

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(11);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

// Defines source/subtopic connection between nodes

var connectionSchema = new Schema({
  sourceNode: {
    type: Schema.Types.ObjectId,
    ref: "node"
  },
  // To determine if this connection transcends universes
  // Can limit subtopic/source viewing so not to link to private universe from public
  sourceNodePrivate: {
    type: Boolean,
    default: false
  },
  subtopicNode: {
    type: Schema.Types.ObjectId,
    ref: "node"
  },
  subtopicNodePrivate: {
    type: Boolean,
    default: false
  },
  // Upvote/Downvote ratio of connection
  // Allows ranking of subtopic node in a given context
  value: {
    type: Number,
    default: 0
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "user"
  }
});

exports.default = _mongoose2.default.model("Connection", connectionSchema);

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShowAddPost = undefined;

var _AppActions = __webpack_require__(27);

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localizationData = exports.enabledLanguages = undefined;

var _reactIntl = __webpack_require__(12);

var _intl = __webpack_require__(75);

var _intl2 = _interopRequireDefault(_intl);

var _intlLocalesSupported = __webpack_require__(76);

var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);

__webpack_require__(77);

var _en = __webpack_require__(78);

var _en2 = _interopRequireDefault(_en);

var _en3 = __webpack_require__(79);

var _en4 = _interopRequireDefault(_en3);

__webpack_require__(80);

var _fr = __webpack_require__(81);

var _fr2 = _interopRequireDefault(_fr);

var _fr3 = __webpack_require__(82);

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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SWITCH_LANGUAGE = undefined;

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

exports.switchLanguage = switchLanguage;

var _setup = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export Constants
var SWITCH_LANGUAGE = exports.SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';

function switchLanguage(newLang) {
  return (0, _extends3.default)({
    type: SWITCH_LANGUAGE
  }, _setup.localizationData[newLang]);
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(84);

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
/* 44 */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUserLoading = exports.clearUsers = exports.getAllUsers = exports.CLEAR_USERS = exports.USER_LOADING = exports.GET_ALL_USERS = undefined;

var _apiCaller = __webpack_require__(19);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

var _ErrorActions = __webpack_require__(25);

var _AuthActions = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GET_ALL_USERS = exports.GET_ALL_USERS = "GET_ALL_USERS";
var USER_LOADING = exports.USER_LOADING = "USER_LOADING";
var CLEAR_USERS = exports.CLEAR_USERS = "CLEAR_USERS";

// Get all users
var getAllUsers = exports.getAllUsers = function getAllUsers() {
  return function (dispatch) {
    dispatch(setUserLoading());
    return (0, _apiCaller2.default)("/user/all", "get").then(function (res) {
      return dispatch({ type: GET_ALL_USERS, payload: res });
    }).catch(function (err) {
      return dispatch({ type: _ErrorActions.GET_ERRORS, payload: err });
    });
  };
};

var clearUsers = exports.clearUsers = function clearUsers() {
  return {
    type: CLEAR_USERS
  };
};

var setUserLoading = exports.setUserLoading = function setUserLoading() {
  return {
    type: USER_LOADING
  };
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxDevtools = __webpack_require__(89);

var _reduxDevtoolsLogMonitor = __webpack_require__(90);

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _reduxDevtoolsDockMonitor = __webpack_require__(91);

var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxDevtools.createDevTools)((0, _jsx3.default)(_reduxDevtoolsDockMonitor2.default, {
  toggleVisibilityKey: 'ctrl-h',
  changePositionKey: 'ctrl-w'
}, void 0, (0, _jsx3.default)(_reduxDevtoolsLogMonitor2.default, {})));

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = __webpack_require__(21);

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

var _TextField = __webpack_require__(22);

var _TextField2 = _interopRequireDefault(_TextField);

var _Paper = __webpack_require__(15);

var _Paper2 = _interopRequireDefault(_Paper);

var _core = __webpack_require__(48);

var _Switch = __webpack_require__(49);

var _Switch2 = _interopRequireDefault(_Switch);

var _FormControlLabel = __webpack_require__(50);

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _AuthActions = __webpack_require__(16);

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
/* 48 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = __webpack_require__(21);

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

var _reactIntl = __webpack_require__(12);

var _reactRouter = __webpack_require__(9);

var _TextField = __webpack_require__(22);

var _TextField2 = _interopRequireDefault(_TextField);

var _Paper = __webpack_require__(15);

var _Paper2 = _interopRequireDefault(_Paper);

var _core = __webpack_require__(48);

var _Switch = __webpack_require__(49);

var _Switch2 = _interopRequireDefault(_Switch);

var _FormControlLabel = __webpack_require__(50);

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _AuthActions = __webpack_require__(16);

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
/* 52 */
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

var _NodeForm = __webpack_require__(30);

var _NodeForm2 = _interopRequireDefault(_NodeForm);

var _UniverseRoot = __webpack_require__(32);

var _UniverseRoot2 = _interopRequireDefault(_UniverseRoot);

var _NodeActions = __webpack_require__(10);

var _UniverseActions = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_NodeForm2.default, {});

var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.state = {
      nodeFormToggle: false,
      universe: null,
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
      this.props.getPublicUniverse();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.universe.universe !== null && prevProps.universe.loading) {
        this.setState({ universe: this.props.universe.universe });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.clearNodes();
      this.props.clearUniverse();
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
          universeList = void 0,
          rootNodeList = void 0,
          nodeFormComp = _ref;

      if (this.state.nodeFormToggle) {
        nodeForm = nodeFormComp;
      } else {
        nodeForm = "";
      }

      if (this.state.universe !== null) {
        rootNodeList = (0, _jsx3.default)(_UniverseRoot2.default, {
          universe: this.state.universe,
          onNavigation: this.onNavigation,
          title: "Welcome to Agora!",
          text: "This is a platform to aggregate all information, this is the public Universe which is shared among all users, if you wish to access your own Universe, press '\r\n          'Home' in the Top Navigation Bar"
        });
      }

      return (0, _jsx3.default)("div", {}, void 0, rootNodeList);
    }
  }]);
  return Home;
}(_react.Component);

// Retrieve data from store as props


var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    node: state.node,
    universe: state.universe
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { clearNodes: _NodeActions.clearNodes, clearUniverse: _UniverseActions.clearUniverse, getPublicUniverse: _UniverseActions.getPublicUniverse })(Home);

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),
/* 54 */
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

var _UniverseRoot = __webpack_require__(32);

var _UniverseRoot2 = _interopRequireDefault(_UniverseRoot);

var _NodeActions = __webpack_require__(10);

var _UniverseActions = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)("span", {}, void 0, "Shared Universes: ");

var Personal = function (_Component) {
  (0, _inherits3.default)(Personal, _Component);

  function Personal() {
    (0, _classCallCheck3.default)(this, Personal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Personal.__proto__ || Object.getPrototypeOf(Personal)).call(this));

    _this.state = {
      nodeFormToggle: false,
      universe: null,
      title: "",
      content: "",
      subtopics: [],
      sources: [],
      errors: {}
    };

    _this.nodeFormToggle = _this.nodeFormToggle.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Personal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.auth.isAuthenticated) {
        _reactRouter.browserHistory.push("/login");
      }
      if (this.props.auth.user.personalUniverse) {
        this.props.getUniverse(this.props.auth.user.personalUniverse);
        this.props.getUserUniverses(this.props.auth.user.id);
      } else {
        this.props.createPersonalUniverse(this.props.auth.user.id);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.universe.universe !== null && prevProps.universe.universe === null) {
        this.setState({ universe: this.props.universe.universe });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.clearUniverse();
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
      var content = void 0,
          universeList = [];
      if (this.state.universe !== null) {
        if (this.props.universe.universes !== null) {
          universeList.push(_ref);
          this.props.universe.universes.forEach(function (uni) {
            universeList.push((0, _jsx3.default)("span", {}, void 0, (0, _jsx3.default)(_reactRouter.Link, {
              to: "/universe/" + uni._id
            }, void 0, uni.title), " "));
          });
        }

        content = (0, _jsx3.default)("div", {}, void 0, universeList, (0, _jsx3.default)(_UniverseRoot2.default, {
          universe: this.state.universe
        }));
      } else {
        content = "Loading . . . ";
      }

      return (0, _jsx3.default)("div", {}, void 0, content);
    }
  }]);
  return Personal;
}(_react.Component);

// Retrieve data from store as props


var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    node: state.node,
    universe: state.universe
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  clearNodes: _NodeActions.clearNodes,
  createPersonalUniverse: _UniverseActions.createPersonalUniverse,
  getUniverse: _UniverseActions.getUniverse,
  clearUniverse: _UniverseActions.clearUniverse,
  getUserUniverses: _UniverseActions.getUserUniverses
})(Personal);

/***/ }),
/* 55 */
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

var _UniverseRoot = __webpack_require__(32);

var _UniverseRoot2 = _interopRequireDefault(_UniverseRoot);

var _NodeActions = __webpack_require__(10);

var _UniverseActions = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Universe = function (_Component) {
  (0, _inherits3.default)(Universe, _Component);

  function Universe() {
    (0, _classCallCheck3.default)(this, Universe);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Universe.__proto__ || Object.getPrototypeOf(Universe)).call(this));

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

  (0, _createClass3.default)(Universe, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getUniverse(this.props.routeParams.universeID);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.clearNodes();
      this.props.clearUniverse();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.universe.universe !== null && prevProps.universe.universe === null && !this.props.universe.loading) {
        // Redirect if public Universe
        if (this.props.universe.universe.public) {
          _reactRouter.browserHistory.push("/");
        } else {
          // If not a public universe, and user is not logged in, redirect
          if (!this.props.auth.isAuthenticated) {
            _reactRouter.browserHistory.push("/login");
          }
        }
        // Redirect if this is your personal Universe
        if (this.props.universe.universe._id === this.props.auth.user.personalUniverse) {
          _reactRouter.browserHistory.push("/home");
        }
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
      var content = void 0;
      if (this.props.universe.universe !== null) {
        content = (0, _jsx3.default)(_UniverseRoot2.default, {
          universe: this.props.universe.universe
        });
      } else {
        content = "Loading . . . ";
      }

      return (0, _jsx3.default)("div", {}, void 0, content);
    }
  }]);
  return Universe;
}(_react.Component);

// Retrieve data from store as props


var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    node: state.node,
    universe: state.universe
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  getUniverseRootNodes: _NodeActions.getUniverseRootNodes,
  clearNodes: _NodeActions.clearNodes,
  createPersonalUniverse: _UniverseActions.createPersonalUniverse,
  getUniverse: _UniverseActions.getUniverse,
  clearUniverse: _UniverseActions.clearUniverse
})(Universe);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = __webpack_require__(21);

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

var _TextField = __webpack_require__(22);

var _TextField2 = _interopRequireDefault(_TextField);

var _Paper = __webpack_require__(15);

var _Paper2 = _interopRequireDefault(_Paper);

var _Button = __webpack_require__(17);

var _Button2 = _interopRequireDefault(_Button);

var _SelectMultiple = __webpack_require__(31);

var _SelectMultiple2 = _interopRequireDefault(_SelectMultiple);

var _Spinner = __webpack_require__(34);

var _Spinner2 = _interopRequireDefault(_Spinner);

var _NodeActions = __webpack_require__(10);

var _UniverseActions = __webpack_require__(14);

var _UserActions = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)("h4", {}, void 0, "Add a New Universe");

var _ref2 = (0, _jsx3.default)(_Button2.default, {
  type: "submit",
  color: "primary"
}, void 0, "Submit");

var _ref3 = (0, _jsx3.default)(_Spinner2.default, {});

var _ref4 = (0, _jsx3.default)(_reactHelmet2.default, {
  title: "Admin"
});

var Admin = function (_Component) {
  (0, _inherits3.default)(Admin, _Component);

  function Admin(props) {
    (0, _classCallCheck3.default)(this, Admin);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Admin.__proto__ || Object.getPrototypeOf(Admin)).call(this, props));

    _this.state = {
      title: "",
      users: [],
      usersOptions: null,
      errors: {}
    };

    _this.onDuplicatePress = _this.onDuplicatePress.bind(_this);
    _this.updateConnectionPress = _this.updateConnectionPress.bind(_this);
    _this.createPublicUniverse = _this.createPublicUniverse.bind(_this);
    _this.submitUniverseForm = _this.submitUniverseForm.bind(_this);
    _this.onUserSelect = _this.onUserSelect.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Admin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getAllUsers();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.clearUsers();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.user.users !== null && prevProps.user.users === null) {
        var options = [];
        this.props.user.users.forEach(function (user) {
          options.push({
            label: user.name,
            value: user._id
          });
        });
        this.setState({ usersOptions: options });
      }
    }
  }, {
    key: "submitUniverseForm",
    value: function submitUniverseForm(e) {
      e.preventDefault();
      var data = {
        title: this.state.title,
        users: this.state.users
      };
      this.props.createUniverse(data);
    }
  }, {
    key: "onDuplicatePress",
    value: function onDuplicatePress() {
      this.props.clearDuplicateSourceAndSubtopics();
    }
  }, {
    key: "updateConnectionPress",
    value: function updateConnectionPress() {
      this.props.updateNodeConnections();
    }
  }, {
    key: "createPublicUniverse",
    value: function createPublicUniverse() {
      this.props.createPublicUniverse();
    }
  }, {
    key: "onUserSelect",
    value: function onUserSelect(selection) {
      var users = [];
      for (var i in selection) {
        users[i] = selection[i].value;
      }
      this.setState({ users: users });
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      this.setState((0, _defineProperty3.default)({}, e.target.name, e.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      var universeForm = void 0;
      if (this.state.usersOptions !== null) {
        console.log(this.state.usersOptions);
        universeForm = (0, _jsx3.default)(_Paper2.default, {}, void 0, _ref, (0, _jsx3.default)("form", {
          onSubmit: this.submitUniverseForm
        }, void 0, (0, _jsx3.default)(_TextField2.default, {
          id: "title",
          label: "Title of Universe",
          name: "title",
          onChange: this.onChange,
          value: this.state.title,
          margin: "normal",
          variant: "outlined"
        }), (0, _jsx3.default)(_SelectMultiple2.default, {
          label: "Users",
          placeholder: "Select Users to Join",
          onChange: this.onUserSelect,
          options: this.state.usersOptions
        }), _ref2));
      } else {
        universeForm = _ref3;
      }

      return (0, _jsx3.default)("div", {}, void 0, _ref4, universeForm);
    }
  }]);
  return Admin;
}(_react.Component);

// Retrieve data from store as props


function mapStateToProps(state) {
  return {
    auth: state.auth,
    user: state.user
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  clearDuplicateSourceAndSubtopics: _NodeActions.clearDuplicateSourceAndSubtopics,
  updateNodeConnections: _NodeActions.updateNodeConnections,
  createPublicUniverse: _UniverseActions.createPublicUniverse,
  createUniverse: _UniverseActions.createUniverse,
  getAllUsers: _UserActions.getAllUsers,
  clearUsers: _UserActions.clearUsers
})(Admin);

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(11);

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
/* 58 */
/***/ (function(module, exports) {

module.exports = require("sanitize-html");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (process.env.NODE_ENV === "production") {
  module.exports = __webpack_require__(127);
} else {
  module.exports = __webpack_require__(128);
}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _express = __webpack_require__(18);

var _express2 = _interopRequireDefault(_express);

var _compression = __webpack_require__(63);

var _compression2 = _interopRequireDefault(_compression);

var _mongoose = __webpack_require__(11);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = __webpack_require__(64);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = __webpack_require__(65);

var _path2 = _interopRequireDefault(_path);

var _IntlWrapper = __webpack_require__(66);

var _IntlWrapper2 = _interopRequireDefault(_IntlWrapper);

var _store = __webpack_require__(67);

var _reactRedux = __webpack_require__(3);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(92);

var _reactRouter = __webpack_require__(9);

var _reactHelmet = __webpack_require__(8);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _routes = __webpack_require__(93);

var _routes2 = _interopRequireDefault(_routes);

var _fetchData = __webpack_require__(115);

var _post = __webpack_require__(117);

var _post2 = _interopRequireDefault(_post);

var _user = __webpack_require__(121);

var _user2 = _interopRequireDefault(_user);

var _node = __webpack_require__(129);

var _node2 = _interopRequireDefault(_node);

var _universe = __webpack_require__(135);

var _universe2 = _interopRequireDefault(_universe);

var _dummyData = __webpack_require__(137);

var _dummyData2 = _interopRequireDefault(_dummyData);

var _keys = __webpack_require__(59);

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
  var webpack = __webpack_require__(61);
  // eslint-disable-next-line global-require
  var config = __webpack_require__(138);
  // eslint-disable-next-line global-require
  var webpackDevMiddleware = __webpack_require__(142);
  // eslint-disable-next-line global-require
  var webpackHotMiddleware = __webpack_require__(143);
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
app.use("/api", _universe2.default);

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
/* 63 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 66 */
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

var _reactIntl = __webpack_require__(12);

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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = configureStore;

var _redux = __webpack_require__(39);

var _reduxThunk = __webpack_require__(68);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(69);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DevTools = void 0; /**
                        * Main store function
                        */

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line global-require
  DevTools = __webpack_require__(46).default;
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
/* 68 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(39);

var _AppReducer = __webpack_require__(40);

var _AppReducer2 = _interopRequireDefault(_AppReducer);

var _PostReducer = __webpack_require__(28);

var _PostReducer2 = _interopRequireDefault(_PostReducer);

var _IntlReducer = __webpack_require__(73);

var _IntlReducer2 = _interopRequireDefault(_IntlReducer);

var _AuthReducer = __webpack_require__(83);

var _AuthReducer2 = _interopRequireDefault(_AuthReducer);

var _ErrorReducer = __webpack_require__(85);

var _ErrorReducer2 = _interopRequireDefault(_ErrorReducer);

var _NodeReducer = __webpack_require__(86);

var _NodeReducer2 = _interopRequireDefault(_NodeReducer);

var _UniverseReducer = __webpack_require__(87);

var _UniverseReducer2 = _interopRequireDefault(_UniverseReducer);

var _UserReducer = __webpack_require__(88);

var _UserReducer2 = _interopRequireDefault(_UserReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Combine all reducers into one root reducer


// Import Reducers
exports.default = (0, _redux.combineReducers)({
  app: _AppReducer2.default,
  posts: _PostReducer2.default,
  intl: _IntlReducer2.default,
  auth: _AuthReducer2.default,
  error: _ErrorReducer2.default,
  node: _NodeReducer2.default,
  universe: _UniverseReducer2.default,
  user: _UserReducer2.default
}); /**
     * Root Reducer
     */

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 72 */
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(74);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _setup = __webpack_require__(41);

var _IntlActions = __webpack_require__(42);

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
/* 74 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("intl");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("intl-locales-supported");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("intl/locale-data/jsonp/en");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en");

/***/ }),
/* 79 */
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
/* 80 */
/***/ (function(module, exports) {

module.exports = require("intl/locale-data/jsonp/fr");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/fr");

/***/ }),
/* 82 */
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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _lodash = __webpack_require__(20);

var _lodash2 = _interopRequireDefault(_lodash);

var _AuthActions = __webpack_require__(16);

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
/* 84 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 85 */
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

var _ErrorActions = __webpack_require__(25);

var initialState = {};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _NodeActions = __webpack_require__(10);

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
    case _NodeActions.GET_ALL_PUBLIC_NODES:
      return (0, _extends3.default)({}, state, {
        formNodes: action.payload,
        loading: false
      });
    case _NodeActions.GET_ALL_PRIVATE_NODES:
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
    case _NodeActions.SET_NODE:
      return (0, _extends3.default)({}, state, {
        node: action.payload
      });
    case _NodeActions.CLEAR_NODES:
      return (0, _extends3.default)({}, state, {
        nodes: null
      });
    case _NodeActions.CLEAR_NODE:
      return (0, _extends3.default)({}, state, {
        node: null
      });
    case _NodeActions.CLEAR_SOURCES:
      return (0, _extends3.default)({}, state, {
        sources: null
      });
    case _NodeActions.CLEAR_SUBTOPICS:
      return (0, _extends3.default)({}, state, {
        subtopics: null
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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _UniverseActions = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  universe: null,
  universes: null,
  loading: false
};

var UniverseReducer = function UniverseReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _UniverseActions.GET_UNIVERSE:
      return (0, _extends3.default)({}, state, {
        universe: action.payload,
        loading: false
      });
    case _UniverseActions.GET_UNIVERSES:
      return (0, _extends3.default)({}, state, {
        universes: action.payload,
        loading: false
      });
    case _UniverseActions.UNIVERSE_LOADING:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case _UniverseActions.CLEAR_UNIVERSE:
      return (0, _extends3.default)({}, state, {
        universe: null
      });
    default:
      return state;
  }
};

exports.default = UniverseReducer;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(13);

var _extends3 = _interopRequireDefault(_extends2);

var _UserActions = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  users: null,
  loading: false
};

var UserReducer = function UserReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _UserActions.GET_ALL_USERS:
      return (0, _extends3.default)({}, state, {
        users: action.payload,
        loading: false
      });
    case _UserActions.USER_LOADING:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case _UserActions.CLEAR_USERS:
      return (0, _extends3.default)({}, state, {
        users: null
      });
    default:
      return state;
  }
};

exports.default = UserReducer;

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-log-monitor");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-dock-monitor");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

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

var _reactRouter = __webpack_require__(9);

var _App = __webpack_require__(94);

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
  __webpack_require__(103);
  __webpack_require__(107);
  // Auth Components
  __webpack_require__(47);
  __webpack_require__(51);
  // App Components
  __webpack_require__(52);
  // Node Components
  __webpack_require__(33);
  // Universe Components
  __webpack_require__(54);
  __webpack_require__(55);

  // Admin
  __webpack_require__(56);
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
exports.default = (0, _jsx3.default)(_reactRouter.Route, {
  path: "/",
  component: _App2.default
}, void 0, (0, _jsx3.default)(_reactRouter.IndexRoute, {
  getComponent: function getComponent(nextState, cb) {
    new Promise(function(resolve) { resolve(); }).then((function (require) {
      cb(null, __webpack_require__(52).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), (0, _jsx3.default)(_reactRouter.Route, {
  path: "/login",
  getComponent: function getComponent(nextState, cb) {
    new Promise(function(resolve) { resolve(); }).then((function (require) {
      cb(null, __webpack_require__(47).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), (0, _jsx3.default)(_reactRouter.Route, {
  path: "/signup",
  getComponent: function getComponent(nextState, cb) {
    new Promise(function(resolve) { resolve(); }).then((function (require) {
      cb(null, __webpack_require__(51).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), (0, _jsx3.default)(_reactRouter.Route, {
  path: "/home",
  getComponent: function getComponent(nextState, cb) {
    new Promise(function(resolve) { resolve(); }).then((function (require) {
      cb(null, __webpack_require__(54).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), (0, _jsx3.default)(_reactRouter.Route, {
  path: "/admin",
  getComponent: function getComponent(nextState, cb) {
    new Promise(function(resolve) { resolve(); }).then((function (require) {
      cb(null, __webpack_require__(56).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), (0, _jsx3.default)(_reactRouter.Route, {
  path: "/node/:nodeID",
  getComponent: function getComponent(nextState, cb) {
    new Promise(function(resolve) { resolve(); }).then((function (require) {
      cb(null, __webpack_require__(33).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), (0, _jsx3.default)(_reactRouter.Route, {
  path: "/universe/:universeID",
  getComponent: function getComponent(nextState, cb) {
    new Promise(function(resolve) { resolve(); }).then((function (require) {
      cb(null, __webpack_require__(55).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}));

/***/ }),
/* 94 */
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

var _Header = __webpack_require__(95);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(102);

var _Footer2 = _interopRequireDefault(_Footer);

var _AppActions = __webpack_require__(27);

var _IntlActions = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Actions


// Import Style
var DevTools = void 0;

// Import Components

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line global-require
  DevTools = __webpack_require__(46).default;
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
        title: "Agora",
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
/* 95 */
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

var _styles = __webpack_require__(96);

var _AppBar = __webpack_require__(97);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = __webpack_require__(98);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(99);

var _Typography2 = _interopRequireDefault(_Typography);

var _Button = __webpack_require__(17);

var _Button2 = _interopRequireDefault(_Button);

var _IconButton = __webpack_require__(100);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = __webpack_require__(101);

var _Menu2 = _interopRequireDefault(_Menu);

var _AuthActions = __webpack_require__(16);

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
      var classes = this.props.classes,
          buttons = void 0;


      if (this.props.auth.isAuthenticated) {
        buttons = (0, _jsx3.default)("div", {}, void 0, (0, _jsx3.default)(_Button2.default, {
          color: "inherit"
        }, void 0, (0, _jsx3.default)(_reactRouter.Link, {
          to: "/home",
          style: { textDecoration: "none", color: "white" }
        }, void 0, "Home")), (0, _jsx3.default)(_Button2.default, {
          color: "inherit",
          onClick: this.onLogoutClick.bind(this)
        }, void 0, "Logout"));
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
/* 96 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),
/* 102 */
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

var _reactIntl = __webpack_require__(12);

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
  }, void 0, "\xA9 2019 \xB7 Solitaire \xB7 Alpha 0.1.4"));
}

// Import Images
exports.default = Footer;

/***/ }),
/* 103 */
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

var _PostList = __webpack_require__(104);

var _PostList2 = _interopRequireDefault(_PostList);

var _PostCreateWidget = __webpack_require__(106);

var _PostCreateWidget2 = _interopRequireDefault(_PostCreateWidget);

var _PostActions = __webpack_require__(29);

var _AppActions = __webpack_require__(27);

var _AppReducer = __webpack_require__(40);

var _PostReducer = __webpack_require__(28);

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
/* 104 */
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

var _PostListItem = __webpack_require__(105);

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
/* 105 */
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

var _reactIntl = __webpack_require__(12);

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
/* 106 */
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

var _reactIntl = __webpack_require__(12);

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
/* 107 */
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

var _reactIntl = __webpack_require__(12);

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

var _PostActions = __webpack_require__(29);

var _PostReducer = __webpack_require__(28);

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
/* 108 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),
/* 110 */
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

var _Node = __webpack_require__(33);

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RootNodeList = function (_Component) {
  (0, _inherits3.default)(RootNodeList, _Component);

  function RootNodeList() {
    (0, _classCallCheck3.default)(this, RootNodeList);
    return (0, _possibleConstructorReturn3.default)(this, (RootNodeList.__proto__ || Object.getPrototypeOf(RootNodeList)).apply(this, arguments));
  }

  (0, _createClass3.default)(RootNodeList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var nodeArray = [],
          subtopicToggle = void 0;
      this.props.nodes.length > 1 ? subtopicToggle = false : subtopicToggle = true;
      if (this.props.nodes.length > 0) {
        this.props.nodes.forEach(function (node) {
          nodeArray.push((0, _jsx3.default)("div", {}, node._id, (0, _jsx3.default)(_Node2.default, {
            onNavigation: _this2.props.onNavigation,
            singleNode: node,
            subtopicToggle: subtopicToggle
          })));
        });
      }
      return (0, _jsx3.default)("div", {}, void 0, nodeArray);
    }
  }]);
  return RootNodeList;
}(_react.Component);

// Retrieve data from store as props


var mapStateToProps = function mapStateToProps(state) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {})(RootNodeList);

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = __webpack_require__(21);

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

var _NodeActions = __webpack_require__(10);

var _Spinner = __webpack_require__(34);

var _Spinner2 = _interopRequireDefault(_Spinner);

var _SelectMultiple = __webpack_require__(31);

var _SelectMultiple2 = _interopRequireDefault(_SelectMultiple);

var _Paper = __webpack_require__(15);

var _Paper2 = _interopRequireDefault(_Paper);

var _TextField = __webpack_require__(22);

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = __webpack_require__(17);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)("h4", {}, void 0, "Edit this Node");

var _ref2 = (0, _jsx3.default)("br", {});

var _ref3 = (0, _jsx3.default)(_Button2.default, {
  type: "submit",
  color: "primary"
}, void 0, "Submit");

var _ref4 = (0, _jsx3.default)(_Spinner2.default, {});

var EditNodeForm = function (_Component) {
  (0, _inherits3.default)(EditNodeForm, _Component);

  function EditNodeForm(props) {
    (0, _classCallCheck3.default)(this, EditNodeForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EditNodeForm.__proto__ || Object.getPrototypeOf(EditNodeForm)).call(this, props));

    _this.state = {
      node: _this.props.singleNode,
      title: _this.props.singleNode.title,
      content: _this.props.singleNode.content.string,
      sources: null,
      subtopics: null,
      sourceObjects: null,
      subtopicObjects: null,
      sourceOptions: [],
      subtopicOptions: [],
      errors: {}
    };

    _this.onSubmit = _this.onSubmit.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    _this.onSourceSelect = _this.onSourceSelect.bind(_this);
    _this.onSubtopicSelect = _this.onSubtopicSelect.bind(_this);
    _this.createDefaultSubtopicConnections = _this.createDefaultSubtopicConnections.bind(_this);
    _this.createDefaultSourceConnections = _this.createDefaultSourceConnections.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(EditNodeForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.node.formNodes === null && !this.props.node.loading) {
        if (this.props.private) {
          this.props.getAllPrivateNodesForSelect(this.props.universe.universe._id);
        } else {
          this.props.getAllPublicNodesForSelect();
        }
        if (this.state.node.sourceConnections.length > 0) {
          this.props.getSources(this.state.node._id);
        }
        if (this.state.node.subtopicConnections.length > 0) {
          this.props.getSubtopics(this.state.node._id);
        }
      } else if (this.props.node.formNodes !== null) {
        if (this.state.node.sourceConnections.length > 0) {
          this.props.getSources(this.state.node._id);
        }
        if (this.state.node.subtopicConnections.length > 0) {
          this.props.getSubtopics(this.state.node._id);
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      // Place source and subtopic connections into state
      if (this.props.node.subtopics !== null && this.state.subtopics === null) {
        var subtopics = [];
        this.props.node.subtopics.forEach(function (subtopicObject) {
          subtopics.push(subtopicObject.connection._id);
        });
        this.setState({ subtopics: subtopics, subtopicObjects: this.props.node.subtopics }, function () {
          _this2.createDefaultSubtopicConnections();
        });
        this.props.clearSubtopics();
      }
      if (this.props.node.sources !== null && this.state.sources === null) {
        var sources = [];
        this.props.node.sources.forEach(function (sourceObject) {
          sources.push(sourceObject.connection._id);
        });
        this.setState({ sources: sources, sourceObjects: this.props.node.sources }, function () {
          _this2.createDefaultSourceConnections();
        });
        this.props.clearSources();
      }
    }
  }, {
    key: "createDefaultSubtopicConnections",
    value: function createDefaultSubtopicConnections() {
      var _this3 = this;

      var subtopicOptions = this.state.subtopicOptions;

      for (var i in this.props.node.formNodes) {
        // Find existing subtopic connections
        if (this.state.subtopicObjects) {
          this.state.subtopicObjects.forEach(function (connectionObject) {
            if (connectionObject.subtopic._id.toString() === _this3.props.node.formNodes[i].value) {
              subtopicOptions.push(_this3.props.node.formNodes[i]);
            }
          });
        }
      }
      this.setState({ subtopicOptions: subtopicOptions });
    }
  }, {
    key: "createDefaultSourceConnections",
    value: function createDefaultSourceConnections() {
      var _this4 = this;

      var sourceOptions = this.state.sourceOptions;

      for (var i in this.props.node.formNodes) {
        // Find existing source connections
        if (this.state.sourceObjects) {
          this.state.sourceObjects.forEach(function (connectionObject) {
            if (connectionObject.source._id.toString() === _this4.props.node.formNodes[i].value) {
              sourceOptions.push(_this4.props.node.formNodes[i]);
            }
          });
        }
      }
      this.setState({ sourceOptions: sourceOptions });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      var newData = {
        id: this.state.node._id,
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
      var content = void 0;
      if (this.state.node !== null && this.props.node.formNodes !== null && (this.state.node.sourceConnections && this.state.sourceOptions.length > 0 || this.state.node.sourceConnections.length === 0) && (this.state.node.subtopicConnections && this.state.subtopicOptions.length > 0 || this.state.node.subtopicConnections.length === 0)) {
        var _state = this.state,
            subtopicOptions = _state.subtopicOptions,
            sourceOptions = _state.sourceOptions;


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
        }), _ref2, (0, _jsx3.default)(_TextField2.default, {
          id: "content",
          label: "Description of Idea",
          name: "content",
          onChange: this.onChange,
          value: this.state.content,
          margin: "normal",
          variant: "outlined",
          fullWidth: true,
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
        }), _ref3)));
      } else {
        content = _ref4;
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
    node: state.node,
    universe: state.universe
  };
};

EditNodeForm.defaultProps = {
  private: false
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  editNode: _NodeActions.editNode,
  getAllPublicNodesForSelect: _NodeActions.getAllPublicNodesForSelect,
  getAllPrivateNodesForSelect: _NodeActions.getAllPrivateNodesForSelect,
  getSources: _NodeActions.getSources,
  getSubtopics: _NodeActions.getSubtopics,
  clearSources: _NodeActions.clearSources,
  clearSubtopics: _NodeActions.clearSubtopics
})(EditNodeForm);

/***/ }),
/* 112 */
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

var _reactRedux = __webpack_require__(3);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Share = __webpack_require__(113);

var _Share2 = _interopRequireDefault(_Share);

var _Popover = __webpack_require__(114);

var _Popover2 = _interopRequireDefault(_Popover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShareButton = function (_React$Component) {
  (0, _inherits3.default)(ShareButton, _React$Component);

  function ShareButton() {
    (0, _classCallCheck3.default)(this, ShareButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ShareButton.__proto__ || Object.getPrototypeOf(ShareButton)).call(this));

    _this.copyToClipboard = function (e) {
      var textField = document.createElement("textarea");
      textField.innerText = _this.props.link;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand("copy");
      textField.remove();
      _this.handleClick(e);
    };

    _this.handleClick = function (e) {
      _this.setState({ anchorEl: e.currentTarget });
    };

    _this.handleClose = function () {
      _this.setState({ anchorEl: null });
    };

    _this.state = {
      anchorEl: null
    };

    _this.copyToClipboard = _this.copyToClipboard.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(ShareButton, [{
    key: "render",
    value: function render() {
      var anchorEl = this.state.anchorEl;

      var open = Boolean(anchorEl);

      return (0, _jsx3.default)("div", {}, void 0, /* Logical shortcut for only displaying the 
                                                      button if the copy command exists */
      document.queryCommandSupported("copy") && (0, _jsx3.default)("div", {}, void 0, (0, _jsx3.default)(_Share2.default, {
        onClick: this.copyToClipboard
      })), (0, _jsx3.default)(_Popover2.default, {
        open: open,
        anchorEl: anchorEl,
        onClose: this.handleClose,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        styles: { margin: "1em" }
      }, void 0, "Copied to Clipboard!"));
    }
  }]);
  return ShareButton;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(null, {})(ShareButton);

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Share");

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popover");

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchComponentData = fetchComponentData;

var _promiseUtils = __webpack_require__(116);

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
/* 116 */
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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(18);

var _post = __webpack_require__(118);

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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPosts = getPosts;
exports.addPost = addPost;
exports.getPost = getPost;
exports.deletePost = deletePost;

var _post = __webpack_require__(57);

var _post2 = _interopRequireDefault(_post);

var _cuid = __webpack_require__(119);

var _cuid2 = _interopRequireDefault(_cuid);

var _limax = __webpack_require__(120);

var _limax2 = _interopRequireDefault(_limax);

var _sanitizeHtml = __webpack_require__(58);

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
/* 119 */
/***/ (function(module, exports) {

module.exports = require("cuid");

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = require("limax");

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(18);

var _user = __webpack_require__(122);

var UserController = _interopRequireWildcard(_user);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = new _express.Router();

// Get all Users
router.route("/user/all").get(UserController.getAllUsers);

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
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginUser = exports.addUser = exports.getAllUsers = undefined;

var _regenerator = __webpack_require__(23);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(24);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * Get all users
 * @param req
 * @param res
 * @returns void
 */
var getAllUsers = exports.getAllUsers = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var users, errors;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _user2.default.find();

          case 3:
            users = _context.sent;

            res.json(users);
            _context.next = 13;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);

            console.log(_context.t0);
            errors = {};

            errors.general = _context.t0;
            res.status(500).json(errors);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function getAllUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Save a new User
 * @param req
 * @param res
 * @returns void
 */


var addUser = exports.addUser = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var _validateUserSignupIn, errors, isValid, user, universe, newUser, salt, hash, _errors;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _validateUserSignupIn = (0, _validateUserSignupInputs2.default)(req.body), errors = _validateUserSignupIn.errors, isValid = _validateUserSignupIn.isValid;

            if (isValid) {
              _context2.next = 5;
              break;
            }

            console.log(errors);
            return _context2.abrupt("return", res.status(400).json(errors));

          case 5:
            _context2.next = 7;
            return _user2.default.findOne({ email: req.body.email });

          case 7:
            user = _context2.sent;

            if (!user) {
              _context2.next = 14;
              break;
            }

            errors.email = "Email already exists";
            console.log(errors);
            return _context2.abrupt("return", res.status(400).json(errors));

          case 14:
            universe = new _universe2.default({
              title: req.body.name + "'s Universe"
            });

            // Define new user

            newUser = new _user2.default({
              name: req.body.name,
              email: req.body.email,
              password: req.body.password,
              personalUniverse: universe._id
            });


            universe.users.push(newUser._id);

            // Hash password
            _context2.next = 19;
            return _bcryptjs2.default.genSalt(10);

          case 19:
            salt = _context2.sent;
            _context2.next = 22;
            return _bcryptjs2.default.hash(newUser.password, salt);

          case 22:
            hash = _context2.sent;

            newUser.password = hash;
            _context2.next = 26;
            return newUser.save();

          case 26:
            user = _context2.sent;
            _context2.next = 29;
            return universe.save();

          case 29:

            res.json(user);

          case 30:
            _context2.next = 38;
            break;

          case 32:
            _context2.prev = 32;
            _context2.t0 = _context2["catch"](0);

            console.log(_context2.t0);
            _errors = {};

            _errors.general = _context2.t0;
            res.status(500).json(_errors);

          case 38:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 32]]);
  }));

  return function addUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * Login a User
 * @param req
 * @param res
 * @returns void
 */


var loginUser = exports.loginUser = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var _validateLoginInput, errors, isValid, email, password, user, isMatch, personalUniverse, admin, payload, token, _errors2;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _validateLoginInput = (0, _validateLoginInput3.default)(req.body), errors = _validateLoginInput.errors, isValid = _validateLoginInput.isValid;

            if (isValid) {
              _context3.next = 5;
              break;
            }

            console.log(errors);
            return _context3.abrupt("return", res.status(400).json(errors));

          case 5:
            email = req.body.email;
            password = req.body.password;
            _context3.next = 9;
            return _user2.default.findOne({ email: email });

          case 9:
            user = _context3.sent;

            if (user) {
              _context3.next = 14;
              break;
            }

            errors.email = "User with this email not found";
            console.log(errors);
            return _context3.abrupt("return", res.status(400).json(errors));

          case 14:
            _context3.next = 16;
            return _bcryptjs2.default.compare(password, user.password);

          case 16:
            isMatch = _context3.sent;

            if (!isMatch) {
              _context3.next = 32;
              break;
            }

            personalUniverse = null || user.personalUniverse;
            admin = user.admin || false;
            payload = {
              id: user._id,
              name: user.name,
              admin: admin,
              personalUniverse: personalUniverse
            };
            token = void 0;

            if (!req.body.rememberMe) {
              _context3.next = 28;
              break;
            }

            _context3.next = 25;
            return _jsonwebtoken2.default.sign(payload, _keys2.default.secretOrKey);

          case 25:
            token = _context3.sent;
            _context3.next = 31;
            break;

          case 28:
            _context3.next = 30;
            return _jsonwebtoken2.default.sign(payload, _keys2.default.secretOrKey, {
              expiresIn: 3600 * 24
            });

          case 30:
            token = _context3.sent;

          case 31:

            res.json({ token: "Bearer " + token });

          case 32:
            _context3.next = 40;
            break;

          case 34:
            _context3.prev = 34;
            _context3.t0 = _context3["catch"](0);

            console.log(_context3.t0);
            _errors2 = {};

            _errors2.general = _context3.t0;
            res.status(500).json(_errors2);

          case 40:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 34]]);
  }));

  return function loginUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var _user = __webpack_require__(35);

var _user2 = _interopRequireDefault(_user);

var _universe = __webpack_require__(36);

var _universe2 = _interopRequireDefault(_universe);

var _sanitizeHtml = __webpack_require__(58);

var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

var _bcryptjs = __webpack_require__(123);

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _jsonwebtoken = __webpack_require__(124);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _validateUserSignupInputs = __webpack_require__(125);

var _validateUserSignupInputs2 = _interopRequireDefault(_validateUserSignupInputs);

var _validateLoginInput2 = __webpack_require__(126);

var _validateLoginInput3 = _interopRequireDefault(_validateLoginInput2);

var _keys = __webpack_require__(59);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Validator = __webpack_require__(37);
var _ = __webpack_require__(20);

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
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Validator = __webpack_require__(37);
var _ = __webpack_require__(20);

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
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  mongoURI: process.env.MONGO_URI,
  secretOrKey: process.env.SECRET_OR_KEY,
  accountSid: process.env.ACCOUNT_SID,
  authToken: process.env.AUTH_TOKEN
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  mongoURI: "mongodb://devinMcArthur:chaos1@ds139934.mlab.com:39934/agora-dev",
  secretOrKey: "thisisasecret...shhhhhhhhhh",
  accountSid: "AC310a425b6387ea7744d2a6b3aec1d06c",
  authToken: "d4a0a2a3c483750172672b4c4701e34f"
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(18);

var _node = __webpack_require__(130);

var NodeController = _interopRequireWildcard(_node);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = new _express.Router();

// Get Node by ID
router.route("/node/:nodeID").get(NodeController.getNodeByID);

// Get all root Nodes for a given universe
router.route("/nodes/universe/:id/root").get(NodeController.getUniverseRootNodes);

// Get all Nodes for Forms (returns ID and Title)
router.route("/nodes/form/public/all").get(NodeController.getAllPublicNodesForSelect);

// Get all Nodes for Forms (returns ID and Title)
router.route("/nodes/form/private/:id/all").get(NodeController.getAllPrivateNodesForSelect);

// Delete Node
router.route("/node/:id/delete").get(NodeController.deleteNode);

// Get Node sources
router.route("/node/:id/sources").get(NodeController.getNodeSources);

// Get Node sources
router.route("/node/:id/subtopics").get(NodeController.getNodeSubtopics);

// Create a node
router.route("/node").post(NodeController.createNode);

// Edit a node
router.route("/node/:id/edit").post(NodeController.editNode);

// FOR DEVELOPMENT - Used to make edits to the database

// Remove Duplicate Sources and Subtopics from all Nodes
router.route("/node/remove/duplicates/all").get(NodeController.removeDuplicateSourcesAndSubtopics);

// Replace legacy node connections with connection objects
router.route("/node/connections/update/all").get(NodeController.updateNodeConnections);

// LEGACY ** Remove Duplicate Sources and Subtopics from all Nodes
router.route("/node/remove/duplicates/all/legacy").get(NodeController.legacyRemoveDuplicateSourcesAndSubtopics);

exports.default = router;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNodeConnections = exports.legacyRemoveDuplicateSourcesAndSubtopics = exports.removeDuplicateSourcesAndSubtopics = exports.getAllPrivateNodesForSelect = exports.getAllPublicNodesForSelect = exports.getUniverseRootNodes = exports.getNodeSubtopics = exports.getNodeSources = exports.getNodeByID = exports.deleteNode = exports.editNode = exports.createNode = undefined;

var _regenerator = __webpack_require__(23);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(24);

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
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var _validateNodeInput, isValid, errors, highlightArray, authorArray, nodeContent, node, sourceConnections, i, sourceNodePrivate, connection, subtopicConnections, subtopicNodePrivate, _connection, _node, _sourceConnections, _connection2, _subtopicConnections, _connection3, _errors;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _validateNodeInput = (0, _validateNodeInput3.default)(req.body), isValid = _validateNodeInput.isValid, errors = _validateNodeInput.errors;

            if (isValid) {
              _context.next = 5;
              break;
            }

            console.log(errors);
            return _context.abrupt("return", res.status(400).json(errors));

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
              authorArray: authorArray,
              author: req.body.author
            };

            if (!req.body.private) {
              _context.next = 53;
              break;
            }

            // Private Nodes
            node = new _node3.default({
              title: req.body.title,
              content: nodeContent,
              public: false,
              originUniverse: req.body.universe
            });
            _context.next = 12;
            return node.save();

          case 12:
            node = _context.sent;
            sourceConnections = [];
            _context.t0 = _regenerator2.default.keys(req.body.sources);

          case 15:
            if ((_context.t1 = _context.t0()).done) {
              _context.next = 29;
              break;
            }

            i = _context.t1.value;
            _context.next = 19;
            return _node3.default.findById(req.body.sources[i]).public;

          case 19:
            sourceNodePrivate = !_context.sent;
            connection = new _connection7.default({
              sourceNode: req.body.sources[i],
              sourceNodePrivate: sourceNodePrivate,
              subtopicNode: node._id,
              subtopicNodePrivate: true,
              author: req.body.author
            });
            _context.next = 23;
            return connection.save();

          case 23:
            connection = _context.sent;
            _context.next = 26;
            return _node3.default.findByIdAndUpdate(req.body.sources[i], {
              $push: { subtopicConnections: connection._id }
            });

          case 26:
            sourceConnections.push(connection._id);
            _context.next = 15;
            break;

          case 29:
            subtopicConnections = [];
            _context.t2 = _regenerator2.default.keys(req.body.subtopics);

          case 31:
            if ((_context.t3 = _context.t2()).done) {
              _context.next = 45;
              break;
            }

            i = _context.t3.value;
            _context.next = 35;
            return _node3.default.findById(req.body.subtopics[i]).public;

          case 35:
            subtopicNodePrivate = !_context.sent;
            _connection = new _connection7.default({
              sourceNode: node._id,
              sourceNodePrivate: true,
              subtopicNode: req.body.subtopics[i],
              subtopicNodePrivate: subtopicNodePrivate,
              author: req.body.author
            });
            _context.next = 39;
            return _connection.save();

          case 39:
            _connection = _context.sent;
            _context.next = 42;
            return _node3.default.findByIdAndUpdate(req.body.subtopics[i], {
              $push: { sourceConnections: _connection._id }
            });

          case 42:
            subtopicConnections.push(_connection._id);
            _context.next = 31;
            break;

          case 45:

            node.sourceConnections = sourceConnections;
            node.subtopicConnections = subtopicConnections;
            _context.next = 49;
            return node.save();

          case 49:
            node = _context.sent;


            res.json(node);
            _context.next = 89;
            break;

          case 53:
            // Public Nodes
            _node = new _node3.default({
              title: req.body.title,
              content: nodeContent,
              originUniverse: req.body.universe
            });
            _context.next = 56;
            return _node.save();

          case 56:
            _node = _context.sent;
            _sourceConnections = [];
            _context.t4 = _regenerator2.default.keys(req.body.sources);

          case 59:
            if ((_context.t5 = _context.t4()).done) {
              _context.next = 70;
              break;
            }

            i = _context.t5.value;
            _connection2 = new _connection7.default({
              sourceNode: req.body.sources[i],
              subtopicNode: _node._id,
              author: req.body.author
            });
            _context.next = 64;
            return _connection2.save();

          case 64:
            _connection2 = _context.sent;
            _context.next = 67;
            return _node3.default.findByIdAndUpdate(req.body.sources[i], {
              $push: { subtopicConnections: _connection2._id }
            });

          case 67:
            _sourceConnections.push(_connection2._id);
            _context.next = 59;
            break;

          case 70:
            _subtopicConnections = [];
            _context.t6 = _regenerator2.default.keys(req.body.subtopics);

          case 72:
            if ((_context.t7 = _context.t6()).done) {
              _context.next = 83;
              break;
            }

            i = _context.t7.value;
            _connection3 = new _connection7.default({
              sourceNode: _node._id,
              subtopicNode: req.body.subtopics[i],
              author: req.body.author
            });
            _context.next = 77;
            return _connection3.save();

          case 77:
            _connection3 = _context.sent;
            _context.next = 80;
            return _node3.default.findByIdAndUpdate(req.body.subtopics[i], {
              $push: { sourceConnections: _connection3._id }
            });

          case 80:
            _subtopicConnections.push(_connection3._id);
            _context.next = 72;
            break;

          case 83:

            _node.sourceConnections = _sourceConnections;
            _node.subtopicConnections = _subtopicConnections;
            _context.next = 87;
            return _node.save();

          case 87:
            _node = _context.sent;


            res.json(_node);

          case 89:
            _context.next = 97;
            break;

          case 91:
            _context.prev = 91;
            _context.t8 = _context["catch"](0);

            console.log(_context.t8);
            _errors = {};

            _errors.general = _context.t8;
            res.status(500).json(_errors);

          case 97:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 91]]);
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
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var node, errors;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _node3.default.findById(req.params.id);

          case 3:
            node = _context2.sent;

            node.version++;

            node.title = req.body.title, node.content.string = req.body.content;
            _context2.next = 8;
            return (0, _addSourceConnections.addSourceConnections)(node, req.body);

          case 8:
            node = _context2.sent;
            _context2.next = 11;
            return (0, _addSubtopicConnections.addSubtopicConnections)(node, req.body);

          case 11:
            node = _context2.sent;
            _context2.next = 14;
            return node.save();

          case 14:
            node = _context2.sent;


            res.json(node);
            _context2.next = 24;
            break;

          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](0);

            console.log(_context2.t0);
            errors = {};

            errors.general = _context2.t0;
            res.status(500).json(errors);

          case 24:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 18]]);
  }));

  return function editNode(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * Delete a node through its ID
 * @param req
 * @param res
 * @returns void
 */


var deleteNode = exports.deleteNode = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var node, i, connection, _connection4, errors;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _node3.default.findById(req.params.id);

          case 3:
            node = _context3.sent;

            if (!(node.sourceConnections.length > 0)) {
              _context3.next = 17;
              break;
            }

            i = 0;

          case 6:
            if (!(i < node.sourceConnections.length)) {
              _context3.next = 17;
              break;
            }

            _context3.next = 9;
            return _connection7.default.findById(node.sourceConnections[i]);

          case 9:
            connection = _context3.sent;
            _context3.next = 12;
            return _node3.default.findByIdAndUpdate(connection.sourceNode, {
              $pull: { subtopicConnections: connection._id }
            }, { new: true });

          case 12:
            _context3.next = 14;
            return _connection7.default.findByIdAndRemove(node.sourceConnections[i]);

          case 14:
            i++;
            _context3.next = 6;
            break;

          case 17:
            if (!(node.subtopicConnections.length > 0)) {
              _context3.next = 30;
              break;
            }

            i = 0;

          case 19:
            if (!(i < node.subtopicConnections.length)) {
              _context3.next = 30;
              break;
            }

            _context3.next = 22;
            return _connection7.default.findById(node.subtopicConnections[i]);

          case 22:
            _connection4 = _context3.sent;
            _context3.next = 25;
            return _node3.default.findByIdAndUpdate(_connection4.subtopicNode, {
              $pull: { sourceConnections: _connection4._id }
            }, { new: true });

          case 25:
            _context3.next = 27;
            return _connection7.default.findByIdAndRemove(node.subtopicConnections[i]);

          case 27:
            i++;
            _context3.next = 19;
            break;

          case 30:
            _context3.next = 32;
            return _node3.default.findByIdAndRemove(req.params.id);

          case 32:

            res.end();
            _context3.next = 41;
            break;

          case 35:
            _context3.prev = 35;
            _context3.t0 = _context3["catch"](0);

            console.log(_context3.t0);
            errors = {};

            errors.general = _context3.t0;
            res.status(500).json(errors);

          case 41:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 35]]);
  }));

  return function deleteNode(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * Get a node by its ID
 * @param req
 * @param res
 * @returns void
 */


var getNodeByID = exports.getNodeByID = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
    var node, errors;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _node3.default.findById(req.params.nodeID);

          case 3:
            node = _context4.sent;

            res.json(node);
            _context4.next = 13;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);

            console.log(_context4.t0);
            errors = {};

            errors.general = _context4.t0;
            res.status(500).json(errors);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 7]]);
  }));

  return function getNodeByID(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * Get all sources for a Node
 * @param req
 * @param res
 * @returns void
 */


var getNodeSources = exports.getNodeSources = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
    var node, returnArray, i, connection, sourceNode, errors;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _node3.default.findById(req.params.id);

          case 3:
            node = _context5.sent;
            returnArray = [];

            if (!(node.sourceConnections && node.sourceConnections.length > 0)) {
              _context5.next = 18;
              break;
            }

            i = 0;

          case 7:
            if (!(i < node.sourceConnections.length)) {
              _context5.next = 18;
              break;
            }

            _context5.next = 10;
            return _connection7.default.findById(node.sourceConnections[i]);

          case 10:
            connection = _context5.sent;
            _context5.next = 13;
            return _node3.default.findById(connection.sourceNode);

          case 13:
            sourceNode = _context5.sent;

            returnArray.push({
              connection: connection,
              source: sourceNode
            });

          case 15:
            i++;
            _context5.next = 7;
            break;

          case 18:

            res.json(returnArray);
            _context5.next = 27;
            break;

          case 21:
            _context5.prev = 21;
            _context5.t0 = _context5["catch"](0);

            console.log(_context5.t0);
            errors = {};

            errors.general = _context5.t0;
            res.status(500).json(errors);

          case 27:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this, [[0, 21]]);
  }));

  return function getNodeSources(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * Get all subtopics for a Node
 * @param req
 * @param res
 * @returns void
 */


var getNodeSubtopics = exports.getNodeSubtopics = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
    var node, returnArray, i, connection, subtopicNode, errors;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _node3.default.findById(req.params.id);

          case 3:
            node = _context6.sent;
            returnArray = [];

            if (!(node.subtopicConnections && node.subtopicConnections.length > 0)) {
              _context6.next = 18;
              break;
            }

            i = 0;

          case 7:
            if (!(i < node.subtopicConnections.length)) {
              _context6.next = 18;
              break;
            }

            _context6.next = 10;
            return _connection7.default.findById(node.subtopicConnections[i]);

          case 10:
            connection = _context6.sent;
            _context6.next = 13;
            return _node3.default.findById(connection.subtopicNode);

          case 13:
            subtopicNode = _context6.sent;

            returnArray.push({
              connection: connection,
              subtopic: subtopicNode
            });

          case 15:
            i++;
            _context6.next = 7;
            break;

          case 18:

            res.json(returnArray);
            _context6.next = 27;
            break;

          case 21:
            _context6.prev = 21;
            _context6.t0 = _context6["catch"](0);

            console.log(_context6.t0);
            errors = {};

            errors.general = _context6.t0;
            res.status(500).json(errors);

          case 27:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this, [[0, 21]]);
  }));

  return function getNodeSubtopics(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

/**
 * Get all root nodes of a given universe
 * @param req
 * @param res
 * @returns void
 */


var getUniverseRootNodes = exports.getUniverseRootNodes = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(req, res) {
    var universe, nodes, errors;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _universe2.default.findById(req.params.id);

          case 3:
            universe = _context7.sent;
            _context7.next = 6;
            return _node3.default.find({
              $and: [{
                $or: [{ sourceConnections: { $eq: [] } }, { sourceConnections: { $eq: null } }]
              }, { originUniverse: universe._id }]
            });

          case 6:
            nodes = _context7.sent;

            res.json(nodes);
            _context7.next = 16;
            break;

          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](0);

            console.log(_context7.t0);
            errors = {};

            errors.general = _context7.t0;
            res.status(500).json(errors);

          case 16:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this, [[0, 10]]);
  }));

  return function getUniverseRootNodes(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

/**
 * Get all public Nodes for form
 * @param req
 * @param res
 * @returns void
 */


var getAllPublicNodesForSelect = exports.getAllPublicNodesForSelect = function () {
  var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(req, res) {
    var nodes, nodeArray, errors;
    return _regenerator2.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _node3.default.find({ public: true });

          case 3:
            nodes = _context8.sent;
            nodeArray = [];

            nodes.forEach(function (node) {
              nodeArray.push({
                label: node.title,
                value: node._id
              });
            });
            res.json(nodeArray);
            _context8.next = 15;
            break;

          case 9:
            _context8.prev = 9;
            _context8.t0 = _context8["catch"](0);

            console.log(_context8.t0);
            errors = {};

            errors.general = _context8.t0;
            res.status(500).json(errors);

          case 15:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this, [[0, 9]]);
  }));

  return function getAllPublicNodesForSelect(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

/**
 * Get all private Nodes for form
 * @param req
 * @param res
 * @returns void
 */


var getAllPrivateNodesForSelect = exports.getAllPrivateNodesForSelect = function () {
  var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(req, res) {
    var nodes, nodeArray, errors;
    return _regenerator2.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _node3.default.find({ originUniverse: req.params.id });

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

  return function getAllPrivateNodesForSelect(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

/**
 * Remove legacy duplicate sources and subtopics from all nodes
 * @param req
 * @param res
 * @returns void
 */


var removeDuplicateSourcesAndSubtopics = exports.removeDuplicateSourcesAndSubtopics = function () {
  var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(req, res) {
    var _this = this;

    var nodes, errors;
    return _regenerator2.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return _node3.default.find();

          case 3:
            nodes = _context11.sent;

            nodes.forEach(function () {
              var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(node) {
                var i, connection, connections, j, _connection5, _connections;

                return _regenerator2.default.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        if (!(node.sourceConnections.length > 0)) {
                          _context10.next = 25;
                          break;
                        }

                        i = 0;

                      case 2:
                        if (!(i < node.sourceConnections.length)) {
                          _context10.next = 25;
                          break;
                        }

                        _context10.next = 5;
                        return _connection7.default.findById(node.sourceConnections[i]);

                      case 5:
                        connection = _context10.sent;
                        _context10.next = 8;
                        return _connection7.default.find({
                          sourceNode: connection.sourceNode,
                          subtopicNode: node._id
                        });

                      case 8:
                        connections = _context10.sent;

                        if (!(connections.length > 1)) {
                          _context10.next = 22;
                          break;
                        }

                        j = 1;

                      case 11:
                        if (!(j < connections.length)) {
                          _context10.next = 22;
                          break;
                        }

                        if (!connections[j]) {
                          _context10.next = 19;
                          break;
                        }

                        _context10.next = 15;
                        return _node3.default.findByIdAndUpdate(connections[j].sourceNode, { $pull: { subtopicConnections: connections[j]._id } }, { new: true });

                      case 15:
                        _context10.next = 17;
                        return _node3.default.findByIdAndUpdate(connections[j].subtopicNode, { $pull: { sourceConnections: connections[j]._id } }, { new: true });

                      case 17:
                        _context10.next = 19;
                        return _connection7.default.findByIdAndRemove(connections[j]._id);

                      case 19:
                        j++;
                        _context10.next = 11;
                        break;

                      case 22:
                        i++;
                        _context10.next = 2;
                        break;

                      case 25:
                        if (!(node.subtopicConnections.length > 0)) {
                          _context10.next = 50;
                          break;
                        }

                        i = 0;

                      case 27:
                        if (!(i < node.subtopicConnections.length)) {
                          _context10.next = 50;
                          break;
                        }

                        _context10.next = 30;
                        return _connection7.default.findById(node.subtopicConnections[i]);

                      case 30:
                        _connection5 = _context10.sent;
                        _context10.next = 33;
                        return _connection7.default.find({
                          subtopicNode: _connection5.subtopicNode,
                          sourceNode: node._id
                        });

                      case 33:
                        _connections = _context10.sent;

                        if (!(_connections.length > 1)) {
                          _context10.next = 47;
                          break;
                        }

                        j = 1;

                      case 36:
                        if (!(j < _connections.length)) {
                          _context10.next = 47;
                          break;
                        }

                        if (!_connections[j]) {
                          _context10.next = 44;
                          break;
                        }

                        _context10.next = 40;
                        return _node3.default.findByIdAndUpdate(_connections[j].sourceNode, { $pull: { subtopicConnections: _connections[j]._id } }, { new: true });

                      case 40:
                        _context10.next = 42;
                        return _node3.default.findByIdAndUpdate(_connections[j].subtopicNode, { $pull: { sourceConnections: _connections[j]._id } }, { new: true });

                      case 42:
                        _context10.next = 44;
                        return _connection7.default.findByIdAndRemove(_connections[j]._id);

                      case 44:
                        j++;
                        _context10.next = 36;
                        break;

                      case 47:
                        i++;
                        _context10.next = 27;
                        break;

                      case 50:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, _this);
              }));

              return function (_x21) {
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

  return function removeDuplicateSourcesAndSubtopics(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

/**
 * LEGACY ** Remove legacy duplicate sources and subtopics from all nodes
 * @param req
 * @param res
 * @returns void
 */


var legacyRemoveDuplicateSourcesAndSubtopics = exports.legacyRemoveDuplicateSourcesAndSubtopics = function () {
  var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13(req, res) {
    var _this2 = this;

    var nodes, errors;
    return _regenerator2.default.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _context13.next = 3;
            return _node3.default.find();

          case 3:
            nodes = _context13.sent;

            nodes.forEach(function () {
              var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(node) {
                return _regenerator2.default.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        node.sources = node.sources.filter(function (elem, index, self) {
                          return index == self.indexOf(elem);
                        });
                        node.subtopics = node.subtopics.filter(function (elem, index, self) {
                          return index == self.indexOf(elem);
                        });
                        _context12.next = 4;
                        return node.save();

                      case 4:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, _this2);
              }));

              return function (_x24) {
                return _ref13.apply(this, arguments);
              };
            }());

            console.log("Big success");
            res.end();
            _context13.next = 15;
            break;

          case 9:
            _context13.prev = 9;
            _context13.t0 = _context13["catch"](0);

            console.log(_context13.t0);
            errors = {};

            errors.general = _context13.t0;
            res.status(500).json(errors);

          case 15:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, this, [[0, 9]]);
  }));

  return function legacyRemoveDuplicateSourcesAndSubtopics(_x22, _x23) {
    return _ref12.apply(this, arguments);
  };
}();

/**
 * Replace legacy node connections with connection objects
 * @param req
 * @param res
 * @returns void
 */


var updateNodeConnections = exports.updateNodeConnections = function () {
  var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee17(req, res) {
    var _this3 = this;

    var nodes, author, errors;
    return _regenerator2.default.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.prev = 0;
            _context17.next = 3;
            return _node3.default.find();

          case 3:
            nodes = _context17.sent;
            _context17.next = 6;
            return _user2.default.find({ admin: true });

          case 6:
            author = _context17.sent;

            author = author[0];
            nodes.forEach(function () {
              var _ref15 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee16(node) {
                return _regenerator2.default.wrap(function _callee16$(_context16) {
                  while (1) {
                    switch (_context16.prev = _context16.next) {
                      case 0:
                        if (node.sources.length > 0) {
                          node.sources.forEach(function () {
                            var _ref16 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14(source) {
                              var connection;
                              return _regenerator2.default.wrap(function _callee14$(_context14) {
                                while (1) {
                                  switch (_context14.prev = _context14.next) {
                                    case 0:
                                      connection = new _connection7.default({
                                        sourceNode: source,
                                        subtopicNode: node._id,
                                        author: author._id
                                      });
                                      // Update related node

                                      _context14.next = 3;
                                      return _node3.default.findByIdAndUpdate(source, {
                                        $pull: { subtopics: node._id },
                                        $push: { subtopicConnections: connection._id }
                                      }, { new: true });

                                    case 3:
                                      _context14.next = 5;
                                      return _node3.default.findByIdAndUpdate(node._id, {
                                        $pull: { sources: source },
                                        $push: { sourceConnections: connection._id }
                                      }, { new: true });

                                    case 5:
                                      _context14.next = 7;
                                      return connection.save();

                                    case 7:
                                    case "end":
                                      return _context14.stop();
                                  }
                                }
                              }, _callee14, _this3);
                            }));

                            return function (_x28) {
                              return _ref16.apply(this, arguments);
                            };
                          }());
                        }
                        if (node.subtopics.length > 0) {
                          node.subtopics.forEach(function () {
                            var _ref17 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee15(subtopic) {
                              var connection;
                              return _regenerator2.default.wrap(function _callee15$(_context15) {
                                while (1) {
                                  switch (_context15.prev = _context15.next) {
                                    case 0:
                                      connection = new _connection7.default({
                                        sourceNode: node._id,
                                        subtopicNode: subtopic,
                                        author: author._id
                                      });
                                      // Update related node

                                      _context15.next = 3;
                                      return _node3.default.findByIdAndUpdate(subtopic, {
                                        $pull: { sources: node._id },
                                        $push: { sourceConnections: connection._id }
                                      }, { new: true });

                                    case 3:
                                      _context15.next = 5;
                                      return _node3.default.findByIdAndUpdate(node._id, {
                                        $pull: { subtopics: subtopic },
                                        $push: { subtopicConnections: connection._id }
                                      }, { new: true });

                                    case 5:
                                      _context15.next = 7;
                                      return connection.save();

                                    case 7:
                                    case "end":
                                      return _context15.stop();
                                  }
                                }
                              }, _callee15, _this3);
                            }));

                            return function (_x29) {
                              return _ref17.apply(this, arguments);
                            };
                          }());
                        }

                      case 2:
                      case "end":
                        return _context16.stop();
                    }
                  }
                }, _callee16, _this3);
              }));

              return function (_x27) {
                return _ref15.apply(this, arguments);
              };
            }());

            console.log("Large success");
            res.end();
            _context17.next = 19;
            break;

          case 13:
            _context17.prev = 13;
            _context17.t0 = _context17["catch"](0);

            console.log(_context17.t0);
            errors = {};

            errors.general = _context17.t0;
            res.status(500).json(errors);

          case 19:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17, this, [[0, 13]]);
  }));

  return function updateNodeConnections(_x25, _x26) {
    return _ref14.apply(this, arguments);
  };
}();

var _node2 = __webpack_require__(26);

var _node3 = _interopRequireDefault(_node2);

var _connection6 = __webpack_require__(38);

var _connection7 = _interopRequireDefault(_connection6);

var _user = __webpack_require__(35);

var _user2 = _interopRequireDefault(_user);

var _universe = __webpack_require__(36);

var _universe2 = _interopRequireDefault(_universe);

var _mongodb = __webpack_require__(131);

var _validateNodeInput2 = __webpack_require__(132);

var _validateNodeInput3 = _interopRequireDefault(_validateNodeInput2);

var _addSourceConnections = __webpack_require__(133);

var _addSubtopicConnections = __webpack_require__(134);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Validator = __webpack_require__(37);
var _ = __webpack_require__(20);

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
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(23);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(24);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.addSourceConnections = addSourceConnections;

var _node = __webpack_require__(26);

var _node2 = _interopRequireDefault(_node);

var _connection2 = __webpack_require__(38);

var _connection3 = _interopRequireDefault(_connection2);

var _mongoose = __webpack_require__(11);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _assert = __webpack_require__(60);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addSourceConnections(node, data) {
  var _this = this;

  return new Promise(function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(resolve, reject) {
      var sourceConnections, author, nodeId, oldSourcesConnections, i, sourceConnection, connection, newSourceConnections, _sourceConnection, _connection, errors;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              sourceConnections = data.sources;
              author = data.author;
              nodeId = _mongoose2.default.Types.ObjectId(node._id);

              if (!(sourceConnections && sourceConnections.length > 0)) {
                _context2.next = 41;
                break;
              }

              // Find items that have been removed, remove subtopic relationship from that node
              oldSourcesConnections = node.sourceConnections.filter(function (existingConnection) {
                return !sourceConnections.includes(existingConnection.toString());
              });
              i = 0;

            case 7:
              if (!(i < oldSourcesConnections.length)) {
                _context2.next = 22;
                break;
              }

              sourceConnection = oldSourcesConnections[i];
              _context2.next = 11;
              return _connection3.default.findById(sourceConnection);

            case 11:
              connection = _context2.sent;
              _context2.next = 14;
              return _node2.default.findByIdAndUpdate(nodeId, { $pull: { sourceConnections: connection._id } }, { new: true });

            case 14:
              node = _context2.sent;
              _context2.next = 17;
              return _node2.default.findByIdAndUpdate(connection.sourceNode, { $pull: { subtopicConnections: connection._id } }, { new: true });

            case 17:
              _context2.next = 19;
              return _connection3.default.findByIdAndRemove(sourceConnection);

            case 19:
              i++;
              _context2.next = 7;
              break;

            case 22:
              if (!(sourceConnections.length > 0)) {
                _context2.next = 38;
                break;
              }

              newSourceConnections = sourceConnections.filter(function (newSourceConnection) {
                return !node.sourceConnections.some(function (existingSourceConnection) {
                  return existingSourceConnection.equals(_mongoose2.default.Types.ObjectId(newSourceConnection));
                });
              });
              i = 0;

            case 25:
              if (!(i < newSourceConnections.length)) {
                _context2.next = 38;
                break;
              }

              _sourceConnection = newSourceConnections[i];
              // Create Connection Object

              _connection = new _connection3.default({
                sourceNode: _sourceConnection,
                subtopicNode: nodeId,
                author: author
              });
              // Add Connection to this node (subtopic node)

              _context2.next = 30;
              return _node2.default.findByIdAndUpdate(nodeId, { $push: { sourceConnections: _connection._id } }, { new: true });

            case 30:
              node = _context2.sent;
              _context2.next = 33;
              return _node2.default.findByIdAndUpdate(_sourceConnection, { $push: { subtopicConnections: _connection._id } }, { new: true });

            case 33:
              _context2.next = 35;
              return _connection.save();

            case 35:
              i++;
              _context2.next = 25;
              break;

            case 38:
              resolve(node);
              _context2.next = 44;
              break;

            case 41:
              // Remove from subtopic of related nodes
              node.sources.forEach(function () {
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
              node.sources = [];
              resolve(node);

            case 44:
              _context2.next = 52;
              break;

            case 46:
              _context2.prev = 46;
              _context2.t0 = _context2["catch"](0);

              console.log(_context2.t0);
              errors = {};

              errors.general = _context2.t0;
              reject(errors);

            case 52:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this, [[0, 46]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
}

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(23);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(24);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.addSubtopicConnections = addSubtopicConnections;

var _node = __webpack_require__(26);

var _node2 = _interopRequireDefault(_node);

var _connection2 = __webpack_require__(38);

var _connection3 = _interopRequireDefault(_connection2);

var _mongoose = __webpack_require__(11);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _assert = __webpack_require__(60);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addSubtopicConnections(node, data) {
  var _this = this;

  return new Promise(function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(resolve, reject) {
      var subtopicConnections, author, nodeId, oldSubtopicConnections, i, subtopicConnection, connection, newSubtopicConnections, _subtopicConnection, _connection, errors;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              subtopicConnections = data.subtopics;
              author = data.author;
              nodeId = _mongoose2.default.Types.ObjectId(node._id);

              if (!(subtopicConnections && subtopicConnections.length > 0)) {
                _context2.next = 45;
                break;
              }

              _context2.next = 7;
              return node.subtopicConnections.filter(function (existingConnection) {
                return !subtopicConnections.includes(existingConnection.toString());
              });

            case 7:
              oldSubtopicConnections = _context2.sent;
              i = 0;

            case 9:
              if (!(i < oldSubtopicConnections.length)) {
                _context2.next = 24;
                break;
              }

              subtopicConnection = oldSubtopicConnections[i];
              _context2.next = 13;
              return _connection3.default.findById(subtopicConnection);

            case 13:
              connection = _context2.sent;
              _context2.next = 16;
              return _node2.default.findByIdAndUpdate(nodeId, { $pull: { subtopicConnections: connection._id } }, { new: true });

            case 16:
              node = _context2.sent;
              _context2.next = 19;
              return _node2.default.findByIdAndUpdate(connection.subtopicNode, { $pull: { sourceConnections: connection._id } }, { new: true });

            case 19:
              _context2.next = 21;
              return _connection3.default.findByIdAndRemove(subtopicConnection);

            case 21:
              i++;
              _context2.next = 9;
              break;

            case 24:
              if (!(subtopicConnections.length > 0)) {
                _context2.next = 42;
                break;
              }

              _context2.next = 27;
              return subtopicConnections.filter(function (newSubtopicConnection) {
                return !node.subtopicConnections.some(function (existingSubtopicConnection) {
                  return existingSubtopicConnection.equals(_mongoose2.default.Types.ObjectId(newSubtopicConnection));
                });
              });

            case 27:
              newSubtopicConnections = _context2.sent;
              i = 0;

            case 29:
              if (!(i < newSubtopicConnections.length)) {
                _context2.next = 42;
                break;
              }

              _subtopicConnection = newSubtopicConnections[i];
              // Create Connection Object

              _connection = new _connection3.default({
                sourceNode: nodeId,
                subtopicNode: _subtopicConnection,
                author: author
              });
              _context2.next = 34;
              return _connection.save();

            case 34:
              _context2.next = 36;
              return _node2.default.findByIdAndUpdate(nodeId, { $push: { subtopicConnections: _connection._id } }, { new: true });

            case 36:
              node = _context2.sent;
              _context2.next = 39;
              return _node2.default.findByIdAndUpdate(_subtopicConnection, { $push: { sourceConnections: _connection._id } }, { new: true });

            case 39:
              i++;
              _context2.next = 29;
              break;

            case 42:
              resolve(node);
              _context2.next = 48;
              break;

            case 45:
              // Remove from source of related nodes
              node.subtopics.forEach(function () {
                var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(source) {
                  return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _node2.default.findByIdAndUpdate(source, { $pull: { sources: nodeId } }, { new: true });

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
              node.subtopics = [];
              resolve(node);

            case 48:
              _context2.next = 56;
              break;

            case 50:
              _context2.prev = 50;
              _context2.t0 = _context2["catch"](0);

              console.log(_context2.t0);
              errors = {};

              errors.general = _context2.t0;
              reject(errors);

            case 56:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this, [[0, 50]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(18);

var _universe = __webpack_require__(136);

var UniverseController = _interopRequireWildcard(_universe);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = new _express.Router();

// Create Universe
router.route("/universe").post(UniverseController.createUniverse);

// Get Universe by ID
router.route("/universe/:id").get(UniverseController.getUniverse);

// Get Public Universe
router.route("/universe/public/get").get(UniverseController.getPublicUniverse);

// Create a personal universe for a given user if it doesn't already exist
router.route("/universe/create/personal/:id").get(UniverseController.createPersonalUniverse);

// Get all Universes that a User is apart of, other than the individuals private universe
router.route("/universe/user/:id/fetch/all").get(UniverseController.getUsersUniverses);

// Create a single public Universe and add all nodes to it (should not be used again)
router.route("/universe/create/public").get(UniverseController.createPublicUniverse);

exports.default = router;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPublicUniverse = exports.getUsersUniverses = exports.createPersonalUniverse = exports.getPublicUniverse = exports.getUniverse = exports.createUniverse = undefined;

var _regenerator = __webpack_require__(23);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(24);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * Create universe
 * @param req
 * @param res
 * @returns void
 */
var createUniverse = exports.createUniverse = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var _this = this;

    var universe, errors;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            universe = new _universe2.default({
              title: req.body.title,
              users: req.body.users
            });
            _context2.next = 4;
            return universe.save();

          case 4:

            req.body.users.forEach(function () {
              var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(userID) {
                var user;
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _user2.default.findByIdAndUpdate(userID, { $push: { universes: universe._id } }, { new: true });

                      case 2:
                        user = _context.sent;

                      case 3:
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

            res.json(universe._id);
            _context2.next = 14;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);

            console.log(_context2.t0);
            errors = {};

            errors.general = _context2.t0;
            res.status(500).json(errors);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 8]]);
  }));

  return function createUniverse(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Get universe by ID
 * @param req
 * @param res
 * @returns void
 */


var getUniverse = exports.getUniverse = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var universe, errors;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _universe2.default.findById(req.params.id);

          case 3:
            universe = _context3.sent;


            res.json(universe);
            _context3.next = 13;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);

            console.log(_context3.t0);
            errors = {};

            errors.general = _context3.t0;
            res.status(500).json(errors);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 7]]);
  }));

  return function getUniverse(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * Get public universe
 * @param req
 * @param res
 * @returns void
 */


var getPublicUniverse = exports.getPublicUniverse = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
    var universe, errors;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _universe2.default.findOne({ public: true });

          case 3:
            universe = _context4.sent;


            res.json(universe);
            _context4.next = 13;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);

            console.log(_context4.t0);
            errors = {};

            errors.general = _context4.t0;
            res.status(500).json(errors);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 7]]);
  }));

  return function getPublicUniverse(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * Create a universe and starting node for a given user
 * @param req
 * @param res
 * @returns void
 */


var createPersonalUniverse = exports.createPersonalUniverse = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
    var user, universe, node, errors;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _user2.default.findById(req.params.id);

          case 3:
            user = _context5.sent;

            if (!user.personalUniverse) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt("return", console.log("This user already has a personal universe"));

          case 6:
            universe = new _universe2.default({
              title: user.name + "'s Universe",
              users: new Array(user._id)
            });
            _context5.next = 9;
            return universe.save();

          case 9:
            universe = _context5.sent;

            user.personalUniverse = universe._id;
            _context5.next = 13;
            return user.save();

          case 13:
            user = _context5.sent;
            node = new _node2.default({
              title: user.name,
              author: user._id,
              public: false,
              originUniverse: universe._id
            });
            _context5.next = 17;
            return node.save();

          case 17:

            console.log("Gigantic Success!");

            res.end();
            _context5.next = 27;
            break;

          case 21:
            _context5.prev = 21;
            _context5.t0 = _context5["catch"](0);

            console.log(_context5.t0);
            errors = {};

            errors.general = _context5.t0;
            res.status(500).json(errors);

          case 27:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this, [[0, 21]]);
  }));

  return function createPersonalUniverse(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * Create a universe and starting node for a given user
 * @param req
 * @param res
 * @returns void
 */


var getUsersUniverses = exports.getUsersUniverses = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
    var user, universes, i, errors;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _user2.default.findById(req.params.id);

          case 3:
            user = _context6.sent;
            universes = [];

            if (!user.universes) {
              _context6.next = 16;
              break;
            }

            i = 0;

          case 7:
            if (!(i < user.universes.length)) {
              _context6.next = 16;
              break;
            }

            _context6.t0 = universes;
            _context6.next = 11;
            return _universe2.default.findById(user.universes[i]);

          case 11:
            _context6.t1 = _context6.sent;

            _context6.t0.push.call(_context6.t0, _context6.t1);

          case 13:
            i++;
            _context6.next = 7;
            break;

          case 16:

            res.json(universes);
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

  return function getUsersUniverses(_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}();

/**
 * Create the public universe and add all nodes to it
 * @param req
 * @param res
 * @returns void
 */


var createPublicUniverse = exports.createPublicUniverse = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(req, res) {
    var errors;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            try {
              // let universe = new Universe({
              //   title: "Public",
              //   public: true
              // });
              // await universe.save();

              // let allNodes = await Node.find();
              // for (var i = 0; i < allNodes.length; i++) {
              //   let node = allNodes[i];
              //   node.public = true;
              //   node.originUniverse = universe._id;
              //   await node.save();
              // }

              console.log("Uncomment code in Universe Controller to run this again");

              res.end();
            } catch (e) {
              console.log(e);
              errors = {};

              errors.general = e;
              res.status(500).json(errors);
            }

          case 1:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function createPublicUniverse(_x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}();

var _universe = __webpack_require__(36);

var _universe2 = _interopRequireDefault(_universe);

var _node = __webpack_require__(26);

var _node2 = _interopRequireDefault(_node);

var _user = __webpack_require__(35);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 137 */
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

var _post = __webpack_require__(57);

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var webpack = __webpack_require__(61);
var cssnext = __webpack_require__(139);
var postcssFocus = __webpack_require__(140);
var postcssReporter = __webpack_require__(141);

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
/* 139 */
/***/ (function(module, exports) {

module.exports = require("postcss-cssnext");

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = require("postcss-focus");

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = require("postcss-reporter");

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ })
/******/ ]);