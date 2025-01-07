import { TextInput } from "@/shared/ui"
import styles from "./styles.module.scss"
import { UseFormRegisterReturn } from "react-hook-form"

type Props = {
   textInput: UseFormRegisterReturn<"text">
}

export const AnswerForm = ({textInput}: Props) => {
   return (
      <form className={styles.form}>
         <TextInput
            className={styles.textInput}
            counter
            maxLength={35}
            {...textInput}
            placeholder="Text of answer"
         />
      </form>
   )
}
