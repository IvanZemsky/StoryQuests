"use client"

import { MouseEvent } from "react"
import { SwitcherGroup, Check, Button, ArrowRightIcon } from "@/src/shared"
import styles from "./SelectAnswer.module.scss"
import { IAnswer, storyStore } from "@/src/entities/Story"
import { observer } from "mobx-react"

interface Props {
   answers: IAnswer[]
}

export const SelectAnswer = observer(({ answers }: Props) => {
   const { setNextSceneId, setScene } = storyStore

   console.log(JSON.stringify(answers))

   const handleCheckClick = (event: MouseEvent) => {
      const answerId = event.currentTarget.id;
      const answer = answers.find(answer => answer._id === answerId)!
      const nextSceneId = answer.nextSceneId
      console.log(answer._id, answer.nextSceneId)
      setNextSceneId(nextSceneId)
   };

   return (
      <>
         <SwitcherGroup variant="column" className={styles.select}>
            {answers.map((answer) => (
               <Check
                  fillContainer
                  name="answer"
                  key={answer._id}
                  id={`${answer._id}`}
                  text={answer.title}
                  onClick={handleCheckClick}
               />
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
})
