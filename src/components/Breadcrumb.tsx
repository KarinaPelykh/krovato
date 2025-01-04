import { NavLink, useLocation } from "react-router-dom";
import { Icon } from "./ui";

export const Breadcrumb = () => {
  const location = useLocation();

  const pathname = location.pathname.split("/").filter((el) => el);

  return (
    <nav className="flex">
      {pathname.length !== 0 ? (
        <>
          <NavLink to="/">Головна</NavLink>

          {pathname.map((value, i) => {
            const to = `/${pathname.slice(0, i + 1).join("/")}`;

            return (
              <span key={to} className="flex">
                <Icon className="fill-gray rotate-90" name="select" />
                <NavLink to={value}>{value}</NavLink>
              </span>
            );
          })}
        </>
      ) : null}
    </nav>
  );
};
