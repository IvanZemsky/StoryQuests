import { modalStore } from "@/shared/model"

const {openModal} = modalStore

export const setModal = (type: string, id?: string): () => void => {
   let modalContent = !!id ? `${type}-${id}` : `${type}`

   const handleModalOpen = () => {
      openModal(modalContent)
   }

   return handleModalOpen
}