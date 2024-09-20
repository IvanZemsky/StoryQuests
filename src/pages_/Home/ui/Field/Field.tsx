import { BaseStoryField } from "@/entities/Story"
import { Background } from "@xyflow/react"
import styles from "./Field.module.scss"
import { edgeTypes, nodeTypes } from "@/features/story"
import { ButtonLink } from "@/shared/ui"
import { PageRoutes } from "@/shared/constants"
import { initialNodes } from "../../model/initialNodes"
import { initialEdges } from "../../model/initialEdges"

export const Field = () => {
   return (
      <>
         <BaseStoryField
            className={styles.content}
            title="Create your own story"
            nodes={initialNodes}
            edges={initialEdges}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            minZoom={2}
            maxZoom={2}
            fitView
         >
            <Background className={styles.background} />
         </BaseStoryField>
         <ButtonLink
            href={PageRoutes.Create}
            className={styles.link}
            variant="gradient"
            uppercase
         >
            Try it!
         </ButtonLink>
      </>
   )
}
