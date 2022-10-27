import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Header from "../components/Header/Header";
import Checkout from "../pages/Checkout/Checkout";
import Courses from "../pages/Courses/Courses";
import Login from "../pages/Login/Login";
import Main from "../pages/Main/Main";
import Register from "../pages/Register/Register";
import SingleCourse from "../pages/SingleCourse/SingleCourse";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: () => fetch(`https://devs-dojo.vercel.app/courses`),
    children: [
      {
        path: "/",
        element: (
          <>
            <Header />
            <Courses />
          </>
        )
      },
      {
        path: "/courses",
        element: <Courses />
      },
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(`https://devs-dojo.vercel.app/course/${params.id}`),
        element: <SingleCourse />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        )
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        )
      }
    ],
    errorElement: <ErrorPage />
  }
]);
