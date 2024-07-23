export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const SET_PROFILE = 'SET_PROFILE';
export const LOGOUT = 'LOGOUT';

export const setLoggedIn = (isLoggedIn) => ({
  type: SET_LOGGED_IN,
  payload: isLoggedIn,
});

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  payload: profile,
});

export const logout = () => ({
  type: LOGOUT,
});
