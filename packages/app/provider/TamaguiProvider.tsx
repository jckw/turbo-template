import { config, TamaguiProvider as TamaguiProviderOG } from "@repo/ui"

export const TamaguiProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <TamaguiProviderOG
      config={config}
      disableInjectCSS
      disableRootThemeClass
      defaultTheme="light"
    >
      {children}
    </TamaguiProviderOG>
  )
}
