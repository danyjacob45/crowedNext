import { IStore } from "../../services/stores/store.interface";
import { IUser } from "./authReducers";

export enum authActionTypes {
  LOGOUT_USER = "LOGOUT_USER",
  SET_CURRENT_USER = "SET_CURRENT_USER",
  AUTH_STOP_LOAD = "AUTH_STOP_LOAD",
  AUTH_START_LOADING = "AUTH_START_LOADING",
  SET_CURRENT_STORE = "SET_CURRENT_STORE",
}

export interface SetCurrentStoreAction {
  payload: {
    store: IStore;
  };
  type: authActionTypes.SET_CURRENT_STORE;
}

export interface AuthStopLoadingAction {
  type: authActionTypes.AUTH_STOP_LOAD;
}

export interface AuthStartLoadingAction {
  type: authActionTypes.AUTH_START_LOADING;
}

export interface SetCurrentUserAction {
  payload: {
    user: IUser;
    token: string;
    store: IStore;
  };
  type: authActionTypes.SET_CURRENT_USER;
}

export interface AuthLogoutAction {
  type: authActionTypes.LOGOUT_USER;
}

export type IAuthActions =
  | SetCurrentUserAction
  | AuthLogoutAction
  | AuthStopLoadingAction
  | AuthStartLoadingAction
  | SetCurrentStoreAction;
