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

  profitsFiltered = (data: any) => {
    return axios.post(storeBackEndRoutes.user.profitsFiltered(), data, {
      ...axiosHeaderConfig(),
    });
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

  addAditWithdraw = (data: any) => {
    return axios.post(storeBackEndRoutes.user.addAditWithdraw(), data, {
      ...axiosHeaderConfig(),
    });
  };

  getWithdraws = () => {
    return axios.post(
      storeBackEndRoutes.user.getWithdraws(),
      {},
      {
        ...axiosHeaderConfig(),
      }
    );
  };

  deleteWithdraws = (id: any) => {
    return axios.post(
      storeBackEndRoutes.user.deleteWithdraws(id),
      {},
      {
        ...axiosHeaderConfig(),
      }
    );
  };

  withdraw = (data: any) => {
    return axios.post(storeBackEndRoutes.user.withdraw(), data, {
      ...axiosHeaderConfig(),
    });
  };

  notifications = () => {
    return axios.post(
      storeBackEndRoutes.user.notifications(),
      {},
      {
        ...axiosHeaderConfig(),
      }
    );
  };

  qrCode = () => {
    return axios.post(
      storeBackEndRoutes.user.qrCode(),
      {},
      {
        ...axiosHeaderConfig(),
      }
    );
  };

  activateTwoFa = (data: any) => {
    return axios.post(storeBackEndRoutes.user.activateTwoFa(), data, {
      ...axiosHeaderConfig(),
    });
  };

  twoFaLogin = (data: any) => {
    return axios.post(storeBackEndRoutes.user.twoFaLogin(), data, {
      // ...axiosHeaderConfig(),
    });
  };

  // POST /api/v1/private/user/mfa_captcha
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
