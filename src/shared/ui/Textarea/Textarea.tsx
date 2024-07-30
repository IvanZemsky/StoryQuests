import { HTMLAttributes } from "react"
import styles from "./Textarea.module.scss"

interface Props {
   placeholder?: string
}

type FullProps = Props & HTMLAttributes<HTMLTextAreaElement>

export const Textarea = ({ placeholder, className, ...attributes }: FullProps) => {
   return (
      <textarea
         className={[styles.textarea, className].join(" ")}
         placeholder={placeholder}
         {...attributes}
      ></textarea>
   )
}
