import { Button } from "../../ui/Button";
import icons from "/sprite.svg";

export const Buttons = () => {
  const data = ["favorite", "basket"];
  return (
    <ul className="flex gap-5">
      {data.map((icon, i) => {
        return (
          <li key={i} className="">
            <Button>
              <svg className="size-[50px]">
                <use xlinkHref={icons + `#${icon}`}></use>
              </svg>
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
