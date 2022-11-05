import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";

import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard"
import Login from "./Pages/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  export const Router = () => (
    <RouterProvider router={router} />
  )