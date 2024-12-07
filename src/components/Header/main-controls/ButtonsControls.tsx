import { Button } from "../../ui/Button";
import icons from "/sprite.svg";

const data = ["favorite", "basket"];

export const ButtonsControls = () => (
  <ul className="flex gap-5">
    {data.map((icon, i) => {
      return (
        <li key={i}>
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
