import IUser from "../../shared/models/IUser";
import { AuthActions } from "./actionTypes";

export type AuthAction =
  | { type: "SIGNUP_SUCCESS" }
  | { type: "SIGNUP_FAILURE" }
  | { type: "LOGIN_SUCCESS" }
  | { type: "LOGIN_FAILURE" }
  | { type: "SET_USER" };

export const signup_success = () => {
  return {
    type: AuthActions.SIGNUP_SUCCESS,
  };
};

export const signup_failure = () => {
  return {
    type: AuthActions.SIGNUP_FAILURE,
  };
};

export const login_success = (data: any) => {
  return {
    type: AuthActions.LOGIN_SUCCESS,
    user: data.user,
    token: data.token,
  };
};

export const login_failure = () => {
  return {
    type: AuthActions.LOGIN_FAILURE,
  };
};

export const logout = () => {
  return {
    type: AuthActions.LOGOUT,
  };
};

export const setUser = (user: IUser) => {
  return {
    type: AuthActions.SET_USER,
    user,
  };
};
