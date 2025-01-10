import { NavLink, useLocation } from "react-router-dom";
import { Icon } from "./ui";
import { useTranslation } from "react-i18next";

type listPath = {
  path: string;
  name: string;
};

export const Breadcrumb = () => {
  const location = useLocation();
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.Breadcrumb",
  });

  const listPath = t("path-list", {
    returnObjects: true,
  }) as listPath[];

  const pathname = location.pathname.split("/").filter((el) => el);

  return (
    <nav className="flex">
      {pathname.length !== 0 ? (
        <>
          <NavLink to="/">{t("title")}</NavLink>

          {pathname.map((value, i) => {
            const to = `/${pathname.slice(0, i + 1).join("/")}`;

            const path = listPath.filter(
              ({ path, name }) => path === value && name
            );

            return (
              <span key={to} className="flex">
                <Icon className="fill-gray rotate-90" name="select" />
                <NavLink to={value}>{path[0].name}</NavLink>
              </span>
            );
          })}
        </>
      ) : null}
    </nav>
  );
};
