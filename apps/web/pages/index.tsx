import { HomeLayout } from "@repo/app/features/home/layout.web"
import { HomeScreen } from "@repo/app/features/home/screen"
import { authedOnlySSP } from "../utils/authedOnly"
import { View, Text } from "@repo/ui"

const Home = () => {
  return (
    <HomeLayout>
      <View backgroundColor="$brand.100">
        <HomeLayout.Container>
          <Text size="$md" color="$gray.500">
            Home
          </Text>
        </HomeLayout.Container>
        <HomeLayout.Container paddingVertical="$5">
          <Text size="$2xl" fontFamily="$display">
            Hello there, friend
          </Text>
        </HomeLayout.Container>
      </View>

      <HomeLayout.Container>
        <HomeScreen />
      </HomeLayout.Container>
    </HomeLayout>
  )
}

export const getServerSideProps = authedOnlySSP()

export default Home
