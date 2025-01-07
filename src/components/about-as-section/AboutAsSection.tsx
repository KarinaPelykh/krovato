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
      bgClassName=" top-0 w-full min-h-full   bg-[url('/bg-about-as.png')]    desktop:bg-[url('/bg-about-us-desktop.png')]  desktop:h-auto"
    />
  );
};
