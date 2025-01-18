import { HTMLAttributes } from "react"
import styles from "./styles.module.scss"

export const Wrapper = ({
   children,
   className,
   ...attributes
}: HTMLAttributes<HTMLDivElement>) => {
   return (
      <div className={[styles.wrapper, className].join(" ")} {...attributes}>
         {children}
      </div>
   )
}
