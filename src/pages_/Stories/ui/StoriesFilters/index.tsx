"use client"

import { Button, TextInput, SwitcherGroup, Select } from "@/shared/ui"
import styles from "./styles.module.scss"
import CrossIcon from "@/shared/assets/icons/cross.svg"
import SearchIcon from "@/shared/assets/icons/search.svg"
import { baseParams, filterData } from "../../model/formData"
import { Controller, useForm } from "react-hook-form"
import { useStoriesFilterParams } from "@/pages_/Stories/lib/hooks/useStoriesFilterParams"
import { OrderBy, SortByScenesAmount, StoryFiltersParams } from "@/entities/Story"

export const StoriesFilters = () => {
   const { filters, setParams } = useStoriesFilterParams()
   const { register, handleSubmit, getValues, reset, control } =
      useForm<StoryFiltersParams>({
         defaultValues: {
            search: filters?.search ?? "",
            order: filters?.order ?? "",
            length: filters?.length ?? "",
            page: 1,
         },
      })

   const onSubmit = () => {
      const search = getValues("search")
      const order = getValues("order") as OrderBy
      const length = getValues("length") as SortByScenesAmount

      setParams({ search, order, length, page: 1 })
   }

   const handleResetClick = () => {
      setParams(baseParams)
      reset({
         search: "",
         order: "",
         length: "",
         page: 1,
      })
   }

   const selectLengthSortTitle =
      filterData.find((item) => item.value === filters?.length)?.text || "Length"

   return (
      <header>
         <form className={styles.content} onSubmit={handleSubmit(onSubmit)}>
            <Controller
               control={control}
               name="order"
               render={({ field }) => (
                  <SwitcherGroup
                     name="order"
                     className={styles.sort}
                     value={field.value}
                     onChange={field.onChange}
                  >
                     <SwitcherGroup.Check text="New" value="new" id="order_new" />
                     <SwitcherGroup.Check
                        text="Popular"
                        value="popular"
                        id="order_popular"
                     />
                     <SwitcherGroup.Check text="Best" value="best" id="order_best" />
                  </SwitcherGroup>
               )}
            />

            <Controller
               control={control}
               name="length"
               render={({ field }) => (
                  <Select
                     className={styles.selectLength}
                     title={selectLengthSortTitle}
                     group={filterData}
                     value={field.value as string}
                     onChange={field.onChange}
                  />
               )}
            />

            <div className={styles.searchWrap}>
               <TextInput
                  className={styles.search}
                  placeholder="Search"
                  {...register("search")}
               />

               <Button
                  variant="filled"
                  leftIcon={<SearchIcon />}
                  type="submit"
                  className={styles.searchBtn}
               />
               <Button
                  variant="filled"
                  rightIcon={<CrossIcon />}
                  onClick={handleResetClick}
               />
            </div>
         </form>
      </header>
   )
}
