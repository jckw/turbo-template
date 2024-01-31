import { StyleSheet } from "react-native"
import { StatusBar } from "expo-status-bar"
import { HomeScreen } from "@repo/app/features/home/screen"
import { View, Stack, Text } from "@repo/ui"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function Screen() {
  const insets = useSafeAreaInsets()
  return (
    <View style={styles.container}>
      <Stack
        backgroundColor="$brand.100"
        padding={16}
        paddingTop={16 + insets.top}
      >
        <Text color="$gray.500" fontWeight="500">
          Monday, Jan 4
        </Text>
        <Text fontFamily="$display" size="$xl">
          Good morning,{"\n"}Olivia
        </Text>
      </Stack>
      <View padding="$4" flex={1}>
        <HomeScreen />
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
  },
})
