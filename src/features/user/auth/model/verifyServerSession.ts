import { userService } from "@/entities/User"
import { cookies } from "next/headers"

export async function verifyServerSession() {
   const accessToken = (await cookies()).get("access-token")

   const session = await userService.getSessionInfo({
      cookie: `${accessToken?.name}=${accessToken?.value}`,
   })

   return session
}