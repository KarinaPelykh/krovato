import { Button } from "../ui";
import icon from "/sprite.svg";
import { Link } from "react-router-dom";

export const NewsList = () => {
  const list = [1, 2, 3];

  return (
    <>
      <ul className="flex gap-10 flex-wrap desktop:flex-nowrap mb-[20px]">
        {list.map((i) => (
          <li className="rounded-xs w-[calc((100% - 30px)/3)] m-0 p-0" key={i}>
            <img
              src="/news.jpg"
              alt="news"
              className="  block max-w-full h-auto m-0 p-0 "
            />

            <div className="rounded-xs rounded-t-none  border-x-gray-light border-b-gray-light border-t-0    border-t-transparent   border p-[30px]">
              <h3 className="text-black text-lg mb-[30px]">
                Стільці для вітальні. Як правильно вибрати?
              </h3>
              <Link
                to="/"
                className="text-yellow text-ms flex gap-2.5 items-center"
              >
                Детальніше
                <svg className="size-6">
                  <use xlinkHref={icon + "#arrow-1"}></use>
                </svg>
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <Button className="bg-yellow p-[13px] flex gap-[12px] justify-center w-full items-center h-[50px] text-white text-ms rounded-xs tablet:hidden">
        <svg className="size-6 fill-white">
          <use xlinkHref={icon + "#read"}></use>
        </svg>
        Читати блог
      </Button>
    </>
  );
};
