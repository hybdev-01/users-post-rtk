import type { ReactNode } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  isEmpty?: boolean;
}

export const Button = ({ className, children, isEmpty }: ButtonProps) => {
  return (
    <button
      className={clsx(styles["button"], className, isEmpty && styles["empty"])}
    >
      {children}
    </button>
  );
};

export default Button;
