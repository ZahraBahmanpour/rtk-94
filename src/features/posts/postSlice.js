import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/api";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const res = await fetch(`${BASE_URL}/posts`);
    const data = await res.json();
    return data;
  } catch (e) {
    return Promise.reject(e.message);
  }
});

const initialState = { posts: [], isLoading: false, error: "" };
const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default postsSlice.reducer;
