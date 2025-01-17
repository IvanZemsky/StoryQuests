"use client"

import { useState } from "react"
import { StoryPreviewCard } from "../StoryPreviewCard"
import { IStory } from "@/entities/Story"
import { useQuery } from "@tanstack/react-query"
import { sceneService } from "@/entities/Scene"
import { PageScenes } from "../PageScenes"

type Props = {
   story: IStory
}
export const StoryWrap = ({ story }: Props) => {
   const [isStoryStarted, setIsStoryStarted] = useState(false)

   const { data, isPending, isError } = useQuery({
      queryKey: ["story", "byId", story.id],
      queryFn: () => sceneService.fetchScenesByStoryId(story.id),
      enabled: isStoryStarted,
   })

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
