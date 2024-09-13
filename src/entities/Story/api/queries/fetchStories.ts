import { storyAdapter } from "../adapters/storyAdapter"
import { IApiStory, OrderBy, SortByScenesAmount } from "../types"
import { api, APIEndpoints } from "@/src/shared/api"

const { Stories } = APIEndpoints

export const fetchStories = async (
   limit: number,
   page: number,
   search: string,
   order: OrderBy,
   length: SortByScenesAmount,
) => {
   const response = await api.get<IApiStory[]>(Stories, {
      params: {
         limit,
         page,
         search,
         length,
         order,
      },
   })

   const totalCount = +response.headers["x-total-count"]
   const stories = response.data.map((story) => storyAdapter(story))

   return {
      stories,
      totalCount,
   }
}
