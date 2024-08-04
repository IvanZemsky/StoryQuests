import { HTMLAttributes } from "react"
import styles from "./Textarea.module.scss"

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
   placeholder?: string
}

export const Textarea = ({ placeholder, className, ...attributes }: Props) => {
   return (
      <textarea
         className={[styles.textarea, className].join(" ")}
         placeholder={placeholder}
         {...attributes}
      ></textarea>
   )
}
