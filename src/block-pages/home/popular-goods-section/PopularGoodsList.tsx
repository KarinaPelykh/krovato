import { useTranslation } from "react-i18next";
import { Button, Icon } from "../../../components/ui";
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
          <PopularGoodItem key={i} index={i} />
        ))}
      </ul>
      <Button className="h-[50px] tablet:hidden">
        <Icon name="reload" />
        {t("showGoods")}
      </Button>
    </>
  );
};
