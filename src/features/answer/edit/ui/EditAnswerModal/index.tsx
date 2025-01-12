"use client"

import { IAnswerEdge } from "@/entities/Answer"
import { SceneNode } from "@/entities/Scene"
import { BaseEditModal, EditModalHeader } from "@/shared/ui"
import { useReactFlow } from "@xyflow/react"
import { useForm } from "react-hook-form"
import { EditAnswerForm } from "../EditAnswerForm"
import { Modals } from "@/shared/model"
import { answerOptions } from "../../model/registerOptions"

type Props = {
   id: string
}
export const EditAnswerModal = ({ id }: Props) => {
   const { getValues, register } = useForm()

   const textInput = register("text", answerOptions)

   const { updateEdgeData, deleteElements } = useReactFlow<SceneNode, IAnswerEdge>()

   const modalContent = `${Modals.SceneAnswer}-${id}`

   const handleSaveChanges = () => {
      const text = getValues("text")
      updateEdgeData(id, { text })
   }

   const handleDelete = () => {
      deleteElements({ edges: [{ id }] })
   }

   return (
      <BaseEditModal
         modalContent={modalContent}
         onClose={handleSaveChanges}
         variant="center"
      >
         <EditModalHeader
            title="Answer"
            hasDeleteBtn={true}
            handleDelete={handleDelete}
            onClose={handleSaveChanges}
         />
         <EditAnswerForm textInput={textInput} />
      </BaseEditModal>
   )
}
