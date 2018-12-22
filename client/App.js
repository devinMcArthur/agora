/**
 * Root Component
 */
import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import IntlWrapper from "./modules/Intl/IntlWrapper";

// Import Routes
import routes from "./routes";

// Base stylesheet
require("./main.css");

import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "./modules/Auth/AuthActions";
import setAuthToken from "./util/setAuthToken";

export default function App(props) {
  // Check for token
  if (localStorage.jwToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwToken);
    // Set user and isAuthenticated
    props.store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp && decoded.exp < currentTime) {
      // Logout user
      props.store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = "/login";
    }
  }

  return (
    <Provider store={props.store}>
      <IntlWrapper>
        <Router history={browserHistory}>{routes}</Router>
      </IntlWrapper>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired
};
