import { House, List, MapPin, Wallet, YoutubeLogo } from 'phosphor-react-native'

import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#193125',
        tabBarStyle: {
          backgroundColor: '#B7CABE',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <House size={size} color={color} weight="bold" />
          ),
        }}
      />

      <Tabs.Screen
        name="playlist"
        options={{
          tabBarIcon: ({ color, size }) => (
            <YoutubeLogo size={size} color={color} weight="bold" />
          ),
        }}
      />

      <Tabs.Screen
        name="tithes"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Wallet size={size} color={color} weight="bold" />
          ),
        }}
      />

      <Tabs.Screen
        name="map"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MapPin size={size} color={color} weight="bold" />
          ),
        }}
      />

      <Tabs.Screen
        name="menu"
        options={{
          tabBarIcon: ({ color, size }) => (
            <List size={size} color={color} weight="bold" />
          ),
        }}
      />
    </Tabs>
  )
}
