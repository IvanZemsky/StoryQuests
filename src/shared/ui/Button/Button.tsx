import { ButtonHTMLAttributes, ReactNode } from "react"
import styles from "../styles/button.module.scss"
import cn from "classnames"

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
         className={cn(
            styles.container,
            styles[variant],
            styles[color],
            {
               [styles.defaultHover]: defaultHover,
               [styles.minWidth]: children,
               [styles.uppercase]: uppercase,
            },
            className,
         )}
         type={type}
         {...attributes}
      >
         <span
            className={cn(styles.content, {
               [styles.icon]: (leftIcon || rightIcon) && !children,
            })}
         >
            {leftIcon}
            {children}
            {rightIcon}
         </span>
      </button>
   )
}
