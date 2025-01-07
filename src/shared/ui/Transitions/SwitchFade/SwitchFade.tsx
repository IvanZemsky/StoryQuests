"use client"

import { ReactNode, useRef } from "react"
import styles from "./SwitchFade.module.scss"
import { CSSTransition, SwitchTransition } from "react-transition-group"

type Props = {
   children: ReactNode
   timeout: number
   switchKey: any
}

export const SwitchFade = ({ switchKey, children, timeout }: Props) => {
   const nodeRef = useRef<HTMLDivElement>(null)

   const classNames = {
      enter: styles.fadeEnter,
      enterActive: styles.fadeEnterActive,
      exit: styles.fadeExit,
      exitActive: styles.fadeExitActive,
   }
   return (
      <SwitchTransition>
         <CSSTransition
            key={switchKey}
            nodeRef={nodeRef}
            classNames={classNames}
            timeout={timeout}
         >
            <div ref={nodeRef}>{children}</div>
         </CSSTransition>
      </SwitchTransition>
   )
}
