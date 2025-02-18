"use client"

import { ComponentProps, forwardRef } from "react"
import styles from "./styles.module.scss"
import { useInput } from "../../lib"
import cn from "classnames"

type Props = {
   counter?: boolean
} & ComponentProps<"textarea">

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(
   ({ counter, className, maxLength, onChange, value, ...attributes }, ref) => {
      const [inputValue, handleChange, symbolsLeft] = useInput(
         maxLength,
         value || "",
         onChange,
      )

      return (
         <div className={cn(styles.wrap, className)}>
            <textarea
               {...attributes}
               className={styles.textarea}
               onChange={handleChange}
               ref={ref}
               defaultValue={inputValue}
            ></textarea>
            {counter && <div className={styles.counter}>{symbolsLeft}</div>}
         </div>
      )
   },
)

Textarea.displayName = "Textarea"
