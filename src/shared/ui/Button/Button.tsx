import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "../../lib/styles/container.module.scss"

interface ButtonProps {
   variant?: "outlined" | "filled" | "none";
   color?: "primary" | "secondary";
   icon?: ReactNode;
   defaultHover?: boolean
   hasLeftIcon?: boolean;
   hasRightIcon?: boolean;
}

type ButtonFullProps = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
   variant = "filled",
   color = "secondary",
   icon,
   defaultHover = true,
   hasLeftIcon = false,
   hasRightIcon = false,
   children,
   className,
   ...attributes
}: ButtonFullProps) => {
   return (
      <button
      className={[
         styles.container,
         styles[variant],
         styles[color],
         defaultHover && styles.defaultHover,
         children && styles.minWidth,
         className,
      ].join(" ")}
         {...attributes}
      >
         {hasLeftIcon && icon}
         {children}
         {hasRightIcon && icon}
      </button>
   );
};
