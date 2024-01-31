import { Form, TextField, Text } from "@repo/ui"
import { createTsForm } from "@ts-react/form"
import { useFormContext } from "react-hook-form"
import { z } from "zod"

export const formFields = {
  text: z.string(),
}

const mapping = [[formFields.text, TextField] as const] as const

const FormComponent = ({
  children,
  ...props
}: {
  onSubmit: () => void
  children: React.ReactNode
}) => {
  return (
    <Form gap="$4" {...props}>
      {children}
    </Form>
  )
}

export const SchemaForm = createTsForm(mapping, { FormComponent })

export const RootError = () => {
  const context = useFormContext()
  const errorMessage = context?.formState?.errors?.root?.message

  if (!errorMessage) {
    return null
  }

  return (
    <Text size="$md" color="$error.500">
      {errorMessage}
    </Text>
  )
}
