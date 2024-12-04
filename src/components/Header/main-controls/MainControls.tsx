import { Button } from "../../ui/Button";
import { Logo } from "../../ui/Logo";
import { Form } from "./Form";
import { Select } from "./Select";
import Icons from "/sprite.svg";

export const MainControls = () => {
  return (
    <>
      <Logo />
      <Button className="bg-badge rounded-[8px] text-white flex gap-[10px] py-[11px] px-5">
        <svg className=" size-6">
          <use xlinkHref={Icons + "#menu-catalog"}></use>
        </svg>
        Каталог
      </Button>
      <Form />
      <Select />
    </>
  );
};
