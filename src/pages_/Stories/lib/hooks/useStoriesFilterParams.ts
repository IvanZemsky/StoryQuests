import { StoryFiltersParams, storySearchParamsSchema } from "@/entities/Story"
import { createQueryParamsString, useTypedSearchParams } from "@/shared/lib"
import { usePathname, useRouter } from "next/navigation"

export function useStoriesFilterParams() {
   const router = useRouter()
   const pathname = usePathname()
   const searchParams = useTypedSearchParams(storySearchParamsSchema)

   const setParams = (params: StoryFiltersParams) => {
      const initialParams = searchParams.data as Record<string, string> | undefined
      router.push(pathname + "?" + createQueryParamsString(params, initialParams))
   }
   return {
      parseError: searchParams.error?.message,
      filters: searchParams.success ? (searchParams.data as StoryFiltersParams) : null,
      setParams,
   }
}
