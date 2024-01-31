import { withStaticProperties } from "@repo/ui"
import { View, styled } from "@repo/ui"

export const _HomeLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <View>{children}</View>
}

const Container = styled(View, {
  width: "100%",
  maxWidth: "$container.lg",
  marginHorizontal: "auto",
  padding: "$4",
})

export const HomeLayout = withStaticProperties(_HomeLayout, {
  Container,
})
