import { axiosHeaderConfig } from "../api";
import { axiosWithToken } from "../axios-with-token";
import axios from "axios";
import { storeBackEndRoutes } from "../store-backend-routes";

class _UserService {
  uploadImg = (data: any) => {
    return axios.post(storeBackEndRoutes.user.uploadImage(), data, {
      ...axiosHeaderConfig(),
    });
  };

  updateProfile = (data: any) => {
    return axios.post(storeBackEndRoutes.user.updateProfile(), data, {
      ...axiosHeaderConfig(),
    });
  };

  calcInvestment = (data: any) => {
    return axios.post(storeBackEndRoutes.user.calcInvestment(), data, {
      ...axiosHeaderConfig(),
    });
  };

  investment = (data: any) => {
    return axios.post(storeBackEndRoutes.user.investment(), data, {
      ...axiosHeaderConfig(),
    });
  };

  getEthAddress = (data: any) => {
    return axios.post(storeBackEndRoutes.user.getEthAddress(), data, {
      ...axiosHeaderConfig(),
    });
  };

  getTeam = () => {
    return axios.post(
      storeBackEndRoutes.user.getTeam(),
      {},
      {
        ...axiosHeaderConfig(),
      }
    );
  };

  transactionCheck = (id: any) => {
    return axios.post(
      storeBackEndRoutes.user.transactionCheck(id),
      {},
      {
        ...axiosHeaderConfig(),
      }
    );
  };

  profits = () => {
    return axios.post(
      storeBackEndRoutes.user.profits(),
      {},
      {
        ...axiosHeaderConfig(),
      }
    );
  };

  transactions = () => {
    return axios.post(
      storeBackEndRoutes.user.transactions(),
      {},
      {
        ...axiosHeaderConfig(),
      }
    );
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

export const AuthService = new _UserService();
