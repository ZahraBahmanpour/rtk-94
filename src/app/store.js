import apiSlice from "../features/apiSlice";
import modalSlice from "../features/modal/modalSlice";
// import postsSlice from "../features/posts/postSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    // posts: postsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
    modal: modalSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
