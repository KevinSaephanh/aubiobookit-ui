import { createContext, useReducer } from "react";
import { mockUser } from "../../shared/mock/MockUser";
import * as ACTIONS from "../actions/authActions";
import { AuthReducer } from "../reducers/authReducer";
import { authState } from "./../reducers/authReducer";
import IFormInput from "../../shared/models/IAuth";
import useAxios from "../../shared/hooks/useAxios";

export const AuthContext = createContext({
  authState: authState,
  handleSignup: () => {},
  handleLogin: (data: IFormInput) => {},
  handleLogout: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, authState);
  const { data, loading } = useAxios("");

  const handleSignup = (): void => {
    dispatch(ACTIONS.signup_success());
  };

  const handleLogin = (data: IFormInput): void => {
    // Call login endpoint and validate status code/response
    // If success, dispatch login_success
    // Else dispatch login failure (logout)

    // dummyData
    const res = {
      user: mockUser,
    };
    console.log(res);
    dispatch(ACTIONS.login_success(res));
  };

  const handleLogout = (): void => {
    dispatch(ACTIONS.logout());
  };

  return (
    <AuthContext.Provider
      value={{
        authState: state,
        handleSignup: () => handleSignup(),
        handleLogin: (data: IFormInput) => handleLogin(data),
        handleLogout: () => handleLogout(),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
