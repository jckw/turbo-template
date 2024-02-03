import { Tabs } from "expo-router"
import React from "react"
import { View, Text, getVariable } from "@repo/ui"

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: true,
        tabBarBackground: () => <View backgroundColor="#FAFAF9" />,
        tabBarLabel: ({ children, color }) => (
          <Text size="$xs" fontWeight="500" color={color}>
            {children}
          </Text>
        ),
        tabBarStyle: {
          paddingTop: 10,
          height: 90,
        },
        tabBarActiveTintColor: getVariable("$brand.600"),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Me",
        }}
      />
    </Tabs>
  )
}
