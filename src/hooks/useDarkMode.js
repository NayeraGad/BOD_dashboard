/**
 * A custom hook to manage dark mode.
 *
 * - Stores the preference in `localStorage`.
 * - Applies/removes the `dark` class on the `document.documentElement`.
 * - Initializes based on saved preference on mount.
 *
 * @returns {{
 *   isDarkMode: boolean,
 *   toggleMode: function - toggles between light/dark
 * }}
 */

import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const DARK = "dark";
  const LIGHT = "light";

  const toggleMode = () => {
    const mode = !isDarkMode;
    setIsDarkMode(mode);

    // Save the theme to localStorage and apply class to document
    if (mode) {
      localStorage.setItem("theme", DARK);
      document.documentElement.classList.add(DARK);
    } else {
      localStorage.setItem("theme", LIGHT);
      document.documentElement.classList.remove(DARK);
    }
  };

  useEffect(() => {
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === DARK) {
      setIsDarkMode(true);
      document.documentElement.classList.add(DARK);
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove(DARK);
    }
  }, []);

  return { isDarkMode, toggleMode };
};