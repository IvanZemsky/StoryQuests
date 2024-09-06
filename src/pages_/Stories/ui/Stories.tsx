import { Wrapper } from "@/src/shared/ui";
import { StoriesFilters } from '@/src/widgets/StoriesFilters';
import { StoryList } from "@/src/widgets/StoryList";
import styles from './Stories.module.scss'

export const Stories = () => {
   return ( 
      <Wrapper className={styles.wrap}>
         <StoriesFilters />
         <StoryList/>
      </Wrapper>
    );
}
 
export default Stories;