import { ImageLoad, Textarea, TextInput } from "@/src/shared/ui"
import styles from './CreateStoryFileds.module.scss'

interface Props {
 
}
export const CreateStoryFields = ({}: Props) => {
   return ( 
      <div className={styles.content}>
         <TextInput placeholder="Story name"/>
         <Textarea placeholder="Description"/>
         <ImageLoad label="Illustration" className={styles.imageLoad} />
      </div>
   );
}