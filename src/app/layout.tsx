import type { Metadata } from "next"
import { ReactNode, Suspense } from "react"
import "@/src/shared/lib/styles/_vars.scss"
import "@/src/shared/lib/styles/mixins.scss"
import "@/src/app/styles/reset.scss"
import "@/src/app/styles/fonts.scss"
import { Header } from "@/src/widgets/Header"
import Loading from "@/app/loading"
import { Footer } from "@/src/widgets/Footer"
import { ReactQueryProvider } from "./ReactQueryProvider"

export const metadata: Metadata = {
   title: "Story Quests",
   description: "Web site with story quests",
}

type RootLayoutType = Readonly<{ children: ReactNode }>

export const RootLayout = ({ children }: RootLayoutType) => {
   return (
      <ReactQueryProvider>
         <html lang="en">
            <body>
               <div className="app">
                  <Header />
                  <main>
                     <Suspense fallback={<Loading />}>{children}</Suspense>
                  </main>
                  <Footer />
               </div>
               <div id="modal"></div>
            </body>
         </html>
      </ReactQueryProvider>
   )
}
