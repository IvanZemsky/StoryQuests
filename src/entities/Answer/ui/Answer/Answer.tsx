import { storyStore } from "@/entities/Story"
import { Check } from "@/shared/ui"
import { IAnswer } from "../../model/types"
import { HTMLAttributes } from "react"

interface Props extends IAnswer, HTMLAttributes<HTMLDivElement> {
   id: string
}

export const Answer = ({ id, text, nextSceneId, className, ...attributes }: Props) => {
   const { setNextSceneId } = storyStore

   const handleCheckClick = () => {
      setNextSceneId(nextSceneId)
   }

   return (
      <Check
         fillContainer
         name="answer"
         id={id + nextSceneId}
         text={text}
         onClick={handleCheckClick}
         className={className}
         {...attributes}
      />
   )
}
