import { z } from "zod"

export function logParsing<T extends z.ZodSchema>(schema: T, data: z.infer<T>) {
   const parsed = schema.safeParse(data)

   if (!parsed.success) {
      console.warn("[Zod] Data validation error:", parsed.error)
   }
}
