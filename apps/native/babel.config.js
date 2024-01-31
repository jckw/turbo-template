const path = require("path")

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "transform-inline-environment-variables",
        {
          include: Object.keys(process.env).filter((key) =>
            key.startsWith("EXPO_PUBLIC_")
          ),
        },
      ],
    ],
  }
}
