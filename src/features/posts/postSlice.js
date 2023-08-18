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
  // The entire extraReducers section is like writing switch statements when implementing reducers in Redux
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
    // match the action type with the predicate that we determine as the first argument
    builder.addMatcher(
      (action) => action.type.endsWith("/pending"),
      (state, action) => {
        state.error = "rejected";
      }
    );
    // add default case if no other reducers match (must be at the end)
    builder.addDefaultCase((state, action) => {
      state.isLoading = false;
      state.posts = [];
      state.error = "";
    });
  },
});

export default postsSlice.reducer;
