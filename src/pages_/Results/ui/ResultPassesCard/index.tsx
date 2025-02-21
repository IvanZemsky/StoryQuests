import styles from "./styles.module.scss"

type Props = {
   passes: number
   total: number
   number: number
}
export const ResultPassesCard = ({ total, passes, number }: Props) => {
   let resultPasses = Math.round((passes / total) * 100)
   const brightness = 1 - number * 0.045

   if (!resultPasses) return null

   return (
      <div className={styles.resultColumnBlock} style={{ height: `${resultPasses}%` }}>
         <div style={{ filter: `brightness(${brightness})` }}>{resultPasses}%</div>
      </div>
   )
}
