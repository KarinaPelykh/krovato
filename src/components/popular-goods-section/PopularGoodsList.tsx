import { Button, Icon } from "../ui";
import { PopularGoodItem } from "./PopularGoodItem";

export const PopularGoodList = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <ul className="grid justify-center   tablet:grid-cols-2 gap-3  desktop:grid-rows-2 desktop:grid-cols-4  desktop:gap-x-2.5 desktop:gap-y-6">
        {list.map((i) => (
          <PopularGoodItem key={i} />
        ))}
      </ul>
      <Button className="bg-yellow p-[13px] flex gap-[12px] justify-center w-full items-center h-[50px] text-white text-ms rounded-xs tablet:hidden">
        <Icon name="reload" />
        Показати ще товари
      </Button>
    </>
  );
};
