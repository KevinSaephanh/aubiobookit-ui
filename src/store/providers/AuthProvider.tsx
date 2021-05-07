import { createContext, useReducer } from "react";
import * as ACTIONS from "../actions/actions";
import { AuthReducer, authState } from "../reducers/authReducer";

const AuthContext = createContext({} as any);

const AuthProvider = ({ children }: any) => {
  const [authReducer, dispatchAuthReducer] = useReducer(AuthReducer, authState);

  const handleRegistration = (): void => {
    dispatchAuthReducer(ACTIONS.registration_success());
  };

  const handleLogin = (): void => {
    dispatchAuthReducer(ACTIONS.login_success());
  };

  const handleLogout = (): void => {
    dispatchAuthReducer(ACTIONS.logout());
  };

  return (
    <AuthContext.Provider
      value={{
        authState: authReducer,
        handleUserRegistration: () => handleRegistration(),
        handleUserLogin: () => handleLogin(),
        handleUserLogout: () => handleLogout(),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
