import { Text as TextBase, styled } from "@tamagui/core"

export const Text = styled(TextBase, {
  name: "Text",
  fontFamily: "$body",
  fontWeight: "400",

  variants: {
    size: {
      "...fontSize": (size, { tokens, font, fontFamily, props }) => {
        if (!font) {
          if (process.env.NODE_ENV === "development") {
            console.warn(
              `Warning: No font found in props`,
              { ...props },
              `For a sized text component, you either need to set fontFamily directly, or through the "defaultFont" setting in your createTamagui config.`
            )
          }
          return {}
        }

        if (typeof size !== "string") {
          if (process.env.NODE_ENV === "development") {
            console.warn(
              `Warning: Size property passed to text was not a string.`,
              { ...props },
              ``
            )
          }
          return {}
        }

        const fontSize = font.size[size]
        const lineHeight = font.lineHeight?.[size]
        const fontWeight = font.weight?.[size]
        const letterSpacing = font.letterSpacing?.[size]
        const textTransform = font.transform?.[size]

        const style = {
          textTransform,
          fontFamily,
          fontWeight,
          letterSpacing,
          fontSize,
          lineHeight,
        }

        return style
      },
    },
  },
})
