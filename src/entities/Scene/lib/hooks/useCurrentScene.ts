"use client"

import { useState } from "react"
import { Scene } from "../../model/types"

export function useCurrentScene(scenes: Scene[], firstScene: string) {
   const [sceneId, setSceneId] = useState(firstScene)

   const sceneData = scenes.find((scene) => scene.id === sceneId)

   return {
      sceneId,
      setSceneId,
      sceneData,
   }
}
