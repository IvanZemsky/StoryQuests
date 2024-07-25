import { SwitcherGroup, Check, Button, ArrowRightIcon } from "@/src/shared"
import styles from './SelectAnswer.module.scss'

type Props = {}

export const SelectAnswer = ({}: Props) => {
   return (
      <>
         <SwitcherGroup variant="column" className={styles.select}>
            <Check fillContainer name="answer" id="answer1" text="Option 1" />
            <Check fillContainer name="answer" id="answer2" text="Option 2" />
            <Check fillContainer name="answer" id="answer3" text="Option 3" />
         </SwitcherGroup>
         <Button
            variant="filled"
            className={styles.nextSceneBtn}
            leftIcon={<ArrowRightIcon />}
            defaultHover={false}
         />
      </>
   )
}
