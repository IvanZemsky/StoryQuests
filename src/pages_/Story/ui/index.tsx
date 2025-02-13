import { cookies } from "next/headers"
import { Page } from "../model/types"
import { StoryWrap } from "./StoryWrap"
import { fetchStory } from "../lib/fetchStory"
import { Wrapper } from "@/shared/ui"
import { verifyServerSession } from "@/features/user"

export const Story = async ({ params }: Page) => {
   const {id} = await params
   const accessToken = (await cookies()).get("access-token")
   const session = await verifyServerSession()
   const story = await fetchStory(id, accessToken)

   if (!story) {
      return (
         <Wrapper>
            <p>Error</p>
         </Wrapper>
      )
   }

   return <StoryWrap story={story} userId={session?.id || null} />
}
