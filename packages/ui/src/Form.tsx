import { Stack, StackProps, styled } from "@tamagui/core"

export type FormProps = StackProps & {
  onSubmit: () => void
}

export const Form = styled(Stack, {
  name: "Form",
  tag: "form",
})
