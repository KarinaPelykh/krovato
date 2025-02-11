import { SaleSlider } from "./SaleSlider";
import { Button, Icon, Link } from "../../../components";
import { useTranslation } from "react-i18next";

export const SaleSection = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.sale-section",
  });

  return (
    <section className="pb-17 desktop:pb-18">
      <div className="container">
        <div className="desktop:flex desktop:justify-between mb-10">
          <div className="  flex justify-between desktop:justify-start desktop:items-center  desktop:gap-[30px]">
            <h2 className="text-black  text-1xl desktop:text-2xl">
              {t("title")}
            </h2>
            <Link to="/">{t("linkForDetails")}</Link>
          </div>
          <div className="hidden desktop:flex ">
            <Button className="mr-[30px] !bg-transparent">
              <Icon className="size-[50px]" name="arrow-left" />
            </Button>
            <Button className="!bg-transparent">
              <Icon className="size-[50px] rotate-180" name="arrow-left" />
            </Button>
          </div>
        </div>
        <SaleSlider />
      </div>
    </section>
  );
};
