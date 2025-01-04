export interface IApiStory {
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
   date: string
}