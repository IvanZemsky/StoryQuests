import { SwitcherGroup, Button, ArrowRightIcon } from "@/src/shared"
import styles from "./SelectAnswer.module.scss"
import { IAnswer, storyStore } from "@/src/entities/Story"
import { Answer } from "@/src/entities/Story"

interface Props {
   answers: IAnswer[]
}

export const SelectAnswer = ({ answers }: Props) => {
   const { setScene } = storyStore

   console.log(JSON.stringify(answers))

   return (
      <>
         <SwitcherGroup variant="column" className={styles.select}>
            {answers.map((answer) => (
               <Answer key={answer._id + answer.nextSceneId} answer={answer}/>
            ))}
         </SwitcherGroup>
         <Button
            variant="filled"
            className={styles.nextSceneBtn}
            leftIcon={<ArrowRightIcon />}
            defaultHover={false}
            onClick={setScene}
         />
      </>
   )
}
