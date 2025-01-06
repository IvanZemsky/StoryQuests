"use client"

import { StoryScene } from "@/widgets/StoryScene"
import { observer } from "mobx-react"
import {
   NotValidStoryModal,
   PreviewModal,
   storyCreationStore,
} from "@/entities/Story"
import { useEffect } from "react"
import { modalStore } from "@/shared/model"
import { Modals } from "@/shared/model/modals"

export const StoryPreview = observer(() => {
   const { isValid, validate, scenes } = storyCreationStore
   const { opened } = modalStore

   useEffect(() => {
      if (opened === Modals.StoryPreview) {
         validate()
      }
   }, [opened])

   if (!isValid) {
      return <NotValidStoryModal />
   }

   return <PreviewModal scene={<StoryScene scenes={scenes} />} />
})
