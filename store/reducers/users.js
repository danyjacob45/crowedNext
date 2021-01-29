const initialState = {};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return action.payload;

    default:
      return state;
  }
};
