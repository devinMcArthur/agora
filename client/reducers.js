/**
 * Root Reducer
 */
import { combineReducers } from "redux";

// Import Reducers
import app from "./modules/App/AppReducer";
import posts from "./modules/Post/PostReducer";
import intl from "./modules/Intl/IntlReducer";
import auth from "./modules/Auth/AuthReducer";
import error from "./modules/Error/ErrorReducer";
import node from "./modules/Node/NodeReducer";
import universe from "./modules/Universe/UniverseReducer";

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  intl,
  auth,
  error,
  node,
  universe
});
