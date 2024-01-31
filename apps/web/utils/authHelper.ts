import Cookies from "cookies"
import { GetServerSidePropsContext } from "next"
import { firebaseAdmin } from "@repo/app/lib/firebase/admin"

export const isRequestAuthed = async (ctx: GetServerSidePropsContext) => {
  const cookies = new Cookies(ctx.req, ctx.res)
  const idToken = cookies.get("token")

  if (!idToken) {
    return false
  }

  try {
    await firebaseAdmin.auth().verifyIdToken(idToken)
    return true
  } catch {
    return false
  }
}
