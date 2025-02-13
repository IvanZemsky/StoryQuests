"use client"

import { useState } from "react"
import { StoryPreviewCard } from "../StoryPreviewCard"
import { Story } from "@/entities/Story"
import { PageScenes } from "../PageScenes"
import { useScenes } from "@/entities/Scene"
import { UserId } from "@/entities/User"

type Props = {
   story: Story
   userId: UserId | null
}

export const StoryWrap = ({ story, userId }: Props) => {
   const [isStoryStarted, setIsStoryStarted] = useState(false)

   const { data, isPending, isError } = useScenes(story.id, isStoryStarted)

   if ((!data && !isPending) || isError) {
      return <p>Error</p>
   }

   if (data && isStoryStarted) {
      return <PageScenes data={data} userId={userId} />
   }

   return (
      <StoryPreviewCard
         data={story}
         isPending={isStoryStarted && isPending}
         setIsStoryStarted={setIsStoryStarted}
      />
   )
}
