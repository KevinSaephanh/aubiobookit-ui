import IUser from "./../../shared/models/IUser";
import { AuthActions } from "../actions/actionTypes";
import IProfile from "../../shared/models/IProfile";
import axios from "axios";

interface IAuthState {
  user: IUser;
  profile: IProfile;
  isAuth: boolean;
}

// Initial state for auth
export const authState = {
  user: {} as IUser,
  profile: {} as IProfile,
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
      localStorage.setItem("username", action.user.username);
      localStorage.setItem("uid", action.user.id);
      localStorage.setItem("pic", action.profile.pic);

      return {
        ...state,
        user: action.user,
        profile: action.profile,
        isAuth: true,
      };
    case AuthActions.LOGIN_FAILURE:
    case AuthActions.LOGOUT:
      // Delete credentials from localstorage and token from cookie
      localStorage.removeItem("username");
      localStorage.removeItem("uid");
      localStorage.removeItem("pic");

      delete axios.defaults.headers.common["X-CSRF-Token"];

      return {
        ...state,
        user: {} as IUser,
        profile: {} as IProfile,
        isAuth: false,
      };
    default:
      return state;
  }
};
