import { Tabs } from "expo-router"
import { HomeSmileIcon } from "@repo/app/icons/home-smile"
import { CalendarPlus01Icon } from "@repo/app/icons/calendar-plus-01"
import { UserCircleIcon } from "@repo/app/icons/user-circle"
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
          tabBarIcon: ({ size, color }) => (
            <HomeSmileIcon size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="appointments"
        options={{
          title: "Appointments",
          tabBarIcon: ({ size, color }) => (
            <CalendarPlus01Icon size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Me",
          tabBarIcon: ({ size, color }) => (
            <UserCircleIcon size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
