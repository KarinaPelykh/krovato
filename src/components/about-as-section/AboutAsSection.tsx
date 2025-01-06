import { useTranslation } from "react-i18next";
import { InfoSection } from "../ui/info-section/InfoSection";

export const AboutAsSection = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "AboutAsPage.about-as-section",
  });

  return (
    <InfoSection
      title={t("title")}
      subtitle={t("subtitle")}
      description={t("description")}
      bgClassName=" top-[70px] w-full   h-[520px] bg-[url('/bg-about-as.png')]    desktop:bg-[url('/img-about-1.png')]  desktop:top-0 desktop:h-[454px]"
    />
  );
};
