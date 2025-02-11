import { ReviewSvgList } from "../../block-pages/about-as/reviews-section/RevievSvgList";
import { Button, Icon } from "../ui";

type CardReviewProps = {
  handleDisplayingForm: () => void;
};
export const CardReview = ({ handleDisplayingForm }: CardReviewProps) => {
  return (
    <>
      <div>
        <div className="flex mb-[30px] items-center">
          <Icon className="size-[50px] mr-5" name="avatar" />
          <div className="w-full desktop:relative">
            <div className="flex justify-between items-center w-full">
              <span className="text-black text-base">Іван Стедниця</span>
              <span>20.12.2022</span>
            </div>
            <div className="desktop:absolute desktop:top-0 desktop:right-24">
              <ReviewSvgList className="fill-yellow" />
            </div>
          </div>
        </div>
        <p className="text-base w-full  mb-5 ">
          Купували сину ігрове крісло в подарунок. Якість супер, дуже зручне і
          чудово підтримує спину. Загалом, подарунком більш ніж задоволені
        </p>

        <div className=" flex items-center gap-[30px]">
          <Button
            className=" !w-fit !bg-transparent !p-0 m-0  !text-gray "
            onClick={handleDisplayingForm}
          >
            <Icon name="review-chat" />
            Відповісти
          </Button>
          <Button className=" !w-fit !bg-transparent !p-0 m-0 !text-gray">
            <Icon name="Close" />
            Приховати відповіді
          </Button>

          <Button className=" !w-fit !bg-transparent !p-0 m-0 !text-gray">
            <Icon name="Like" /> Корисний відгук:<span>0</span>
          </Button>
        </div>
      </div>
    </>
  );
};
