import styles from "./styles.module.scss"

export const UserResultSkeleton = () => {
   return (
      <section className={styles.resultInfo}>
         <h2>Your result</h2>
         <div className={styles.userResult}></div>
      </section>
   )
}
