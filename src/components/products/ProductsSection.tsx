import { Button, Icon } from "../ui";

export const ProductsSection = () => {
  return (
    <section className=" py-[60px] desktop:py-[70px]">
      <div className="container">
        <div className="mb-10 flex items-center">
          <h1 className="mr-2.5 text-black text-1xl font-semibold desktop:text-2xl">
            Ліжка
          </h1>
          <span className="text-gray-light text-ms font-semibold">
            1 147 товарів
          </span>
        </div>

        <ul className=" grid justify-center tablet:grid-cols-2 tablet:grid-rows-5 gap-2.5 desktop:grid-cols-5 desktop:grid-rows-2 mb-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <li
              className="p-5 relative bg-white rounded-lg  w-[250px] h-[180px] "
              key={i}
            >
              <div className="before:content-[''] before:w-5 absolute top-0 left-[45%] flex before:h-[5px] before:bg-yellow before:rounded-sm" />
              <p className="text-black text-base text-center">
                Односпальні ліжка
              </p>
              <div className="absolute top-0 left-0">
                <img src="/bed.png" width={240} height={180} />
              </div>
            </li>
          ))}
        </ul>
        <Button className="font-semibold mx-auto !w-fit !bg-transparent text-yellow">
          Приховати підкатегорії
          <Icon name="double-up" className=" ml-2.5 " />
        </Button>
      </div>
    </section>
  );
};
