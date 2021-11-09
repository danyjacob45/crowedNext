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

  residualBonus = () => {
    return axios.post(
      storeBackEndRoutes.user.residualBonus(),
      { limit: 10000, page: 0 },
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

  getPans = () => {
    return axios.post(
      storeBackEndRoutes.user.getPans(),
      {},
      {
        ...axiosHeaderConfig(),
      }
    );
  };

  // POST /api/v1/open/plan/all

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

  chartData = () => {
    return axios.post(
      storeBackEndRoutes.user.chartData(),
      {},
      {
        // ...axiosHeaderConfig(),
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

  presentations = () => {
    return axios.post(storeBackEndRoutes.user.presentations(), {}, {});
  };

  // POST /api/v1/open/presentations

  transactionsAll = () => {
    return axios.post(
      storeBackEndRoutes.user.transactionsAll(),
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

  withdrawList = () => {
    return axios.post(
      storeBackEndRoutes.user.withdrawList(),
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
  
  sendAmount = (receiverEmail: any, amount: any) => {
    return axios.post(storeBackEndRoutes.user.sendAmount(receiverEmail, amount), {}, {
      ...axiosHeaderConfig(),
    });
  };

  notifications = () => {
    return axios.post(
      storeBackEndRoutes.user.notifications(),
      { limit: 1000, page: 0 },
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

  getFaq = () => {
    return axios.post(
      storeBackEndRoutes.user.getFaq(),
      {},
      {
        ...axiosHeaderConfig(),
      }
    );
  };

  changePass = (data: any) => {
    return axios.post(storeBackEndRoutes.user.changePass(), data, {
      ...axiosHeaderConfig(),
    });
  };

  deleteNotification = (id: any) => {
    return axios.post(
      storeBackEndRoutes.user.deleteNotification(id),
      {},
      {
        ...axiosHeaderConfig(),
      }
    );
  };

  deleteAllNotifications = () => {
    return axios.post(
      storeBackEndRoutes.user.deleteAllNotifications(),
      {},
      {
        ...axiosHeaderConfig(),
      }
    );
  };

  readAllNotifications = () => {
    return axios.post(
      storeBackEndRoutes.user.readAllNotifications(),
      {},
      {
        ...axiosHeaderConfig(),
      }
    );
  };

  teamStatistic = () => {
    return axios.post(
      storeBackEndRoutes.user.teamStatistic(),
      {},
      {
        ...axiosHeaderConfig(),
      }
    );
  };

  // /private/user/statistics
  // POST /api/v1/private/user/password/update

  // POST /api/v1

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
