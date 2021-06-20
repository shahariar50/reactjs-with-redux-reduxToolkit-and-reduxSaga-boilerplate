import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: { loading: false, data: [] },
  reducers: {
    setPostsState: (state, action) => ({ ...state, ...action.payload }),
    setPosts: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {
  loadPosts = "LOADPOSTS",
  setPosts,
  setPostsState,
} = postsSlice.actions;

export default postsSlice.reducer;
