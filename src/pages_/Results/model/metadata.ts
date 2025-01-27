import { storyService } from "@/entities/Story"
import { Metadata } from "next"
import { Page } from "./types"

export const generateMetadata = async (props: Page) => {
   const params = await props.params
   try {
      const data = await storyService.fetchStoryById(params.id)
      return {
         title: data ? `Results - ${data.name}` : "Story not found",
      } as Metadata
   } catch (error) {
      return {
         title: "Story not found",
      }
   }
}
