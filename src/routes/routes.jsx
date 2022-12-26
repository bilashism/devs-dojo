import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AsSeenIn from "../components/AsSeenIn/AsSeenIn";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Features from "../components/Features/Features";
import Header from "../components/Header/Header";
import Statistics from "../components/Statistics/Statistics";
import Blog from "../pages/Blog/Blog";
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
            <AsSeenIn />
            <Courses />
            <Features />
            <Statistics />
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
        path: "/blog",
        element: <Blog />
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
