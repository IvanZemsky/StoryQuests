"use client"

import { ComponentProps } from "react"
import styles from "./styles.module.scss"
import cn from "classnames"
import { SwitcherGroupContext } from "./context"
import { SwitcherGroupCheck } from "./SwitcherGroupCheck"

type Props = ComponentProps<"input"> & {
   variant?: "row" | "column"
}

export const SwitcherGroup = (props: Props) => {
   const { variant = "row", className, name, onChange, value = "", children } = props

   return (
      <SwitcherGroupContext.Provider value={{ value, name, onChange }}>
         <div className={cn(styles.content, className, styles[variant])}>{children}</div>
      </SwitcherGroupContext.Provider>
   )
}

SwitcherGroup.Check = SwitcherGroupCheck
