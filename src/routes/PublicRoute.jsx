import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Header from "../components/Header/Header";
import Courses from "../pages/Courses/Courses";
import Main from "../pages/Main/Main";
import SingleCourse from "../pages/SingleCourse/SingleCourse";

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
      }
    ],
    errorElement: <ErrorPage />
  }
]);
