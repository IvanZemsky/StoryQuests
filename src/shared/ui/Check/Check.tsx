"use client"

import { ComponentProps, forwardRef, Ref, useState } from "react"
import styles from "./Check.module.scss"
import { Button } from ".."

export type CheckProps =  {
   text: string
   fillContainer?: boolean
} & ComponentProps<"input">

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

      const handleInput = () => {
         setIsChecked(checked)
      }

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
               onInput={handleInput}
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
