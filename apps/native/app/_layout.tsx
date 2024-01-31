import { SplashScreen, Stack, useRouter } from "expo-router"
import { useCallback, useEffect, useState } from "react"
import { View } from "react-native"
import { Provider } from "@repo/app/provider"
import { useFonts } from "expo-font"
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter"
import { useAuthState } from "@repo/app/provider/AuthProvider"

// import { LogBox } from 'react-native'

// LogBox.ignoreAllLogs()

SplashScreen.preventAutoHideAsync()

function HomeLayoutInner() {
  const [fontsLoaded] = useFonts({
    ClashDisplayBold: require("../assets/fonts/ClashDisplay-Bold.otf"),
    ClashDisplaySemibold: require("../assets/fonts/ClashDisplay-Semibold.otf"),
    ClashDisplayMedium: require("../assets/fonts/ClashDisplay-Medium.otf"),
    ClashDisplayRegular: require("../assets/fonts/ClashDisplay-Regular.otf"),

    Inter_400Regular,
    Inter_500Medium,
  })

  const [initialNavigationDone, setInitialNavigationDone] = useState(false)
  const auth = useAuthState()
  const router = useRouter()

  const [ready, setReady] = useState(false)

  useEffect(
    function hideSplashScreen() {
      if (!fontsLoaded || auth.isLoading || !ready) return

      if (!auth.user) {
        router.push("/sign-in")
      }

      setTimeout(() => {
        setInitialNavigationDone(true)
        SplashScreen.hideAsync()
      }, 100)
    },
    [ready, fontsLoaded, auth.isLoading]
  )

  const onLayoutRootView = useCallback(async () => {
    setReady(true)
  }, [])

  // Prevent screens rendering without fonts
  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: initialNavigationDone ? "default" : "none",
        }}
        initialRouteName={auth.user ? "/" : "/sign-in"}
      />
    </View>
  )
}

export default function HomeLayout() {
  return (
    <Provider>
      <HomeLayoutInner />
    </Provider>
  )
}
