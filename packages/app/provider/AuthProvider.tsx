import { createContext, useState, useContext, useEffect } from "react"
import { auth } from "../lib/firebase"
import {
  signInWithEmailAndPassword,
  User,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth"
import { useRouter } from "solito/router"

type AuthCredentials = {
  email: string
  password: string
}

type SignUpCredentials = AuthCredentials & {
  name: string
}

export const AuthContext = createContext({
  user: null as null | User,
  isLoading: true,
  signIn: (credentials: AuthCredentials) => Promise.resolve(),
  signUp: (credentials: SignUpCredentials) => Promise.resolve(),
  signOut: () => Promise.resolve(),
  requestPasswordReset: (credentials: { email: string }) => Promise.resolve(),
  confirmPasswordReset: () => Promise.resolve(),
})

export const useAuthState = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider")
  }

  return context
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<null | User>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    auth.authStateReady().then(() => {
      setUser(auth.currentUser)
      setIsLoading(false)
    })
  }, [])

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      setUser(user)
    })
  }, [])

  const signIn = async ({ email, password }: AuthCredentials) => {
    return signInWithEmailAndPassword(auth, email, password).then(() => {
      router.push("/")
    })
  }

  const signUp = async ({ email, password, name }: SignUpCredentials) => {
    // Note: Nothing happens with the name right now
    return createUserWithEmailAndPassword(auth, email, password).then(() => {
      router.push("/")
    })
  }

  const signOut = async () => {
    return auth.signOut().then(() => {
      router.push("/sign-in")
    })
  }

  const requestPasswordReset = async ({ email }: { email: string }) => {
    return sendPasswordResetEmail(auth, email)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        signIn,
        signUp,
        signOut,
        requestPasswordReset,
        confirmPasswordReset: () => Promise.resolve(),
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
