import { useTranslation } from "react-i18next";

import { ProductCard } from "../../../components/ui/produc-card/ProductCad";

type PopularGoodItemProps = {
  index: number;
};

export const PopularGoodItem = ({ index }: PopularGoodItemProps) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.popular-goods-section",
  });

  return (
    <ProductCard
      size={t("size")}
      subTitle={t("subTitle")}
      isAvailable={t("isAvailable")}
      costsWithoutSale={t("costsWithoutSale")}
      costs={t("costs")}
      index={index}
    />
  );
};
