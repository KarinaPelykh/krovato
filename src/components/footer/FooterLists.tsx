import clsx from "clsx";
import { Link } from "react-router-dom";

type FooterInfoList = {
  name: string;
  id: string;
  path: string;
};
type ListProps = {
  baseInfo: FooterInfoList[];
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
      {baseInfo?.map(({ name, path, id }) => (
        <li key={id} className="first:mt-5  mb-5 text-white-light">
          <Link to={path}> {name}</Link>
        </li>
      ))}
    </ul>
  );
};
