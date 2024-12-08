import { ReviewSvgList } from "./RevievSvgList";
import icon from "/sprite.svg";

export const ReviewList = () => {
  const data = [1, 2, 3, 4, 5, 6, 7];
  return (
    <ul className="flex gap-[30px] ">
      {data.map((i) => (
        <li
          key={i}
          className="bg-white p-[30px] rounded-xs w-[450px] h-[370px]"
        >
          <div className="flex mb-[30px]">
            <svg className="size-[50px] mr-[20px]">
              <use xlinkHref={icon + "#avatar"}></use>
            </svg>
            <div>
              <div className="flex justify-between items-center">
                <span className="text-black text-base mr-[130px]">
                  Іван Стедниця
                </span>
                <span>
                  <span>20.12.2022</span>
                </span>
              </div>

              <ReviewSvgList />
            </div>
          </div>
          <p className="mb-[30px] tex-base">
            Хочу відзначити злагоджену та чітку роботу всіх співробітників, з
            ким довелося контактувати під час вибору та купівлі дивана
            Orange-Line Родео SF17-LX6-PLNGR. Величезну допомогу при виборі
            надала спеціалістка з продажу Уляна...
          </p>
          <div className="flex items-center">
            <img
              className="rounded-full size-[50px] mr-2.5"
              src="/sofa.png"
              alt=""
            />
            <p className="text-gray text-xl">Диван Orange-Line Родео SF ...</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
