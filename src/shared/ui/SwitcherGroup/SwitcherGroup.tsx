import { forwardRef, HTMLAttributes, Ref } from "react"
import styles from "./SwitcherGroup.module.scss"
import { Check, CheckProps } from "../Check/Check"

interface Props extends HTMLAttributes<HTMLInputElement> {
   variant?: "row" | "column"
   group?: CheckProps[]
}

export const SwitcherGroup = forwardRef(
   (
      { variant = "row", group, className, onClick, children, ...attributes }: Props,
      ref: Ref<HTMLInputElement>,
   ) => {
      return (
         <div className={[styles.content, className, styles[variant]].join(" ")}>
            {group?.map((check) => (
               <Check key={check.id} {...check} {...attributes}  ref={ref} />
            ))}
            {children}
         </div>
      )
   },
)

SwitcherGroup.displayName = "SwitcherGroup"
