import { StoryFiltersParams, storySearchParamsSchema } from "@/entities/Story"
import { createQueryParamsString } from "@/shared/lib"
import { usePathname, useSearchParams, useRouter } from "next/navigation"

export function useStoriesFilterParams() {
   const router = useRouter()
   const pathname = usePathname()
   const searchParams = useSearchParams()

   const rawFilters = {
      order: searchParams.get("order"),
      length: searchParams.get("length"),
      search: searchParams.get("search"),
      page: searchParams.get("page"),
   }

   const parsedFilters = storySearchParamsSchema.safeParse(rawFilters)

   const setParams = (params: StoryFiltersParams) => {
      router.push(pathname + "?" + createQueryParamsString(params, searchParams))
   }

   return {
      parseError: parsedFilters.error?.message,
      filters: parsedFilters.data,
      setParams,
   }
}
