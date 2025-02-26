import { Button } from "../../Button"
import CrossIcon from "@/shared/assets/icons/cross.svg"
import TrashIcon from "@/shared/assets/icons/trash.svg"
import styles from "./styles.module.scss"
import { modalStore } from "@/shared/model"
import { Tooltip } from "../../Tooltip"

const { closeModal } = modalStore

type Props = {
   title: string
   hasDeleteBtn: boolean
   handleDelete: () => void
   onClose: () => void
}

export const EditModalHeader = ({
   hasDeleteBtn = true,
   title,
   handleDelete,
   onClose,
}: Props) => {
   const handleModalClose = () => {
      onClose()
      closeModal()
   }

   return (
      <header className={styles.header}>
         <h3 className={styles.title}>{title}</h3>
         <div className={styles.buttons}>
            {hasDeleteBtn && (
               <Tooltip text="Remove">
                  <Button
                     variant="filled"
                     leftIcon={<TrashIcon />}
                     onClick={handleDelete}
                     className={styles.removeBtn}
                  />
               </Tooltip>
            )}
            <Tooltip text="Close modal">
               <Button
                  variant="filled"
                  leftIcon={<CrossIcon />}
                  onClick={handleModalClose}
                  className={styles.closeBtn}
               />
            </Tooltip>
         </div>
      </header>
   )
}
