import * as ACTION_TYPES from "./action_types";

export const registration_success = () => {
  return {
    type: ACTION_TYPES.REGISTRATION_SUCCESS,
  };
};

export const registration_failure = () => {
  return {
    type: ACTION_TYPES.REGISTRATION_FAILURE,
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
