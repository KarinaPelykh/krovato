import { Link } from "react-router-dom";
import icon from "/sprite.svg";
import { SaleSlider } from "./SaleSlider";

export const SaleSection = () => {
  return (
    <section className="pb-[60px] desktop:pb-[70px]">
      <div className="container">
        <div className=" desktop:flex  mb-10 desktop:gap-[30px]  desktop:items-center">
          <h2 className="text-black  text-1xl desktop:text-2xl">Акції</h2>
          <Link to="/" className="text-yellow flex gap-[10px] items-center">
            Дивитись всі
            <svg className="size-6">
              <use xlinkHref={icon + "#arrow-1"}></use>
            </svg>
          </Link>
        </div>
        <SaleSlider />
      </div>
    </section>
  );
};
