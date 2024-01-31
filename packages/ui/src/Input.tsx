import {
  ColorStyleProp,
  GetProps,
  isWeb,
  styled,
  useTheme,
} from "@tamagui/core"
import { useFocusable } from "@tamagui/focusable"
import { TextInput } from "react-native"

export const defaultStyles = {
  paddingHorizontal: 14,
  paddingVertical: 10,
  borderRadius: 8,
  borderColor: "$gray.200",

  // fontFamily: "$body",
  borderWidth: 1,
  outlineWidth: 0,

  color: "$gray.900",
  fontSize: "$md",

  ...(isWeb
    ? {
        tabIndex: 0,
      }
    : {
        focusable: true,
      }),

  // this fixes a flex bug where it overflows container
  minWidth: 0,

  hoverStyle: {
    // borderColor: "$borderColorHover",
  },

  focusStyle: {
    // outlineColor: "$borderColorFocus",
    outlineWidth: 2,
    outlineStyle: "solid",
    // borderColor: "$borderColorFocus",
  },
} as const

export const InputFrame = styled(TextInput, {
  name: "Input",

  variants: {
    unstyled: {
      false: defaultStyles,
    },
  } as const,

  defaultVariants: {
    unstyled: false,
  },
})

export type InputProps = GetProps<typeof InputFrame>

export const Input = InputFrame.styleable<InputProps>((propsIn, ref) => {
  const props = useInputProps(propsIn, ref)
  return <InputFrame {...props} />
})

export function useInputProps(props: InputProps, ref: any) {
  const { onChangeText, ref: combinedRef } = useFocusable({
    props,
    ref,
    isInput: true,
  })

  return {
    ref: combinedRef,
    editable: !props.disabled,
    ...props,
    onChangeText,
  }
}
