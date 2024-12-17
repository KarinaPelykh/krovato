import { Icon } from "../../ui";
import { Button } from "../../ui/Button";

const data = ["favorite", "basket", "poisk"];

export const ButtonsControls = () => (
  <ul className="  items-center  flex gap-5">
    {data.map((icon, i) => {
      return (
        <li key={i} className="desktop:last:hidden">
          <Button>
            <Icon className="size-[50px]" name={icon} />
          </Button>
        </li>
      );
    })}
  </ul>
);
