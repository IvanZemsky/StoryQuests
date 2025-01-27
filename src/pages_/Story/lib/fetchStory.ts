import { storyAdapter } from "@/entities/Story"
import { api } from "@/shared/api"
import { notFound } from "next/navigation"

export async function fetchStory(
   storyId: string,
   accessToken?: { name: string; value: string },
) {
   const res = await api.get("stories/" + storyId, {
      headers: {
         cookie: `${accessToken?.name}=${accessToken?.value}`,
      },
   })

   if (res.status === 404) {
      notFound()
   }

   if (res.status !== 200) {
      return null
   }

   return storyAdapter(res.data)
}
