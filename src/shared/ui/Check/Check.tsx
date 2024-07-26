'use client'

import { InputHTMLAttributes } from "react";
import styles from './Check.module.scss'
import { Button } from '@/src/shared';

interface CheckProps {
   text: string
   fillContainer?: boolean
}

type CheckType = CheckProps & InputHTMLAttributes<HTMLInputElement>

export const Check = ({fillContainer = false, checked, text, ...attributes }: CheckType) => {
   return ( 
      <div className={[
         styles.wrap,
         fillContainer && styles.fillContainer
      ].join(" ")}>
         <input type="radio" {...attributes}/>
         <label htmlFor={attributes.id}>
            <Button variant="filled" type="button">{text}</Button>
         </label>
      </div>
    );
}
 
export default Check;