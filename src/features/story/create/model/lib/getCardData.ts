import { IStory } from "@/entities/Story"

export const getCardData = ({
   name,
   description,
   img,
   authorLogin,
}: Pick<IStory, "name" | "description" | "img"> & {
   authorLogin: string
}): IStory => ({
   id: "",
   name: name || "Name of the story",
   description: description || "Description",
   img,
   author: {
      id: "",
      login: authorLogin,
   },
   tags: [],
   sceneCount: 0,
   passes: 345,
   likes: 100,
   date: "",
})
