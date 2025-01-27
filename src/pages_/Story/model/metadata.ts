import { Metadata } from "next"
import { storyService } from "@/entities/Story"
import { Page } from "./types"

export const generateMetadata = async ({ params }: Page) => {
   const {id} = await params
   try {
      const data = await storyService.fetchStoryById(id)
      return {
         title: data?.name || "Story not found",
      } as Metadata
   } catch (error) {
      return {
         title: "Story not found",
      }
   }
}