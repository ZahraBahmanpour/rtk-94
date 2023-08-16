import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../api/api";
import { logOut, setCredentials } from "./auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "same-origin",
  prepareHeaders: (headers, { getState, endpoint }) => {
    let token = localStorage.getItem("token");
    if (endpoint === "/auth/refresh-token") {
      token = localStorage.getItem("refreshToken");
      headers.set("refreshToken", token || "");
    } else if (endpoint !== "/auth/login") {
      headers.set("token", token || "");
    }

    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.originalStatus === 401) {
    console.log("sending refresh token");
    // send refresh token to get new access token
    const refreshResult = await baseQuery(
      { url: "/auth/refresh-token", method: "POST" },
      { ...api, endpoint: "/auth/refresh-token" },
      extraOptions
    );
    console.log(refreshResult);
    if (refreshResult?.data) {
      // store the new token
      api.dispatch(setCredentials({ ...refreshResult.data }));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
  tagTypes: ["Post"],
});

export default apiSlice;
