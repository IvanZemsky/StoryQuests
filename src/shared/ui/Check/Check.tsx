"use client"

import { forwardRef, InputHTMLAttributes, Ref, useEffect, useState } from "react"
import styles from "./Check.module.scss"
import { Button } from ".."

export interface CheckProps extends InputHTMLAttributes<HTMLInputElement> {
   text: string
   fillContainer?: boolean
}

export const Check = forwardRef(
   (
      {
         fillContainer = false,
         checked = false,
         text,
         className,
         ...attributes
      }: CheckProps,
      ref: Ref<HTMLInputElement>,
   ) => {
      const [isChecked, setIsChecked] = useState(checked)

      return (
         <div
            className={[
               styles.wrap,
               fillContainer && styles.fillContainer,
               className,
            ].join(" ")}
         >
            <input
               type="radio"
               defaultChecked={isChecked}
               onInput={() => setIsChecked(checked)}
               {...attributes}
               ref={ref}
            />
            <label htmlFor={attributes.id}>
               <Button variant="filled" type="button">
                  {text}
               </Button>
            </label>
         </div>
      )
   },
)

Check.displayName = "Check"
