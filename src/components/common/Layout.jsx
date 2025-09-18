import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../index";
import { SidebarContext } from "../../context/Sidebar/SidebarContext";

const Layout = () => {
  const { sidebarWidth, isOpen, isDesktop } = useContext(SidebarContext);

  return (
    <>
      <Navbar />
      <Sidebar />

      <main
        className="transition-slide relative mt-20"
        style={{
          marginLeft: isDesktop && isOpen ? sidebarWidth : 0,
        }}
      >
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
