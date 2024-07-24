import { ButtonHTMLAttributes, ReactNode } from "react"
import styles from "../styles/container.module.scss"

interface ButtonProps {
   variant?: "outlined" | "filled"
   color?: "primary" | "secondary"
   defaultHover?: boolean
   leftIcon?: ReactNode
   rightIcon?: ReactNode
}

type ButtonFullProps = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
   variant = "outlined",
   color = "secondary",
   defaultHover = true,
   leftIcon,
   rightIcon,
   children,
   className,
   type = "button",
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
         type={type}
         {...attributes}
      >
         <span
            className={[
               styles.content,
               (leftIcon || rightIcon) && !children && styles.icon,
            ].join(" ")}
         >
            {leftIcon}
            {children}
            {rightIcon}
         </span>
      </button>
   )
}
