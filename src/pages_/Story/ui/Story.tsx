import { Wrapper } from "@/src/shared/ui"
import styles from "./Story.module.scss"
import { SceneWrap } from "./SceneWrap/SceneWrap"
import { Metadata } from "next"
import { storyService } from "@/src/entities/Story"

interface Page {
   params: {
      id: string
   }
}

export const generateMetadata = async ({ params }: Page): Promise<Metadata> => {
   try {
      const data = await storyService.fetchStoryById(params.id);
      return {
         title: data?.name || 'Story not found',
      };
   } catch (error) {
      return {
         title: 'Story not found',
      };
   }
};

export const Story = ({ params }: Page) => {
   console.log(params.id)
   return (
      <div className={styles.page}>
         <Wrapper>
            <SceneWrap/>
         </Wrapper>
      </div>
   )
}
