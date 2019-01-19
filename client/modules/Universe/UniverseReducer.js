import {
  GET_UNIVERSE,
  GET_UNIVERSES,
  CLEAR_UNIVERSE,
  UNIVERSE_LOADING
} from "./UniverseActions";

const initialState = {
  universe: null,
  universes: null,
  loading: false
};

const UniverseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_UNIVERSE:
      return {
        ...state,
        universe: action.payload,
        loading: false
      };
    case GET_UNIVERSES:
      return {
        ...state,
        universes: action.payload,
        loading: false
      };
    case UNIVERSE_LOADING:
      return {
        ...state,
        loading: true
      };
    case CLEAR_UNIVERSE:
      return {
        ...state,
        universe: null
      };
    default:
      return state;
  }
};

export default UniverseReducer;
