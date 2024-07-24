import { AnchorHTMLAttributes, ReactNode } from "react"
import styles from "../styles/container.module.scss"
import Link from "next/link"

interface LinkProps {
   variant?: "outlined" | "filled"
   color?: "primary" | "secondary"
   defaultHover?: boolean
   href: string
   leftIcon?: ReactNode
   rightIcon?: ReactNode
}

type LinkFullProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>

export const PageLink = ({
   variant = "outlined",
   color = "secondary",
   href,
   defaultHover = true,
   leftIcon,
   rightIcon,
   children,
   className,
   ...attributes
}: LinkFullProps) => {
   return (
      <Link
         href={href}
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
      </Link>
   )
}
