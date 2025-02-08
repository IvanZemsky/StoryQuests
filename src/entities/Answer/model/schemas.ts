import { z } from "zod"

export const AnswerSchema = z.object({
   id: z.string(),
   text: z.string(),
   nextSceneId: z.string(),
})