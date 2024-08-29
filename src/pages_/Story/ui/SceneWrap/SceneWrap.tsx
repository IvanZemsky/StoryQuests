'use client'

import { Scene } from "@/src/features/scene"
import styles from "./SceneWrap.module.scss"
import { useParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { IScene } from "@/src/entities/Scene"
import { fetchScenesByStoryId } from "@/src/entities/Scene/api/queries/fetchScenesByStoryId"
import Loading from "@/app/loading"

type Props = {}
export const SceneWrap = ({}: Props) => {
   const {id} = useParams()

   const { data: scenes, isError, isLoading } = useQuery<IScene[]>({
      queryKey: ['scene'],
      queryFn: () => fetchScenesByStoryId(id as string),
    });

    if (isError || !scenes) {
      return <p>Error</p>
    }

    if (isLoading) {
      return <Loading />
    }

   return (
      <div className={styles.content}>
         <Scene scenes={scenes} />
      </div>
   )
}
