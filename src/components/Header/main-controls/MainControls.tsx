import { useTranslation } from "react-i18next";
import { Button, Logo } from "../../ui";
import { ButtonsControls } from "./ButtonsControls";
import { Form } from "./Form";
import { Select } from "./Select";
import Icons from "/sprite.svg";

export const MainControls = () => {
  const { t } = useTranslation("translation", { keyPrefix: "HomePage.header" });

  return (
    <div className="tablet:flex items-center gap-[30px]  container ">
      <Logo />
      <Button className="bg-badge rounded-xs text-ms text-white flex gap-2.5 py-[11px] px-5 w-[145px] h-[46px]">
        <svg className=" size-6">
          <use xlinkHref={Icons + "#menu-catalog"}></use>
        </svg>
        {t("buttonCatalog")}
      </Button>
      <Form />
      <Select />
      <ButtonsControls />
    </div>
  );
};
