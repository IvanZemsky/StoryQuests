"use client"

import { ComponentProps, MouseEvent } from "react"
import styles from "./styles.module.scss"
import { ClientPortal } from "../ClientPortal"
import { modalStore, usePreventScroll } from "../../model"
import { observer } from "mobx-react"
import cn from "classnames"

type Props = {
   modalContent: string
   onClose?: (...args: any) => any
} & ComponentProps<"div">

export const Modal = observer(
   ({ modalContent, children, className, onClose, ...attributes }: Props) => {
      const { opened, closeModal } = modalStore

      const isOpened = opened === modalContent

      usePreventScroll(!!opened)

      const handleClose = (event: MouseEvent<HTMLDivElement>) => {
         event.stopPropagation()
         onClose?.()
         closeModal()
      }

      const stopCloseEventPropagation = (event: MouseEvent<HTMLDivElement>) => {
         event.stopPropagation()
      }

      if (!isOpened) return null

      return (
         <ClientPortal selector="#modal">
            <div
               className={cn(styles.modal, className)}
               {...attributes}
               onClick={handleClose}
            >
               <div className={styles.wrap} onClick={stopCloseEventPropagation}>
                  {children}
               </div>
            </div>
         </ClientPortal>
      )
   },
)
