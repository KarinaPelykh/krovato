import { Link } from "react-router-dom";
import { SaleSlider } from "./SaleSlider";
import { Icon } from "../ui";
import { useTranslation } from "react-i18next";

export const SaleSection = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.sale-section",
  });
  return (
    <section className="pb-[60px] desktop:pb-[70px]">
      <div className="container">
        <div className=" desktop:flex  mb-10 desktop:gap-[30px]  desktop:items-center">
          <h2 className="text-black  text-1xl desktop:text-2xl">
            {t("title")}
          </h2>
          <Link to="/" className="text-yellow flex gap-[10px] items-center">
            {t("linkForDetails")}
            <Icon className="size-6" name="arrow-1" />
          </Link>
        </div>
        <SaleSlider />
      </div>
    </section>
  );
};
