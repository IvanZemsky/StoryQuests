import { PropsWithChildren, Suspense } from "react"
import { Header } from "@/src/widgets/Header"
import Loading from "@/app/loading"
import { Footer } from "@/src/widgets/Footer"
import styles from './styles.module.scss'

export const MainLayout = ({ children }: PropsWithChildren) => {
   return (
      <div className={styles.app}>
         <Header />
         <main>
            <Suspense fallback={<Loading />}>{children}</Suspense>
         </main>
         <Footer />
      </div>
   )
}
