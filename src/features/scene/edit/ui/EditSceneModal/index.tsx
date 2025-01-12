"use client"

import { EditSceneForm } from "../EditSceneForm"
import { FormProvider, useForm } from "react-hook-form"
import { BaseEditModal, EditModalHeader } from "@/shared/ui"
import { Modals } from "@/shared/model"
import { useReactFlow } from "@xyflow/react"
import { SceneNodeData, SceneNode } from "@/entities/Scene"

type Props = {
   id: string
   data: SceneNodeData
   hasDeleteBtn?: boolean
}

export const EditSceneModal = ({ id, data, hasDeleteBtn = true }: Props) => {
   const { updateNodeData, deleteElements } = useReactFlow<SceneNode>()
   const methods = useForm()

   const { getValues } = methods

   const modalContent = `${Modals.StoryScene}-${id}`

   const handleSaveChanges = () => {
      const title = getValues("title")
      const description = getValues("desc")
      const img = getValues("img")
      updateNodeData(id, { title, description, img, type: data.type })
   }

   const handleDelete = () => {
      deleteElements({ nodes: [{ id }] })
   }

   return (
      <BaseEditModal modalContent={modalContent} onClose={handleSaveChanges}>
         <EditModalHeader
            title="Scene"
            hasDeleteBtn={hasDeleteBtn}
            handleDelete={handleDelete}
            onClose={handleSaveChanges}
         />
         <FormProvider {...methods}>
            <EditSceneForm data={data} />
         </FormProvider>
      </BaseEditModal>
   )
}
