import { SceneNode } from "@/entities/Scene";
import { STORY_FIRST_SCENE } from "@/entities/Story";

export const initialNodes: SceneNode[] = [
   {
      id: STORY_FIRST_SCENE,
      type: "startScene",
      position: { x: 0, y: 0 },
      data: { title: "", description: "", img: "", type: "default" },
   },
]