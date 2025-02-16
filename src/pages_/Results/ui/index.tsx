import { storyService } from "@/entities/Story"
import {  Wrapper } from "@/shared/ui"
import { Page } from "../model/types"
import styles from "./styles.module.scss"
import { ResultHeader } from "./ResultHeader"
import { UserResult } from "./UserResult"
import { fetchResult } from "../lib/fetchResult"

export const Results = async ({ params }: Page) => {
   const { id } = await params

   const story = await storyService.fetchStoryById(id)
   const result = await fetchResult({ storyId: id, userId: story.author.id })

   return (
      <Wrapper>
         <div className={styles.content}>
            <ResultHeader story={story} result={result}/>
            <UserResult result={result}/>
            <section className={styles.stats}>
               <h2>Statistics</h2>
               <div className={styles.statsWrap}>
                  <div className={styles.allResults}>
                     <div className={styles.resultCard}>
                        <p className={styles.totalResults}>123</p>
                        <img
                           src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1691611430012-0a8482162ec2%3Fq%3D80%26w%3D687%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=1920&q=75"
                           alt="Result image"
                        />
                        <div>
                           <p className={styles.resultCardTitle}>
                              The Throne&apos;s Trap
                           </p>
                           <p className={styles.resultCardDesc}>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              Architecto natus veritatis facilis nihil repellat corrupti,
                              nemo nam doloribus impedit expedita perferendis libero id
                              aut numquam necessitatibus vitae praesentium officia ex.
                           </p>
                        </div>
                     </div>
                     <div className={styles.resultCard}>
                        <p className={styles.totalResults}>123</p>
                        <img
                           src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1691611430012-0a8482162ec2%3Fq%3D80%26w%3D687%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=1920&q=75"
                           alt="Result image"
                        />
                        <div>
                           <p className={styles.resultCardTitle}>
                              The Throne&apos;s Trap
                           </p>
                           <p className={styles.resultCardDesc}>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              Architecto natus veritatis facilis nihil repellat corrupti,
                              nemo nam doloribus impedit expedita perferendis libero id
                              aut numquam necessitatibus vitae praesentium officia ex.
                           </p>
                        </div>
                     </div>
                     <div className={styles.resultCard}>
                        <p className={styles.totalResults}>123</p>
                        <img
                           src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1691611430012-0a8482162ec2%3Fq%3D80%26w%3D687%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=1920&q=75"
                           alt="Result image"
                        />
                        <div>
                           <p className={styles.resultCardTitle}>
                              The Throne&apos;s Trap
                           </p>
                           <p className={styles.resultCardDesc}>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              Architecto natus veritatis facilis nihil repellat corrupti,
                              nemo nam doloribus impedit expedita perferendis libero id
                              aut numquam necessitatibus vitae praesentium officia ex.
                           </p>
                        </div>
                     </div>
                     <div className={styles.resultCard}>
                        <p className={styles.totalResults}>123</p>
                        <img
                           src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1691611430012-0a8482162ec2%3Fq%3D80%26w%3D687%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=1920&q=75"
                           alt="Result image"
                        />
                        <div>
                           <p className={styles.resultCardTitle}>
                              The Throne&apos;s Trap
                           </p>
                           <p className={styles.resultCardDesc}>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              Architecto natus veritatis facilis nihil repellat corrupti,
                              nemo nam doloribus impedit expedita perferendis libero id
                              aut numquam necessitatibus vitae praesentium officia ex.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className={styles.resultColumn}>
                     <div className={styles.resultColumnBlock}>
                        10%
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </Wrapper>
   )
}
