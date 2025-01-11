import { TextInput } from "@/shared/ui"
import { UseFormRegisterReturn } from "react-hook-form"
import styles  from "./styles.module.scss"
import { answerOptions } from "../../model/registerOptions"

type Props = {
   textInput: UseFormRegisterReturn<"text">
}

export const EditAnswerForm = ({textInput}: Props) => {
   return (
      <form className={styles.form}>
         <TextInput
            className={styles.textInput}
            counter
            maxLength={answerOptions.maxLength}
            {...textInput}
            placeholder="Text of answer"
         />
      </form>
   )
}