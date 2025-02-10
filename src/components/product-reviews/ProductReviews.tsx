import { ReviewSvgList } from "../../block-pages/about-as/reviews-section/RevievSvgList";
import { Button, Icon } from "../ui";
import { AnswerReviewFrom } from "./AnswerReviewFrom";
import { CardReview } from "./CardReview";

export const ProductReviews = () => {
  return (
    <div className=" p-[30px] bg-white rounded-lg">
      <h2 className=" text-black font-semibold text-1xl ">
        Відгуки про Ліжко двоспальне МК-1 з підйомним механізмом
      </h2>
      <div className=" flex gap-[41px] items-center mb-10">
        <p className="text-base text-gray">
          Всього відгуків:<span>93</span>
        </p>
        <div className="flex items-center gap-2.5">
          <ReviewSvgList rate={5} />
          <p className="text-base text-gray">Середня оцінка 4,5</p>
        </div>
      </div>
      <ul className=" flex  flex-col gap-[30px]">
        {[...Array(5)].map((el) => (
          <li
            key={el}
            className="border-[3px] pb-[30px] border-b-white-light border-t-0 border-x-0 last:border-0"
          >
            <CardReview />
            <AnswerReviewFrom />
          </li>
        ))}
      </ul>
      <Button className="mx-auto  font-semibold  desktop:w-[300px]">
        <Icon name="reload" className="size-[24px]" />
        Показати ще відгуки
      </Button>
    </div>
  );
};
