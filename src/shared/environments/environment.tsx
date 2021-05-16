export const getBaseUrl = () => {
  if (process.env.NODE_ENV === "development") return "http://localhost:8080";
  if (process.env.NODE_ENV === "production") return "https://";
};

export enum AuthEndpoints {
  Register = "",
  Login = "",
  GetUser = "",
}

export enum BookEndpoints {}
