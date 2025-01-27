import { SwitcherGroup, Button } from "@/shared/ui"
import ArrowRightIcon from "@/shared/assets/icons/arrow-right.svg"
import styles from "./SelectAnswer.module.scss"
import { Answer, AnswerCheck } from "@/entities/Answer"
import { ChangeEvent, useState } from "react"
import { SetStateFn } from "@/shared/model"
import { scrollToTop } from "@/shared/lib"

type Props = {
   answers: Answer[]
   setScene: SetStateFn<string>
}

export const SelectAnswer = ({ answers, setScene }: Props) => {
   const [nextSceneId, setNextSceneId] = useState<string | undefined>(undefined)

   const handleSetSceneCLick = () => {
      if (nextSceneId) {
         setScene(nextSceneId)
         scrollToTop()
      }
   }

   const handleAnswerChange = (event: ChangeEvent<HTMLInputElement>) => {
      setNextSceneId(event.target.value)
   }

   return (
      <div className={styles.wrap}>
         <SwitcherGroup
            variant="column"
            className={styles.select}
            onChange={handleAnswerChange}
            value={nextSceneId}
         >
            {answers.map((answer) => (
               <AnswerCheck
                  key={answer.id + answer.nextSceneId}
                  className={styles.answer}
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
