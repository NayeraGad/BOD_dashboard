import { NavLink } from "react-router-dom";
import { sidebarLinks } from "../../constants";

const SidebarMenu = ({onClick}) => {
  return (
    <ul className="flex flex-col gap-5 text-lg">
      {sidebarLinks.map((link) => {
        const { Icon, label, path } = link;
        return (
          <li key={label}>
            <NavLink
              to={path}
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-md ${
                  isActive ? "bg-primary text-white" : ""
                } transition hover:bg-primary/90 hover:text-white`
              }
              onClick={onClick}
            >
              <Icon className="text-2xl" />
              <span>{label}</span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarMenu;
