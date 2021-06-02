import IUser from "./../../shared/models/IUser";
import { AuthActions } from "../actions/actionTypes";
import axios from "axios";

interface IAuthState {
  user: IUser;
  isAuth: boolean;
}

// Initial state for auth
export const authState = {
  user: {} as IUser,
  isAuth: false,
} as IAuthState;

export const AuthReducer = (state = authState, action: any) => {
  switch (action.type) {
    case AuthActions.SIGNUP_SUCCESS:
      return {
        ...state,
        isAuth: true,
      };
    case AuthActions.SIGNUP_FAILURE:
      return {
        ...state,
        isAuth: false,
      };
    case AuthActions.LOGIN_SUCCESS:
      // Store user data in localstorage and token in cookie
      const { user } = action;
      localStorage.setItem("user", JSON.stringify(user));

      return {
        ...state,
        user,
        isAuth: true,
      };
    case AuthActions.LOGIN_FAILURE:
    case AuthActions.LOGOUT:
      // Delete credentials from localstorage and token from cookie
      localStorage.removeItem("user");

      delete axios.defaults.headers.common["X-CSRF-Token"];

      return {
        ...state,
        user: {} as IUser,
        isAuth: false,
      };
    default:
      return state;
  }
};
