import clsx from "clsx";
import { Icon } from "../ui";

type DeliveryInfoSectionProps = {
  title: string;
  list: string[];
  text?: string;
  description: string;
  images: string;
  textClassName?: string;
  text2?: string;
  text3?: string;
  info?: string;
  bgClassName?: string;
};

export const DeliveryInfoSection = ({
  title,
  list,
  text,
  description,
  images,
  textClassName,
  text2,
  text3,
  info,
  bgClassName,
}: DeliveryInfoSectionProps) => {
  return (
    <section
      className={clsx(
        "pb-[60px] desktop:pb-[70px]",
        bgClassName ? bgClassName : ""
      )}
    >
      <div className="container">
        <div className=" desktop:flex desktop:justify-between ">
          <div className="mb-10 desktop:w-[520px]">
            <h2 className="text-black font-semibold mb-10 text-1xl">{title}</h2>
            <ul className="flex gap-[30px] flex-col mb-[30px]">
              {list.map((text, i) => (
                <li className="flex gap-5" key={i}>
                  <Icon name="deliver" className="size-[70px]" />
                  <p className="text-black text-xl font-semibold w-[320px]">
                    {text}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mb-[30px] text-black text-xl font-semibold">{text}</p>
            <p className="text-black text-xl font-semibold">{description}</p>
          </div>
          <div className="relative">
            <img
              className="w-[410px] h-[414px] desktop:w-full desktop:h-[750px] block"
              src={images}
            />
            <div
              className={clsx(
                "rounded-full absolute bottom-0 left-0 size-[250px] bg-yellow flex items-center justify-center flex-col desktop:size-[420px]",
                bgClassName ? ":desktop:top-[300px]" : ""
              )}
            >
              <p className="text-white font-semibold  text-xs text-center w-[200px] desktop:text-lg desktop:w-[340px] desktop:mb-5 ">
                {text2}
              </p>
              <p className="text-white  text-s text-center w-[200px] desktop:text-xl desktop:w-[340px] ">
                {text3}
              </p>

              <div className="rounded-full size-[244px] bg-transparent border-[3px] border-white absolute left-0 top-0 flex items-center justify-center flex-col desktop:size-[410px]"></div>
            </div>
          </div>
        </div>
        <p
          className={clsx(
            "text-black text-base mt-[104px] ",
            textClassName ? textClassName : "hidden"
          )}
        >
          {info}
        </p>
      </div>
    </section>
  );
};
