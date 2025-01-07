import { ComponentProps, ReactNode } from "react"
import styles from "../styles/button.module.scss"
import Link from "next/link"
import cn from "classnames"

type Props = {
   variant?: "outlined" | "filled" | "gradient"
   color?: "primary" | "secondary"
   defaultHover?: boolean
   href: string
   uppercase?: boolean
   leftIcon?: ReactNode
   rightIcon?: ReactNode
} & ComponentProps<"a">

export const ButtonLink = ({
   variant = "outlined",
   color = "secondary",
   href,
   defaultHover = true,
   leftIcon,
   rightIcon,
   children,
   className,
   uppercase = false,
   ...attributes
}: Props) => {
   return (
      <Link
         href={href}
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
      </Link>
   )
}
