import { IAnswerEdge } from "@/entities/Answer";

export const createCustomEdge = (params: any): IAnswerEdge => {
   return {
     ...params,
     data: { text: "" },
     animated: true,
     type: "storyEdge",
   };
 };