import { SwitcherGroup, Button } from "@/src/shared/ui"
import ArrowRightIcon from '@/src/shared/assets/icons/arrow-right.svg'
import styles from "./SelectAnswer.module.scss"
import { storyStore } from "@/src/entities/Story"
import { Answer, IAnswer } from "@/src/entities/Answer"

interface Props {
   answers: IAnswer[]
}

export const SelectAnswer = ({ answers }: Props) => {
   const { setScene } = storyStore

   return (
      <div className={styles.wrap}>
         <SwitcherGroup variant="column" className={styles.select}>
            {answers.map((answer) => (
               <Answer key={answer.id + answer.nextSceneId} className={styles.answer} {...answer}/>
            ))}
         </SwitcherGroup>
         <Button
            variant="filled"
            className={styles.nextSceneBtn}
            leftIcon={<ArrowRightIcon />}
            defaultHover={false}
            onClick={setScene}
         />
      </div>
   )
}
