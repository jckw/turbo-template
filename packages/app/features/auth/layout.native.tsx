import { SafeAreaView } from "react-native-safe-area-context"
import { Stack, Text, withStaticProperties } from "@repo/ui"
import { KeyboardAvoidingView, Platform } from "react-native"

const _AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Stack
        alignItems="stretch"
        justifyContent="center"
        padding="$6"
        paddingTop="$6"
        flex={1}
      >
        {children}
      </Stack>
    </KeyboardAvoidingView>
  </SafeAreaView>
)

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Text fontFamily="$display" size="$xl" color="$gray.900">
      {children}
    </Text>
  )
}

const Subtitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Text color="$gray.500" fontFamily="$body" size="$sm">
      {children}
    </Text>
  )
}

const Header: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Stack gap="$2" marginBottom="$5">
      {children}
    </Stack>
  )
}

export const AuthLayout = withStaticProperties(_AuthLayout, {
  Title,
  Subtitle,
  Header,
})
