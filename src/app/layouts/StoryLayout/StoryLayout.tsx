import { ReactNode, Suspense } from "react"
import styles from './styles.module.scss'
import { StoryHeader, storyService } from "@/entities/Story"
import { Loading } from "@/shared/ui"

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
            <Suspense fallback={<Loading />}>{children}</Suspense>
         </main>
      </div>
   )
}