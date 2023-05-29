import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins'
import { SplashScreen, Stack } from 'expo-router'
import React, { useEffect } from 'react'

import { StatusBar } from 'expo-status-bar'
import Toast from 'react-native-toast-message'

export { ErrorBoundary } from 'expo-router'

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  })

  useEffect(() => {
    if (error) throw error
  }, [error])

  return loaded ? <RootLayoutNav /> : <SplashScreen />
}

function RootLayoutNav() {
  return (
    <>
      <Stack
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontFamily: 'Poppins_700Bold',
          },
        }}
        initialRouteName="(tabs)"
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="downloads"
          options={{
            title: 'Downloads',
          }}
        />

        <Stack.Screen
          name="babyPresentation"
          options={{
            title: 'Apresentação de bebês',
          }}
        />

        <Stack.Screen
          name="prayerRequest"
          options={{
            title: 'Pedidos de oração',
          }}
        />

        <Stack.Screen
          name="[...missing]"
          options={{
            title: 'Em breve 🔒',
          }}
        />
      </Stack>
      <Toast />
      <StatusBar style="dark" />
    </>
  )
}
