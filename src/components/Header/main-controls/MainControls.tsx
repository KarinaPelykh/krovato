import { useTranslation } from "react-i18next";
import { Button, Icon, Logo } from "../../ui";
import { ButtonsControls } from "./ButtonsControls";
import { Form } from "./Form";
import { Select } from "./Select";

export const MainControls = () => {
  const { t } = useTranslation("translation", { keyPrefix: "HomePage.header" });

  return (
    <div className="tablet:flex items-center gap-[30px]  container !py-[25px]">
      <Logo nameLogo="logo" />
      <Button className="bg-badge rounded-xs text-ms text-white flex gap-2.5 py-[11px] px-5 w-[145px] h-[46px]">
        <Icon name="menu-catalog" />
        {t("buttonCatalog")}
      </Button>
      <Form />
      <Select />
      <ButtonsControls />
    </div>
  );
};
