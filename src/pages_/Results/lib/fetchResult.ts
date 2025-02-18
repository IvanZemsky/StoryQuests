import { StoryResult, storyService } from "@/entities/Story"
import { verifyServerSession } from "@/features/user"

export async function fetchResult({
   storyId,
   userId,
}: {
   storyId: string
   userId: string
}): Promise<StoryResult | null> {
   try {
      const session = await verifyServerSession()

      if (!session) throw new Error("user-unauthorized")

      const result = await storyService.fetchResult({ storyId, userId })
      return result
   } catch (error) {
      return null
   }
}
