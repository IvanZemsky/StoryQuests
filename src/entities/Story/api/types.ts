export type ApiStory = {
   _id: string
   name: string
   description: string
   img: string
   author: {
      _id: string
      login: string
   }
   tags: string[]
   sceneCount: number
   passes: number
   likes: number
   isLiked: boolean
   date: string
}

export type StoryPassesUpdateDto = {
   readonly storyId: string
   readonly passes: number
}

export type StoryLikeUpdateDto = {
   readonly storyId: string
   readonly isLiked: boolean
   readonly likes: number
}