import { useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import SignOutBtn from "./SignOutBtn";

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Avatar button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-primary dark:bg-primary-dark p-2 rounded-full text-white text-lg"
        aria-label="User Profile"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <FaUser />
      </button>

      {/* Dropdown */}
      {open && (
        <ul className="userMenu" role="menu">
          <li role="menuitem">
            <FaUser /> Profile
          </li>

          <li role="menuitem">
            <MdSettings /> Settings
          </li>

          <li>
            <SignOutBtn />
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserMenu;
