import { Textarea, TextInput } from "@/src/shared"
import styles from './CreateStoryFileds.module.scss'

interface Props {
 
}
export const CreateStoryFields = ({}: Props) => {
   return ( 
      <div className={styles.content}>
         <TextInput placeholder="Story name"/>
         <Textarea placeholder="Description"/>
      </div>
   );
}