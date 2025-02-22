"use client"

import { ReactNode,} from "react"
import styles from "./styles.module.scss"
import cn from "classnames"
import { useTooltip } from "@/shared/lib/hooks/useTooltip"

type Props = {
   text: string
   children: ReactNode
   className?: string
}

export const Tooltip = ({ className, text, children }: Props) => {
   const { isVisible, position, handleMouseEnter, handleMouseLeave, handleMouseMove } =
      useTooltip()

   return (
      <div
         className={cn(styles.tooltipWrapper, className)}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         onMouseMove={handleMouseMove}
      >
         {children}
         {isVisible && (
            <div
               className={styles.tooltip}
               style={{
                  left: `${position.x}px`,
                  top: `${position.y}px`,
               }}
            >
               {text}
            </div>
         )}
      </div>
   )
}
