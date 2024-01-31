import { SignInScreen } from "@repo/app/features/auth/sign-in-screen"
import { AuthLayout } from "@repo/app/features/auth/layout.web"
import Head from "next/head"
import { guestOnlyGetSSP } from "../utils/guestOnly"

const Page = () => (
  <>
    <Head>
      <title>Sign in</title>
    </Head>
    <AuthLayout>
      <AuthLayout.Header>
        <AuthLayout.Title>Log in to your account</AuthLayout.Title>
        <AuthLayout.Subtitle>
          Welcome back! Please enter your details.
        </AuthLayout.Subtitle>
      </AuthLayout.Header>
      <SignInScreen />
    </AuthLayout>
  </>
)

export const getServerSideProps = guestOnlyGetSSP()

export default Page
