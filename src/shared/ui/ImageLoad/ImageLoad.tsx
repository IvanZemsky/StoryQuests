import styles from "./ImageLoad.module.scss"
import { UploadIcon } from "./../icons/UploadIcon"
import { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLButtonElement> {
   label?: string
}

export const ImageLoad = ({ label, className, ...attributes }: Props) => {
   return (
      <button
         className={[styles.load, className].join(" ")}
         type="button"
         {...attributes}
      >
         <div className={styles.content}>
            <UploadIcon />
            {label && <p>{label}</p>}
         </div>
      </button>
   )
}
