import { HTMLAttributes } from "react";
import styles from './Modal.module.scss'

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
   modalContent: string
}

export const Modal = ({modalContent, children, ...attributes}: ModalProps) => {
   return ( 
      <div className={styles.modal} {...attributes}>
         {children}
      </div>
   );
}