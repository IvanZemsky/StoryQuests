
import { api } from "@/shared/api";

export async function fetchStory(
   storyId: string,
   accessToken: { name: string; value: string } | undefined,
) {
   try {
      const res = await api.get('stories/' + storyId, {
         headers: {
            cookie: `${accessToken?.name}=${accessToken?.value}`,
         }
      })

      if (res.status !== 200) {
         return null
      }

      return res.data
   } catch (error) {
      return null
   }
}
