"use client"

import { Scene } from "@/src/features/scene"
import { observer } from "mobx-react"
import { IStory, NotValidStoryModal, PreviewModal, storyCreationStore } from "@/src/entities/Story"
import { useEffect } from "react"
import { modalStore } from "@/src/shared/model"

type Props = {}

export const StoryPreview = observer(({}: Props) => {
   const { isValid, validate, scenes, createScenes } = storyCreationStore
   const { opened } = modalStore

   useEffect(() => {
      if (opened === "storyPreview") {
         validate()
      }
   }, [opened])

   useEffect(() => {
      if (isValid) {
         createScenes()
      }
   }, [isValid])

   const storyData: IStory = {
      id: "1",
      name: "",
      description: "",
      img: "",
      scenes,
   }

   if (!isValid) {
      return (
         <NotValidStoryModal />
      )
   }

   return <PreviewModal scene={<Scene storyData={storyData} />} />
})
