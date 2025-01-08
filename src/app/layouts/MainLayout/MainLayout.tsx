import { PropsWithChildren } from "react"
import { Header } from "@/widgets/Header"
import { Footer } from "@/widgets/Footer"
import styles from './styles.module.scss'

export const MainLayout = ({ children }: PropsWithChildren) => {
   return (
      <div className={styles.app}>
         <Header />
         <main>
            {children}
         </main>
         <Footer />
      </div>
   )
}
