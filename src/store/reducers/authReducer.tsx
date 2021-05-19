import IUser from "./../../shared/models/IUser";
import { AuthActions } from "../actions/actionTypes";
import IProfile from "../../shared/models/IProfile";

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
      return {
        ...state,
        user: action.user,
        profile: action.profile,
        isAuth: true,
      };
    case AuthActions.LOGIN_FAILURE:
    case AuthActions.LOGOUT:
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
