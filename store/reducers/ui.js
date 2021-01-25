const initialState = { sideBarCollapse: false };

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        sideBarCollapse: action.payload
          ? !action.payload
          : !state.sideBarCollapse,
      };

    default:
      return state;
  }
};
