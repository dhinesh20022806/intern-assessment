import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import Error from "./pages/Error";
import { action as RegisterAction } from "./pages/Register";
import { action as LoginAction } from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Login />,
        action: LoginAction,
      },
      {
        path: "/register",
        element: <Register />,
        action: RegisterAction,
      },
      {
        path: "/welcome",
        element: <Welcome />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
