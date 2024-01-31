import { isWeb } from "@repo/ui"
import { FirebaseOptions, initializeApp } from "firebase/app"
import { initializeAuth } from "firebase/auth"
import { persistence } from "./persistence"

const config: FirebaseOptions = isWeb
  ? {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    }
  : {
      apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
    }

export const app = initializeApp(config)
export const auth = initializeAuth(app, {
  persistence,
})
