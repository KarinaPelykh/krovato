import { useTranslation } from "react-i18next";
import { Button, Icon, Logo } from "../../ui";
import { ButtonsControls } from "./ButtonsControls";
import { Form } from "./Form";
import { Select } from "./Select";
import { useState } from "react";
import { BurgerMenu } from "../BurgerMenu";

export const MainControls = () => {
  const { t } = useTranslation("translation", { keyPrefix: "HomePage.header" });

  const [isOpen, setIsOpen] = useState(false);

  const [isOpenCatalog, setIsOpenCatalog] = useState(false);

  document.body.style.overflow = isOpenCatalog ? "hidden" : "auto";

  const handleCloseMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseCatalog = () => {
    setIsOpenCatalog(!isOpenCatalog);
  };
  return (
    <div className="tablet:flex items-center gap-[30px]  container desktop:!py-[25px]">
      <div className="  flex justify-between py-[33px] desktop:p-0">
        <Button onClick={handleCloseMenu} className="desktop:hidden">
          <Icon className="size-[50px]" name="menu" />
        </Button>
        <Logo nameLogo="logo" className="!w-[215]" />
        <Button className="desktop:hidden">
          <Icon className="size-[50px]" name="tel" />
        </Button>
      </div>
      <div className=" flex items-center  py-[12px] border border-t-white-light border-b-0 border-x-0  desktop:p-0 desktop:border-0 desktop:gap-[30px] ">
        <Button className="bg-badge rounded-xs text-ms text-white flex gap-2.5 py-[11px] px-5 w-[145px] h-[46px] mr-auto desktop:mr-0">
          <Icon name="menu-catalog" />
          {t("buttonCatalog")}
        </Button>
        <Form />
        {isOpenCatalog ? (
          <div className="fixed z-10 w-full h-full top-[200px]  tablet:top-[100px] left-0  bg-black/80  desktop:hidden">
            <div className="bg-white p-[35px]">
              <Form className="!flex !w-full" />
            </div>
          </div>
        ) : null}

        <Select />
        <ButtonsControls
          isOpenCatalog={isOpenCatalog}
          onClick={handleCloseCatalog}
        />
      </div>
      <BurgerMenu isOpen={isOpen} handleCloseMenu={handleCloseMenu} />
    </div>
  );
};
