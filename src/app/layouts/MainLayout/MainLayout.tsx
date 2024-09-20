import { PropsWithChildren, Suspense } from "react"
import { Header } from "@/widgets/Header"
import { Footer } from "@/widgets/Footer"
import styles from './styles.module.scss'
import { Loading } from "@/shared/ui"

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
