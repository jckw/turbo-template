import { SignUpScreen } from "@repo/app/features/auth/sign-up-screen"
import Head from "next/head"
import { guestOnlyGetSSP } from "../utils/guestOnly"
import { AuthLayout } from "@repo/app/features/auth/layout.web"

const Page = () => (
  <>
    <Head>
      <title>Sign in</title>
    </Head>
    <AuthLayout>
      <AuthLayout.Header>
        <AuthLayout.Title>Create an account</AuthLayout.Title>
        <AuthLayout.Subtitle>Get started with this app.</AuthLayout.Subtitle>
      </AuthLayout.Header>
      <SignUpScreen />
    </AuthLayout>
  </>
)

export const getServerSideProps = guestOnlyGetSSP()

export default Page
