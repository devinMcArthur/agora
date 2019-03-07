import callApi from "../../util/apiCaller";
import callApiFile from "../../util/apiCallerFile";

import { GET_ERRORS } from "../Error/ErrorActions";

export const GET_NODE = "GET_NODE";
export const GET_NODES = "GET_NODES";
export const GET_ALL_PUBLIC_NODES = "GET_ALL_PUBLIC_NODES";
export const GET_ALL_PRIVATE_NODES = "GET_ALL_PRIVATE_NODES";
export const GET_SOURCES = "GET_SOURCES";
export const GET_SUBTOPICS = "GET_SUBTOPICS";
export const NODE_LOADING = "NODE_LOADING";
export const SET_NODE = "SET_NODE";
export const GET_FILES = "GET_FILES";
export const CLEAR_NODES = "CLEAR_NODES";
export const CLEAR_NODE = "CLEAR_NODE";
export const CLEAR_SOURCES = "CLEAR_SOURCES";
export const CLEAR_SUBTOPICS = "CLEAR_SUBTOPICS";
export const CLEAR_FILES = "CLEAR_FILES";
export const NODE_FULL_CLEAR = "NODE_FULL_CLEAR";

// Create a node
export const createNode = node => dispatch => {
  return callApi("node", "post", node)
    .then(res => dispatch({ type: GET_NODE, payload: res }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

// Edit a node
export const editNode = node => dispatch => {
  return callApi(`node/${node.id}/edit`, "post", node)
    .then(res => dispatch({ type: GET_NODE, payload: res }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

// Get all root nodes for a given universe (no sources)
export const getUniverseRootNodes = id => dispatch => {
  dispatch(setNodeLoading());
  return callApi(`nodes/universe/${id}/root`, "get")
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

// Remove duplicate sources and subtopics from all nodes
export const deleteNode = id => dispatch => {
  return callApi(`node/${id}/delete`, "get")
    .then(res => location.reload())
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

// Upload file to a node
export const uploadNodeFile = (file, id) => dispatch => {
  return callApiFile(`node/${id}/upload/file`, "post", file)
    .then(res => dispatch({ type: GET_NODE, payload: res }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

// Upload image to a node
export const retrieveNodeFiles = id => dispatch => {
  return callApi(`node/${id}/retrieve/files`, "get")
    .then(res => dispatch({ type: GET_FILES, payload: res }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

// Retrieve an ID and Title for all Public Nodes
export const getAllPublicNodesForSelect = () => dispatch => {
  dispatch(setNodeLoading());
  return callApi("/nodes/form/public/all", "get")
    .then(res => dispatch({ type: GET_ALL_PUBLIC_NODES, payload: res }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

// Retrieve an ID and Title for all Private Nodes
export const getAllPrivateNodesForSelect = id => dispatch => {
  dispatch(setNodeLoading());
  return callApi(`/nodes/form/private/${id}/all`, "get")
    .then(res => dispatch({ type: GET_ALL_PRIVATE_NODES, payload: res }))
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

// LEGACY ** Remove duplicate sources and subtopics from all nodes
export const legacyClearDuplicateSourceAndSubtopics = dispatch => {
  return callApi("/node/remove/duplicates/all/legacy", "get")
    .then(res => location.reload())
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

// Remove duplicate sources and subtopics from all nodes
export const clearDuplicateSourceAndSubtopics = dispatch => {
  return callApi("/node/remove/duplicates/all", "get")
    .then(res => location.reload())
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

// Change legacy source and subtopic connections to connection object references
export const updateNodeConnections = dispatch => {
  return callApi("/node/connections/update/all", "get")
    .then(res => location.reload())
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

export const setNode = node => {
  return {
    type: SET_NODE,
    payload: node
  };
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

export const clearSources = () => {
  return {
    type: CLEAR_SOURCES
  };
};

export const clearSubtopics = () => {
  return {
    type: CLEAR_SUBTOPICS
  };
};

export const clearFiles = () => {
  return {
    type: CLEAR_FILES
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
