"use client"

import { ReactNode, useRef } from "react"
import styles from "./Fade.module.scss"
import { CSSTransition } from "react-transition-group"
import { CSSTransitionProps } from "react-transition-group/CSSTransition"

type Props = CSSTransitionProps & {
   children: ReactNode
   timeout: number
}

export const Fade = ({ inProp, children, timeout, ...props }: Props) => {
   const nodeRef = useRef<HTMLDivElement>(null)

   console.log(inProp)

   const classNames = {
      enter: styles.fadeEnter,
      enterActive: styles.fadeEnterActive,
      exit: styles.fadeExit,
      exitActive: styles.fadeExitActive,
   }

   return (
      <CSSTransition
         nodeRef={nodeRef}
         in={inProp}
         timeout={timeout}
         classNames={classNames}
         {...props}
      >
         <div ref={nodeRef}>{children}</div>
      </CSSTransition>
   )
}
