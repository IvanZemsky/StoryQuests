"use client"

import { forwardRef, InputHTMLAttributes, Ref } from "react"
import styles from "./TextInput.module.scss"
import { useInput } from "../../lib"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
   counter?: boolean
   value?: string
   onChange?: (...args: any) => any
}

export const TextInput = forwardRef(
   (
      { counter, className, maxLength, onChange, value, ...attributes }: Props,
      ref: Ref<HTMLInputElement>,
   ) => {
      const [inputValue, handleChange, symbolsLeft] = useInput(
         maxLength,
         value,
         onChange,
      )

      return (
         <div className={[styles.wrap, className].join(" ")}>
            <input
               className={styles.input}
               type="text"
               value={inputValue}
               onChange={handleChange}
               ref={ref}
               {...attributes}
            />
            {counter && <div className={styles.counter}>{symbolsLeft}</div>}
         </div>
      )
   },
)

TextInput.displayName = "TextInput";
