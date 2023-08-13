import postsSlice from "../features/posts/postSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
});

export default store;
