import { Link } from "react-router-dom";
import clsx from "clsx";
import { Icon } from "./Icon";
type LogoProps = {
  nameLogo: string;
  className?: string;
};

export const Logo = ({ nameLogo, className }: LogoProps) => {
  return (
    <Link to="/" className={clsx(className)}>
      <Icon className=" w-[185px] desktop:w-[249px] h-[50px]" name={nameLogo} />
    </Link>
  );
};
