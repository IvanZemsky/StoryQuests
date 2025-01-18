import { ComponentProps, forwardRef, Ref } from "react"
import styles from "./styles.module.scss"
import { Check } from "../Check"
import { CheckData } from "@/shared/model"

type Props = {
   variant?: "row" | "column"
   group?: CheckData[]
} & ComponentProps<"input">

export const SwitcherGroup = forwardRef((props: Props, ref: Ref<HTMLInputElement>) => {
   const { variant = "row", group, className, onClick, children, ...attributes } = props

   return (
      <div className={[styles.content, className, styles[variant]].join(" ")}>
         {group?.map((check) => (
            <Check key={check.id} {...check} {...attributes} ref={ref} />
         ))}
         {children}
      </div>
   )
})

SwitcherGroup.displayName = "SwitcherGroup"
