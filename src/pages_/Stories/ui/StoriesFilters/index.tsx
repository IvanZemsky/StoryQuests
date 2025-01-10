"use client"

import { Button, TextInput, SwitcherGroup, Select } from "@/shared/ui"
import styles from "./styles.module.scss"
import CrossIcon from "@/shared/assets/icons/cross.svg"
import SearchIcon from "@/shared/assets/icons/search.svg"
import { baseParams, filterData, orderData } from "../../model/formData"
import { useForm } from "react-hook-form"
import { useStoriesFilterParams } from "@/pages_/Stories/lib/hooks/useStoriesFilterParams"

export const StoriesFilters = () => {
   const { filters, setParams } = useStoriesFilterParams()
   const { register, handleSubmit, getValues } = useForm()

   const onSubmit = () => {
      const search = getValues("search")
      const order = getValues("order")
      const length = getValues("length")

      setParams({ search, order, length, page: 1 })
   }

   const handleResetClick = () => {
      setParams(baseParams)
   }

   const selectLengthSortTitle =
      filterData.find((item) => item.value === filters?.length)?.text || "Length"

   return (
      <header>
         <form className={styles.content} onSubmit={handleSubmit(onSubmit)}>
            <SwitcherGroup
               className={styles.sort}
               group={orderData}
               {...register("order", { value: filters?.order })}
            />

            <Select
               className={styles.selectLength}
               title={selectLengthSortTitle}
               group={filterData}
               {...register("length", { value: filters?.length })}
            />

            <div className={styles.searchWrap}>
               <TextInput
                  className={styles.search}
                  placeholder="Search"
                  {...register("search", { value: filters?.search })}
               />

               <Button
                  variant="filled"
                  leftIcon={<SearchIcon />}
                  type="submit"
                  className={styles.searchBtn}
               />
               <Button variant="filled" rightIcon={<CrossIcon />} onClick={handleResetClick} />
            </div>
         </form>
      </header>
   )
}
