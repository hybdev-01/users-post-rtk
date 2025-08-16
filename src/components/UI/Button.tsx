import type { MouseEvent, ReactNode } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  isEmpty?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  className,
  children,
  isEmpty,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles["button"], className, isEmpty && styles["empty"])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
