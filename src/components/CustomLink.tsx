import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import type { CustomLinkProps } from "../types/types";

export function CustomLink(props: CustomLinkProps) {
  const resolvedPath = useResolvedPath(props.to);
  const isActive = useMatch({ path: resolvedPath.pathname });

  return (
    <NavLink to={props.to} className={isActive ? "active_nav" : ""}>
      {props.children}
    </NavLink>
  );
}
