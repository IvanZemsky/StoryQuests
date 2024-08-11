import { modalStore } from "@/src/shared/model"

const {openModal} = modalStore

export const setModal = (type: string, id: string): () => void => {
   let modalContent = `${type}-${id}`

   const handleModalOpen = () => {
      openModal(modalContent)
   }

   return handleModalOpen
}