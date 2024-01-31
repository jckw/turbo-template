import { Stack, Text, View, useMedia, isWeb } from "@repo/ui"

export const HomeScreen = () => {
  const media = useMedia()

  return (
    <>
      <Stack
        gap={isWeb ? "$6" : "$4"}
        flex={1}
        flexDirection={media.gtSm ? "row" : "column"}
      >
        <Stack gap="$4" flex={media.gtSm ? 1 : 0}>
          <Text fontFamily="$display" size="$lg">
            Your Focus
          </Text>
        </Stack>

        {isWeb ? null : <View borderTopWidth={1} borderColor="$gray.200" />}
        <Stack gap="$4" flex={1}>
          <Text fontFamily="$display" size="$lg">
            Care Plan
          </Text>
        </Stack>
      </Stack>
    </>
  )
}
