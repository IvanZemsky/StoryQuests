import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
   variant?: "outlined" | "filled" | "none";
   color?: "primary" | "secondary";
}

type ButtonFullProps = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
   variant = 'filled',
   color = 'secondary',
   children,
   className,
   ...attributes
}: ButtonFullProps) => {
   return (
      <button
         className={[styles[variant], styles[color], className].join(" ")}
         {...attributes}
      >
         {children}
      </button>
   );
};
