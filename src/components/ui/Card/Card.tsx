import clsx from "clsx";
import { ReviewSvgList } from "../../reviews-section/RevievSvgList";
import { Icon } from "../Icon";
type CardProps = {
  name: string;
  product: string;
  description: string;
  textClassName?: string;
};

export const Card = ({
  name,
  product,
  description,
  textClassName,
}: CardProps) => {
  return (
    <article
      className={clsx(
        "bg-white p-[20px] desktop:p-[30px] rounded-xs w-[320px] mobile:w-[350px] tablet:w-[450px]  h-[370px] desktop:w-fit shadow-1xl ",
        textClassName ? "h-auto" : ""
      )}
    >
      <div className="flex mb-[30px]">
        <Icon className="size-[50px] mr-5" name="avatar" />
        <div className="w-full desktop:relative">
          <div className="flex justify-between items-center w-full">
            <span className="text-black text-base">{name}</span>
            <span>20.12.2022</span>
          </div>
          <div
            className={clsx(
              textClassName
                ? "desktop:absolute desktop:top-0 desktop:right-24"
                : ""
            )}
          >
            <ReviewSvgList className="fill-yellow" />
          </div>
        </div>
      </div>
      <p
        className={clsx(
          "mb-[30px] text-base w-full  desktop:w-[370px]  h-[150px] overflow-y-auto text-ellipsis whitespace-wrap",
          textClassName ? textClassName : ""
        )}
      >
        {description}
      </p>
      <div className="flex items-center">
        <img
          className="rounded-full size-[50px] mr-2.5"
          src="/sofa.png"
          alt="sofa"
        />
        <p className="text-gray  text-xl desktop:text-xl">{product}</p>
      </div>
    </article>
  );
};
