import { Button, View, Text } from "@repo/ui"
import { useAuthState } from "../../provider/AuthProvider"

export const ProfileScreen = () => {
  const auth = useAuthState()

  return (
    <View gap="$4">
      <Text color="$gray.500" fontWeight="500" size="$md">
        Settings, etc., all here, in the profile.
      </Text>
      <Button
        onPress={() => {
          auth.signOut()
        }}
      >
        <Button.Text>Sign out</Button.Text>
      </Button>
    </View>
  )
}
