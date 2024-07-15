import { InputHTMLAttributes } from "react";
import styles from './Check.module.scss'
import { Button } from '@/src/shared';

interface CheckProps {
   text: string
}

type CheckType = CheckProps & InputHTMLAttributes<HTMLInputElement>

export const Check = ({text, ...attributes }: CheckType) => {
   return ( 
      <div className={styles.wrap}>
         <input type="radio" {...attributes}/>
         <label htmlFor={attributes.id}>
            <Button variant="filled" type="button">{text}</Button>
         </label>
      </div>
    );
}
 
export default Check;