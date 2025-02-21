"use client"

import { useState } from "react"
import { Scene } from "../../model/types"

export function useCurrentScene(scenes: Scene[], firstScene: string) {
   const [sceneNumber, setSceneNumber] = useState(firstScene)

   const sceneData = scenes.find((scene) => scene.number === sceneNumber)

   return {
      sceneNumber,
      setSceneNumber,
      sceneData,
   }
}
