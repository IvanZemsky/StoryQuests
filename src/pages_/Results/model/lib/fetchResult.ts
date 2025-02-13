import { storyService } from "@/entities/Story"
import { verifyServerSession } from "@/features/user"

export async function fetchResult({
   storyId,
   userId,
}: {
   storyId: string
   userId: string
}): Promise<any> {
   try {
      const session = await verifyServerSession()

      if (!session) throw new Error("")

      const result = await storyService.fetchResult({ storyId, userId })
      return result
   } catch (error) {
      return null
   }
}
