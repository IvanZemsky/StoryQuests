"use client"

import { InputHTMLAttributes, useState } from "react"
import styles from "./Check.module.scss"
import { Button } from ".."

interface Props extends InputHTMLAttributes<HTMLInputElement> {
   text: string
   fillContainer?: boolean
}

export const Check = ({
   fillContainer = false,
   checked = false,
   text,
   ...attributes
}: Props) => {
   const [isChecked, setIsChecked] = useState(checked)

   return (
      <div className={[styles.wrap, fillContainer && styles.fillContainer].join(" ")}>
         <input
            type="radio"
            defaultChecked={isChecked}
            onInput={() => setIsChecked(checked)}
            {...attributes}
         />
         <label htmlFor={attributes.id}>
            <Button variant="filled" type="button">
               {text}
            </Button>
         </label>
      </div>
   )
}

export default Check
