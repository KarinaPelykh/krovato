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
    <button
      className={clsx(
        "bg-yellow flex  gap-[15px] p-[13px] justify-center w-full items-center text-white text-ms rounded-xs ",
        className && className
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
