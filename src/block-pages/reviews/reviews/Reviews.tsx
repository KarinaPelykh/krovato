import { Button } from "../../../components";
import { Icon } from "../../../components/ui";
import { ReviewForm } from "./ReviewForm";
import { ReviewList } from "./ReviewList";

export const Reviews = () => {
  return (
    <section>
      <div className="container desktop:flex desktop:gap-[30px]">
        <div className="mb-[60px] desktop:mb-0">
          <h1 className="text-black text-center desktop:text-start font-semibold text-1xl  mb-5 desktop:mb-10 desktop:text-2xl">
            Відгуки
          </h1>

          <Button className="mx-auto gap-[15px] mb-[60px] p-[13px] font-semibold  desktop:hidden">
            Залишити відгук
          </Button>
          <div className="mb-10">
            <ul className="text-xs  tablet:text-base flex gap-[30px] text-black mb-5">
              <li className="text-yellow">Всі відгуки</li>
              <li>Про товари</li>
              <li>Про Магазин</li>
            </ul>
            <div className="h-1 w-full bg-white rounded-lg relative">
              <div className="h-1 w-[102px] bg-yellow absolute top-0 left-0"></div>
            </div>
          </div>
          <ReviewList />
          <Button className="mx-auto  font-semibold  desktop:w-[300px]">
            <Icon name="reload" className="size-[24px]" />
            Показати ще відгуки
          </Button>
        </div>
        <ReviewForm />
      </div>
    </section>
  );
};
