import { BaseStoryField } from "@/src/entities/Story"
import { Background } from "@xyflow/react"
import styles from "./Field.module.scss"
import { edgeTypes, nodeTypes } from "@/src/features/story"
import { ButtonLink } from "@/src/shared/ui"
import { PageRoutes } from "@/src/shared/constants"
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
