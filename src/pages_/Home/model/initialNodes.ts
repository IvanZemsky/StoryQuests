import { SceneNode } from "@/entities/Scene"

export const initialNodes: SceneNode[] = [
   {
      id: "1",
      type: "startScene",
      position: { x: 320, y: 25 },
      data: {
         number: "1",
         title: "Create a scene",
         description: "",
         img: "",
         type: "default",
      },
   },
   {
      id: "2",
      type: "scene",
      position: { x: 320, y: 125 },
      data: {
         number: "2",
         title: "Add more scenes",
         description: "",
         img: "",
         type: "default",
      },
   },
   {
      id: "3",
      type: "endScene",
      position: { x: 320, y: 225 },
      data: {
         number: "3",
         title: "Add endings",
         description: "",
         img: "",
         type: "default",
      },
   },
]
