import { ForgotPasswordScreen } from "@repo/app/features/auth/forgot-password-screen"
import { AuthLayout } from "@repo/app/features/auth/layout.native"

export default function Screen() {
  return (
    <AuthLayout>
      <AuthLayout.Header>
        <AuthLayout.Title>Reset your password</AuthLayout.Title>
        <AuthLayout.Subtitle>
          Enter the email address you use to sign in to your account and we'll
          email you a link to reset your password.
        </AuthLayout.Subtitle>
      </AuthLayout.Header>
      <ForgotPasswordScreen />
    </AuthLayout>
  )
}
