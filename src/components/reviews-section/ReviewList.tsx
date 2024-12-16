import { Icon } from "../ui";
import { ReviewSvgList } from "./RevievSvgList";

export const ReviewList = () => {
  return (
    <li className="bg-white p-[20px] desktop:p-[30px] rounded-xs w-full tablet:w-[450px]  h-[370px]">
      <div className="flex mb-[30px]">
        <Icon className="size-[50px] mr-[20px]" name="avatar" />
        <div>
          <div className="flex gap-2.5 desktop:gap-20 justify-between items-center">
            <span className="text-black text-base ">Іван Стедниця</span>
            <span>
              <span>20.12.2022</span>
            </span>
          </div>

          <ReviewSvgList />
        </div>
      </div>
      <p className="mb-[30px] text-base  desktop:w-[370px]  h-[150px] overflow-y-auto text-ellipsis whitespace-wrap">
        Хочу відзначити злагоджену та чітку роботу всіх співробітників, з ким
        довелося контактувати під час вибору та купівлі дивана Orange-Line Родео
        SF17-LX6-PLNGR. Величезну допомогу при виборі надала спеціалістка з
        продажу Уляна...
      </p>
      <div className="flex items-center">
        <img
          className="rounded-full size-[50px] mr-2.5"
          src="/sofa.png"
          alt=""
        />
        <p className="text-gray  text-xl desktop:text-xl">
          Диван Orange-Line Родео SF ...
        </p>
      </div>
    </li>
  );
};
