import { BASE_URL } from "./api";

export const storeBackEndRoutes = {
  auth: {
    getUser: () => `${BASE_URL}/private/user/me`,

    recover: () => `${BASE_URL}/open/auth/recover`,

    login: () => `${BASE_URL}/open/auth/token`,

    register: () => `${BASE_URL}/open/auth/sign-up`,
  },

  user: {
    uploadImage: () => `${BASE_URL}/private/user/picture/update`,
    verifyEmail: () => `${BASE_URL}/private/verify/email`,
    updateProfile: () => `${BASE_URL}/private/user/update`,
    calcInvestment: () => `${BASE_URL}/private/plans/calculate`,
    investment: () => `${BASE_URL}/private/plans/buy`,
    getEthAddress: () => `${BASE_URL}/private/user/deposit`,
    getTeam: () => `${BASE_URL}/private/user/team`,
    transactionCheck: (id: any) => `${BASE_URL}/private/user/deposit/${id}`,
    profits: () => `${BASE_URL}/private/user/profits`,

    residualBonus: () => `${BASE_URL}/private/user/investments`,

    transactions: () => `${BASE_URL}/private/user/deposits`,
    transactionsAll: () => `${BASE_URL}/private/user/transactions`,

    profitsFiltered: () => `${BASE_URL}/private/user/profit/filtered`,
    deleteAllNotifications: () =>
      `${BASE_URL}/private/user/notifications/delete-all`,
    readAllNotifications: () =>
      `${BASE_URL}/private/user/notifications/read-all`,
    deleteNotification: (id: any) =>
      `${BASE_URL}/private/user/notifications/delete/${id}`,

    notifications: () => `${BASE_URL}/private/user/notifications`,

    getPans: () => `${BASE_URL}/open/plan/all `,

    teamStatistic: () => `${BASE_URL}/private/user/statistics`,

    qrCode: () => `${BASE_URL}/private/user/mfa_captcha`,
    activateTwoFa: () => `${BASE_URL}/private/user/mfa_state`,
    twoFaLogin: () => `${BASE_URL}/open/auth/token/totp`,

    getFaq: () => `${BASE_URL}/open/faq`,
    changePass: () => `${BASE_URL}/private/user/password/update`,

    addAditWithdraw: () => `${BASE_URL}/private/user/withdraws/address`,
    getWithdraws: () => `${BASE_URL}/private/user/withdraws/address/list`,
    withdraw: () => `${BASE_URL}/private/user/withdraw`,
    deleteWithdraws: (id: any) =>
      `${BASE_URL}/private/user/withdraws/address/remove/${id}`,
  },
};
