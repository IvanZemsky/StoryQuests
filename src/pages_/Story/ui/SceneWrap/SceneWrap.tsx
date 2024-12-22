"use client"

import { useParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { fetchScenesByStoryId } from "@/entities/Scene/api/queries/fetchScenesByStoryId"
import { StoryScene } from "@/widgets/StoryScene"
import styles from './SceneWrap.module.scss'
import { Loading } from "@/shared/ui"
import { Scene } from "@/entities/Scene"

type Props = {}

export const SceneWrap = ({}: Props) => {
   const { id } = useParams()

   const {
      data: scenes,
      isError,
      isLoading,
   } = useQuery<Scene[]>({
      queryKey: ["scene"],
      queryFn: () => fetchScenesByStoryId(id as string),
   })

   if (isError) return <p>Error</p>
   if (isLoading) return <Loading />
   if (!scenes) return <p>No scenes found</p>

   return (
      <div className={styles.content}>
         <StoryScene scenes={scenes}/>
      </div>
   )
}
