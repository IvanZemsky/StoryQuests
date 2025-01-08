import { PropsWithChildren } from "react"
import { Modal } from "../../Modal/Modal"
import styles from "./styles.module.scss"

type Props = {
   onClose: () => void
   modalContent: string
}

export const BaseEditModal = ({
   onClose,
   modalContent,
   children,
}: PropsWithChildren<Props>) => {
   return (
      <Modal modalContent={modalContent} onClose={onClose} className={styles.modal}>
         <div className={styles.wrap}>
            <div className={styles.content}>{children}</div>
         </div>
      </Modal>
   )
}
