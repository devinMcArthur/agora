import {
  GET_NODES,
  GET_NODE,
  NODE_LOADING,
  GET_ALL_NODES
} from "./NodeActions";

const initialState = {
  node: null,
  nodes: null,
  formNodes: null,
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
    case NODE_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default NodeReducer;
