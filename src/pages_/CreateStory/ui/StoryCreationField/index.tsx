"use client"

import { storyCreationStore } from "@/features/story"
import { StoryField } from "@/widgets/StoryField"

const { saveNodes, saveEdges } = storyCreationStore

export const StoryCreationField = () => {
   return <StoryField nodesChangeEffect={saveNodes} edgesChangeEffect={saveEdges} />
}
