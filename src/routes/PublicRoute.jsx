import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Header from "../components/Header/Header";
import Main from "../pages/Main/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Header />,
        loader: () => fetch(`https://devs-dojo.vercel.app/courses`)
      }
    ],
    errorElement: <ErrorPage />
  }
]);
