import { ButtonHTMLAttributes, ReactNode } from "react"
import styles from "../styles/button.module.scss"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
   variant?: "outlined" | "filled" | "gradient"
   color?: "primary" | "secondary"
   defaultHover?: boolean
   uppercase?: boolean
   leftIcon?: ReactNode
   rightIcon?: ReactNode
}

export const Button = ({
   variant = "outlined",
   color = "secondary",
   defaultHover = true,
   leftIcon,
   rightIcon,
   children,
   className,
   uppercase = false,
   type = "button",
   ...attributes
}: Props) => {
   return (
      <button
         className={[
            styles.container,
            styles[variant],
            styles[color],
            defaultHover && styles.defaultHover,
            children && styles.minWidth,
            uppercase && styles.uppercase,
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
