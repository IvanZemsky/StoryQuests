import { storyStore } from "@/src/entities/Story"
import { Check } from "@/src/shared/ui"
import { IAnswer } from "../../model/types"

export const Answer = ({ id, text, nextSceneId }: IAnswer) => {
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
      />
   )
}
