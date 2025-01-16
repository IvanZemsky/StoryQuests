import { Wrapper } from "@/shared/ui";
import styles from './styles.module.scss'
import { Metadata } from "next";
import { StoriesFilters } from "./StoriesFilters";
import { StoryList } from "./StoryList";

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