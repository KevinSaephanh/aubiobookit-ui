import { createContext, useReducer } from "react";
import { ILogin } from "../../models/IAuth";
import * as ACTIONS from "../actions/authActions";
import { AuthReducer } from "../reducers/authReducer";
import { authState } from "./../reducers/authReducer";

export const AuthContext = createContext({
  authState: authState,
  handleSignup: () => {},
  handleLogin: (data: ILogin) => {},
  handleLogout: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, authState);

  const handleSignup = (): void => {
    dispatch(ACTIONS.signup_success());
  };

  const handleLogin = (data: ILogin): void => {
    console.log("DATA: " + JSON.stringify(data));
    dispatch(ACTIONS.login_success(data));
  };

  const handleLogout = (): void => {
    dispatch(ACTIONS.logout());
  };

  return (
    <AuthContext.Provider
      value={{
        authState: state,
        handleSignup: () => handleSignup(),
        handleLogin: (data: ILogin) => handleLogin(data),
        handleLogout: () => handleLogout(),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
