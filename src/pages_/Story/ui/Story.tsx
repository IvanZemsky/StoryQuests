import { ArrowRightIcon, Button, Check, SwitcherGroup, Wrapper } from "@/src/shared"
import Image from "next/image"
import cardbg from "@/public/cardbg.jpg"
import styles from "./Story.module.scss"

export const Story = () => {
   return (
      <Wrapper>
         <div className={styles.content}>
            <div className={styles.controls}>
               <Image src={cardbg} alt="illutration" />
               <SwitcherGroup variant="column">
                  <Check fillContainer name="answer" id="answer1" text="Option 1" />
                  <Check fillContainer name="answer" id="answer2" text="Option 2" />
                  <Check fillContainer name="answer" id="answer3" text="Option 3" />
               </SwitcherGroup>
               <Button
                  variant="filled"
                  className={styles.nextSceneBtn}
                  leftIcon={<ArrowRightIcon />}
               />
            </div>
         </div>
      </Wrapper>
   )
}
