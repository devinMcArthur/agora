/* eslint-disable global-require */
import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./modules/App/App";

// require.ensure polyfill for node
if (typeof require.ensure !== "function") {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== "production") {
  // Require async routes only in development for react-hot-reloader to work.
  require("./modules/Post/pages/PostListPage/PostListPage");
  require("./modules/Post/pages/PostDetailPage/PostDetailPage");
  // Auth Components
  require("./modules/Auth/pages/LoginPage");
  require("./modules/Auth/pages/SignupPage");
  // App Components
  require("./modules/App/components/Homepage/Home");
  // Node Components
  require("./modules/Node/components/Node");
  // Universe Components
  require("./modules/Universe/pages/Personal");
  require("./modules/Universe/pages/Universe");

  // Admin
  require("./modules/App/components/Admin/Admin");
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require("./modules/App/components/Homepage/Home").default);
        });
      }}
    />
    {/* <Route
      path="/posts/:slug-:cuid"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(
            null,
            require("./modules/Post/pages/PostDetailPage/PostDetailPage")
              .default
          );
        });
      }}
    /> */}
    <Route
      path="/login"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require("./modules/Auth/pages/LoginPage").default);
        });
      }}
    />
    <Route
      path="/signup"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require("./modules/Auth/pages/SignupPage").default);
        });
      }}
    />
    <Route
      path="/home"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require("./modules/Universe/pages/Personal").default);
        });
      }}
    />
    <Route
      path="/admin"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require("./modules/App/components/Admin/Admin").default);
        });
      }}
    />
    <Route
      path="/node/:nodeID"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require("./modules/Node/components/Node").default);
        });
      }}
    />
    <Route
      path="/universe/:universeID"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require("./modules/Universe/pages/Universe").default);
        });
      }}
    />
  </Route>
);
