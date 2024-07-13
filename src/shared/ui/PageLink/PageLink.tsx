import { HTMLAttributes, ReactNode } from "react";
import styles from "../../lib/styles/container.module.scss"
import Link from "next/link";

interface LinkProps {
   variant?: "outlined" | "filled" | "none";
   color?: "primary" | "secondary";
   icon?: ReactNode;
   href: string,
   defaultHover?: boolean
   hasLeftIcon?: boolean;
   hasRightIcon?: boolean;
}

type LinkFullProps = LinkProps & HTMLAttributes<HTMLAnchorElement>;

export const PageLink = ({
   variant = "filled",
   color = "secondary",
   icon,
   href,
   defaultHover = true,
   hasLeftIcon = false,
   hasRightIcon = false,
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
         {hasLeftIcon && icon}
         {children}
         {hasRightIcon && icon}
      </Link>
   );
};
