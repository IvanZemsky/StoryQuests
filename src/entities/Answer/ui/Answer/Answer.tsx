import { Check } from "@/shared/ui"
import { IAnswer } from "../../model/types"
import { HTMLAttributes } from "react"

type Props = {
   data: IAnswer
} & HTMLAttributes<HTMLDivElement>

export const Answer = ({ data, className, ...attributes }: Props) => {
   const { text, nextSceneId, id } = data

   return (
      <Check
         fillContainer
         name="answer"
         id={id + nextSceneId}
         text={text}
         className={className}
         {...attributes}
      />
   )
}
