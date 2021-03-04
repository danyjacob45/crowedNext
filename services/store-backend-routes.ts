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
    updateProfile: () => `${BASE_URL}/private/user/update`,
    calcInvestment: () => `${BASE_URL}/private/plans/calculate`,
    investment: () => `${BASE_URL}/private/plans/buy`,
    getEthAddress: () => `${BASE_URL}/private/user/deposit`,
    getTeam: () => `${BASE_URL}/private/user/team`,
  },
};
