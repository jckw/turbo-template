import { useStringFieldInfo, useTsController } from "@ts-react/form"
import { useId } from "react"
import { Stack } from "@tamagui/core"
import { Text } from "./Text"
import { InputProps, Input } from "./Input"

type TextFieldProps = Pick<InputProps, "autoFocus" | "secureTextEntry">

export const TextField = (props: TextFieldProps): JSX.Element => {
  const {
    field,
    error,
    formState: { isSubmitting },
  } = useTsController<string>()
  const { label, placeholder, isOptional, maxLength, isEmail } =
    useStringFieldInfo()
  const id = useId()
  const disabled = isSubmitting

  return (
    <Stack gap="$1.5">
      {!!label && (
        <Text size="$sm" fontWeight="500">
          {label} {isOptional && `(Optional)`}
        </Text>
      )}
      <Input
        disabled={disabled}
        maxLength={maxLength}
        placeholderTextColor="$gray.500"
        spellCheck={isEmail ? false : undefined}
        autoCapitalize={isEmail ? "none" : undefined}
        keyboardType={isEmail ? "email-address" : undefined}
        value={field.value || ""}
        onChangeText={(text) => field.onChange(text)}
        onBlur={field.onBlur}
        ref={field.ref}
        placeholder={placeholder}
        id={id}
        borderColor={error ? "$error.300" : undefined}
        {...props}
      />
      <Stack>
        {!!error && (
          <Text size="$sm" color="$error.500">
            {error.errorMessage}
          </Text>
        )}
      </Stack>
    </Stack>
  )
}
