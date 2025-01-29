import clsx from "clsx";
import { Icon } from "../ui";
type HeadingFilterProps = {
  title: string;
  wrapperClassName?: string;
  iconClassName?: string;
  textClassName?: string;
  isBorder?: boolean;
};
export const HeadingFilter = ({
  title,
  wrapperClassName,
  iconClassName,
  textClassName,
  isBorder,
}: HeadingFilterProps) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-between p-5",
        wrapperClassName,
        isBorder ? "border border-x-0 border-b-0 border-t-gray-light " : ""
      )}
    >
      <span
        className={clsx(
          "text-black font-semibold text-ms",
          textClassName && textClassName
        )}
      >
        {title}
      </span>
      <Icon className={clsx("mr-[15px]", iconClassName)} name="close" />
    </div>
  );
};
