import { Link } from "react-router-dom";
import Icon from "/sprite.svg";
export const Logo = () => {
  return (
    <Link to="/">
      <svg className="w-[249px] ">
        <use xlinkHref={Icon + "#logo"}></use>
      </svg>
    </Link>
  );
};
