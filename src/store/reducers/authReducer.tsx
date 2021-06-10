import IUser from "./../../shared/models/IUser";
import { AuthActions } from "../actions/actionTypes";
import axios from "axios";

interface IAuthState {
  user: IUser;
  token: string;
}

// Initial state for auth
export const authState = {
  user: {} as IUser,
  token: "",
} as IAuthState;

export const AuthReducer = (state = authState, action: any) => {
  switch (action.type) {
    case AuthActions.SIGNUP_SUCCESS:
    case AuthActions.SIGNUP_FAILURE:
      return state;
    case AuthActions.LOGIN_SUCCESS:
      // Store user data in localstorage and token in cookie
      const { user, token } = action;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      return {
        ...state,
        user,
        token,
      };
    case AuthActions.LOGIN_FAILURE:
    case AuthActions.LOGOUT:
      // Delete credentials from localstorage and token from cookie
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["X-CSRF-Token"];

      return {
        ...state,
        user: null,
        token: null,
      };
    case AuthActions.SET_USER:
      return {
        ...state,
        user: action.user,
        token: "",
      };
    default:
      return state;
  }
};
