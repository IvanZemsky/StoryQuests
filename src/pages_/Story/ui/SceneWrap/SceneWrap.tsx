"use client"

import { useParams } from "next/navigation"
import { StoryScene } from "@/widgets/StoryScene"
import styles from "./SceneWrap.module.scss"
import { Loading } from "@/shared/ui"
import { storyStore } from "@/entities/Story"
import { useScenes } from "@/entities/Scene/lib/hooks/useScenes"

export const SceneWrap = () => {
   const { reset } = storyStore
   const { id } = useParams<{ id: string }>()

   const { data: scenes, isError, isLoading, isSuccess } = useScenes(id)

   if (isSuccess) {
      reset()
   }

   if (isError) return <p>Error</p>
   if (isLoading) return <Loading />
   if (!scenes) return <p>No scenes found</p>

   return (
      <div className={styles.content}>
         <StoryScene scenes={scenes} />
      </div>
   )
}
