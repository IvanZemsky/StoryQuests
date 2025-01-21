"use client"

import { Button, ButtonLink, Modal } from "@/shared/ui"
import styles from "./styles.module.scss"
import { Modals, modalStore } from "@/shared/model"
import { PageRoutes } from "@/shared/constants"

type Props = {
   id: string
}
export const AuthModal = ({ id }: Props) => {
   const { closeModal } = modalStore

   return (
      <Modal modalContent={`${Modals.AuthModal}-${id}`} className={styles.modal}>
         <div className={styles.content}>
            <h3>Please, sign in to do this action</h3>
            <div className={styles.buttons}>
               <ButtonLink href={PageRoutes.SignIn} onClick={closeModal} variant="filled">
                  Sign in
               </ButtonLink>
               <Button variant="filled" onClick={closeModal}>
                  Cancel
               </Button>
            </div>
         </div>
      </Modal>
   )
}
