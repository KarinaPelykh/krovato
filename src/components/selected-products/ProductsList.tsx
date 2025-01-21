import { Button, Icon } from "../ui";

export const ProductsList = () => {
  return (
    <>
      <ul className="flex gap-2.5 flex-wrap mb-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <li className="p-5 bg-white w-fit rounded-xs shadow-1xl" key={i}>
            <img
              src="/sofa.png"
              alt="furniture"
              className="w-full  h-[220px]  rounded-xs mb-5 desktop:w-[260px] "
            />
            <p className=" mb-2.5 text-m desktop:text-xs">
              Розмір: 61 x 184 x 2130 мм
            </p>
            <p className="mb-2.5 text-black text-ms font-semibold w-0 min-w-[260px]">
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
                  <Icon className="size-[50px]" name="obrane" />
                </Button>

                <Button>
                  <Icon className="size-[50px]" name="korzina" />
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Button className="flex justify-center  mx-auto gap-[15px] bg-yellow text-white p-[13px] w-full text-ms font-semibold rounded-lg desktop:w-[300px]">
        <Icon name="reload" className="size-[24px]" />
        Показати ще відгуки
      </Button>
    </>
  );
};
