import { configureStore } from "@reduxjs/toolkit";
import CONFIG from "../utils/ConfigSlice";
import VIDEO from "../utils/videosSlice";
const AppStore = configureStore({
  reducer: {
    config: CONFIG,
    video: VIDEO,
  },
});

export default AppStore;
