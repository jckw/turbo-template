import { RootError, SchemaForm, formFields } from "../../lib/SchemaForm"
import { z } from "zod"
import { useAuthState } from "../../provider/AuthProvider"
import { FirebaseError } from "firebase/app"
import { FormProvider, useForm } from "react-hook-form"
import { Button, isWeb } from "@repo/ui"
import { View, Text } from "@repo/ui"
import { Link } from "solito/link"

const SignUpSchema = z.object({
  name: formFields.text.describe("Name // Enter your name"),
  email: formFields.text.email().describe("Email // Enter your email"),
  password: formFields.text.min(6).describe("Password // Create a password"),
})

export const SignUpScreen = () => {
  const auth = useAuthState()

  async function onSubmit(data: z.infer<typeof SignUpSchema>) {
    try {
      await auth.signUp(data)
    } catch (e: FirebaseError | unknown) {
      if (!(e instanceof FirebaseError)) {
        form.setError("root", {
          message: `An error occurred: ${(e as any).message}`,
        })
        return
      }

      switch (e?.code) {
        case "auth/email-already-in-use":
          form.setError("root", {
            ...e,
            message: "Email address already in use",
          })
          return
        default:
          form.setError("root", {
            ...e,
            message: `An error occurred: ${e.code}`,
          })
          return
      }
    }
  }

  const form = useForm<z.infer<typeof SignUpSchema>>()

  return (
    <FormProvider {...form}>
      <SchemaForm
        form={form}
        formProps={{
          gap: "$3",
          flex: "1",
        }}
        schema={SignUpSchema}
        defaultValues={{
          name: "",
          email: "",
          password: "",
        }}
        props={{
          password: {
            secureTextEntry: true,
          },
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
              <Button.Text>Get started</Button.Text>
            </Button>

            <View
              marginTop="$6"
              display="flex"
              flexDirection="row"
              gap="$1"
              justifyContent="center"
            >
              <Text color="$gray.600">Already have an account? </Text>
              <Link href="/sign-in" viewProps={{ style: {} }}>
                <Text fontWeight="500" color="$brand.700">
                  Sign in
                </Text>
              </Link>
            </View>
          </View>
        )}
      />
    </FormProvider>
  )
}
