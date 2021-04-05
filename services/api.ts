export const BASE_URL = "https://api.crowd-growing.com/api/v1";
// export const BASE_URL = "http://51.255.211.219:8080/api/v1";

// eslint-disable-next-line no-useless-escape
// const domain = document.domain.match(/[^\.]*\.[^.]*$/);
// const parseDomain = domain && domain.length > 0 ? domain[0] : document.domain;
// export const COOKIE_DOMAIN =
//   parseDomain === "localhost" ? parseDomain : `.${parseDomain}`;
export const axiosHeaderConfig = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
};
