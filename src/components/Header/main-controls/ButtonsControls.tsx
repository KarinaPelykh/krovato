import { Icon } from "../../ui";
import { Button } from "../../ui/Button";

const data = ["poisk", "favorite", "basket"];
type ButtonsControlsProps = {
  isOpenCatalog: boolean;
  onClick: () => void;
};

export const ButtonsControls = ({
  isOpenCatalog,
  onClick,
}: ButtonsControlsProps) => (
  <ul className="items-center  flex gap-5">
    {data.map((icon, i) => {
      return (
        <li key={i} className="desktop:first:hidden">
          <Button onClick={onClick}>
            <Icon
              className="size-[50px]"
              name={isOpenCatalog && icon === "poisk" ? "close-1" : icon}
            />
          </Button>
        </li>
      );
    })}
  </ul>
);
