"use client"

import { ComponentProps, forwardRef } from "react"
import styles from "./styles.module.scss"
import { useInput } from "../../lib"
import cn from "classnames"

type Props = {
   variant?: "outlined" | "filled"
   counter?: boolean
} & ComponentProps<"input">

export const TextInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
   const {
      variant = "filled",
      counter,
      className,
      maxLength,
      onChange,
      value,
      ...attributes
   } = props

   const [inputValue, handleChange, symbolsLeft] = useInput(
      maxLength,
      value || "",
      onChange,
   )

   return (
      <div
         className={cn(styles.wrap, styles[variant], className, {
            [styles.withCounter]: counter,
         })}
      >
         <input
            {...attributes}
            className={styles.input}
            onChange={handleChange}
            ref={ref}
            defaultValue={inputValue}
         />
         {counter && <div className={styles.counter}>{symbolsLeft}</div>}
      </div>
   )
})

TextInput.displayName = "TextInput"
