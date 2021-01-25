import { combineReducers } from "redux";
import { usersReducer } from "./users";
import { uiReducer } from "./ui";

import { authReducer, IAuthState } from "../auth/authReducers";

export interface IStoreState {
  auth: IAuthState;
  users: any;
  ui: any;
}

export default combineReducers<IStoreState>({
  auth: authReducer,
  users: usersReducer,
  ui: uiReducer,
});
