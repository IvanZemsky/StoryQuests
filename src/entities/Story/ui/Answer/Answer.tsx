import { IAnswer, storyStore } from "@/src/entities/Story"
import { Check } from "@/src/shared"

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
