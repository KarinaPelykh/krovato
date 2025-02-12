import { Button, Icon } from "../../../components";

export const ButtonControls = () => (
  <div className="flex flex-col  desktop:flex-row desktop:justify-between gap-[30px] items-center">
    <div className="flex justify-center gap-[15px] p-[13px] w-full desktop:w-fit border border-gray-light rounded-lg">
      <Button className="!bg-transparent !p-0 !w-fit  !text-gray ">-</Button>
      <span className="text-black">1</span>
      <Button className="!bg-transparent !p-0 !w-fit  !text-gray">+</Button>
    </div>
    <Button>
      <Icon name="bas" className="size-6" /> Купити
    </Button>
    <Button className="!bg-transparent border-2 border-yellow font-semibold !text-nowrap !text-gray ">
      <Icon name="credit" />
      Купити в кредит
    </Button>
  </div>
);
