import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videoList",
  initialState: {
    popularVideos: null,
  },
  reducers: {
    fetchPopularVideo: (state, action) => {
      state.popularVideos = action.payload;
    },
  },
});

export default videoSlice.reducer;
export const { fetchPopularVideo } = videoSlice.actions;
