import IUser from "./../../models/IUser";
import { AuthActions } from "../actions/actionTypes";

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
      return {
        ...state,
        user: action.user,
        isAuth: true,
      };
    case AuthActions.LOGIN_FAILURE:
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: {} as IUser,
        isAuth: false,
      };
    default:
      return state;
  }
};
