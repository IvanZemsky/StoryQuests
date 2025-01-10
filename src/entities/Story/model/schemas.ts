import { z } from "zod"
import { OrderBy, SortByScenesAmount } from "./types"

export const storySearchParamsSchema = z.object({
   page: z.coerce.number().positive().nullable(),
   search: z.string().nullable(),
   order: z
      .string()
      .transform((value) => value as OrderBy)
      .nullable(),
   length: z
      .string()
      .transform((value) => value as SortByScenesAmount)
      .nullable(),
})

export type StoryFiltersParams = z.infer<typeof storySearchParamsSchema>
