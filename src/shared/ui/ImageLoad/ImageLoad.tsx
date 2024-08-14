import styles from "./ImageLoad.module.scss"
import { UploadIcon } from "./../icons/UploadIcon"
import { forwardRef, HTMLAttributes, Ref} from "react"
import { TextInput } from "../TextInput/TextInput"

interface Props extends HTMLAttributes<HTMLDivElement> {
   label?: string
}

export const ImageLoad = forwardRef(
   ({ label, className, ...attributes }: Props, ref: Ref<HTMLInputElement>) => {
      return (
         <div className={[styles.load, className].join(" ")} {...attributes}>
            <TextInput placeholder="Image link" ref={ref} />
            <div className={styles.content}>
               <UploadIcon />
               {label && <p>{label}</p>}
            </div>
         </div>
      )
   },
)
