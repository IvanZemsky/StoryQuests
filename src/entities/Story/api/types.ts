export interface IApiStory {
   _id: string
   name: string
   description: string
   img: string
   author: {
      _id: string
      login: string
   }
   sceneCount: number
}