import { axiosHeaderConfig } from "../api";
import { axiosWithToken } from "../axios-with-token";
import axios from "axios";
import { storeBackEndRoutes } from "../store-backend-routes";
import { IRegister, ILogin } from "./auth.interface";

class _AuthService {
  getUser = () => {
    return axiosWithToken.post(
      storeBackEndRoutes.auth.getUser(),
      {},
      {
        ...axiosHeaderConfig(),
      }
    );
  };
  login = (data: ILogin) => {
    return axios.post(storeBackEndRoutes.auth.login(), data);
  };

  recover = (data: { email: string }) => {
    return axios.post(storeBackEndRoutes.auth.recover(), data);
  };

  register = (data: IRegister) => {
    return axios.post(storeBackEndRoutes.auth.register(), {
      ...data,
      password_confirmation: data.password,
    });
  };
  // registerStepTwo = (data) => {
  //   return axiosWithToken.post(
  //     storeBackEndRoutes.auth.registerStepTwo(),
  //     data,
  //     {
  //       ...axiosHeaderConfig(),
  //     }
  //   );
  // };
}

export const AuthService = new _AuthService();
