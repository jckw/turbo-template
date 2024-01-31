import { AuthProvider } from "./AuthProvider"
import { SafeAreaProvider } from "./SafeAreaProvider"
import { TamaguiProvider } from "./TamaguiProvider"

const compose = (providers: React.FC<{ children: React.ReactNode }>[]) =>
  providers.reduce((Prev, Curr) => ({ children }) => {
    const Provider = Prev ? (
      <Prev>
        <Curr>{children}</Curr>
      </Prev>
    ) : (
      <Curr>{children}</Curr>
    )
    return Provider
  })

const Providers = compose([SafeAreaProvider, TamaguiProvider])

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <AuthProvider>{children}</AuthProvider>
    </Providers>
  )
}
