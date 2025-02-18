import { AnswerSchema } from "@/entities/Answer"
import { z } from "zod"

export const SceneTypeSchema = z.enum(["default", "end"])

export const GetSceneDtoSchema = z
   .object({
      _id: z.string(),
      sceneId: z.string(),
      storyId: z.string(),
      title: z.string(),
      description: z.string(),
      img: z.string(),
      type: SceneTypeSchema,
      answers: z.array(AnswerSchema).nullable(),
      passes: z.number().optional(),
   })
   .refine(
      (data) => {
         if (data.type === "end" && data.passes === undefined) {
            return false
         }
         return true
      },
      {
         message: "Field 'passes' is nessecary if type === \"end\"",
         path: ["passes"],
      },
   )
