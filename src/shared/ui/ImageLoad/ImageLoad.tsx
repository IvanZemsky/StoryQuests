import styles from "./ImageLoad.module.scss"
import { UploadIcon } from "./../icons/UploadIcon"
import { HTMLAttributes } from "react"

interface Props {
   label?: string
}

type FullProps = Props & HTMLAttributes<HTMLButtonElement>

export const ImageLoad = ({ label, className, ...attributes }: FullProps) => {
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
