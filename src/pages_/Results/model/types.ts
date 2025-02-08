import { StoryId } from "@/entities/Story"

export type Page = {
   params: Promise<{
      id: StoryId
   }>
}