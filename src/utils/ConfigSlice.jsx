import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    showSidebar: true,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.showSidebar = !state.showSidebar; //toggle sidebar
    },
    closeMenu: (state, action) => {
      state.showSidebar = false;
    },
  },
});

export default configSlice.reducer;
export const { toggleMenu, closeMenu } = configSlice.actions;
