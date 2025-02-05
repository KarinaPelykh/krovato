import { Link } from "react-router-dom";
import { SaleSlider } from "./SaleSlider";
import { Button, Icon } from "../ui";
import { useTranslation } from "react-i18next";

export const SaleSection = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "HomePage.sale-section",
  });
  return (
    <section className="pb-[60px] desktop:pb-[70px]">
      <div className="container">
        <div className="desktop:flex desktop:justify-between mb-10">
          <div className="  flex justify-between desktop:justify-start desktop:items-center  desktop:gap-[30px]">
            <h2 className="text-black  text-1xl desktop:text-2xl">
              {t("title")}
            </h2>
            <Link to="/" className="text-yellow flex gap-[10px] items-center">
              {t("linkForDetails")}
              <Icon className="size-6 fill-yellow" name="arrow-1" />
            </Link>
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
