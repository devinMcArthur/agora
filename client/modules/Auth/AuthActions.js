import callApi from "../../util/apiCaller";
import setAuthToken from "../../util/setAuthToken";

import jwt_decode from "jwt-decode";

export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const GET_ERRORS = "GET_ERRORS";

// Register a User
export const registerUser = (user, history) => dispatch => {
  return callApi("users", "post", user).then(res => history.push("/login"));
};

export const loginUser = userData => dispatch => {
  return callApi("user/login", "post", userData)
    .then(res => {
      const { token } = res;
      localStorage.setItem("jwToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      location.reload();
    })
    .catch(err => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  location.reload();
};
