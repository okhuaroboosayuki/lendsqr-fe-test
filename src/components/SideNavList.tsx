import { NavLink } from "react-router-dom";
import type { NavListProps } from "../types/types";

const SideNavList = ({ icon, name, link, children }: NavListProps) => {
  return (
    <li className="side_nav-group-list-item">
      {icon && link && name ? (
        typeof link === "string" ? (
          <NavLink to={link} className="side_nav-group-link">
            <img src={icon} alt="icon" />
            <span>{name}</span>
          </NavLink>
        ) : link && typeof link === "function" ? (
          <div className="side_nav-group-link" onClick={link}>
            <img src={icon} alt="icon" />
            <span>{name}</span>
          </div>
        ) : (
          <div className="side_nav-group-link">
            <img src={icon} alt="icon" />
            <span>{name}</span>
          </div>
        )
      ) : (
        <div className="side_nav-group-link">
          <span>{children}</span>
        </div>
      )}
    </li>
  );
};

export default SideNavList;
