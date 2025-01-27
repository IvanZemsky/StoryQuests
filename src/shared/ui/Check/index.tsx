import {
   ComponentProps,
   forwardRef,
   MouseEventHandler,
   Ref,
} from "react"
import styles from "./styles.module.scss"
import { Button } from ".."
import cn from "classnames"

export type CheckProps = ComponentProps<"input"> & {
   text: string
   fillContainer?: boolean
   onDoubleClick?: MouseEventHandler<HTMLDivElement>
}

export const Check = forwardRef((props: CheckProps, ref: Ref<HTMLInputElement>) => {
   const {
      fillContainer = false,
      checked = false,
      text,
      className,
      onChange,
      onDoubleClick,
      ...attributes
   } = props

   return (
      <div
         className={cn(styles.wrap, { [styles.fillContainer]: fillContainer }, className)}
         onDoubleClick={onDoubleClick}
      >
         <input
            type="radio"
            checked={checked}
            onChange={onChange}
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
