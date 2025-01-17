import { Link } from "react-router-dom";
import { Button, Icon } from "../ui";

export const BlogSection = () => {
  return (
    <section>
      <div className="container">
        <h1 className="text-black text-center font-semibold mb-10 text-1xl desktop:2xl desktop:text-start">
          Блог
        </h1>
        <ul className="grid gap-[30px] tablet:grid-cols-2  tablet:grid-rows-6 desktop:grid-cols-3 desktop:grid-rows-4 mb-[30px]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <li
              className="desktop:h-[454px] overflow-hidden  border-x-gray-light  group border-b-gray-light border-t-0    border-t-transparent   border  rounded-xs shadow-1xl  w-[calc((100% - 30px)/3)] "
              key={i}
            >
              <img
                src="/furniture.webp"
                alt="news"
                className="rounded-xs transition-all ease-[cubic-bezier(0.645, 0.045, 0.355, 1)]  duration-500  desktop:group-hover:object-cover  desktop:group-hover:h-[454px] desktop:group-hover:w-[410px]  desktop:w-[410px] desktop:h-[270px] h-auto w-full object-cover block  mobile:h-[270px]"
              />

              <div className="transition-all  duration-500 ease-[cubic-bezier(0.645, 0.045, 0.355, 1)] rounded-xs rounded-t-none  p-[30px]">
                <h3 className="text-black text-lg mb-[30px]">
                  Стільці для вітальні. Як правильно вибрати?
                </h3>
                <Link
                  to="/"
                  className="text-yellow text-ms flex gap-2.5 items-center"
                >
                  Детальніше
                  <Icon className="fill-yellow" name="arrow-1" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <Button className="flex justify-center  mx-auto gap-[15px] bg-yellow text-white p-[13px] w-full text-ms font-semibold rounded-lg desktop:w-[300px]">
          <Icon name="reload" className="size-[24px]" />
          Показати ще статті
        </Button>
      </div>
    </section>
  );
};
