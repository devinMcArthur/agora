import callApi from "../../util/apiCaller";

import { GET_ERRORS } from "../Error/ErrorActions";
import { setCurrentUser } from "../Auth/AuthActions";

export const GET_ALL_USERS = "GET_ALL_USERS";
export const USER_LOADING = "USER_LOADING";
export const CLEAR_USERS = "CLEAR_USERS";

// Get all users
export const getAllUsers = () => dispatch => {
  dispatch(setUserLoading());
  return callApi(`/user/all`, "get")
    .then(res => dispatch({ type: GET_ALL_USERS, payload: res }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

export const clearUsers = () => {
  return {
    type: CLEAR_USERS
  };
};

export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
