import { IAnswerEdge } from "@/entities/Answer";

export const initialEdges: IAnswerEdge[] = [
   {
      id: "answer_1",
      type: "storyEdge",
      source: "scene_1",
      target: "scene_2",
      data: { text: "Add answers" },
      animated: true,
   },
   {
      id: "answer_2",
      type: "storyEdge",
      source: "scene_2",
      target: "scene_3",
      data: { text: "Add more answers" },
      animated: true,
   },
]