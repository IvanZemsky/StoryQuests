import { storyStore } from "@/src/entities/Story"
import { Check } from "@/src/shared/ui"
import { IAnswer } from "../../model/types"

interface Props {
   answer: IAnswer
}
export const Answer = ({ answer }: Props) => {
   const { setNextSceneId } = storyStore

   const handleCheckClick = () => {
      setNextSceneId(answer.nextSceneId)
   }

   return (
      <Check
         fillContainer
         name="answer"
         id={answer._id + answer.nextSceneId}
         text={answer.title}
         onClick={handleCheckClick}
      />
   )
}
