import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
export const CoursesContext = createContext([]);

const Main = () => {
  const courses = useLoaderData();
  return (
    <CoursesContext.Provider value={courses}>
      <Navbar />
      <Outlet />
      <Footer />
    </CoursesContext.Provider>
  );
};

export default Main;
