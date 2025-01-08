import { useTranslation } from "react-i18next";
import { ServiceList } from "./ServiceList";
import { ServiceTable } from "./ServiceTable";
import { ServiceInformation } from "./ServiceSection.type";

export const ServicesSection = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "DeliveryPage",
  });

  const serviceInfo = t("service-section.serviceInfo", {
    returnObjects: true,
  }) as ServiceInformation[];

  const items = t("service-section.items", {
    returnObjects: true,
  }) as ServiceInformation[];

  return (
    <section className="bg-white py-[60px] desktop:py-[70px]">
      <div className="container">
        <ServiceList
          data={items}
          isElevator={true}
          title={t("service-section.title_1")}
        />
        <div className="desktop:hidden">
          <ServiceList
            data={serviceInfo}
            title={t("service-section.title_2")}
            subtitle={t("service-section.subtitle")}
            isElevator={true}
          />
          <ServiceList
            data={serviceInfo}
            title={t("service-section.title_2")}
            subtitle={t("service-section.subtitle_2")}
            isElevator={false}
          />
        </div>

        <ServiceTable serviceInfo={serviceInfo} />
        <p className="text-center desktop:text-start">
          {t("service-section.detail")}
        </p>
      </div>
    </section>
  );
};
