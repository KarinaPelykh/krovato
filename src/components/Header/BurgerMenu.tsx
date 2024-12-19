import clsx from "clsx";
import { NavList } from "./nav/NavList";
import { SpecialOfferList } from "./SpecialOfferList";
import { Button, Icon, Logo } from "../ui";

type BurgerMenuProps = {
  isOpen: boolean;
  handleCloseMenu: () => void;
};

export const BurgerMenu = ({ isOpen, handleCloseMenu }: BurgerMenuProps) => {
  return (
    <div
      className={clsx(
        " w-full h-full bg-black/80 fixed top-0 left-0 transform-all duration-300 delay-300 ease-out z-10",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="bg-white max-h-[640px]  overflow-auto ">
        <div className="  flex justify-between py-[27px] px-[15px] border border-b-white-light border-t-0 border-l-0 border-r-0 ">
          <Button onClick={handleCloseMenu} className="desktop:hidden">
            <Icon className="size-[50px]" name="close" />
          </Button>
          <Logo nameLogo="logo" className="!w-[215]" />
          <Button>
            <Icon className="size-[50px]" name="tel" />
          </Button>
        </div>
        <div className="p-[35px]">
          <NavList className="flex-col gap-10 !items-start text-black mb-10" />
          <SpecialOfferList className="flex-col-reverse !gap-10 " />
        </div>
      </div>
    </div>
  );
};
