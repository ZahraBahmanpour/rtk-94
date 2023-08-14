import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import { Provider } from "react-redux";
import store from "./app/store";
import PostList from "./features/posts/postList";
import PostEdit from "./features/posts/postEdit";
import RequireAuth from "./features/auth/requireAuth";
import Login from "./features/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <RequireAuth>
            <PostList />
          </RequireAuth>
        ),
      },
      {
        path: "/post",
        element: <div>Post new</div>,
      },
      {
        path: "/posts/:postId",
        element: <PostEdit />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
