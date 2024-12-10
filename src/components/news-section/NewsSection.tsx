import { Link } from "react-router-dom";
import { NewsList } from "./NewsList";
import icon from "/sprite.svg";

export const NewsSection = () => {
  return (
    <section className="py-[60px]  desktop:py-[70px]">
      <div className="container">
        <div className=" desktop:flex  mb-10 desktop:gap-[30px]  desktop:items-center">
          <h2 className="text-black  text-1xl desktop:text-2xl">
            Свіжі статті та останні новини
          </h2>

          <Link
            to="/"
            className="text-yellow hidden desktop:flex gap-[10px] items-center"
          >
            Читати блог
            <svg className="size-6 fill-white">
              <use xlinkHref={icon + "#arrow-1"}></use>
            </svg>
          </Link>
        </div>

        <NewsList />
      </div>
    </section>
  );
};
