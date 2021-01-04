import axios from "axios";

const axiosWithToken = axios.create();
// Add a response interceptor

export const setAuthorizationToken = (token: string) => {
  axiosWithToken.defaults.headers.Authorization = `Bearer ${token}`;
};

export { axiosWithToken };
