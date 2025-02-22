import { Tooltip } from "@/shared/ui"
import styles from "./styles.module.scss"

type Props = {
   passes: number
   total: number
   number: number
   text: string
}

export const ResultPassesCard = ({ total, passes, number, text }: Props) => {
   let resultPasses = (passes / total) * 100
   const brightness = 1 - number * 0.045

   if (!resultPasses) return null

   return (
      <Tooltip text={text} className={styles.tooltip}>
         <div className={styles.resultColumnBlock} style={{ height: `${resultPasses}%` }}>
            <div style={{ filter: `brightness(${brightness})` }}>{Math.round(resultPasses)}%</div>
         </div>
      </Tooltip>
   )
}
