import { Link } from "react-router-dom";
import Icon from "/sprite.svg";
export const Logo = () => {
  return (
    <Link to="/">
      <svg>
        <use xlinkHref={Icon + "#logo"}></use>
      </svg>
    </Link>
  );
};
