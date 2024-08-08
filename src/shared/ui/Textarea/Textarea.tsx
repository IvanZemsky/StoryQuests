'use client'

import { forwardRef, Ref, TextareaHTMLAttributes } from "react"
import styles from "./Textarea.module.scss"
import { useInput } from "../../lib"

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
   counter?: boolean
   value?: string
   changeCallback?: (...args: any) => any
}

export const Textarea = forwardRef(({ counter, className, maxLength, changeCallback, value, ...attributes }: Props, ref: Ref<HTMLTextAreaElement>) => {
   const [inputValue, handleChange, symbolsLeft] = useInput(maxLength, value, changeCallback)

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
})
