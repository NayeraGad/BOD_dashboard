import { useEffect, useState } from "react";
import { SidebarContext } from "./sidebarContext";
import { useDebounce } from "../../hooks";

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const debouncedWidth = useDebounce(windowWidth, 300);

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Apply sidebar logic only after debounce
  useEffect(() => {
    const width = debouncedWidth > 768;
    setIsDesktop(width);
    setIsOpen(width);
  }, [debouncedWidth]);

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        toggleSidebar,
        sidebarWidth,
        setSidebarWidth,
        isDesktop,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
