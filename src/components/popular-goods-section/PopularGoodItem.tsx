import { useTranslation } from "react-i18next";

import { ProductCard } from "../ui/produc-card/ProductCad";

export const PopularGoodItem = () => {
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
    />
  );
};
