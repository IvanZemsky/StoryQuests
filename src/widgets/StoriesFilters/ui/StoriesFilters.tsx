"use client"

import { Button, TextInput, SwitcherGroup, Select } from "@/src/shared/ui"
import styles from "./StoriesFilters.module.scss"
import CrossIcon from "@/src/shared/assets/icons/cross.svg"
import SearchIcon from "@/src/shared/assets/icons/search.svg"
import { filterData, orderData } from "./model/formData"
import { useForm } from "react-hook-form"
import { storyFiltersStore } from "@/src/entities/Story"

const {setFilters} = storyFiltersStore

export const StoriesFilters = () => {
   const { register, handleSubmit, reset, getValues } = useForm();

   const onSubmit = (data: any) => {
      const search = getValues("search");
      const order = getValues("order");
      const length = getValues("length");

      setFilters(order, length, search)

      console.log("order: ", order)
      console.log("length: ", length)
      console.log("search: ", search)
   };

   const handleReset = () => reset();

   return (
      <header>
         <form className={styles.content} onSubmit={handleSubmit(onSubmit)}>
            <SwitcherGroup
               className={styles.sort}
               group={orderData}
               {...register("order")}
            />

            <Select
               className={styles.selectLength}
               title="Length"
               group={filterData}
               {...register("length")}
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
               <Button variant="filled" rightIcon={<CrossIcon />} onClick={handleReset} />
            </div>
         </form>
      </header>
   )
}
