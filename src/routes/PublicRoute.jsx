import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Header from "../components/Header/Header";
import Courses from "../pages/Courses/Courses";
import Main from "../pages/Main/Main";

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
      }
    ],
    errorElement: <ErrorPage />
  }
]);
