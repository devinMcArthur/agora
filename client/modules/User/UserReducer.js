import { GET_ALL_USERS, CLEAR_USERS, USER_LOADING } from "./UserActions";

const initialState = {
  users: null,
  loading: false
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: null
      };
    default:
      return state;
  }
};

export default UserReducer;
