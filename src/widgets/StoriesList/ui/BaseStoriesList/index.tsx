import { Story, StoryCard } from "@/entities/Story"
import styles from "./styles.module.scss"
import { LikeStoryBtn } from "@/features/story"
import { ReactNode } from "react"

type Props = {
   data: Story[] | null
   notFoundMessage?: ReactNode
}

export const BaseStoriesList = ({
   data,
   notFoundMessage = <p>No stories found</p>,
}: Props) => {
   if (!data?.length) return notFoundMessage

   return (
      <div className={styles.list}>
         {data.map((story) => (
            <StoryCard
               data={story}
               key={story.id}
               likeBtn={
                  <LikeStoryBtn
                     storyId={story.id}
                     likes={story.likes}
                     isLiked={story.isLiked}
                  />
               }
            />
         ))}
      </div>
   )
}
