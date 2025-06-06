import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type Categories = string[];

export const CategoriesList = () => {
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "HomePage.header",
  });

  const categories = t("Categories", { returnObjects: true }) as Categories;

  return (
    <ul className={clsx("flex", i18n.language === "en" ? "gap-6" : "gap-10")}>
      {categories.map((item, i) => {
        return (
          <li key={i} className="text-ms">
            <Link to="/"> {item}</Link>
          </li>
        );
      })}
    </ul>
  );
};
