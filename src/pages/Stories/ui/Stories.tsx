import { Wrapper } from "@/src/shared";
import { StoriesFilters } from '@/src/widgets/StoriesFilters';
import { StoryList } from "@/src/widgets/StoryList";

export const Stories = () => {
   return ( 
      <Wrapper>
         <StoriesFilters />
         <StoryList/>
      </Wrapper>
    );
}
 
export default Stories;