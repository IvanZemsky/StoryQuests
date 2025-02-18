import { storyService } from "@/entities/Story"
import {  Wrapper } from "@/shared/ui"
import { Page } from "../model/types"
import styles from "./styles.module.scss"
import { ResultHeader } from "./ResultHeader"
import { UserResult } from "./UserResult"
import { fetchResult } from "../lib/fetchResult"
import { Statistics } from "./Statistics"

export const Results = async ({ params }: Page) => {
   const { id } = await params

   const story = await storyService.fetchStoryById(id)
   const result = await fetchResult({ storyId: id, userId: story.author.id })

   return (
      <Wrapper>
         <div className={styles.content}>
            <ResultHeader story={story} result={result}/>
            <UserResult result={result} storyId={story.id}/>
            <Statistics storyId={id}/>
         </div>
      </Wrapper>
   )
}
