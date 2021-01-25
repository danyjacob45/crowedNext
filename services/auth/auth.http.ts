import { axiosHeaderConfig } from "../api";
import { axiosWithToken } from "../axios-with-token";
import axios from "axios";
import { storeBackEndRoutes } from "../store-backend-routes";

class _AuthService {
  getUser = () => {
    return axiosWithToken.get(storeBackEndRoutes.auth.getUser(), {
      ...axiosHeaderConfig(),
    });
  };
  login = (data: any) => {
    return axios.post(storeBackEndRoutes.auth.login(), data);
  };
  logout = () => {
    return axiosWithToken.post(
      storeBackEndRoutes.auth.logout(),
      axiosHeaderConfig()
    );
  };
  register = (data: { email: string; password: string }) => {
    return axios.post(storeBackEndRoutes.auth.register(), {
      ...data,
      password_confirmation: data.password,
    });
  };
  registerStepTwo = (data) => {
    return axiosWithToken.post(
      storeBackEndRoutes.auth.registerStepTwo(),
      data,
      {
        ...axiosHeaderConfig(),
      }
    );
  };
}

export const AuthService = new _AuthService();
