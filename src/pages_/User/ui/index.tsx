import { UserPagelayout, ProfileHeader, ProfileCard } from "@/entities/User"
import { Wrapper } from "@/shared/ui"
import { ProfileStoriesList } from "@/widgets/StoriesList"
import { fetchUserById } from "../lib/fetchUserById"
import { Page } from "../model/types"
import { redirect } from "next/navigation"
import { verifyServerSession } from "@/features/user"

export const User = async (props: Page) => {
   const params = await props.params
   const session = await verifyServerSession()

   if (session?.id === params.id) {
      redirect("/profile")
   }

   const profileData = await fetchUserById(params.id)

   if (!profileData) {
      return (
         <Wrapper>
            <p>Error while fetching profile</p>
         </Wrapper>
      )
   }

   return (
      <UserPagelayout
         header={<ProfileHeader title={profileData.login} />}
         userCard={<ProfileCard profileData={profileData} />}
         storiesList={
            <ProfileStoriesList
               userId={profileData.id}
               hasLabel={false}
               notFoundMessage={"User hasn't created any stories yet"}
            />
         }
      />
   )
}
