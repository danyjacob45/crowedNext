import { BASE_URL } from "./api";

export const storeBackEndRoutes = {
  auth: {
    getUser: () => `${BASE_URL}/private/user/me`,

    login: () => `${BASE_URL}/open/auth/token`,

    register: () => `${BASE_URL}/open/auth/sign-up`,
  },
};
