import { useTranslation } from "react-i18next";
import { PopularGoodList } from "./PopularGoodsList";
import { Link } from "../../../components";

export const PopularGoodsSection = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.popular-goods-section",
  });

  return (
    <section className="pb-17  desktop:pb-18">
      <div className="container">
        <div className=" desktop:flex  mb-10 desktop:gap-[30px]  desktop:items-center">
          <h2 className="text-black  text-1xl desktop:text-2xl">
            {t("title")}
          </h2>
          <Link to="/">{t("linkSeeAll")}</Link>
        </div>
        <PopularGoodList />
      </div>
    </section>
  );
};
