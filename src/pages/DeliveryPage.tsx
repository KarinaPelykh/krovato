import { useTranslation } from "react-i18next";
import { FaqSection, OurServicesList } from "../components";
import { DeliveryInfoSection } from "../components/delivery-info-section/DeliveryInfoSection";
import { DeliverySection } from "../components/delivery-section/DeliverySection";
import { DeliverSaleSection } from "../components/deliver-sale-section/DeliverSaleSection";
import { ServicesSection } from "../components/services-section/ServicesSection";

export const DeliveryPage = () => {
  const { t: localInfo } = useTranslation("translation", {
    keyPrefix: "DeliveryPage.delivery-info-section",
  });

  const { t } = useTranslation("translation", {
    keyPrefix: "DeliveryPage.delivery-info-into-ua-section",
  });

  const list = localInfo("list", {
    returnObjects: true,
  }) as string[];

  const listInfoDelivery = t("list", {
    returnObjects: true,
  }) as string[];
  return (
    <>
      <DeliverySection />
      <DeliveryInfoSection
        title={localInfo("title")}
        list={list}
        description={localInfo("description")}
        text={localInfo("text")}
        text2={localInfo("text_2")}
        text3={localInfo("text_3")}
        images="/delivery-section/map.png"
      />
      <DeliveryInfoSection
        bgClassName="bg-white pt-[60] desktop:pt-[70px]"
        title={t("title")}
        list={listInfoDelivery}
        description={t("description")}
        text3={t("text")}
        images="/delivery-section/ua-map.png"
        textClassName="flex"
        info={t("addition-info")}
      />
      <DeliverSaleSection />
      <ServicesSection />
      <FaqSection />
      <OurServicesList />
    </>
  );
};
