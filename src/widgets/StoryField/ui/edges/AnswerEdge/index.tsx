"use client"

import { setModal } from "@/shared/lib"
import { AnswerEdgeProps, BaseAnswerEdge } from "@/entities/Answer"
import { EditAnswerModal } from "@/features/answer"

export const AnswerEdge = (props: AnswerEdgeProps) => {
   const { id } = props
   const handleModalOpen = setModal("sceneAnswer", id)

   return (
      <BaseAnswerEdge
         onClick={handleModalOpen}
         modal={<EditAnswerModal id={id} />}
         {...props}
      />
   )
}
