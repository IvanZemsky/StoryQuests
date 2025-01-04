import { makeAutoObservable } from "mobx"
import { OrderBy, SortByScenesAmount, StorySearchParams } from "../model/types"
import { STORIES_SEARCH_LIMIT } from "./constants"

class StoryFiltersStore {
   constructor() {
      makeAutoObservable(this)
   }

   filters: StorySearchParams = {
      limit: STORIES_SEARCH_LIMIT,
      page: 0,
      search: "",
      order: "",
      length: "",
   }

   setPage = (page: number) => {
      this.filters.page = page
   }

   setFilters = ({
      order,
      length,
      search,
   }: {
      order: OrderBy
      length: SortByScenesAmount
      search: string
   }) => {
      this.filters = {
         ...this.filters,
         page: 0,
         order,
         length,
         search,
      }
   }
}

export const storyFiltersStore = new StoryFiltersStore()
