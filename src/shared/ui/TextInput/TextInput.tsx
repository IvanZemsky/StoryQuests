import { InputHTMLAttributes } from "react";
import styles from './TextInput.module.scss'

interface TextInputProps {

}

type TextInputType = TextInputProps & InputHTMLAttributes<HTMLInputElement>

export const TextInput = ({className, ...attributes}: TextInputType) => {
   return ( 
      <input type="text" className={[styles.input, className].join(" ")} {...attributes}/>
    );
}
 
export default TextInput;