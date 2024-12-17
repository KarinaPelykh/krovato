import { useState } from "react";
import { Icon } from "../ui";
import { FooterLists } from "./FooterLists";
import { clsx } from "clsx";

type FooterInfoProps = {
  baseInfo: string[];
  title: string;
};

export const FooterInfo = ({ baseInfo, title }: FooterInfoProps) => {
  const [isHide, setIsHide] = useState(false);

  const handleHideList = () => {
    setIsHide(!isHide);
  };

  return (
    <div
      className={clsx(
        "mb-[5px]  overflow-hidden  desktop:mb-0  transition-[height] delay-300 duration-300 ease-linear desktop:!h-full",
        isHide ? "h-full " : "h-[50px]"
      )}
    >
      <button
        className="   desktop:disabled:cursor-pointer flex justify-center items-center bg-black  desktop:bg-transparent gap-5 w-full py-[11px]  desktop:justify-start"
        onClick={handleHideList}
      >
        <p className="text-xl font-semibold text-white">{title}</p>
        <Icon
          name="select"
          className={clsx(
            "translate-all delay-300 duration-300 desktop:hidden",
            isHide ? "rotate-0" : "rotate-180"
          )}
        />
      </button>
      <div className="desktop:hidden">
        <FooterLists
          baseInfo={baseInfo}
          isHide={isHide ? "translate-y-0" : "translate-y-full"}
        />
      </div>

      <div className="hidden desktop:flex">
        <FooterLists baseInfo={baseInfo} />
      </div>
    </div>
  );
};
