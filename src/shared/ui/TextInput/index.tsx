"use client"

import { ComponentProps, forwardRef, Ref } from "react"
import styles from "./styles.module.scss"
import { useInput } from "../../lib"
import cn from "classnames"

type Props = ComponentProps<"input"> & {
   variant?: "outlined" | "filled"
   counter?: boolean
   value?: string
   onChange?: (...args: any) => any
}

export const TextInput = forwardRef((props: Props, ref: Ref<HTMLInputElement>) => {
   const {
      variant = "filled",
      counter,
      className,
      maxLength,
      onChange,
      value,
      ...attributes
   } = props

   const [inputValue, handleChange, symbolsLeft] = useInput(maxLength, value, onChange)

   console.log("input", value)

   return (
      <div
         className={cn(styles.wrap, styles[variant], className, {
            [styles.withCounter]: counter,
         })}
      >
         <input
            className={styles.input}
            type="text"
            onChange={handleChange}
            ref={ref}
            {...attributes}
            defaultValue={inputValue}
         />
         {counter && <div className={styles.counter}>{symbolsLeft}</div>}
      </div>
   )
})

TextInput.displayName = "TextInput"
