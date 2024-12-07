import { Link } from "react-router-dom";
import icon from "/sprite.svg";
import { useTranslation } from "react-i18next";
import { PopularGoodList } from "./PopularGoodsList";

export const PopularGoodsSection = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.popular-goods-section",
  });
  return (
    <section>
      <div className="container">
        <div className=" desktop:flex  desktop:gap-[30px]  desktop:items-center">
          <h2 className="text-black text-[40px] font-semibold">{t("title")}</h2>
          <Link to="/" className="text-yellow flex gap-[10px] items-center">
            {t("linkSeeAll")}
            <svg className="size-6">
              <use xlinkHref={icon + "#arrow-1"}></use>
            </svg>
          </Link>
        </div>
        <PopularGoodList />
      </div>
    </section>
  );
};
