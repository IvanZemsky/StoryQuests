import { HTMLAttributes } from "react";
import styles from './SwitcherGroup.module.scss'

export const SwitcherGroup = ({children, className, ...attributes}: HTMLAttributes<HTMLDivElement>) => {
   return ( 
      <div className={[styles.content, className].join(" ")} {...attributes}>
         {children}
      </div>
    );
}
 
export default SwitcherGroup;