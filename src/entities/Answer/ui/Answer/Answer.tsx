import { Check } from "@/shared/ui"
import { Answer } from "../../model/types"
import { ComponentProps, MouseEventHandler } from "react"

type Props = ComponentProps<"input"> & {
   data: Answer
   onDoubleClick?: MouseEventHandler<HTMLDivElement>
}

export const AnswerCheck = ({ data, className, onDoubleClick, ...attributes }: Props) => {
   const { text, nextSceneId, id } = data

   return (
      <Check
         fillContainer
         name="answer"
         id={id + nextSceneId}
         text={text}
         className={className}
         onDoubleClick={onDoubleClick}
         {...attributes}
      />
   )
}
