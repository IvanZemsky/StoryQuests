import { Metadata } from "next"
import { Page } from "./types"
import { fetchStory } from "../lib/fetchStory"

export const generateMetadata = async ({ params }: Page) => {
   const { id } = await params

   const data = await fetchStory(id)

   return {
      title: data?.name || "Story not found",
   } as Metadata
}
