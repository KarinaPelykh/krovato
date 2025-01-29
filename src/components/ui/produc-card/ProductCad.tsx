import clsx from "clsx";
import { Button } from "../Button";
import { Icon } from "../Icon";

type ProductCardProps = {
  size: string;
  subTitle: string;
  isAvailable: string;
  costsWithoutSale: string;
  costs: string;
  itemClassName?: string;
  imgClassName?: string;
  iconClassName?: string;
  subTitleClassName?: string;
};

export const ProductCard = ({
  size,
  subTitle,
  isAvailable,
  costsWithoutSale,
  costs,
  itemClassName,
  imgClassName,
  iconClassName,
  subTitleClassName,
}: ProductCardProps) => {
  return (
    <li
      className={clsx(
        "p-5 bg-white h-[488px] rounded-xs shadow-1xl",
        itemClassName && itemClassName
      )}
    >
      <img
        src="/sofa.png"
        alt="furniture"
        className={clsx(
          "w-[370px] h-[220px]  desktop:w-full  rounded-xs mb-5",
          imgClassName && imgClassName
        )}
      />
      <p className=" mb-2.5 text-m desktop:text-xs">{size}</p>
      <p
        className={clsx(
          "mb-2.5 text-black text-xl",
          subTitleClassName && subTitleClassName
        )}
      >
        {subTitle}
      </p>
      <p className="mb-2.5  flex gap-[5px]">
        <Icon name="check" />
        {isAvailable}
      </p>
      <div className="flex items-center justify-between">
        <p className="flex flex-col text-xl text-black">
          <span className="inline-block text-red text-m line-through desktop:hidden">
            {costsWithoutSale}
          </span>
          {costs}
        </p>
        <div className="flex gap-2.5">
          <Button className="!bg-transparent !p-0">
            <Icon
              className={clsx("size-[70px]", iconClassName && iconClassName)}
              name="obrane"
            />
          </Button>

          <Button className="!bg-transparent !p-0">
            <Icon
              className={clsx("size-[70px]", iconClassName && iconClassName)}
              name="korzina"
            />
          </Button>
        </div>
      </div>
    </li>
  );
};
