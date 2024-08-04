import { InputHTMLAttributes } from "react";
import styles from './TextInput.module.scss'

export const TextInput = ({className, ...attributes}: InputHTMLAttributes<HTMLInputElement>) => {
   return ( 
      <input type="text" className={[styles.input, className].join(" ")} {...attributes}/>
    );
}
 
export default TextInput;