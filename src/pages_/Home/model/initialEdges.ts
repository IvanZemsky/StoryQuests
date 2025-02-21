import { AnswerEdge } from "@/entities/Answer";

export const initialEdges: AnswerEdge[] = [
   {
      id: "answer_1",
      type: "storyEdge",
      source: "1",
      target: "2",
      data: { text: "Add answers" },
      animated: true,
   },
   {
      id: "answer_2",
      type: "storyEdge",
      source: "2",
      target: "3",
      data: { text: "Add more answers" },
      animated: true,
   },
]