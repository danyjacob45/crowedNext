const initialState = null;

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_USER":
      return action.payload;

    case "LOGOUT_USER":
      return action.payload;

    case "LOGIN_USER":
      return action.payload;

    default:
      return state;
  }
};
