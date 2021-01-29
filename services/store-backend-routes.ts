import { STORE_API_BASE_URL } from "./api";

export const storeBackEndRoutes = {
  auth: {
    getUser: () => `${STORE_API_BASE_URL}/v1/get-user`,
    login: () => `${STORE_API_BASE_URL}/v1/login`,
    logout: () => `${STORE_API_BASE_URL}/v1/logout`,
    register: () => `${STORE_API_BASE_URL}/v1/register`,
    registerStepTwo: () => `${STORE_API_BASE_URL}/v1/registration/step-2`,
  },
  stores: {
    aboutCompany: (id: number) =>
      `${STORE_API_BASE_URL}/v1/profile/${id}/about-company`,
    bankInfo: (id: number) =>
      `${STORE_API_BASE_URL}/v1/profile/${id}/bank-info`,
  },
};
