"use client"

import { BaseEndSceneNode, SceneNodeProps } from "@/entities/Scene"
import { EditSceneModal } from "@/features/scene"
import { Modals } from "@/shared/model"
import { setModal } from "@/shared/lib"

export const EndSceneNode = (props: SceneNodeProps) => {
   const { id, data } = props

   const handleModalOpen = setModal(Modals.StoryScene, id)

   return (
      <div onClick={handleModalOpen}>
         <BaseEndSceneNode modal={<EditSceneModal id={id} data={data} />} {...props} />
      </div>
   )
}
