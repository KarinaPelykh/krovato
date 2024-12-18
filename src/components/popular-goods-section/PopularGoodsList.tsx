import { useTranslation } from "react-i18next";
import { Button, Icon } from "../ui";
import { PopularGoodItem } from "./PopularGoodItem";

export const PopularGoodList = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8];

  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.popular-goods-section",
  });

  return (
    <>
      <ul className="grid justify-center mb-[30px] desktop:mb-0  tablet:grid-cols-2 gap-3  desktop:grid-rows-2 desktop:grid-cols-4  desktop:gap-[30px]">
        {list.map((i) => (
          <PopularGoodItem key={i} />
        ))}
      </ul>
      <Button className="bg-yellow p-[13px] flex gap-[12px] justify-center w-full items-center h-[50px] text-white text-ms rounded-xs tablet:hidden">
        <Icon name="reload" />
        {t("showGoods")}
      </Button>
    </>
  );
};
