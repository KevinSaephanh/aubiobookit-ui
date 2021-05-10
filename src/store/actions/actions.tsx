import * as ACTION_TYPES from "./action_types";

export const signup_success = () => {
  return {
    type: ACTION_TYPES.SIGNUP_SUCCESS,
  };
};

export const signup_failure = () => {
  return {
    type: ACTION_TYPES.SIGNUP_FAILURE,
  };
};

export const login_success = () => {
  return {
    type: ACTION_TYPES.LOGIN_SUCCESS,
  };
};

export const login_failure = () => {
  return {
    type: ACTION_TYPES.LOGIN_FAILURE,
  };
};

export const logout = () => {
  return {
    type: ACTION_TYPES.LOGOUT,
  };
};
