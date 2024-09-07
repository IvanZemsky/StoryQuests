import axios from "axios"
import { storyAdapter } from "../adapters/storyAdapter"
import { IApiStory, OrderBy, SortByScenesAmount } from "../types"
import { API, APIEndpoints } from "@/src/shared/api"

const { Stories } = APIEndpoints

export const fetchStories = async (
   limit: number,
   page: number,
   search: string,
   order: OrderBy,
   length: SortByScenesAmount,
) => {
   const response = await axios.get<IApiStory[]>(`${API}${Stories}`, {
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
