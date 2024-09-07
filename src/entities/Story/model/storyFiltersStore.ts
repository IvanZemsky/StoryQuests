import { makeAutoObservable, toJS } from "mobx"
import { OrderBy, SortByScenesAmount } from "../api/types"

class StoryFiltersStore {
   constructor() {
      makeAutoObservable(this)
   }

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
      console.log("order: ", order)
      console.log("length: ", length)
      console.log("search: ", search)
   }
}

export const storyFiltersStore = new StoryFiltersStore()
