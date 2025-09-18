import { useContext } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDarkMode } from "../../hooks/useDarkMode";
import UserMenu from "../UI/UserMenu";
import { SidebarContext } from "../../context/Sidebar/SidebarContext";

const Navbar = () => {
  const { toggleSidebar } = useContext(SidebarContext);

  const { isDarkMode, toggleMode } = useDarkMode();

  return (
    <header className="fixed top-0 w-full bg-light-navbar dark:bg-dark-navbar z-40">
      <div className="p-5 flex-between">
        {/* Sidebar toggle + logo */}
        <div className="flex items-center gap-5">
          <button
            onClick={toggleSidebar}
            className="text-2xl hover:text-gray-700 dark:hover:text-gray-300 transition"
            aria-label="Toggle Sidebar"
          >
            <HiMenuAlt2 />
          </button>

          <NavLink to="/">
            <h1 className="logo">Dashboard</h1>
          </NavLink>
        </div>

        {/* Theme mode + avatar */}
        <div className="flex items-center gap-5">
          <button
            onClick={toggleMode}
            className="text-2xl hover:text-gray-700 dark:hover:text-gray-300 transition"
            aria-label="Toggle Dark Mode"
            aria-pressed={isDarkMode}
          >
            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>

          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
