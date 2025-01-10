"use client"

import { ChangeEvent, ComponentProps, forwardRef, Ref, useState } from "react"
import styles from "./Check.module.scss"
import { Button } from ".."

type Props = ComponentProps<"input"> & {
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
         onInput,
         ...attributes
      }: Props,
      ref: Ref<HTMLInputElement>,
   ) => {
      const [isChecked, setIsChecked] = useState(checked)

      const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
         onInput && onInput(event)
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
