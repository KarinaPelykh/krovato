import { useState } from "react";
import { Icon } from "../ui";
import { List } from "./List";
import { clsx } from "clsx";

type FooterInfoProps = { category: string[]; title: string };

export const FooterInfo = ({ category, title }: FooterInfoProps) => {
  const [isHide, setIsHide] = useState(false);

  const handleHideList = () => {
    setIsHide(!isHide);
  };

  return (
    <div className="mb-[5px] w-full">
      <button
        className="flex justify-center  gap-5 w-full py-[11px] bg-black text-white desktop:bg-transparent"
        onClick={handleHideList}
      >
        <p>{title}</p>
        <Icon
          name="select"
          className={clsx(
            "translate-all delay-300 duration-300 desktop:hidden",
            isHide ? "rotate-0" : "rotate-180"
          )}
        />
      </button>
      <div className="desktop:hidden">
        {isHide && <List category={category} />}
      </div>

      <div className="hidden desktop:flex">
        <List category={category} />
      </div>
    </div>
  );
};
