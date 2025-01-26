import { z } from "zod"

export const ApiStorySchema = z.object({
   _id: z.string(),
   name: z.string(),
   description: z.string(),
   img: z.string(),
   author: z.object({ _id: z.string(), login: z.string() }),
   passes: z.number(),
   likes: z.number(),
   isLiked: z.boolean(),
   tags: z.array(z.string()),
   sceneCount: z.number(),
   date: z.string().datetime(),
})

export const StorySortByLengthSchema = z.enum(["", "short", "medium", "long"])

export const StoryOrderBySchema = z.enum(["", "best", "popular", "new"])

export const StorySearchParamsSchema = z.object({
   page: z.coerce.number().positive().optional(),
   search: z.string().optional(),
   order: StoryOrderBySchema.optional(),
   length: StorySortByLengthSchema.optional(),
})
