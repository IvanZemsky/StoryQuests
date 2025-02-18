"use client"

import { Button, TextInput, SwitcherGroup, Select } from "@/shared/ui"
import styles from "./styles.module.scss"
import CrossIcon from "@/shared/assets/icons/cross.svg"
import SearchIcon from "@/shared/assets/icons/search.svg"
import { Controller, useForm } from "react-hook-form"
import { useStoriesFilterParams } from "@/pages_/Stories/lib/hooks/useStoriesFilterParams"
import { OrderBy, SortByScenesAmount, StoryFiltersParams } from "@/entities/Story"
import { useEffect } from "react"

export const baseParams: StoryFiltersParams = {
   page: 1,
   search: "",
   order: "",
   length: "",
}

export const StoriesFilters = () => {
   const { filters, setParams } = useStoriesFilterParams()
   const { register, handleSubmit, getValues, reset, control } =
      useForm<StoryFiltersParams>({
         defaultValues: {
            search: filters?.search || baseParams.search,
            order: filters?.order || baseParams.order,
            length: filters?.length || baseParams.length,
            page: filters?.page || baseParams.page,
         },
      })

      useEffect(() => {
         console.log(filters)
      }, [filters])

   const onSubmit = () => {
      const search = getValues("search")
      const order = getValues("order") as OrderBy
      const length = getValues("length") as SortByScenesAmount

      console.log("values", search, order, length)
      console.log("filters", filters)

      if (
         search === filters?.search &&
         order === filters?.order &&
         length === filters?.length
      ) {
         return
      }

      setParams({ search, order, length, page: 1 })
   }

   const handleResetClick = () => {
      reset(baseParams)
   }

   return (
      <header>
         <form className={styles.content} onSubmit={handleSubmit(onSubmit)}>
            <Controller
               control={control}
               name="order"
               render={({ field }) => (
                  <SwitcherGroup
                     className={styles.sort}
                     {...field}
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
                     title="Length"
                     {...field}
                  >
                     <Select.Option text="Short" value="short" id="length_short" />
                     <Select.Option text="Medium" value="medium" id="length_medium" />
                     <Select.Option text="Long" value="long" id="length_long" />
                  </Select>
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
