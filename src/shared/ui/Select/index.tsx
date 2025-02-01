"use client"

import { ChangeEvent, ComponentProps, useState } from "react"
import { Button } from "../Button"
import { Fade } from "../Transitions/Fade"
import OpenArrowBottomIcon from "@/shared/assets/icons/arrow-bottom.svg"
import styles from "./styles.module.scss"
import { useOutsideClick } from "@/shared/lib"
import { SelectContext } from "./context"
import { SelectOption } from "./SelectOption"
import cn from "classnames"

type Props = ComponentProps<"input"> & {
   title: string
}

export const Select = (props: Props) => {
   const { title, className, name, children, value, onChange } = props

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
         className={cn(styles.wrap, className, isOpen && styles.opened)}
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
            <SelectContext.Provider value={{ onChange: handleCheck, value, name }}>
               <div className={styles.options}>{children}</div>
            </SelectContext.Provider>
         </Fade>
      </div>
   )
}

Select.Option = SelectOption