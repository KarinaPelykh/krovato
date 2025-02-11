import clsx from "clsx";
import { Icon } from "./Icon";
import { ReactNode } from "react";
import { Link as NavLink } from "react-router-dom";

type LinkProps = {
  to: string;
  iconClassName?: string;
  iconName?: string;
  linkClassName?: string;
  children: ReactNode;
};

export const Link = ({
  to,
  iconClassName,
  iconName = "arrow-1",
  linkClassName,
  children,
}: LinkProps) => {
  return (
    <NavLink
      to={to}
      className={clsx("text-yellow gap-2.5 items-center flex", linkClassName)}
    >
      {children}
      <Icon className={clsx("fill-yellow", iconClassName)} name={iconName} />
    </NavLink>
  );
};
