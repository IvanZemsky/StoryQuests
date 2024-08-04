import { HTMLAttributes } from "react"
import styles from "./SwitcherGroup.module.scss"

interface Props extends HTMLAttributes<HTMLDivElement> {
   variant?: "row" | "column"
}
export const SwitcherGroup = ({
   variant = "row",
   children,
   className,
   ...attributes
}: Props) => {
   return (
      <div className={[styles.content, className, styles[variant]].join(" ")} {...attributes}>
         {children}
      </div>
   )
}

export default SwitcherGroup
