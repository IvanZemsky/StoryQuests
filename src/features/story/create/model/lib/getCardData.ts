import { IStory } from "@/entities/Story";

export const getCardData = (name: string, description: string, img: string): IStory => ({
   id: "",
   name: name || "Name of the story",
   description: description || "Description",
   img,
   author: {
      id: "",
      login: "YourLogin",
   },
   tags: [],
   sceneCount: 0,
   passes: 345,
   likes: 100,
   date: "",
})
