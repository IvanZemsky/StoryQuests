import { ReactNode } from "react"
import styles from './styles.module.scss'
import { StoryHeader, storyService } from "@/entities/Story"

type Props = {
   children: ReactNode,
   params: {
      id: string
   }
}

export const StoryLayout = async ({ children, params }: Props) => {
   const story = await storyService.fetchStoryById(params.id)

   return (
      <div className={styles.app}>
         <StoryHeader storyName={story?.name}/>
         <main>
            {children}
         </main>
      </div>
   )
}