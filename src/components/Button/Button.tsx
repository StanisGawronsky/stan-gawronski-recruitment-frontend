import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.styles.module.scss";
import clsx from "clsx";
import { Button as RadixButton } from "@radix-ui/themes";
interface ButtonProps {
  className?: string;
  children?: ReactNode;
  onClick?: VoidFunction;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export const Button = ({
  children,
  onClick,
  type = "button",
  className,
}: ButtonProps) => {
  return (
    <RadixButton
      onClick={onClick}
      className={clsx(styles.button, className)}
      type={type}
    >
      {children}
    </RadixButton>
  );
};
