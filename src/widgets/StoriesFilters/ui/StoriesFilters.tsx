import { Button, CrossIcon, SearchIcon, TextInput, SwitcherGroup } from "@/src/shared";
import styles from './StoriesFilters.module.scss'

export const StoriesFilters = () => {
   return ( 
      <header>
         <form className={styles.content}>
         <SwitcherGroup>
            <Button variant="filled">New</Button>
            <Button variant="filled">Tranding</Button>
            <Button variant="filled">Best</Button>
         </SwitcherGroup>

         <TextInput placeholder="Search"/>
         
         <Button leftIcon={<SearchIcon/>} className={styles.searchBtn}/>
         <Button rightIcon={<CrossIcon/>} />
         </form>
      </header>
    );
}
 
export default StoriesFilters;