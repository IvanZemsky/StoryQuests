import { useRef } from "react"

export function useSceneNumber(initialNumber: number) {
   const sceneNumber = useRef(initialNumber)

   const getId = () => {
      sceneNumber.current += 1
      return String(sceneNumber.current)
   }

   return getId
}
