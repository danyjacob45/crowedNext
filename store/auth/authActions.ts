import Axios from "axios";
import {
  SetCurrentUserAction,
  authActionTypes,
  AuthLogoutAction,
  AuthStartLoadingAction,
  SetCurrentStoreAction,
} from "./authTypes";
import { Dispatch } from "redux";

import { setAuthorizationToken } from "../../services/axios-with-token";

export const setCurrentUser = ({
  user,
  token,
}: SetCurrentUserAction["payload"]): SetCurrentUserAction => {
  window.localStorage.setItem("token", token);
  setAuthorizationToken(token);
  return {
    type: authActionTypes.SET_CURRENT_USER,
    payload: { user, token },
  };
};

export const setCurrentStore = ({
  store,
}: SetCurrentStoreAction["payload"]): SetCurrentStoreAction => {
  return {
    type: authActionTypes.SET_CURRENT_STORE,
    payload: { store },
  };
};
export const authLogout = (): AuthLogoutAction => {
  return {
    type: authActionTypes.LOGOUT_USER,
  };
};

export const authStartLoading = (): AuthStartLoadingAction => {
  return {
    type: authActionTypes.AUTH_START_LOADING,
  };
};
