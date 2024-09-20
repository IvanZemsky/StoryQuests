"use client"

import { forwardRef, HTMLAttributes, Ref, useState } from "react"
import { Button } from "../Button/Button"
import { Fade } from "../Transitions/Fade/Fade"
import OpenArrowBottomIcon from "@/shared/assets/icons/arrow-bottom.svg"
import styles from "./Select.module.scss"
import { Check, CheckProps } from "../Check/Check"

interface Props extends HTMLAttributes<HTMLDivElement> {
   group: CheckProps[]
   title: string
}

export const Select = forwardRef(
   (
      { title, group, className, children, ...attributes }: Props,
      ref: Ref<HTMLInputElement>,
   ) => {
      const [isOpen, setIsOpen] = useState(false)

      console.log(isOpen)

      const handleOpenClick = () => {
         setIsOpen(!isOpen)
      }

      return (
         <div
            className={[styles.wrap, className, isOpen && styles.opened].join(" ")}
            {...attributes}
         >
            <Button
               onClick={handleOpenClick}
               defaultHover={false}
               variant="filled"
               rightIcon={<OpenArrowBottomIcon />}
            >
               {title}
            </Button>
            <Fade inProp={isOpen} timeout={300}>
               <div className={styles.options}>
                  {group?.map((check) => (
                     <Check key={check.id} {...check} {...attributes} ref={ref} />
                  ))}
                  {children}
               </div>
            </Fade>
         </div>
      )
   },
)

Select.displayName = "Select"
