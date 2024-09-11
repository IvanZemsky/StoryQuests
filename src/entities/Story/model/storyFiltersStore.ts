import { makeAutoObservable } from "mobx"
import { OrderBy, SortByScenesAmount } from "../api/types"

class StoryFiltersStore {
   constructor() {
      makeAutoObservable(this)
   }

   limit = 8
   page = 0
   order: OrderBy = ""
   length: SortByScenesAmount = ""
   search = ""

   setPage = (page: number) => {
      this.page = page
   }

   setFilters = (order: OrderBy, length: SortByScenesAmount, search: string) => {
      this.page = 0
      this.order = order
      this.length = length
      this.search = search
   }
}

export const storyFiltersStore = new StoryFiltersStore()
