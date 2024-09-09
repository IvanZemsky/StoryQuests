"use client"

import { Scene } from "@/src/widgets/Scene"
import { observer } from "mobx-react"
import { NotValidStoryModal, PreviewModal, storyCreationStore } from "@/src/entities/Story"
import { useEffect } from "react"
import { modalStore } from "@/src/shared/model"
import { Modals } from "@/src/shared/model/modals"

export const StoryPreview = observer(() => {
   const { isValid, validate, scenes, createScenes } = storyCreationStore
   const { opened } = modalStore

   useEffect(() => {
      if (opened === Modals.StoryPreview) {
         validate()
      }
   }, [opened])

   useEffect(() => {
      if (isValid) {
         createScenes()
      }
   }, [isValid])

   if (!isValid) {
      return (
         <NotValidStoryModal />
      )
   }

   return <PreviewModal scene={<Scene scenes={scenes} />} />
})
