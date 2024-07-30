import { InputHTMLAttributes } from "react";
import styles from './TextInput.module.scss'

interface Props {
}

type TextInputType = Props & InputHTMLAttributes<HTMLInputElement>

export const TextInput = ({className, ...attributes}: TextInputType) => {
   return ( 
      <input type="text" className={[styles.input, className].join(" ")} {...attributes}/>
    );
}
 
export default TextInput;