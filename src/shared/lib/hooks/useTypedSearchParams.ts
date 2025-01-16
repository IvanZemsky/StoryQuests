"use client"

// eslint-disable-next-line no-restricted-imports
import { useSearchParams } from "next/navigation"
import { SafeParseReturnType, z } from "zod"

export function useTypedSearchParams<T extends z.ZodTypeAny>(
   schema: T,
): SafeParseReturnType<T, z.infer<T>> {
   const searchParams = useSearchParams()

   const parsed = schema.safeParse(
      Object.fromEntries(searchParams.entries())
   )

   return parsed
}
