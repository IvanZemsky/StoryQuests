import { api, APIEndpoints } from "@/shared/api"
import { storyAdapter } from "../api/adapters/storyAdapter"
import { OrderBy, SortByScenesAmount, IApiStory } from "../api/types"
import { IStory } from "../model/types"

const { Stories } = APIEndpoints

interface IStorySearchParams {
   limit?: number
   page?: number
   search?: string
   order?: OrderBy
   length?: SortByScenesAmount
}

interface IStorySearchResult {
   stories: IStory[];
   totalCount: number;
 }
 
 class StoryService {
   async fetchStories(params: IStorySearchParams): Promise<IStorySearchResult | null> {
     try {
       const response = await api.get<IApiStory[]>(Stories, {
         params: { ...params },
       });
 
       const totalCount = +response.headers["x-total-count"];
       const stories = response.data.map((story: IApiStory) => storyAdapter(story));
 
       return {
         stories,
         totalCount,
       };
     } catch (error) {
       return null;
     }
   }

   async fetchStoryById(id: string): Promise<IStory | null> {
    try {
      const response = await api.get<IApiStory>(Stories + `/${id}`);
      const story = storyAdapter(response.data);
      return story;
    } catch (error) {
      return null
    }
  }
}

export const storyService = new StoryService()
