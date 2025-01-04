import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

type NavLink = {
  name: string;
  id: string;
  href: string;
  path: string;
};

type NavLinkProps = {
  className?: string;
};

export const NavList = ({ className }: NavLinkProps) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.header",
  });
  const links = t("links", { returnObjects: true }) as NavLink[];
  return (
    <ul className={clsx("flex gap-[30px] items-center", className)}>
      {links.map(({ name, id, path }) => (
        <li key={id}>
          <Link to={name === name ? path : ""} className="text-base">
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
