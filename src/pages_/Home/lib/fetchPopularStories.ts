import { storyService } from "@/entities/Story"

export const fetchPopularStories = async (
   accessToken: { name: string; value: string } | undefined,
) => {
   try {
      const stories = await storyService.fetchStories(
         {
            limit: 4,
            order: "popular",
            page: 1,
            search: "",
            length: "",
         },
         {
            cookie: `${accessToken?.name}=${accessToken?.value}`,
         },
      )

      return stories
   } catch (error) {
      return null
   }
}
