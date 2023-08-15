import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  refreshToken: localStorage.getItem("refreshToken"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { refreshToken, accessToken } = action.payload;
      console.log(accessToken, refreshToken);
      state.token = accessToken;
      localStorage.setItem("token", accessToken);
      state.refreshToken = refreshToken;
      localStorage.setItem("refreshToken", refreshToken);
    },
    logOut: (state, action) => {
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
