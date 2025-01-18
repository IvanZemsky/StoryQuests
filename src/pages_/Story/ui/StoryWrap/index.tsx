"use client"

import { useState } from "react"
import { StoryPreviewCard } from "../StoryPreviewCard"
import { IStory } from "@/entities/Story"
import { PageScenes } from "../PageScenes"
import { useScenes } from "@/entities/Scene/lib/hooks/useScenes"

type Props = {
   story: IStory
}

export const StoryWrap = ({ story }: Props) => {
   const [isStoryStarted, setIsStoryStarted] = useState(false)

   const { data, isPending, isError } = useScenes(story.id, isStoryStarted)

   if ((!data && !isPending) || isError) {
      return <p>Error</p>
   }

   if (data && isStoryStarted) {
      return <PageScenes data={data} />
   }

   return (
      <StoryPreviewCard
         data={story}
         isPending={isStoryStarted && isPending}
         setIsStoryStarted={setIsStoryStarted}
      />
   )
}
