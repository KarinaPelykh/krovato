import { Button } from "../ui";
import { ReviewSvgList } from "./RevievSvgList";
import { ReviewSlider } from "./ReviewSlider";
import icon from "/sprite.svg";
export const ReviewsSection = () => {
  return (
    <section className="bg-[#E9E9E9]   overflow-hidden py-[60px] desktop:py-[70px]">
      <div className="container  desktop:flex">
        <div className="flex flex-col mb-10   desktop:mr-[55px] ">
          <h2 className="mb-10 text-black text-2xl">Останні відгуки</h2>
          <div className="flex mb-[40px] justify-center desktop:justify-start">
            <svg className="size-[80px] mr-[30px]">
              <use xlinkHref={icon + "#ava"}></use>
            </svg>
            <div>
              <p className="text-black text-xl mb-10 w-[300px]">
                Магазин меблів для дому «KROVATO»
              </p>
              <div className=" flex gap-2.5">
                <span className="text-yellow text-ms">0.5</span>
                <ReviewSvgList />
              </div>
              <p>Базовано на відгуках: 269</p>
            </div>
          </div>
          <div className="flex  justify-center desktop:justify-start">
            <Button className="bg-yellow flex p-[13px]  justify-center items-center rounded-xs text-white mr-[30px]">
              <svg className="size-6 mr-[17px]">
                <use xlinkHref={icon + "#add"}></use>
              </svg>
              Написати відгук
            </Button>
            <Button className="bg-transparent flex justify-center items-center ">
              <svg className="size-6">
                <use xlinkHref={icon + "#chat"}></use>
              </svg>
              Всі відгуки
            </Button>
          </div>
        </div>
        <ReviewSlider />
      </div>
    </section>
  );
};
