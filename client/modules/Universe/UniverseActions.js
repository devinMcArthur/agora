import callApi from "../../util/apiCaller";

import { GET_ERRORS } from "../Error/ErrorActions";
import { setCurrentUser } from "../Auth/AuthActions";

export const GET_UNIVERSE = "GET_UNIVERSE";
export const GET_UNIVERSES = "GET_UNIVERSES";
export const UNIVERSE_LOADING = "UNIVERSE_LOADING";
export const CLEAR_UNIVERSE = "CLEAR_UNIVERSE";

// Create Universe
export const createUniverse = universe => dispatch => {
  return callApi(`/universe`, "post", universe)
    .then(res => window.location.replace(`/universe/${res}`))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

// Get universe by id
export const getUniverse = id => dispatch => {
  dispatch(setUniverseLoading());
  return callApi(`/universe/${id}`, "get")
    .then(res => dispatch({ type: GET_UNIVERSE, payload: res }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

// Get public universe
export const getPublicUniverse = () => dispatch => {
  dispatch(setUniverseLoading());
  return callApi(`/universe/public/get`, "get")
    .then(res => dispatch({ type: GET_UNIVERSE, payload: res }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

// Create a personal universe for a given user that does not already have one
export const createPersonalUniverse = id => dispatch => {
  return callApi(`/universe/create/personal/${id}`, "get")
    .then(res => {
      dispatch(setCurrentUser());
      location.reload();
    })
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

export const getUserUniverses = id => dispatch => {
  dispatch(setUniverseLoading());
  return callApi(`/universe/user/${id}/fetch/all`)
    .then(res => dispatch({ type: GET_UNIVERSES, payload: res }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

// Change legacy source and subtopic connections to connection object references
export const createPublicUniverse = dispatch => {
  return callApi("/universe/create/public", "get")
    .then(res => location.reload())
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

export const clearUniverse = () => {
  return {
    type: CLEAR_UNIVERSE
  };
};

export const setUniverseLoading = () => {
  return {
    type: UNIVERSE_LOADING
  };
};
