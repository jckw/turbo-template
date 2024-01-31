const { withTamagui } = require("@tamagui/next-plugin")

const tamaguiPlugin = withTamagui({
  config: "../../packages/ui/src/tamagui.config.ts",
  components: ["@repo/ui"],
  outputCSS:
    process.env.NODE_ENV === "production" ? "./public/tamagui.css" : null,
  doesMutateThemes: false,
})

const config = {
  output: "standalone",
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web",
    }
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ]
    return config
  },
  transpilePackages: ["@repo/app", "solito"],
}

module.exports = {
  ...config,
  ...tamaguiPlugin(config),
}
