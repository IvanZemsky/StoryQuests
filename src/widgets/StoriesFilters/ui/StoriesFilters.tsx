"use client"

import {
   Button,
   CrossIcon,
   SearchIcon,
   TextInput,
   SwitcherGroup,
   Check,
   Select,
} from "@/src/shared/ui"
import styles from "./StoriesFilters.module.scss"

export const StoriesFilters = () => {
   return (
      <header>
         <form className={styles.content}>
            <SwitcherGroup className={styles.sort}>
               <Check text="New" name="sort" id="sort1" />
               <Check text="Popular" name="sort" id="sort2" />
               <Check text="Best" name="sort" id="sort3" />
            </SwitcherGroup>

            <Select className={styles.selectLength}>
               <Check text="a1" name="sort2" id="sort4" />
               <Check text="a2" name="sort2" id="sort5" />
               <Check text="a3" name="sort2" id="sort6" />
            </Select>

            <div className={styles.searchWrap}>
               <TextInput className={styles.search} placeholder="Search" />

               <Button
                  variant="filled"
                  leftIcon={<SearchIcon />}
                  className={styles.searchBtn}
               />
               <Button variant="filled" rightIcon={<CrossIcon />} />
            </div>
         </form>
      </header>
   )
}

export default StoriesFilters
