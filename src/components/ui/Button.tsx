import clsx from "clsx";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};
export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button className={clsx(className)} onClick={onClick}>
      {children}
    </button>
  );
};
