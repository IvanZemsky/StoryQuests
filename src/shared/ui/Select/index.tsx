"use client"

import { ChangeEvent, ComponentProps, forwardRef, Ref, useState } from "react"
import { Button } from "../Button"
import { Fade } from "../Transitions/Fade"
import OpenArrowBottomIcon from "@/shared/assets/icons/arrow-bottom.svg"
import styles from "./styles.module.scss"
import { Check } from "../Check"
import { CheckData } from "@/shared/model"
import { useOutsideClick } from "@/shared/lib"

type Props = ComponentProps<"input"> & {
   group: CheckData[]
   title: string
}

export const Select = forwardRef((props: Props, ref: Ref<HTMLInputElement>) => {
   const { title, group, className, children, value, onChange, ...attributes } = props

   const [isOpen, setIsOpen] = useState(false)

   const selectRef = useOutsideClick<HTMLDivElement>(() => setIsOpen(false))

   const handleOpenClick = () => {
      setIsOpen(!isOpen)
   }

   const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event)
      setIsOpen(false)
   }

   return (
      <div
         className={[styles.wrap, className, isOpen && styles.opened].join(" ")}
         ref={selectRef}
      >
         <Button
            onClick={handleOpenClick}
            defaultHover={false}
            variant="filled"
            rightIcon={<OpenArrowBottomIcon />}
         >
            {value || title}
         </Button>
         <Fade inProp={isOpen} timeout={300}>
            <div className={styles.options}>
               {group?.map((check) => (
                  <Check
                     key={check.id}
                     onInput={handleCheck}
                     {...check}
                     {...attributes}
                     ref={ref}
                  />
               ))}
               {children}
            </div>
         </Fade>
      </div>
   )
})

Select.displayName = "Select"
