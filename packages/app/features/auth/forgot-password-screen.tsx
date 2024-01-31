import { RootError, SchemaForm, formFields } from "../../lib/SchemaForm"
import { z } from "zod"
import { useAuthState } from "../../provider/AuthProvider"
import { FirebaseError } from "firebase/app"
import { FormProvider, useForm } from "react-hook-form"
import { Button, isWeb } from "@repo/ui"
import { View, Text } from "@repo/ui"
import { Link } from "solito/link"
import { useState } from "react"
import { useRouter } from "solito/router"

const ForgotPasswordSchema = z.object({
  email: formFields.text.email().describe("Email // Enter your email"),
})

export const ForgotPasswordScreen = () => {
  const auth = useAuthState()
  const [success, setSuccess] = useState(false)

  async function onSubmit(data: z.infer<typeof ForgotPasswordSchema>) {
    try {
      await auth.requestPasswordReset(data)
      setSuccess(true)
    } catch (e: FirebaseError | unknown) {
      form.setError("root", {
        message: `An error occurred: ${(e as any).message || (e as any).code}`,
      })
    }
  }

  const form = useForm<z.infer<typeof ForgotPasswordSchema>>()

  if (success) {
    return <SuccessfulReset />
  }

  return (
    <FormProvider {...form}>
      <SchemaForm
        form={form}
        formProps={{
          gap: "$3",
          flex: "1",
        }}
        schema={ForgotPasswordSchema}
        defaultValues={{
          email: "",
        }}
        onSubmit={onSubmit}
        renderBefore={() => <RootError />}
        renderAfter={({ submit }) => (
          <View
            flex={1}
            flexShrink={0}
            justifyContent={isWeb ? "flex-start" : "flex-end"}
            marginTop="$5"
          >
            <Button onPress={submit} isLoading={form.formState.isSubmitting}>
              <Button.Text>Request password reset</Button.Text>
            </Button>

            <View
              marginTop="$6"
              display="flex"
              flexDirection="row"
              gap="$1"
              justifyContent="center"
            >
              <Link href="/sign-in">
                <Text fontWeight="500" color="$brand.700" size="$md">
                  Back to sign in
                </Text>
              </Link>
            </View>
          </View>
        )}
      />
    </FormProvider>
  )
}

const SuccessfulReset = () => {
  const router = useRouter()

  return (
    <View flex={1} gap="$5">
      <Text size="$md">
        If this email address was used to create an account, instructions to
        reset your password will be sent to you. Please check your email.
      </Text>

      <Button onPress={() => router.push("/sign-in")}>
        <Button.Text>Back to sign in</Button.Text>
      </Button>
    </View>
  )
}
