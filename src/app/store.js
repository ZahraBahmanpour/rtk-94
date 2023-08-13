import modalSlice from "../features/modal/modalSlice";
import postsSlice from "../features/posts/postSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    posts: postsSlice,
    modal: modalSlice,
  },
});

export default store;
