import { MouseEventHandler } from "react"
import styles from "./PageBtns.module.scss"
import { Button } from "../Button/Button"
import cn from "classnames"

type Props = {
   currentPage: number
   pageAmount: number
   handleClick: (page: number) => MouseEventHandler<HTMLButtonElement>
}

export const PageBtns = ({ currentPage, pageAmount, handleClick }: Props) => {
   const pages = Array.from({ length: pageAmount }, (_, item) => item + 1)

   return (
      <div className={styles.pageBtns}>
         {pages.map((page) => (
            <Button
               key={page}
               onClick={handleClick(page)}
               className={cn(styles.button, {
                  [styles.active]: currentPage === page,
               })}
            >
               {page}
            </Button>
         ))}
      </div>
   )
}
