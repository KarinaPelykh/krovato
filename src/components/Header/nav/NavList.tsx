import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type NavLink = {
  name: string;
  id: string;
  href: string;
};

export const NavList = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.header",
  });
  const links = t("links", { returnObjects: true }) as NavLink[];
  return (
    <ul className="flex gap-[30px] items-center">
      {links.map(({ name, id }) => (
        <li key={id}>
          <Link to="/" className="text-base">
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
