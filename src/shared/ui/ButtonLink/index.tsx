import { ComponentProps, ReactNode } from "react"
import styles from "../styles/button.module.scss"
import Link from "next/link"
import cn from "classnames"
import { Url } from "next/dist/shared/lib/router/router"

type Props = {
   variant?: "outlined" | "filled" | "gradient"
   color?: "primary" | "secondary"
   defaultHover?: boolean
   href: Url
   uppercase?: boolean
   disabled?: boolean
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
   disabled = false,
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
               [styles.disabled]: disabled,
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
