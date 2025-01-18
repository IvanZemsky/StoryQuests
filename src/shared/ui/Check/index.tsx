"use client"

import {
   ChangeEvent,
   ComponentProps,
   forwardRef,
   MouseEventHandler,
   Ref,
   useState,
} from "react"
import styles from "./styles.module.scss"
import { Button } from ".."
import cn from "classnames"

type Props = ComponentProps<"input"> & {
   text: string
   fillContainer?: boolean
   onDoubleClick?: MouseEventHandler<HTMLDivElement>
}

export const Check = forwardRef((props: Props, ref: Ref<HTMLInputElement>) => {
   const {
      fillContainer = false,
      checked = false,
      text,
      className,
      onInput,
      onDoubleClick,
      ...attributes
   } = props

   const [isChecked, setIsChecked] = useState(checked)

   const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
      onInput?.(event)
      setIsChecked(checked)
   }

   return (
      <div
         className={cn(styles.wrap, { [styles.fillContainer]: fillContainer }, className)}
         onDoubleClick={onDoubleClick}
      >
         <input
            type="radio"
            defaultChecked={isChecked}
            onInput={handleInput}
            {...attributes}
            ref={ref}
         />
         <label htmlFor={attributes.id}>
            <Button variant="filled" type="button" className={styles.checkBtn}>
               {text}
            </Button>
         </label>
      </div>
   )
})

Check.displayName = "Check"
