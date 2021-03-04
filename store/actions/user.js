import * as types from "./types";
import axios from "axios";
import { api } from "../api";
import { setAuthorizationToken } from "../../services/axios-with-token";
// import {Pie} from 'react-chartjs-2'

export const isAuthorized = () => {
  return async (dispatch) => {
    const url = api + "main/admin/v1/get-user";

    return axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(async (response) => {
        await dispatch({
          type: types.AUTH_USER,
          payload: response.data,
        });

        return response;
      });
  };
};

export const loginUser = (form) => {
  return async (dispatch) => {
    const url = api + "main/admin/v1/login";

    return axios
      .post(url, form, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(async (response) => {
        console.log(response);

        localStorage.setItem("token", response.data.token);
        setAuthorizationToken(response.data.token);
        await dispatch({
          type: types.LOGIN_USER,
          payload: response.data.user,
        });

        return response;
      });
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    const url = api + "main/admin/v1/logout";

    return axios
      .post(
        url,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(async (response) => {
        localStorage.removeItem("token");

        await dispatch({
          type: types.LOGOUT_USER,
          payload: null,
        });

        return response;
      });
  };
};
