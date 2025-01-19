import { SwitcherGroup, Button } from "@/shared/ui"
import ArrowRightIcon from "@/shared/assets/icons/arrow-right.svg"
import styles from "./SelectAnswer.module.scss"
import { Answer, AnswerCheck } from "@/entities/Answer"
import { useRef } from "react"
import { SetStateFn } from "@/shared/model"
import { scrollToTop } from "@/shared/lib"

type Props = {
   answers: Answer[]
   setScene: SetStateFn<string>
}

export const SelectAnswer = ({ answers, setScene }: Props) => {
   const nextSceneId = useRef<null | string>(null)

   const handleSetSceneCLick = () => {
      if (nextSceneId.current) {
         setScene(nextSceneId.current)
         scrollToTop()
      }
   }

   const handleAnswerClick = (answer: Answer) => () => {
      nextSceneId.current = answer.nextSceneId
   }

   return (
      <div className={styles.wrap}>
         <SwitcherGroup variant="column" className={styles.select}>
            {answers.map((answer) => (
               <AnswerCheck
                  key={answer.id + answer.nextSceneId}
                  className={styles.answer}
                  onClick={handleAnswerClick(answer)}
                  onDoubleClick={() => setScene(answer.nextSceneId)}
                  data={answer}
               />
            ))}
         </SwitcherGroup>
         <Button
            variant="filled"
            className={styles.nextSceneBtn}
            leftIcon={<ArrowRightIcon />}
            defaultHover={false}
            onClick={handleSetSceneCLick}
         />
      </div>
   )
}
