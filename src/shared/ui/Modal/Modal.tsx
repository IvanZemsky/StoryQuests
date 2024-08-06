'use client'

import { HTMLAttributes } from "react";
import styles from './Modal.module.scss'
import { ClientPortal } from "../ClientPortal/ClientPortal";
import { modalStore, usePreventScroll } from "../../model";
import { observer } from "mobx-react";

interface Props extends HTMLAttributes<HTMLDivElement> {
   modalContent: string
}

export const Modal = observer(({modalContent, children, ...attributes}: Props) => {
   const {opened} = modalStore

   usePreventScroll(!!opened)

   if (!opened) return null;

   return (
      <ClientPortal selector="#modal">
         <div className={styles.modal} {...attributes}>
            {children}
         </div>
      </ClientPortal>
   );
})