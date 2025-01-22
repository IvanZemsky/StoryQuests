import { userService } from "@/entities/User"

export async function fetchUserById(id: string) {
   try {
      return await userService.getUserById(id)
   } catch (error) {
      return null
   }
}