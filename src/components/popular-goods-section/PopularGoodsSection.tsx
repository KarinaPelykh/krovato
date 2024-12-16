import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PopularGoodList } from "./PopularGoodsList";
import { Icon } from "../ui";

export const PopularGoodsSection = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.popular-goods-section",
  });

  return (
    <section className="pb-[60px]  desktop:pb-[70px]">
      <div className="container">
        <div className=" desktop:flex  mb-10 desktop:gap-[30px]  desktop:items-center">
          <h2 className="text-black  text-1xl desktop:text-2xl">
            {t("title")}
          </h2>
          <Link to="/" className="text-yellow flex gap-[10px] items-center">
            {t("linkSeeAll")}
            <Icon name="arrow-1" />
          </Link>
        </div>
        <PopularGoodList />
      </div>
    </section>
  );
};
