"use client"

import { HTMLAttributes, MouseEvent } from "react"
import styles from "./Modal.module.scss"
import { ClientPortal } from "../ClientPortal/ClientPortal"
import { modalStore, usePreventScroll } from "../../model"
import { observer } from "mobx-react"

interface Props extends HTMLAttributes<HTMLDivElement> {
   modalContent: string
}

export const Modal = observer(
   ({ modalContent, children, className, ...attributes }: Props) => {
      const { opened, closeModal } = modalStore

      usePreventScroll(!!opened)

      const handleClose = (event: MouseEvent<HTMLDivElement>) => {
         event.stopPropagation()
         closeModal()
      }

      const stopCloseEventPropagation = (event: MouseEvent<HTMLDivElement>) => {
         event.stopPropagation()
      }

      if (!opened) return null

      return (
         <ClientPortal selector="#modal">
            <div
               className={[styles.modal, className].join(" ")}
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
