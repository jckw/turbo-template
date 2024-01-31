import { SignInScreen } from "@repo/app/features/auth/sign-in-screen"
import { AuthLayout } from "@repo/app/features/auth/layout.native"

export default function Screen() {
  return (
    <AuthLayout>
      <AuthLayout.Header>
        <AuthLayout.Title>Sign in with Email</AuthLayout.Title>
        <AuthLayout.Subtitle>
          Sign in with your email address and password.
        </AuthLayout.Subtitle>
      </AuthLayout.Header>
      <SignInScreen />
    </AuthLayout>
  )
}
