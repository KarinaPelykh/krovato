import clsx from "clsx";
import icon from "/sprite.svg";

type IconProps = {
  name: string;
  className?: string;
};
export const Icon = ({ className, name }: IconProps) => {
  return (
    <svg className={clsx("size-6", className)}>
      <use xlinkHref={icon + `#${name}`}></use>
    </svg>
  );
};
