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
