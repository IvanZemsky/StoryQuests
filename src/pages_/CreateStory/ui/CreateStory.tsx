import { Wrapper } from "@/src/shared/ui"
import styles from "./CreateStory.module.scss"
import { CreateStoryForm } from './../../../widgets/CreateStoryForm/ui/CreateStoryForm';

export const CreateStory = () => {
   return (
      <Wrapper className={styles.wrapper}>
         <CreateStoryForm />
      </Wrapper>
   )
}
