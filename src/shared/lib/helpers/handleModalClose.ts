import { MouseEvent } from 'react';
import { modalStore } from "../../model";

const {closeModal} = modalStore

export const handleModalClose = (callback: (...args: any) => any, argument: any, timeout: number ) => {
   return (event: MouseEvent<HTMLDivElement>) => {
      event.stopPropagation()
         callback(argument)
         setTimeout(() => {
            closeModal()
         }, timeout)
   }
}