import { z } from "zod"

export const storySortByLengthSchema = z.enum(["", "short", "medium", "long"])

export const storyOrderBySchema = z.enum(["", "best", "popular", "new"])

export const storySearchParamsSchema = z.object({
   page: z.coerce.number().positive().optional(),
   search: z.string().optional(),
   order: storyOrderBySchema.optional(),
   length: storySortByLengthSchema.optional(),
})
