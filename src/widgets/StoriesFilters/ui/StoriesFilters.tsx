"use client"

import { Button, TextInput, SwitcherGroup, Check, Select } from "@/src/shared/ui"
import styles from "./StoriesFilters.module.scss"
import CrossIcon from "@/src/shared/assets/icons/cross.svg"
import SearchIcon from "@/src/shared/assets/icons/search.svg"
import { IStory, fetchStories } from "@/src/entities/Story"
import { useQueryClient, UseQueryOptions } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { filterData, orderData } from "./model/formData"
import { ChangeEvent, useEffect, useState } from "react"
import { useForm } from "react-hook-form"

export const StoriesFilters = () => {
   //const queryClient = useQueryClient();
   const { register, handleSubmit, reset, watch, getValues } = useForm()

   const onSubmit = (data: any) => {
      console.log(getValues("order"), getValues("filters"), getValues("search"))
   }

   const handleReset = () => reset()

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
               {...register("filters")}
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
