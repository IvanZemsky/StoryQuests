"use client"

import { useParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { IScene } from "@/src/entities/Scene"
import { fetchScenesByStoryId } from "@/src/entities/Scene/api/queries/fetchScenesByStoryId"
import Loading from "@/app/loading"
import { Scene } from "@/src/widgets/Scene"
import styles from './SceneWrap.module.scss'

type Props = {}

export const SceneWrap = ({}: Props) => {
   const { id } = useParams()

   const {
      data: scenes,
      isError,
      isLoading,
   } = useQuery<IScene[]>({
      queryKey: ["scene"],
      queryFn: () => fetchScenesByStoryId(id as string),
   })

   if (isError) return <p>Error</p>
   if (isLoading) return <Loading />
   if (!scenes) return <p>No scenes found</p>

   return (
      <div className={styles.content}>
         <Scene scenes={scenes}/>
      </div>
   )
}
