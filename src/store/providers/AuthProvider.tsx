import { createContext, useEffect, useReducer } from "react";
import { mockUser } from "../../shared/mock/MockUser";
import * as ACTIONS from "../actions/authActions";
import { AuthReducer } from "../reducers/authReducer";
import { authState } from "./../reducers/authReducer";
import IFormInput from "../../shared/models/IAuth";
import useAxios from "../../shared/hooks/useAxios";
import IUser from "../../shared/models/IUser";

export const AuthContext = createContext({
  authState: authState,
  handleSignup: () => {},
  handleLogin: (data: IFormInput) => {},
  handleLogout: () => {},
  setUser: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, authState);
  const { data, loading } = useAxios("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user !== undefined && user !== null) {
      console.log(user);
      // Use jwt token and decode here
      // const user = JSON.parse(localStorage.getItem("user") as string);
      // console.log(user);
      // dispatch(ACTIONS.setUser(user));
    }
  }, []);

  const handleSignup = (): void => {
    dispatch(ACTIONS.signup_success());
  };

  const handleLogin = (data: IFormInput): void => {
    // Call login endpoint and validate status code/response
    // If success, dispatch login_success
    // Else dispatch login failure (logout)

    dispatch(ACTIONS.login_success(mockUser));
  };

  const handleLogout = (): void => {
    dispatch(ACTIONS.logout());
  };

  const setUser = (): void => {};

  return (
    <AuthContext.Provider
      value={{
        authState: state,
        handleSignup: () => handleSignup(),
        handleLogin: (data: IFormInput) => handleLogin(data),
        handleLogout: () => handleLogout(),
        setUser: () => setUser(),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
