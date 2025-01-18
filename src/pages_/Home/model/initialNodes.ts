import { SceneNode } from "@/entities/Scene"

export const initialNodes: SceneNode[] = [
   {
      id: "scene_1",
      type: "startScene",
      position: { x: 320, y: 25 },
      data: { title: "Create a scene", description: "", img: "", type: "default" },
   },
   {
      id: "scene_2",
      type: "scene",
      position: { x: 320, y: 125 },
      data: { title: "Add more scenes", description: "", img: "", type: "default" },
   },
   {
      id: "scene_3",
      type: "endScene",
      position: { x: 320, y: 225 },
      data: { title: "Add endings", description: "", img: "", type: "default" },
   },
]