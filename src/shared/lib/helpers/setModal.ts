import { modalStore } from "@/shared/model"

const {openModal} = modalStore

export const setModal = (name: string, id?: string): () => void => {
   let modalContent = !!id ? `${name}-${id}` : `${name}`

   const handleModalOpen = () => {
      openModal(modalContent)
   }

   return handleModalOpen
}