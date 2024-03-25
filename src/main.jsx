import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomeLayout from "./Home/HomeLayout";
import Home from "./Home/Components/Home";
import Register from "./Action/Register";
import Payment from "./Action/Payment";
import Success from "./Action/Success";
import Login from "./Admin/Login";
import DashboardLayout from "./Admin/DashboardLayout";
import Dashboard from "./Admin/Dashboard";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import PrivateRoute from "./Auth/SecretRoute";

const queryClient = new QueryClient();


const router = createBrowserRouter( [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/payment/:id",
        element: <Payment />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ]
  },
  {
    path: "/admin",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
      },
    ]
  },
] );

// @ts-ignore
ReactDOM.createRoot( document.getElementById( "root" ) ).render(
  <React.StrictMode>
    <QueryClientProvider client={ queryClient }>
      <RouterProvider router={ router } />
    </QueryClientProvider>
  </React.StrictMode>
);