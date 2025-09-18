import { MdOutlineClose } from "react-icons/md";
import { useContext, useEffect, useRef } from "react";
import { SidebarContext } from "../../context/Sidebar/SidebarContext";
import { SignOutBtn, SidebarMenu } from "../index";

const Sidebar = () => {
  const { isOpen, setIsOpen, setSidebarWidth } = useContext(SidebarContext);
  const ref = useRef();

  // Track sidebar width to adjust main content margin
  useEffect(() => {
    if (ref.current) {
      setSidebarWidth(ref.current.offsetWidth);
    }
  }, [isOpen]);

  return (
    <aside
      ref={ref}
      className={`${isOpen ? "translate-x-0" : "-translate-x-full"} sidebar`}
    >
      {/* Header */}
      <div className="relative flex items-center gap-5 border-b pb-5 border-color">
        <div role="banner" className="logo">
          Dashboard
        </div>

        <button
          className="absolute right-0 text-2xl hover:text-gray-700 dark:hover:text-gray-300 transition"
          aria-label="Toggle Sidebar"
          onClick={() => setIsOpen(false)}
        >
          <MdOutlineClose />
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-10">
        <SidebarMenu onClick={() => setIsOpen(false)} />
      </nav>

      {/* Footer */}
      <footer className="absolute bottom-5 p-5 left-0 w-full border-t border-color">
        <SignOutBtn />
      </footer>
    </aside>
  );
};

export default Sidebar;
