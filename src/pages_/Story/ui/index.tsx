import { cookies } from "next/headers"
import { Page } from "../model/types"
import { StoryWrap } from "./StoryWrap"
import { fetchStory } from "../lib/fetchStory"

export const Story = async ({ params }: Page) => {
   const accessToken = cookies().get("access-token")
   const story = await fetchStory(params.id, accessToken)
   console.log(story)

   if (!story) {
      return <p>Error</p>
   }

   return <StoryWrap story={story} />
}
