"use client"

import { BaseSceneNode, SceneNodeProps } from "@/entities/Scene"
import { EditSceneModal } from "@/features/scene"
import { setModal } from "@/shared/lib"
import { Modals } from "@/shared/model"

export const SceneNodeItem = (props: SceneNodeProps) => {
   const { id, data } = props

   const handleModalOpen = setModal(Modals.StoryScene, id)

   return (
      <div onClick={handleModalOpen}>
         <BaseSceneNode
            modal={<EditSceneModal id={id} data={data} />}
            {...props}
         />
      </div>
   )
}
