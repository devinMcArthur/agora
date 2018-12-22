import _ from "lodash";

import { SET_CURRENT_USER } from "./AuthActions";

const initialState = {
  isAuthenticated: false,
  user: {}
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !_.isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
};

export default AuthReducer;
