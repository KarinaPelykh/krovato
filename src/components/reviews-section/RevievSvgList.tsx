import clsx from "clsx";
import { Icon } from "../ui";

type ReviewSvgListProps = {
  className?: string;
  rate?: number;
  handelRate?: (currentRate: number) => void;
};

export const ReviewSvgList = ({
  className,
  handelRate,
  rate = 0,
}: ReviewSvgListProps) => (
  <ul className="flex">
    {[1, 2, 3, 4, 5].map((i) => {
      const currentRate = i;
      return (
        <li key={i}>
          <label>
            {handelRate && (
              <input
                type="radio"
                name="rate"
                className="hidden"
                value={currentRate}
                onClick={() => handelRate(currentRate)}
              />
            )}

            <Icon
              name="star"
              className={clsx(
                currentRate <= rate ? "fill-yellow stroke-none" : className
              )}
            />
          </label>
        </li>
      );
    })}
  </ul>
);
