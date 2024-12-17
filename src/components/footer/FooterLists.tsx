import clsx from "clsx";
import { Link } from "react-router-dom";

type ListProps = {
  baseInfo: string[];
  isHide?: string;
};
export const FooterLists = ({ baseInfo, isHide }: ListProps) => {
  return (
    <ul
      className={clsx(
        "flex flex-col  items-center desktop:items-start transition-all delay-300 duration-300 ease-linear desktop:transition-none",
        isHide
      )}
    >
      {baseInfo?.map((item, i) => (
        <li key={i} className="first:mt-5  mb-5 text-white-light">
          <Link to="/"> {item}</Link>
        </li>
      ))}
    </ul>
  );
};
