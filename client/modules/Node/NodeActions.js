import callApi from "../../util/apiCaller";
import setAuthToken from "../../util/setAuthToken";

import jwt_decode from "jwt-decode";
import { GET_ERRORS } from "../Error/ErrorActions";

export const GET_NODE = "GET_NODE";
export const GET_NODES = "GET_NODES";
export const GET_ALL_NODES = "GET_ALL_NODES";
export const NODE_LOADING = "NODE_LOADING";

// Create a node
export const createNode = node => dispatch => {
  return callApi("node", "post", node)
    .then(res => location.reload())
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

// Get all root nodes (no sources)
export const getRootNodes = () => dispatch => {
  dispatch(setNodeLoading());
  return callApi("nodes/root", "get")
    .then(res =>
      dispatch({
        type: GET_NODES,
        payload: res
      })
    )
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

// Retrieve Node by ID
export const getNodeByID = id => dispatch => {
  dispatch(setNodeLoading());
  return callApi(`/node/${id}`, "get")
    .then(res =>
      dispatch({
        type: GET_NODE,
        payload: res
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    );
};

// Retrieve an ID and Title for all Nodes
export const getAllNodesForSelect = () => dispatch => {
  dispatch(setNodeLoading());
  return callApi("/nodes/form/all", "get")
    .then(res => dispatch({ type: GET_ALL_NODES, payload: res }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

export const setNodeLoading = () => {
  return {
    type: NODE_LOADING
  };
};