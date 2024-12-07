import { useTranslation } from "react-i18next";
import { PopularList } from "./PopularList";

export const CategoriesSection = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.categories-section",
  });
  return (
    <section className="pb-[70px]">
      <div className=" container">
        <h1 className="mb-10 text-dark text-2xl">{t("title")}</h1>
        <PopularList />
      </div>
    </section>
  );
};
