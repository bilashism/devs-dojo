import { toast, Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";
import { createContext, useState } from "react";
import useThemeToggle from "./hooks/useThemeToggle";

export const ThemeContext = createContext();

const App = () => {
  const [curTheme, setTheme] = useThemeToggle();

  const toggleTheme = () => {
    setTheme(curTheme);
    toast.success(`You're now in ${curTheme} mode!`);
  };

  return (
    <ThemeContext.Provider value={{ curTheme, setTheme, toggleTheme }}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </ThemeContext.Provider>
  );
};

export default App;
