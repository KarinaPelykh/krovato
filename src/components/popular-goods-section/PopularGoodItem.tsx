import { Button } from "../ui";
import icon from "/sprite.svg";

export const PopularGoodItem = () => (
  <li className="p-5 bg-white h-[488px] rounded-xs">
    <img
      src="/sofa.png"
      alt="furniture"
      className="w-[370px] h-[220px]  desktop:w-full desktop:h-[220px]  rounded-xs mb-5"
    />
    <p className=" mb-2.5 text-m desktop:text-xs">Розмір: 61 x 184 x 2130 мм</p>
    <p className="mb-2.5 text-black text-xl">
      Ліжко Спарта / Sparta з підйомним механізмом
    </p>
    <p className="mb-2.5  flex gap-[5px]">
      <svg className="size-6">
        <use xlinkHref={icon + "#check"}></use>
      </svg>
      В наявності
    </p>
    <div className=" flex items-center justify-between">
      <p className="flex flex-col text-xl text-black">
        <span className="inline-block text-red text-m line-through desktop:hidden">
          25 400 грн.
        </span>
        15 400 грн.
      </p>
      <div className="flex gap-2.5">
        <Button>
          <svg className="size-[70px]">
            <use xlinkHref={icon + "#obrane"}></use>
          </svg>
        </Button>

        <Button>
          <svg className="size-[70px]">
            <use xlinkHref={icon + "#korzina"}></use>
          </svg>
        </Button>
      </div>
    </div>
  </li>
);
