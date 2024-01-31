import Head from "next/head"
import { authedOnlySSP } from "../utils/authedOnly"
import { View } from "@repo/ui"
import { ProfileScreen } from "@repo/app/features/profile/screen"

const Page = () => (
  <>
    <Head>
      <title>Profile</title>
    </Head>
    <View>
      <ProfileScreen />
    </View>
  </>
)

export const getServerSideProps = authedOnlySSP()

export default Page
