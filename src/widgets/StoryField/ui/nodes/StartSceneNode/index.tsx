"use client"

import { BaseStartSceneNode, SceneNodeProps } from "@/entities/Scene"
import { EditSceneModal } from "@/features/scene"
import { setModal } from "@/shared/lib"
import { Modals } from "@/shared/model"

export const StartSceneNode = (props: SceneNodeProps) => {
   const { id, data } = props

   const handleModalOpen = setModal(Modals.StoryScene, id)

   return (
      <div onClick={handleModalOpen}>
         <BaseStartSceneNode
            modal={<EditSceneModal id={id} data={data} hasDeleteBtn={false} />}
            {...props}
         />
      </div>
   )
}
