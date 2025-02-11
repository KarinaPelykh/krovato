import { useTranslation } from "react-i18next";
import { PopularCategoriesList } from "./PopularCategoriesList";

export const CategoriesSection = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.categories-section",
  });

  return (
    <section className="pb-17 desktop:pb-18">
      <div className="container">
        <h1 className="text-1xl mb-10 text-dark desktop:text-2xl">
          {t("title")}
        </h1>
        <PopularCategoriesList />
      </div>
    </section>
  );
};
