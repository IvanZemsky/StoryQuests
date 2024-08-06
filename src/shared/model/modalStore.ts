import { makeAutoObservable } from "mobx";


class ModalStore {
   opened: null | string

   constructor() {
      this.opened = null
      makeAutoObservable(this)
   }

   openModal = (modalContent: string): void => {
      this.opened = modalContent
   }

   closeModal = (): void => {
      this.opened = null
   }

}

export const modalStore = new ModalStore()