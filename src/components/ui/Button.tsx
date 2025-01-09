import clsx from "clsx";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
};
export const Button = ({ children, className, onClick, type }: ButtonProps) => {
  return (
    <button className={clsx(className)} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
