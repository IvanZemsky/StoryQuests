import { MouseEventHandler } from "react"
import styles from "./PageBtns.module.scss"
import { Button } from "../Button/Button"
import cn from "classnames"

interface PageBtnsProps {
   currentPage: number
   pageAmount: number
   handleClick: (page: number) => MouseEventHandler<HTMLButtonElement> | undefined
}

const PageBtns = ({ currentPage, pageAmount, handleClick }: PageBtnsProps) => {
   const pages = Array.from({ length: pageAmount }, (_, item) => item + 1)

   return (
      <div className={styles.pageBtns}>
         {pages.map((page) => (
            <Button
               key={page}
               onClick={handleClick(page)}
               className={cn(styles.button, { [styles.active]: currentPage === page })}
            >
               {page}
            </Button>
         ))}
      </div>
   )
}

export default PageBtns
