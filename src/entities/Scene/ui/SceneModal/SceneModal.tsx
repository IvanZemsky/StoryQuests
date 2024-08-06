'use client'

import { Modal } from "@/src/shared/ui/Modal/Modal";

interface Props {
 id: string
}

export const SceneModal = ({id}: Props) => {
   const modalContent = `sceneDataModal${id}`

   return ( 
      <Modal modalContent={modalContent}>
         <div>
            Modal!!! (id: {id})
         </div>
      </Modal>
   );
}