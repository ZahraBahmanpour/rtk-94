import postSlice from "../features/posts/postSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    postReducer: postSlice,
  },
});

export default store;
