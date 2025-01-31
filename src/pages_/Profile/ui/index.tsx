import { SignOutBtn, verifyServerSession } from "@/features/user"
import { Wrapper } from "@/shared/ui"
import { ProfileCard, ProfileHeader, UserPagelayout } from "@/entities/User"
import { ProfileStoriesList } from "@/widgets/StoriesList"

export const Profile = async () => {
   const profileData = await verifyServerSession()

   if (!profileData) {
      return (
         <Wrapper>
            <p>Error while fetching profile</p>
         </Wrapper>
      )
   }

   return (
      <UserPagelayout
         header={<ProfileHeader title="Your profile" signOutBtn={<SignOutBtn />} />}
         userCard={<ProfileCard profileData={profileData} />}
         storiesList={
            <ProfileStoriesList
               userId={profileData.id}
               hasLabel
               notFoundMessage="You haven't created any stories yet"
            />
         }
      />
   )
}
