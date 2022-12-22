import { useEffect, useState } from "react";

const useThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage?.theme || "light");
  const curTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const rootEl = document.documentElement;
    rootEl.classList.remove(curTheme);
    rootEl.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, curTheme]);
  return [curTheme, setTheme];
};
export default useThemeToggle;
