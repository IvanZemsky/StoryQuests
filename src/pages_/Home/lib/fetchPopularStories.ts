import { storyService } from "@/entities/Story"

export const fetchPopularStories = async (
   accessToken: { name: string; value: string } | undefined,
) => {
   return await storyService.fetchStories(
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
}
