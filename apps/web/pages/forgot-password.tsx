import { ForgotPasswordScreen } from "@repo/app/features/auth/forgot-password-screen"
import Head from "next/head"
import { guestOnlyGetSSP } from "../utils/guestOnly"
import { AuthLayout } from "@repo/app/features/auth/layout.web"

const Page = () => (
  <>
    <Head>
      <title>Reset password</title>
    </Head>
    <AuthLayout>
      <AuthLayout.Header>
        <AuthLayout.Title>Request a password reset</AuthLayout.Title>
        <AuthLayout.Subtitle>
          Enter the email address you use to sign in to your account.
        </AuthLayout.Subtitle>
      </AuthLayout.Header>
      <ForgotPasswordScreen />
    </AuthLayout>
  </>
)

export const getServerSideProps = guestOnlyGetSSP()

export default Page
