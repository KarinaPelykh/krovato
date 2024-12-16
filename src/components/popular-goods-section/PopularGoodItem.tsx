import { Button, Icon } from "../ui";

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
      <Icon className="" name="check" />В наявності
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
          <Icon className="size-[70px]" name="obrane" />
        </Button>

        <Button>
          <Icon className="size-[70px]" name="korzina" />
        </Button>
      </div>
    </div>
  </li>
);
