import { auth } from "@repo/app/lib/firebase"
import Cookies from "js-cookie"
import { useEffect } from "react"

export const useSetAuthCookie = () => {
  useEffect(() => {
    return auth.onAuthStateChanged(async (user) => {
      if (!user) {
        Cookies.remove("token")
      }
    })
  })

  useEffect(() => {
    return auth.onIdTokenChanged(async (user) => {
      const token = await user?.getIdToken()

      if (token) {
        Cookies.set("token", token)
      }
    })
  })
}
