import { useTranslation } from "react-i18next";
import { FooterInfo } from "./FooterInfo";

type FooterInfoList = {
  name: string;
  id: string;
  path: string;
};
export const FooterWrapperList = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.footer",
  });

  return (
    <div className="mb-10   desktop:flex desktop:gap-[83px] desktop:mb-0 ">
      <FooterInfo
        baseInfo={t("category", { returnObjects: true }) as FooterInfoList[]}
        title={t("titleCategory")}
      />
      <FooterInfo
        baseInfo={
          t("informationForClients", {
            returnObjects: true,
          }) as FooterInfoList[]
        }
        title={t("titleInfo")}
      />
      <FooterInfo
        baseInfo={
          t("shopInformation", { returnObjects: true }) as FooterInfoList[]
        }
        title={t("titleClient")}
      />
    </div>
  );
};
