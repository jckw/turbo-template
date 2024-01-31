import localFont from "next/font/local"
import { Inter } from "next/font/google"
import { Provider } from "@repo/app/provider"
import type { AppProps } from "next/app"
import "@tamagui/core/reset.css"
import { useSetAuthCookie } from "../utils/useSetAuthCookie"

const clashDisplayFont = localFont({
  variable: "--font-clash-display",
  src: [
    {
      path: "../fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
})

const interFont = Inter({ variable: "--font-inter", subsets: ["latin"] })

if (process.env.NODE_ENV === "production") {
  require("../public/tamagui.css")
}

export default function MyApp({ Component, pageProps }: AppProps) {
  useSetAuthCookie()

  return (
    <main
      className={`${clashDisplayFont.variable} ${interFont.variable} ${interFont.className}`}
    >
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </main>
  )
}
