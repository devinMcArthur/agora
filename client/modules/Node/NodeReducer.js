import {
  GET_NODES,
  GET_NODE,
  GET_ALL_NODES,
  GET_SOURCES,
  GET_SUBTOPICS,
  NODE_LOADING,
  SET_NODE,
  CLEAR_NODES,
  CLEAR_NODE,
  CLEAR_SOURCES,
  CLEAR_SUBTOPICS,
  NODE_FULL_CLEAR
} from "./NodeActions";

const initialState = {
  node: null,
  nodes: null,
  // formNodes: nodes used within select forms (an array of objects {label: , value: })
  formNodes: null,
  subtopics: null,
  sources: null,
  loading: false
};

const NodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NODE:
      return {
        ...state,
        node: action.payload,
        loading: false
      };
    case GET_NODES:
      return {
        ...state,
        nodes: action.payload,
        loading: false
      };
    case GET_ALL_NODES:
      return {
        ...state,
        formNodes: action.payload,
        loading: false
      };
    case GET_SOURCES:
      return {
        ...state,
        sources: action.payload,
        loading: false
      };
    case GET_SUBTOPICS:
      return {
        ...state,
        subtopics: action.payload,
        loading: false
      };
    case NODE_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_NODE:
      return {
        ...state,
        node: action.payload
      };
    case CLEAR_NODES:
      return {
        ...state,
        nodes: null
      };
    case CLEAR_NODE:
      return {
        ...state,
        node: null
      };
    case CLEAR_SOURCES:
      return {
        ...state,
        sources: null
      };
    case CLEAR_SUBTOPICS:
      return {
        ...state,
        subtopics: null
      };
    case NODE_FULL_CLEAR:
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

export default NodeReducer;
