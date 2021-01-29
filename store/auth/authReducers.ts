import { IStore } from "../../services/stores/store.interface";
import { IAuthActions, authActionTypes } from "./authTypes";

export interface IUser {
  [key: string]: any;
  id: number;
  name: string;
  avatar: string | undefined;
  avatar_path: string | undefined;
  second_name?: string;
  address?: string;
  phone?: string;
  email: string;
  email_verified_at?: any;
  created_at: string;
  updated_at: string;
}

export interface IAuthState {
  isAuth: boolean;
  token: string | null;
  user: IUser | null;
  loading: boolean;
  store: IStore | null;
}
const initState: IAuthState = {
  isAuth: false,
  token: null,
  user: null,
  loading: false,
  store: null,
};

export const authReducer = (
  state = initState,
  action: IAuthActions
): IAuthState => {
  switch (action.type) {
    case authActionTypes.SET_CURRENT_STORE:
      return {
        ...state,
        store: action.payload.store,
      };
    case authActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
        store: action.payload.store,
      };
    case authActionTypes.LOGOUT_USER:
      return {
        ...state,
        isAuth: false,
        user: null,
        token: null,
        store: null,
      };
    case authActionTypes.AUTH_STOP_LOAD:
      return {
        ...state,
        loading: false,
      };
    case authActionTypes.AUTH_START_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
