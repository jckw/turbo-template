import { Stack, withStaticProperties, Text } from "@repo/ui"

const _AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      minHeight="80dvh"
      gap="$6"
      paddingTop="$6"
    >
      <Stack height="340px" maxWidth="360px" width="100%">
        {children}
      </Stack>
    </Stack>
  )
}

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Text fontFamily="$display" size="$xl" color="$gray.900" textAlign="center">
      {children}
    </Text>
  )
}

const Subtitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Text color="$gray.600" textAlign="center" size="$md">
      {children}
    </Text>
  )
}

const Header: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Stack gap="$2" marginBottom="$6">
      {children}
    </Stack>
  )
}

export const AuthLayout = withStaticProperties(_AuthLayout, {
  Title,
  Subtitle,
  Header,
})
