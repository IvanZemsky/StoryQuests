"use client"

import { ComponentProps, forwardRef, Ref } from "react"
import styles from "./Textarea.module.scss"
import { useInput } from "../../lib"

type Props = {
   counter?: boolean
   value?: string
   onChange?: (...args: any) => any
} & ComponentProps<"textarea">

export const Textarea = forwardRef(
   (
      { counter, className, maxLength, onChange, value, ...attributes }: Props,
      ref: Ref<HTMLTextAreaElement>,
   ) => {
      const [inputValue, handleChange, symbolsLeft] = useInput(maxLength, value, onChange)

      return (
         <div className={[styles.wrap, className].join(" ")}>
            <textarea
               className={styles.textarea}
               value={inputValue}
               onChange={handleChange}
               ref={ref}
               {...attributes}
            ></textarea>
            {counter && <div className={styles.counter}>{symbolsLeft}</div>}
         </div>
      )
   },
)

Textarea.displayName = "Textarea"
