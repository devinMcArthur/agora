import callApi from "../../util/apiCaller";
import setAuthToken from "../../util/setAuthToken";

import jwt_decode from "jwt-decode";
import { GET_ERRORS } from "../Error/ErrorActions";

export const GET_NODE = "GET_NODE";
export const GET_NODES = "GET_NODES";
export const GET_ALL_NODES = "GET_ALL_NODES";
export const GET_SOURCES = "GET_SOURCES";
export const GET_SUBTOPICS = "GET_SUBTOPICS";
export const NODE_LOADING = "NODE_LOADING";
export const CLEAR_NODES = "CLEAR_NODES";
export const CLEAR_NODE = "CLEAR_NODE";
export const NODE_FULL_CLEAR = "NODE_FULL_CLEAR";

// Create a node
export const createNode = node => dispatch => {
  return callApi("node", "post", node)
    .then(res => location.reload())
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

// Edit a node
export const editNode = node => dispatch => {
  return callApi(`node/${node.id}/edit`, "post", node)
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

// Get all source nodes for a given node
export const getSources = id => dispatch => {
  dispatch(setNodeLoading());
  return callApi(`/node/${id}/sources`, "get")
    .then(res => dispatch({ type: GET_SOURCES, payload: res }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

// Get all subtopic nodes for a given node
export const getSubtopics = id => dispatch => {
  dispatch(setNodeLoading());
  return callApi(`/node/${id}/subtopics`, "get")
    .then(res => dispatch({ type: GET_SUBTOPICS, payload: res }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

// Remove duplicate sources and subtopics from all nodes
export const clearDuplicateSourceAndSubtopics = dispatch => {
  return callApi("/node/remove/duplicates/all", "get")
    .then(res => location.reload())
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

export const clearNodes = () => {
  return {
    type: CLEAR_NODES
  };
};

export const clearNode = () => {
  return {
    type: CLEAR_NODE
  };
};

export const setNodeLoading = () => {
  return {
    type: NODE_LOADING
  };
};

export const nodeFullClear = () => {
  return {
    type: NODE_FULL_CLEAR
  };
};
