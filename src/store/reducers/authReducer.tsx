import * as ACTION_TYPES from "../actions/action_types";

export const authState = {
  user: {},
  isAuth: false,
};

export const AuthReducer = (state = authState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.REGISTRATION_SUCCESS:
      return {
        ...state,
        isAuth: true,
      };
    case ACTION_TYPES.REGISTRATION_FAILURE:
      return {
        ...state,
        isAuth: false,
      };
    case ACTION_TYPES.LOGIN_SUCCESS:
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuth: true,
      };
    case ACTION_TYPES.LOGIN_FAILURE:
    case ACTION_TYPES.LOGOUT:
      localStorage.clear();
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};
