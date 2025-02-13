import { Scene } from "@/entities/Scene";

export function setStoryResultToLS(scene: Scene) {
   localStorage.setItem("storyResult", JSON.stringify({
      scene,
      datetime: new Date().toISOString(),
   }))
}