import { InputHTMLAttributes } from "react";
import styles from './TextInput.module.scss'

interface TextInputProps {

}

type TextInputType = TextInputProps & InputHTMLAttributes<HTMLInputElement>

export const TextInput = ({...attributes}: TextInputType) => {
   return ( 
      <input type="text" className={styles.input} {...attributes}/>
    );
}
 
export default TextInput;