import * as types from "./types";
import axios from "axios";
import { api } from "../api";

export const fetchUsers = () => {
  return async (dispatch) => {
    const url = api + "main/admin/customers/v1/customers";

    return axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(async (response) => {
        console.log("Users>>>:", response.data);

        await dispatch({
          type: types.FETCH_USERS,
          payload: response.data.data,
        });

        return response;
      });
  };
};
