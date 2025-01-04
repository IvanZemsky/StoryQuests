export interface IStory {
   id: string
   name: string
   description: string
   img: string
   author: {
      id: string
      login: string
   }
   tags: string[]
   sceneCount: number
   passes: number
   likes: number
   date: string
}

export type SortByScenesAmount = "" | "short" | "medium" | "long"
export type OrderBy = "" | "best" | "popular" | "new"

export type StorySearchParams  = {
   limit: number
   page: number
   search: string
   order: OrderBy
   length: SortByScenesAmount
}

export type StorySearchResult = {
   stories: IStory[]
   totalCount: number
}
