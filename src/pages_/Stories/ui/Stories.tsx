import { Wrapper } from "@/shared/ui";
import { StoriesFilters } from '@/widgets/StoriesFilters';
import { StoryList } from "@/widgets/StoryList";
import styles from './Stories.module.scss'
import { Metadata } from "next";

export const metadata: Metadata = {
   title: 'Story Quests'
}

export const Stories = () => {
   return ( 
      <Wrapper className={styles.wrap}>
         <StoriesFilters />
         <StoryList />
      </Wrapper>
    );
}
 
export default Stories;