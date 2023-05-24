import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins'
import React, { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router'

import { StatusBar } from 'expo-status-bar'
import Toast from 'react-native-toast-message'

export { ErrorBoundary } from 'expo-router'

export const unstable_settings = {
  initialRouteName: '(tabs)',
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  })

  useEffect(() => {
    if (error) throw error
  }, [error])

  return (
    <>
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  )
}

function RootLayoutNav() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="downloads"
          options={{
            title: 'Downloads',
          }}
        />
        <Stack.Screen
          name="[...missing]"
          options={{
            title: 'Página não encontrada',
          }}
        />
      </Stack>
      <Toast />
      <StatusBar style="dark" />
    </>
  )
}
