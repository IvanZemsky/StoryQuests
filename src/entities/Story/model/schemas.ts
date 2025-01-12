import { z } from "zod"

export const storySortByLengthSchema = z.enum(["", "short", "medium", "long"])

export const storyOrderBySchema = z.enum(["", "best", "popular", "new"])

export const storySearchParamsSchema = z.object({
   page: z.coerce.number().positive().nullable().default(1),
   search: z.string().nullable().default(null),
   order: storyOrderBySchema.nullable().default(null),
   length: storySortByLengthSchema.nullable().default(null),
})
