import { ReactNode } from "react";
import { ReactQueryProvider } from "./providers/ReactQueryProvider";
import { Layout } from "./layouts/Layout";

type RootLayoutType = Readonly<{ children: ReactNode }>

export const RootLayout = ({children}: RootLayoutType) => {
   return ( 
      <ReactQueryProvider>
         <html lang="en">
            <body>
               <div className="root">
                  <Layout>{children}</Layout>
               </div>
               <div id="modal"></div>
            </body>
         </html>
      </ReactQueryProvider>
   );
}