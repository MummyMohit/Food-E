import { SET_LOGGED_IN, SET_PROFILE, LOGOUT } from './Action';

const initialState = {
  isLoggedIn: false,
  profile: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
