import { ColorTokens, SizeTokens, ThemeTokens } from "@tamagui/core"
import { SvgProps } from "react-native-svg"

export type BaseIconProps = {
  size?: number | SizeTokens
  strokeWidth?: number | SizeTokens
  color?: (ColorTokens | ThemeTokens | (string & {})) | null
  disableTheme?: boolean
  style?: SvgProps["style"]
}

export type IconProps = Omit<SvgProps, keyof BaseIconProps> & BaseIconProps

const BASE_STROKE_WIDTH = 2 // from figma, at 24x24

export const relativeStroke = (size?: number | SizeTokens) => {
  if (typeof size === "number") return (size / 24) * BASE_STROKE_WIDTH

  return size
}
