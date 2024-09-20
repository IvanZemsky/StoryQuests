import { SwitcherGroup, Button } from "@/shared/ui"
import ArrowRightIcon from '@/shared/assets/icons/arrow-right.svg'
import styles from "./SelectAnswer.module.scss"
import { storyStore } from "@/entities/Story"
import { Answer, IAnswer } from "@/entities/Answer"

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
