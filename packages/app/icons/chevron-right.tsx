import { Svg, ClipPath, Defs, G, Path, Rect } from "react-native-svg"
import { IconProps } from "./helpers"
import { styled } from "@repo/ui"

const _ChevronRightIcon = ({ color, size, ...rest }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      color={color || undefined}
      {...rest}
    >
      <G clip-path="url(#clip0_7577_3500)">
        <Path
          d="M9 18L15 12L9 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z"
          fill="currentColor"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_7577_3500">
          <Rect height={size} width={size} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export const ChevronRightIcon = styled(_ChevronRightIcon, {})
