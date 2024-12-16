import { Icon } from "../../ui";
import { Button } from "../../ui/Button";

const data = ["favorite", "basket"];

export const ButtonsControls = () => (
  <ul className="hidden desktop:flex gap-5">
    {data.map((icon, i) => {
      return (
        <li key={i}>
          <Button>
            <Icon className="size-[50px]" name={icon} />
          </Button>
        </li>
      );
    })}
  </ul>
);
