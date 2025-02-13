import { HTMLAttributes } from "react"
import styles from "./styles.module.scss"
import cn from "classnames"

export const Wrapper = ({
   children,
   className,
   ...attributes
}: HTMLAttributes<HTMLDivElement>) => {
   return (
      <div className={cn(styles.wrapper, className)} {...attributes}>
         {children}
      </div>
   )
}
