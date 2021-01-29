export const toggleSidebar = (bool = false) => {
  // debugger
  return {
    type: "TOGGLE_SIDEBAR",
    payload: bool,
  };
};
