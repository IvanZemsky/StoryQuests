"use client"

import { ComponentProps, forwardRef, Ref, useState } from "react"
import { Button } from "../Button/Button"
import { Fade } from "../Transitions/Fade/Fade"
import OpenArrowBottomIcon from "@/shared/assets/icons/arrow-bottom.svg"
import styles from "./Select.module.scss"
import { Check } from "../Check/Check"
import { CheckData } from "@/shared/model"

type Props = ComponentProps<"div"> & {
   group: CheckData[]
   title: string
}

export const Select = forwardRef(
   (
      { title, group, className, children, ...attributes }: Props,
      ref: Ref<HTMLInputElement>,
   ) => {
      const [current, setCurrent] = useState(title)
      const [isOpen, setIsOpen] = useState(false)

      const handleOpenClick = () => {
         setIsOpen(!isOpen)
      }

      const handleCheck = (text: string) => () => {
         setCurrent(text)
         setIsOpen(false)
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
               {current}
            </Button>
            <Fade inProp={isOpen} timeout={300}>
               <div className={styles.options}>
                  {group?.map((check) => (
                     <Check
                        key={check.id}
                        onInput={handleCheck(check.text)}
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
   },
)

Select.displayName = "Select"
