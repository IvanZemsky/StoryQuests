import { PropsWithChildren } from "react";
import styles from './SwitcherGroup.module.scss'

export const SwitcherGroup = ({children}: PropsWithChildren) => {
   return ( 
      <div className={styles.content}>
         {children}
      </div>
    );
}
 
export default SwitcherGroup;