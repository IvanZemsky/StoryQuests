import { AnswerEdge } from "@/entities/Answer";

export const createCustomEdge = (params: any): AnswerEdge => {
   return {
     ...params,
     data: { text: "" },
     animated: true,
     type: "storyEdge",
   };
 };