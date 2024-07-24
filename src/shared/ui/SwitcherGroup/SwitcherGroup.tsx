import { HTMLAttributes } from "react"
import styles from "./SwitcherGroup.module.scss"

interface SwitcherGroupProps {
   variant?: "row" | "column"
}

type SwitcherGroupFullProps = SwitcherGroupProps & HTMLAttributes<HTMLDivElement>

export const SwitcherGroup = ({
   variant = "row",
   children,
   className,
   ...attributes
}: SwitcherGroupFullProps) => {
   return (
      <div className={[styles.content, className, styles[variant]].join(" ")} {...attributes}>
         {children}
      </div>
   )
}

export default SwitcherGroup
