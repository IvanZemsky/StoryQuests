import { SceneNode } from "@/entities/Scene";
import { STORY_FIRST_SCENE } from "@/entities/Story";

export const initialNodes: SceneNode[] = [
   {
      id: "first-node",
      type: "startScene",
      position: { x: 0, y: 0 },
      data: {number: STORY_FIRST_SCENE, title: "", description: "", img: "", type: "default" },
   },
]