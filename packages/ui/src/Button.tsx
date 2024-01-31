import {
  View,
  styled,
  createStyledContext,
  withStaticProperties,
  Stack,
  TamaguiElement,
} from "@tamagui/core"
import { Text } from "./Text"
import { ActivityIndicator, StyleSheet } from "react-native"
import React from "react"

const ButtonContext = createStyledContext<{
  size: "sm" | "md" | "lg"
  variant: "primary" | "secondary"
  isLoading: boolean
}>({
  size: "md",
  variant: "primary",
  isLoading: false,
})

const ButtonFrame = styled(View, {
  name: "ButtonFrame",
  context: ButtonContext,
  tag: "button",
  focusable: true,
  role: "button",
  cursor: "pointer",

  borderRadius: 9999,

  pressStyle: {
    opacity: 0.9,
  },

  variants: {
    size: {
      sm: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
      },
      md: {
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 30,
        paddingRight: 30,
      },
      lg: {
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 40,
        paddingRight: 40,
      },
    },
    isLoading: {
      true: {},
      false: {},
    },
    variant: {
      primary: {
        backgroundColor: "$brand.800",
        hoverStyle: {
          backgroundColor: "$brand.900",
        },
      },
      secondary: {
        backgroundColor: "$brand.200",
        hoverStyle: {
          backgroundColor: "$brand.300",
        },
      },
    },
  },
})

const _ActivityIndicator = React.forwardRef<TamaguiElement>(
  (props: React.ComponentProps<typeof ActivityIndicator>, ref) => {
    // Hack to change the color of the spinner based on the parent variant
    const flatStyles = { color: undefined, ...StyleSheet.flatten(props.style) }
    return (
      <Stack
        ref={ref}
        {...{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator {...props} color={flatStyles.color} />
      </Stack>
    )
  }
)

const ButtonSpinner = styled(_ActivityIndicator, {
  name: "ButtonSpinner",
  context: ButtonContext,

  variants: {
    isLoading: {
      true: {
        color: "$white",
      },
      false: {
        display: "none",
      },
    },
  },
})

const ButtonText = styled(Text, {
  name: "ButtonText",
  context: ButtonContext,

  fontWeight: "500",
  textAlign: "center",

  variants: {
    isLoading: {
      true: {
        opacity: 0,
      },
      false: {
        opacity: 1,
      },
    },
    size: {
      sm: {
        fontSize: "$sm",
      },
      md: {
        fontSize: "$md",
      },
      lg: {
        fontSize: "$lg",
      },
    },
    variant: {
      primary: {
        color: "$white",
      },
      secondary: {
        color: "$brand.800",
      },
    },
  },
})

const _Button = ({
  children,
  ...props
}: React.ComponentProps<typeof ButtonFrame>) => {
  return (
    <ButtonFrame {...props}>
      <ButtonSpinner />
      {children}
    </ButtonFrame>
  )
}

export const Button = withStaticProperties(_Button, {
  Props: ButtonContext.Provider,
  Text: ButtonText,
})
