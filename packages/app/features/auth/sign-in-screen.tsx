import { RootError, SchemaForm, formFields } from "../../lib/SchemaForm"
import { z } from "zod"
import { useAuthState } from "../../provider/AuthProvider"
import { FirebaseError } from "firebase/app"
import { FormProvider, useForm } from "react-hook-form"
import { Button, isWeb } from "@repo/ui"
import { View, Text } from "@repo/ui"
import { Link } from "solito/link"

const SignInSchema = z.object({
  email: formFields.text.email().describe("Email // Enter your email"),
  password: formFields.text.min(6).describe("Password // Enter your password"),
})

export const SignInScreen = () => {
  const auth = useAuthState()

  async function onSubmit(data: z.infer<typeof SignInSchema>) {
    try {
      await auth.signIn(data)
    } catch (e: FirebaseError | unknown) {
      if (!(e instanceof FirebaseError)) {
        form.setError("root", {
          message: `An error occurred: ${(e as any).message}`,
        })
        return
      }

      switch (e?.code) {
        case "auth/invalid-credential":
          form.setError("root", { ...e, message: "Invalid email or password" })
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

  const form = useForm<z.infer<typeof SignInSchema>>()

  return (
    <FormProvider {...form}>
      <SchemaForm
        form={form}
        formProps={{
          gap: "$3",
          flex: "1",
        }}
        schema={SignInSchema}
        defaultValues={{
          email: "",
          password: "",
        }}
        props={{
          password: {
            secureTextEntry: true,
            afterElement: (
              <Link href="/forgot-password">
                <Text fontWeight="500" color="$brand.700">
                  Forgot password
                </Text>
              </Link>
            ),
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
              <Button.Text>Sign in</Button.Text>
            </Button>

            {isWeb ? (
              <View
                marginTop="$6"
                display="flex"
                flexDirection="row"
                gap="$1"
                justifyContent="center"
              >
                <Text color="$gray.600">Don't have an account? </Text>
                <Link href="/sign-up" viewProps={{ style: {} }}>
                  <Text fontWeight="500" color="$brand.700">
                    Sign up
                  </Text>
                </Link>
              </View>
            ) : null}
          </View>
        )}
      />
    </FormProvider>
  )
}
