import { PropsWithChildren } from "react"
import { Modal } from "../../Modal"
import styles from "./styles.module.scss"
import cn from "classnames"

type Props = {
   onClose: () => void
   modalContent: string
   variant?: "center" | "left"
}

export const BaseEditModal = ({
   onClose,
   modalContent,
   variant = "left",
   children,
}: PropsWithChildren<Props>) => {
   return (
      <Modal
         modalContent={modalContent}
         onClose={onClose}
         className={cn(styles.modal, styles[variant])}
      >
         <div className={styles.wrap}>
            <div className={styles.content}>{children}</div>
         </div>
      </Modal>
   )
}
