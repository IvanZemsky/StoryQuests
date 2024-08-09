"use client"

import { forwardRef, Ref, TextareaHTMLAttributes } from "react"
import styles from "./Textarea.module.scss"
import { useInput } from "../../lib"

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
   counter?: boolean
   value?: string
   onChange?: (...args: any) => any
}

export const Textarea = forwardRef(
   (
      props: Props,
      ref: Ref<HTMLTextAreaElement>,
   ) => {
      const { counter, className, maxLength, onChange, value, ...attributes } = props

      const [inputValue, handleChange, symbolsLeft] = useInput(
         maxLength,
         value,
         onChange,
      )

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
