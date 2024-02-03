import { createMedia } from "@tamagui/react-native-media-driver"
import { createFont, createTamagui, createTokens, isWeb } from "@tamagui/core"
export { TamaguiProvider } from "@tamagui/core"

const displayFont = createFont({
  family: isWeb ? "Clash Display, var(--font-clash-display)" : "Clash Display",
  size: {
    base: 16,
    xs: 10,
    sm: 12,
    md: 18,
    lg: 24,
    xl: 32,
    "2xl": 48,
  },

  face: {
    // Note: these should reflect the alias defined in the dynamic loading of the font
    // in _layout.tsx
    400: { normal: "ClashDisplayRegular" },
    500: { normal: "ClashDisplayMedium" },
    600: { normal: "ClashDisplaySemibold" },
    700: { normal: "ClashDisplayBold" },
  },
})

const bodyFont = createFont({
  family: isWeb ? "Inter, var(--font-inter), sans-serif" : "Inter",
  size: {
    base: 16,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
  },
  lineHeight: {
    base: 24,
    xs: 18,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 30,
  },

  face: {
    400: { normal: "Inter_400Regular" },
    500: { normal: "Inter_500Medium" },
    // Note: If you're seeing an error "<font> is not a system font..." then you are
    // probably using "bold" instead of "700" etc. for the weight
  },
})

const tokens = createTokens({
  color: {
    white: "#ffffff",
    black: "#000000",
    "gray.25": "#fcfcfd",
    "gray.50": "#f9fafb",
    "gray.100": "#f2f4f7",
    "gray.200": "#eaecf0",
    "gray.300": "#d0d5dd",
    "gray.400": "#98a2b3",
    "gray.500": "#667085",
    "gray.600": "#475467",
    "gray.700": "#344054",
    "gray.800": "#182230",
    "gray.900": "#101828",
    "gray.950": "#0c111d",
    "brand.25": "#f4f9fb",
    "brand.50": "#eef6f9",
    "brand.100": "#e0eff4",
    "brand.200": "#b9dce7",
    "brand.300": "#96cbdc",
    "brand.400": "#72b9d0",
    "brand.500": "#4ba6c3",
    "brand.600": "#2191b5",
    "brand.700": "#0081aa",
    "brand.800": "#016585",
    "brand.900": "#014d66",
    "brand.950": "#002e3d",
    "error.25": "#fffbfa",
    "error.50": "#fef3f2",
    "error.100": "#fee4e2",
    "error.200": "#fecdca",
    "error.300": "#fda29b",
    "error.400": "#f97066",
    "error.500": "#f04438",
    "error.600": "#d92d20",
    "error.700": "#b42318",
    "error.800": "#912018",
    "error.900": "#7a271a",
    "error.950": "#55160c",
    "wine.25": "#fff6f5",
    "wine.50": "#fff2f1",
    "wine.100": "#ffe3e1",
    "wine.200": "#ffcbc7",
    "wine.300": "#ffa7a0",
    "wine.400": "#ff786e",
    "wine.500": "#f8483b",
    "wine.600": "#e52b1d",
    "wine.700": "#c12014",
    "wine.800": "#a01e14",
    "wine.900": "#841f18",
    "wine.950": "#480b07",
    "green.25": "#f8fcfb",
    "green.50": "#f1faf7",
    "green.100": "#def3ec",
    "green.200": "#b2e2d2",
    "green.300": "#84d2b8",
    "green.400": "#5bc3a0",
    "green.500": "#28b082",
    "green.600": "#00a16b",
    "green.700": "#007c56",
    "green.800": "#036245",
    "green.900": "#04503a",
    "green.950": "#012d22",
    "warning.25": "#fffcf5",
    "warning.50": "#fffaeb",
    "warning.100": "#fef0c7",
    "warning.200": "#fedf89",
    "warning.300": "#fec84b",
    "warning.400": "#fdb022",
    "warning.500": "#f79009",
    "warning.600": "#dc6803",
    "warning.700": "#b54708",
    "warning.800": "#93370d",
    "warning.900": "#7a2e0e",
    "warning.950": "#4e1d09",
    "success.25": "#f6fef9",
    "success.50": "#ecfdf3",
    "success.100": "#dcfae6",
    "success.200": "#abefc6",
    "success.300": "#75e0a7",
    "success.400": "#47cd89",
    "success.500": "#17b26a",
    "success.600": "#079455",
    "success.700": "#067647",
    "success.800": "#085d3a",
    "success.900": "#074d31",
    "success.950": "#053321",
  },
  space: {
    0: 0,
    1: 4,
    "1.5": 6,
    2: 8,
    "2.5": 10,
    3: 12,
    4: 16,
    5: 24,
    6: 32,
    7: 48,
  },
  size: {},
  radius: {},
  zIndex: {},
  container: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
})

export const config = createTamagui({
  tokens,
  defaultFont: "body",
  fonts: {
    body: bodyFont,
    display: displayFont,
  },
  themes: {
    light: {},
  },

  media: createMedia({
    xs: { maxWidth: 660 },
    gtXs: { minWidth: 660 + 1 },
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    md: { maxWidth: 980 },
    gtMd: { minWidth: 980 + 1 },
    lg: { maxWidth: 1120 },
    gtLg: { minWidth: 1120 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" },
  }),
})

type AppConfig = typeof config

declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends AppConfig {}
}
