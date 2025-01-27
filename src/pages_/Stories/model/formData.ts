import { StoryFiltersParams } from "@/entities/Story"
import { CheckData } from "@/shared/model"

export const baseParams: StoryFiltersParams = {
   page: 1,
}

export const filterData: CheckData[] = [
   { text: "Short", value: "short", name: "filter", id: "filter_short" },
   { text: "Medium", value: "medium", name: "filter", id: "filter_medium" },
   { text: "Long", value: "long", name: "filter", id: "filter_long" },
]