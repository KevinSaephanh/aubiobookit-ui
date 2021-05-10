import { createContext, useReducer } from "react";
import * as ACTIONS from "../actions/actions";
import { AuthReducer, authState } from "../reducers/authReducer";

export const AuthContext = createContext({
  authState: authState,
  handleSignup: () => {},
  handleLogin: () => {},
  handleLogout: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, authState);

  const handleSignup = (): void => {
    dispatch(ACTIONS.signup_success());
  };

  const handleLogin = (): void => {
    dispatch(ACTIONS.login_success());
  };

  const handleLogout = (): void => {
    dispatch(ACTIONS.logout());
  };

  return (
    <AuthContext.Provider
      value={{
        authState: state,
        handleSignup: () => handleSignup(),
        handleLogin: () => handleLogin(),
        handleLogout: () => handleLogout(),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
