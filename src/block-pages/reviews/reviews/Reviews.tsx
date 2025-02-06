import { Button } from "../../../components";
import { Icon } from "../../../components/ui";
import { Card } from "../../../components/ui/Card/Card";
import { ReviewForm } from "./ReviewForm";

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
          <ul className="flex flex-col items-center mb-[30px]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <li key={i} className="mb-[30px]">
                <Card
                  textClassName=" h-auto desktop:w-full"
                  name="Іван Стедниця"
                  product="Крісло для геймерів AEROCOOL EARL Steel Blue"
                  description="Покупали сыну игровое кресло в подарок. Качество супер, очень удобное и отлично поддерживает спину. В общем подарком более чем доволен) Отдельное спасибо магазину Мебельок за помощь в выборе кресла!"
                />
              </li>
            ))}
          </ul>
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
